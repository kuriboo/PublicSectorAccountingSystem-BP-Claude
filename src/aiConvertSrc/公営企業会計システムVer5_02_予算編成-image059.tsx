import React from 'react';
import styled from '@emotion/styled';

type PaymentPeriod = '当初予算' | '事務用/排紙簿' | '事務用/排紙簿';

type CompanyInfoProps = {
  companyCode: string;
  year: number;
  paymentPeriod: PaymentPeriod;
  accountTitle1: string;
  accountTitle2: string;
  accountTitle3: string;
  accountTitle4: string;
  accountTitle5: string;
  accountTitle6: string;
  accountTitle7: string;
  budget: number;
  accountBudget: number;
  reserveBudget: number;
  totalBudget: number;
};

const Container = styled.div`
  font-family: Arial, sans-serif;
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f0f0f0;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);

  @media (max-width: 600px) {
    padding: 10px;
  }
`;

const Title = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
  color: #333;

  @media (max-width: 600px) {
    font-size: 20px;
  }
`;

const CompanyInfo = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 20px;

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

const CompanyCode = styled.span`
  font-weight: bold;
`;

const PaymentPeriodSelect = styled.select`
  padding: 5px;
`;

const AccountTitles = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
  overflow-x: auto;

  @media (max-width: 600px) {
    flex-wrap: wrap;
  }
`;

const AccountTitle = styled.span`
  white-space: nowrap;
`;

const BudgetInfo = styled.div`
  display: flex;
  gap: 20px;

  @media (max-width: 600px) { 
    flex-direction: column;
  }
`;

const BudgetItem = styled.div`
  flex: 1;
`;

const BudgetItemTitle = styled.div`
  font-weight: bold;
  margin-bottom: 5px;
`;

const BudgetItemValue = styled.div`
  font-size: 18px;
`;

const CompanyInfoComponent: React.FC<CompanyInfoProps> = ({
  companyCode,
  year,
  paymentPeriod,
  accountTitle1,
  accountTitle2,
  accountTitle3,
  accountTitle4,
  accountTitle5,
  accountTitle6,
  accountTitle7,
  budget,
  accountBudget,
  reserveBudget,
  totalBudget,
}) => {
  // アカウント科目の配列を作成
  const accountTitles = [
    accountTitle1,
    accountTitle2,
    accountTitle3, 
    accountTitle4,
    accountTitle5,
    accountTitle6,
    accountTitle7,
  ].filter((title) => title !== '');

  return (
    <Container>
      <Title>科目別配当額保守</Title>
      <CompanyInfo>
        <div>
          <span>平成30</span>
          <span>年度</span>
        </div>
        <div>
          <span>予算編成区分</span>
          <PaymentPeriodSelect value={paymentPeriod}>
            <option value="当初予算">当初予算</option>
            <option value="事務用/排紙簿">事務用/排紙簿</option>
            <option value="事務用/排紙簿">事務用/排紙簿</option>
          </PaymentPeriodSelect>
        </div>
        <div>
          <span>団数</span>
          <span>000001 節水・衛/排結簿</span>
          <button>科目検索</button>
        </div>
        <div>
          <span>節</span>
          <span>0001 事務用/排紙簿</span>
          <button>表示</button>
        </div>
      </CompanyInfo>
      <AccountTitles>
        {accountTitles.map((title, index) => (
          <AccountTitle key={index}>{title}</AccountTitle>
        ))}
      </AccountTitles>
      <BudgetInfo>
        <BudgetItem>
          <BudgetItemTitle>予算額</BudgetItemTitle>
          <BudgetItemValue>{budget.toLocaleString()}</BudgetItemValue>
        </BudgetItem>
        <BudgetItem>
          <BudgetItemTitle>本配当額</BudgetItemTitle>
          <BudgetItemValue>{accountBudget.toLocaleString()}</BudgetItemValue>
        </BudgetItem>
        <BudgetItem>
          <BudgetItemTitle>保留額</BudgetItemTitle>
          <BudgetItemValue>{reserveBudget.toLocaleString()}</BudgetItemValue>
          <span>（単位：千円）</span>
        </BudgetItem>
        <BudgetItem>
          <BudgetItemTitle>まで</BudgetItemTitle>
        </BudgetItem>
        <BudgetItem>
          <BudgetItemTitle>配当額</BudgetItemTitle>
          <BudgetItemValue>{totalBudget.toLocaleString()}</BudgetItemValue>
          <span>確定</span>
        </BudgetItem>
      </BudgetInfo>
    </Container>
  );
};

// サンプルデータを用いた使用例
const SampleUsage: React.FC = () => {
  return (
    <CompanyInfoComponent
      companyCode="001"
      year={30}
      paymentPeriod="当初予算"
      accountTitle1="節コード"    
      accountTitle2="節略名"
      accountTitle3="細節コード"
      accountTitle4="細節略名"
      accountTitle5="明細コード"
      accountTitle6="明細略名"
      accountTitle7="目章細々"
      budget={0}
      accountBudget={0}
      reserveBudget={0}
      totalBudget={0}
    />
  );
};

export default CompanyInfoComponent;