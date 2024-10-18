import React from 'react';
import styled from '@emotion/styled';

// 総明細情報の型定義
type SummaryData = {
  detail: string;
  amount: number;
  amountThousand: string;
};

// コンポーネントのプロパティの型定義
type SummaryProps = {
  data: SummaryData;
};

// スタイリング用のコンポーネント
const SummaryContainer = styled.div`
  background-color: #f0f0f0;
  padding: 10px;
  margin-bottom: 10px;
`;

const SummaryRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 5px;
`;

const SummaryLabel = styled.div`
  font-weight: bold;
`;

const SummaryValue = styled.div`
  text-align: right;
`;

const SummaryInput = styled.input`
  width: 100px;
  text-align: right;
`;

// 総明細コンポーネント
const Summary: React.FC<SummaryProps> = ({ data }) => {
  // 金額の値が存在しない場合は0を表示
  const amount = data.amount || 0;
  const amountThousand = data.amountThousand || '0';

  return (
    <SummaryContainer>
      <SummaryRow>
        <SummaryLabel>{data.detail}</SummaryLabel>
        <SummaryValue>説明</SummaryValue>
      </SummaryRow>
      <SummaryRow>
        <SummaryLabel>金額</SummaryLabel>
        <SummaryValue>
          <SummaryInput type="text" value={amount} readOnly /> 千円
        </SummaryValue>
      </SummaryRow>
      <SummaryRow>
        <SummaryLabel>金額(千円)</SummaryLabel>
        <SummaryValue>{amountThousand}</SummaryValue>
      </SummaryRow>
    </SummaryContainer>
  );
};

// サンプルデータを使用した表示用コンポーネント
const SampleSummary: React.FC = () => {
  const sampleData: SummaryData = {
    detail: '受注工事収益',
    amount: 100000,
    amountThousand: '100,000',
  };

  return (
    <div>
      <h2>総明細サンプル</h2>
      <Summary data={sampleData} />
    </div>
  );
};

export default SampleSummary;