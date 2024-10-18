import React from 'react';
import styled from 'styled-components';

// Type definition for the component props
interface CompanyDetailsProps {
  companyCode: string;
  companyName: string;
  postalCode: string;
  address: string;
  phoneNumber: string;
  capital: string;
  establishmentDate: string;
  representativeName: string;
  businessDetails: string;
}

// Styled components
const Container = styled.div`
  font-family: Arial, sans-serif;
  padding: 20px;
`;

const Title = styled.h2`
  margin-bottom: 10px;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;
`;

const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f2f2f2;
  }
`;

const TableHeader = styled.th`
  padding: 8px;
  text-align: left;
  border-bottom: 1px solid #ddd;
`;

const TableData = styled.td`
  padding: 8px;
  border-bottom: 1px solid #ddd;
`;

const CompanyDetails: React.FC<CompanyDetailsProps> = ({
  companyCode,
  companyName,
  postalCode,
  address,
  phoneNumber,
  capital,
  establishmentDate,
  representativeName,
  businessDetails,
}) => {
  // Format the postal code
  const formattedPostalCode = postalCode.replace(/(\d{3})(\d{4})/, '$1-$2');

  return (
    <Container>
      <Title>Company Details</Title>
      <Table>
        <tbody>
          <TableRow>
            <TableHeader>Company Code</TableHeader>
            <TableData>{companyCode || '-'}</TableData>
          </TableRow>
          <TableRow>
            <TableHeader>Company Name</TableHeader>
            <TableData>{companyName || '-'}</TableData>
          </TableRow>
          <TableRow>
            <TableHeader>Postal Code</TableHeader>
            <TableData>{formattedPostalCode || '-'}</TableData>
          </TableRow>
          <TableRow>
            <TableHeader>Address</TableHeader>
            <TableData>{address || '-'}</TableData>
          </TableRow>
          <TableRow>
            <TableHeader>Phone Number</TableHeader>
            <TableData>{phoneNumber || '-'}</TableData>
          </TableRow>
          <TableRow>
            <TableHeader>Capital</TableHeader>
            <TableData>{capital || '-'}</TableData>
          </TableRow>
          <TableRow>
            <TableHeader>Establishment Date</TableHeader>
            <TableData>{establishmentDate || '-'}</TableData>
          </TableRow>
          <TableRow>
            <TableHeader>Representative Name</TableHeader>
            <TableData>{representativeName || '-'}</TableData>
          </TableRow>
          <TableRow>
            <TableHeader>Business Details</TableHeader>
            <TableData>{businessDetails || '-'}</TableData>
          </TableRow>
        </tbody>
      </Table>
    </Container>
  );
};

// Sample data for displaying the component
const sampleData: CompanyDetailsProps = {
  companyCode: '001',
  companyName: '株式会社東京',
  postalCode: '9999999999',
  address: '東京都新宿区',
  phoneNumber: '03-1234-5678',
  capital: '10,000,000円',
  establishmentDate: '2022年2月21日',
  representativeName: '山田太郎',
  businessDetails: 'ソフトウェア開発',
};

// Usage example
const App: React.FC = () => {
  return (
    <div>
      <CompanyDetails {...sampleData} />
    </div>
  );
};

export default App;