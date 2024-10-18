import React from 'react';
import styled from '@emotion/styled';

type FormData = {
  financialCode: string;
  name: string;
  postalCode: string;
  defaultArea: string;
  totalTax: number;
  municipalTax: number;
  prefecturalTax: number;
  discountCode: string;
};

type Props = {
  formData: FormData;
  onDataChange: (data: FormData) => void;
};

const CompanyInfoForm: React.FC<Props> = ({ formData, onDataChange }) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = event.target;
    onDataChange({ ...formData, [name]: value });
  };

  return (
    <Container>
      <Title>財源マスタ</Title>
      <Grid>
        <Label>財源コード</Label>
        <Input
          type="text"
          name="financialCode" 
          value={formData.financialCode}
          onChange={handleChange}
        />

        <Label>名称</Label>
        <Input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />

        <Label>郵便</Label>        
        <Input
          type="text"
          name="postalCode"
          value={formData.postalCode}
          onChange={handleChange}
        />
        
        <Label>債権区分コード</Label>
        <Select
          name="defaultArea"
          value={formData.defaultArea}
          onChange={handleChange}
        >
          <option value="option1">債権区分</option>
          {/* Add other options */}
        </Select>

        <Label>総工事費</Label>
        <TaxInput
          type="number"
          name="totalTax"
          value={formData.totalTax}
          onChange={handleChange}
        />
        
        <Label>消費税額</Label>
        <TaxInput
          type="number"          
          name="municipalTax"
          value={formData.municipalTax}
          onChange={handleChange}
        />

        <Label>総非課税額</Label>        
        <TaxInput
          type="number"
          name="prefecturalTax"
          value={formData.prefecturalTax}
          onChange={handleChange}
        />

        <Label>計上区分コード</Label>
        <Select
          name="discountCode"
          value={formData.discountCode}
          onChange={handleChange}
        >
          <option value="option1">計上</option>
          {/* Add other options */}
        </Select>
      </Grid>
    </Container>
  );
};

// Styling with Emotion
const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f0f0f0;
  border-radius: 4px;
`;

const Title = styled.h2`
  text-align: center;
  margin-bottom: 20px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 120px 1fr;
  gap: 10px;
  align-items: center;
`;

const Label = styled.label`
  font-weight: bold;
`;

const Input = styled.input`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
`;

const Select = styled.select`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
`;

const TaxInput = styled(Input)`
  width: 120px;
`;

// Usage example
const sampleData: FormData = {
  financialCode: '01',
  name: '財源区分',
  postalCode: '123-4567',
  defaultArea: '債権区分',
  totalTax: 0,
  municipalTax: 0,
  prefecturalTax: 0,
  discountCode: '計上',  
};

const CompanyInfoFormExample: React.FC = () => {
  const [formData, setFormData] = React.useState<FormData>(sampleData);

  const handleDataChange = (data: FormData) => {
    setFormData(data);
  };

  return (
    <div>
      <h1>Company Info Form Example</h1>
      <CompanyInfoForm formData={formData} onDataChange={handleDataChange} />
    </div>
  );
};

export default CompanyInfoFormExample;