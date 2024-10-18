import React from 'react';
import styled from '@emotion/styled';

type WaterBillProps = {
  meterNumber: string;
  unitPrice: number;
  currentReading: number;
  previousReading: number;
  usageVolume: number;
  basicCharge: number;
  sewerageCharge: number;
  totalCharge: number;
  currentMonthCharge: number;
  previousMonthCharge: number;
  previousBalance: number;
  paymentAmount: number;
  newBalance: number;
};

const WaterBill: React.FC<WaterBillProps> = ({
  meterNumber,
  unitPrice,
  currentReading,
  previousReading,
  usageVolume,
  basicCharge,
  sewerageCharge,
  totalCharge,
  currentMonthCharge,
  previousMonthCharge,
  previousBalance,
  paymentAmount,
  newBalance,
}) => {
  return (
    <Container>
      <Header>水道事業会計</Header>
      <Row>
        <Label>管理番号</Label>
        <Value>{meterNumber}</Value>
      </Row>
      <Row>
        <Label>単価コード</Label>
        <Value>{unitPrice}</Value>
      </Row>
      <Row>
        <Label>検針月日</Label>
        <Value>令和06年02月20日</Value>
      </Row>
      <Row>
        <Label>前回指示数</Label>
        <Value>{previousReading}</Value>
      </Row>
      <Row>
        <Label>今回指示数</Label>
        <Value>{currentReading}</Value>
      </Row>
      <Row>
        <Label>使用量</Label>
        <Value>{usageVolume}㎥</Value>
      </Row>
      <Row>
        <Label>基本料金</Label>
        <Value>{basicCharge}</Value>
      </Row>
      <Row>
        <Label>下水道使用料</Label>
        <Value>{sewerageCharge}</Value>
      </Row>
      <Row>
        <Label>今回請求額</Label>
        <StrongValue>{totalCharge}</StrongValue>
      </Row>
      <Row>
        <Label>前回請求額</Label>
        <Value>{previousMonthCharge}</Value>
      </Row>
      <Row>
        <Label>当月調整額</Label>
        <Value>{currentMonthCharge}</Value>
      </Row>
      <Row>
        <Label>前回までの残高</Label>
        <Value>{previousBalance}</Value>
      </Row>
      <Row>
        <Label>お支払額</Label>
        <Value>{paymentAmount}</Value>
      </Row>
      <Row>
        <Label>新残高</Label>
        <StrongValue>{newBalance}</StrongValue>
      </Row>
    </Container>
  );
};

const SampleWaterBill = () => {
  const sampleData: WaterBillProps = {
    meterNumber: '0000010',
    unitPrice: 45, 
    currentReading: 13,
    previousReading: 0,
    usageVolume: 13,
    basicCharge: 1500,
    sewerageCharge: 1500,
    totalCharge: 142500,
    currentMonthCharge: 100000,
    previousMonthCharge: 142500,
    previousBalance: 100000,
    paymentAmount: 100000,
    newBalance: 0,
  };

  return <WaterBill {...sampleData} />;
};

// Styles
const Container = styled.div`
  font-family: sans-serif;
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;

  @media (max-width: 600px) {
    padding: 10px;
  }
`;

const Header = styled.h2`
  margin-bottom: 20px;
`;

const Row = styled.div`
  display: flex;
  margin-bottom: 10px;

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

const Label = styled.div`
  font-weight: bold;
  flex: 1;
`;

const Value = styled.div`
  flex: 2;
  text-align: right;

  @media (max-width: 600px) {
    text-align: left;
  }
`;

const StrongValue = styled(Value)`
  font-weight: bold;
  font-size: 1.2em;
`;

export default SampleWaterBill;