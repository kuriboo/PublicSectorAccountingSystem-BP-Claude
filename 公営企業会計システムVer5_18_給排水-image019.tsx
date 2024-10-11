import React from 'react';
import styled from 'styled-components';

// 職員マスタの型定義
type Employee = {
  code: string;
  name: string;
  password: string;
};

// EmployeeMasterTableコンポーネントのプロパティ型定義
type EmployeeMasterTableProps = {
  employees: Employee[];
};

// テーブルのスタイル定義
const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  th, td {
    border: 1px solid #ccc;
    padding: 8px;
    text-align: left;
  }
  th {
    background-color: #f0f0f0;
  }
`;

// EmployeeMasterTableコンポーネント
const EmployeeMasterTable: React.FC<EmployeeMasterTableProps> = ({ employees }) => {
  return (
    <Table>
      <thead>
        <tr>
          <th>コード</th>
          <th>名称</th>
          <th>パスワード</th>
        </tr>
      </thead>
      <tbody>
        {employees.map((employee) => (
          <tr key={employee.code}>
            <td>{employee.code}</td>
            <td>{employee.name}</td>
            <td>{employee.password}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

// サンプルデータ
const sampleEmployees: Employee[] = [
  { code: '00282', name: '弘', password: '2311' },
  { code: '00362', name: '智司', password: '4355' },
  { code: '00368', name: '雄', password: '3753' },
  { code: '00399', name: '◯', password: '0592' },
  { code: '00469', name: '晴', password: '6721' },
];

// 使用例
const App: React.FC = () => {
  return (
    <div>
      <h1>職員マスタ</h1>
      {sampleEmployees.length > 0 ? (
        <EmployeeMasterTable employees={sampleEmployees} />
      ) : (
        <p>職員データがありません。</p>
      )}
    </div>
  );
};

export default App;