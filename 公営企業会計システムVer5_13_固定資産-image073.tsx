import React from 'react';
import styled from '@emotion/styled';

interface FormProps {
  onSubmit: (data: FormData) => void;
}

interface FormData {
  transportType: string;
  printType: string;
  range: [string, string];
  managementNumbers: string[];
}

const Form: React.FC<FormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = React.useState<FormData>({
    transportType: '通常',
    printType: '印字しない',
    range: ['', ''],
    managementNumbers: ['', '', '', ''],
  });

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleRangeChange = (index: number, value: string) => {
    setFormData((prevData) => {
      const newRange = [...prevData.range];
      newRange[index] = value;
      return { ...prevData, range: newRange as [string, string] };
    });
  };

  const handleManagementNumberChange = (index: number, value: string) => {
    setFormData((prevData) => {
      const newNumbers = [...prevData.managementNumbers];
      newNumbers[index] = value;
      return { ...prevData, managementNumbers: newNumbers };
    });
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    onSubmit(formData);
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <FormSection>
        <RadioGroup>
          <RadioLabel>
            <input
              type="radio"
              name="transportType"
              value="通常"
              checked={formData.transportType === '通常'}
              onChange={handleChange}
            />
            通常
          </RadioLabel>
          <RadioLabel>
            <input
              type="radio"
              name="transportType"
              value="年度別"
              checked={formData.transportType === '年度別'}
              onChange={handleChange}
            />
            年度別
          </RadioLabel>
        </RadioGroup>
        <RangeInputs>
          <RangeInput
            type="text"
            value={formData.range[0]}
            onChange={(e) => handleRangeChange(0, e.target.value)}
          />
          <span>〜</span>
          <RangeInput
            type="text"
            value={formData.range[1]}
            onChange={(e) => handleRangeChange(1, e.target.value)}
          />
        </RangeInputs>
      </FormSection>
      <FormSection>
        <RadioGroup>
          <RadioLabel>
            <input
              type="radio"
              name="printType"
              value="印字しない"
              checked={formData.printType === '印字しない'}
              onChange={handleChange}
            />
            印字しない
          </RadioLabel>
          <RadioLabel>
            <input
              type="radio"
              name="printType"
              value="会計区分別"
              checked={formData.printType === '会計区分別'}
              onChange={handleChange}
            />
            会計区分別
          </RadioLabel>
        </RadioGroup>
      </FormSection>
      <FormSection>
        <ManagementNumbers>
          {formData.managementNumbers.map((number, index) => (
            <React.Fragment key={index}>
              <ManagementNumberLabel>
                {index % 2 === 0 ? '管理者枠' : '管理番枠'}
              </ManagementNumberLabel>
              <ManagementNumberInput
                type="text"
                value={number}
                onChange={(e) => handleManagementNumberChange(index, e.target.value)}
              />
              {index % 2 !== 0 && <span>〜</span>}
            </React.Fragment>
          ))}
        </ManagementNumbers>
      </FormSection>
      <SubmitButton type="submit">OK</SubmitButton>
    </StyledForm>
  );
};

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const FormSection = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

const RadioGroup = styled.div`
  display: flex;
  gap: 8px;
`;

const RadioLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 4px;
`;

const RangeInputs = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const RangeInput = styled.input`
  width: 100px;
`;

const ManagementNumbers = styled.div`
  display: grid;
  grid-template-columns: auto 100px auto 100px;
  gap: 8px;
  align-items: center;
`;

const ManagementNumberLabel = styled.span`
  font-size: 14px;
`;

const ManagementNumberInput = styled.input`
  width: 100px;
`;

const SubmitButton = styled.button`
  align-self: flex-end;
  padding: 8px 16px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

// Usage example
const App: React.FC = () => {
  const handleSubmit = (data: FormData) => {
    console.log('Submitted data:', data);
  };

  return (
    <div>
      <h1>Form Example</h1>
      <Form onSubmit={handleSubmit} />
    </div>
  );
};

export default App;