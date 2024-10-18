import React from 'react';
import styled from '@emotion/styled';

// 従業員情報の型定義
type Employee = {
  number: string;
  name: string;
  department: string;
  position: string;
};

// 支払情報の型定義
type Payment = {
  date: string;
  type: string;
  amount: number;
};

// コンポーネントのプロパティの型定義
type EmployeeDetailProps = {
  employee: Employee;
  payments: Payment[];
};

// スタイル定義
const Container = styled.div`
  font-family: sans-serif;
  padding: 1rem;
`;

const EmployeeInfo = styled.div`
  margin-bottom: 1rem;
`;

const InfoRow = styled.div`
  display: flex;
  margin-bottom: 0.5rem;
`;

const InfoLabel = styled.div`
  font-weight: bold;
  width: 100px;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const TableHeader = styled.th`
  text-align: left;
  border-bottom: 1px solid #ccc;
  padding: 0.5rem;
`;

const TableCell = styled.td`
  border-bottom: 1px solid #ccc;
  padding: 0.5rem;
`;

// コンポーネント定義
const EmployeeDetail: React.FC<EmployeeDetailProps> = ({ employee, payments }) => {
  // 従業員情報が未定義の場合は表示しない
  if (!employee) return null;

  return (
    <Container>
      <EmployeeInfo>
        <InfoRow>
          <InfoLabel>従業員番号</InfoLabel>
          <div>{employee.number}</div>
        </InfoRow>
        <InfoRow>  
          <InfoLabel>氏名</InfoLabel>
          <div>{employee.name}</div>
        </InfoRow>
        <InfoRow>
          <InfoLabel>所属部門</InfoLabel>
          <div>{employee.department}</div>  
        </InfoRow>
        <InfoRow>
          <InfoLabel>役職</InfoLabel>
          <div>{employee.position}</div>
        </InfoRow>
      </EmployeeInfo>
      
      <Table>
        <thead>
          <tr>
            <TableHeader>支払年月日</TableHeader>
            <TableHeader>支払区分</TableHeader> 
            <TableHeader>支払金額</TableHeader>
          </tr>
        </thead>
        <tbody>
          {payments.map((payment, index) => (
            <tr key={index}>
              <TableCell>{payment.date}</TableCell>
              <TableCell>{payment.type}</TableCell>
              <TableCell>{payment.amount.toLocaleString()}円</TableCell>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default EmployeeDetail;

// 使用例
const sampleEmployee: Employee = {
  number: '0123456789',
  name: '山田太郎',  
  department: '総務部',
  position: '一般社員',
};

const samplePayments: Payment[] = [
  { date: '2023年3月31日', type: '給与', amount: 250000 },
  { date: '2023年3月31日', type: '住宅手当', amount: 20000 },
  { date: '2023年3月31日', type: '通勤手当', amount: 10000 },
];

const UsageExample: React.FC = () => {
  return <EmployeeDetail employee={sampleEmployee} payments={samplePayments} />;  
};