import React from 'react';
import styled from '@emotion/styled';

type BookingFormProps = {
  onSubmit: (data: BookingData) => void;
};

type BookingData = {
  year: number;
  forecastCategory: string;
  round: number;
  decisionDate: string;
  collectMethod: string;
  calculationMethod: string;
  orderType: string;
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 20px;
  background-color: #f0f0f0;
  border-radius: 4px;
  width: 100%;
  max-width: 400px;
  box-sizing: border-box;

  @media (max-width: 600px) {
    max-width: 100%;
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
  width: 100%;
  box-sizing: border-box;
`;

const Select = styled.select`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 100%;
  box-sizing: border-box;
`;

const RadioGroup = styled.div`
  display: flex;
  align-items: center;
`;

const RadioLabel = styled.label`
  margin-right: 10px;
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

const BookingForm: React.FC<BookingFormProps> = ({ onSubmit }) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Collect form data and call onSubmit with the data
    const data: BookingData = {
      year: 0,
      forecastCategory: '',
      round: 0,
      decisionDate: '',
      collectMethod: '',
      calculationMethod: '',
      orderType: '',
    };
    onSubmit(data);
  };

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <FormGroup>
          <Label htmlFor="year">年度</Label>
          <Input type="number" id="year" defaultValue={2023} />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="forecastCategory">予算編成区分</Label>
          <Select id="forecastCategory">
            <option value="決算見込">決算見込</option>
            {/* Add more options */}
          </Select>
        </FormGroup>
        <FormGroup>
          <Label htmlFor="round">回数</Label>
          <Input type="number" id="round" defaultValue={1} />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="decisionDate">決算見込回数</Label>
          {/* TODO: Implement decision date selection */}
        </FormGroup>
        <FormGroup>
          <Label>集計対象</Label>
          <RadioGroup>
            <RadioLabel>
              <input type="radio" name="collectTarget" value="全体" defaultChecked /> 全体
            </RadioLabel>
            <RadioLabel>
              <input type="radio" name="collectTarget" value="ブロック" /> ブロック
            </RadioLabel>
            <RadioLabel>
              <input type="radio" name="collectTarget" value="セグメント" /> セグメント
            </RadioLabel>
          </RadioGroup>
        </FormGroup>
        <FormGroup>
          <Label>集計種別</Label>
          <RadioGroup>
            <RadioLabel>
              <input type="radio" name="calculationMethod" value="損益計算書" defaultChecked /> 損益計算書
            </RadioLabel>
            <RadioLabel>
              <input type="radio" name="calculationMethod" value="貸借対照表" /> 貸借対照表 
            </RadioLabel>
          </RadioGroup>
        </FormGroup>
        <FormGroup>
          <Label>集計単位</Label>
          <RadioGroup>
            <RadioLabel>
              <input type="radio" name="orderType" value="円単位" defaultChecked /> 円単位
            </RadioLabel>
            <RadioLabel>
              <input type="radio" name="orderType" value="千円単位" /> 千円単位
            </RadioLabel>
          </RadioGroup>
        </FormGroup>
        <Button type="submit">OK</Button>
      </form>
    </Container>
  );
};

export default BookingForm;

// Usage example
const App: React.FC = () => {
  const handleSubmit = (data: BookingData) => {
    console.log('Booking data:', data);
    // TODO: Handle form submission
  };

  return (
    <div>
      <h1>予定損益貸借集計処理</h1>
      <BookingForm onSubmit={handleSubmit} />
    </div>
  );
};