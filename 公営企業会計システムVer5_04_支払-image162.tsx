import React from 'react';
import styled from '@emotion/styled';

type ReserveProps = {
  reserveDate: string;
  arriveStation: string;
  arriveTrainNo: string;
  departStation: string;
  departTrainNo: string;
  taxType: string;
  adultNum: number;
  childNum: number;
  discountRate: number;
  discountType: string;
  discountAmount: number;
  saveAmount: number;
  totalAmount: number;
  adultAmount: number;
  childAmount: number;
  taxAmount: number;
  onSubmit: () => void;
  onCancel: () => void;
};

const ReserveForm = ({
  reserveDate,
  arriveStation,
  arriveTrainNo,
  departStation,  
  departTrainNo,
  taxType,
  adultNum,
  childNum,
  discountRate,
  discountType,
  discountAmount,
  saveAmount,
  totalAmount,
  adultAmount,
  childAmount,
  taxAmount,
  onSubmit,
  onCancel,
}: ReserveProps) => {
  return (
    <Container>
      <Title>予約内容</Title>
      <Row>
        <Label>予算日</Label>
        <Value>{reserveDate}</Value>
      </Row>
      <Row>
        <Label>予算節</Label>
        <Value>{arriveStation}</Value>
      </Row>
      <Row>
        <Label>予算列車</Label>
        <Value>{arriveTrainNo}</Value>
      </Row>
      <Row>
        <Label>予算時間</Label>
        <Value>{departStation}</Value>
      </Row>
      <Row>
        <Label>税区分</Label>
        <Value>{taxType}</Value>
      </Row>
      <Summary>
        <SummaryRow>
          <SummaryLabel>予算総額</SummaryLabel>
          <SummaryValue>{totalAmount}</SummaryValue>
        </SummaryRow>
        <SummaryRow>
          <SummaryLabel>負担累計</SummaryLabel>
          <SummaryValue>{adultAmount}</SummaryValue>
        </SummaryRow>
        <SummaryRow>
          <SummaryLabel>負担残額</SummaryLabel>
          <SummaryValue>{childAmount}</SummaryValue>
        </SummaryRow>
        <SummaryRow>
          <SummaryLabel>予定累計</SummaryLabel>
          <SummaryValue>{saveAmount}</SummaryValue>
        </SummaryRow>
        <SummaryRow>
          <SummaryLabel>予定残額</SummaryLabel>
          <SummaryValue>{taxAmount}</SummaryValue>
        </SummaryRow>
      </Summary>
      <InputSection>
        <InputRow>
          <InputLabel>乗客額</InputLabel>
          <Input type="number" value={adultNum} readOnly />
        </InputRow>
        <InputRow>
          <InputLabel>本体金額</InputLabel>
          <Input type="number" value={adultAmount} readOnly />
        </InputRow>
        <InputRow>
          <InputLabel>消費税率</InputLabel>
          <DiscountInput>
            <Input type="number" value={discountRate} readOnly />
            <Select value={discountType} disabled>
              <option value="%">%</option>
            </Select>
          </DiscountInput>
        </InputRow>
        <InputRow>
          <InputLabel>消費税額</InputLabel>
          <Input type="number" value={taxAmount} readOnly />
        </InputRow>
      </InputSection>
      <ButtonRow>
        <SubmitButton onClick={onSubmit}>確認</SubmitButton>
        <CancelButton onClick={onCancel}>クリア</CancelButton>
      </ButtonRow>
    </Container>
  );
};

// Sample data for demonstration
const sampleData: ReserveProps = {
  reserveDate: '0020104077',
  arriveStation: '0001 総合病院',
  arriveTrainNo: '',
  departStation: '0000 総合病院',
  departTrainNo: '',
  taxType: '課税',
  adultNum: 11000,
  childNum: 10000,
  discountRate: 8,
  discountType: '%',
  discountAmount: 1000,
  saveAmount: 605000,
  totalAmount: 670000,
  adultAmount: 11000,
  childAmount: 665000,
  taxAmount: 665000,
  onSubmit: () => alert('Submitted'),
  onCancel: () => alert('Cancelled'),
};

const ReserveSample = () => {
  return <ReserveForm {...sampleData} />;
};

// Styles
const Container = styled.div`
  font-family: Arial, sans-serif;
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  background: #f0f0f0;
  border-radius: 5px;
`;

const Title = styled.h2`
  margin-bottom: 20px;
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;

const Label = styled.div``;

const Value = styled.div``;

const Summary = styled.div`
  margin: 20px 0;
  padding: 10px;
  border: 1px solid #ccc;
`;

const SummaryRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 5px;
`;

const SummaryLabel = styled.div``;

const SummaryValue = styled.div`
  font-weight: bold;
`;

const InputSection = styled.div`
  margin-bottom: 20px;
`;

const InputRow = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const InputLabel = styled.div`
  width: 100px;
`;

const Input = styled.input`
  flex: 1;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 3px;
`;

const DiscountInput = styled.div`
  display: flex;
`;

const Select = styled.select`
  margin-left: 10px;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 3px;
`;

const ButtonRow = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const Button = styled.button`
  padding: 10px 20px;
  margin-left: 10px;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
`;

const SubmitButton = styled(Button)`
  background: #007bff;
  color: #fff;
`;

const CancelButton = styled(Button)`
  background: #dc3545;
  color: #fff;
`;

export default ReserveSample;