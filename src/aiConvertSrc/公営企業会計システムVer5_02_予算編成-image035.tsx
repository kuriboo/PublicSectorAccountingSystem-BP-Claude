import React from 'react';
import styled from 'styled-components';

// 予算情報の型定義
type Budget = {
  id: number;
  date: string;
  content: string;
  department: string;
  price: number;
};

// 流用補正データの型定義
type TransferData = {
  purpose: string;
  source: string;
  destination: string;
  institution: string;
};

// コンポーネントのプロパティの型定義
type Props = {
  budgets: Budget[];
  transferData: TransferData;
  onSubmit: () => void;
};

// スタイル定義
const Container = styled.div`
  font-family: sans-serif;
  margin: 20px;
`;

const Title = styled.h2`
  font-size: 18px;
  margin-bottom: 10px;
`;

const TransferInfo = styled.div`
  margin-bottom: 20px;
`;

const TransferInfoItem = styled.div`
  margin-bottom: 5px;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const TableHeader = styled.th`
  border: 1px solid #ccc;
  padding: 5px;
  text-align: center;
`;

const TableCell = styled.td`
  border: 1px solid #ccc;
  padding: 5px;
`;

const SubmitButton = styled.button`
  margin-top: 20px;
  padding: 5px 10px;
  font-size: 16px;
`;

// 流用補正会計システムコンポーネント
const TransferCorrection: React.FC<Props> = ({ budgets, transferData, onSubmit }) => {
  return (
    <Container>
      <Title>流用補正データ登録</Title>
      <TransferInfo>
        <TransferInfoItem>流用補正先: {transferData.purpose}</TransferInfoItem>
        <TransferInfoItem>補正対象: {transferData.source}</TransferInfoItem>
        <TransferInfoItem>補正後: {transferData.destination}</TransferInfoItem>
        <TransferInfoItem>施設: {transferData.institution}</TransferInfoItem>
      </TransferInfo>

      <Table>
        <thead>
          <tr>
            <TableHeader>流用番号</TableHeader>
            <TableHeader>区分</TableHeader>
            <TableHeader>予算科目</TableHeader>
            <TableHeader>名称</TableHeader>
            <TableHeader>所属</TableHeader>
            <TableHeader>流用金額</TableHeader>
            <TableHeader>流用理由</TableHeader>
          </tr>
        </thead>
        <tbody>
          {budgets.map(budget => (
            <tr key={budget.id}>
              <TableCell>{budget.id}</TableCell>
              <TableCell></TableCell>
              <TableCell>{budget.date}</TableCell>
              <TableCell>{budget.content}</TableCell>
              <TableCell>{budget.department}</TableCell>
              <TableCell>{budget.price}</TableCell>
              <TableCell></TableCell>
            </tr>
          ))}
        </tbody>
      </Table>

      <SubmitButton onClick={onSubmit}>登録</SubmitButton>
    </Container>
  );
};



// 使用例
const sampleBudgets: Budget[] = [
  { id: 4, date: '0000106190002100', content: '通常管理業務費', department: '水道課', price: 191000 },  
  { id: 4, date: '0000106190001100', content: '施設普通旅費', department: '下水道課', price: 190000 },
];

const sampleTransferData: TransferData = {
  purpose: '未処理',
  source: '補正前',
  destination: '補正後',
  institution: '施設',
};

const App: React.FC = () => {
  const handleSubmit = () => {
    // 登録処理
    console.log('Submitted');
  };

  return (
    <TransferCorrection
      budgets={sampleBudgets}
      transferData={sampleTransferData}
      onSubmit={handleSubmit}
    />
  );
};

export default App;