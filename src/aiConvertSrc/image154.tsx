import React from 'react';
import styled from 'styled-components';

type ScheduleType = '登録' | '訂正' | '削除';
type RouteType = '大分発' | '中分発';

interface ScheduleInputProps {
  date: string;
  scheduleType: ScheduleType;
  routes: {
    [key in RouteType]: {
      code: string;
      name: string;
    };
  };
  onSubmit: () => void;
  onCancel: () => void;
  onPrint: () => void;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  font-size: 14px;
`;

const ScheduleTypeContainer = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 10px;
`;

const ScheduleTypeLabel = styled.label<{ checked: boolean }>`
  padding: 5px 10px;
  background-color: ${({ checked }) => (checked ? '#ccc' : 'white')};
  border: 1px solid #ccc;
  border-radius: 5px;
  cursor: pointer;
`;

const RouteContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 20px;
`;

const RouteItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;

const RouteLabel = styled.div`
  width: 60px;
`;

const RouteInput = styled.input`
  width: 100px;
  padding: 5px;
`;

const RouteButton = styled.button`
  padding: 5px 10px;
  background-color: #eee;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 10px;
`;

const ScheduleInput: React.FC<ScheduleInputProps> = ({
  date,
  scheduleType,
  routes,
  onSubmit,
  onCancel,
  onPrint,
}) => {
  const [selectedScheduleType, setSelectedScheduleType] =
    React.useState<ScheduleType>(scheduleType);

  const handleScheduleTypeChange = (type: ScheduleType) => {
    setSelectedScheduleType(type);
  };

  return (
    <Container>
      <div>{date}</div>
      <ScheduleTypeContainer>
        {(['登録', '訂正', '削除'] as const).map((type) => (
          <ScheduleTypeLabel
            key={type}
            checked={selectedScheduleType === type}
            onClick={() => handleScheduleTypeChange(type)}
          >
            <input type="radio" checked={selectedScheduleType === type} />
            {type}
          </ScheduleTypeLabel>
        ))}
      </ScheduleTypeContainer>
      <RouteContainer>
        {(Object.keys(routes) as RouteType[]).map((routeType) => {
          const route = routes[routeType];
          return (
            <RouteItem key={routeType}>
              <RouteLabel>{routeType}</RouteLabel>
              <RouteInput
                type="text"
                defaultValue={route.code}
                placeholder={route.name}
              />
              <RouteButton>前データ</RouteButton>
              <RouteButton>次データ</RouteButton>
            </RouteItem>
          );
        })}
      </RouteContainer>
      <ButtonContainer>
        <button onClick={onSubmit}>表示</button>
        <button onClick={onPrint}>行削除</button>
        <button onClick={onCancel}>終了</button>
      </ButtonContainer>
    </Container>
  );
};

// Usage example
const App: React.FC = () => {
  return (
    <ScheduleInput
      date="平成29年09月05日"
      scheduleType="登録"
      routes={{
        大分発: { code: '899', name: '所属営業' },
        中分発: { code: '899', name: '所属営業' },
      }}
      onSubmit={() => console.log('Submitted')}
      onCancel={() => console.log('Cancelled')} 
      onPrint={() => console.log('Printed')}
    />
  );
};

export default App;