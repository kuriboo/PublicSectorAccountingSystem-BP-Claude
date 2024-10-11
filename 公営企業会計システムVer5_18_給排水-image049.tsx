import React from 'react';
import styled from '@emotion/styled';

type InvoiceSearchFormProps = {
  onSubmit: (params: InvoiceSearchParams) => void;
};

type InvoiceSearchParams = {
  year: number;
  documentNumber: string;
  department: string;
  bp: string;
  subBp: string;
  displayNumber: string;
  engineeringDepartment: boolean;
  fiscalYear: string;
  workPlace: string;
};

const InvoiceSearchForm: React.FC<InvoiceSearchFormProps> = ({ onSubmit }) => {
  const [params, setParams] = React.useState<InvoiceSearchParams>({
    year: new Date().getFullYear(),
    documentNumber: '',
    department: '',
    bp: '',
    subBp: '',
    displayNumber: '',
    engineeringDepartment: false,
    fiscalYear: '',
    workPlace: '本社',
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type, checked } = event.target;
    const newValue = type === 'checkbox' ? checked : value;
    setParams(prevParams => ({
      ...prevParams,
      [name]: newValue,
    }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit(params);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormField>
        <Label>検索条件設定</Label>
      </FormField>
      <FormField>
        <Label>年度</Label>
        <Select name="year" value={params.year} onChange={handleChange}>
          <option value={params.year - 1}>{params.year - 1}</option>
          <option value={params.year}>{params.year}</option>
        </Select>
      </FormField>
      <FormField>
        <Label>調定番号</Label>
        <Input type="text" name="documentNumber" value={params.documentNumber} onChange={handleChange} />
      </FormField>
      <FormField>
        <Label>部署</Label>
        <Input type="text" name="department" value={params.department} onChange={handleChange} />
      </FormField>
      <FormField>
        <Label>BP</Label>
        <Input type="text" name="bp" value={params.bp} onChange={handleChange} />
      </FormField>
      <FormField>
        <Label>subBP</Label>
        <Input type="text" name="subBp" value={params.subBp} onChange={handleChange} />
      </FormField>
      <FormField>
        <Label>表示番号</Label>
        <Input type="text" name="displayNumber" value={params.displayNumber} onChange={handleChange} />
        <Button type="button">工事店</Button>
      </FormField>
      <FormField>
        <Label>予算科目</Label>
        <Button type="button">検索</Button>
      </FormField>
      <FormField>
        <Label>摘要</Label>
        <Input type="text" name="fiscalYear" value={params.fiscalYear} onChange={handleChange} />
      </FormField>
      <FormField>
        <Label>区分</Label>
        <RadioButton
          type="radio"
          name="workPlace"
          value="本社"
          checked={params.workPlace === '本社'}
          onChange={handleChange}
        />
        <span>本社</span>
        <RadioButton
          type="radio"
          name="workPlace"
          value="金沢"
          checked={params.workPlace === '金沢'}
          onChange={handleChange}
        />
        <span>金沢</span>
        <RadioButton
          type="radio"
          name="workPlace"
          value="すべて"
          checked={params.workPlace === 'すべて'}
          onChange={handleChange}
        />
        <span>すべて</span>
      </FormField>
      <SubmitButton type="submit">表示</SubmitButton>
    </Form>
  );
};

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 16px;
  background-color: #f0f0f0;
`;

const FormField = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const Label = styled.label`
  min-width: 100px;
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

const Button = styled.button`
  padding: 4px 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #fff;
  cursor: pointer;
`;

const RadioButton = styled.input`
  margin-left: 8px;
`;

const SubmitButton = styled.button`
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  background-color: #007bff;
  color: #fff;
  cursor: pointer;
`;

// Usage example
const App: React.FC = () => {
  const handleSubmit = (params: InvoiceSearchParams) => {
    console.log(params);
    // Perform search with the params
  };

  return (
    <div>
      <h1>Invoice Search</h1>
      <InvoiceSearchForm onSubmit={handleSubmit} />
    </div>
  );
};

export default App;