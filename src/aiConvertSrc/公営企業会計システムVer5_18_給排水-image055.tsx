import React from 'react';
import styled from 'styled-components';

interface PriceListProps {
  data: Array<{
    thickness: number;
    price: number;
  }>;
  currency?: string;
}

const PriceList: React.FC<PriceListProps> = ({ data, currency = '円' }) => {
  return (
    <Table>
      <thead>
        <tr>
          <Th>形状寸法</Th>
          <Th>形状名称</Th>
          <Th>単価</Th>
        </tr>
      </thead>
      <tbody>
        {data.map(({ thickness, price }, index) => (
          <tr key={index}>
            <Td>{thickness}mm</Td>
            <Td>{thickness}mm</Td>
            <Td>{price.toLocaleString()}{currency}</Td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 1rem;

  th, td {
    border: 1px solid #ccc;
    padding: 0.5rem;
    text-align: center;
  }

  th {
    background-color: #f0f0f0;
  }
`;

const Th = styled.th`
  width: 33.33%;
`;

const Td = styled.td`
  width: 33.33%;
`;

// Usage example
const SamplePriceList = () => {
  const sampleData = [
    { thickness: 13, price: 157500 },
    { thickness: 20, price: 210000 },
    { thickness: 25, price: 420000 },
    { thickness: 30, price: 525000 },
    { thickness: 40, price: 1050000 },
    { thickness: 50, price: 1575000 },
  ];

  return (
    <div>
      <h2>価格表</h2>
      <PriceList data={sampleData} />
    </div>
  );
};

export default SamplePriceList;