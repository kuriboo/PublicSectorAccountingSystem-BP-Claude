import React from 'react';
import styled from 'styled-components';

interface Company {
  code: string;
  name: string;
}

interface Props {
  companies: Company[];
  onSelect: (company: Company) => void;
}

const CompanyList: React.FC<Props> = ({ companies, onSelect }) => {
  return (
    <Container>
      <Title>業者一覧表</Title>
      <CompanyTable>
        <thead>
          <tr>
            <th>選択</th>
            <th>業者コード</th>
            <th>業者名</th>
          </tr>
        </thead>
        <tbody>
          {companies.map((company) => (
            <tr key={company.code}>
              <td>
                <input
                  type="radio"
                  name="company"
                  onChange={() => onSelect(company)}
                />
              </td>
              <td>{company.code}</td>
              <td>{company.name}</td>
            </tr>
          ))}
        </tbody>
      </CompanyTable>
    </Container>
  );
};

// Styled components
const Container = styled.div`
  font-family: 'メイリオ', Meiryo, sans-serif;
  background-color: #f0f0f0;
  padding: 16px;
  width: 100%;
  box-sizing: border-box;
`;

const Title = styled.h2`
  font-size: 18px;
  margin-bottom: 8px;
`;

const CompanyTable = styled.table`
  width: 100%;
  border-collapse: collapse;

  th,
  td {
    padding: 8px;
    text-align: left;
    border-bottom: 1px solid #ddd;
  }

  th {
    background-color: #f2f2f2;
  }

  tr:hover {
    background-color: #f5f5f5;
  }
`;

// Sample usage
const App: React.FC = () => {
  const companies: Company[] = [
    { code: '001', name: 'ホーム工事' },
    { code: '002', name: '設備工事' },
    { code: '003', name: '木工工事' },
  ];

  const handleSelectCompany = (company: Company) => {
    console.log('Selected company:', company);
  };

  return (
    <div>
      <CompanyList companies={companies} onSelect={handleSelectCompany} />
    </div>
  );
};

export default App;