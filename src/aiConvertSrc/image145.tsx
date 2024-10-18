import React from 'react';
import styled from '@emotion/styled';

interface InvestmentPlanFormProps {
  assetNumber: string;
  investmentAmount: number;
  interestRate: number;
  period: number;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

const InvestmentPlanForm: React.FC<InvestmentPlanFormProps> = ({
  assetNumber,
  investmentAmount,
  interestRate,
  period,
  onSubmit,
}) => {
  return (
    <Form onSubmit={onSubmit}>
      <Title>構造資産累計マスタ</Title>
      <InfoText>行政市水道事業会計</InfoText>
      <InfoText>総務課 予算・会計担当 ぎょうせい太郎</InfoText>
      <InfoText>平成29年09月14日</InfoText>
      <FormGroup>
        <Label>
          <input type="radio" name="investmentType" value="登録" /> 登録
        </Label>
        <Label>
          <input type="radio" name="investmentType" value="訂正" /> 訂正
        </Label>
        <Label>
          <input type="radio" name="investmentType" value="削除" /> 削除
        </Label>
      </FormGroup>
      <FormGroup>
        <Label>資産番号</Label>
        <Input type="text" value={assetNumber} readOnly />
        <Label>資産名称</Label>
        <Input type="text" defaultValue="エンジンポンプ" />
      </FormGroup>
      <FormGroup>
        <Label>構造技番号</Label>
        <Input type="checkbox" />
      </FormGroup>
      <FormGroup>
        <Label>単位</Label>
        <Input type="number" defaultValue={1} />
      </FormGroup>
      <FormGroup>
        <Label>現在数量</Label>
        <Input type="number" defaultValue={50} />
      </FormGroup>
      <FormGroup>
        <Label>現在金額</Label>
        <Input type="number" value={investmentAmount} readOnly />
      </FormGroup>
      <FormGroup>
        <SubmitButton type="submit">OK</SubmitButton>
        <SubmitButton type="button">クリア</SubmitButton>
        <SubmitButton type="button">終了</SubmitButton>
      </FormGroup>
    </Form>
  );
};

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: sans-serif;
`;

const Title = styled.h2`
  text-align: center;
`;

const InfoText = styled.p`
  margin: 0;
  font-size: 14px;
`;

const FormGroup = styled.div`
  display: flex;
  align-items: center;
  margin: 10px 0;

  &:last-of-type {
    justify-content: center;
  }
`;

const Label = styled.label`
  margin-right: 10px;
  font-size: 14px;
`;

const Input = styled.input`
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 3px;
  font-size: 14px;
`;

const SubmitButton = styled.button`
  margin: 0 5px;
  padding: 5px 10px;
  border: none;
  border-radius: 3px;
  font-size: 14px;
  cursor: pointer;

  &:first-of-type {
    background-color: #007bff;
    color: #fff;
  }
`;

// Usage example
const App: React.FC = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <InvestmentPlanForm
      assetNumber="7481500"
      investmentAmount={30000}
      interestRate={0}
      period={0}
      onSubmit={handleSubmit}
    />
  );
};

export default App;