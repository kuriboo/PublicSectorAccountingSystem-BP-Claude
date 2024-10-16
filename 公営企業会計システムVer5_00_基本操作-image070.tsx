import React from 'react';
import styled from 'styled-components';

// 型定義
interface EventProps {
  title: string;
  date: string;
  description: string;
}

interface SchedulerProps {
  events: EventProps[];
}

// スタイリング
const SchedulerContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 20px;
  box-sizing: border-box;
`;

const SchedulerHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const SchedulerTitle = styled.h2`
  font-size: 24px;
  margin: 0;
`;

const SchedulerBody = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-auto-rows: 100px;
  gap: 10px;
`;

const EventItem = styled.div`
  background-color: #f0f0f0;
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #e0e0e0;
  }
`;

const EventTitle = styled.h3`
  font-size: 18px;
  margin: 0;
`;

const EventDate = styled.p`
  font-size: 14px;
  color: #666;
  margin: 5px 0;
`;

const EventDescription = styled.p`
  font-size: 14px;
  margin: 0;
`;

// スケジューラーコンポーネント
const Scheduler: React.FC<SchedulerProps> = ({ events }) => {
  // イベントデータがない場合の処理
  if (!events || events.length === 0) {
    return <div>No events available.</div>;
  }

  return (
    <SchedulerContainer>
      <SchedulerHeader>
        <SchedulerTitle>Event Scheduler</SchedulerTitle>
      </SchedulerHeader>
      <SchedulerBody>
        {events.map((event, index) => (
          <EventItem key={index}>
            <EventTitle>{event.title}</EventTitle>
            <EventDate>{event.date}</EventDate>
            <EventDescription>{event.description}</EventDescription>
          </EventItem>
        ))}
      </SchedulerBody>
    </SchedulerContainer>
  );
};

// サンプルデータ
const sampleEvents: EventProps[] = [
  {
    title: 'Meeting',
    date: '2023-06-01',
    description: 'Team meeting at 10:00 AM',
  },
  {
    title: 'Conference',
    date: '2023-06-05',
    description: 'Annual conference',
  },
  // 他のサンプルイベントを追加
];

// 使用例
const SchedulerExample: React.FC = () => {
  return <Scheduler events={sampleEvents} />;
};

export default SchedulerExample;