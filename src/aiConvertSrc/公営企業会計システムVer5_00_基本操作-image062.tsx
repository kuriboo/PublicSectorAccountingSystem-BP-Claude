import React from 'react';
import styled from 'styled-components';

// ResultItemコンポーネントの型定義
type ResultItemProps = {
  label: string;
  value: string;
};

// ResultItemコンポーネント
const ResultItem: React.FC<ResultItemProps> = ({ label, value }) => {
  // 値が空の場合は表示しない
  if (!value) return null;

  return (
    <ItemWrapper>
      <Label>{label}</Label>
      <Value>{value}</Value>
    </ItemWrapper>
  );
};

// ResultItemのスタイリング
const ItemWrapper = styled.div`
  display: flex;
  margin-bottom: 10px;

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

const Label = styled.div`
  width: 100px;
  font-weight: bold;
  margin-right: 10px;

  @media (max-width: 600px) {
    width: auto;
    margin-bottom: 5px;
  }
`;

const Value = styled.div`
  flex: 1;
`;

// ResultTableコンポーネントの型定義
type ResultTableProps = {
  ip: string;
  code: string;
  result: string;
};

// ResultTableコンポーネント
const ResultTable: React.FC<ResultTableProps> = ({ ip, code, result }) => {
  return (
    <TableWrapper>
      <ResultItem label="IPアドレス" value={ip} />
      <ResultItem label="ステータスコード" value={code} />
      <ResultItem label="判定結果" value={result} />
    </TableWrapper>
  );
};

// ResultTableのスタイリング
const TableWrapper = styled.div`
  border: 1px solid #ccc;
  padding: 20px;
`;

// サンプルデータを使用した表示用コンポーネント
const SampleResultTable: React.FC = () => {
  const sampleData = {
    ip: '192.168.3.115',
    code: '302',
    result: 'ファイル転送しますか？',
  };

  return <ResultTable {...sampleData} />;
};

export default SampleResultTable;