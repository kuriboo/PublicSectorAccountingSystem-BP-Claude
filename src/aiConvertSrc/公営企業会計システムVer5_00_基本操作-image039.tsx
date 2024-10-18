import React from 'react';
import styled from '@emotion/styled';

type Product = {
  name: string;
  code: string;
  unitPrice: number;
  quantity: number;
  amount: number;
  tax: number;
};

type SalesSlipProps = {
  date: string;
  slipNo: string;
  customerCode: string;
  customerName: string;
  paymentDate: string;
  products: Product[];
  subtotal: number;
  taxRate: number;
  taxAmount: number;
  total: number;
};

const SalesSlip: React.FC<SalesSlipProps> = ({
  date,
  slipNo,
  customerCode,
  customerName,
  paymentDate,
  products,
  subtotal,
  taxRate,
  taxAmount,
  total,
}) => {
  // 値が入っていない場合のデフォルト値を設定
  const formattedDate = date || '';
  const formattedSlipNo = slipNo || '';
  const formattedCustomerCode = customerCode || '';
  const formattedCustomerName = customerName || '';
  const formattedPaymentDate = paymentDate || '';
  const formattedProducts = products || [];
  const formattedSubtotal = subtotal || 0;
  const formattedTaxRate = taxRate || 0;
  const formattedTaxAmount = taxAmount || 0;
  const formattedTotal = total || 0;

  return (
    <Container>
      <Header>
        <Title>売上伝票</Title>
        <DateContainer>
          <DateLabel>日付</DateLabel>
          <DateValue>{formattedDate}</DateValue>
        </DateContainer>
      </Header>
      
      <SlipInfo>
        <InfoRow>
          <InfoLabel>伝票番号</InfoLabel>
          <InfoValue>{formattedSlipNo}</InfoValue>
        </InfoRow>
        <InfoRow>
          <InfoLabel>得意先</InfoLabel>
          <InfoValue>{formattedCustomerCode}</InfoValue>
        </InfoRow>
        <InfoRow>
          <InfoLabel>得意先名</InfoLabel>
          <InfoValue>{formattedCustomerName}</InfoValue>
        </InfoRow>
        <InfoRow>
          <InfoLabel>支払期限</InfoLabel>
          <InfoValue>{formattedPaymentDate}</InfoValue>
        </InfoRow>
      </SlipInfo>

      <ProductTable>
        <TableHeader>
          <HeaderCell>コード</HeaderCell>
          <HeaderCell>品名</HeaderCell>  
          <HeaderCell>規格</HeaderCell>
          <HeaderCell>数量</HeaderCell>
          <HeaderCell>単価</HeaderCell>
          <HeaderCell>金額</HeaderCell>
        </TableHeader>
        <TableBody>
          {formattedProducts.map((product, index) => (
            <TableRow key={index}>
              <TableCell>{product.code}</TableCell>
              <TableCell>{product.name}</TableCell>
              <TableCell>規格</TableCell>
              <TableCell>{product.quantity}</TableCell>
              <TableCell>{product.unitPrice}</TableCell>
              <TableCell>{product.amount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </ProductTable>

      <TotalContainer>
        <TotalRow>
          <TotalLabel>小計</TotalLabel>
          <TotalValue>{formattedSubtotal}</TotalValue>
        </TotalRow>
        <TotalRow>
          <TotalLabel>消費税率</TotalLabel>
          <TotalValue>{formattedTaxRate}%</TotalValue>
        </TotalRow>
        <TotalRow>
          <TotalLabel>消費税額</TotalLabel>
          <TotalValue>{formattedTaxAmount}</TotalValue>
        </TotalRow>        
        <TotalRow>
          <TotalLabel>合計</TotalLabel>
          <TotalValue>{formattedTotal}</TotalValue>
        </TotalRow>
      </TotalContainer>
      
    </Container>
  );
};

// サンプルデータを用いた使用例
const SampleSalesSlip = () => {
  const sampleData: SalesSlipProps = {
    date: '0000/00/00',
    slipNo: '0001',
    customerCode: '0001',
    customerName: '得意先名',
    paymentDate: '締切日 末日',
    products: [
      { name: '洋菓子', code: 'A4細型', unitPrice: 100, quantity: 100, amount: 21384, tax: 0 },
      { name: '和菓子', code: 'パイシコン用', unitPrice: 100, quantity: 100, amount: 24640, tax: 0 },
    ],
    subtotal: 29808,
    taxRate: 8,
    taxAmount: 1768,
    total: 31644,
  };

  return <SalesSlip {...sampleData} />;
};

// styled-componentsを使用したスタイリング
const Container = styled.div`
  font-family: Arial, sans-serif;
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;

  @media (max-width: 600px) {
    padding: 10px;
  }
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const Title = styled.h2`
  font-size: 24px;
  margin: 0;

  @media (max-width: 600px) {
    font-size: 20px;
  }  
`;

const DateContainer = styled.div`
  display: flex;
  align-items: center;
`;

const DateLabel = styled.span`
  font-weight: bold;
  margin-right: 10px;
`;

const DateValue = styled.span`
  font-size: 18px;
`;

const SlipInfo = styled.div`
  margin-bottom: 20px;
`;

const InfoRow = styled.div`
  display: flex;
  margin-bottom: 10px;
`;

const InfoLabel = styled.div`
  width: 100px;
  font-weight: bold;
`;

const InfoValue = styled.div`
  flex: 1;
`;

const ProductTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;
`;

const TableHeader = styled.thead`
  background-color: #f0f0f0;
`;

const HeaderCell = styled.th`
  padding: 10px;
  text-align: left;
  font-weight: bold;
`;

const TableBody = styled.tbody``;

const TableRow = styled.tr``;

const TableCell = styled.td`
  padding: 10px;
  border-bottom: 1px solid #ccc;
`;

const TotalContainer = styled.div`
  text-align: right;
`;

const TotalRow = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 10px;
`;

const TotalLabel = styled.div`
  width: 100px;
  font-weight: bold;
`;

const TotalValue = styled.div`
  width: 120px;
  text-align: right;
`;

export default SampleSalesSlip;