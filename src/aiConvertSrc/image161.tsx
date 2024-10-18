import React from 'react';
import styled from '@emotion/styled';

type Format = {
  決定No: string;
  所属: string;
  支払予定日: string;
  予算現額: number;
  負担累計: number;
  予算残額: number;
  控除合計: number;
  差引金額: number;
  摘要: string;
  支払先: string;
  支払回数: string;
  期間: string;
  請求書番号: string;
  予算所属: string;
  枠区分: string;
  仕所: string;
  氏名: string;
  支払済印: string;
}

type Props = {
  formatList: Format[];
}

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;

  th, td {
    border: 1px solid #ccc;
    padding: 8px;
    text-align: center;
  }

  th {
    background-color: #f2f2f2;
  }

  @media screen and (max-width: 600px) {
    font-size: 12px;
  }
`;

const FormatTable: React.FC<Props> = ({ formatList }) => {
  if (!formatList || formatList.length === 0) {
    return <div>No data available</div>;
  }

  return (
    <Table>
      <thead>
        <tr>
          <th>決定No</th>
          <th>所属</th>
          <th>支払予定日</th>
          <th>予算現額</th>
          <th>負担累計</th>
          <th>予算残額</th>
          <th>控除合計</th>
          <th>差引金額</th>
          <th>摘要</th>
          <th>支払先</th>
          <th>支払回数</th>
          <th>期間</th>
          <th>請求書番号</th>
          <th>予算所属</th>
          <th>枠区分</th>
          <th>仕所</th>
          <th>氏名</th>
          <th>支払済印</th>
        </tr>
      </thead>
      <tbody>
        {formatList.map((format, index) => (
          <tr key={index}>
            <td>{format.決定No}</td>
            <td>{format.所属}</td>
            <td>{format.支払予定日}</td>
            <td>{format.予算現額}</td>
            <td>{format.負担累計}</td>
            <td>{format.予算残額}</td>
            <td>{format.控除合計}</td>
            <td>{format.差引金額}</td>
            <td>{format.摘要}</td>
            <td>{format.支払先}</td>
            <td>{format.支払回数}</td>
            <td>{format.期間}</td>
            <td>{format.請求書番号}</td>
            <td>{format.予算所属}</td>
            <td>{format.枠区分}</td>
            <td>{format.仕所}</td>
            <td>{format.氏名}</td>
            <td>{format.支払済印}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

// Usage example
const sampleData: Format[] = [
  {
    決定No: '20',
    所属: '中央捕え',
    支払予定日: '12',
    予算現額: 12,
    負担累計: 14,
    予算残額: 14,
    控除合計: 14,
    差引金額: 14,
    摘要: '均等割り付け',
    支払先: '均等割り付け',
    支払回数: '均等割り付け',
    期間: '均等割り付け',
    請求書番号: '均等割り付け',
    予算所属: '中央捕え',
    枠区分: '中央捕え',
    仕所: '左詰め',
    氏名: '4',
    支払済印: '均等割り付け',
  },
  // Add more sample data as needed
];

const App: React.FC = () => {
  return (
    <div>
      <h1>Format Table Example</h1>
      <FormatTable formatList={sampleData} />
    </div>
  );
};

export default App;