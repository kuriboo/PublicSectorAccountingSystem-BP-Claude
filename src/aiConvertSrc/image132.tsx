import React from 'react';

import { useState } from 'react';
import styled from 'styled-components';

// 管理台帳の行を表す型定義
type ManagementTableRow = {
  date: string;
  code: string;
  name: string;
  type: string;
  amount: number;
  unit: string;
  price: number;
};

// コンポーネントのプロパティ型定義
type ManagementTableProps = {
  data: ManagementTableRow[];
};

// 各列のヘッダーテキスト
const headers = ['異動年月日', '名称コード', '規格コード', '管理名称', '管理規格名称', '異動数量', '単位', '異動金額'];

// 表のスタイル定義
const Table = styled.table`
  width: 100%;
  border-collapse: collapse;

  th, td {
    border: 1px solid #ccc;
    padding: 8px;
    text-align: center;
  }

  th {
    background-color: #f0f0f0;
  }
`;

// 管理台帳テーブルコンポーネント
const ManagementTable: React.FC<ManagementTableProps> = ({ data }) => {
  // ステート：現在のページ番号
  const [currentPage, setCurrentPage] = useState(1);
  // 1ページあたりの行数
  const rowsPerPage = 10;

  // 現在のページに表示する行を取得
  const getCurrentPageRows = () => {
    const startIndex = (currentPage - 1) * rowsPerPage;
    const endIndex = startIndex + rowsPerPage;
    return data.slice(startIndex, endIndex);
  };

  // ページ変更ハンドラ
  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      <Table>
        <thead>
          <tr>
            {headers.map((header, index) => (
              <th key={index}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {getCurrentPageRows().map((row, index) => (
            <tr key={index}>
              <td>{row.date}</td>
              <td>{row.code}</td>
              <td>{row.name}</td>
              <td>{row.type}</td>
              <td>{row.amount}</td>
              <td>{row.unit}</td>
              <td>{row.price}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      {/* ページネーション */}
      <div>
        {Array.from({ length: Math.ceil(data.length / rowsPerPage) }, (_, i) => (
          <button key={i} onClick={() => handlePageChange(i + 1)}>
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
};


// 使用例
const sampleData: ManagementTableRow[] = [
  {
    date: '2017-08-12',
    code: '000001',
    name: '000001',
    type: 'DIP(A1)請求書',
    amount: 75,
    unit: '本',
    price: 7000000,
  },
  // その他のサンプルデータ...
];

const App: React.FC = () => {
  return (
    <div>
      <h1>異動管理明細帳</h1>
      <ManagementTable data={sampleData} />
    </div>
  );
};

export default App;