import React from 'react';
import styled from '@emotion/styled';

type Company = {
  code: string;
  name: string;
};

type Representative = {
  code: string;
  name: string;
};

type BillingInfo = {
  company: Company;
  representative: Representative;
  billingNumber: string;
  billingDate: string;
  fax: string;
  email: string;
  accountHolder: string;
  accountNumber: string;
};

type BillingListProps = {
  billingList: BillingInfo[];
};

const Container = styled.div`
  font-family: Arial, sans-serif;
  table {
    width: 100%;
    border-collapse: collapse;
    th, td {
      border: 1px solid #ccc;
      padding: 8px;
      text-align: left;
    }
    th {
      background-color: #f2f2f2;
    }
  }
`;

const BillingList: React.FC<BillingListProps> = ({ billingList }) => {
  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>電話番号</th>
            <th>FAX番号</th>
            <th>Eメール</th>
            <th>代表者役職名</th>
            <th>代表者名</th>
            <th>担当者役職名</th>
            <th>担当者名</th>
          </tr>
        </thead>
        <tbody>
          {billingList.map((billing, index) => (
            <tr key={index}>
              <td>{billing.billingNumber}</td>
              <td>{billing.fax}</td>
              <td>{billing.email}</td>
              <td>{billing.representative.code}</td>
              <td>{billing.representative.name}</td>
              <td>{billing.company.code}</td>
              <td>{billing.company.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  );
};

// サンプルデータを用いた使用例
const sampleData: BillingInfo[] = [
  {
    company: { code: '001', name: 'テスト01' },
    representative: { code: '001', name: '代表 太郎' },
    billingNumber: '0120-100-003',
    billingDate: '03-0010-0003',
    fax: '03-0010-0003',
    email: 'test01@example.com',
    accountHolder: '代表',
    accountNumber: '代表',
  },
  {
    company: { code: '002', name: 'テスト02' },
    representative: { code: '002', name: '代表 二郎' },
    billingNumber: '0120-100-003',
    billingDate: '03-0010-0003',
    fax: '03-0010-0003',
    email: 'test02@example.com', 
    accountHolder: '代表',
    accountNumber: '代表',
  },
];

const App: React.FC = () => {
  return (
    <div>
      <h1>請求先リスト</h1>
      <BillingList billingList={sampleData} />
    </div>
  );
};

export default App;