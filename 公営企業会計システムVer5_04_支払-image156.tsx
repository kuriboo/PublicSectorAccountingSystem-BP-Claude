import React from 'react';
import styled from 'styled-components';

type CompanyData = {
  name: string;
  startDate: string;
  endDate: string;
  area: string;
  industry: string;
  capital: string;
};

type CompanySearchFormProps = {
  onSubmit: (data: CompanyData) => void;
};

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 400px;
  margin: 0 auto;
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
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

const Button = styled.button`
  padding: 0.5rem 1rem;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const CompanySearchForm: React.FC<CompanySearchFormProps> = ({ onSubmit }) => {
  const [companyData, setCompanyData] = React.useState<CompanyData>({
    name: '',
    startDate: '',
    endDate: '',
    area: '',
    industry: '',
    capital: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setCompanyData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(companyData);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Label htmlFor="name">会社名</Label>
      <Input
        type="text"
        id="name"
        name="name"
        value={companyData.name}
        onChange={handleChange}
      />

      <Label htmlFor="startDate">振替日</Label>
      <Input
        type="date"
        id="startDate"
        name="startDate"
        value={companyData.startDate}
        onChange={handleChange}
      />
      <span>〜</span>
      <Input
        type="date"
        id="endDate"
        name="endDate"
        value={companyData.endDate}
        onChange={handleChange}
      />

      <Label htmlFor="area">区分</Label>
      <Select id="area" name="area" value={companyData.area} onChange={handleChange}>
        <option value="">全て</option>
        <option value="振替済">振替済</option>
        <option value="一部振替">一部振替</option>
      </Select>

      <Button type="submit">検索</Button>
    </Form>
  );
};

// Usage example
const App: React.FC = () => {
  const handleSubmit = (data: CompanyData) => {
    console.log('Submitted data:', data);
  };

  return (
    <div>
      <h1>Company Search Form</h1>
      <CompanySearchForm onSubmit={handleSubmit} />
    </div>
  );
};

export default App;