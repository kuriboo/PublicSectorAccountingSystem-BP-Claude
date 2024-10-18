import React from 'react';
import styled from '@emotion/styled';

interface FormData {
  collectionNumber: number;
  projectName: string;
  currency: string;
  taxRate: number;
  indent: number;
  isTurnPower: boolean;
}

interface Props {
  formData: FormData;
  onInputChange: (name: string, value: string | number | boolean) => void;
  onSubmit: () => void;
  onCancel: () => void;
}

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 20px;
  background-color: #f0f0f0;
  border-radius: 5px;
  width: 300px;
  
  @media (max-width: 600px) {
    width: 100%;
  }
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  font-weight: bold;
`;

const Input = styled.input`
  padding: 5px;
  border-radius: 3px;
  border: 1px solid #ccc;
`;

const Select = styled.select`
  padding: 5px;
  border-radius: 3px;
  border: 1px solid #ccc;
`;

const Checkbox = styled.input`
  margin-right: 5px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  margin-top: 20px;
`;

const Button = styled.button`
  padding: 8px 15px;
  border-radius: 3px;
  border: none;
  cursor: pointer;
  
  &:hover {
    opacity: 0.8;
  }
`;

const SubmitButton = styled(Button)`
  background-color: #007bff;
  color: #fff;
`;

const CancelButton = styled(Button)`
  background-color: #6c757d;
  color: #fff;
`;

const ProjectForm: React.FC<Props> = ({ formData, onInputChange, onSubmit, onCancel }) => {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type, checked } = event.target;
    onInputChange(name, type === 'checkbox' ? checked : value);
  };

  return (
    <FormWrapper>
      <InputWrapper>
        <Label>集計番号</Label>
        <Input
          type="number"
          name="collectionNumber"
          value={formData.collectionNumber}
          onChange={handleInputChange}
        />
      </InputWrapper>
      
      <InputWrapper>
        <Label>項目名称1</Label>
        <Input
          type="text"
          name="projectName"
          value={formData.projectName}
          onChange={handleInputChange}
        />
      </InputWrapper>
      
      <InputWrapper>
        <Label>金額中千区分</Label>
        <Select
          name="currency"
          value={formData.currency}
          onChange={handleInputChange}
        >
          <option value="円">円</option>
          <option value="千円">千円</option>
        </Select>
      </InputWrapper>
      
      <InputWrapper>
        <Label>改行区分</Label>
        <Input
          type="number"
          name="taxRate"
          value={formData.taxRate}
          onChange={handleInputChange}
        />
      </InputWrapper>
      
      <InputWrapper>
        <Label>インデント</Label>
        <Input
          type="number"
          name="indent"
          value={formData.indent}
          onChange={handleInputChange}
        />
      </InputWrapper>
      
      <InputWrapper>
        <Label>
          <Checkbox
            type="checkbox"
            name="isTurnPower"
            checked={formData.isTurnPower}
            onChange={handleInputChange}
          />
          帳票出力無し
        </Label>
      </InputWrapper>
      
      <ButtonWrapper>
        <SubmitButton onClick={onSubmit}>OK</SubmitButton>
        <CancelButton onClick={onCancel}>クリア</CancelButton>
      </ButtonWrapper>
    </FormWrapper>
  );
};

// Usage example
const App: React.FC = () => {
  const [formData, setFormData] = React.useState<FormData>({
    collectionNumber: 970,
    projectName: '資金の増加額(又は減少額)',
    currency: '百万円',
    taxRate: 1,
    indent: 0,
    isTurnPower: false,
  });

  const handleInputChange = (name: string, value: string | number | boolean) => {
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleCancel = () => {
    // Handle form cancellation
    setFormData({
      collectionNumber: 0,
      projectName: '',
      currency: '円',
      taxRate: 0,
      indent: 0, 
      isTurnPower: false,
    });
  };

  return (
    <ProjectForm
      formData={formData}
      onInputChange={handleInputChange}
      onSubmit={handleSubmit}
      onCancel={handleCancel}
    />
  );
};

export default App;