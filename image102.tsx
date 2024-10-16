以下が、指定された条件に従って生成したNext.js + TypeScriptのコンポーネントです。

import React from 'react';
import styled from '@emotion/styled';

// 受付番号の型定義
type ReceiptNumber = {
  number: string;
};

// 所属の型定義
type Affiliation = {
  division: string;
  department: string;
};

// 受付情報の型定義
type ReceiptInfo = {
  receiptNumber: ReceiptNumber;
  affiliation: Affiliation;
  total: string;
  details: string;
};

// スタイルの定義
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px;
  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const ReceiptNumberContainer = styled.div`
  margin-bottom: 16px;
  @media (min-width: 768px) {
    margin-bottom: 0;
  }
`;

const AffiliationContainer = styled.div`
  margin-bottom: 16px;
  @media (min-width: 768px) {
    margin-bottom: 0;
  }
`;

const TotalContainer = styled.div`
  margin-bottom: 16px;
  @media (min-width: 768px) {
    margin-bottom: 0;
  }
`;

const DetailsContainer = styled.div``;

const Label = styled.div`
  font-weight: bold;
`;

// 受付情報コンポーネント
const ReceiptInfoComponent: React.FC<{ info: ReceiptInfo }> = ({ info }) => {
  // 受付番号が未定義の場合の処理
  const receiptNumber = info.receiptNumber?.number ?? '未定義';
  // 所属情報が未定義の場合の処理 
  const affiliation = info.affiliation ? `${info.affiliation.division} ${info.affiliation.department}` : '未定義';
  // 金額が未定義の場合の処理
  const total = info.total ?? '未定義';
  // 明細が未定義の場合の処理
  const details = info.details ?? '未定義';

  return (
    <Container>
      <ReceiptNumberContainer>
        <Label>受付番号</Label>
        <div>{receiptNumber}</div>
      </ReceiptNumberContainer>
      <AffiliationContainer>
        <Label>所属</Label>
        <div>{affiliation}</div>
      </AffiliationContainer>
      <TotalContainer>
        <Label>金額</Label>
        <div>{total}</div>
      </TotalContainer>
      <DetailsContainer>
        <Label>明細</Label>
        <div>{details}</div>
      </DetailsContainer>
    </Container>
  );
};

// 使用例
const sampleData: ReceiptInfo = {
  receiptNumber: { number: '00000000' },
  affiliation: { division: '営業部', department: '第1営業部' },
  total: '4292001.3',
  details: '明細データ',
};

const UsageExample: React.FC = () => {
  return (
    <div>
      <h1>受付情報</h1>
      <ReceiptInfoComponent info={sampleData} />
    </div>
  );
};

export default UsageExample;