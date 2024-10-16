import React from 'react';
import styled from '@emotion/styled';

type Event = {
  id: number;
  date: string;
  name: string;
};

type EventListProps = {
  events: Event[];
};

const EventList: React.FC<EventListProps> = ({ events }) => {
  return (
    <Container>
      <Title>イベント一覧</Title>
      <Table>
        <thead>
          <tr>
            <TableHeader>日付</TableHeader>
            <TableHeader>イベント名</TableHeader>
          </tr>
        </thead>
        <tbody>
          {events.map((event) => (
            <TableRow key={event.id}>
              <TableCell>{event.date}</TableCell>
              <TableCell>{event.name}</TableCell>
            </TableRow>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

// スタイリング
const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
`;

const Title = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const TableHeader = styled.th`
  background-color: #f2f2f2;
  padding: 10px;
  text-align: left;
`;

const TableRow = styled.tr`
  &:nth-of-type(even) {
    background-color: #f9f9f9;
  }
`;

const TableCell = styled.td`
  padding: 10px;
`;

// サンプルデータを使用した表示用コンポーネント
const App: React.FC = () => {
  const sampleEvents: Event[] = [
    { id: 1, date: '2020/1/1', name: '元旦' },
    { id: 2, date: '2020/1/13', name: '成人の日' },
    { id: 3, date: '2020/2/11', name: '建国記念の日' },
    // ... その他のイベントデータ
  ];

  return (
    <div>
      <h1>イベントカレンダー</h1>
      <EventList events={sampleEvents} />
    </div>
  );
};

export default App;