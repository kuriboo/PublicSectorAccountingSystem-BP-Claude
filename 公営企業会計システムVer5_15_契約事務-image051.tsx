import React from 'react';
import styled from '@emotion/styled';

type SalesDetailProps = {
  code: string;
  name: string;
  outQuantity: number;
  outAmount: number;
};

const SalesDetail: React.FC<SalesDetailProps> = ({ code, name, outQuantity, outAmount }) => {
  return (
    <Row>
      <Cell>{code}</Cell>
      <Cell>{name}</Cell>
      <Cell>{outQuantity.toLocaleString()}</Cell>
      <Cell>{outAmount.toLocaleString()}</Cell>
    </Row>
  );
};

type SalesDetailsTableProps = {
  salesDetails: SalesDetailProps[];
  canceledAmount: number;
  outQuantity: number;
  outAmount: number;
};

const SalesDetailsTable: React.FC<SalesDetailsTableProps> = ({
  salesDetails,
  canceledAmount,
  outQuantity,
  outAmount,
}) => {
  return (
    <Container>
      <Title>売上詳細</Title>
      <Table>
        <thead>
          <Row>
            <HeaderCell>コード</HeaderCell>
            <HeaderCell>商品名</HeaderCell>
            <HeaderCell>出荷数量</HeaderCell>
            <HeaderCell>出荷金額</HeaderCell>
          </Row>
        </thead>
        <tbody>
          {salesDetails.map((detail, index) => (
            <SalesDetail key={index} {...detail} />
          ))}
        </tbody>
      </Table>
      <Footer>
        <Label>契約金額(税込)</Label>
        <Value>{canceledAmount}</Value>
        <Label>出荷数量</Label>
        <Value>{outQuantity}</Value>
        <Label>出荷金額</Label>
        <Value>{outAmount}</Value>
      </Footer>
    </Container>
  );
};

// サンプルデータを用いた使用例
const sampleData: SalesDetailsTableProps = {
  salesDetails: [
    {
      code: '0000001',
      name: '新木場さっぱい工務店',
      outQuantity: 1000,
      outAmount: 1600,
    },
    {
      code: '0000002',
      name: '新木場ふっせい建築',
      outQuantity: 14400,
      outAmount: 14400,
    },
  ],
  canceledAmount: 0,
  outQuantity: 100,
  outAmount: 0,
};

const SampleUsage: React.FC = () => {
  return (
    <div>
      <h2>Sales Details Table Sample</h2>
      <SalesDetailsTable {...sampleData} />
    </div>
  );
};

// スタイリング
const Container = styled.div`
  background-color: #f0f0f0;
  padding: 16px;
  border-radius: 4px;
`;

const Title = styled.h3`
  margin: 0 0 16px;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 16px;
`;

const Row = styled.tr`
  &:nth-of-type(even) {
    background-color: #f9f9f9;
  }
`;

const Cell = styled.td`
  padding: 8px;
  border: 1px solid #ddd;
`;

const HeaderCell = styled.th`
  padding: 8px;
  border: 1px solid #ddd;
  background-color: #f2f2f2;
  font-weight: bold;
`;

const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const Label = styled.span`
  margin-right: 8px;
`;

const Value = styled.span`
  font-weight: bold;
  margin-right: 16px;
`;

export default SalesDetailsTable;