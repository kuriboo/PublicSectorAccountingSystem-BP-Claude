import React from 'react';
import styled from '@emotion/styled';

type InputType = '登録' | '訂正' | '削除' | '取消';

interface EmployeeRegistrationFormProps {
  inputType: InputType;
  employeeCode: string;
  employeeName: string;
  fiscalYear: number;
  joiningDate: string;
  remarks: string;
  onInputTypeChange: (inputType: InputType) => void;
  onEmployeeCodeChange: (employeeCode: string) => void;
  onEmployeeNameChange: (employeeName: string) => void;
  onFiscalYearChange: (fiscalYear: number) => void;
  onJoiningDateChange: (joiningDate: string) => void;
  onRemarksChange: (remarks: string) => void;
  onSubmit: () => void;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  font-family: sans-serif;
`;

const Title = styled.h2`
  margin-bottom: 20px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  max-width: 600px;
`;

const InputTypeContainer = styled.div`
  display: flex;
  gap: 10px;
`;

const InputTypeLabel = styled.label<{ checked: boolean }>`
  padding: 5px 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: ${({ checked }) => (checked ? '#007bff' : 'white')};
  color: ${({ checked }) => (checked ? 'white' : 'inherit')};
  cursor: pointer;
`;

const InputContainer = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;

const InputLabel = styled.label`
  flex: 1;
`;

const Input = styled.input`
  flex: 2;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const TextArea = styled.textarea`
  flex: 2;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const SubmitButton = styled.button`
  padding: 10px;
  border: none;
  border-radius: 5px;
  background-color: #007bff;
  color: white;
  cursor: pointer;
`;

const EmployeeRegistrationForm: React.FC<EmployeeRegistrationFormProps> = ({
  inputType,
  employeeCode,
  employeeName,
  fiscalYear,
  joiningDate,
  remarks,
  onInputTypeChange,
  onEmployeeCodeChange,
  onEmployeeNameChange,
  onFiscalYearChange,
  onJoiningDateChange,
  onRemarksChange,
  onSubmit,
}) => {
  return (
    <Container>
      <Title>費用登入入力</Title>
      <Form>
        <InputTypeContainer>
          {(['登録', '訂正', '削除', '取消'] as InputType[]).map((type) => (
            <InputTypeLabel key={type} checked={inputType === type}>
              <input
                type="radio"
                checked={inputType === type}
                onChange={() => onInputTypeChange(type)}
              />
              {type}
            </InputTypeLabel>
          ))}
        </InputTypeContainer>
        <InputContainer>
          <InputLabel>調定日</InputLabel>
          <Input type="text" value={fiscalYear} onChange={(e) => onFiscalYearChange(Number(e.target.value))} />
          年度
        </InputContainer>
        <InputContainer>
          <InputLabel>年月日</InputLabel>
          <Input type="text" value={joiningDate} onChange={(e) => onJoiningDateChange(e.target.value)} />
        </InputContainer>
        <InputContainer>
          <InputLabel>決定番号</InputLabel>
          <Input type="text" value={employeeCode} onChange={(e) => onEmployeeCodeChange(e.target.value)} />
        </InputContainer>
        <InputContainer>
          <InputLabel>債務者</InputLabel>
          <Input type="text" value={employeeName} onChange={(e) => onEmployeeNameChange(e.target.value)} />
        </InputContainer>
        <InputContainer>
          <InputLabel>摘要</InputLabel>
          <TextArea value={remarks} onChange={(e) => onRemarksChange(e.target.value)} />
        </InputContainer>
        <SubmitButton type="button" onClick={onSubmit}>
          登録
        </SubmitButton>
      </Form>
    </Container>
  );
};

// Usage example
const App: React.FC = () => {
  const [inputType, setInputType] = React.useState<InputType>('登録');
  const [employeeCode, setEmployeeCode] = React.useState('');
  const [employeeName, setEmployeeName] = React.useState('');
  const [fiscalYear, setFiscalYear] = React.useState(new Date().getFullYear());
  const [joiningDate, setJoiningDate] = React.useState('');
  const [remarks, setRemarks] = React.useState('');

  const handleSubmit = () => {
    // Perform submission logic here
    console.log({
      inputType,
      employeeCode,
      employeeName,
      fiscalYear,
      joiningDate,
      remarks,
    });
  };

  return (
    <EmployeeRegistrationForm
      inputType={inputType}
      employeeCode={employeeCode}
      employeeName={employeeName}
      fiscalYear={fiscalYear}
      joiningDate={joiningDate}
      remarks={remarks}
      onInputTypeChange={setInputType}
      onEmployeeCodeChange={setEmployeeCode}
      onEmployeeNameChange={setEmployeeName}
      onFiscalYearChange={setFiscalYear}
      onJoiningDateChange={setJoiningDate}
      onRemarksChange={setRemarks}
      onSubmit={handleSubmit}
    />
  );
};

export default App;