以下は、指定された要件に基づいて作成したNext.js + TypeScriptのコンポーネントです。

import React from 'react';
import styled from 'styled-components';

// 業者別営業所マスタの型定義
type OfficeData = {
  officeCode: string;
  officeName: string;
  faxNumber: string;
  email: string;
  representativeName: string;
  postalCode: string;
  address: string;
};

// コンポーネントのプロパティの型定義
type Props = {
  data: OfficeData[];
};

// スタイリング用のコンポーネント
const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  @media screen and (max-width: 600px) {
    font-size: 0.8rem;
  }
`;

const Th = styled.th`
  background-color: #f0f0f0;
  border: 1px solid #ccc;
  padding: 8px;
  text-align: left;
`;

const Td = styled.td`
  border: 1px solid #ccc;
  padding: 8px;
`;

// 業者別営業所マスタのコンポーネント
const OfficeList: React.FC<Props> = ({ data }) => {
  return (
    <Table>
      <thead>
        <tr>
          <Th>電話番号</Th>
          <Th>FAX番号</Th>
          <Th>Eメール</Th>
          <Th>代表者役職名</Th>
          <Th>代表者名</Th>
          <Th>担当者役職名</Th>
          <Th>担当者名</Th>
        </tr>
      </thead>
      <tbody>
        {data.map((office, index) => (
          <tr key={index}>
            <Td>{office.officeCode}</Td>
            <Td>{office.faxNumber}</Td>
            <Td>{office.email}</Td>
            <Td></Td>
            <Td>{office.representativeName}</Td>
            <Td></Td>
            <Td></Td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

// サンプルデータ
const sampleData: OfficeData[] = [
  {
    officeCode: '0120-100-008',
    officeName: 'テスト営業所',
    faxNumber: '03-0010-0003',
    email: 'test@example.com',
    representativeName: '代表 五郎',
    postalCode: '100-0001',
    address: '東京都港区',
  },
  {
    officeCode: '0120-100-008',
    officeName: '代表',
    faxNumber: '03-0010-0003',
    email: 'test@example.com',
    representativeName: '代表 三郎',
    postalCode: '100-0001',
    address: '東京都港区',
  },
];

// サンプルデータを使用したコンポーネントの表示
const App: React.FC = () => {
  return (
    <div>
      <h1>業者別営業所マスタ</h1>
      <OfficeList data={sampleData} />
    </div>
  );
};

export default App;