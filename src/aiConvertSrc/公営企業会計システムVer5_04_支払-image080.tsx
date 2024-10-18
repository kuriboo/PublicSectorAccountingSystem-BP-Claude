import React from 'react';
import styled from '@emotion/styled';

type ContractFormProps = {
  onSubmit: (data: ContractData) => void;
};

type ContractData = {
  contractDate: string;
  contractPeriod: number;
  renewalType: string;
  guarantorRequired: boolean;
  specialConditions: string;
  paymentDate: string;
  paymentMethod: string;
  gracePeriod: number;
  latePaymentPenalty: number;
  contractCancellationPenalty: number;
  securityDeposit: number;
  totalAmount: number;
  monthlyAmount: number;
};

const ContractForm: React.FC<ContractFormProps> = ({ onSubmit }) => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const data: ContractData = {
      contractDate: formData.get('contractDate') as string,
      contractPeriod: Number(formData.get('contractPeriod')),
      renewalType: formData.get('renewalType') as string,
      guarantorRequired: formData.get('guarantorRequired') === 'on',
      specialConditions: formData.get('specialConditions') as string,
      paymentDate: formData.get('paymentDate') as string,
      paymentMethod: formData.get('paymentMethod') as string, 
      gracePeriod: Number(formData.get('gracePeriod')),
      latePaymentPenalty: Number(formData.get('latePaymentPenalty')),
      contractCancellationPenalty: Number(formData.get('contractCancellationPenalty')),
      securityDeposit: Number(formData.get('securityDeposit')),
      totalAmount: Number(formData.get('totalAmount')),
      monthlyAmount: Number(formData.get('monthlyAmount')),
    };
    onSubmit(data);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Label>
        契約年月日
        <Input type="date" name="contractDate" required />  
      </Label>
      <Label>
        契約期間
        <Input type="number" name="contractPeriod" min={1} required />
        年
      </Label>
      <Label>
        自動更新
        <Select name="renewalType" required>
          <option value="continue">継続</option>
          <option value="terminate">終了</option>
        </Select>
      </Label>
      <Label>
        保証人
        <Input type="checkbox" name="guarantorRequired" />
        必要
      </Label>
      <Label>
        特約事項
        <Textarea name="specialConditions" />
      </Label>
      <Label>
        支払期限  
        <Input type="number" name="paymentDate" min={1} max={31} required />
        日
      </Label>
      <Label>
        支払方法
        <Select name="paymentMethod" required>
          <option value="transfer">口座振替</option>
          <option value="cash">現金</option>
        </Select>
      </Label>
      <Label>
        猶予期間
        <Input type="number" name="gracePeriod" min={0} />
        日間
      </Label>
      <Label>
        遅延損害金
        <Input type="number" name="latePaymentPenalty" min={0} required />
        円
      </Label>
      <Label>  
        解約違約金
        <Input type="number" name="contractCancellationPenalty" min={0} required />
        円
      </Label>
      <Label>
        保証金
        <Input type="number" name="securityDeposit" min={0} required />
        円
      </Label>
      <Label>
        合計変更前額
        <Input type="number" name="totalAmount" min={0} readOnly value={25000} />
        円
      </Label>  
      <Label>
        変更額
        <Input type="number" name="monthlyAmount" min={0} readOnly value={1000} />
        円
      </Label>
      <Button type="submit">OK</Button>
    </Form>
  );
};

// Styling with emotion/styled
const Form = styled.form`
  display: grid;
  gap: 1rem;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const Label = styled.label`
  display: block;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Select = styled.select`
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px; 
  background-color: white;
`;

const Textarea = styled.textarea`
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Button = styled.button`
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  background-color: #007bff;
  color: white;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

// Example usage
const ExampleContractForm = () => {
  const handleSubmit = (data: ContractData) => {
    console.log(data);
    // Handle form submission, e.g., send data to server
  };

  return (
    <div>
      <h1>契約書雛形</h1>  
      <ContractForm onSubmit={handleSubmit} />
    </div>
  );
};

export default ExampleContractForm;