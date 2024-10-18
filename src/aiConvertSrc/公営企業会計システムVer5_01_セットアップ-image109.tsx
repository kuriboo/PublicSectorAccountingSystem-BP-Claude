import React from 'react';
import styled from '@emotion/styled';

type WorkOrderFormProps = {
  onSubmit: (data: WorkOrderData) => void;
};

type WorkOrderData = {
  orderType: string;
  accountDivision: string;
  workOrderCode: string;
  workOrderDetails: string;
  projectCode: string;
  projectNumber1: string;
  projectNumber2: string;
  bankCode: number;
  accountingYear: number;
  forecastDivision: number;
  periodDivision: number;
};

const WorkOrderForm: React.FC<WorkOrderFormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = React.useState<WorkOrderData>({
    orderType: '',
    accountDivision: '',
    workOrderCode: '',
    workOrderDetails: '',
    projectCode: '',
    projectNumber1: '',
    projectNumber2: '',
    bankCode: 1,
    accountingYear: 1,
    forecastDivision: 1,
    periodDivision: 1,
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = event.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit(formData);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormField>
        <Label>会計年度</Label>
        <YearInput
          type="number"
          name="accountingYear"
          value={formData.accountingYear}
          onChange={handleChange}
          min={1}
        />
        年度
      </FormField>
      
      <FormField>
        <Label>作表制御表区分</Label>
        <Select name="workOrderCode" value={formData.workOrderCode} onChange={handleChange}>
          <option value="">作表制御表計表</option>
          {/* Add other options */}
        </Select>
      </FormField>

      {/* Render other form fields */}

      <FormField>
        <Label>予測区分</Label>
        <Select name="forecastDivision" value={formData.forecastDivision} onChange={handleChange}>
          <option value={1}>予算1</option>
          {/* Add other options */}
        </Select>
      </FormField>
      
      <FormField>
        <Label>改訂区分</Label>
        <Select name="periodDivision" value={formData.periodDivision} onChange={handleChange}>
          <option value={1}>1次改訂</option>
          {/* Add other options */}
        </Select>
      </FormField>

      <ButtonGroup>
        <Button type="button">前データ</Button>
        <Button type="button">次データ</Button>
        <SubmitButton type="submit">OK</SubmitButton>
        <Button type="button">クリア</Button>
        <Button type="button">終了</Button>
      </ButtonGroup>
    </Form>
  );
};

// Styled components
const Form = styled.form`
  display: grid;
  gap: 1rem;
`;

const FormField = styled.div`
  display: flex;
  align-items: center;
`;

const Label = styled.label`
  margin-right: 0.5rem;
`;

const Input = styled.input`
  padding: 0.25rem;
`;

const Select = styled.select`
  padding: 0.25rem;
`;

const YearInput = styled(Input)`
  width: 4rem;
  margin-right: 0.25rem;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 0.5rem;
  margin-top: 1rem;
`;

const Button = styled.button`
  padding: 0.25rem 0.5rem;
  background-color: #f0f0f0;
  border: 1px solid #ccc;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #e0e0e0;
  }
`;

const SubmitButton = styled(Button)`
  background-color: #007bff;
  color: #fff;
  border-color: #007bff;

  &:hover {
    background-color: #0056b3;
  }
`;

// Example usage
const ExampleUsage: React.FC = () => {
  const handleSubmit = (data: WorkOrderData) => {
    console.log('Submitted data:', data);
    // Perform further actions with the submitted data
  };

  return (
    <div>
      <h1>作業予算登録</h1>
      <WorkOrderForm onSubmit={handleSubmit} />
    </div>
  );
};

export default ExampleUsage;