import React from 'react';
import styled from 'styled-components';

// 従業員情報の型定義
type Employee = {
  id: string;
  name: string;
  department: string;
  position: string;
  joinDate: string;
  salary: number;
  commissionPct: number;
  managerId: string;
};

// 従業員情報のプロパティ型定義
type EmployeeInfoProps = {
  employee: Employee;
};

// スタイリング用のコンポーネント
const EmployeeInfoWrapper = styled.div`
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 16px;
  background-color: #f9f9f9;

  @media (max-width: 600px) {
    padding: 8px;
  }
`;

const EmployeeInfoRow = styled.div`
  display: flex;
  margin-bottom: 8px;

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

const EmployeeInfoLabel = styled.div`
  font-weight: bold;
  width: 120px;

  @media (max-width: 600px) {
    width: auto;
    margin-bottom: 4px;
  }
`;

const EmployeeInfoValue = styled.div`
  flex: 1;
`;

/**
 * 従業員情報を表示するコンポーネント
 */
const EmployeeInfo: React.FC<EmployeeInfoProps> = ({ employee }) => {
  // 従業員情報が存在しない場合の処理
  if (!employee) {
    return <div>従業員情報がありません。</div>;
  }

  return (
    <EmployeeInfoWrapper>
      <EmployeeInfoRow>
        <EmployeeInfoLabel>ID:</EmployeeInfoLabel>
        <EmployeeInfoValue>{employee.id}</EmployeeInfoValue>
      </EmployeeInfoRow>
      <EmployeeInfoRow>
        <EmployeeInfoLabel>名前:</EmployeeInfoLabel>
        <EmployeeInfoValue>{employee.name}</EmployeeInfoValue>
      </EmployeeInfoRow>
      <EmployeeInfoRow>
        <EmployeeInfoLabel>部署:</EmployeeInfoLabel>
        <EmployeeInfoValue>{employee.department}</EmployeeInfoValue>
      </EmployeeInfoRow>
      <EmployeeInfoRow>
        <EmployeeInfoLabel>役職:</EmployeeInfoLabel>
        <EmployeeInfoValue>{employee.position}</EmployeeInfoValue>
      </EmployeeInfoRow>
      <EmployeeInfoRow>
        <EmployeeInfoLabel>入社日:</EmployeeInfoLabel>
        <EmployeeInfoValue>{employee.joinDate}</EmployeeInfoValue>
      </EmployeeInfoRow>
      <EmployeeInfoRow>
        <EmployeeInfoLabel>給与:</EmployeeInfoLabel>
        <EmployeeInfoValue>{employee.salary}</EmployeeInfoValue>
      </EmployeeInfoRow>
      <EmployeeInfoRow>
        <EmployeeInfoLabel>コミッション:</EmployeeInfoLabel>
        <EmployeeInfoValue>{employee.commissionPct}</EmployeeInfoValue>
      </EmployeeInfoRow>
      <EmployeeInfoRow>
        <EmployeeInfoLabel>上司ID:</EmployeeInfoLabel>
        <EmployeeInfoValue>{employee.managerId}</EmployeeInfoValue>
      </EmployeeInfoRow>
    </EmployeeInfoWrapper>
  );
};

// サンプルデータ
const sampleEmployee: Employee = {
  id: '000001',
  name: '佐藤太郎',
  department: '開発部',
  position: '主任',
  joinDate: '2008/01/01',
  salary: 200000,
  commissionPct: 6.75,
  managerId: ''
};

// 使用例
const App: React.FC = () => {
  return (
    <div>
      <h1>従業員情報</h1>
      <EmployeeInfo employee={sampleEmployee} />
    </div>
  );
};

export default App;