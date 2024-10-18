import React from 'react';
import styled from '@emotion/styled';

type BillingDetailProps = {
  accountingPeriod: string;
  billingCenter: string;
  billingDate: string;
  taxCategory: string;
  taxRate: number;
  taxAmount: number;
  totalAmount: number;
  netAmount: number;
  directTax: number;
  consumptionTax: number;
};

type BillingItemProps = {
  no: string;
  item: string;
  specification: string;
  quantity: number;
  unitPrice: number;
  amount: number;
  taxCategory: string;
};

type BillingProps = {
  billingDetails: BillingDetailProps;
  billingItems: BillingItemProps[];
};

const Container = styled.div`
  font-family: Arial, sans-serif;
  padding: 20px;

  @media (max-width: 600px) {
    padding: 10px;
  }
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

const Title = styled.h2`
  margin: 0;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;

  th, td {
    border: 1px solid #ccc;
    padding: 8px;
    text-align: left;
  }

  th {
    background-color: #f0f0f0;
  }

  @media (max-width: 600px) {
    font-size: 12px;
  }
`;

const Summary = styled.div`
  display: flex;
  justify-content: flex-end;

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: flex-end;
  }
`;

const SummaryItem = styled.div`
  margin-left: 20px;

  @media (max-width: 600px) {
    margin-left: 0;
    margin-bottom: 10px;
  }
`;

const Billing: React.FC<BillingProps> = ({ billingDetails, billingItems }) => {
  const {
    accountingPeriod,
    billingCenter,
    billingDate,
    taxCategory,
    taxRate,
    taxAmount,
    totalAmount,
    netAmount,
    directTax,
    consumptionTax,
  } = billingDetails;

  return (
    <Container>
      <Header>
        <Title>補正事業別科目別内訳書</Title>
        <div>
          {/* 請求書情報 */}
          <div>会計期間: {accountingPeriod}</div>
          <div>請求部署: {billingCenter}</div>
          <div>請求日: {billingDate}</div>
        </div>
      </Header>

      <Table>
        <thead>
          <tr>
            <th>行番号</th>
            <th>科目</th>
            <th>仕様</th>
            <th>数量</th>
            <th>単価</th>
            <th>金額</th>
            <th>課税区分</th>
          </tr>
        </thead>
        <tbody>
          {billingItems.map((item, index) => (
            <tr key={index}>
              <td>{item.no}</td>
              <td>{item.item}</td>
              <td>{item.specification}</td>
              <td>{item.quantity}</td>
              <td>{item.unitPrice.toLocaleString()}</td>
              <td>{item.amount.toLocaleString()}</td>
              <td>{item.taxCategory}</td>
            </tr>
          ))}
        </tbody>
      </Table>

      <Summary>
        {/* 合計金額等 */}
        <SummaryItem>税区分: {taxCategory}</SummaryItem>
        <SummaryItem>税率: {taxRate}%</SummaryItem>
        <SummaryItem>消費税: {consumptionTax.toLocaleString()}円</SummaryItem>
        <SummaryItem>直接税: {directTax.toLocaleString()}円</SummaryItem>
        <SummaryItem>税抜額: {netAmount.toLocaleString()}円</SummaryItem>
        <SummaryItem>合計金額: {totalAmount.toLocaleString()}円</SummaryItem>
      </Summary>
    </Container>
  );
};

// サンプルデータ
const sampleData: BillingProps = {
  billingDetails: {
    accountingPeriod: '6月補正予算',
    billingCenter: '水道用センター',
    billingDate: '平成29年06月28日',
    taxCategory: '課税',
    taxRate: 8,
    taxAmount: 163323,
    totalAmount: 1850323,
    netAmount: 1687000,
    directTax: 0,
    consumptionTax: 163323,
  },
  billingItems: [
    {
      no: '99',
      item: '(長期)t20-31',
      specification: '役務点検維持管理業務委託',
      quantity: 1,
      unitPrice: 6500000,
      amount: 6500000,
      taxCategory: '課税',
    },
    {
      no: '100',
      item: '(長期)t20-32',
      specification: '役務水道施設管理委託',
      quantity: 1,
      unitPrice: 259200,
      amount: 259200,
      taxCategory: '課税',
    },
    {
      no: '120',
      item: '不動産取水場設備電気事業管理委託',
      specification: '',
      quantity: 1,
      unitPrice: 400000,
      amount: 400000,
      taxCategory: '課税',
    },
  ],
};

const BillingSample: React.FC = () => {
  return <Billing {...sampleData} />;
};

export default BillingSample;