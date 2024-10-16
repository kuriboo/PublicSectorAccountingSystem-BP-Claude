import React from 'react';
import styled from '@emotion/styled';

// 型定義
type DurationType = 'day' | 'month';
type Item = {
  id: number;
  name: string;
  price: number;
  tax: number;
};
type ExpenseReportProps = {
  title: string;
  startDate: string;
  endDate: string;
  items: Item[];
  totalAmount: number;
  totalTax: number;
  durationType: DurationType;
};

// スタイル定義
const Container = styled.div`
  font-family: Arial, sans-serif;
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
`;

const Title = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
`;

const DateRange = styled.div`
  margin-bottom: 10px;
`;

const Label = styled.span`
  font-weight: bold;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;

  th,
  td {
    border: 1px solid #ccc;
    padding: 8px;
    text-align: left;
  }

  th {
    background-color: #f2f2f2;
    font-weight: bold;
  }
`;

const TotalRow = styled.tr`
  font-weight: bold;
`;

const Button = styled.button`
  padding: 8px 16px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-right: 10px;
`;

// ExpenseReportコンポーネント
const ExpenseReport: React.FC<ExpenseReportProps> = ({
  title,
  startDate,
  endDate,
  items,
  totalAmount,
  totalTax,
  durationType,
}) => {
  // 期間の表示形式を決定
  const formatDate = (date: string) => {
    const [year, month, day] = date.split('-');
    return durationType === 'day' ? `${year}年${month}月${day}日` : `${year}年${month}月`;
  };

  return (
    <Container>
      <Title>{title}</Title>
      <DateRange>
        <Label>支払期間: </Label>
        {formatDate(startDate)} 〜 {formatDate(endDate)}
      </DateRange>
      <Table>
        <thead>
          <tr>
            <th>決定番号</th>
            <th>支払先</th>
            <th>摘要</th>
            <th>決定額</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.id}>
              <td>{item.id.toString().padStart(11, '0')}</td>
              <td>{item.name}</td>
              <td>テスト登録</td>
              <td>{item.price.toLocaleString()}</td>
            </tr>
          ))}
          <TotalRow>
            <td colSpan={3}>合計</td>
            <td>{totalAmount.toLocaleString()}</td>
          </TotalRow>
          {totalTax > 0 && (
            <TotalRow>
              <td colSpan={3}>うち消費税</td>
              <td>{totalTax.toLocaleString()}</td>
            </TotalRow>
          )}
        </tbody>
      </Table>
      <div>
        <Button>印刷</Button>
        <Button>閉じる</Button>
      </div>
    </Container>
  );
};

// サンプルデータ
const sampleData: ExpenseReportProps = {
  title: '支払確定解除入力',
  startDate: '2023-06-01',
  endDate: '2023-06-17',
  items: [
    { id: 16, name: 'テスト登録', price: 1, tax: 0 },
    { id: 25, name: '決定_1%品_サンプル', price: 401968, tax: 0 },
    { id: 89, name: '7%消費税 諸号控除分の設定', price: 65000, tax: 0 },
    { id: 91, name: 'テスト', price: 1080000, tax: 0 },
  ],
  totalAmount: 1080001,
  totalTax: 65000,
  durationType: 'day',
};

// 表示用のサンプルコンポーネント
const App: React.FC = () => {
  return <ExpenseReport {...sampleData} />;
};

export default App;