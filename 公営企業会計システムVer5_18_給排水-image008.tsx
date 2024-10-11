import React from 'react';
import styled from 'styled-components';

// 検索文字列の入力フィールドのスタイル
const SearchInput = styled.input`
  width: 100%;
  padding: 8px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  margin-bottom: 16px;
`;

// テーブルのスタイル
const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 16px;
`;

// テーブルヘッダーのスタイル
const TableHeader = styled.th`
  padding: 8px;
  text-align: left;
  background-color: #f2f2f2;
  border-bottom: 1px solid #ddd;
`;

// テーブル行のスタイル
const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f9f9f9;
  }
`;

// テーブルセルのスタイル
const TableCell = styled.td`
  padding: 8px;
  border-bottom: 1px solid #ddd;
`;

// ボタンのスタイル
const Button = styled.button`
  padding: 8px 16px;
  font-size: 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-right: 8px;

  &:last-child {
    margin-right: 0;
  }
`;

// コードリストのプロパティの型定義
type CodeListProps = {
  codes: {
    code: string;
    name: string;
  }[];
};

// コードリストコンポーネント
const CodeList: React.FC<CodeListProps> = ({ codes }) => {
  const [searchText, setSearchText] = React.useState('');

  // 検索文字列でコードリストをフィルタリング
  const filteredCodes = codes.filter((code) =>
    code.name.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <div>
      <SearchInput
        type="text"
        placeholder="氏名検索文字列"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
      <Table>
        <thead>
          <TableRow>
            <TableHeader>担当者コード</TableHeader>
            <TableHeader>担当者氏名</TableHeader>
          </TableRow>
        </thead>
        <tbody>
          {filteredCodes.map((code) => (
            <TableRow key={code.code}>
              <TableCell>{code.code}</TableCell>
              <TableCell>{code.name}</TableCell>
            </TableRow>
          ))}
        </tbody>
      </Table>
      <div>
        <Button>OK</Button>
        <Button>クリア</Button>
        <Button>キャンセル</Button>
      </div>
    </div>
  );
};

// サンプルデータ
const sampleCodes = [
  { code: '00606', name: '一' },
  { code: '00609', name: '義' },
  { code: '00678', name: '彦' },
  { code: '00780', name: '宗子' },
  { code: '00815', name: '利' },
  { code: '00817', name: '定' },
  { code: '00828', name: '人' },
  { code: '00829', name: '司' },
  { code: '00836', name: '司' },
  { code: '00996', name: '子' },
  { code: '01001', name: '子' },
  { code: '01014', name: '隆' },
];

// 使用例
const App: React.FC = () => {
  return (
    <div>
      <h1>担当者検索</h1>
      <CodeList codes={sampleCodes} />
    </div>
  );
};

export default App;