import React from 'react';
import styled from '@emotion/styled';

interface InputRangeProps {
  label: string;
  min: number;
  max: number;
  step: number;
  value: number;
  onChange: (value: number) => void;
}

const InputRangeContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const InputRangeLabel = styled.label`
  font-size: 14px;
`;

const InputRangeInput = styled.input`
  width: 100%;
`;

const InputRange: React.FC<InputRangeProps> = ({ label, min, max, step, value, onChange }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(Number(e.target.value));
  };

  return (
    <InputRangeContainer>
      <InputRangeLabel>{label}</InputRangeLabel>
      <InputRangeInput
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={handleChange}
      />
    </InputRangeContainer>
  );
};

interface DateRangeInputProps {
  label: string;
  fromDate: string;
  toDate: string;
  onFromDateChange: (date: string) => void;
  onToDateChange: (date: string) => void;
}

const DateRangeContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const DateRangeLabel = styled.label`
  font-size: 14px;
`;

const DateRangeInputs = styled.div`
  display: flex;
  gap: 8px;

  input {
    flex: 1;
  }
`;

const DateRangeInput: React.FC<DateRangeInputProps> = ({ 
  label,
  fromDate,
  toDate,
  onFromDateChange,
  onToDateChange,
}) => {
  const handleFromDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onFromDateChange(e.target.value);
  };

  const handleToDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onToDateChange(e.target.value);
  };

  return (
    <DateRangeContainer>
      <DateRangeLabel>{label}</DateRangeLabel>
      <DateRangeInputs>
        <input type="date" value={fromDate} onChange={handleFromDateChange} />
        <span>～</span>
        <input type="date" value={toDate} onChange={handleToDateChange} />
      </DateRangeInputs>
    </DateRangeContainer>
  );
};

const TextArea = styled.textarea`
  width: 100%;
  height: 100px;
  resize: none;
`;

interface FormProps {
  discountRate: number;
  onDiscountRateChange: (value: number) => void;
  fromDate: string;
  toDate: string;
  onFromDateChange: (date: string) => void; 
  onToDateChange: (date: string) => void;
  description: string;
  onDescriptionChange: (value: string) => void;
}

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Form: React.FC<FormProps> = ({
  discountRate,
  onDiscountRateChange,
  fromDate,
  toDate,
  onFromDateChange,
  onToDateChange,
  description,
  onDescriptionChange,
}) => {
  const handleDescriptionChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    onDescriptionChange(e.target.value);
  };

  return (
    <FormContainer>
      <InputRange 
        label="改定率"
        min={0}
        max={100}
        step={0.1}
        value={discountRate}
        onChange={onDiscountRateChange}
      />

      <DateRangeInput
        label="適用指定"  
        fromDate={fromDate}
        toDate={toDate}
        onFromDateChange={onFromDateChange}
        onToDateChange={onToDateChange}
      />

      <div>
        <div>処理概要</div>
        <TextArea value={description} onChange={handleDescriptionChange} />
      </div>
    </FormContainer>
  );
};

// Usage example
const App: React.FC = () => {
  const [discountRate, setDiscountRate] = React.useState(5);
  const [fromDate, setFromDate] = React.useState('2023-01-01');
  const [toDate, setToDate] = React.useState('2023-12-31');
  const [description, setDescription] = React.useState('');

  return (
    <Form
      discountRate={discountRate}
      onDiscountRateChange={setDiscountRate}
      fromDate={fromDate}
      toDate={toDate}
      onFromDateChange={setFromDate}
      onToDateChange={setToDate}
      description={description}  
      onDescriptionChange={setDescription}
    />
  );
};

export default App;