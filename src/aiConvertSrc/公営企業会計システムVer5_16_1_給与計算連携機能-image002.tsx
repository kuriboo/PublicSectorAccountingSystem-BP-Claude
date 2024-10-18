import React from 'react';
import styled from '@emotion/styled';

type RemovalData = {
  no: string;
  fixedDate: string;
  determination: string;
  memoDate: string;
  expirationDate: string;
  unitPrice: number;
  dayCount: number;
  manageCost: number;
  pay: number;
  controlNo: string;
};

type RemovalTableProps = {
  data: RemovalData[];
};

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  font-size: 14px;

  th, td {
    border: 1px solid #ccc;
    padding: 8px;
    text-align: center;
  }

  th {
    background-color: #f0f0f0;
  }

  @media (max-width: 600px) {
    font-size: 12px;

    th, td {
      padding: 4px;
    }
  }
`;

const RemovalTable: React.FC<RemovalTableProps> = ({ data }) => {
  return (
    <Table>
      <thead>
        <tr>
          <th>需要処理</th>
          <th>決定年度</th>
          <th>決定番号</th>
          <th>明細日</th>
          <th>支給年月日</th>
          <th>会計年度</th>
          <th>日コード</th>
          <th>管理区分</th>
          <th>支給額</th>
          <th>控除額</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <td>{item.no}</td>
            <td>{item.fixedDate}</td>
            <td>{item.determination}</td>
            <td>{item.memoDate}</td>
            <td>{item.expirationDate}</td>
            <td>{item.unitPrice}</td>
            <td>{item.dayCount}</td>
            <td>{item.manageCost}</td>
            <td>{item.pay}</td>
            <td>{item.controlNo}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

// Usage example
const SampleRemovalTable: React.FC = () => {
  const sampleData: RemovalData[] = [
    {
      no: '2021',
      fixedDate: '124',
      determination: '1',
      memoDate: '令和03年12月25日',
      expirationDate: '2021',
      unitPrice: 54000,
      dayCount: 1.0,
      manageCost: 200000,
      pay: 200000,
      controlNo: '0117分給与連携',
    },
    // Add more sample data...
  ];

  return (
    <div>
      <h2>給与データ取込削除</h2>
      <RemovalTable data={sampleData} />
    </div>
  );
};

export default RemovalTable;