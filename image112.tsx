import React from 'react';
import styled from 'styled-components';

// テーブルのデータ型定義
type TableData = {
  id: number;
  date: string;
  temperature: number;
  weather: string;
  comment: string;
}[];

// コンポーネントのプロパティ型定義
type TableProps = {
  data: TableData;
};

// テーブルコンポーネント
const Table: React.FC<TableProps> = ({ data }) => {
  return (
    <TableWrapper>
      <TableHeader>
        <tr>
          <HeaderCell>日付</HeaderCell>
          <HeaderCell>気温</HeaderCell>
          <HeaderCell>天気</HeaderCell>
          <HeaderCell>備考</HeaderCell>
        </tr>
      </TableHeader>
      <TableBody>
        {data.map((row) => (
          <TableRow key={row.id}>
            <TableCell>{row.date}</TableCell>
            <TableCell>{row.temperature}</TableCell>
            <TableCell>{row.weather}</TableCell>
            <TableCell>{row.comment}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </TableWrapper>
  );
};

// スタイリング
const TableWrapper = styled.table`
  width: 100%;
  border-collapse: collapse;
  font-size: 14px;

  @media (max-width: 600px) {
    font-size: 12px;
  }
`;

const TableHeader = styled.thead`
  background-color: #f2f2f2;
  font-weight: bold;
`;

const HeaderCell = styled.th`
  padding: 10px;
  text-align: left;
  border: 1px solid #ddd;
`;

const TableBody = styled.tbody``;

const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f9f9f9;
  }
`;

const TableCell = styled.td`
  padding: 10px;
  border: 1px solid #ddd;
`;

// サンプルデータ
const sampleData: TableData = [
  { id: 1, date: '2001年3月', temperature: '最低気温-3℃', weather: '積雪データ 11cm程より冷え込み', comment: '' },
  { id: 2, date: '2001年4月', temperature: '最高気温23℃', weather: '18時頃から5℃前後冷え込み', comment: '' },
  { id: 3, date: '2001年5月', temperature: '最高気温23-28℃', weather: '朝から気温上昇 日中は上着がいらないほど', comment: '' },
  { id: 4, date: '2001年6月', temperature: '最高気温32℃', weather: '梅雨入り', comment: '入梅宣言' },
  { id: 5, date: '2001年7月', temperature: '最高気温33-34℃', weather: '梅雨明け', comment: '猛暑日が続く' },
  { id: 6, date: '2001年8月', temperature: '最高気温35℃', weather: '', comment: '酷暑' },
  { id: 7, date: '2001年9月以降のデータが抜けている', temperature: 0, weather: '', comment: 'データ不足のため表示できない' },
];

// 使用例
const TableExample: React.FC = () => {
  return (
    <div>
      <h2>気温と天気の履歴テーブル</h2>
      <Table data={sampleData} />
    </div>
  );
};

export default TableExample;