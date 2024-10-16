import React from 'react';
import styled from 'styled-components';

interface ReservationFormProps {
  month: string;
  onSubmit: () => void;
  onCancel: () => void;
}

const ReservationForm: React.FC<ReservationFormProps> = ({ month, onSubmit, onCancel }) => {
  return (
    <FormContainer>
      <MonthText>{month}</MonthText>
      <ButtonContainer>
        <Button onClick={onSubmit}>OK</Button>
        <Button onClick={onCancel}>クリア</Button>
        <CancelButton onClick={onCancel}>キャンセル</CancelButton>
      </ButtonContainer>
    </FormContainer>
  );
};

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 300px;
  
  @media (max-width: 480px) {
    width: 100%;
  }
`;

const MonthText = styled.p`
  font-size: 18px;
  margin-bottom: 20px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const Button = styled.button`
  padding: 8px 16px;
  font-size: 14px;
  border: none;
  border-radius: 4px;
  background-color: #007bff;
  color: #fff;
  cursor: pointer;
  
  &:hover {
    background-color: #0056b3;
  }
`;

const CancelButton = styled(Button)`
  background-color: #dc3545;
  
  &:hover {
    background-color: #a71d2a;
  }
`;

// Sample usage
const App: React.FC = () => {
  const handleSubmit = () => {
    // Handle form submission
    console.log('Form submitted');
  };

  const handleCancel = () => {
    // Handle form cancellation
    console.log('Form cancelled');
  };

  return (
    <div>
      <h1>Reservation Form</h1>
      <ReservationForm
        month="01月01日"
        onSubmit={handleSubmit}
        onCancel={handleCancel}
      />
    </div>
  );
};

export default App;