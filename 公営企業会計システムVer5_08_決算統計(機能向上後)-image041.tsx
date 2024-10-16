import React from 'react';
import styled from '@emotion/styled';

interface Segment {
  code: string;
  name: string;
  taxableAmount: number;
  consumptionTaxAmount: number;
  totalAmount: number;
  ratio: number;
}

interface SegmentSummaryProps {
  segments: Segment[];
}

const SegmentSummary: React.FC<SegmentSummaryProps> = ({ segments }) => {
  if (!segments || segments.length === 0) {
    return <div>No segment data available.</div>;
  }

  const totalTaxableAmount = segments.reduce((sum, segment) => sum + segment.taxableAmount, 0);
  const totalConsumptionTaxAmount = segments.reduce((sum, segment) => sum + segment.consumptionTaxAmount, 0);
  const totalAmount = segments.reduce((sum, segment) => sum + segment.totalAmount, 0);

  return (
    <Container>
      <Header>
        <SegmentInfo>
          <Title>令和02年度</Title>
          <Detail>
            <Row>
              <Label>事業</Label>
              <Value>171 公共下水道</Value>
            </Row>
            <Row>
              <Label>大分類</Label>
              <Value>010 下水道事業収益</Value>
            </Row>
            <Row>
              <Label>中分類</Label>
              <Value>010 営業収益</Value>
            </Row>
            <Row>
              <Label>小分類</Label>
              <Value>010 下水道使用料</Value>
            </Row>
          </Detail>
        </SegmentInfo>
        <ValueInfo>
          <ValueRow>
            <ValueLabel>税抜額</ValueLabel>
            <ValueLabel>消費税額</ValueLabel>
            <ValueLabel>税込額</ValueLabel>
          </ValueRow>
          <ValueRow>
            <Value>{totalTaxableAmount.toLocaleString()}</Value>
            <Value>{totalConsumptionTaxAmount.toLocaleString()}</Value>
            <Value>{totalAmount.toLocaleString()} 千円</Value>
          </ValueRow>
        </ValueInfo>
      </Header>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHeaderCell>施設決算セグメント</TableHeaderCell>
            <TableHeaderCell>施設決算セグメント名</TableHeaderCell>
            <TableHeaderCell>税抜額</TableHeaderCell>
            <TableHeaderCell>消費税額</TableHeaderCell>
            <TableHeaderCell>税込額</TableHeaderCell>
            <TableHeaderCell>構成比率(%)</TableHeaderCell>
          </TableRow>
        </TableHeader>
        <TableBody>
          {segments.map((segment, index) => (
            <TableRow key={index}>
              <TableCell>{segment.code}</TableCell>
              <TableCell>{segment.name}</TableCell>
              <TableCell>{segment.taxableAmount.toLocaleString()}</TableCell>
              <TableCell>{segment.consumptionTaxAmount.toLocaleString()}</TableCell>
              <TableCell>{segment.totalAmount.toLocaleString()}</TableCell>
              <TableCell>{segment.ratio.toFixed(4)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Container>
  );
};

const SampleSegmentData: Segment[] = [
  {
    code: '17100011',
    name: '浄水',
    taxableAmount: 107840,
    consumptionTaxAmount: 10783,
    totalAmount: 118623,
    ratio: 100, 
  },
  {
    code: '17100012',
    name: '雨水',
    taxableAmount: 0,
    consumptionTaxAmount: 0, 
    totalAmount: 0,
    ratio: 0,
  },
];

const SampleSegmentSummary: React.FC = () => {
  return (
    <SegmentSummary segments={SampleSegmentData} />
  );
};

// Styled components
const Container = styled.div`
  font-family: sans-serif;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 16px;
`;

const SegmentInfo = styled.div`
  flex: 1;
`;

const ValueInfo = styled.div`
  text-align: right;
`;

const Title = styled.div`
  font-size: 18px;
  font-weight: bold;
`;

const Detail = styled.div`
  font-size: 14px;
`;

const Row = styled.div`
  display: flex;
`;

const Label = styled.div`
  width: 60px;
  margin-right: 8px;
`;

const Value = styled.div`
  flex: 1;
`;

const ValueRow = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 4px;
`;

const ValueLabel = styled.div`
  width: 100px;
  text-align: right;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const TableHeader = styled.thead`
  background-color: #f0f0f0;
`;

const TableBody = styled.tbody``;

const TableRow = styled.tr``;

const TableHeaderCell = styled.th`
  padding: 8px;
  text-align: left;
  border: 1px solid #ddd;
`;

const TableCell = styled.td`
  padding: 8px;
  border: 1px solid #ddd;
`;

export default SegmentSummary;