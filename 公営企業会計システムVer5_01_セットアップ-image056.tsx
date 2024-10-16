import React from 'react';
import styled from '@emotion/styled';

type FormData = {
  companyName: string;
  branchNumber: string;
  accountingDate: string;
  collectMethod: string;
  amount: number;
  monthlyCollectAmount: number;
  annualCollectAmount: number;
  collectSchedule: number[];
};

type Props = {
  data: FormData;
  onDataChange: (data: FormData) => void;
  onSubmit: () => void;
  onCancel: () => void;
  onClose: () => void;
};

const Container = styled.div`
  background-color: #f0f0f0;
  padding: 16px;
  font-family: sans-serif;
`;

const Title = styled.div`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 16px;
`;

const FormGroup = styled.div`
  margin-bottom: 16px;
`;

const Label = styled.div`
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 4px;
`;

const Input = styled.input`
  padding: 4px;
  font-size: 14px;
  width: 200px;
`;

const RadioGroup = styled.div`
  display: flex;
  gap: 8px;
  margin-bottom: 8px;
`;

const ScheduleGroup = styled.div`
  display: flex;
  gap: 8px;
  margin-bottom: 8px;
`;

const SubmitButton = styled.button`
  padding: 8px 16px;
  font-size: 16px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background-color: #0056b3;
  }
`;

const CancelButton = styled.button`
  padding: 8px 16px;
  font-size: 16px;
  background-color: #6c757d;
  color: white;
  border: none;  
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background-color: #545b62;
  }
`;

const CloseButton = styled.button`
  padding: 8px 16px;
  font-size: 16px;
  background-color: #dc3545;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background-color: #a71d2a;
  }
`;

const CollectScheduleForm: React.FC<Props> = ({ data, onDataChange, onSubmit, onCancel, onClose }) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    onDataChange({ ...data, [name]: value });
  };

  // Convert collectSchedule array to comma separated string
  const collectScheduleString = data.collectSchedule.join(',');  

  return (
    <Container>
      <Title>資金予算表集計マスタ</Title>
      <FormGroup>
        <Label>会計年度</Label>
        <Input type="text" name="companyName" value={data.companyName} onChange={handleChange} />
      </FormGroup>
      <FormGroup>
        <Label>集計番号</Label>
        <Input type="text" name="branchNumber" value={data.branchNumber} onChange={handleChange} />  
      </FormGroup>
      <FormGroup>
        <Label>項目区分</Label>
        <RadioGroup>
          <label>
            <input type="radio" name="accountingType" value="各種年金" checked={data.accountingDate === '各種年金'} onChange={handleChange} />
            各種年金  
          </label>
          <label>
            <input type="radio" name="accountingType" value="訂正" checked={data.accountingDate === '訂正'} onChange={handleChange} />
            訂正
          </label>
          <label>  
            <input type="radio" name="accountingType" value="削除" checked={data.accountingDate === '削除'} onChange={handleChange} />
            削除
          </label>
        </RadioGroup>
      </FormGroup>
      <FormGroup>  
        <Label>金額（円）区分</Label>
        <Input type="number" name="amount" value={data.amount} onChange={handleChange} />
      </FormGroup>
      <FormGroup>
        <Label>前月未集計金額</Label>  
        <Input type="number" name="monthlyCollectAmount" value={data.monthlyCollectAmount} onChange={handleChange} />
      </FormGroup>
      <FormGroup>
        <Label>翌月金額</Label>
        <Input type="number" name="annualCollectAmount" value={data.annualCollectAmount} onChange={handleChange} />   
      </FormGroup>
      <FormGroup>
        <Label>翌々月金額</Label>
        <Input type="number" name="annualCollectAmount" value={data.annualCollectAmount} onChange={handleChange} />
      </FormGroup>
      <FormGroup>  
        <Label>集計先番号</Label>
        <Input type="text" name="collectSchedule" value={collectScheduleString} onChange={handleChange} />
      </FormGroup>
      <SubmitButton onClick={onSubmit}>OK</SubmitButton>
      <CancelButton onClick={onCancel}>クリア</CancelButton>
      <CloseButton onClick={onClose}>終了</CloseButton>
    </Container>
  );
};

// Example usage
const sampleData: FormData = {
  companyName: '令和29',
  branchNumber: '210',
  accountingDate: '各種年金',
  collectMethod: '1',  
  amount: 1000,
  monthlyCollectAmount: 0,
  annualCollectAmount: 6000,
  collectSchedule: [100, 200],
};

const SampleUsage: React.FC = () => {
  const [formData, setFormData] = React.useState<FormData>(sampleData);

  const handleDataChange = (data: FormData) => {
    setFormData(data);
  };  

  const handleSubmit = () => {
    console.log('Submitting:', formData);
    // Perform submit action
  };

  const handleCancel = () => {  
    console.log('Cancelling');
    // Perform cancel action
    setFormData(sampleData); // Reset form data
  };

  const handleClose = () => {
    console.log('Closing');  
    // Perform close action
  };

  return (
    <CollectScheduleForm 
      data={formData}
      onDataChange={handleDataChange}
      onSubmit={handleSubmit} 
      onCancel={handleCancel}
      onClose={handleClose}
    />
  );
};

export default SampleUsage;