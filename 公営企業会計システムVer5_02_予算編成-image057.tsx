import React from 'react';
import styled from 'styled-components';

interface BillScheduleProps {
  data: {
    year: number;
    months: {
      [key: string]: number;
    };
  }[];
  totalAmount: number;
  currentAmount: number;
  targetAmount: number;
}

const BillSchedule: React.FC<BillScheduleProps> = ({ data, totalAmount, currentAmount, targetAmount }) => {
  return (
    <Container>
      <Title>科目別執行計画額保守</Title>
      <Info>
        <Label>予算額</Label>
        <Value>{totalAmount.toLocaleString()}</Value>
        <Unit>円</Unit>
      </Info>
      <Info>
        <Label>執行額</Label>
        <Value>{currentAmount.toLocaleString()}</Value>
      </Info>
      <Info>
        <Label>保留額</Label>
        <Value>{(totalAmount - currentAmount).toLocaleString()}</Value>
      </Info>
      <Table>
        <TableHeader>
          <TableRow>
            {data[0] && Object.keys(data[0].months).map((month, index) => (
              <TableCell key={index}>{month}月</TableCell>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((row, rowIndex) => (
            <TableRow key={rowIndex}>
              {Object.values(row.months).map((amount, cellIndex) => (
                <TableCell key={cellIndex}>{amount.toLocaleString()}</TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Bar>
        <Progress width={(currentAmount / targetAmount) * 100} />
      </Bar>
    </Container>
  );
};

const Container = styled.div`
  font-family: sans-serif;
`;

const Title = styled.h2`
  text-align: center;
  margin-bottom: 16px;
`;

const Info = styled.div`
  display: flex;
  align-items: baseline;
  margin-bottom: 8px;
`;

const Label = styled.div`
  width: 60px;
`;

const Value = styled.div`
  font-size: 24px;
  font-weight: bold;
  margin-right: 4px;
`;

const Unit = styled.div`
  font-size: 14px;
`;

const Table = styled.table`
  width: 100%;
  margin-top: 16px;
  border-collapse: collapse;
`;

const TableRow = styled.tr``;

const TableHeader = styled.thead`
  background: #f0f0f0;
`;

const TableBody = styled.tbody``;

const TableCell = styled.td`
  border: 1px solid #ccc;
  padding: 4px;
  text-align: right;
`;

const Bar = styled.div`
  width: 100%;
  height: 24px;
  background: #f0f0f0;
  margin-top: 16px;
  position: relative;
`;

const Progress = styled.div<{ width: number }>`
  position: absolute;
  top: 0;
  left: 0;
  width: ${({ width }) => width}%;
  height: 100%;
  background: #4caf50;
`;

// Usage example
const BillScheduleExample: React.FC = () => {
  const data = [
    {
      year: 2022,
      months: {
        '4': 10456,
        '5': 10456,
        '6': 10456,
        '7': 10456,
        '8': 10456,
        '9': 10456,
        '10': 10456,
        '11': 10456,
        '12': 10533,
        '1': 10508,
        '2': 10508,
        '3': 10697,
      },
    },
  ];

  return <BillSchedule data={data} totalAmount={126000} currentAmount={30000} targetAmount={90} />;
};

export default BillScheduleExample;