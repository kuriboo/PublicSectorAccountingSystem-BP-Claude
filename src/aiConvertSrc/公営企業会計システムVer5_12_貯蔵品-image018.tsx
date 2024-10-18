import React from 'react';
import styled from '@emotion/styled';

type CompanyInfoProps = {
  companyArea: string;
  dateOfEstablishment: string;
  capital: number;
  businessTypes: string[];
  representativeName: string;
  representatives: string[];
  note?: string;
};

const CompanyInfo: React.FC<CompanyInfoProps> = ({
  companyArea,
  dateOfEstablishment,
  capital,
  businessTypes,
  representativeName,
  representatives,
  note,
}) => {
  return (
    <Container>
      <Title>未納品一覧表範囲入力</Title>
      <Table>
        <tbody>
          <TableRow>
            <TableHeader>決裁区分</TableHeader>
            <TableData>{companyArea}</TableData>
          </TableRow>
          <TableRow>
            <TableHeader>作表日付</TableHeader>
            <TableData>{dateOfEstablishment}</TableData>
          </TableRow>
          <TableRow>
            <TableHeader>保管場所</TableHeader>
            <TableData>{capital.toLocaleString()}</TableData>
          </TableRow>
          <TableRow>
            <TableHeader>保管場所</TableHeader>
            <TableData>{businessTypes.join(', ')}</TableData>
          </TableRow>
          <TableRow>
            <TableHeader>業者コード</TableHeader>
            <TableData>{representativeName}</TableData>
          </TableRow>
          <TableRow>
            <TableHeader>業者コード</TableHeader>
            <TableData>{representatives.join(', ')}</TableData>
          </TableRow>
        </tbody>
      </Table>
      {note && <Note>※業者が未入力のデータもFTPする</Note>}
    </Container>
  );
};

const Container = styled.div`
  background-color: #f0f0f0;
  border: 1px solid #ccc;
  padding: 16px;
  margin: 16px;
`;

const Title = styled.h2`
  font-size: 18px;
  margin-bottom: 16px;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const TableRow = styled.tr`
  &:nth-of-type(even) {
    background-color: #f9f9f9;
  }
`;

const TableHeader = styled.th`
  padding: 8px;
  text-align: left;
  font-weight: bold;
  white-space: nowrap;
`;

const TableData = styled.td`
  padding: 8px;
`;

const Note = styled.p`
  margin-top: 16px;
  font-size: 14px;
  color: #666;
`;

// Usage example
const companyInfoData = {
  companyArea: '決裁区分',
  dateOfEstablishment: '平成29年09月14日',
  capital: 1000000,
  businessTypes: ['999999'],
  representativeName: '999999999999',
  representatives: ['999999999999'],
  note: '業者が未入力のデータもFTPする',
};

const App: React.FC = () => {
  return (
    <div>
      <CompanyInfo {...companyInfoData} />
    </div>
  );
};

export default App;