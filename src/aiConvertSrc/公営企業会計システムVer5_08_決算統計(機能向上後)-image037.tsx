import React from 'react';
import styled from 'styled-components';

// 金額の表示形式を整形するヘルパー関数
const formatAmount = (amount: number) => {
  return amount.toLocaleString();
};

// 各項目を表す型定義
type Item = {
  name: string;
  amount: number;
};

// コンポーネントのプロパティを表す型定義
type SegmentSummaryProps = {
  year: number;
  month: number;
  segmentItems: Item[];
  totalItems: Item[];
};

// 全体のコンテナ要素のスタイル定義
const Container = styled.div`
  background-color: #f0f0f0;
  padding: 16px;
  border-radius: 4px;
`;

// 見出しのスタイル定義
const Heading = styled.h2`
  font-size: 18px;
  margin-bottom: 8px;
`;

// 区分と合計の各項目を表示するコンポーネント
const ItemList = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

// 各項目名のスタイル定義
const ItemName = styled.div`
  font-weight: bold;
`;

// 各項目の金額のスタイル定義
const ItemAmount = styled.div`
  text-align: right;
`;

// 合計金額のスタイル定義
const Total = styled.div`
  font-weight: bold;
  text-align: right;
  margin-top: 16px;
`;

const SegmentSummary: React.FC<SegmentSummaryProps> = ({
  year,
  month,
  segmentItems,
  totalItems,
}) => {
  return (
    <Container>
      <Heading>
        {year}年{month}月予算の状況
      </Heading>
      <ItemList>
        {/* 区分の項目を表示 */}
        <div>
          {segmentItems.map((item, index) => (
            <ItemName key={index}>{item.name}</ItemName>
          ))}
        </div>
        <div>
          {segmentItems.map((item, index) => (
            <ItemAmount key={index}>{formatAmount(item.amount)}</ItemAmount>
          ))}
        </div>
      </ItemList>
      <ItemList>
        {/* 合計の項目を表示 */}
        <div>
          {totalItems.map((item, index) => (
            <ItemName key={index}>{item.name}</ItemName>
          ))}
        </div>
        <div>
          {totalItems.map((item, index) => (
            <ItemAmount key={index}>{formatAmount(item.amount)}</ItemAmount>
          ))}
        </div>
      </ItemList>
      {/* 総合計を表示 */}
      <Total>合計 {formatAmount(totalItems[0].amount)}円</Total>
    </Container>
  );
};

// サンプルデータを用いた使用例
const SampleUsage: React.FC = () => {
  const sampleData: SegmentSummaryProps = {
    year: 2023,
    month: 4,
    segmentItems: [
      { name: '大分類', amount: 10 },
      { name: '中分類', amount: 0 },
      { name: '小分類', amount: 10 },
    ],
    totalItems: [{ name: '構成比率', amount: 107840 }],
  };

  return <SegmentSummary {...sampleData} />;
};

export default SegmentSummary;