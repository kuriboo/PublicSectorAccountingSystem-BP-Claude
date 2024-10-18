import React from 'react';
import styled from '@emotion/styled';

type LoanSummaryProps = {
  loanDate: string;
  loanAmount: number;
  loanTerm: number;
  monthlyPayment: number;
  annualInterestRate: number;
  account: string;
  guarantor: string;
};

type BreakdownProps = {
  principal: number;
  interest: number;
  guarantee: number;
  fee: number;
  total: number;
};

type PaymentBreakdownRowProps = {
  label: string;
  values: number[];
};

const Container = styled.div`
  font-family: Arial, sans-serif;
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f0f0f0;
  border-radius: 5px;
`;

const Title = styled.h2`
  text-align: center;
  margin-bottom: 20px;
`;

const SummaryGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  margin-bottom: 20px;
`;

const BreakdownGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
`;

const BreakdownTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;

  th, td {
    border: 1px solid #ccc;
    padding: 5px;
    text-align: center;
  }

  th {
    background-color: #f0f0f0;
  }
`;

const LoanSummary: React.FC<LoanSummaryProps> = ({
  loanDate,
  loanAmount,
  loanTerm,
  monthlyPayment,
  annualInterestRate,
  account,
  guarantor,
}) => {
  return (
    <div>
      <div>資産財源更正登録</div>
      <div>登録日: {loanDate}</div>
      <div>異動摘要: 財源調整戻</div>
      <div>取得年月日: {loanDate.slice(0, 4)}年{loanDate.slice(4, 6)}月{loanDate.slice(6)}日</div>
      <div>耐用年数: {loanTerm} 年</div>
      <div>償却開始率: {annualInterestRate}%</div>
      <div>償還原価: ¥{loanAmount.toLocaleString()}</div>
      <div>借方科目: {account}</div>
      <div>貸方科目: {guarantor}</div>
    </div>
  );
};

const PaymentBreakdownRow: React.FC<PaymentBreakdownRowProps> = ({ label, values }) => {
  return (
    <tr>
      <td>{label}</td>
      {values.map((value, index) => (
        <td key={index}>{value.toLocaleString()}</td>
      ))}
    </tr>
  );
};

const LoanBreakdown: React.FC<BreakdownProps> = ({ principal, interest, guarantee, fee, total }) => {
  return (
    <>
      <BreakdownGrid>
        <div>償還原価: ¥{principal.toLocaleString()}</div>
        <div>償却除外額: ¥{interest.toLocaleString()}</div>
        <div>償却対象額: ¥{total.toLocaleString()}</div>
        <div>償却累計額: ¥{guarantee.toLocaleString()}</div>
        <div>帳簿価額: ¥{fee.toLocaleString()}</div>
        <div>償却限度額: ¥{total.toLocaleString()}</div>
      </BreakdownGrid>
      <BreakdownTable>
        <thead>
          <tr>
            <th>財源区分</th>
            <th>償却区分</th>
            <th>帳簿原価</th>
            <th>償却除外額</th>
            <th>償却対象額</th>
            <th>償却累計額</th>
            <th>帳簿価額</th>
            <th>償却限度額</th>
          </tr>
        </thead>
        <tbody>
          <PaymentBreakdownRow
            label="自己財源"
            values={[principal, interest, total, guarantee, fee, total]}
          />
          <PaymentBreakdownRow
            label="工事負担金"
            values={[principal * 0.27, 0, principal * 0.27, guarantee * 0.27, fee * 0.27, total * 0.27]}
          />
          <tr>
            <td colSpan={2}>合計</td>
            <td>{principal.toLocaleString()}</td>
            <td>{interest.toLocaleString()}</td>
            <td>{total.toLocaleString()}</td>
            <td>{guarantee.toLocaleString()}</td>
            <td>{fee.toLocaleString()}</td>
            <td>{total.toLocaleString()}</td>
          </tr>
        </tbody>
      </BreakdownTable>
    </>
  );
};

const LoanSummaryExample = () => {
  // サンプルデータ
  const loanSummaryData = {
    loanDate: '20230913',
    loanAmount: 1300000,
    loanTerm: 4,
    monthlyPayment: 1300000,
    annualInterestRate: 95,
    account: '軽貨物自動車',
    guarantor: '999',
  };

  const breakdownData = {
    principal: 1300000,
    interest: 0,
    guarantee: 1235000,
    fee: 65000,
    total: 1300000,
  };

  return (
    <Container>
      <Title>資産財源更正登録</Title>
      <SummaryGrid>
        <LoanSummary {...loanSummaryData} />
      </SummaryGrid>
      <LoanBreakdown {...breakdownData} />
    </Container>
  );
};

export default LoanSummaryExample;