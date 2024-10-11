import React from 'react';
import styled from '@emotion/styled';

type DataEntry = {
  date: string;
  location: string;
  eventName: string;
  eventDetail: string;
};

type Props = {
  data: DataEntry[];
};

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  font-size: 14px;

  @media (max-width: 600px) {
    font-size: 12px;
  }
`;

const TableHeader = styled.th`
  padding: 8px;
  text-align: left;
  border-bottom: 1px solid #ddd;
  white-space: nowrap;
`;

const TableCell = styled.td`
  padding: 8px;
  border-bottom: 1px solid #ddd;
`;

const EventList: React.FC<Props> = ({ data }) => {
  return (
    <Table>
      <thead>
        <tr>
          <TableHeader>日付</TableHeader>
          <TableHeader>場所</TableHeader>
          <TableHeader>イベント名</TableHeader>
          <TableHeader>詳細</TableHeader>
        </tr>
      </thead>
      <tbody>
        {data.map((entry, index) => (
          <tr key={index}>
            <TableCell>{entry.date}</TableCell>
            <TableCell>{entry.location}</TableCell>
            <TableCell>{entry.eventName}</TableCell>
            <TableCell>{entry.eventDetail}</TableCell>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

// サンプルデータを使用した表示用コンポーネント
const SampleData: DataEntry[] = [
  {
    date: '2001年3月',
    location: '福岡ブラザー',
    eventName: '現代データ',
    eventDetail: '2000年までのデータ',
  },
  {
    date: '2001年4月',
    location: '福岡ブラザー',
    eventName: '現代データ',
    eventDetail: '2000年までのデータ',
  },
  // ... 他のサンプルデータ
];

const EventListContainer: React.FC = () => {
  return (
    <div>
      <h2>イベント一覧</h2>
      <EventList data={SampleData} />
    </div>
  );
};

export default EventListContainer;