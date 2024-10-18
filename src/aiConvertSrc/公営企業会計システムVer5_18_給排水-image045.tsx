import React from 'react';
import styled from '@emotion/styled';

type Shop = {
  code: string;
  name: string;
  phone1: string;
  phone2: string;
  fax: string;
  registrationNumber: string;
};

type ShopListProps = {
  shops: Shop[];
};

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  font-size: 14px;

  th, td {
    padding: 8px;
    border: 1px solid #ccc;
    text-align: center;
  }

  th {
    background-color: #f0f0f0;
  }

  @media (max-width: 600px) {
    font-size: 12px;

    th, td {
      padding: 4px;
    }
  }
`;

const ShopList: React.FC<ShopListProps> = ({ shops }) => {
  // If shops array is empty, render a message
  if (shops.length === 0) {
    return <div>No shops found.</div>;
  }

  return (
    <Table>
      <thead>
        <tr>
          <th>Code</th>
          <th>Shop Name</th>
          <th>Phone 1</th>
          <th>Phone 2</th>
          <th>Fax</th>
          <th>Registration Number</th>
        </tr>
      </thead>
      <tbody>
        {shops.map((shop, index) => (
          <tr key={index}>
            <td>{shop.code}</td>
            <td>{shop.name}</td>
            <td>{shop.phone1}</td>
            <td>{shop.phone2}</td>
            <td>{shop.fax}</td>
            <td>{shop.registrationNumber}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

// Sample data for demonstration
const sampleShops: Shop[] = [
  {
    code: '9000000002',
    name: 'テスト工事店①',
    phone1: '111-1111-111',
    phone2: '111-1111-111',
    fax: '111-1111-111',
    registrationNumber: '',
  },
  {
    code: '9000000022',
    name: 'テスト工事店②',
    phone1: '111-1111-111',
    phone2: '111-1111-111',
    fax: '111-1111-111',
    registrationNumber: '',
  },
  // Add more sample data as needed
];

const ShopListDemo: React.FC = () => {
  return (
    <div>
      <h2>Shop List</h2>
      <ShopList shops={sampleShops} />
    </div>
  );
};

export default ShopListDemo;