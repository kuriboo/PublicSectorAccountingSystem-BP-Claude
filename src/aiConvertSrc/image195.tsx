import React from 'react';
import styled from '@emotion/styled';

type FormData = {
  id: string;
  area: string;
  code: string;
};

type CustomizeManagementTableProps = {
  data: FormData[];
  onDelete: (id: string) => void;
  onEdit: (id: string) => void;
};

const Table = styled.table`
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
`;

const Button = styled.button`
  padding: 4px 8px;
  margin-right: 4px;
  border: none;
  border-radius: 4px;
  background-color: #007bff;
  color: white;
  cursor: pointer;
  &:hover {
    background-color: #0056b3;
  }
`;

const CustomizeManagementTable: React.FC<CustomizeManagementTableProps> = ({
  data,
  onDelete,
  onEdit,
}) => {
  return (
    <Table>
      <thead>
        <tr>
          <th>区分</th>
          <th>ID</th>
          <th>操作</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr key={item.id}>
            <td>{item.area}</td>
            <td>{item.code}</td>
            <td>
              <Button onClick={() => onEdit(item.id)}>ID編集</Button>
              <Button onClick={() => onDelete(item.id)}>削除</Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

// Usage example
const sampleData: FormData[] = [
  { id: '1', area: '区分', code: 'BEP9125' },
  // Add more sample data as needed
];

const App: React.FC = () => {
  const handleDelete = (id: string) => {
    // Handle delete logic
    console.log(`Delete item with ID: ${id}`);
  };

  const handleEdit = (id: string) => {
    // Handle edit logic  
    console.log(`Edit item with ID: ${id}`);
  };

  return (
    <div>
      <h2>カスタマイズ管理テーブル保守</h2>
      <CustomizeManagementTable
        data={sampleData}
        onDelete={handleDelete}
        onEdit={handleEdit}
      />
    </div>
  );
};

export default App;