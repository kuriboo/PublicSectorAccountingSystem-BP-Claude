import React from 'react';
import styled from '@emotion/styled';

type Division = {
  code: string;
  name: string;
}

type ConcreteData = {
  division: Division;
  year: number;
  summary1: string;
  summary2: string;
  annualFee: number;
}

type YearSummaryTableProps = {
  concreteData: ConcreteData[];
}

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  
  th, td {
    padding: 8px;
    text-align: left;
    border: 1px solid #ddd;
  }

  th {
    background-color: #f2f2f2;
  }

  @media screen and (max-width: 600px) {
    th, td {
      display: block;
      width: 100%;
    }
    
    tr {
      margin-bottom: 15px;
    }
  }
`;

const YearSummaryTable: React.FC<YearSummaryTableProps> = ({ concreteData }) => {
  return (
    <Table>
      <thead>
        <tr>
          <th>種別</th>
          <th>分類1</th>
          <th>分類2</th>
          <th>耐用年数</th>
        </tr>
      </thead>
      <tbody>
        {concreteData.map((data, index) => (
          <tr key={index}>
            <td>{data.division.name}</td>
            <td>{data.summary1}</td>
            <td>{data.summary2}</td>
            <td>{data.annualFee}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

// Usage example
const sampleData: ConcreteData[] = [
  {
    division: { code: '001', name: '建物' },
    year: 50,
    summary1: '鉄骨鉄筋コンクリート造又は鉄筋コンクリート造りもの',
    summary2: '事務所用のもの',
    annualFee: 50
  },
  {
    division: { code: '002', name: '建物' }, 
    year: 45,
    summary1: '鉄骨鉄筋コンクリート造又は鉄筋コンクリート造りもの',
    summary2: '住宅用、寄宿舎用、宿泊所用及は飲食店用のもの',
    annualFee: 47
  },
  // ... more sample data
];

const App: React.FC = () => {
  return (
    <div>
      <h2>耐用年数表</h2>
      <YearSummaryTable concreteData={sampleData} />
    </div>
  );
}

export default App;