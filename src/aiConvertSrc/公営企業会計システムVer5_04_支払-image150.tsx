import React from 'react';
import styled from 'styled-components';

interface SupportScheduleProps {
  targetDate: string;
  supportNumber: string;
  isGuidanceRequired: boolean;
}

const SupportSchedule: React.FC<SupportScheduleProps> = ({
  targetDate,
  supportNumber,
  isGuidanceRequired,
}) => {
  return (
    <Container>
      <Row>
        <Label>支払予定日</Label>
        <Value>{targetDate}</Value>
      </Row>
      <Row>
        <Label>決定番号</Label>
        <Value>{supportNumber}</Value>
      </Row>
      <Row>
        <Label>決定番号ごとに改行をする</Label>
        <Value>
          <Checkbox type="checkbox" checked={isGuidanceRequired} readOnly />
        </Value>
      </Row>
    </Container>
  );
};

const Container = styled.div`
  background-color: #f0f0f0;
  padding: 16px;
  border-radius: 4px;
`;

const Row = styled.div`
  display: flex;
  margin-bottom: 8px;

  &:last-child {
    margin-bottom: 0;
  }
`;

const Label = styled.span`
  font-weight: bold;
  margin-right: 8px;
`;

const Value = styled.span`
  flex: 1;
`;

const Checkbox = styled.input`
  margin-right: 4px;
`;

// Usage example
const App: React.FC = () => {
  return (
    <SupportSchedule
      targetDate="平成29年06月17日"
      supportNumber="999999"
      isGuidanceRequired={false}
    />
  );
};

export default App;