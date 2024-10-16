import React from 'react';
import styled from '@emotion/styled';

// 仕訳詳細の型定義
type JournalDetail = {
  code: string;
  accountName: string;
  debitAmount: number;
  creditAmount: number;
  subAccountName: string;
};

// コンポーネントのProps型定義
type JournalEntryFormProps = {
  companyYear: string;
  entryDate: string;
  debitTotal: number;
  creditTotal: number;
  journalDetails: JournalDetail[];
};

// スタイル定義
const Container = styled.div`
  font-family: sans-serif;
`;

const Title = styled.div`
  font-weight: bold;
  margin-bottom: 10px;
`;

const Table = styled.table`
  border-collapse: collapse;
  width: 100%;

  th, td {
    border: 1px solid #ccc;
    padding: 8px;
    text-align: left;
  }

  th {
    background-color: #f2f2f2;
  }
`;

const TotalRow = styled.tr`
  font-weight: bold;
`;

// 仕訳入力フォームコンポーネント
const JournalEntryForm: React.FC<JournalEntryFormProps> = ({
  companyYear,
  entryDate,
  debitTotal,
  creditTotal,
  journalDetails,
}) => {
  return (
    <Container>
      <Title>仕訳科目別月別仕訳金額保守</Title>
      <div>
        会計年度: {companyYear} 年度<br />
        伝票総計: {debitTotal} 円 貸方総計: {creditTotal} 円
      </div>
      <Table>
        <thead>
          <tr>
            <th>細目</th>
            <th>明細</th>
            <th>仕訳細目名称</th>
            <th>仕訳明細名称</th>
            <th>借方金額</th>
            <th>貸方金額</th>
          </tr>
        </thead>
        <tbody>
          {journalDetails.map((detail, index) => (
            <tr key={index}>
              <td>{detail.code}</td>
              <td>{index+1}</td>
              <td>{detail.accountName}</td>
              <td>{detail.subAccountName}</td>
              <td>{detail.debitAmount}</td>
              <td>{detail.creditAmount}</td>
            </tr>
          ))}
          <TotalRow>
            <td colSpan={4}>計</td>
            <td>{debitTotal}</td>
            <td>{creditTotal}</td>
          </TotalRow>
        </tbody>
      </Table>
    </Container>
  );
};

// サンプルデータ
const sampleData: JournalEntryFormProps = {
  companyYear: '平成29',
  entryDate: '06-201-01-01',
  debitTotal: 66042382337,
  creditTotal: 65944201431,
  journalDetails: [
    {
      code: '0001',
      accountName: '企業出納員(保管)口座金',
      subAccountName: '企業出納員(保管)口座金-簡',
      debitAmount: 5000000,
      creditAmount: 0,
    },
    {
      code: '0001',
      accountName: '企業出納員(保管)口座金',
      subAccountName: '企業出納員(保管)口座金-簡',
      debitAmount: 0,
      creditAmount: 7000000,
    },
  ],
};

// 使用例
const App: React.FC = () => {
  return (
    <div>
      <h1>仕訳入力フォーム</h1>
      <JournalEntryForm {...sampleData} />
    </div>
  );
};

export default App;