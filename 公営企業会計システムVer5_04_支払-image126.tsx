import React from 'react';
import styled from '@emotion/styled';

type OutputLoanDetail = {
  fromDate: string;
  toDate: string;
  outputDays: number;
  receiveAmount: number;
};

type LoanDetailProps = {
  detail: OutputLoanDetail;
};

const LoanDetailContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  border-bottom: 1px solid #ccc;

  @media (max-width: 480px) {
    flex-direction: column;
  }
`;

const LoanDetailItem = styled.div`
  flex: 1;
  padding: 0 10px;

  @media (max-width: 480px) {
    padding: 5px 0;
  }
`;

const LoanDetailComponent: React.FC<LoanDetailProps> = ({ detail }) => {
  // 例外処理：値が入っていない場合は"-"を表示
  const outputDays = detail.outputDays ?? "-";
  const receiveAmount = detail.receiveAmount ?? "-";

  return (
    <LoanDetailContainer>
      <LoanDetailItem>{detail.fromDate}</LoanDetailItem>
      <LoanDetailItem>{detail.toDate}</LoanDetailItem>
      <LoanDetailItem>{outputDays}</LoanDetailItem>
      <LoanDetailItem>{receiveAmount}</LoanDetailItem>
    </LoanDetailContainer>
  );
};

// サンプルデータを用いた使用例
const App: React.FC = () => {
  const sampleData: OutputLoanDetail = {
    fromDate: "19/09/28",
    toDate: "19/09/30",
    outputDays: 768,
    receiveAmount: 18000,
  };

  return (
    <div>
      <h2>出納一覧詳細</h2>
      <LoanDetailComponent detail={sampleData} />
    </div>
  );
};

export default App;