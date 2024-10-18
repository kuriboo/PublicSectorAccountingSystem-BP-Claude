import React from 'react';
import styled from '@emotion/styled';

type ReservationData = {
  date: string;
  division: string;
  accountCode: string;
  clientCode: string;
  clientName: string;
  termCode: string;
  termName: string;
  consumption: number;
  taxRate: number;
  consumptionTax: number;
  subtotal: number;
  total: number;
};

type ReservationSummaryProps = {
  data: ReservationData;
};

const ReservationSummary: React.FC<ReservationSummaryProps> = ({ data }) => {
  return (
    <Container>
      <LeftColumn>
        <Row>
          <Label>予算科目</Label>
          <Value>{data.accountCode} : {data.division}</Value>
        </Row>
        <Row>
          <Label>予算節</Label>
          <Value>{data.clientCode} : {data.clientName}</Value>
        </Row>
        <Row>
          <Label>予算細節</Label>
          <Value>{data.termCode} : {data.termName}</Value>
        </Row>
        <Row>
          <Label>税区分</Label>
          <Value>課税</Value>
        </Row>
      </LeftColumn>

      <RightColumn>
        <Row>
          <Label>予算残額</Label>
          <Value>{data.total.toLocaleString()}</Value>
        </Row>
        <Row>
          <Label>負担累計</Label>
          <Value>{data.consumption.toLocaleString()}</Value>
        </Row>
        <Row>
          <Label>負担残額</Label>
          <Value>{(data.total - data.consumption).toLocaleString()}</Value>
        </Row>
        <Row>
          <Label>予定累計</Label>
          <Value>0</Value>
        </Row>
        <Row>
          <Label>予定残額</Label>
          <Value>{(data.total - data.consumption).toLocaleString()}</Value>
        </Row>
      </RightColumn>

      <BottomRow>
        <BottomItem>
          <Label>請負額</Label>  
          <Value>{data.subtotal.toLocaleString()}</Value>
        </BottomItem>
        <BottomItem>
          <Label>税抜額</Label>
          <Value>{(data.subtotal * (100 - data.taxRate) / 100).toLocaleString()}</Value>
        </BottomItem>
        <BottomItem>
          <InputLabel>
            <InputField type="number" defaultValue={data.taxRate} />
            <InputUnit>%</InputUnit>
          </InputLabel>
          <Label>消費税率</Label>
        </BottomItem>
        <BottomItem>
          <Label>消費税額</Label>
          <Value>{data.consumptionTax.toLocaleString()}</Value>
        </BottomItem>
        <BottomItem>
          <Value>{data.total.toLocaleString()}</Value>
          <Label>合計</Label>
        </BottomItem>
      </BottomRow>
      
      <ButtonRow>
        <Button>OK</Button>
        <Button>クリア</Button>  
        <Button>キャンセル</Button>
      </ButtonRow>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #ccc;
  padding: 16px;
  font-family: sans-serif;
`;

const LeftColumn = styled.div`
  flex: 1;
`;

const RightColumn = styled.div`
  flex: 1;
  margin-left: 32px;
`;

const Row = styled.div`
  display: flex;
  margin-bottom: 8px;
`;

const Label = styled.div`
  width: 100px;
  font-weight: bold;
`;

const Value = styled.div`
  flex: 1;
`;

const BottomRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 16px;
`;

const BottomItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const InputLabel = styled.label`
  display: flex;
  align-items: center;
`;

const InputField = styled.input`
  width: 60px;
  margin-right: 4px;
`;

const InputUnit = styled.span`
  font-size: 14px;
`;

const ButtonRow = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 16px;
`;

const Button = styled.button`
  margin-left: 8px;
  padding: 4px 16px;
`;

// Usage example
const SamplePage: React.FC = () => {
  const sampleData: ReservationData = {
    date: '2020/04/11',
    division: '総務・備消耗品費', 
    accountCode: '0001',
    clientCode: '0001',
    clientName: '総務用品',
    termCode: '0001',
    termName: '備消耗品費',
    consumption: 96000,
    taxRate: 10,
    consumptionTax: 909,
    subtotal: 10000,
    total: 1237000,
  };

  return (
    <div>
      <h1>Reservation Summary</h1>
      <ReservationSummary data={sampleData} />
    </div>
  );
};

export default SamplePage;