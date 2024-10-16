import React from 'react';
import styled from 'styled-components';

type CompanyType = {
  id: number;
  name: string;
  amount: number;
  taxAmount: number;
};

type PaymentItemType = {
  id: number;
  name: string;
  unitPrice: number;
  quantity: number;
  amount: number;
};

type PaymentType = {
  companyName: string;
  departureDate: string;
  returnDate: string;
  departurePlace: string;
  destination: string;
  purpose: string;
  companyCode: string;
  paymentMethod: string;
  bankName: string;
  companies: CompanyType[];
  paymentItems: PaymentItemType[];
  subTotal: number;
  tax: number;
  totalAmount: number;
};

type PaymentApplicationFormProps = {
  payment: PaymentType;
};

const PaymentApplicationForm: React.FC<PaymentApplicationFormProps> = ({ payment }) => {
  // 支払先企業の合計金額を計算
  const calcCompanyTotal = (companies: CompanyType[]) => {
    return companies.reduce((sum, company) => sum + company.amount, 0);
  };

  // 支払項目の合計金額を計算
  const calcPaymentItemTotal = (paymentItems: PaymentItemType[]) => {
    return paymentItems.reduce((sum, item) => sum + item.amount, 0);
  };

  return (
    <Container>
      <Title>支出決定入力（一般 負担者）</Title>
      <BasicInfo>
        <Row>
          <Label>決定処理日</Label>
          <span>令和6年10月26日</span>
        </Row>
        <Row>
          <Label>決裁区分</Label>
          <span>課長・審査有</span>
        </Row>
        <Row>
          <Label>合議区分</Label>
          <span>すべてなし</span>
        </Row>
        <Row>
          <Label>支払日</Label>
          <span>令和6年11月30日</span>
        </Row>
        <Row>
          <Label>請求書日</Label>
          <span>{payment.departureDate}</span>
        </Row>
        <Row>
          <Label>期間</Label>
          <span>{payment.departureDate} ～ {payment.returnDate}</span>
        </Row>
      </BasicInfo>
      
      <SubInfo>
        <Row>
          <Label>支払先</Label>
          <span>{payment.companyCode}</span>
        </Row>
        <Row>
          <Label>予算単位</Label>
          <span>新本場支店</span>
        </Row>
        <Row>
          <Label>精算種別</Label>
          <span>普通精算</span>
        </Row>
        <Row>
          <Label>支払方法</Label>
          <span>{payment.paymentMethod}</span>
        </Row>
        <Row>
          <Label>銀行名</Label>
          <span>{payment.bankName || '-'}</span>
        </Row>
        <Row>
          <Label>名義人</Label>
          <span>ギジセイチアドン</span>
        </Row>
      </SubInfo>

      <PaymentInfo>
        <AmountInfo>
          <AmountItem>
            <AmountLabel>負担金額</AmountLabel>
            <AmountValue>25,000</AmountValue>
          </AmountItem>
          <AmountItem>
            <AmountLabel>決定額</AmountLabel>
            <AmountValue>25,000</AmountValue>
          </AmountItem>
          <AmountItem>
            <AmountLabel>支払額</AmountLabel>
            <AmountValue>25,000</AmountValue>
          </AmountItem>
          <AmountItem>
            <AmountLabel>消費税額</AmountLabel>
            <AmountValue>2,000</AmountValue>
          </AmountItem>
        </AmountInfo>
          
        <Companies>
          <CompanyHeader>
            <CompanyName>支払先</CompanyName>
            <CompanyAmount>金額</CompanyAmount>
            <CompanyTax>消費税</CompanyTax>
          </CompanyHeader>
          {payment.companies.map(company => (
            <CompanyRow key={company.id}>
              <CompanyName>{company.name}</CompanyName>
              <CompanyAmount>{company.amount.toLocaleString()}</CompanyAmount>
              <CompanyTax>{company.taxAmount.toLocaleString()}</CompanyTax>
            </CompanyRow>
          ))}
          <CompanyTotal>
            <TotalLabel>合計</TotalLabel>
            <TotalAmount>{calcCompanyTotal(payment.companies).toLocaleString()}</TotalAmount>
            <div></div>
          </CompanyTotal>
        </Companies>
          
        <PaymentItems>
          <ItemHeader>
            <ItemName>支払項目</ItemName>
            <ItemPrice>税抜単価</ItemPrice>
            <ItemQuantity>数量</ItemQuantity>
            <ItemAmount>支払金額</ItemAmount>
            <div></div>
          </ItemHeader>
          {payment.paymentItems.map(item => (
            <ItemRow key={item.id}>
              <ItemName>{item.name}</ItemName>  
              <ItemPrice>{item.unitPrice.toLocaleString()}</ItemPrice>
              <ItemQuantity>{item.quantity}</ItemQuantity>
              <ItemAmount>{item.amount.toLocaleString()}</ItemAmount>
              <div></div>
            </ItemRow>
          ))}
          <ItemTotal>
            <div></div>
            <div></div>
            <TotalLabel>計</TotalLabel>
            <TotalAmount>{calcPaymentItemTotal(payment.paymentItems).toLocaleString()}</TotalAmount>
            <div></div>
          </ItemTotal>
        </PaymentItems>
      </PaymentInfo>
    </Container>
  );
};

// サンプルデータを用いた使用例
const SamplePayment: PaymentType = {
  companyName: '支払先A',
  departureDate: '令和6年10月1日',  
  returnDate: '令和6年10月5日',
  departurePlace: '東京',
  destination: '大阪',
  purpose: '出張',
  companyCode: '8000000000',
  paymentMethod: '普通振込',
  bankName: 'みずほ銀行',
  companies: [
    { id: 1, name: '支払先A', amount: 10000, taxAmount: 800 },
    { id: 2, name: '支払先B', amount: 15000, taxAmount: 1200 },      
  ],
  paymentItems: [
    { id: 1, name: '旅費（日当）', unitPrice: 10000, quantity: 1, amount: 10000 },
    { id: 2, name: '旅費（宿泊代）', unitPrice: 15000, quantity: 1, amount: 15000 },
  ],
  subTotal: 25000,
  tax: 2000,
  totalAmount: 27000,
};

const SampleUsage: React.FC = () => {
  return <PaymentApplicationForm payment={SamplePayment} />;  
};

// スタイリング用のStyledComponentsを定義
const Container = styled.div`
  padding: 20px;
`;

const Title = styled.h2`
  text-align: center;
`;

const BasicInfo = styled.div`
  margin-bottom: 20px;
`;

const SubInfo = styled.div`
  margin-bottom: 20px;
`;

const Row = styled.div`
  display: flex;
  margin-bottom: 10px;
`;

const Label = styled.span`
  width: 120px;
  font-weight: bold;
`;

const PaymentInfo = styled.div``;

const AmountInfo = styled.div`
  display: flex;
  justify-content: space-around; 
  margin-bottom: 30px;
`;

const AmountItem = styled.div`
  text-align: center;
`;

const AmountLabel = styled.div``;

const AmountValue = styled.div`
  font-size: 18px;
  font-weight: bold;
`;

const Companies = styled.div`
  border: 1px solid #ccc;
  padding: 10px;
  margin-bottom: 30px;
`;

const CompanyHeader = styled.div`
  display: flex;
  font-weight: bold;
  border-bottom: 1px solid #ccc;
  padding-bottom: 5px;
  margin-bottom: 5px;
`;

const CompanyName = styled.div`
  flex: 1;
`;

const CompanyAmount = styled.div`
  width: 100px;
  text-align: right;
`;

const CompanyTax = styled.div`
  width: 100px;
  text-align: right;
`;

const CompanyRow = styled.div`
  display: flex;
  padding: 5px 0;
`;

const CompanyTotal = styled.div`
  display: flex;
  justify-content: flex-end;
  border-top: 1px solid #ccc;
  padding-top: 5px;
`;

const TotalLabel = styled.div`
  font-weight: bold;
  margin-right: 20px;
`;

const TotalAmount = styled.div`
  width: 100px;
  text-align: right;
  font-weight: bold;
`;

const PaymentItems = styled.div`
  border: 1px solid #ccc;
  padding: 10px;
`;

const ItemHeader = styled.div`
  display: flex;
  font-weight: bold;
  border-bottom: 1px solid #ccc;
  padding-bottom: 5px;
  margin-bottom: 5px;  
`;

const ItemName = styled.div`
  flex: 1;
`;

const ItemPrice = styled.div`
  width: 100px;
  text-align: right;
`;

const ItemQuantity = styled.div`
  width: 60px;
  text-align: right;  
`;

const ItemAmount = styled.div`
  width: 100px;
  text-align: right;
`;

const ItemRow = styled.div`
  display: flex;
  padding: 5px 0;
`;

const ItemTotal = styled.div`
  display: flex;
  justify-content: flex-end;
  border-top: 1px solid #ccc;
  padding-top: 5px;
`;

export default PaymentApplicationForm;