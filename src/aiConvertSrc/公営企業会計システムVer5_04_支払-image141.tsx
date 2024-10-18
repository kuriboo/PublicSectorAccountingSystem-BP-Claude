import React from 'react';
import styled from '@emotion/styled';

interface FormProps {
  onSubmit: (data: FormData) => void;
}

interface FormData {
  rangeFrom: string;
  rangeTo: string;
  paymentDate: string;
  paymentMethod: string;
  segment: string;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #f0f0f0;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
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

const ButtonGroup = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  margin-top: 20px;
`;

const Button = styled.button`
  padding: 8px 16px;
  margin-left: 10px;
  border: none;
  border-radius: 4px;
  background-color: #007bff;
  color: #fff;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const PaymentSupportDatesForm: React.FC<FormProps> = ({ onSubmit }) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formData: FormData = {
      rangeFrom: (e.currentTarget as any).rangeFrom.value,
      rangeTo: (e.currentTarget as any).rangeTo.value,
      paymentDate: (e.currentTarget as any).paymentDate.value,
      paymentMethod: (e.currentTarget as any).paymentMethod.value,
      segment: (e.currentTarget as any).segment.value,
    };
    onSubmit(formData);
  };

  return (
    <Container>
      <Title>所属別支払予定表作成</Title>
      <form onSubmit={handleSubmit}>
        <FormGroup>
          <Label>範囲指定</Label>
          <Input type="text" name="rangeFrom" defaultValue="0000000" />
          <span>～</span>
          <Input type="text" name="rangeTo" defaultValue="9999999" />
        </FormGroup>
        <FormGroup>
          <Label>支払予定日</Label>
          <Input type="date" name="paymentDate" />
        </FormGroup>
        <FormGroup>
          <Label>支払方法</Label>
          <Select name="paymentMethod">
            <option value="all">すべて</option>
            {/* Add more payment method options */}
          </Select>
        </FormGroup>
        <FormGroup>
          <Label>セグメント</Label>
          <Select name="segment">
            <option value="deduction">控除</option>
            <option value="transfer">振込</option>
            <option value="all">すべて</option>
          </Select>
        </FormGroup>
        <ButtonGroup>
          <Button type="button">クリア</Button>
          <Button type="submit">終了</Button>
          <Button type="button">OK</Button>
        </ButtonGroup>
      </form>
    </Container>
  );
};

// Example usage
const App: React.FC = () => {
  const handleSubmit = (data: FormData) => {
    console.log('Form submitted:', data);
    // Perform further actions with the form data
  };

  return (
    <div>
      <PaymentSupportDatesForm onSubmit={handleSubmit} />
    </div>
  );
};

export default App;