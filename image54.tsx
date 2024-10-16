import React from 'react';
import styled from '@emotion/styled';

type TaxWithholdingFormProps = {
  data: {
    name: string;
    mynumber: string;
    basicDeduction: number;
    spouseDeduction: number;
    dependentDeduction: number;
    disabilityDeduction: number;
    blueFormDeduction: number;
    totalDeduction: number;
    calculatedTax: number;
  }[];
};

const TaxWithholdingForm: React.FC<TaxWithholdingFormProps> = ({ data }) => {
  return (
    <Table>
      <thead>
        <tr>
          <Th rowSpan={2}>氏名/区分</Th>
          <Th rowSpan={2}>個人番号</Th>
          <Th colSpan={6}>控除対象</Th>
          <Th rowSpan={2}>控除合計</Th>
          <Th rowSpan={2}>源泉徴収額</Th>
        </tr>
        <tr>
          <Th>基礎控除</Th>
          <Th>配偶者控除</Th>
          <Th>扶養控除</Th>
          <Th>障害者控除</Th>
          <Th>青色専従者控除</Th>
          <Th>合計</Th>
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr key={index}>
            <Td>{row.name || '-'}</Td>
            <Td>{row.mynumber || '-'}</Td>
            <Td>{row.basicDeduction.toLocaleString() || '0'}</Td>
            <Td>{row.spouseDeduction.toLocaleString() || '0'}</Td>
            <Td>{row.dependentDeduction.toLocaleString() || '0'}</Td>
            <Td>{row.disabilityDeduction.toLocaleString() || '0'}</Td>
            <Td>{row.blueFormDeduction.toLocaleString() || '0'}</Td>
            <Td>{row.totalDeduction.toLocaleString() || '0'}</Td>
            <Td>{row.calculatedTax.toLocaleString() || '0'}</Td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

// Styled components
const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  font-size: 14px;

  @media (max-width: 600px) {
    font-size: 12px;
  }
`;

const Th = styled.th`
  background-color: #f2f2f2;
  border: 1px solid #ddd;
  padding: 8px;
  text-align: center;
`;

const Td = styled.td`
  border: 1px solid #ddd;
  padding: 8px;
  text-align: right;
`;

// Sample data for demo
const sampleData = [
  {
    name: '伊藤花子',
    mynumber: '000000000',
    basicDeduction: 380000,
    spouseDeduction: 380000,
    dependentDeduction: 0,
    disabilityDeduction: 0,
    blueFormDeduction: 0,
    totalDeduction: 2090112070,
    calculatedTax: 93006943,
  },
];

const TaxWithholdingFormDemo: React.FC = () => {
  return <TaxWithholdingForm data={sampleData} />;
};

export default TaxWithholdingFormDemo;