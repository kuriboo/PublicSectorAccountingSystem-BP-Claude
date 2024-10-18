import React from 'react';
import styled from '@emotion/styled';

type BookingFormProps = {
  onSubmit: (formData: FormData) => void;
};

type FormData = {
  startYear: number;
  startMonth: number;
  startDay: number;
  endYear: number;
  endMonth: number;
  endDay: number;
  numberOfPeople: number;
  purposeOfUse: string;
  paid: boolean;
  notes: string;
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #f0f0f0;
  border-radius: 5px;
  width: 100%;
  max-width: 500px;
  box-sizing: border-box;

  @media (max-width: 600px) {
    max-width: 100%;
  }
`;

const Title = styled.h2`
  margin-bottom: 20px;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
  width: 100%;
`;

const Label = styled.label`
  margin-bottom: 5px;
  font-weight: bold;
`;

const Input = styled.input`
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 3px;
`;

const Select = styled.select`
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 3px;
`;

const Checkbox = styled.input`
  margin-right: 5px;
`;

const SubmitButton = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
`;

const BookingForm: React.FC<BookingFormProps> = ({ onSubmit }) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData: FormData = {
      startYear: parseInt(e.currentTarget.startYear.value),
      startMonth: parseInt(e.currentTarget.startMonth.value),
      startDay: parseInt(e.currentTarget.startDay.value),
      endYear: parseInt(e.currentTarget.endYear.value),
      endMonth: parseInt(e.currentTarget.endMonth.value),
      endDay: parseInt(e.currentTarget.endDay.value),
      numberOfPeople: parseInt(e.currentTarget.numberOfPeople.value),
      purposeOfUse: e.currentTarget.purposeOfUse.value,
      paid: e.currentTarget.paid.checked,
      notes: e.currentTarget.notes.value,
    };
    onSubmit(formData);
  };

  return (
    <Container>
      <Title>見積要求書(記入用)作成</Title>
      <form onSubmit={handleSubmit}>
        <FormGroup>
          <Label>予算編成区分</Label>
          <Select name="budgetType" defaultValue="currentFiscalYear">
            <option value="currentFiscalYear">当初予算</option>
            {/* Add more options as needed */}
          </Select>
        </FormGroup>
        <FormGroup>
          <Label>補正</Label>
          <Input type="number" name="supplementaryBudget" />
        </FormGroup>
        <FormGroup>
          <Label>帳票種別</Label>
          <Input type="text" name="formType" defaultValue="予算見積要求書" readOnly />
        </FormGroup>
        <FormGroup>
          <Label>決算額印字</Label>
          <Checkbox type="checkbox" name="printSettlementAmount" />
          <span>当初予算見積要求書1の決算額欄に印字する金額を選択して下さい。</span>
        </FormGroup>
        <FormGroup>
          <Label>範囲指定</Label>
          <div>
            <Label>所属</Label>
            <Input type="number" name="startDepartmentCode" defaultValue="0000000" /> ～ <Input type="number" name="endDepartmentCode" defaultValue="9999999" />
          </div>
          <div>
            <Label>予算科目</Label>
            <Input type="number" name="startBudgetCode" defaultValue="00000000000000000" /> ～ <Input type="number" name="endBudgetCode" defaultValue="99999999999999999" />
          </div>
        </FormGroup>
        <SubmitButton type="submit">終了</SubmitButton>
      </form>
    </Container>
  );
};



// Sample usage
const App: React.FC = () => {
  const handleSubmit = (formData: FormData) => {
    console.log(formData);
    // Handle form submission
  };

  return (
    <div>
      <h1>Booking Form Example</h1>
      <BookingForm onSubmit={handleSubmit} />
    </div>
  );
};

export default App;