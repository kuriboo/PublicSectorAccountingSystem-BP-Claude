import React from 'react';
import styled from '@emotion/styled';

interface ReservationFormProps {
  onSubmit: (data: ReservationData) => void;
}

interface ReservationData {
  date: string;
  time: string;
  numberOfPeople: number;
  name: string;
  phoneNumber: string;
  additionalInfo: string;
  paymentMethod: string;
  isCancellable: boolean;
  isCancelFee: boolean;
}

const ReservationForm: React.FC<ReservationFormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = React.useState<ReservationData>({
    date: '',
    time: '',
    numberOfPeople: 1,
    name: '',
    phoneNumber: '',
    additionalInfo: '',
    paymentMethod: 'credit',
    isCancellable: false,
    isCancelFee: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type, checked } = e.target;
    const inputValue = type === 'checkbox' ? checked : value;
    setFormData((prevData) => ({
      ...prevData,
      [name]: inputValue,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <FormContainer>
      <FormTitle>予約申込調整入力</FormTitle>
      <FormSubtitle>予算承認済事業会計</FormSubtitle>
      <FormGroup>
        <Label>
          年度
          <Input type="text" name="date" value={formData.date} onChange={handleChange} />
        </Label>
        <Label>
          予算編成区分
          <Select name="budgetCategory" value={formData.time} onChange={handleChange}>
            <option value="category1">当初予算</option>
            <option value="category2">補正予算</option>
          </Select>
        </Label>
        <Label>
          回数
          <Input type="number" name="numberOfPeople" value={formData.numberOfPeople} onChange={handleChange} />
        </Label>
      </FormGroup>
      <FormGroup>
        <Label>
          科目名称表示レベル
          <RadioGroup>
            <Radio
              type="radio"
              name="displayLevel"
              value="日"
              checked={formData.paymentMethod === 'credit'}
              onChange={handleChange}
            />
            <RadioLabel>日</RadioLabel>
            <Radio
              type="radio"
              name="displayLevel"  
              value="節"
              checked={formData.paymentMethod === 'cash'}
              onChange={handleChange}
            />
            <RadioLabel>節</RadioLabel>
            <Radio
              type="radio"
              name="displayLevel"
              value="細節"
              checked={formData.paymentMethod === 'transfer'}
              onChange={handleChange}  
            />
            <RadioLabel>細節</RadioLabel>
            <Radio
              type="radio"
              name="displayLevel" 
              value="明細"
              checked={formData.paymentMethod === 'other'}
              onChange={handleChange}
            />
            <RadioLabel>明細</RadioLabel>
          </RadioGroup>
        </Label>
      </FormGroup>
      <FormGroup>
        <Label>
          借方
          <InputLarge type="text" name="debitAccount" value={formData.additionalInfo} onChange={handleChange} />
          <InputSmall type="text" name="debitAmount" value={formData.name} onChange={handleChange} />  
        </Label>
      </FormGroup>
      <FormGroup>  
        <Label>
          貸方
          <InputLarge type="text" name="creditAccount" value={formData.phoneNumber} onChange={handleChange} />
          <InputSmall type="text" name="creditAmount" value={formData.phoneNumber} onChange={handleChange} />
        </Label>
      </FormGroup>
      <StyledButton type="submit">終了</StyledButton>
      <ClearButton type="button">クリア</ClearButton>
      <SubmitButton type="submit">終了</SubmitButton>
    </FormContainer>
  );
};

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #f8f8f8;
`;

const FormTitle = styled.h2`
  margin: 0;
  font-size: 1.25rem;
`;

const FormSubtitle = styled.p`
  margin: 0;
  font-size: 0.875rem;
  color: #666;
`;

const FormGroup = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
  align-items: center;
`;

const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

const Input = styled.input`
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const InputLarge = styled(Input)`
  width: 300px;
`;

const InputSmall = styled(Input)`
  width: 100px;
`;

const Select = styled.select`
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const RadioGroup = styled.div`
  display: flex;
  gap: 1rem;
`;

const Radio = styled.input`
  margin-right: 0.25rem;
`;

const RadioLabel = styled.label`
  display: flex;
  align-items: center;
`;

const StyledButton = styled.button`
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  background-color: #0070f3;
  color: #fff;
  cursor: pointer;
  align-self: center;

  &:hover {
    background-color: #0051c7;
  }
`;

const ClearButton = styled(StyledButton)`
  background-color: #ccc;
  color: #333;

  &:hover {
    background-color: #b3b3b3;
  }  
`;

const SubmitButton = styled(StyledButton)`
  background-color: #28a745;

  &:hover {
    background-color: #218838;
  }
`;

// Usage example
const App: React.FC = () => {
  const handleFormSubmit = (data: ReservationData) => {
    console.log('Form submitted:', data);
    // Perform further actions with the form data
  };

  return (
    <div>
      <h1>Reservation Form</h1>
      <ReservationForm onSubmit={handleFormSubmit} />
    </div>
  );
};

export default App;