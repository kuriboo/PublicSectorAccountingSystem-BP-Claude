import React from 'react';
import styled from '@emotion/styled';

interface ReservationFormProps {
  onSubmit: (data: ReservationData) => void;
}

interface ReservationData {
  date: string;
  time: string;
  adultCount: number;
  childCount: number;
  infantCount: number;
  discountType: string;
  stayCount: number;
  taxRate: number;
  taxAmount: number;
}

const ReservationForm: React.FC<ReservationFormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = React.useState<ReservationData>({
    date: '',
    time: '',
    adultCount: 0,
    childCount: 0,
    infantCount: 0,
    discountType: '',
    stayCount: 1,
    taxRate: 10,
    taxAmount: 0,
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = event.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit(formData);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Row>
        <Label>予約日</Label>
        <Input type="date" name="date" value={formData.date} onChange={handleChange} required />
      </Row>
      <Row>
        <Label>予算時間</Label>
        <Input type="time" name="time" value={formData.time} onChange={handleChange} required />
      </Row>
      <Row>
        <Label>予算朝食</Label>
        <Input type="number" name="adultCount" value={formData.adultCount} onChange={handleChange} min={0} />
        <Label>人</Label>
      </Row>
      <Row>
        <Label>予算料金</Label>
        <Amount>¥{34200}</Amount>
      </Row>
      <Row>
        <Label>負担割引</Label>
        <Input type="number" name="childCount" value={formData.childCount} onChange={handleChange} min={0} />
        <Label>人</Label>
      </Row>
      <Row>
        <Label>負担料金</Label>
        <Amount>¥{20000}</Amount>
      </Row>
      <Row>
        <Label>予定割引</Label>
        <Amount>¥{14200}</Amount>
      </Row>
      <Row>
        <Label>割区分</Label>
        <Select name="discountType" value={formData.discountType} onChange={handleChange}>
          <option value="">収入区分</option>
          {/* Add options for discount types */}
        </Select>
      </Row>
      <Row>
        <Label>泊数</Label>
        <Input type="number" name="stayCount" value={formData.stayCount} onChange={handleChange} min={1} />
        <Label>泊</Label>
      </Row>
      <Row>
        <Label>税抜額</Label>
        <Amount>¥{10000}</Amount>
      </Row>
      <Row>
        <Label>税抜額</Label>
        <Amount>¥{9200}</Amount>
      </Row>
      <Row>
        <Label>消費税率</Label>
        <Input type="number" name="taxRate" value={formData.taxRate} onChange={handleChange} min={0} max={100} />
        <Label>%</Label>
      </Row>
      <Row>
        <Label>消費税額</Label>
        <Amount>¥{740}</Amount>
      </Row>
      <ButtonRow>
        <Button type="button">クリア</Button>
        <Button type="submit">OK</Button>
        <Button type="button">キャンセル</Button>
      </ButtonRow>
    </Form>
  );
};

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #f5f5f5;
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const Label = styled.label`
  font-weight: bold;
`;

const Input = styled.input`
  padding: 4px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Select = styled.select`
  padding: 4px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Amount = styled.span`
  font-weight: bold;
`;

const ButtonRow = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 8px;
  margin-top: 16px;
`;

const Button = styled.button`
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  background-color: #007bff;
  color: #fff;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

// Sample usage of the ReservationForm component
const App: React.FC = () => {
  const handleSubmit = (data: ReservationData) => {
    console.log('Submitted data:', data);
    // Perform further actions with the submitted data
  };

  return (
    <div>
      <h1>Reservation Form</h1>
      <ReservationForm onSubmit={handleSubmit} />
    </div>
  );
};

export default App;