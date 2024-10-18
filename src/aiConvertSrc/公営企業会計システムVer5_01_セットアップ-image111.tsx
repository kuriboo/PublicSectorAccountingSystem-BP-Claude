import React from 'react';
import styled from 'styled-components';

// 作表制御表集計科目の型定義
type AccountingSubject = {
  code: string;
  name: string;
};

// 作表制御表行番号の型定義
type AccountingLine = {
  lineNumber: number;
  accountName: string;
  amount1: number;
  amount2: number;
  total: number;
};

// 作表制御表集計科目登録のプロパティ型定義
type AccountingSubjectRegistrationProps = {
  accountingSubjects: AccountingSubject[];
  accountingLines: AccountingLine[];
  onRegister: (subject: AccountingSubject, line: AccountingLine) => void;
};

// 作表制御表集計科目登録のコンポーネント
const AccountingSubjectRegistration: React.FC<AccountingSubjectRegistrationProps> = ({
  accountingSubjects,
  accountingLines,
  onRegister,
}) => {
  // 選択中の作表制御表集計科目
  const [selectedAccountingSubject, setSelectedAccountingSubject] = React.useState<AccountingSubject | null>(null);

  // 登録ボタンクリック時の処理
  const handleRegisterClick = () => {
    if (!selectedAccountingSubject) return;

    const newLine: AccountingLine = {
      lineNumber: accountingLines.length + 1,
      accountName: '',
      amount1: 0,
      amount2: 0,
      total: 0,
    };

    onRegister(selectedAccountingSubject, newLine);
    setSelectedAccountingSubject(null);
  };

  return (
    <Container>
      <Title>作表制御表集計科目登録</Title>
      <AccountingSubjectSelect
        value={selectedAccountingSubject?.code ?? ''}
        onChange={(e) => {
          const code = e.target.value;
          const subject = accountingSubjects.find((s) => s.code === code);
          setSelectedAccountingSubject(subject ?? null);
        }}
      >
        <option value=''>作表制御科目を選択</option>
        {accountingSubjects.map((subject) => (
          <option key={subject.code} value={subject.code}>
            {subject.name}
          </option>
        ))}
      </AccountingSubjectSelect>
      <RegisterButton onClick={handleRegisterClick}>登録</RegisterButton>
    </Container>
  );
};

// サンプルデータ
const sampleAccountingSubjects: AccountingSubject[] = [
  { code: '001', name: '金額科目1' },
  { code: '002', name: '金額科目2' },
];

const sampleAccountingLines: AccountingLine[] = [
  {
    lineNumber: 1,
    accountName: '金額科目A',
    amount1: 100,
    amount2: 200,
    total: 300,
  },
  {
    lineNumber: 2,
    accountName: '金額科目B',
    amount1: 400,
    amount2: 500,
    total: 900,
  },
];

// 作表制御表集計科目登録のサンプル使用コンポーネント
const SampleAccountingSubjectRegistration: React.FC = () => {
  const handleRegister = (subject: AccountingSubject, line: AccountingLine) => {
    console.log('Registered:', subject, line);
  };

  return (
    <AccountingSubjectRegistration
      accountingSubjects={sampleAccountingSubjects}
      accountingLines={sampleAccountingLines}
      onRegister={handleRegister}
    />
  );
};

// スタイリング
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const Title = styled.h2`
  margin-bottom: 20px;
`;

const AccountingSubjectSelect = styled.select`
  width: 200px;
  padding: 5px;
  margin-bottom: 10px;
`;

const RegisterButton = styled.button`
  padding: 5px 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

export default SampleAccountingSubjectRegistration;