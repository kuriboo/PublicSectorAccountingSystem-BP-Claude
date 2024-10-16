import React from 'react';
import styled from '@emotion/styled';

type TaxPaymentData = {
  period: string;
  payment: number;
  paid: number;
  balance: number;
}

type TaxSummaryProps = {
  estimatedTax: number;
  interimTax: number;
  finalTax: number;
  paymentRatio: number;
  paymentData: TaxPaymentData[];
}

const TaxSummary: React.FC<TaxSummaryProps> = ({
  estimatedTax,
  interimTax,
  finalTax, 
  paymentRatio,
  paymentData
}) => {

  return (
    <Container>
      <Title>決算見込明細書総</Title>
      
      <SummaryItem>
        <Label>予算明細</Label>
        <Value>{estimatedTax.toLocaleString()} 給料</Value>
      </SummaryItem>
      
      <SummaryItem>
        <Label>消費税率</Label>
        <Value>{paymentRatio}%</Value>
      </SummaryItem>

      <Grid>
        <GridItem>
          <Label>税抜</Label>  
          <Value>{estimatedTax.toLocaleString()} 円</Value>
        </GridItem>
        <GridItem>
          <Label>消費税</Label>
          <Value>{interimTax.toLocaleString()} 円</Value>  
        </GridItem>
        <GridItem>
          <Label>税込</Label>
          <Value>{finalTax.toLocaleString()} 円</Value>
        </GridItem>
      </Grid>

      <TableContainer>
        <TableHeader>
          <HeaderCell>予定月</HeaderCell>  
          <HeaderCell>率</HeaderCell>
          <HeaderCell>予定額</HeaderCell>
          <HeaderCell>執行額</HeaderCell>
        </TableHeader>
        {paymentData.map((item, index) => (
          <TableRow key={index}>
            <RowCell>{item.period}</RowCell>
            <RowCell>{item.payment.toLocaleString()}</RowCell>  
            <RowCell>{item.paid.toLocaleString()}</RowCell>
            <RowCell>{item.balance.toLocaleString()}</RowCell>
          </TableRow>
        ))}
      </TableContainer>

      <ButtonContainer>
        <Button>OK</Button>  
        <Button>クリア</Button>
        <CancelButton>キャンセル</CancelButton>
      </ButtonContainer>
      
    </Container>
  );
};

// Styled components
const Container = styled.div`
  padding: 16px;
  background-color: #f0f0f0;
`;

const Title = styled.h2`
  font-size: 18px;
  margin-bottom: 16px;
`;

const SummaryItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
`;

const Label = styled.span`
  font-weight: bold;
  margin-right: 8px;
`;

const Value = styled.span`
  font-size: 16px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  margin-bottom: 16px;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

const GridItem = styled.div`
  display: flex;
  flex-direction: column;
`;

const TableContainer = styled.div`
  margin-bottom: 16px;
`;

const TableHeader = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  background-color: #e0e0e0;
  padding: 8px;
  font-weight: bold;
`;

const HeaderCell = styled.div`
  text-align: center;
`;

const TableRow = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);  
  padding: 8px;
  border-bottom: 1px solid #e0e0e0;
`;

const RowCell = styled.div`
  text-align: right;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const Button = styled.button`
  padding: 8px 16px;
  margin-left: 8px;
  background-color: #007bff;
  color: #fff;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const CancelButton = styled(Button)`
  background-color: #6c757d;

  &:hover {  
    background-color: #545b62;
  }  
`;

// Sample usage
const TaxSummaryPage: React.FC = () => {
  // Sample data
  const sampleData: TaxSummaryProps = {
    estimatedTax: 129516000,
    interimTax: 0,
    finalTax: 129516000,
    paymentRatio: 0,
    paymentData: [
      { period: '2017/04', payment: 0, paid: 0, balance: 0 },
      { period: '2017/05', payment: 0, paid: 0, balance: 0 },
      { period: '2017/07', payment: 0, paid: 0, balance: 1710288 },
      // ... other data
    ],
  };

  return <TaxSummary {...sampleData} />;
};

export default TaxSummaryPage;