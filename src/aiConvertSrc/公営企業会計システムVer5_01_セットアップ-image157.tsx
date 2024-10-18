import React from 'react';
import styled from '@emotion/styled';

type InitialValueMasterData = {
  画面CD: string;
  画面タイトル: string;
  初期値: string;
  備考: string;
};

type InitialValueMasterProps = {
  data: InitialValueMasterData[];
};

const Table = styled.table`
  border-collapse: collapse;
  width: 100%;
  
  th, td {
    border: 1px solid #ddd;
    padding: 8px;
    text-align: left;
  }

  th {
    background-color: #f2f2f2;
  }

  tr:nth-of-type(even) {
    background-color: #f9f9f9;
  }
`;

/**
 * 画面初期値マスタコンポーネント
 */
const InitialValueMaster: React.FC<InitialValueMasterProps> = ({ data }) => {
  if (!data || data.length === 0) {
    return <div>No data available</div>;
  }

  return (
    <Table>
      <thead>
        <tr>
          <th>画面CD</th>
          <th>画面タイトル</th>
          <th>初期値</th>
          <th>備考</th>        
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr key={index}>
            <td>{row.画面CD}</td>
            <td>{row.画面タイトル}</td>
            <td>{row.初期値}</td>
            <td>{row.備考}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

// Usage example
const sampleData: InitialValueMasterData[] = [
  { 画面CD: 'BRD9038', 画面タイトル: '精算基礎明細設定画面', 初期値: '1', 備考: '「積み上げる」チェックボックスの初期選択' },
  { 画面CD: 'BRD9040', 画面タイトル: '補正科目別課積率設定', 初期値: '1', 備考: '当初予算/前回補正の積算基礎行の修正可否' },
  { 画面CD: 'BRD9010', 画面タイトル: '予定損益基準値計処理', 初期値: '1', 備考: '科目レベルリラインのチェック実行有無' },
  { 画面CD: 'BRD9070', 画面タイトル: '当初予算事項明明細書作成', 初期値: '1', 備考: '「当初」ラジオボタンの初期選択' },
];

const App: React.FC = () => {
  return (
    <div>
      <h1>画面初期値マスタ</h1>
      <InitialValueMaster data={sampleData} />
    </div>
  );
};

export default App;