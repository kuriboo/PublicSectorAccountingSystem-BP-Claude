import React from 'react';
import styled from '@emotion/styled';

interface ContractFormProps {
  onSubmit: (data: ContractFormData) => void;
}

interface ContractFormData {
  startDate: string;
  endDate: string;
  executionDate: string;
  isLumpSum: boolean;
  paymentMethod: string;
  note: string;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
  background-color: #f0f0f0;
  border-radius: 4px;
`;

const FieldSet = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
`;

const Label = styled.label`
  font-weight: bold;
`;

const Input = styled.input`
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Select = styled.select`
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const SubmitButton = styled.button`
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

const ContractForm: React.FC<ContractFormProps> = ({ onSubmit }) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data: ContractFormData = {
      startDate: formData.get('startDate') as string,
      endDate: formData.get('endDate') as string,
      executionDate: formData.get('executionDate') as string,
      isLumpSum: formData.get('paymentMethod') === 'lumpSum',
      paymentMethod: formData.get('paymentMethod') as string,
      note: formData.get('note') as string,
    };
    onSubmit(data);
  };

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <FieldSet>
          <Label>集計期間</Label>
          <Input type="date" name="startDate" required />
          <span>〜</span>
          <Input type="date" name="endDate" required />
        </FieldSet>
        <FieldSet>
          <Label>決算仕訳</Label>
          <Input type="radio" name="executionDate" value="included" defaultChecked />
          <span>含む</span>
          <Input type="radio" name="executionDate" value="excluded" />
          <span>含まない</span>
        </FieldSet>
        <FieldSet>
          <Label>源泉徴収</Label>
          <Input type="radio" name="taxWithholding" value="yes" defaultChecked />
          <span>する</span>
          <Input type="radio" name="taxWithholding" value="no" />
          <span>しない</span>
        </FieldSet>
        <FieldSet>
          <Label>集計対象</Label>
          <Select name="paymentMethod">
            <option value="all">全体</option>          
            <option value="lumpSum">一括</option>
            <option value="installment">分割</option>
          </Select>
        </FieldSet>
        <SubmitButton type="submit">終了</SubmitButton>
      </form>
    </Container>
  );
};

// Usage example
const App: React.FC = () => {
  const handleSubmit = (data: ContractFormData) => {
    console.log(data);
  };

  return (
    <div>
      <h1>契約書作成システム</h1>
      <ContractForm onSubmit={handleSubmit} />
    </div>
  );
};

export default App;