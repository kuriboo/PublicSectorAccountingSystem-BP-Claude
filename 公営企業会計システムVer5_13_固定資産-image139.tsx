import React from 'react';
import styled from 'styled-components';

// 部門検索用のデータ型定義
type Department = {
  code: string;
  name: string;
};

// 部門検索コンポーネントのプロパティ型定義
type DepartmentSearchProps = {
  departments: Department[]; // 部門データの配列
  onSelect: (department: Department) => void; // 選択時のイベントハンドラ
};

// 部門検索コンポーネント
const DepartmentSearch: React.FC<DepartmentSearchProps> = ({ departments, onSelect }) => {
  return (
    <Container>
      <Title>部門検索</Title>
      <Table>
        <thead>
          <tr>
            <TableHeader>コード</TableHeader>
            <TableHeader>名称</TableHeader>
          </tr>
        </thead>
        <tbody>
          {departments.map((department) => (
            <TableRow key={department.code} onClick={() => onSelect(department)}>
              <TableData>{department.code}</TableData>
              <TableData>{department.name}</TableData>
            </TableRow>
          ))}
        </tbody>
      </Table>
      <ButtonGroup>
        <Button>表示</Button>
        <Button>OK</Button>
        <Button>キャンセル</Button>
      </ButtonGroup>
    </Container>
  );
};

// コンポーネントのスタイリング
const Container = styled.div`
  font-family: sans-serif;
  background-color: #f0f0f0;
  padding: 16px;
  width: 400px;
`;

const Title = styled.h2`
  margin: 0 0 16px;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 16px;
`;

const TableHeader = styled.th`
  background-color: #ddd;
  padding: 8px;
  text-align: left;
`;

const TableRow = styled.tr`
  cursor: pointer;
  &:hover {
    background-color: #e0e0e0;
  }
`;

const TableData = styled.td`
  padding: 8px;
`;

const ButtonGroup = styled.div`
  text-align: right;
`;

const Button = styled.button`
  margin-left: 8px;
  padding: 4px 8px;
`;

// サンプルデータ
const sampleDepartments: Department[] = [
  { code: '000', name: '予測用ダミー' },
  { code: '001', name: 'IT水道部' },
  { code: '002', name: '導水部門' },
  { code: '003', name: '浄水部門' },
  { code: '004', name: '排水部門' },
  { code: '005', name: '送水部門' },
  { code: '006', name: '配水部門' },
  { code: '007', name: '水道メータ部門' },
  { code: '008', name: 'その他一般管理部門' },
  { code: '009', name: '不明' },
  { code: '010', name: '水源涵養部門' },
  { code: '011', name: '工務部門' },
  { code: '012', name: '営業部門' },
  { code: '013', name: '給水部門' },
  { code: '014', name: '管理部門' },
];

// 使用例
const App: React.FC = () => {
  const handleSelect = (department: Department) => {
    console.log('Selected department:', department);
  };

  return (
    <div>
      <h1>部門検索コンポーネントの使用例</h1>
      <DepartmentSearch departments={sampleDepartments} onSelect={handleSelect} />
    </div>
  );
};

export default App;