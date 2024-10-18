import React from 'react';
import styled from '@emotion/styled';

interface LoanInfoProps {
  dueDate: string;
  principal: number;
  currency: string;
  interest: number;
}

const LoanInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-family: Arial, sans-serif;

  @media (min-width: 768px) {
    max-width: 400px;
    margin: 0 auto;
  }
`;

const LoanInfoRow = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 10px;
`;

const LoanInfoLabel = styled.div`
  font-weight: bold;
`;

const LoanInfoValue = styled.div``;

const LoanInfo: React.FC<LoanInfoProps> = ({ dueDate, principal, currency, interest }) => {
  return (
    <LoanInfoContainer>
      <LoanInfoRow>
        <LoanInfoLabel>作成日付</LoanInfoLabel>
        <LoanInfoValue>{dueDate || 'N/A'}</LoanInfoValue>
      </LoanInfoRow>
      <LoanInfoRow>
        <LoanInfoLabel>集計日時</LoanInfoLabel>
        <LoanInfoValue>{dueDate || 'N/A'} 14時00分</LoanInfoValue>
      </LoanInfoRow>
      <LoanInfoRow>
        <LoanInfoLabel>集計対象</LoanInfoLabel>
        <LoanInfoValue>ブロック</LoanInfoValue>
      </LoanInfoRow>
      <LoanInfoRow>
        <LoanInfoLabel>集計対象団体</LoanInfoLabel>
        <LoanInfoValue>県南ブロック</LoanInfoValue>
      </LoanInfoRow>
    </LoanInfoContainer>
  );
};

// Usage example
const LoanInfoExample = () => {
  return (
    <LoanInfo
      dueDate="平成30年04月06日"
      principal={0}
      currency="円"
      interest={0}
    />
  );
};

export default LoanInfo;