import React from 'react';
import styled from '@emotion/styled';

type ReservationFormProps = {
  onSubmit: (formData: FormData) => void;
};

type FormData = {
  year: number;
  forecastArea: string;
  forecastType: number;
  collectionType: string;
  paymentMethod: string;
  deliveryOption: string;
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #f0f0f0;
  border-radius: 5px;
  width: 100%;
  max-width: 400px;
  margin: 0 auto;

  @media (max-width: 600px) {
    padding: 10px;
  }
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
  width: 100%;
`;

const Label = styled.label`
  font-weight: bold;
  margin-bottom: 5px;
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

const RadioGroup = styled.div`
  display: flex;
  gap: 10px;
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  align-self: flex-end;

  &:hover {
    background-color: #0056b3;
  }
`;

const ReservationForm: React.FC<ReservationFormProps> = ({ onSubmit }) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData: FormData = {
      year: Number(e.currentTarget.year.value),
      forecastArea: e.currentTarget.forecastArea.value,
      forecastType: Number(e.currentTarget.forecastType.value),
      collectionType: e.currentTarget.collectionType.value,
      paymentMethod: e.currentTarget.paymentMethod.value,
      deliveryOption: e.currentTarget.deliveryOption.value,
    };
    onSubmit(formData);
  };

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <FormGroup>
          <Label htmlFor="year">年度</Label>
          <Input type="number" id="year" name="year" defaultValue={2023} required />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="forecastArea">予算編成区分</Label>
          <Select id="forecastArea" name="forecastArea" defaultValue="決算見込" required>
            <option value="決算見込">決算見込</option>
            {/* その他のオプションを追加 */}
          </Select>
        </FormGroup>
        <FormGroup>
          <Label htmlFor="forecastType">回数</Label>
          <Input type="number" id="forecastType" name="forecastType" defaultValue={1} min={1} required />
        </FormGroup>
        <FormGroup>
          <Label>帳票種別</Label>
          <RadioGroup>
            <label>
              <input type="radio" name="collectionType" value="見積要求" defaultChecked /> 見積要求
            </label>
            <label>
              <input type="radio" name="collectionType" value="資料要求" /> 資料要求
            </label>
          </RadioGroup>
        </FormGroup>
        <FormGroup>
          <Label>様式種別</Label>
          <RadioGroup>
            <label>
              <input type="radio" name="paymentMethod" value="予備" defaultChecked /> 予備
            </label>
            <label>
              <input type="radio" name="paymentMethod" value="当円単位" /> 当円単位
            </label>
          </RadioGroup>
        </FormGroup>
        <FormGroup>
          <Label>集計単位</Label>
          <RadioGroup>
            <label>
              <input type="radio" name="deliveryOption" value="門単位" defaultChecked /> 門単位
            </label>
            <label>
              <input type="radio" name="deliveryOption" value="工円単位" /> 工円単位
            </label>
          </RadioGroup>
        </FormGroup>
        <Button type="submit">終了</Button>
      </form>
    </Container>
  );
};


// Usage example
const App: React.FC = () => {
  const handleFormSubmit = (formData: FormData) => {
    console.log('Form submitted:', formData);
    // Handle form submission logic here
  };

  return (
    <div>
      <h1>Reservation Form</h1>
      <ReservationForm onSubmit={handleFormSubmit} />
    </div>
  );
};

export default App;
