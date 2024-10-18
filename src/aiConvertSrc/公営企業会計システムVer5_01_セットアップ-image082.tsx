import React from 'react';
import styled from '@emotion/styled';

type InputType = 'text' | 'number';

interface FormInputProps {
  label: string;
  type: InputType;
  value: string | number;
  onChange: (value: string | number) => void;
}

const FormInput: React.FC<FormInputProps> = ({ label, type, value, onChange }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = type === 'number' ? Number(e.target.value) : e.target.value;
    onChange(inputValue);
  };

  return (
    <InputWrapper>
      <Label>{label}</Label>
      <Input type={type} value={value} onChange={handleChange} />
    </InputWrapper>
  );
};

interface SelectOptionProps {
  label: string;
  value: string;
}

interface FormSelectProps {
  label: string;
  value: string;
  options: SelectOptionProps[];
  onChange: (value: string) => void;
}

const FormSelect: React.FC<FormSelectProps> = ({ label, value, options, onChange }) => {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onChange(e.target.value);
  };

  return (
    <SelectWrapper>
      <Label>{label}</Label>
      <Select value={value} onChange={handleChange}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </Select>
    </SelectWrapper>
  );
};

interface FormProps {
  collectNumber: number;
  projectName: string;
  cfDivision: string;
  moneyCollection: string;
  revisionDivision: string;
  indent: string;
  collectComment: string;
  onInputChange: (name: string, value: string | number) => void;
}

const Form: React.FC<FormProps> = ({
  collectNumber,
  projectName,
  cfDivision,
  moneyCollection,
  revisionDivision,
  indent,
  collectComment,
  onInputChange,
}) => {
  return (
    <FormWrapper>
      <FormInput
        label="集計番号"
        type="number"
        value={collectNumber}
        onChange={(value) => onInputChange('collectNumber', value)}
      />
      <FormInput
        label="項目名称1"
        type="text"
        value={projectName}
        onChange={(value) => onInputChange('projectName', value)}
      />
      <FormSelect
        label="CF区分"
        value={cfDivision}
        options={[
          { label: '業務活動によるキャッシュ・フロー', value: '1' },
        ]}
        onChange={(value) => onInputChange('cfDivision', value)}
      />
      <FormSelect
        label="金額HP区分"
        value={moneyCollection}
        options={[
          { label: '合計HP・金額のみ', value: '1' },
        ]}
        onChange={(value) => onInputChange('moneyCollection', value)}
      />
      <FormSelect
        label="改行区分"
        value={revisionDivision}
        options={[
          { label: '1行改行', value: '1' },
        ]}
        onChange={(value) => onInputChange('revisionDivision', value)}
      />
      <FormInput
        label="インデント"
        type="text"
        value={indent}
        onChange={(value) => onInputChange('indent', value)}
      />
      <FormInput
        label="備考出力無し"
        type="text"
        value={collectComment}
        onChange={(value) => onInputChange('collectComment', value)}
      />
    </FormWrapper>
  );
};

// Usage example
const App: React.FC = () => {
  const [formData, setFormData] = React.useState({
    collectNumber: 150,
    projectName: '利息及び配当金の受取額',
    cfDivision: '1',
    moneyCollection: '1',
    revisionDivision: '1',
    indent: '1',
    collectComment: '',
  });

  const handleInputChange = (name: string, value: string | number) => {
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div>
      <Form
        collectNumber={formData.collectNumber}
        projectName={formData.projectName}
        cfDivision={formData.cfDivision}
        moneyCollection={formData.moneyCollection}
        revisionDivision={formData.revisionDivision}
        indent={formData.indent}
        collectComment={formData.collectComment}
        onInputChange={handleInputChange}
      />
    </div>
  );
};

// Styles
const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  max-width: 400px;
  margin: 0 auto;
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const SelectWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Label = styled.label`
  font-weight: bold;
`;

const Input = styled.input`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Select = styled.select`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export default App;