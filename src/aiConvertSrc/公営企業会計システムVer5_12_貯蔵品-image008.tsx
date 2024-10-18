import React from 'react';
import styled from '@emotion/styled';

interface MobileEntryFormProps {
  onSubmit: (values: FormValues) => void;
}

interface FormValues {
  incidentDate: string;
  incidentTime: string;
  insuranceNumber: string;
  policyholderName: string;
  branchOfficeCode: string;
  companyCode: string;
  employeeNumber: string;
  department: string;
  reason: string;
  injuredCount: number;
  accidentLocation: string;
  accidentSummary: string;
}

const MobileEntryForm: React.FC<MobileEntryFormProps> = ({ onSubmit }) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Formの入力値を取得してonSubmitコールバックを呼び出す
    const formData = new FormData(e.currentTarget);
    const values = Object.fromEntries(formData.entries()) as unknown as FormValues;
    onSubmit(values);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Label>
        発生年月日
        <Input type="date" name="incidentDate" required />
      </Label>
      <Label>
        保管場所
        <Input type="text" name="incidentTime" required />
      </Label>
      <Label>
        所属
        <Input type="text" name="insuranceNumber" required />
      </Label>
      <Label>
        予算編成機関種別
        <Input type="text" name="policyholderName" required />
      </Label>
      <Label>
        会計ID
        <Input type="text" name="branchOfficeCode" required />
      </Label>
      <Label>
        部局
        <Input type="text" name="companyCode" required />
      </Label>
      <Label>
        管理者
        <Input type="text" name="employeeNumber" required />
      </Label>
      <Label>
        予算細目
        <Input type="text" name="department" required />
      </Label>
      <Label>
        工事名称
        <Input type="text" name="reason" required />
      </Label>
      <Label>
        予定価格
        <Input type="number" name="injuredCount" required />
      </Label>
      <ButtonContainer>
        <SubmitButton type="submit">登録</SubmitButton>
        <Button type="button">クリア</Button>
        <Button type="button">終了</Button>
      </ButtonContainer>
    </Form>
  );
};

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
`;

const Label = styled.label`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;
`;

const Button = styled.button`
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  background-color: #ccc;
  cursor: pointer;
`;

const SubmitButton = styled(Button)`
  background-color: #007bff;
  color: #fff;
`;

// Usage example
const App: React.FC = () => {
  const handleFormSubmit = (values: FormValues) => {
    console.log(values);
    // フォームの送信処理を行う
  };

  return (
    <div>
      <h1>モバイル入力フォーム</h1>
      <MobileEntryForm onSubmit={handleFormSubmit} />
    </div>
  );
};

export default App;