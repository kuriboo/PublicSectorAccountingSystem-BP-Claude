import React from 'react';
import styled from '@emotion/styled';

type SupportScheduleProps = {
  supportDate: string;
  onEditClick: () => void;
};

const SupportSchedule: React.FC<SupportScheduleProps> = ({ supportDate, onEditClick }) => {
  return (
    <Container>
      <Title>支払予定日マスタ</Title>
      <DateContainer>
        <DateLabel>支払予定日</DateLabel>
        <DateValue>{supportDate}</DateValue>
      </DateContainer>
      <EditButton onClick={onEditClick}>編集</EditButton>
    </Container>
  );
};

// Styles
const Container = styled.div`
  background-color: #f0f0f0;
  padding: 16px;
  border-radius: 4px;
`;

const Title = styled.h2`
  font-size: 18px;
  margin-bottom: 8px;
`;

const DateContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
`;

const DateLabel = styled.span`
  font-weight: bold;
  margin-right: 8px;
`;

const DateValue = styled.span`
  font-size: 16px;
`;

const EditButton = styled.button`
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }
`;

// Usage example
const App: React.FC = () => {
  const handleEditClick = () => {
    // Handle edit button click
    console.log('Edit button clicked');
  };

  return (
    <div>
      <SupportSchedule supportDate="平成29年08月30日" onEditClick={handleEditClick} />
    </div>
  );
};

export default App;