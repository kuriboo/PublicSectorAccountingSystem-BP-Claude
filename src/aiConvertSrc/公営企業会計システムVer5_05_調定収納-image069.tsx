import React from 'react';
import styled from 'styled-components';

// 収納日総解除入力の型定義
type StorageRemovalInputProps = {
  date: string;
  documentNumber: string;
  storageLocation: string;
  month: number;
  day: number;
  data: {
    number: string;
    content: string;
    price: string;
  }[];
  totalRemovalAmount: number;
  totalStorageFee: number;
  expenses: number;
  netRemovalAmount: number;
};

// スタイル定義
const Container = styled.div`
  font-family: Arial, sans-serif;
  padding: 20px;
  background-color: #f0f0f0;
  @media (max-width: 600px) {
    padding: 10px;
  }
`;

const Title = styled.h2`
  margin-bottom: 20px;
`;

const InfoRow = styled.div`
  display: flex;
  margin-bottom: 10px;
  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

const InfoLabel = styled.span`
  font-weight: bold;
  margin-right: 10px;
  flex: 1;
`;

const InfoValue = styled.span`
  flex: 2;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
`;

const TableHeader = styled.th`
  border: 1px solid #ddd;
  padding: 8px;
  background-color: #f2f2f2;
  text-align: left;
`;

const TableCell = styled.td`
  border: 1px solid #ddd;
  padding: 8px;
`;

const TotalRow = styled.tr`
  font-weight: bold;
  background-color: #f2f2f2;
`;

// 収納日総解除入力コンポーネント
const StorageRemovalInput: React.FC<StorageRemovalInputProps> = ({
  date,
  documentNumber,
  storageLocation,
  month,
  day,
  data,
  totalRemovalAmount,
  totalStorageFee,
  expenses,
  netRemovalAmount,
}) => {
  // 値が入っていない場合の処理
  const displayValue = (value: string | number) => {
    return value ? value : '-';
  };

  return (
    <Container>
      <Title>収納日総解除入力</Title>
      <InfoRow>
        <InfoLabel>収納年月日:</InfoLabel>
        <InfoValue>{displayValue(date)}</InfoValue>
      </InfoRow>
      <InfoRow>
        <InfoLabel>伝票番号:</InfoLabel>
        <InfoValue>{displayValue(documentNumber)}</InfoValue>
      </InfoRow>
      <InfoRow>
        <InfoLabel>保管場所:</InfoLabel>
        <InfoValue>{displayValue(storageLocation)}</InfoValue>
      </InfoRow>
      <InfoRow>
        <InfoLabel>月:</InfoLabel>
        <InfoValue>{displayValue(month)}</InfoValue>
      </InfoRow>
      <InfoRow>
        <InfoLabel>日:</InfoLabel>
        <InfoValue>{displayValue(day)}</InfoValue>
      </InfoRow>
      <Table>
        <thead>
          <tr>
            <TableHeader>品名</TableHeader>
            <TableHeader>数量</TableHeader>
            <TableHeader>単価</TableHeader>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <TableCell>{displayValue(item.content)}</TableCell>
              <TableCell>{displayValue(item.number)}</TableCell>
              <TableCell>{displayValue(item.price)}</TableCell>
            </tr>
          ))}
          <TotalRow>
            <TableCell colSpan={2}>解除対象収納額</TableCell>
            <TableCell>{displayValue(totalRemovalAmount)}</TableCell>
          </TotalRow>
          <TotalRow>
            <TableCell colSpan={2}>合計調定金額</TableCell>
            <TableCell>{displayValue(totalStorageFee)}</TableCell>
          </TotalRow>
          <TotalRow>
            <TableCell colSpan={2}>合計消費税額</TableCell>
            <TableCell>{displayValue(expenses)}</TableCell>
          </TotalRow>
          <TotalRow>
            <TableCell colSpan={2}>合計額</TableCell>
            <TableCell>{displayValue(netRemovalAmount)}</TableCell>
          </TotalRow>
        </tbody>
      </Table>
    </Container>
  );
};

// サンプルデータ
const sampleData: StorageRemovalInputProps = {
  date: '平成29年09月06日',
  documentNumber: '0000000013',
  storageLocation: '水道局金の調書',
  month: 3,
  day: 4,
  data: [
    { number: '0520120021', content: '積金', price: '○○円' },
    { number: '0009', content: '○○積立金書', price: '○○円' },
    { number: '0001', content: '○○積立金書', price: '○○円' },
  ],
  totalRemovalAmount: 3320,
  totalStorageFee: 3320,
  expenses: 245,
  netRemovalAmount: 3320,
};

// 使用例
const App: React.FC = () => {
  return (
    <div>
      <StorageRemovalInput {...sampleData} />
    </div>
  );
};

export default App;