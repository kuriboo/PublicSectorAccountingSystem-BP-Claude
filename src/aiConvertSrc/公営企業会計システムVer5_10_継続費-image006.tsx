import React from 'react';
import styled from '@emotion/styled';

type FormData = {
  branch: string;
  account: string;
  accountName: string;
  depositAmount: number;
  dueDate: string;
  maturityDate: string;
  periodInYears: number;
  periodInDays: number;
  finalPrincipal: number;
  finalInterestAmount: number;
  finalInterestRate: number;
  finalCapitalizedInterestAmount: number;
  finalCapitalizedInterestRate: number;
  continuationCount: number;
};

type Props = {
  data: FormData;
};

const Container = styled.div`
  font-family: sans-serif;
  margin: 20px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #f9f9f9;

  @media (max-width: 600px) {
    margin: 10px;
    padding: 10px;
  }
`;

const Row = styled.div`
  display: flex;
  margin-bottom: 10px;

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

const Label = styled.div`
  flex: 1;
  font-weight: bold;
`;

const Value = styled.div`
  flex: 2;
`;

const DepositInfoForm: React.FC<Props> = ({ data }) => {
  // 必須項目の値が入っていない場合はエラーメッセージを表示
  if (!data.branch || !data.account || !data.depositAmount) {
    return <div>Error: Required fields are missing.</div>;
  }

  return (
    <Container>
      <h2>施策内訳別年割額保守</h2>
      <Row>
        <Label>営業</Label>
        <Value>{data.branch}</Value>
      </Row>
      <Row>
        <Label>口座</Label>
        <Value>{data.account}</Value>
      </Row>
      <Row>
        <Label>開始年度</Label>
        <Value>{data.dueDate.slice(0, 4)}</Value>
      </Row>
      <Row>
        <Label>年度</Label>
        <Value>{data.maturityDate.slice(0, 4)}</Value>
      </Row>
      <Row>
        <Label>年判額</Label>
        <Value>{data.finalPrincipal.toLocaleString()}</Value>
      </Row>
      <Row>
        <Label>年判前払額</Label>
        <Value>{data.finalInterestAmount.toLocaleString()}</Value>
      </Row>
      <Row>
        <Label>年判前払振替額</Label>
        <Value>{data.finalCapitalizedInterestAmount.toLocaleString()}</Value>
      </Row>
      <Row>
        <Label>年判支払済額</Label>
        <Value>{data.finalPrincipal.toLocaleString()}</Value>
      </Row>
      <Row>
        <Label>年判支払済消費税額</Label>
        <Value>{data.finalInterestRate.toLocaleString()}</Value>
      </Row>
      <Row>
        <Label>年判連次継続額</Label>
        <Value>{data.finalCapitalizedInterestRate.toLocaleString()}</Value>
      </Row>
      <Row>
        <Label>支出負担番号</Label>
        <Value>{data.continuationCount}</Value>
      </Row>
    </Container>
  );
};

// サンプルデータを使用した表示用コンポーネント
const SampleDepositInfoForm: React.FC = () => {
  const sampleData: FormData = {
    branch: '10',
    account: '01',
    accountName: '水道部役所LANシステム構築のための配線',
    depositAmount: 750000,
    dueDate: '平成29年',
    maturityDate: '平成29年', 
    periodInYears: 1,
    periodInDays: 120,
    finalPrincipal: 750000,
    finalInterestAmount: 120000,
    finalInterestRate: 5714,
    finalCapitalizedInterestAmount: 3808,
    finalCapitalizedInterestRate: 31904,
    continuationCount: 1
  };

  return <DepositInfoForm data={sampleData} />;
};

export default DepositInfoForm;