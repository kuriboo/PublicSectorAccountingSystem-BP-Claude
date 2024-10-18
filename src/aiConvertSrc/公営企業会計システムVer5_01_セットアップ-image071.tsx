import React from 'react';
import styled from '@emotion/styled';

// 資金残高預金種別マスタの型定義
interface DepositType {
  code: string;
  name: string;
}

// 資金残高預金種別マスタのプロパティ型
interface DepositTypeListProps {
  depositTypes: DepositType[];
}

// 資金残高預金種別マスタのスタイル定義
const Table = styled.table`
  width: 100%;
  border-collapse: collapse;

  th, td {
    border: 1px solid #ccc;
    padding: 8px;
    text-align: left;
  }

  th {
    background-color: #f2f2f2;
  }
`;

// 資金残高預金種別マスタコンポーネント
const DepositTypeList: React.FC<DepositTypeListProps> = ({ depositTypes }) => {
  return (
    <Table>
      <thead>
        <tr>
          <th>コード</th>
          <th>名称</th>
        </tr>
      </thead>
      <tbody>
        {depositTypes.map((type) => (
          <tr key={type.code}>
            <td>{type.code}</td>
            <td>{type.name}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

// サンプルデータ
const sampleData: DepositType[] = [
  { code: '01', name: '現金' },
  { code: '02', name: '当座預金' },
  { code: '03', name: '普通預金' },
  { code: '04', name: '普通定期' },
  { code: '05', name: '大口定期' },
  { code: '06', name: '外貨預金' },
  { code: '07', name: 'NCD' },
  { code: '08', name: 'MMC' },
  { code: '09', name: '譲渡預金' },
];

// サンプルデータを使用する表示用コンポーネント
const DepositTypeListSample: React.FC = () => {
  return (
    <div>
      <h2>資金残高預金種別マスタ</h2>
      <DepositTypeList depositTypes={sampleData} />
    </div>
  );
};

export default DepositTypeListSample;