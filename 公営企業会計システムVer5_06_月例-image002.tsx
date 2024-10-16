import React from 'react';
import styled from '@emotion/styled';

type CompanyBusinessExpenseSystemProps = {
  expenseDate: string;
  workCode: string;
  detail: string;
  paymentMethod: '銀行振込' | '現金';
  demandSide: '御中' | '明細';
  paymentSide: '御中' | '明細';
  billItems: {
    billDate: string;
    billDateTo: string;
    paymentDate: string;
    paymentDateTo: string;
  }[];
  taxRate: number;
  totalAmount: number;
  taxAmount: number;
  billingAmount: number;
  isTaxIncluded: boolean;
};

const CompanyBusinessExpenseSystem: React.FC<CompanyBusinessExpenseSystemProps> = ({
  expenseDate,
  workCode,
  detail,
  paymentMethod,
  demandSide,
  paymentSide,
  billItems,
  taxRate,
  totalAmount,
  taxAmount,
  billingAmount,
  isTaxIncluded,
}) => {
  return (
    <Container>
      <Title>公営企業会計システム</Title>
      <DateAndCodeContainer>
        <DateContainer>
          <Label>振替入力</Label>
          <Value>{expenseDate}</Value>
        </DateContainer>
        <CodeContainer>
          <Label>仕訳コード</Label>
          <Value>{workCode}</Value>
        </CodeContainer>
      </DateAndCodeContainer>
      
      <DetailContainer>
        <Label>摘要</Label>
        <DetailTextarea value={detail} readOnly />
      </DetailContainer>

      <PaymentMethodContainer>
        <PaymentLabel>
          <input type="radio" checked={paymentMethod === '銀行振込'} readOnly /> 銀行振込
        </PaymentLabel>
        <PaymentLabel>
          <input type="radio" checked={paymentMethod === '現金'} readOnly /> 現金  
        </PaymentLabel>
      </PaymentMethodContainer>
      
      <DemandPaymentContainer>
        <DemandSideContainer>
          <Label>請求細目・明細</Label>
          <RadioLabel>
            <input type="radio" checked={demandSide === '御中'} readOnly /> 御中
          </RadioLabel>
          <RadioLabel>
            <input type="radio" checked={demandSide === '明細'} readOnly /> 明細
          </RadioLabel>
        </DemandSideContainer>
        
        <PaymentSideContainer>
          <Label>振込細目・明細</Label>
          <RadioLabel>
            <input type="radio" checked={paymentSide === '御中'} readOnly /> 御中
          </RadioLabel>
          <RadioLabel>
            <input type="radio" checked={paymentSide === '明細'} readOnly /> 明細  
          </RadioLabel>
        </PaymentSideContainer>
      </DemandPaymentContainer>

      <TableContainer>
        <TableHeader>
          <HeaderCell>借方科目</HeaderCell>
          <HeaderCell>借方細目・明細</HeaderCell>
          <HeaderCell>貸方科目</HeaderCell>
          <HeaderCell>貸方細目・明細</HeaderCell>
        </TableHeader>
        <TableBody>
          {billItems.map((item, index) => (
            <TableRow key={index}>
              <TableCell>{item.billDate}</TableCell>
              <TableCell>{item.billDateTo}</TableCell>
              <TableCell>{item.paymentDate}</TableCell>
              <TableCell>{item.paymentDateTo}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </TableContainer>
      
      <TaxRateContainer>
        <Label>消費税率</Label>
        <Value>{taxRate}%</Value>
      </TaxRateContainer>

      <AmountContainer>      
        <Label>税込金額</Label>
        <Value>{totalAmount.toLocaleString()}</Value>

        <Label>税抜金額</Label>
        <Value>{taxAmount.toLocaleString()}</Value>

        <Label>消費税額</Label>
        <Value>{billingAmount.toLocaleString()}</Value>
      </AmountContainer>

      <TaxInclusionContainer>
        <RadioLabel>
          <input type="radio" checked={isTaxIncluded} readOnly /> 明細仕訳 
        </RadioLabel>
        <RadioLabel>
          <input type="radio" checked={!isTaxIncluded} readOnly /> 決算仕訳
        </RadioLabel>
      </TaxInclusionContainer>
      
      <ButtonContainer>
        <Button>OK</Button>
        <Button>クリア</Button>
        <Button>終了</Button>
      </ButtonContainer>
      
    </Container>
  );
};

// Styled components
const Container = styled.div`
  padding: 16px;
`;

const Title = styled.h2`
  text-align: center;
  margin-bottom: 24px;
`;

const DateAndCodeContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 16px;
`;

const DateContainer = styled.div``;

const CodeContainer = styled.div``;

const Label = styled.div`
  font-weight: bold;
`;

const Value = styled.div``;

const DetailContainer = styled.div`
  margin-bottom: 16px;
`;

const DetailTextarea = styled.textarea`
  width: 100%;
  height: 80px;
`;

const PaymentMethodContainer = styled.div`
  margin-bottom: 16px;
`;

const PaymentLabel = styled.label`
  margin-right: 8px;
`;

const DemandPaymentContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 16px;
`;

const DemandSideContainer = styled.div``;

const PaymentSideContainer = styled.div``;

const RadioLabel = styled.label`
  margin-right: 8px;
`;

const TableContainer = styled.table`
  width: 100%;
  margin-bottom: 16px;
  border-collapse: collapse;
`;

const TableHeader = styled.thead`
  background-color: #f0f0f0;
`;

const HeaderCell = styled.th`
  padding: 8px;
  text-align: left;
  border: 1px solid #ccc;
`;

const TableBody = styled.tbody``;

const TableRow = styled.tr``;

const TableCell = styled.td`
  padding: 8px;
  border: 1px solid #ccc;
`;

const TaxRateContainer = styled.div`
  margin-bottom: 16px;
`;

const AmountContainer = styled.div`
  margin-bottom: 16px;
`;

const TaxInclusionContainer = styled.div`
  margin-bottom: 16px;
`;

const ButtonContainer = styled.div`
  text-align: center;
`;

const Button = styled.button`
  margin: 0 8px;
  padding: 8px 16px;
`;

// Sample usage
const App: React.FC = () => {
  const sampleData: CompanyBusinessExpenseSystemProps = {
    expenseDate: '令和29年09月04日',
    workCode: 'SAMPLE_CODE',
    detail: 'サンプル明細',
    paymentMethod: '銀行振込',
    demandSide: '御中',
    paymentSide: '明細',
    billItems: [
      {
        billDate: 'サンプル借方日付1',
        billDateTo: 'サンプル借方日付To1',
        paymentDate: 'サンプル貸方日付1',
        paymentDateTo: 'サンプル貸方日付To1',
      },
      {
        billDate: 'サンプル借方日付2',
        billDateTo: 'サンプル借方日付To2',
        paymentDate: 'サンプル貸方日付2',
        paymentDateTo: 'サンプル貸方日付To2',
      },
    ],
    taxRate: 10,
    totalAmount: 10000,
    taxAmount: 9091,
    billingAmount: 909,
    isTaxIncluded: true,
  };

  return <CompanyBusinessExpenseSystem {...sampleData} />;
};

export default App;