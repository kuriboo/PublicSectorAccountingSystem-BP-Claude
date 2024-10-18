import React from 'react';
import styled from '@emotion/styled';

type Data = {
  code: string;
  name: string;
  password: string;
  expirationDate: string;
  authenticationCode: string;
}[];

type Props = {
  data: Data;
  onEditClick: () => void;
  onDeleteClick: (code: string) => void;
};

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  font-size: 14px;

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

  @media (max-width: 600px) {
    font-size: 12px;
  }
`;

const Button = styled.button`
  padding: 4px 8px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-right: 4px;

  &:hover {
    opacity: 0.8;
  }
`;

const EditButton = styled(Button)`
  background-color: #007bff;
  color: white;
`;

const DeleteButton = styled(Button)`
  background-color: #dc3545;
  color: white;
`;

const MasterList: React.FC<Props> = ({ data, onEditClick, onDeleteClick }) => {
  return (
    <Table>
      <thead>
        <tr>
          <th>Code</th>
          <th>Name</th>
          <th>Password</th>
          <th>Expiration Date</th>
          <th>Authentication Code</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr key={item.code}>
            <td>{item.code}</td>
            <td>{item.name}</td>
            <td>{item.password}</td>
            <td>{item.expirationDate}</td>
            <td>{item.authenticationCode}</td>
            <td>
              <EditButton onClick={onEditClick}>Edit</EditButton>
              <DeleteButton onClick={() => onDeleteClick(item.code)}>
                Delete
              </DeleteButton>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

// Sample data and usage
const sampleData: Data = [
  {
    code: '00001',
    name: 'ぎょうせい　太郎',
    password: '',
    expirationDate: '年　月　日',
    authenticationCode: '1001',
  },
  // ... more sample data
];

const App: React.FC = () => {
  const handleEditClick = () => {
    // Handle edit button click
  };

  const handleDeleteClick = (code: string) => {
    // Handle delete button click for the given code
  };

  return (
    <div>
      <h2>Master List</h2>
      <MasterList
        data={sampleData}
        onEditClick={handleEditClick}
        onDeleteClick={handleDeleteClick}
      />
    </div>
  );
};

export default App;