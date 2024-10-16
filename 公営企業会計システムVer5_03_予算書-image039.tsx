import React from 'react';
import styled from '@emotion/styled';

interface LoanApplicationFormProps {
  onSubmit: (data: LoanApplicationData) => void;
}

interface LoanApplicationData {
  purpose: string;
  loanAmount: number;
  period: number;
  annualIncome: number;
}

const LoanApplicationForm: React.FC<LoanApplicationFormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = React.useState<LoanApplicationData>({
    purpose: '',
    loanAmount: 0,
    period: 1,
    annualIncome: 0,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Title>借益計算書/貸借対照表</Title>
      <Subtitle>行政市事業会計 最高権限 管理者 行政 太郎 令和05年07月24日</Subtitle>
      
      <SectionTitle>帳票種別</SectionTitle>
      <RadioGroup>
        <Radio type="radio" id="balance-sheet" name="reportType" value="貸借対照表" defaultChecked />
        <Label htmlFor="balance-sheet">貸借対照表</Label>
        
        <Radio type="radio" id="income-statement" name="reportType" value="損益計算書" />
        <Label htmlFor="income-statement">損益計算書</Label>
      </RadioGroup>
      
      <SectionTitle>作表条件</SectionTitle>
      <InputGroup>
        <Label htmlFor="year">年 度</Label>
        <Input type="number" id="year" name="year" defaultValue="05" />
        <Label htmlFor="year">年度</Label>
      </InputGroup>
      
      <InputGroup>
        <Label htmlFor="targetArea">予算編成区分</Label>
        <Select id="targetArea" name="targetArea" defaultValue="当初予算">
          <option value="当初予算">当初予算</option>
        </Select>
      </InputGroup>
      
      <SectionTitle>処理概要</SectionTitle>
      <Paragraph>損益計算書・貸借対照表を作成します。</Paragraph>
      
      <Divider />
      
      <ButtonGroup>
        <Button type="submit">CSV出力</Button>
        <Button type="button">クリア</Button>
        <Button type="button">終了</Button>
      </ButtonGroup>
    </Form>
  );
};

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
  background-color: #f0f0f0;
`;

const Title = styled.h2`
  font-size: 1.5rem;
  margin: 0;
`;

const Subtitle = styled.p`
  margin: 0;
  color: #666;
`;

const SectionTitle = styled.h3`
  font-size: 1.2rem;
  margin: 0;
`;

const RadioGroup = styled.div`
  display: flex;
  gap: 1rem;
`;

const Radio = styled.input`
  margin-right: 0.5rem;
`;

const Label = styled.label`
  display: inline-block;
  margin-right: 1rem;
`;

const InputGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;  
`;

const Input = styled.input`
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 80px; 
`;

const Select = styled.select`
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Paragraph = styled.p`
  margin: 0;
`;

const Divider = styled.hr`
  border: none;
  border-top: 1px solid #ccc;
  margin: 1rem 0;
`;
  
const ButtonGroup = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
`;

const Button = styled.button`
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  background-color: #007bff;
  color: #fff;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

// Usage example
const SampleLoanApplication = () => {
  const handleSubmit = (data: LoanApplicationData) => {
    console.log('Submitted data:', data);
    // Submit data to server or perform other actions
  };

  return (
    <div>
      <h1>Loan Application</h1>
      <LoanApplicationForm onSubmit={handleSubmit} />
    </div>
  );
};

export default SampleLoanApplication;