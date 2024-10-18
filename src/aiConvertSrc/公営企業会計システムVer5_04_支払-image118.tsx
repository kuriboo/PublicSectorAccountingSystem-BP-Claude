import React from 'react';
import styled from '@emotion/styled';

type ShippingInfo = {
  name: string;
  zipCode: string;
  address: string;
}

type PaymentInfo = {
  subtotal: number;
  tax: number;
  shipping: number;
  total: number;
}

type OrderInfo = {
  orderId: string;
  orderDate: string;
  paymentMethod: string;
  shippingInfo: ShippingInfo;
  paymentInfo: PaymentInfo;
}

type OrderSummaryProps = {
  order: OrderInfo;
}

const OrderSummaryContainer = styled.div`
  font-family: Arial, sans-serif;
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  
  @media (max-width: 600px) {
    padding: 10px;
  }
`;

const Title = styled.h2`
  margin-bottom: 20px;
`;

const InfoRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;

const InfoLabel = styled.div`
  font-weight: bold;
`;

const PaymentInfoContainer = styled.div`
  margin-top: 20px;
  padding-top: 20px;
  border-top: 1px solid #ccc;
`;

const PaymentRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 5px;
`;

const TotalRow = styled(PaymentRow)`
  font-weight: bold;
  margin-top: 10px;
  border-top: 1px solid #ccc;
  padding-top: 5px;
`;

const OrderSummary: React.FC<OrderSummaryProps> = ({ order }) => {
  const {
    orderId,
    orderDate, 
    paymentMethod,
    shippingInfo,
    paymentInfo
  } = order;

  return (
    <OrderSummaryContainer>
      <Title>注文確認画面</Title>
      <InfoRow>
        <InfoLabel>注文番号</InfoLabel>
        <div>{orderId}</div>
      </InfoRow>
      <InfoRow>
        <InfoLabel>注文日</InfoLabel>
        <div>{orderDate}</div>
      </InfoRow>
      <InfoRow>
        <InfoLabel>支払方法</InfoLabel>
        <div>{paymentMethod}</div>
      </InfoRow>
      <InfoRow>
        <InfoLabel>お届け先</InfoLabel>
        <div>
          {shippingInfo.name}<br />
          〒{shippingInfo.zipCode}<br />
          {shippingInfo.address}
        </div>
      </InfoRow>
      
      <PaymentInfoContainer>
        <PaymentRow>
          <div>商品合計</div>
          <div>¥{paymentInfo.subtotal.toLocaleString()}</div>
        </PaymentRow>
        <PaymentRow>
          <div>消費税額</div>
          <div>¥{paymentInfo.tax.toLocaleString()}</div>
        </PaymentRow>
        <PaymentRow>
          <div>送料</div>
          <div>¥{paymentInfo.shipping.toLocaleString()}</div>
        </PaymentRow>
        <TotalRow>
          <div>合計</div>
          <div>¥{paymentInfo.total.toLocaleString()}</div>  
        </TotalRow>
      </PaymentInfoContainer>
    </OrderSummaryContainer>
  );
}

// 使用例
const sampleOrder: OrderInfo = {
  orderId: "0000000014",
  orderDate: "令和04年08月31日",
  paymentMethod: "農業共済組合等振込",
  shippingInfo: {
    name: "窪口 松い私",
    zipCode: "0123456",
    address: "東京都港区赤坂1-1-1"
  },
  paymentInfo: {
    subtotal: 15000,
    tax: 0,
    shipping: 0,
    total: 15000
  }
};

const App: React.FC = () => {
  return (
    <div>
      <OrderSummary order={sampleOrder} />
    </div>
  );
}

export default App;