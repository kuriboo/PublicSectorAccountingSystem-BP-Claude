import React from 'react';
import styled from 'styled-components';

type LoanAccountRegisterFormProps = {
  onSubmit: (data: LoanAccountRegisterFormData) => void;
};

type LoanAccountRegisterFormData = {
  accountType: string;
  orderType: string;
  bankCode: string;
  branchCode: string;
  accountNumber: number;
  accountHolderName: string;
  collectDate: string;
};

const LoanAccountRegisterForm: React.FC<LoanAccountRegisterFormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = React.useState<LoanAccountRegisterFormData>({
    accountType: '登録',
    orderType: '月次賦課分掴表',
    bankCode: '',
    branchCode: '',
    accountNumber: 0,
    accountHolderName: '',
    collectDate: '',
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = event.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit(formData);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Title>損益計算書貸借対照表集計金額</Title>
      <Info>
        総務課予算･会計担当 ぎょうせい太郎
        <br />
        平成29年09月04日
      </Info>
      <FieldSet>
        <Legend>
          <input type="radio" name="accountType" value="登録" checked={formData.accountType === '登録'} onChange={handleChange} /> 登録
          <input type="radio" name="accountType" value="訂正" checked={formData.accountType === '訂正'} onChange={handleChange} /> 訂正
          <input type="radio" name="accountType" value="削除" checked={formData.accountType === '削除'} onChange={handleChange} /> 削除
        </Legend>
        
        <Label>
          会計年度
          <Select name="orderType" value={formData.orderType} onChange={handleChange}>
            <option value="月次賦課分掴表">月次賦課分掴表</option>
          </Select>
        </Label>
        <Label>
          年度
          <Input type="number" name="accountNumber" min={0} value={formData.accountNumber} onChange={handleChange} />
        </Label>

        <Label>
          集計区分コード
          <Input type="number" name="bankCode" value={formData.bankCode} onChange={handleChange} maxLength={3} />
        </Label>
        <Label>
          予算編成区分
          <Select name="branchCode" value={formData.branchCode} onChange={handleChange}>
            <option value="">月例</option>
          </Select>
          <Checkbox type="checkbox" />改
        </Label>

        <Label>
          集計番号
          <Input type="number" name="accountHolderName" value={formData.accountHolderName} onChange={handleChange} />
        </Label>

        <Label>
          集計区分
          <Input type="number" name="collectDate" value={formData.collectDate} onChange={handleChange} />
        </Label>

        <Label>
          集計件数金額
          <Input type="text" name="collectAmount" value={formData.collectDate} onChange={handleChange} />
        </Label>
        
      </FieldSet>
      <ButtonGroup>
        <CancelButton type="reset">キャンセル</CancelButton>
        <ConfirmButton type="submit">OK</ConfirmButton>
        <PrintButton type="button">出力</PrintButton>
      </ButtonGroup>
    </Form>
  );
};

// Styled components
const Form = styled.form`
  display: flex; 
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
  padding: 1rem;
  border: 1px solid #ccc;
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
`;

const Title = styled.h2`
  font-size: 1.25rem;
  margin: 0;
`;

const Info = styled.div`
  font-size: 0.875rem;
`;

const FieldSet = styled.fieldset`
  border: none;
  display: flex;
  flex-direction: column; 
  gap: 0.5rem;
  width: 100%;
`;

const Legend = styled.legend`
  font-weight: bold;
`;

const Label = styled.label`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const Input = styled.input`
  padding: 0.25rem;
`;

const Select = styled.select`
  padding: 0.25rem;
`;

const Checkbox = styled.input`
  margin-left: 0.5rem;  
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: flex-end;
  width: 100%;
`;

const Button = styled.button`
  padding: 0.25rem 0.5rem;
  min-width: 5rem;
`;

const CancelButton = styled(Button)`
  background: #ddd;
`;

const ConfirmButton = styled(Button)`
  background: #007bff;
  color: #fff;
`;

const PrintButton = styled(Button)`
  background: #28a745;
  color: #fff;  
`;

// Usage example 
const App: React.FC = () => {
  const handleSubmit = (data: LoanAccountRegisterFormData) => {
    console.log(data);
  };

  return (
    <div>
      <h1>Loan Account Register</h1>
      <LoanAccountRegisterForm onSubmit={handleSubmit} />  
    </div>
  );
};

export default App;