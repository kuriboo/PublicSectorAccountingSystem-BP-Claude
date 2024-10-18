import React from 'react';
import styled from '@emotion/styled';

type ReservationFormProps = {
  onSubmit: (data: ReservationData) => void;
};

type ReservationData = {
  area: string;
  reservationType: string;
  count: number;
  lastVisitDate: string;
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #f0f0f0;
  border-radius: 8px;
  width: 100%;
  max-width: 400px;
  margin: 0 auto;

  @media (max-width: 480px) {
    padding: 10px;
  }
`;

const Title = styled.h2`
  margin-bottom: 20px;
  font-size: 24px;
  text-align: center;

  @media (max-width: 480px) {
    font-size: 20px;
  }
`;

const FormGroup = styled.div`
  margin-bottom: 15px;
  width: 100%;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
`;

const Select = styled.select`
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Input = styled.input`
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  margin-top: 20px;
`;

const Button = styled.button`
  padding: 10px 20px;
  margin-left: 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const ReservationForm: React.FC<ReservationFormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = React.useState<ReservationData>({
    area: '',
    reservationType: '',
    count: 1,
    lastVisitDate: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <Container>
      <Title>予算税区分集計・調整額一覧表</Title>
      <form onSubmit={handleSubmit}>
        <FormGroup>
          <Label htmlFor="area">会計年度</Label>
          <Select id="area" name="area" value={formData.area} onChange={handleChange}>
            <option value="">令和6年度</option>
            {/* Add more area options */}
          </Select>
        </FormGroup>
        <FormGroup>
          <Label htmlFor="reservationType">予算編成区分</Label>
          <Select
            id="reservationType"
            name="reservationType"
            value={formData.reservationType}
            onChange={handleChange}
          >
            <option value="">当初予算</option>
            {/* Add more reservation type options */}
          </Select>
        </FormGroup>
        <FormGroup>
          <Label htmlFor="count">回数</Label>
          <Input
            type="number"
            id="count"
            name="count"
            min="1"
            value={formData.count}
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="lastVisitDate">最終査定値</Label>
          <Input
            type="text"
            id="lastVisitDate"
            name="lastVisitDate"
            value={formData.lastVisitDate}
            onChange={handleChange}
          />
        </FormGroup>
        <ButtonGroup>
          <Button type="button">CSV出力</Button>
          <Button type="button">クリア</Button>
          <Button type="submit">終了</Button>
        </ButtonGroup>
      </form>
    </Container>
  );
};



// Example usage
const ExampleUsage: React.FC = () => {
  const handleReservationSubmit = (data: ReservationData) => {
    console.log('Reservation data:', data);
    // Perform submission logic here
  };

  return (
    <div>
      <h1>Reservation Form Example</h1>
      <ReservationForm onSubmit={handleReservationSubmit} />
    </div>
  );
};

export default ExampleUsage;