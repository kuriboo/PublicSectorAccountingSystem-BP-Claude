import React from 'react';
import styled from '@emotion/styled';

type ChargeDifference = {
  no: string;
  name: string;
  code: string;
  taxClassification: string;
  consumptionTax: string;
};

type ChargeTable = {
  oldChargeDifferences: ChargeDifference[];
  newChargeDifferences: ChargeDifference[];
  oldYearAmount: number;
  newYearAmount: number;
};

type ChargeDifferenceDetailProps = {
  chargeTable: ChargeTable;
};

const ChargeDifferenceDetail: React.FC<ChargeDifferenceDetailProps> = ({ chargeTable }) => {
  const { oldChargeDifferences, newChargeDifferences, oldYearAmount, newYearAmount } = chargeTable;

  // Calculate total amounts
  const totalOldAmount = oldChargeDifferences.reduce((sum, diff) => sum + Number(diff.consumptionTax), 0);
  const totalNewAmount = newChargeDifferences.reduce((sum, diff) => sum + Number(diff.consumptionTax), 0);

  return (
    <Container>
      <TableContainer>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHeaderCell>充当元</TableHeaderCell>
              <TableHeaderCell>充当先</TableHeaderCell>
            </TableRow>
          </TableHeader>
          <TableBody>
            {oldChargeDifferences.map((oldDiff, index) => {
              const newDiff = newChargeDifferences[index] || {};
              return (
                <TableRow key={oldDiff.no}>
                  <TableCell>
                    <div>{oldDiff.no}</div>
                    <div>{oldDiff.name}</div>
                    <div>{oldDiff.code}</div>
                    <div>{oldDiff.taxClassification}</div>
                    <div>{oldDiff.consumptionTax}</div>
                  </TableCell>
                  <TableCell>
                    <div>{newDiff.no}</div>
                    <div>{newDiff.name}</div>
                    <div>{newDiff.code}</div>
                    <div>{newDiff.taxClassification}</div>
                    <div>{newDiff.consumptionTax}</div>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <AmountTableContainer>
        <AmountTable>
          <AmountTableBody>
            <AmountTableRow>
              <AmountTableHeaderCell>当年度充当額</AmountTableHeaderCell>
              <AmountTableCell align="right">{oldYearAmount.toLocaleString()}</AmountTableCell>
              <AmountTableCell align="right">{newYearAmount.toLocaleString()}</AmountTableCell>
            </AmountTableRow>
            <AmountTableRow>
              <AmountTableHeaderCell>不課税</AmountTableHeaderCell>
              <AmountTableCell align="right">{oldYearAmount.toLocaleString()}</AmountTableCell>
              <AmountTableCell align="right">{newYearAmount.toLocaleString()}</AmountTableCell>
            </AmountTableRow>
            <AmountTableRow>
              <AmountTableHeaderCell>合計</AmountTableHeaderCell>
              <AmountTableCell align="right">{totalOldAmount.toLocaleString()}</AmountTableCell>
              <AmountTableCell align="right">{totalNewAmount.toLocaleString()}</AmountTableCell>
            </AmountTableRow>          
          </AmountTableBody>
        </AmountTable>
        <AmountTable>
          <AmountTableBody>
            <AmountTableRow>
              <AmountTableHeaderCell>前年度充当額</AmountTableHeaderCell>
              <AmountTableCell align="right">0</AmountTableCell>
              <AmountTableCell align="right">0</AmountTableCell>              
            </AmountTableRow>
            <AmountTableRow>
              <AmountTableHeaderCell>不課税</AmountTableHeaderCell>
              <AmountTableCell align="right">0</AmountTableCell>
              <AmountTableCell align="right">0</AmountTableCell>
            </AmountTableRow>
            <AmountTableRow>
              <AmountTableHeaderCell>合計</AmountTableHeaderCell>
              <AmountTableCell align="right">0</AmountTableCell>
              <AmountTableCell align="right">0</AmountTableCell>
            </AmountTableRow>
          </AmountTableBody>
        </AmountTable>
      </AmountTableContainer>
    </Container>
  );
};

// Sample data for testing
const sampleChargeTable: ChargeTable = {
  oldChargeDifferences: [
    {
      no: '001200000',
      name: 'その他軽収益',
      code: '0002',
      taxClassification: '統計工事申込書',
      consumptionTax: '0001',
    },
  ],
  newChargeDifferences: [
    {
      no: '002100012',
      name: '報酬(受)',
      code: '0001',
      taxClassification: '工事据置料報酬',
      consumptionTax: '0003',      
    },
  ],
  oldYearAmount: 2000000,
  newYearAmount: 2000000,
};

// Usage example
const App: React.FC = () => {
  return (
    <div>
      <h1>Charge Difference Detail</h1>
      <ChargeDifferenceDetail chargeTable={sampleChargeTable} />
    </div>
  );
};

export default App;

// Styled components
const Container = styled.div`
  padding: 16px;
`;

const TableContainer = styled.div`
  margin-bottom: 16px;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const TableHeader = styled.thead`
  background-color: #f0f0f0;
`;

const TableHeaderCell = styled.th`
  padding: 8px;
  text-align: left;
`;

const TableBody = styled.tbody``;

const TableRow = styled.tr``;

const TableCell = styled.td`
  padding: 8px;
  border: 1px solid #ccc;
`;

const AmountTableContainer = styled.div`
  display: flex;
  gap: 16px;
`;

const AmountTable = styled.table`
  flex: 1;
  border-collapse: collapse;
`;

const AmountTableBody = styled.tbody``;

const AmountTableRow = styled.tr``;

const AmountTableHeaderCell = styled.th`
  padding: 8px;
  text-align: left;
  background-color: #f0f0f0;
`;

const AmountTableCell = styled.td<{ align?: 'left' | 'right' }>`
  padding: 8px;
  text-align: ${({ align }) => align || 'left'};
  border: 1px solid #ccc;
`;