import React from 'react';
import styled from '@emotion/styled';

// 画面タイトルのスタイル定義
const PageTitle = styled.h2`
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 1rem;
`;

// 検索条件のスタイル定義
const SearchCondition = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
`;

const Label = styled.label`
  margin-right: 0.5rem;
`;

const Input = styled.input`
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-right: 1rem;
`;

const Button = styled.button`
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  background-color: #007bff;
  color: #fff;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

// テーブルのスタイル定義
const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const TableHeader = styled.th`
  padding: 0.5rem;
  border: 1px solid #ccc;
  background-color: #f0f0f0;
  font-weight: bold;
  text-align: left;
`;

const TableData = styled.td`
  padding: 0.5rem;
  border: 1px solid #ccc;
`;

// メインコンポーネントの型定義
interface TitleMasterProps {
  titles: string[];
}

// メインコンポーネントの実装
const TitleMaster: React.FC<TitleMasterProps> = ({ titles }) => {
  return (
    <div>
      <PageTitle>画面タイトルマスタ</PageTitle>
      <SearchCondition>
        <Label>画面タイトルコード</Label>
        <Input type="text" />
        <Label>タイトル</Label>
        <Input type="text" />
        <Button>検索</Button>
        <Button>訂正</Button>
        <Button>削除</Button>
      </SearchCondition>
      <Table>
        <thead>
          <tr>
            <TableHeader>コード</TableHeader>
            <TableHeader>タイトル</TableHeader>
            <TableHeader>記工番号</TableHeader>
          </tr>
        </thead>
        <tbody>
          {titles.map((title, index) => (
            <tr key={index}>
              <TableData>{title.split(',')[0]}</TableData>
              <TableData>{title.split(',')[1]}</TableData>
              <TableData></TableData>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

// サンプルデータを使用した表示用コンポーネント
const App: React.FC = () => {
  const sampleTitles = [
    'BFD1010,当年度データ作成',
    'BFD1011,評価情報照会',
    'BFD1020,単価計算',
    'BFD1030,当初予算データ作成',
    // ... その他のサンプルデータ
  ];

  return <TitleMaster titles={sampleTitles} />;
};

export default App;