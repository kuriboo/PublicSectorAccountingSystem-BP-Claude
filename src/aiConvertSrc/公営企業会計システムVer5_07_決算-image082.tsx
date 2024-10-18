import React from 'react';
import styled from '@emotion/styled';

type ReceiptEntry = {
  予算款: string;
  予算項: string;
  予算目: string;
  予算節: string;
  特定収入額: number;
  特定収入以外の額: number;
  内訳人力: number;
};

type ReceiptTableProps = {
  data: ReceiptEntry[];
};

const TableContainer = styled.div`
  overflow-x: auto;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  
  th, td {
    border: 1px solid #ccc;
    padding: 8px;
    text-align: left;
  }

  th {
    background-color: #f0f0f0;
  }

  @media (max-width: 600px) {
    th, td {
      display: block;
      width: 100%;
    }
  
    tr {
      border-bottom: 2px solid #ccc;
    }
  }
`;

const ReceiptTable: React.FC<ReceiptTableProps> = ({ data }) => {
  return (
    <TableContainer>
      <Table>
        <thead>
          <tr>
            <th>予算款</th>
            <th>予算項</th>
            <th>予算目</th>
            <th>予算節</th>
            <th>特定収入額</th>
            <th>特定収入以外の額</th>
            <th>内訳人力</th>
          </tr>
        </thead>
        <tbody>
          {data.map((entry, index) => (
            <tr key={index}>
              <td>{entry.予算款}</td>
              <td>{entry.予算項}</td>
              <td>{entry.予算目}</td>
              <td>{entry.予算節}</td>
              <td>{entry.特定収入額.toLocaleString()}</td>
              <td>{entry.特定収入以外の額.toLocaleString()}</td>
              <td>{entry.内訳人力.toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </TableContainer>
  );
};

// Usage example
const sampleData: ReceiptEntry[] = [
  {
    予算款: '水道事業収益',
    予算項: '営業収益',
    予算目: '受託工事収益',
    予算節: '受託工事収益',
    特定収入額: 306517040,
    特定収入以外の額: 0,
    内訳人力: 0,
  },
  {
    予算款: '水道事業収益',
    予算項: '営業収益',
    予算目: 'その他営業収益',
    予算節: '雑収益',
    特定収入額: 80666,
    特定収入以外の額: 11000,
    内訳人力: 0,
  },
  // ... more sample data
];

const App: React.FC = () => {
  return (
    <div>
      <h1>特定収入項目設定</h1>
      <ReceiptTable data={sampleData} />
    </div>
  );
};

export default App;