import React from 'react';
import styled from '@emotion/styled';

type WorkEntryFormProps = {
  onSubmit: (data: FormData) => void;
};

type FormData = {
  workType: string;
  workPeriodFrom: string;
  workPeriodTo: string;
  isTransfer: boolean;
  transferAmount: number;
};

const WorkEntryForm: React.FC<WorkEntryFormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = React.useState<FormData>({
    workType: '仕訳作成',
    workPeriodFrom: '',
    workPeriodTo: '',
    isTransfer: false,
    transferAmount: 0,
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type, checked } = event.target;
    const newValue = type === 'checkbox' ? checked : value;
    setFormData(prevData => ({ ...prevData, [name]: newValue }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit(formData);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <Label>貸訳自動作成入力</Label>
        <RadioGroup>
          <Radio
            type="radio"
            name="workType"
            value="仕訳作成"
            checked={formData.workType === '仕訳作成'}
            onChange={handleChange}
          />
          <RadioLabel>仕訳作成</RadioLabel>
          <Radio
            type="radio"
            name="workType"
            value="仕訳訂正"
            checked={formData.workType === '仕訳訂正'}
            onChange={handleChange}
          />
          <RadioLabel>仕訳訂正</RadioLabel>
        </RadioGroup>
      </FormGroup>
      <FormGroup>
        <Label>仕訳作成範囲指定</Label>
        <InputGroup>
          <InputLabel>入出庫日</InputLabel>
          <DateInput
            type="text"
            name="workPeriodFrom"
            value={formData.workPeriodFrom}
            onChange={handleChange}
            placeholder="平成28年09月14日"
          />
          <Separator>～</Separator>
          <DateInput
            type="text"
            name="workPeriodTo"
            value={formData.workPeriodTo}
            onChange={handleChange}
            placeholder="平成28年09月14日"
          />
        </InputGroup>
        <CheckboxGroup>
          <Checkbox
            type="checkbox"
            name="isTransfer"
            checked={formData.isTransfer}
            onChange={handleChange}
          />
          <CheckboxLabel>出庫</CheckboxLabel>
        </CheckboxGroup>
        <InputGroup>
          <InputLabel>伝票番号</InputLabel>
          <NumberInput
            type="number"
            name="transferAmount"
            value={formData.transferAmount}
            onChange={handleChange}
            min={0}
            max={999999}
          />
        </InputGroup>
      </FormGroup>
      <ButtonGroup>
        <SubmitButton type="submit">OK</SubmitButton>
        <ClearButton type="button">クリア</ClearButton>
        <CloseButton type="button">終了</CloseButton>
      </ButtonGroup>
    </Form>
  );
};

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Label = styled.div`
  font-weight: bold;
`;

const RadioGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const Radio = styled.input`
  margin: 0;
`;

const RadioLabel = styled.label`
  margin-right: 16px;
`;

const InputGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const InputLabel = styled.div`
  margin-right: 8px;
`;

const DateInput = styled.input`
  padding: 4px;
`;

const Separator = styled.span`
  margin: 0 8px;
`;

const CheckboxGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 8px;
`;

const Checkbox = styled.input`
  margin: 0;
`;

const CheckboxLabel = styled.label``;

const NumberInput = styled.input`
  padding: 4px;
  width: 120px;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 8px;
  margin-top: 16px;
`;

const SubmitButton = styled.button`
  padding: 8px 16px;
`;

const ClearButton = styled.button`
  padding: 8px 16px;
`;

const CloseButton = styled.button`
  padding: 8px 16px;
`;

// Usage example
const App: React.FC = () => {
  const handleSubmit = (data: FormData) => {
    console.log(data);
    // Handle form submission
  };

  return (
    <div>
      <h1>Work Entry Form</h1>
      <WorkEntryForm onSubmit={handleSubmit} />
    </div>
  );
};

export default App;