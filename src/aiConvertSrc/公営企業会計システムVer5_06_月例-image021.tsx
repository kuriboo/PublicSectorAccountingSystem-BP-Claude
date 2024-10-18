import React from 'react';
import styled from 'styled-components';

// 予算流用先用期間表作成コンポーネントの型定義
type BudgetTransferFormProps = {
  title: string;
  defaultFromDate: string;
  defaultToDate: string;
  onSubmit: (fromDate: string, toDate: string) => void;
};

// スタイル定義
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #f0f0f0;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  @media (min-width: 768px) {
    max-width: 500px;
    margin: 0 auto;
  }
`;

const Title = styled.h2`
  margin-bottom: 20px;
  font-size: 24px;
  color: #333;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

const Label = styled.label`
  margin-bottom: 5px;
  font-size: 16px;
  color: #555;
`;

const Input = styled.input`
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
`;

const Button = styled.button`
  padding: 10px 20px;
  margin-left: 10px;
  font-size: 16px;
  color: #fff;
  background-color: #007bff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }
`;

// 予算流用先用期間表作成コンポーネント
const BudgetTransferForm: React.FC<BudgetTransferFormProps> = ({
  title,
  defaultFromDate,
  defaultToDate,
  onSubmit,
}) => {
  const [fromDate, setFromDate] = React.useState(defaultFromDate);
  const [toDate, setToDate] = React.useState(defaultToDate);

  // フォーム送信時の処理
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(fromDate, toDate);
  };

  return (
    <Container>
      <Title>{title}</Title>
      <form onSubmit={handleSubmit}>
        <FormGroup>
          <Label>予算科目</Label>
          <Input type="text" value="流用元科目" readOnly />
          <Input type="text" value="流用先科目" readOnly />
        </FormGroup>
        <FormGroup>
          <Label>範囲指定</Label>
          <Input
            type="date"
            value={fromDate}
            onChange={(e) => setFromDate(e.target.value)}
          />
          <span>~</span>
          <Input
            type="date"
            value={toDate}
            onChange={(e) => setToDate(e.target.value)}
          />
        </FormGroup>
        <ButtonGroup>
          <Button type="button">クリア</Button>
          <Button type="submit">終了</Button>
        </ButtonGroup>
      </form>
    </Container>
  );
};

// サンプル表示用コンポーネント
const SampleBudgetTransferForm: React.FC = () => {
  const handleSubmit = (fromDate: string, toDate: string) => {
    console.log(`予算流用先用期間: ${fromDate} ~ ${toDate}`);
  };

  return (
    <BudgetTransferForm
      title="予算流用先用期間表作成"
      defaultFromDate="2023-06-04"
      defaultToDate="9999999999"
      onSubmit={handleSubmit}
    />
  );
};

export default SampleBudgetTransferForm;