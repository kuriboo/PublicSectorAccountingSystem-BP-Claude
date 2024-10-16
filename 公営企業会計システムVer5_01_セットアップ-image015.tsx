import React from 'react';
import styled from 'styled-components';

// 部門マスタの型定義
type Department = {
  code: string;
  name: string;
};

// コンポーネントのプロパティの型定義
type Props = {
  departments: Department[];
  selectedDepartment: string;
  onChangeDepartment: (department: string) => void;
};

// コンポーネントのスタイリング
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #f0f0f0;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const Title = styled.h2`
  margin-bottom: 10px;
  font-size: 18px;
  color: #333;
`;

const Input = styled.input`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  outline: none;
`;

const Select = styled.select`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  outline: none;
  margin-left: 10px;
`;

const Table = styled.table`
  width: 100%;
  margin-top: 20px;
  border-collapse: collapse;
`;

const TableHeader = styled.th`
  padding: 10px;
  background-color: #f0f0f0;
  text-align: left;
  font-weight: bold;
`;

const TableCell = styled.td`
  padding: 10px;
  border-bottom: 1px solid #ccc;
`;

// コンポーネントの実装
const DepartmentMaster: React.FC<Props> = ({
  departments,
  selectedDepartment,
  onChangeDepartment,
}) => {
  // 部門コードの変更ハンドラ
  const handleDepartmentChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onChangeDepartment(e.target.value);
  };

  return (
    <Container>
      <Title>部外内容マスタ保守</Title>
      <div>
        <Input type="text" placeholder="起工番号テスト" />
        <Select value={selectedDepartment} onChange={handleDepartmentChange}>
          <option value="">部門選択</option>
          {departments.map((department) => (
            <option key={department.code} value={department.code}>
              {department.name}
            </option>
          ))}
        </Select>
      </div>
      <Table>
        <thead>
          <tr>
            <TableHeader>部外番号</TableHeader>
            <TableHeader>部外内容</TableHeader>
          </tr>
        </thead>
        <tbody>
          {departments.map((department) => (
            <tr key={department.code}>
              <TableCell>{department.code}</TableCell>
              <TableCell>{department.name}</TableCell>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

// サンプルデータ
const sampleDepartments: Department[] = [
  { code: '00001', name: '起工番号テスト' },
  { code: '00002', name: '部外番号②' },
  { code: '00003', name: '部外内容' },
];

// 使用例
const App: React.FC = () => {
  const [selectedDepartment, setSelectedDepartment] = React.useState('');

  return (
    <DepartmentMaster
      departments={sampleDepartments}
      selectedDepartment={selectedDepartment}
      onChangeDepartment={setSelectedDepartment}
    />
  );
};

export default App;