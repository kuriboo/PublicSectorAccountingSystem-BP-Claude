import React from 'react';
import styled from '@emotion/styled';

type Item = {
  category: string;
  currentTotalAmount: number;
  currentTotalPercent: number;
  previousTotalAmount: number;
  previousTotalPercent: number;
};

type TableProps = {
  items: Item[];
};

const TableContainer = styled.div`
  overflow-x: auto;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  
  th, td {
    padding: 8px;
    text-align: right;
    border: 1px solid #ddd;
  }

  th {
    background-color: #f2f2f2;
  }

  @media (max-width: 600px) {
    th, td {
      padding: 4px;
      font-size: 12px;
    }
  }
`;

const Amount = styled.td<{ negative?: boolean }>`
  color: ${({ negative }) => (negative ? 'red' : 'inherit')};
`;

const FinancialTable: React.FC<TableProps> = ({ items }) => {
  return (
    <TableContainer>
      <Table>
        <thead>
          <tr>
            <th>項目</th>
            <th>当期31・4・1～令和2・3・31</th>
            <th>総資産対比率</th>
            <th>前期30年度末</th>
            <th>総資産対比率</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => (
            <tr key={index}>
              <td>{item.category}</td>
              <Amount negative={item.currentTotalAmount < 0}>{item.currentTotalAmount.toLocaleString()}</Amount>
              <td>{item.currentTotalPercent.toFixed(2)}%</td>
              <Amount negative={item.previousTotalAmount < 0}>{item.previousTotalAmount.toLocaleString()}</Amount>
              <td>{item.previousTotalPercent.toFixed(2)}%</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </TableContainer>
  );
};

// サンプルデータを用いた表示例
const SampleData: Item[] = [
  {
    category: '流動資産計',
    currentTotalAmount: 6465491000,
    currentTotalPercent: 22.7,
    previousTotalAmount: 525023000,
    previousTotalPercent: 6.99,
  },
  // ... その他のデータを追加
];

const FinancialTableExample: React.FC = () => {
  return (
    <div>
      <h2>財務諸表1-1</h2>
      <FinancialTable items={SampleData} />
    </div>
  );
};

export default FinancialTableExample;