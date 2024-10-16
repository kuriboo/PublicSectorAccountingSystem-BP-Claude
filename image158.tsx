import React from 'react';
import styled from 'styled-components';

// 画面の初期値マスタのデータ型定義
type InitialValue = {
  画面CD: string;
  画面タイトル: string;
  ID: number;
  初期値: string;
  備考: string;
  画面限定: boolean;
};

// 画面の初期値マスタのプロパティ型定義
type InitialValuesTableProps = {
  initialValues: InitialValue[];
};

// テーブルのスタイル定義
const Table = styled.table`
  width: 100%;
  border-collapse: collapse;

  th, td {
    border: 1px solid #ccc;
    padding: 8px;
    text-align: left;
  }

  th {
    background-color: #f0f0f0;
    font-weight: bold;
  }
`;

/**
 * 画面の初期値マスタのテーブルコンポーネント
 */
const InitialValuesTable: React.FC<InitialValuesTableProps> = ({ initialValues }) => {
  return (
    <Table>
      <thead>
        <tr>
          <th>画面CD</th>
          <th>画面タイトル</th>
          <th>ID</th>
          <th>初期値</th>
          <th>備考</th>
          <th>画面限定</th>
        </tr>
      </thead>
      <tbody>
        {initialValues.map((value, index) => (
          <tr key={index}>
            <td>{value.画面CD}</td>
            <td>{value.画面タイトル}</td>
            <td>{value.ID}</td>
            <td>{value.初期値}</td>
            <td>{value.備考}</td>
            <td>{value.画面限定 ? '〇' : '-'}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

// サンプルデータ
const sampleData: InitialValue[] = [
  {
    画面CD: 'BPD9038',
    画面タイトル: '稽査基礎明細登録画面',
    ID: 1,
    初期値: '',
    備考: '「積み上げする」チェックボックスの初期選択',
    画面限定: true,
  },
  {
    画面CD: 'BPD9040',
    画面タイトル: '補正科目別集計表発生',
    ID: 1,
    初期値: '0',
    備考: '当初予算／前回補正の種別選択の初期表示',
    画面限定: false,
  },
  // 他のサンプルデータ...
];

/**
 * 画面の初期値マスタのテーブルを表示するサンプルコンポーネント
 */
const SampleInitialValuesTable: React.FC = () => {
  return (
    <div>
      <h2>画面の初期値マスタ</h2>
      <InitialValuesTable initialValues={sampleData} />
    </div>
  );
};

export default SampleInitialValuesTable;