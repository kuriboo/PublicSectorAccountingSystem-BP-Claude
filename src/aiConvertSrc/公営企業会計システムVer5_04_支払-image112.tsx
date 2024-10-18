import React from 'react';
import styled from '@emotion/styled';

type PaymentDetailsProps = {
  date: string;
  number: string;
  customer: string;
  store: string;
  amount: number;
  tax: number;
  consumptionTax: number;
  paymentMethod: string;
  bankName: string;
  branchName: string;
  accountType: string;
  accountNumber: string;
};

const PaymentDetails: React.FC<PaymentDetailsProps> = ({
  date,
  number,
  customer,
  store,
  amount,
  tax,
  consumptionTax,
  paymentMethod,
  bankName,
  branchName,
  accountType,
  accountNumber,
}) => {
  return (
    <Container>
      <Title>出納金管理画面</Title>
      <SummaryContainer>
        <SummaryItem>
          <SummaryLabel>支払決定</SummaryLabel>
          <SummaryValue>{date}</SummaryValue>
        </SummaryItem>
        <SummaryItem>
          <SummaryLabel>支払日</SummaryLabel>
          <SummaryValue>平成29年08月06日</SummaryValue>
        </SummaryItem>
        <SummaryItem>
          <SummaryLabel>支払方法</SummaryLabel>
          <SummaryValue>口座振込</SummaryValue>
        </SummaryItem>
      </SummaryContainer>
      <DetailsContainer>
        <DetailsItem>
          <DetailsLabel>預金種別</DetailsLabel>
          <DetailsValue>当座預金</DetailsValue>
        </DetailsItem>
        <DetailsItem>
          <DetailsLabel>銀行名</DetailsLabel>
          <DetailsValue>{bankName}</DetailsValue>
        </DetailsItem>
        <DetailsItem>
          <DetailsLabel>支店名</DetailsLabel>
          <DetailsValue>{branchName}</DetailsValue>
        </DetailsItem>
        <DetailsItem>
          <DetailsLabel>口座番号</DetailsLabel>
          <DetailsValue>{accountNumber}</DetailsValue>
        </DetailsItem>
        <DetailsItem>
          <DetailsLabel>名義人</DetailsLabel>
          <DetailsValue>アイウェオカイゲン</DetailsValue>
        </DetailsItem>
      </DetailsContainer>
      <AmountContainer>
        <AmountItem>
          <AmountLabel>決定額</AmountLabel>
          <AmountValue>{amount.toLocaleString()}</AmountValue>
        </AmountItem>
        <AmountItem>
          <AmountLabel>本体額</AmountLabel>
          <AmountValue>{(amount - tax).toLocaleString()}</AmountValue>
        </AmountItem>
        <AmountItem>
          <AmountLabel>消費税額</AmountLabel>
          <AmountValue>{tax.toLocaleString()}</AmountValue>
        </AmountItem>
      </AmountContainer>
      <TableContainer>
        <TableHeader>
          <TableHeaderItem>支出節</TableHeaderItem>
          <TableHeaderItem>支出細節</TableHeaderItem>
          <TableHeaderItem>支出明細節</TableHeaderItem>
          <TableHeaderItem>税</TableHeaderItem>
          <TableHeaderItem>決定額</TableHeaderItem>
          <TableHeaderItem>消費税額</TableHeaderItem>
          <TableHeaderItem>税抜金額</TableHeaderItem>
        </TableHeader>
        <TableRow>
          <TableItem>原浄櫛用品</TableItem>
          <TableItem>事務用品</TableItem>
          <TableItem>事務用品</TableItem>
          <TableItem>課税</TableItem>
          <TableItem>{amount.toLocaleString()}</TableItem>
          <TableItem>{tax.toLocaleString()}</TableItem>
          <TableItem>{(amount - tax).toLocaleString()}</TableItem>
        </TableRow>
      </TableContainer>
    </Container>
  );
};

const Container = styled.div`
  font-family: sans-serif;
  background-color: #f0f0f0;
  padding: 20px;
`;

const Title = styled.h2`
  font-size: 20px;
  margin-bottom: 20px;
`;

const SummaryContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const SummaryItem = styled.div`
  display: flex;
  align-items: center;
`;

const SummaryLabel = styled.span`
  font-weight: bold;
  margin-right: 10px;
`;

const SummaryValue = styled.span``;

const DetailsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
  margin-bottom: 20px;
`;

const DetailsItem = styled.div`
  display: flex;
  align-items: center;
`;

const DetailsLabel = styled.span`
  font-weight: bold;
  margin-right: 10px;
`;

const DetailsValue = styled.span``;

const AmountContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 20px;
`;

const AmountItem = styled.div`
  display: flex;
  align-items: center;
  margin-left: 20px;
`;

const AmountLabel = styled.span`
  font-weight: bold;
  margin-right: 10px;
`;

const AmountValue = styled.span``;

const TableContainer = styled.div`
  border-collapse: collapse;
  width: 100%;
`;

const TableHeader = styled.div`
  display: flex;
  background-color: #ddd;
  font-weight: bold;
`;

const TableHeaderItem = styled.div`
  padding: 10px;
  border: 1px solid #ccc;
  flex: 1;
`;

const TableRow = styled.div`
  display: flex;
`;

const TableItem = styled.div`
  padding: 10px;
  border: 1px solid #ccc;
  flex: 1;
`;

// Usage example
const paymentData: PaymentDetailsProps = {
  date: '平成29年08月06日',
  number: '0000000013 さよせいコンサ',
  customer: '口座振込',
  store: 'セブン銀行',
  amount: 12340,
  tax: 914,
  consumptionTax: 914,
  paymentMethod: '口座振込',
  bankName: 'セブン銀行',
  branchName: '本店',
  accountType: '普通',
  accountNumber: '1005138',
};

const App: React.FC = () => {
  return (
    <div>
      <PaymentDetails {...paymentData} />
    </div>
  );
};

export default App;