import React from 'react';
import styled from '@emotion/styled';

type StructuredInvoiceItem = {
  rowNumber: number;
  itemName: string;
  quantity: number;
  unitPrice: number;
  amount: number;
  taxRate: number;
  tax: number;
};

type StructuredInvoiceProps = {
  invoice: {
    header: {
      invoiceNumber: string;
      invoiceDate: string;
      customerCode: string;
      billingAmount: number;
    },
    items: StructuredInvoiceItem[]
  }
};

// StructuredInvoiceコンポーネントの定義
const StructuredInvoice: React.FC<StructuredInvoiceProps> = ({ invoice }) => {

  return (
    <Container>
      <Header>
        <Label>請求番号</Label>
        <Value>{invoice.header.invoiceNumber}</Value>
        <Label>請求日付</Label>
        <Value>{invoice.header.invoiceDate}</Value>
        <Label>得意先コード</Label>
        <Value>{invoice.header.customerCode}</Value>
        <Label>改良金額</Label>
        <Value>{invoice.header.billingAmount}</Value>
      </Header>
      
      <Table>
        <TableHeader>
          <HeaderCell>行番号</HeaderCell>
          <HeaderCell>品名</HeaderCell>  
          <HeaderCell>数量</HeaderCell>
          <HeaderCell>改良数量</HeaderCell>
          <HeaderCell>単位</HeaderCell>
          <HeaderCell>税率</HeaderCell>
          <HeaderCell>改良金額</HeaderCell>
        </TableHeader>
        <TableBody>
          {invoice.items.map((item, index) => (
            <TableRow key={index}>
              <BodyCell>{item.rowNumber}</BodyCell>
              <BodyCell>{item.itemName}</BodyCell>
              <BodyCell>{item.quantity}</BodyCell>
              <BodyCell>{item.unitPrice}</BodyCell>  
              <BodyCell>{item.amount}</BodyCell>
              <BodyCell>{item.taxRate}</BodyCell>
              <BodyCell>{item.tax}</BodyCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <Footer>
        <Button>行確定</Button>  
        <Button>行キャンセル</Button>
      </Footer>
    </Container>
  );
};

// サンプルデータを使用したStructuredInvoiceの例
const SampleStructuredInvoice: React.FC = () => {
  const sampleInvoice = {
    header: {
      invoiceNumber: "4161.2800",
      invoiceDate: "2021年5月10日", 
      customerCode: "1千政市配水施設",
      billingAmount: 0
    },
    items: [
      {
        rowNumber: 1,
        itemName: "構造門管",
        quantity: 1,
        unitPrice: 0.0001,
        amount: 15000000,
        taxRate: 0.1,
        tax: 0
      }
    ]
  };

  return <StructuredInvoice invoice={sampleInvoice} />;
}

// スタイリング
const Container = styled.div`
  padding: 20px;
`;

const Header = styled.div`
  display: grid;
  grid-template-columns: 120px 1fr;
  gap: 10px;
  margin-bottom: 20px;
`;

const Label = styled.div`
  font-weight: bold;
`;

const Value = styled.div`
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const TableHeader = styled.tr`
  background-color: #f0f0f0;
`;

const TableBody = styled.tbody`
`;  

const TableRow = styled.tr`
  &:nth-of-type(even) {
    background-color: #f8f8f8;
  }
`;

const HeaderCell = styled.th`
  padding: 8px;
  text-align: left;
  border-bottom: 1px solid #ddd;
`;

const BodyCell = styled.td`
  padding: 8px;
  border-bottom: 1px solid #ddd;
`;

const Footer = styled.div`
  margin-top: 20px;
  text-align: right;
`;

const Button = styled.button`
  padding: 8px 16px;
  margin-left: 10px;
`;

export default SampleStructuredInvoice;