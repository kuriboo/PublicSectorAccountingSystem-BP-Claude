import React from 'react';
import styled from 'styled-components';

// Define types for component props
type DivisionSearchFormProps = {
  onSubmit: (division: string, dateRange: [string, string], pensionType: string, amountRange: [string, string]) => void;
};

// Styled components
const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #f9f9f9;
`;

const FormSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const FormLabel = styled.label`
  font-weight: bold;
`;

const FormInput = styled.input`
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const FormRadio = styled.input`
  margin-right: 0.5rem;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 0.5rem;
  margin-top: 1rem;
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

// Division search form component
const DivisionSearchForm: React.FC<DivisionSearchFormProps> = ({ onSubmit }) => {
  // State for form fields
  const [division, setDivision] = React.useState('');
  const [dateRange, setDateRange] = React.useState(['', '']);
  const [pensionType, setPensionType] = React.useState('');
  const [amountRange, setAmountRange] = React.useState(['', '']);

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(division, dateRange, pensionType, amountRange);
  };

  return (
    <FormContainer>
      <FormSection>
        <FormLabel>分類別受払簿（分類名称計印字）</FormLabel>
        <FormInput
          type="text"
          value={division}
          onChange={(e) => setDivision(e.target.value)}
        />
      </FormSection>
      <FormSection>
        <FormLabel>入出庫年月</FormLabel>
        <div>
          <FormInput
            type="text"
            value={dateRange[0]}
            onChange={(e) => setDateRange([e.target.value, dateRange[1]])}
          />
          {' 〜 '}
          <FormInput
            type="text"
            value={dateRange[1]}
            onChange={(e) => setDateRange([dateRange[0], e.target.value])}
          />
        </div>
        <div>
          <FormRadio
            type="radio"
            id="all"
            checked={pensionType === '全件'}
            onChange={() => setPensionType('全件')}
          />
          <FormLabel htmlFor="all">全件</FormLabel>
          <FormRadio
            type="radio"
            id="pension"
            checked={pensionType === '保管場所別'}
            onChange={() => setPensionType('保管場所別')}
          />
          <FormLabel htmlFor="pension">保管場所別</FormLabel>
        </div>
      </FormSection>
      <FormSection>
        <FormLabel>保管場所</FormLabel>
        <FormInput
          type="text"
          value={amountRange[0]}
          onChange={(e) => setAmountRange([e.target.value, amountRange[1]])}
        />
        {' 〜 '}
        <FormInput
          type="text"
          value={amountRange[1]}
          onChange={(e) => setAmountRange([amountRange[0], e.target.value])}
        />
      </FormSection>
      <FormSection>
        <FormLabel>枚数</FormLabel>
        <div>
          <FormRadio type="radio" id="all-pages" checked readOnly />
          <FormLabel htmlFor="all-pages">全し</FormLabel>
          <FormRadio type="radio" id="specify-pages" disabled />
          <FormLabel htmlFor="specify-pages">あり</FormLabel>
        </div>
      </FormSection>
      <ButtonContainer>
        <Button type="button">OK</Button>
        <Button type="button">クリア</Button>
        <Button type="submit">終了</Button>
      </ButtonContainer>
    </FormContainer>
  );
};

// Example usage
const ExampleUsage: React.FC = () => {
  const handleSubmit = (
    division: string,
    dateRange: [string, string],
    pensionType: string,
    amountRange: [string, string]
  ) => {
    console.log('Submitted:', division, dateRange, pensionType, amountRange);
  };

  return (
    <div>
      <h1>Division Search Form Example</h1>
      <DivisionSearchForm onSubmit={handleSubmit} />
    </div>
  );
};

export default ExampleUsage;