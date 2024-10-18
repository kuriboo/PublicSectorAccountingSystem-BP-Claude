import React from 'react';
import styled from '@emotion/styled';

interface WaterRecordTableProps {
  records: WaterRecord[];
}

interface WaterRecord {
  date: string;
  time: string;
  station: string;
  status: string;
  cdNumber: string;
  waterLevel: number;
  adjustedWaterLevel: number;
}

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;

  th, td {
    padding: 8px;
    text-align: left;
    border-bottom: 1px solid #ddd;
  }

  th {
    background-color: #f2f2f2;
  }

  @media (max-width: 600px) {
    font-size: 14px;

    th, td {
      padding: 6px;
    }
  }
`;

const WaterRecordTable: React.FC<WaterRecordTableProps> = ({ records }) => {
  return (
    <Table>
      <thead>
        <tr>
          <th>日時</th>
          <th>職員CD</th>
          <th>コンピュータ名</th>
          <th>上下水CD</th>
          <th>調定CD</th>
          <th>調定年</th>
        </tr>
      </thead>
      <tbody>
        {records.map((record, index) => (
          <tr key={index}>
            <td>{record.date} {record.time}</td>
            <td>{record.station}</td>
            <td>{record.status}</td>
            <td>{record.cdNumber}</td>
            <td>{record.waterLevel}</td>
            <td>{record.adjustedWaterLevel}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

// サンプルデータ
const sampleRecords: WaterRecord[] = [
  {
    date: '2017/09/19',
    time: '23:24:59',
    station: '00000001:水道課職員1',
    status: 'SYS-003-220',
    cdNumber: 'すべて',
    waterLevel: 0,
    adjustedWaterLevel: 29.06,
  },
  {
    date: '2017/02/17',
    time: '08:53:38',
    station: '00000001:水道課職員1',
    status: 'SYS-003-220',
    cdNumber: 'すべて',
    waterLevel: 0,
    adjustedWaterLevel: 27.11,
  },
  // ... 他のレコードを追加
];

const WaterRecordTableDemo: React.FC = () => {
  return (
    <div>
      <h2>Water Record Table</h2>
      <WaterRecordTable records={sampleRecords} />
    </div>
  );
};

export default WaterRecordTableDemo;