import React from 'react';
import styled from 'styled-components';

// 担当明細データの型定義
type MeisaiData = {
  支出負担年度: number;
  支出負担番号: number;
  変更回数: number;
  金額: number;
  支払種別区分: string;
  計上回数: number;
};

// コンポーネントのプロパティの型定義
type MeisaiTableProps = {
  data: MeisaiData[];
};

// テーブルのスタイル定義
const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  font-size: 14px;

  th, td {
    border: 1px solid #ccc;
    padding: 8px;
    text-align: center;
  }

  th {
    background-color: #f0f0f0;
  }
`;

// 担当明細テーブルコンポーネント
const MeisaiTable: React.FC<MeisaiTableProps> = ({ data }) => {
  return (
    <Table>
      <thead>
        <tr>
          <th>支出負担年度</th>
          <th>支出負担番号</th>
          <th>変更回数</th>
          <th>金額</th>
          <th>支払種別区分</th>
          <th>計上回数</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <td>{item.支出負担年度}</td>
            <td>{item.支出負担番号}</td>
            <td>{item.変更回数}</td>
            <td>{item.金額}</td>
            <td>{item.支払種別区分}</td>
            <td>{item.計上回数}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

// サンプルデータ
const sampleData: MeisaiData[] = [
  {
    支出負担年度: 2018,
    支出負担番号: 1,
    変更回数: 0,
    金額: 0,
    支払種別区分: '',
    計上回数: 0,
  },
  {
    支出負担年度: 2019,
    支出負担番号: 1,
    変更回数: 0,
    金額: 0,
    支払種別区分: '',
    計上回数: 0,
  },
  // ...
];

// 使用例
const MeisaiTableExample: React.FC = () => {
  return (
    <div>
      <h2>担当明細データ抽出</h2>
      <MeisaiTable data={sampleData} />
    </div>
  );
};

export default MeisaiTableExample;