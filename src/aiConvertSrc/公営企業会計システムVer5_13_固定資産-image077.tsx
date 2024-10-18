import React from 'react';
import styled from '@emotion/styled';

type ManagementInfoProps = {
  fiscalYear: string;
  managementNumbers: {
    applicationNumber: string;
    unitNumber: string;
    managementNumber: string;
    managementBranchNumber: string;
  }[];
};

const ManagementInfo: React.FC<ManagementInfoProps> = ({ fiscalYear, managementNumbers }) => {
  return (
    <Container>
      <Title>施設別名称規格一覧表作成</Title>
      <FiscalYear>作成年月日　{fiscalYear}</FiscalYear>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHeaderCell>固定数値科目</TableHeaderCell>
            <TableHeaderCell>～</TableHeaderCell>
            <TableHeaderCell>固定数値科目</TableHeaderCell>
          </TableRow>
        </TableHeader>
        <TableBody>
          {managementNumbers.map(({ applicationNumber, unitNumber, managementNumber, managementBranchNumber }, index) => (
            <TableRow key={index}>
              <TableCell>{applicationNumber || '00000000'}</TableCell>
              <TableCell>～</TableCell>
              <TableCell>{applicationNumber || '99999999'}</TableCell>
              <TableRow>
                <TableSubheaderCell>施設</TableSubheaderCell>
                <TableCell>{unitNumber || '0000'}</TableCell>
                <TableCell>～</TableCell>
                <TableCell>{unitNumber || '9999'}</TableCell>
              </TableRow>
              <TableRow>
                <TableSubheaderCell>管理名称</TableSubheaderCell>
                <TableCell>{managementNumber || '000000'}</TableCell>
                <TableCell>～</TableCell>
                <TableCell>{managementNumber || '999999'}</TableCell>
              </TableRow>
              <TableRow>
                <TableSubheaderCell>管理規格</TableSubheaderCell>
                <TableCell>{managementBranchNumber || '000000'}</TableCell>
                <TableCell>～</TableCell>
                <TableCell>{managementBranchNumber || '999999'}</TableCell>
              </TableRow>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <ButtonContainer>
        <Button>OK</Button>
        <Button>クリア</Button>
        <Button>終了</Button>
      </ButtonContainer>
    </Container>
  );
};

// Sample data for testing
const sampleData: ManagementInfoProps = {
  fiscalYear: '平成29年09月12日',
  managementNumbers: [
    {
      applicationNumber: '00000000',
      unitNumber: '0000',
      managementNumber: '000000',
      managementBranchNumber: '000000',
    },
    {
      applicationNumber: '99999999',
      unitNumber: '9999',  
      managementNumber: '999999',
      managementBranchNumber: '999999',
    },
  ],
};

// Styling with Emotion
const Container = styled.div`
  font-family: sans-serif;
  margin: 20px;
`;

const Title = styled.h2`
  margin-bottom: 10px;
`;

const FiscalYear = styled.div`
  margin-bottom: 20px;
`;

const Table = styled.table`
  border-collapse: collapse;
  width: 100%;
`;

const TableRow = styled.tr`
  &:nth-of-type(even) {
    background-color: #f2f2f2;
  }
`;

const TableHeader = styled.thead`
  background-color: #ddd;
`;

const TableHeaderCell = styled.th`
  border: 1px solid #ddd;
  padding: 8px;
  text-align: center;
`;

const TableBody = styled.tbody``;

const TableCell = styled.td`
  border: 1px solid #ddd;
  padding: 8px;
  text-align: center;
`;

const TableSubheaderCell = styled.td`
  background-color: #f2f2f2;
  border: 1px solid #ddd;
  font-weight: bold;
  padding: 8px;
  text-align: left;
  width: 20%;
`;

const ButtonContainer = styled.div`
  margin-top: 20px;
  text-align: center;
`;

const Button = styled.button`
  background-color: #008CBA;
  border: none;
  border-radius: 4px;
  color: white;
  cursor: pointer;
  font-size: 16px;
  margin: 0 10px;
  padding: 10px 20px;
  
  &:hover {
    background-color: #005f79;
  }
`;

// Usage example
const App: React.FC = () => {
  return (
    <div>
      <ManagementInfo {...sampleData} />
    </div>
  );
};

export default App;