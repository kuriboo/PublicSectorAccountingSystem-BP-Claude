import React from 'react';
import styled from 'styled-components';

// 予算管理画面のコンポーネントの型定義
type BudgetManagementProps = {
  year: number;
  month: number;
  status: '未確定' | '確定済' | '';
  items: Array<{
    date: string;
    description: string;
    amount: number;
    taxRate: number;
    tax: number;
    total: number;
  }>;
};

// 予算管理画面のコンポーネント
const BudgetManagement: React.FC<BudgetManagementProps> = ({ year, month, status, items }) => {
  // 合計金額を計算
  const totalAmount = items.reduce((sum, item) => sum + item.total, 0);

  return (
    <Wrapper>
      <Header>
        <Title>予算管理画面</Title>
        <DateInfo>
          {year}年{month}月 {status}
        </DateInfo>
      </Header>
      <TableWrapper>
        <Table>
          <thead>
            <tr>
              <HeaderCell>予算科目</HeaderCell>
              <HeaderCell>科目名称</HeaderCell>
              <HeaderCell>補正前</HeaderCell>
              <HeaderCell>今回補正</HeaderCell>
              <HeaderCell>補正後</HeaderCell>
            </tr>
          </thead>
          <tbody>
            {items.map((item, index) => (
              <tr key={index}>
                <Cell>{item.date}</Cell>
                <Cell>{item.description}</Cell>
                <Cell>{item.amount.toLocaleString()}</Cell>
                <Cell>{item.tax.toLocaleString()}</Cell>
                <Cell>{item.total.toLocaleString()}</Cell>
              </tr>
            ))}
          </tbody>
        </Table>
      </TableWrapper>
      <Footer>
        <TotalAmount>合計金額: {totalAmount.toLocaleString()}円</TotalAmount>
      </Footer>
    </Wrapper>
  );
};

// スタイリング
const Wrapper = styled.div`
  margin: 20px;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const Title = styled.h2`
  font-size: 24px;
`;

const DateInfo = styled.p`
  font-size: 18px;
`;

const TableWrapper = styled.div`
  overflow-x: auto;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const HeaderCell = styled.th`
  padding: 10px;
  text-align: left;
  background-color: #f2f2f2;
`;

const Cell = styled.td`
  padding: 10px;
  border-bottom: 1px solid #ddd;
`;

const Footer = styled.div`
  margin-top: 20px;
  text-align: right;
`;

const TotalAmount = styled.p`
  font-size: 18px;
  font-weight: bold;
`;

// サンプルデータ
const sampleData: BudgetManagementProps = {
  year: 2023,
  month: 6,
  status: '未確定',
  items: [
    {
      date: '0101010001',
      description: '水道料金',
      amount: 5607564,
      taxRate: 0,
      tax: 0,
      total: 5607564,
    },
    {
      date: '0101010001.8888',
      description: '水道料金',
      amount: 0,
      taxRate: 0,
      tax: 0,
      total: 0,
    },
    {
      date: '0101010009',
      description: '加入金',
      amount: 104928,
      taxRate: 0,
      tax: 0,
      total: 104928,
    },
    // 省略
  ],
};

// 表示用のコンポーネント
const App: React.FC = () => {
  return <BudgetManagement {...sampleData} />;
};

export default App;