import React from 'react';
import styled from '@emotion/styled';

type CompanyMaster = {
  code: string;
  name: string;
};

type Props = {
  companyList: CompanyMaster[];
  selectedCompany: CompanyMaster | null;
  onSelect: (company: CompanyMaster) => void;
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const Title = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const TableHeader = styled.th`
  padding: 10px;
  text-align: left;
  background-color: #f2f2f2;
`;

const TableRow = styled.tr`
  cursor: pointer;
  &:hover {
    background-color: #e6e6e6;
  }
`;

const TableCell = styled.td`
  padding: 10px;
`;

const CompanyMasterTable: React.FC<Props> = ({ companyList, selectedCompany, onSelect }) => {
  return (
    <Container>
      <Title>担当マスタ</Title>
      <Table>
        <thead>
          <tr>
            <TableHeader>コード</TableHeader>
            <TableHeader>名称</TableHeader>
          </tr>
        </thead>
        <tbody>
          {companyList.map((company) => (
            <TableRow key={company.code} onClick={() => onSelect(company)}>
              <TableCell>{company.code}</TableCell>
              <TableCell>{company.name}</TableCell>
            </TableRow>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

// Usage example
const companyList: CompanyMaster[] = [
  { code: '001', name: '予算担当' },
  { code: '002', name: '経理' },
  { code: '999', name: '予算・会計担当' },
];

const App: React.FC = () => {
  const [selectedCompany, setSelectedCompany] = React.useState<CompanyMaster | null>(null);

  const handleCompanySelect = (company: CompanyMaster) => {
    setSelectedCompany(company);
  };

  return (
    <div>
      <CompanyMasterTable
        companyList={companyList}
        selectedCompany={selectedCompany}
        onSelect={handleCompanySelect}
      />
      {selectedCompany && (
        <p>
          Selected Company: {selectedCompany.code} - {selectedCompany.name}
        </p>
      )}
    </div>
  );
};

export default App;