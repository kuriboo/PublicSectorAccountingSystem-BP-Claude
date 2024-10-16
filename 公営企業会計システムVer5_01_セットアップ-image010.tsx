import React from 'react';
import styled from 'styled-components';

type ContractMaster = {
  code: string;
  name: string;
  altName: string;
};

type Props = {
  contractMasterData: ContractMaster[];
  filterText: string;
  onFilterTextChange: (text: string) => void;
  onEdit: (code: string) => void;
  onDelete: (code: string) => void;
};

const Container = styled.div`
  font-family: Arial, sans-serif;
`;

const FilterInput = styled.input`
  padding: 4px;
  margin-bottom: 8px;
`;

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

const Button = styled.button`
  margin-right: 4px;
`;

const ContractMasterList: React.FC<Props> = ({
  contractMasterData,
  filterText,
  onFilterTextChange,
  onEdit,
  onDelete,
}) => {
  const filteredData = contractMasterData.filter(
    (item) =>
      item.code.includes(filterText) ||
      item.name.includes(filterText) ||
      item.altName.includes(filterText)
  );

  return (
    <Container>
      <FilterInput
        type="text"
        value={filterText}
        onChange={(e) => onFilterTextChange(e.target.value)}
        placeholder="Filter by code, name or alt name"
      />
      <Table>
        <thead>
          <tr>
            <th>Code</th>
            <th>Name</th>
            <th>Alt Name</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((item) => (
            <tr key={item.code}>
              <td>{item.code}</td>
              <td>{item.name}</td>
              <td>{item.altName}</td>
              <td>
                <Button onClick={() => onEdit(item.code)}>Edit</Button>
                <Button onClick={() => onDelete(item.code)}>Delete</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

// Sample usage
const sampleData: ContractMaster[] = [
  { code: '010', name: '指名競争入札', altName: '指名競争入札' },  
  { code: '020', name: '随意契約', altName: '随意契約' },
  { code: '030', name: '一般競争入札', altName: '一般競争入札' },
  // ... rest of the sample data
];

const SampleUsage: React.FC = () => {
  const [filterText, setFilterText] = React.useState('');

  const handleEdit = (code: string) => {
    console.log(`Edit contract master with code ${code}`);
  };

  const handleDelete = (code: string) => {
    console.log(`Delete contract master with code ${code}`);
  };

  return (
    <ContractMasterList      
      contractMasterData={sampleData}
      filterText={filterText}
      onFilterTextChange={setFilterText}
      onEdit={handleEdit}
      onDelete={handleDelete}
    />
  );
};

export default ContractMasterList;