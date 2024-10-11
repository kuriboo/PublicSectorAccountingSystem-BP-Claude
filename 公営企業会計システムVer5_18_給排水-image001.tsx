以下は、指定された要件に基づいて作成したNext.js + TypeScriptのコンポーネントです。

import React from 'react';
import styled from 'styled-components';

// テーブルのプロパティ型定義
type TableProps = {
  data: Array<{
    id: number;
    status: string;
    receivedDate: string;
    dueDate: string;
    sendBack: number;
    pickupDate: string;
    sendDate: string;
    endDate: string;
    constructionStart: string;
    constructionEnd: string;
    billingDate: string;
    paymentDate: string;
  }>;
};

// テーブルコンポーネント
const Table: React.FC<TableProps> = ({ data }) => {
  return (
    <TableWrapper>
      <StyledTable>
        <thead>
          <tr>
            <th>行番号</th>
            <th>ステータス</th>
            <th>受付年度</th>
            <th>受付番号</th>
            <th>会計区分</th>
            <th>受付日</th>
            <th>受付審査日</th>
            <th>施工場所1</th>
            <th>施工場所2</th>
            <th>請求額(税抜)</th>
            <th>請求額(税込)</th>
            <th>工事完了日</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={row.id}>
              <td>{index + 1}</td>
              <td>{row.status ?? '-'}</td>
              <td>{row.receivedDate.slice(0, 4) ?? '-'}</td>
              <td>{row.receivedDate.slice(-1) ?? '-'}</td>
              <td>{row.sendBack === 1 ? '1' : '-'}</td>
              <td>{row.pickupDate ?? '-'}</td>
              <td>{row.sendDate ?? '-'}</td>
              <td>{row.constructionStart ?? '-'}</td>
              <td>{row.constructionEnd ?? '-'}</td>
              <td>{row.billingDate ? `${Number(row.billingDate).toLocaleString()}` : '-'}</td>
              <td>{row.paymentDate ? `${Number(row.paymentDate).toLocaleString()}` : '-'}</td>
              <td>{row.endDate ?? '-'}</td>
            </tr>
          ))}
        </tbody>
      </StyledTable>
    </TableWrapper>
  );
};

// テーブルのスタイリング
const TableWrapper = styled.div`
  overflow-x: auto;
`;

const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;

  th,
  td {
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

// サンプルデータ
const sampleData = [
  {
    id: 1,
    status: '調査済',
    receivedDate: '2017',
    dueDate: '1',
    sendBack: 1,
    pickupDate: '2018/02/03',
    sendDate: '2018/02/03',
    endDate: '2018/02/03',
    constructionStart: '施工場所1-1',
    constructionEnd: '施工場所2-1',
    billingDate: '990-0006',
    paymentDate: '990-0007',
  },
  // ...他のサンプルデータ
];

// 使用例
const TableExample: React.FC = () => {
  return (
    <div>
      <h2>給排水工事一覧</h2>
      <Table data={sampleData} />
    </div>
  );
};

export default TableExample;

このコンポーネントは、指定された要件に従って作成されています。主な特徴は以下の通りです：

1. TypeScriptの型定義を使用し、テーブルのプロパティの型を定義しています。
2. styled-componentsを使用してCSS-in-JSでスタイリングを行い、レスポンシブデザインを考慮しています。
3. テーブルの各セルでは、データが存在しない場合に'-'を表示するようにしています。
4. 請求額と請求額(税込)は、数値がある場合にカンマ区切りで表示されます。
5. サンプルデータを使用して、コンポーネントの使用例を示しています。

このコンポーネントは再利用可能で、プロパティを通じてカスタマイズ可能です。必要に応じて、プロパティやスタイリングを調整することができます。