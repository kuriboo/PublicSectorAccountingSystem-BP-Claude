import React from 'react';
import styled from '@emotion/styled';

interface ContractorInfo {
  contractorNumber: string;
  name: string;
  address: string;
  result: string;
}

interface ContractorTableProps {
  data: ContractorInfo[];
}

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  font-size: 14px;

  th, td {
    border: 1px solid #ccc;
    padding: 8px;
    text-align: left;
  }

  th {
    background-color: #f0f0f0;
    font-weight: bold;
  }

  @media (max-width: 600px) {
    font-size: 12px;

    th, td {
      padding: 6px;
    }
  }
`;

const ContractorTable: React.FC<ContractorTableProps> = ({ data }) => {
  // テーブルヘッダーの配列
  const headers = ['受注番号', '件名', '場所', '方法'];

  return (
    <Table>
      <thead>
        <tr>
          {headers.map((header, index) => (
            <th key={index}>{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((contractor, index) => (
          <tr key={index}>
            <td>{contractor.contractorNumber}</td>
            <td>{contractor.name || 'N/A'}</td>
            <td>{contractor.address || 'N/A'}</td>
            <td>{contractor.result || 'N/A'}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

// サンプルデータを用いたコンポーネントの使用例
const ContractorTableExample: React.FC = () => {
  const sampleData: ContractorInfo[] = [
    {
      contractorNumber: '42910003',
      name: '工事の受付登録',
      address: 'ほしょほしょほしょ',
      result: '指名競争入札',
    },
    // 他のサンプルデータを追加
  ];

  return (
    <div>
      <h2>契約内容</h2>
      <ContractorTable data={sampleData} />
    </div>
  );
};

export default ContractorTableExample;