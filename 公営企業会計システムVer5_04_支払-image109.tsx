import React from 'react';
import styled from 'styled-components';

interface PaymentDetailsProps {
  date: string;
  branch: number;
  payee: string;
  paymentMethod: string;
  paymentAmount: number;
  remarks: string;
  paymentType: '現金支給' | '口座振込';
  transferFee: number;
  tax: number;
  consumptionTax: number;
}

const PaymentDetails: React.FC<PaymentDetailsProps> = ({
  date,
  branch,
  payee,
  paymentMethod,
  paymentAmount,
  remarks,
  paymentType,
  transferFee,
  tax,
  consumptionTax,
}) => {
  return (
    <Container>
      <Header>
        <Title>振替伝票/未払経費明細</Title>
        <DateNumber>
          <Label>支出決定</Label>
          <Value>{date}</Value>
          <Label>番号</Label>
          <Value>{branch}</Value>
        </DateNumber>
      </Header>

      <PaymentInfo>
        <Label>支払日</Label>
        <Value>{date}</Value>
        <Label>支払方法</Label>
        <Value>{paymentMethod}</Value>
        <Label>支払先</Label>
        <Value>{payee}</Value>
      </PaymentInfo>

      <PaymentAmount>
        <AmountLabel>支払額</AmountLabel>
        <Amount>{paymentAmount.toLocaleString()}</Amount>
        <Currency>円</Currency>
      </PaymentAmount>

      <PaymentBreakdown>
        <Row>
          <BreakdownLabel>預金種別</BreakdownLabel>
          <BreakdownValue>{paymentType === '口座振込' ? '銀行名' : '分割払'}</BreakdownValue>
          <BreakdownValue>決定額</BreakdownValue>
        </Row>
        <Row>
          <BreakdownLabel>口座番号</BreakdownLabel>
          <BreakdownValue>{paymentType === '口座振込' ? '支店名' : ''}</BreakdownValue>
          <BreakdownValue>{paymentAmount.toLocaleString()}</BreakdownValue>
        </Row>
        <Row>
          <BreakdownLabel>名義人</BreakdownLabel>
          <BreakdownValue />
          <BreakdownLabel>消費税額</BreakdownLabel>
          <BreakdownValue>{consumptionTax.toLocaleString()}</BreakdownValue>
        </Row>
      </PaymentBreakdown>

      <TaxBreakdown>
        <Row>
          <BreakdownLabel>支出節</BreakdownLabel>
          <BreakdownLabel>支出細節</BreakdownLabel>
          <BreakdownLabel>支出明細</BreakdownLabel>
          <BreakdownLabel>税</BreakdownLabel>
          <BreakdownLabel>決定額</BreakdownLabel>
          <BreakdownLabel>消費税額</BreakdownLabel>
          <BreakdownLabel>税抜金額</BreakdownLabel>
        </Row>
        <Row>
          <BreakdownValue /><BreakdownValue /><BreakdownValue /><BreakdownValue>不課税</BreakdownValue>
          <BreakdownValue>{paymentAmount.toLocaleString()}</BreakdownValue>
          <BreakdownValue>{consumptionTax.toLocaleString()}</BreakdownValue>
          <BreakdownValue>{tax.toLocaleString()}</BreakdownValue>
        </Row>
      </TaxBreakdown>
    </Container>
  );
};

const Container = styled.div`
  font-size: 14px;
  padding: 16px;
  background-color: #f0f0f0;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 16px;
`;

const Title = styled.div`
  font-size: 18px;
  font-weight: bold;
`;

const DateNumber = styled.div`
  display: flex;
  align-items: center;
`;

const Label = styled.div`
  margin-right: 8px;
`;

const Value = styled.div`
  margin-right: 16px;
`;

const PaymentInfo = styled.div`
  display: flex;
  margin-bottom: 16px;
`;

const PaymentAmount = styled.div`
  display: flex;
  align-items: baseline;
  margin-bottom: 16px;
`;

const AmountLabel = styled(Label)`
  font-size: 16px;
`;

const Amount = styled.div`
  font-size: 24px;
  font-weight: bold;
  margin-right: 4px;
`;

const Currency = styled.div`
  font-size: 14px;
`;

const PaymentBreakdown = styled.div`
  margin-bottom: 16px;
`;

const TaxBreakdown = styled.div`
  margin-bottom: 16px;
`;

const Row = styled.div`
  display: flex;
`;

const BreakdownLabel = styled(Label)`
  width: 20%;
`;

const BreakdownValue = styled.div`
  width: 20%;
`;

// Sample usage
const sampleData: PaymentDetailsProps = {
  date: '令和08年10月01日',
  branch: 24,
  payee: '口座振込',
  paymentMethod: '0000000015 さよっせい 太郎',
  paymentAmount: 30000,
  remarks: '',
  paymentType: '口座振込',
  transferFee: 0,
  tax: 30000,
  consumptionTax: 0,
};

const PaymentDetailsExample: React.FC = () => {
  return <PaymentDetails {...sampleData} />;
};

export default PaymentDetailsExample;