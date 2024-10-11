import React from 'react';
import styled from '@emotion/styled';

type ContractCompanySearchFormProps = {
  onSearch: (params: { [key: string]: any }) => void;
};

const ContractCompanySearchForm: React.FC<ContractCompanySearchFormProps> = ({ onSearch }) => {
  const [formValues, setFormValues] = React.useState({
    contractYear: '',
    fiscalYear: '',
    company: '土事',
    branch: '',
    fromDate: '',
    toDate: '',
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = event.target;
    setFormValues(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSearch = () => {
    onSearch(formValues);
  };

  return (
    <Container>
      <Row>
        <Label>実績年度</Label>
        <Input type="text" name="fiscalYear" value={formValues.fiscalYear} onChange={handleChange} />
        <Label>年度</Label>
      </Row>
      <Row>
        <Label>委託区分</Label>
        <Select name="company" value={formValues.company} onChange={handleChange}>
          <option value="土事">土事</option>
          {/* Add more company options */}
        </Select>
      </Row>
      <Row>
        <Label>検索条件</Label>
      </Row>
      <Row>
        <Label>格付</Label>
        <Select name="contractYear" value={formValues.contractYear} onChange={handleChange}>
          <option value=""></option>
          {/* Add contract year options */}
        </Select>
        <Label>～</Label>
        <Select name="contractYear" value={formValues.contractYear} onChange={handleChange}>
          <option value=""></option>
          {/* Add contract year options */}
        </Select>
      </Row>
      <Row>
        <Label>地区</Label>
        <Input type="text" name="fromDate" value={formValues.fromDate} onChange={handleChange} />
        <Label>～</Label>
        <Input type="text" name="toDate" value={formValues.toDate} onChange={handleChange} />
      </Row>
      <SearchButton onClick={handleSearch}>表示</SearchButton>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Label = styled.label`
  font-weight: bold;
`;

const Input = styled.input`
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Select = styled.select`
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const SearchButton = styled.button`
  padding: 8px 16px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

// Usage example
const ExampleComponent: React.FC = () => {
  const handleSearch = (params: { [key: string]: any }) => {
    console.log('Search params:', params);
    // Perform search logic here
  };

  return (
    <div>
      <h2>Contract Company Search</h2>
      <ContractCompanySearchForm onSearch={handleSearch} />
    </div>
  );
};

export default ExampleComponent;