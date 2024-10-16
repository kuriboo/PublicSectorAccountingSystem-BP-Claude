import React from 'react';
import styled from 'styled-components';

type CostDetailsProps = {
  year: number;
  companyName: string;
  period: number;
  carryForwardAmountPrev: number;
  carryForwardAmountNext: number;
  borrowingAmountPrev: number;
  borrowingAmountNext: number;
  prevPeriodLabel: string;
  nextPeriodLabel: string;
  deductionRate: number;
  taxRate: number;
  consumptionTaxRate: number;
};

const CostDetails: React.FC<CostDetailsProps> = ({
  year,
  companyName,
  period,
  carryForwardAmountPrev,
  carryForwardAmountNext,
  borrowingAmountPrev, 
  borrowingAmountNext,
  prevPeriodLabel,
  nextPeriodLabel,
  deductionRate,
  taxRate,
  consumptionTaxRate,
}) => {
  // 消費税率が0より小さい、または100より大きい場合はエラー
  if (consumptionTaxRate < 0 || consumptionTaxRate > 100) {
    throw new Error('消費税率は0から100の範囲で指定してください。');
  }

  return (
    <Wrapper>
      <Header>
        <HeaderItem>決定年度</HeaderItem>
        <HeaderItem>令和{year-1}年度</HeaderItem>
      </Header>
      
      <Row>
        <RowTitle>摘要</RowTitle>
        <RowValue>MAD017システム_負担割し<br />MAD017システム_負担割し_摘要2</RowValue>
      </Row>

      <PeriodContainer>
        <PeriodLabel>{prevPeriodLabel}</PeriodLabel>
        <PeriodLabel>{nextPeriodLabel}</PeriodLabel>
      </PeriodContainer>

      <TableContainer>
        <TableHeader>
          <TableRow>
            <TableHeaderItem>借方科目</TableHeaderItem>
            <TableHeaderItem>借方細目・明細</TableHeaderItem>
            <TableHeaderItem>貸方科目</TableHeaderItem>
            <TableHeaderItem>貸方細目・明細</TableHeaderItem>
            <TableHeaderItem>税込金額</TableHeaderItem>
            <TableHeaderItem>税抜額</TableHeaderItem>
            <TableHeaderItem>消費税額</TableHeaderItem>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>方々経費</TableCell>
            <TableCell>預計</TableCell>
            <TableCell>預り保証金</TableCell>
            <TableCell>預り保証金</TableCell>
            <TableCell>{carryForwardAmountPrev}</TableCell>
            <TableCell>{carryForwardAmountPrev}</TableCell>
            <TableCell>0</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>方々経費</TableCell>
            <TableCell>預計</TableCell>
            <TableCell>預り保証金</TableCell>
            <TableCell>預り保証金</TableCell>
            <TableCell>{carryForwardAmountNext}</TableCell>
            <TableCell>{carryForwardAmountNext}</TableCell>
            <TableCell>0</TableCell>
          </TableRow>
        </TableBody>
      </TableContainer>

      <Row>
        <RowTitle>振替内容</RowTitle>
        <RowValue>
          <BorrowingContainer>
            <BorrowingLabel>借方科目</BorrowingLabel>
            <BorrowingValue>{borrowingAmountPrev}</BorrowingValue>
          </BorrowingContainer>
          <BorrowingContainer>
            <BorrowingLabel>貸方科目</BorrowingLabel>
            <BorrowingValue>{borrowingAmountNext}</BorrowingValue>
          </BorrowingContainer>
        </RowValue>
      </Row>

      <Row>
        <RowTitle>予算</RowTitle>
        <RowValue>
          <BudgetLabel>本体仕訳</BudgetLabel>
          <BudgetLabel>消費仕訳</BudgetLabel>
        </RowValue>
      </Row>

      <DeductionRateContainer>
        <DeductionRateLabel>消費税率</DeductionRateLabel>
        <DeductionRateValue>{deductionRate.toFixed(2)}%</DeductionRateValue>
      </DeductionRateContainer>

      <TaxRateContainer>
        <TaxRateLabel>税込金額</TaxRateLabel>
        <TaxRateValue>{taxRate}</TaxRateValue>
        <TaxRateLabel>税抜金額</TaxRateLabel>
        <TaxRateValue>{taxRate}</TaxRateValue>
        <TaxRateLabel>消費税額</TaxRateLabel>
        <TaxRateValue>0</TaxRateValue>
      </TaxRateContainer>
      
    </Wrapper>
  );
};

// サンプルデータを使ったコンポーネントの使用例
const SampleUsage: React.FC = () => {
  return (
    <CostDetails 
      year={2022}
      companyName="サンプル会社"
      period={2} 
      carryForwardAmountPrev={100}
      carryForwardAmountNext={100}
      borrowingAmountPrev={1000} 
      borrowingAmountNext={2000}
      prevPeriodLabel="期首"
      nextPeriodLabel="期末"
      deductionRate={10}
      taxRate={1100}
      consumptionTaxRate={10}
    />
  );
};

const Wrapper = styled.div`
  font-family: sans-serif;
`;

const Header = styled.div`
  display: flex;  
  background-color: #f2f2f2;
  padding: 8px;
  font-weight: bold;
`;

const HeaderItem = styled.div`
  margin-right: 16px;
`;

const Row = styled.div`
  display: flex;
  margin-top: 8px;
`;

const RowTitle = styled.div`
  width: 100px;
  font-weight: bold;
`;

const RowValue = styled.div`
  flex: 1;
`;

const PeriodContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 16px;
`;

const PeriodLabel = styled.div`
  margin-left: 16px;
`;

const TableContainer = styled.table`
  width: 100%;
  margin-top: 8px;
  border-collapse: collapse;
`;

const TableHeader = styled.thead`
  background-color: #f2f2f2;
`;

const TableHeaderItem = styled.th`
  padding: 8px;
  text-align: center;
  border: 1px solid #ddd;
`;

const TableBody = styled.tbody``;

const TableRow = styled.tr``;

const TableCell = styled.td`
  padding: 8px;
  border: 1px solid #ddd;
  text-align: right;
`;

const BorrowingContainer = styled.div`
  display: flex;
  justify-content: space-between;  
  margin-bottom: 4px;
`;

const BorrowingLabel = styled.div``;

const BorrowingValue = styled.div``;

const BudgetLabel = styled.span`
  margin-right: 16px;
`;

const DeductionRateContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 8px;
`;

const DeductionRateLabel = styled.div`
  margin-right: 8px;
`;

const DeductionRateValue = styled.div``;

const TaxRateContainer = styled.div`
  display: flex;  
  justify-content: flex-end;
  margin-top: 8px;
`;

const TaxRateLabel = styled.div`
  width: 100px;
  text-align: right;
`;

const TaxRateValue = styled.div`
  width: 100px;
  text-align: right;
`;

export default CostDetails;