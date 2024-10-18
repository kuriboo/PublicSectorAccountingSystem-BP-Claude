import React from 'react';
import styled from '@emotion/styled';

type OrderDetailsProps = {
  orderDate: string;
  orderNumber: string;
  productName: string;
  bankName: string;
  accountNumber: string;
  quantity: number;
  pricePerUnit: number;
  totalAmount: number;
  supportAmount: number;
  consumptionTax: number;
  destinationName: string;
  destinationAmount: number;
  shippingCost: number;
  totalPrice: number;
};

const OrderDetails: React.FC<OrderDetailsProps> = ({
  orderDate,
  orderNumber,
  productName,
  bankName,
  accountNumber,
  quantity,
  pricePerUnit,
  totalAmount,
  supportAmount,
  consumptionTax,
  destinationName,
  destinationAmount,
  shippingCost,
  totalPrice,
}) => {
  return (
    <Container>
      <Header>
        <Title>出勤登録明細</Title>
        {/* Display order date and number */}
        <OrderInfo>
          <OrderDate>受払日 {orderDate}</OrderDate>
          <OrderNumber>受払方法 振込</OrderNumber>
        </OrderInfo>
      </Header>

      {/* Product details */}
      <ProductDetails>
        <ProductName>{productName}</ProductName>
        <BankInfo>
          <BankName>銀行名 {bankName}</BankName>
          <AccountNumber>口座番号 {accountNumber}</AccountNumber>
        </BankInfo>
        <ProductQuantity>名義人 ビズリーチ（カ</ProductQuantity>
        <ProductUnitPrice>口座振込情報</ProductUnitPrice>
      </ProductDetails>

      {/* Order summary */}
      <OrderSummary>
        <Row>
          <RowLabel>消金種別</RowLabel>
          <RowValue>普通預金</RowValue>
        </Row>
        <Row>
          <RowLabel>口座番号</RowLabel>
          <RowValue>1123456</RowValue>
        </Row>
        <Row>
          <RowLabel>名義人</RowLabel>
          <RowValue>4000ボウドウ</RowValue>
        </Row>
      </OrderSummary>

      {/* Breakdown */}
      <Breakdown>
        <BreakdownRow>
          <BreakdownLabel>支払前</BreakdownLabel>
          <BreakdownValue>{supportAmount}</BreakdownValue>
          <BreakdownLabel>支出額</BreakdownLabel>
          <BreakdownValue>{destinationAmount}</BreakdownValue>
          <BreakdownLabel>消費税額</BreakdownLabel>
          <BreakdownValue>{consumptionTax}</BreakdownValue>
          <BreakdownLabel>繰越金額</BreakdownLabel>
          <BreakdownValue>{totalPrice}</BreakdownValue>
        </BreakdownRow>
      </Breakdown>
    </Container>
  );
};

// Sample data for displaying the component
const sampleData: OrderDetailsProps = {
  orderDate: '平成19年10月23日',
  orderNumber: '81',
  productName: '原油,備蓄品口',
  bankName: '三菱東京UFJ銀行',
  accountNumber: '0000004000 ぎょうせい',
  quantity: 768,
  pricePerUnit: 4000,
  totalAmount: 36,
  supportAmount: 768,
  consumptionTax: 36,
  destinationName: '文具及び研修図書',
  destinationAmount: 732,
  shippingCost: 36,
  totalPrice: 732,
};

// Styled components
const Container = styled.div`
  font-family: Arial, sans-serif;
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f5f5f5;
  border-radius: 4px;
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
`;

const OrderInfo = styled.div`
  text-align: right;
`;

const OrderDate = styled.p`
  margin: 0;
`;

const OrderNumber = styled.p`
  margin: 0;
`;

const ProductDetails = styled.div`
  margin-bottom: 20px;
`;

const ProductName = styled.p`
  font-weight: bold;
  margin: 0;
`;

const BankInfo = styled.div`
  margin-top: 10px;
`;

const BankName = styled.p`
  margin: 0;
`;

const AccountNumber = styled.p`
  margin: 0;
`;

const ProductQuantity = styled.p`
  margin: 0;
`;

const ProductUnitPrice = styled.p`
  margin: 0;
`;

const OrderSummary = styled.div`
  margin-bottom: 20px;
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 5px;
`;

const RowLabel = styled.span`
  font-weight: bold;
`;

const RowValue = styled.span``;

const Breakdown = styled.div``;

const BreakdownRow = styled.div`
  display: flex;
  justify-content: space-between;
`;

const BreakdownLabel = styled.span`
  font-weight: bold;
  flex-basis: 25%;
`;

const BreakdownValue = styled.span`
  flex-basis: 25%;
  text-align: right;
`;

// Usage example
const App: React.FC = () => {
  return (
    <div>
      <h1>Order Details</h1>
      <OrderDetails {...sampleData} />
    </div>
  );
};

export default App;