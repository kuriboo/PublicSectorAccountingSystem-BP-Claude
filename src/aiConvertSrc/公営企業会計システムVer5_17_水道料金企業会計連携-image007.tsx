import React from 'react';
import styled from 'styled-components';

interface DataTableProps {
  data: string[][];
}

const Table = styled.table`
  border-collapse: collapse;
  width: 100%;
  font-family: monospace;
  font-size: 14px;

  th, td {
    border: 1px solid #ddd;
    padding: 8px;
    text-align: left;
  }

  th {
    background-color: #f2f2f2;
  }

  @media (max-width: 600px) {
    font-size: 12px;
  }
`;

const DataTable: React.FC<DataTableProps> = ({ data }) => {
  // Check if data is provided
  if (!data || data.length === 0) {
    return <div>No data available</div>;
  }

  return (
    <Table>
      <thead>
        <tr>
          {data[0].map((header, index) => (
            <th key={index}>{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.slice(1).map((row, rowIndex) => (
          <tr key={rowIndex}>
            {row.map((cell, cellIndex) => (
              <td key={cellIndex}>{cell}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

// Sample usage
const SampleDataTable: React.FC = () => {
  const sampleData = [
    ['ファイル(F)', '編集(E)', '変換(C)', '検索(S)', 'ツール(T)', '設定(O)', 'ウィンドウ(W)', 'ヘルプ(H)'],
    ['010', '010', '999', '2008', '2008/08/20', '0', ',', ',', '.00000007', '-2007', ',', ',', ',', '測量変換(基本: 話題)', 'さくっと!、測X', '平成20年 1月分', '平成20年 1月分', '2年', ',029F,', ',', ',060,48,0,0,0,2'],
    ['010', '010', '999', '2008', '2008/08/20', '0', ',', ',', '.00000007', '-2007', ',', ',', ',', '測量変換(基本: 話題)', 'さくっと!、測X', '平成20年 1月分', '平成20年 1月分', '2年', '8F1', '8,000,90,0,0,0,2'],
    ['010', '010', '999', '2008', '2008/08/20', '0', ',', ',', '.00000007', '-2007', ',', ',', ',', '測量変換(基本: 話題)', 'さくっと!、測X', '平成20年 2月分', '平成20年 2月分', '1年 .441F', ',', ',420,21,0,0,1'],
    ['010', '010', '999', '2008', '2008/08/20', '0', ',', ',', '.00000007', '-2007', ',', ',', ',', '測量変換(基本: 話題)', 'さくっと!、測X', '平成20年 2月分', '平成20年 2月分', '1年 .913F', ',', ',870,45,0,0,1,2']
  ];

  return <DataTable data={sampleData} />;
};

export default SampleDataTable;