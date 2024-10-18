import React from 'react';
import styled from 'styled-components';

// Define the table header data
const headerData = ['', '項目', 'セグメント1', 'セグメント2', 'セグメント3', 'セグメント4', 'セグメント5', 'セグメント6', 'セグメント7', 'セグメント8', '合計', ''];

// Define the Props type
type Props = {
  data: (string | number)[][];
};

// Define the styled components
const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  font-size: 14px;
`;

const THead = styled.thead`
  background-color: #f2f2f2;
`;

const TBody = styled.tbody``;

const TH = styled.th`
  padding: 8px;
  text-align: center;
  border: 1px solid #ddd;
`;

const TR = styled.tr``;

const TD = styled.td`
  padding: 8px;
  border: 1px solid #ddd;
  text-align: right;

  &:first-child {
    text-align: left;
  }
`;

// Define the FinancialTable component
const FinancialTable: React.FC<Props> = ({ data }) => {
  return (
    <Table>
      <THead>
        <TR>
          {headerData.map((header, index) => (
            <TH key={index}>{header}</TH>
          ))}
        </TR>
      </THead>
      <TBody>
        {data.map((row, rowIndex) => (
          <TR key={rowIndex}>
            {row.map((cell, cellIndex) => (
              <TD key={cellIndex}>{cell}</TD>
            ))}
          </TR>
        ))}
      </TBody>
    </Table>
  );
};

// Example usage of the FinancialTable component
const ExampleComponent: React.FC = () => {
  // Sample data for the table
  const tableData = [
    ['001', '営業活動収入', 1011717, 0, 220, 5700, 0, 0, 400, 0, 1017980],
    ['002', '営業活動支出', -1700072181, -92695603, -279295792, -762078133, -165895467, -471288, -11237400, -114166, -2964064008],
    ['003', '受取利息配当金', 111240, 0, 220, 5700, 220, 0, 400, 0, 117780],
    ['004', '利息の支払額', -2077, 0, 0, 0, 0, 0, 0, 0, -2077],
  ];

  return (
    <div>
      <h2>Financial Table Example</h2>
      <FinancialTable data={tableData} />
    </div>
  );
};

export default ExampleComponent;