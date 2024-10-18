import React from 'react';
import styled from '@emotion/styled';

type ReservationFormProps = {
  onSubmit: (data: FormData) => void;
};

type FormData = {
  level: string;
  startDate: string;
  endDate: string;
  planType: string;
  smoking: boolean;
  couponUse: boolean;
  pointUse: boolean;
};

const ReservationForm: React.FC<ReservationFormProps> = ({ onSubmit }) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data: FormData = {
      level: formData.get('level') as string,
      startDate: formData.get('startDate') as string,
      endDate: formData.get('endDate') as string,
      planType: formData.get('planType') as string,
      smoking: formData.get('smoking') === 'on',
      couponUse: formData.get('couponUse') === 'on',
      pointUse: formData.get('pointUse') === 'on',
    };
    onSubmit(data);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Label>
        出力レベル
        <Select name="level">
          <option value="節">節</option>
          <option value="細節">細節</option>
          <option value="明細">明細</option>
        </Select>
      </Label>
      <Label>
        範囲指定
        <Input type="date" name="startDate" />
        〜
        <Input type="date" name="endDate" />
      </Label>
      <Label>
        集計対象
        <Input type="radio" name="planType" value="全体" defaultChecked /> 全体
        <Input type="radio" name="planType" value="ブロック" /> ブロック
        <Input type="radio" name="planType" value="セグメント" /> セグメント
      </Label>
      <Label>
        <Input type="checkbox" name="smoking" /> 前月繰越行のみで判定する
      </Label>
      <Label>
        <Input type="checkbox" name="couponUse" /> 摘要欄に工事名を印字する
      </Label>
      <Label>
        <Input type="checkbox" name="pointUse" /> 摘要欄に単価名称を印字する
      </Label>
      <Buttons>
        <Button type="submit">集計</Button>
        <Button type="button">印刷</Button>
        <Button type="button">クリア</Button>
        <Button type="button">終了</Button>
      </Buttons>
    </Form>
  );
};

// Sample usage
const App: React.FC = () => {
  const handleSubmit = (data: FormData) => {
    console.log(data);
  };

  return (
    <div>
      <h1>予算差引一覧表(子予定)</h1>
      <ReservationForm onSubmit={handleSubmit} />
    </div>
  );
};

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 400px;
  margin: 0 auto;
`;

const Label = styled.label`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const Select = styled.select`
  padding: 0.25rem;
`;

const Input = styled.input`
  padding: 0.25rem;
`;

const Buttons = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;
`;

const Button = styled.button`
  padding: 0.5rem 1rem;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

export default App;