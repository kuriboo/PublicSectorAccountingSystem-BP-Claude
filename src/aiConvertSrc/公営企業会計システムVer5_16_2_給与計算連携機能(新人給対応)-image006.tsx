import React from 'react';
import styled from '@emotion/styled';

type DateRangeInputProps = {
  startDate: string;
  endDate: string;
  onConfirm: () => void;
  onCancel: () => void;
  onClose: () => void;
};

const Container = styled.div`
  background-color: #f0f0f0;
  padding: 20px;
  border-radius: 5px;
  width: 300px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);

  @media (max-width: 480px) {
    width: 100%;
  }
`;

const Title = styled.h2`
  font-size: 18px;
  margin-bottom: 10px;
`;

const DateInputContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const DateInput = styled.input`
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 3px;
  margin-right: 10px;
  width: 120px;
`;

const Separator = styled.span`
  margin: 0 5px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const Button = styled.button`
  padding: 8px 15px;
  border: none;
  border-radius: 3px;
  font-size: 14px;
  cursor: pointer;
  margin-left: 10px;

  &:hover {
    opacity: 0.8;
  }
`;

const ConfirmButton = styled(Button)`
  background-color: #007bff;
  color: #fff;
`;

const CancelButton = styled(Button)`
  background-color: #ccc;
`;

const DateRangeInput: React.FC<DateRangeInputProps> = ({
  startDate,
  endDate,
  onConfirm,
  onCancel,
  onClose,
}) => {
  return (
    <Container>
      <Title>給与支払確定</Title>
      <DateInputContainer>
        <DateInput type="text" value={startDate} readOnly />
        <Separator>~</Separator>
        <DateInput type="text" value={endDate} readOnly />
      </DateInputContainer>
      <ButtonContainer>
        <ConfirmButton onClick={onConfirm}>OK</ConfirmButton>
        <CancelButton onClick={onCancel}>クリア</CancelButton>
        <CancelButton onClick={onClose}>終了</CancelButton>
      </ButtonContainer>
    </Container>
  );
};

// Usage example
const App: React.FC = () => {
  const handleConfirm = () => {
    console.log('Confirm clicked');
  };

  const handleCancel = () => {
    console.log('Cancel clicked');
  };

  const handleClose = () => {
    console.log('Close clicked');
  };

  return (
    <DateRangeInput
      startDate="平成29年08月18日"
      endDate="平成29年09月18日"
      onConfirm={handleConfirm}
      onCancel={handleCancel}
      onClose={handleClose}
    />
  );
};

export default App;