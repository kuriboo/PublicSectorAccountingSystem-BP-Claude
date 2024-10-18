import React from 'react';
import styled from '@emotion/styled';

interface TaxData {
  税区分: string;
  消費税率: string;
  税込額: number;
  税抜額: number;
  消費税額: number;
}

interface TaxCalculationProps {
  taxRate: number;
  excludingTax: number;
  includingTax: number;
  taxData: TaxData[];
}

const Container = styled.div`
  font-family: sans-serif;
  padding: 16px;
  @media (max-width: 600px) {
    padding: 8px;
  }
`;

const Title = styled.div`
  font-weight: bold;
  margin-bottom: 8px;
`;

const TaxRateContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 16px;
`;

const TaxRateItem = styled.div`
  flex: 1;
  &:not(:last-child) {
    margin-right: 8px;
  }
`;

const TaxRateLabel = styled.div`
  font-size: 14px;
`;

const TaxRateValue = styled.div`
  font-size: 18px;
  font-weight: bold;
`;

const TableContainer = styled.div`
  overflow-x: auto;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  font-size: 14px;
  margin-bottom: 16px;

  th, td {
    border: 1px solid #ccc;
    padding: 4px;
    text-align: right;
    white-space: nowrap;
  }

  th {
    background-color: #f0f0f0;
    font-weight: normal;
  }
`;

const ButtonContainer = styled.div`
  text-align: center;
`;

const Button = styled.button`
  font-size: 14px;
  padding: 4px 16px;
  margin: 0 4px;
`;

const TaxCalculation: React.FC<TaxCalculationProps> = ({
  taxRate,
  excludingTax,
  includingTax,
  taxData,
}) => {
  return (
    <Container>
      <Title>入力金額計算</Title>
      <TaxRateContainer>
        <TaxRateItem>
          <TaxRateLabel>税込額</TaxRateLabel>
          <TaxRateValue>{includingTax.toLocaleString()}</TaxRateValue>
        </TaxRateItem>
        <TaxRateItem>
          <TaxRateLabel>税抜額</TaxRateLabel>
          <TaxRateValue>{excludingTax.toLocaleString()}</TaxRateValue>
        </TaxRateItem>
        <TaxRateItem>
          <TaxRateLabel>消費税額</TaxRateLabel>
          <TaxRateValue>{(includingTax - excludingTax).toLocaleString()}</TaxRateValue>
        </TaxRateItem>
      </TaxRateContainer>
      <TableContainer>
        <Table>
          <thead>
            <tr>
              <th>税区分</th>
              <th>消費税率</th>
              <th>税込額</th>
              <th>税抜額</th>
              <th>消費税額</th>
            </tr>
          </thead>
          <tbody>
            {taxData.map((data, index) => (
              <tr key={index}>
                <td>{data.税区分}</td>
                <td>{data.消費税率}</td>
                <td>{data.税込額.toLocaleString()}</td>
                <td>{data.税抜額.toLocaleString()}</td>
                <td>{data.消費税額.toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </TableContainer>
      <ButtonContainer>
        <Button>OK</Button>
        <Button>クリア</Button>
        <Button>キャンセル</Button>
      </ButtonContainer>
    </Container>
  );
};

// Usage example
const App: React.FC = () => {
  const taxRate = 10;
  const excludingTax = 25000;
  const includingTax = 27500;

  const taxData: TaxData[] = [
    { 税区分: '課税', 消費税率: '80.00%', 税込額: 15000, 税抜額: 13889, 消費税額: 1111 },
    { 税区分: '課税', 消費税率: '10.00%', 税込額: 10000, 税抜額: 9091, 消費税額: 909 },
  ];

  return (
    <TaxCalculation
      taxRate={taxRate}
      excludingTax={excludingTax}  
      includingTax={includingTax}
      taxData={taxData}
    />
  );
};

export default App;