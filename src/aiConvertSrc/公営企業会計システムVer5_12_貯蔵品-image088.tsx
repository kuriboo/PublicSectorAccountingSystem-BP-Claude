import React from 'react';
import styled from 'styled-components';

// 表の行を表すコンポーネントの型定義
type RowProps = {
  label: string;
  value: string;
};

// 表の行を表すコンポーネント
const Row: React.FC<RowProps> = ({ label, value }) => {
  return (
    <RowWrapper>
      <RowLabel>{label}</RowLabel>
      <RowValue>{value}</RowValue>
    </RowWrapper>
  );
};

// 表のコンポーネントの型定義
type TableProps = {
  data: RowProps[];
  title: string;
  date: string;
  description: string;
};

// 表のコンポーネント
const Table: React.FC<TableProps> = ({ data, title, date, description }) => {
  return (
    <TableWrapper>
      <TableHeader>
        <TableTitle>{title}</TableTitle>
        <TableDate>{date}</TableDate>
      </TableHeader>
      <TableDescription>{description}</TableDescription>
      <TableBody>
        {data.map((row, index) => (
          <Row key={index} label={row.label} value={row.value} />
        ))}
      </TableBody>
      <TableFooter>
        <TableButton>エラー確認</TableButton>
        <TableButton primary>OK</TableButton>
        <TableButton>終了</TableButton>
      </TableFooter>
    </TableWrapper>
  );
};

// サンプルデータ
const sampleData: RowProps[] = [
  { label: '本年度', value: '平成31' },
  { label: '年度', value: '令和02' },
  { label: '新年度', value: '令和02' },
];

// サンプル表示用のコンポーネント
const SampleTable: React.FC = () => {
  return (
    <Table
      data={sampleData}
      title="当年度単価分類データ複写"
      date="令和03年02月19日"
      description="本年度の貯蔵品単価分類データ内容を新年度に複写します。※対象となるマスタは以下の通りです。・貯蔵品単価分類マスタ・単価コード貯蔵品番号応表※貯蔵品単価分類データが本作成の場合、当処理は実行不要です。※新年度のマスタが設定されている場合は、新年度のマスタを削除してから本年度のマスタ内容を複写します。※当処理は何回でも実行可能ですが、新年度マスタ修正後に当処理を実行した場合は新年度修正が破棄されますので注意して下さい。"
    />
  );
};

// スタイリング
const TableWrapper = styled.div`
  background-color: #f0f0f0;
  padding: 16px;
  width: 600px;
  font-family: sans-serif;

  @media (max-width: 600px) {
    width: 100%;
  }
`;

const TableHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
`;

const TableTitle = styled.h2`
  font-size: 18px;
  margin: 0;
`;

const TableDate = styled.p`
  font-size: 14px;
  color: #666;
  margin: 0;
`;

const TableDescription = styled.p`
  font-size: 14px;
  line-height: 1.5;
  margin-bottom: 16px;
  white-space: pre-wrap;
`;

const TableBody = styled.div`
  background-color: white;
  border: 1px solid #ccc;
  padding: 8px;
  margin-bottom: 16px;
`;

const RowWrapper = styled.div`
  display: flex;
  padding: 4px 0;

  &:not(:last-child) {
    border-bottom: 1px solid #eee;
  }
`;

const RowLabel = styled.div`
  font-weight: bold;
  width: 100px;
`;

const RowValue = styled.div`
  flex: 1;
`;

const TableFooter = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const TableButton = styled.button<{ primary?: boolean }>`
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  background-color: ${(props) => (props.primary ? '#007bff' : '#f0f0f0')};
  color: ${(props) => (props.primary ? 'white' : 'black')};
  margin-left: 8px;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;

export default SampleTable;