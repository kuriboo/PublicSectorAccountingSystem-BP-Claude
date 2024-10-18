import React from 'react';
import styled from 'styled-components';

type CompanyInfoFormProps = {
  companyCode?: string;
  fiscalYear?: number;
  returnType?: string;
  onSubmit: (companyCode: string, fiscalYear: number, returnType: string) => void;
};

const CompanyInfoForm: React.FC<CompanyInfoFormProps> = ({
  companyCode = '',
  fiscalYear = new Date().getFullYear(),
  returnType = '法定',
  onSubmit,
}) => {
  const [formCompanyCode, setFormCompanyCode] = React.useState(companyCode);
  const [formFiscalYear, setFormFiscalYear] = React.useState(fiscalYear);
  const [formReturnType, setFormReturnType] = React.useState(returnType);

  const handleSubmit = () => {
    onSubmit(formCompanyCode, formFiscalYear, formReturnType);
  };

  return (
    <Container>
      <Title>指名業者推薦書</Title>
      <InputContainer>
        <InputLabel>会社コード：</InputLabel>
        <Input
          type="text"
          value={formCompanyCode}
          onChange={(e) => setFormCompanyCode(e.target.value)}
        />
      </InputContainer>
      <InputContainer>
        <InputLabel>年度：</InputLabel>
        <Input
          type="number"
          value={formFiscalYear}
          onChange={(e) => setFormFiscalYear(Number(e.target.value))}
        />
      </InputContainer>
      <InputContainer>
        <InputLabel>受付区分：</InputLabel>
        <Select
          value={formReturnType}
          onChange={(e) => setFormReturnType(e.target.value)}
        >
          <option value="法定">法定</option>
          <option value="修正">修正</option>
        </Select>
      </InputContainer>
      <SubmitButton onClick={handleSubmit}>検索</SubmitButton>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #f0f0f0;
`;

const Title = styled.h2`
  margin-bottom: 20px;
`;

const InputContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const InputLabel = styled.label`
  margin-right: 10px;
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

const SubmitButton = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background-color: #0056b3;
  }
`;

// Usage example
const App: React.FC = () => {
  const handleSubmit = (companyCode: string, fiscalYear: number, returnType: string) => {
    console.log('Submitted:', companyCode, fiscalYear, returnType);
  };

  return (
    <div>
      <CompanyInfoForm onSubmit={handleSubmit} />
    </div>
  );
};

export default App;