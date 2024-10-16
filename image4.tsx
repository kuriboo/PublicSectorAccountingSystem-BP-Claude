import React from 'react';
import styled from 'styled-components';

// 予約検索フォームのプロパティ型定義
type ReservationSearchFormProps = {
  onSubmit: (formData: FormData) => void;
};

// 予約検索フォームのコンポーネント
const ReservationSearchForm: React.FC<ReservationSearchFormProps> = ({ onSubmit }) => {
  // フォーム送信時の処理
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    onSubmit(formData);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Fieldset>
        <Legend>予約科目マスタ</Legend>
        <Row>
          <Label>診療科</Label>
          <Select name="department">
            <option value="">選択してください</option>
            {/* 診療科の選択肢 */}
          </Select>
        </Row>
        <Row>
          <Label>診療日</Label>
          <Input type="date" name="date" />
        </Row>
        <Row>
          <Label>時間</Label>
          <Input type="time" name="time" />
        </Row>
      </Fieldset>
      <Row>
        <ButtonGroup>
          <Button type="submit">検索</Button>
          <Button type="reset">クリア</Button>
        </ButtonGroup>
      </Row>
    </Form>
  );
};

// スタイリング用のコンポーネント
const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const Fieldset = styled.fieldset`
  border: 1px solid #ccc;
  padding: 16px;
`;

const Legend = styled.legend`
  font-weight: bold;
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 8px;
`;

const Label = styled.label`
  width: 80px;
`;

const Input = styled.input`
  padding: 4px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Select = styled.select`
  padding: 4px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 8px;
`;

const Button = styled.button`
  padding: 8px 16px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

// サンプルデータを用いた使用例
const sampleDepartments = ['内科', '外科', '小児科'];

const App: React.FC = () => {
  const handleSubmit = (formData: FormData) => {
    // フォームデータの処理
    console.log(formData);
  };

  return (
    <div>
      <h1>予約検索フォーム</h1>
      <ReservationSearchForm onSubmit={handleSubmit} />
    </div>
  );
};

export default App;