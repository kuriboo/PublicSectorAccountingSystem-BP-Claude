import React from 'react';
import styled from '@emotion/styled';

interface BillingComparisonProps {
  debitData: string[][];
  creditData: string[][];
  bankCode: string;
  bankBranch: string;
  accountNumber: string;
  accountHolder: string;
  creditBankCode: string;
  creditBranch: string;
  creditAccountNumber: string;
  creditAccountHolder: string;
}

const Container = styled.div`
  font-family: Arial, sans-serif;
  padding: 16px;

  @media (max-width: 600px) {
    padding: 8px;
  }
`;

const Title = styled.h2`
  font-size: 18px;
  margin-bottom: 16px;

  @media (max-width: 600px) {
    font-size: 16px;
    margin-bottom: 8px;
  }
`;

const TabContainer = styled.div`
  margin-bottom: 16px;
`;

const Tab = styled.span`
  padding: 8px 16px;
  cursor: pointer;

  &.active {
    font-weight: bold;
    text-decoration: underline;
  }

  @media (max-width: 600px) {
    padding: 4px 8px;
  }
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 16px;

  th, td {
    border: 1px solid #ccc;
    padding: 8px;
  }

  th {
    background-color: #f0f0f0;
    text-align: center;
  }

  @media (max-width: 600px) {
    font-size: 12px;

    th, td {
      padding: 4px;
    }
  }
`;

const AccountInfoContainer = styled.div`
  margin-bottom: 16px;
`;

const AccountInfo = styled.div`
  margin-bottom: 8px;

  label {
    margin-right: 8px;
  }

  @media (max-width: 600px) {
    margin-bottom: 4px;
  }
`;

const Button = styled.button`
  padding: 8px 16px;
  cursor: pointer;

  @media (max-width: 600px) {
    padding: 4px 8px;
  }
`;

const BillingComparison: React.FC<BillingComparisonProps> = ({
  debitData,
  creditData,
  bankCode,
  bankBranch,
  accountNumber,
  accountHolder,
  creditBankCode,
  creditBranch,
  creditAccountNumber,
  creditAccountHolder,
}) => {
  const [activeTab, setActiveTab] = React.useState<'debit' | 'credit'>('debit');

  const renderTable = () => {
    const data = activeTab === 'debit' ? debitData : creditData;

    return (
      <Table>
        <thead>
          <tr>
            <th>信託銀行仕訳科目</th>
            <th>信託銀行仕訳科目略名</th>
            <th>対応資産仕訳科目</th>
            <th>対応資産仕訳科目略名</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              {row.map((cell, cellIndex) => (
                <td key={cellIndex}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </Table>
    );
  };

  return (
    <Container>
      <Title>比較貸借対照表出力用償却累計額科目</Title>
      <TabContainer>
        <Tab
          className={activeTab === 'debit' ? 'active' : ''}
          onClick={() => setActiveTab('debit')}
        >
          借方
        </Tab>
        <Tab
          className={activeTab === 'credit' ? 'active' : ''}
          onClick={() => setActiveTab('credit')}
        >
          貸方
        </Tab>
      </TabContainer>
      {renderTable()}
      <AccountInfoContainer>
        <AccountInfo>
          <label>信託累計</label>
          <input type="text" value={bankCode} readOnly />
          <label>水道事業収益</label>
        </AccountInfo>
        <AccountInfo>
          <label>対応資産</label>
          <input type="text" value={creditBankCode} readOnly />
          <label>水道事業費用</label>
        </AccountInfo>
      </AccountInfoContainer>
      <Button>行確定</Button>
      <Button>キャンセル</Button>
      <Button>終了</Button>
    </Container>
  );
};

export default BillingComparison;

// サンプルデータを使用した表示用コンポーネント
const SampleBillingComparison: React.FC = () => {
  const sampleDebitData = [
    ['001', '001 01 01 01', '072030201', '建設改良費立金'],
    ['001 01 02 02', '加入金', '001 01 04 05', '営業・手数料'],
  ];
  const sampleCreditData: string[][] = [];

  return (
    <BillingComparison
      debitData={sampleDebitData}
      creditData={sampleCreditData}
      bankCode="001"
      bankBranch="水道事業収益"
      accountNumber=""
      accountHolder=""
      creditBankCode="002"
      creditBranch="水道事業費用"
      creditAccountNumber=""
      creditAccountHolder=""
    />
  );
};