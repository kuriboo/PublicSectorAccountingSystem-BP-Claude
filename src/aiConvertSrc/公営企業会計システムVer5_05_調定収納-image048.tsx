import React from 'react';
import styled from '@emotion/styled';

type TaxInfo = {
  code: string;
  name: string;
  rate: number;
};

type TaxDetailProps = {
  code: string;
  name: string;
  quantity: number;
  unitPrice: number;
  currentTax: number;
  reducedTax: number;
  taxRate: number;
  taxInfo: TaxInfo[];
};

const TaxDetail: React.FC<TaxDetailProps> = ({
  code,
  name,
  quantity,
  unitPrice,
  currentTax,
  reducedTax,
  taxRate,
  taxInfo,
}) => {
  return (
    <Container>
      <Row>
        <Label>節</Label>
        <Value>{code}</Value>
        <Label>細節</Label>
        <Value>{name}</Value>
        <Label>明細</Label>
        <Value>{`${quantity} / ${unitPrice}`}</Value>
      </Row>
      <Row>
        <Label>税区分</Label>
        <Value>課税</Value>
        <Label>消費税率</Label>
        <Value>{`${taxRate}%`}</Value>
      </Row>
      <Row>
        <Label>決定金額</Label>
        <Value>{unitPrice * quantity}</Value>
        <Label>内消費税額</Label>
        <Value>{currentTax}</Value>
      </Row>
      <Row>
        <Label>戻入金額</Label>
        <Value>{unitPrice * quantity}</Value>
        <Label>内消費税額</Label>
        <Value>{reducedTax}</Value>
      </Row>
      <TaxInfoTable>
        <thead>
          <tr>
            <TableHeader>仕訳節</TableHeader>
            <TableHeader>仕訳細節</TableHeader>  
            <TableHeader>仕訳明細</TableHeader>
          </tr>
        </thead>
        <tbody>
          {taxInfo.map(({ code, name, rate }) => (
            <tr key={code}>
              <TableData>{code}</TableData>
              <TableData>{name}</TableData>
              <TableData>{rate}</TableData>
            </tr>
          ))}
        </tbody>
      </TaxInfoTable>
      <ButtonContainer>
        <Button>OK</Button>
        <Button>クリア</Button>
        <Button>キャンセル</Button>
      </ButtonContainer>
    </Container>
  );
};

// Sample usage
const SampleTaxDetail: React.FC = () => {
  const sampleData: TaxDetailProps = {
    code: '002010912',
    name: '社 備消耗',
    quantity: 10,
    unitPrice: 1000,
    currentTax: 100,
    reducedTax: 450,
    taxRate: 10,
    taxInfo: [
      { code: '0621005001', name: '現金預金', rate: 10 },
      { code: '0001', name: '現金預金', rate: 10 },
      { code: '1001', name: '現金預金/課', rate: 10 },
    ],
  };

  return <TaxDetail {...sampleData} />;
};

const Container = styled.div`
  font-family: sans-serif;
  background-color: #f0f0f0;
  padding: 16px;
  border-radius: 4px;
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

const TaxInfoTable = styled.table`
  width: 100%;
  margin-top: 16px;
  border-collapse: collapse;
`;

const TableHeader = styled.th`
  background-color: #e0e0e0;
  padding: 4px;
  text-align: left;
`;

const TableData = styled.td`
  padding: 4px;
`;

const ButtonContainer = styled.div`
  margin-top: 16px;
  text-align: right;
`;

const Button = styled.button`
  margin-left: 8px;
  padding: 4px 8px;
`;

export default SampleTaxDetail;