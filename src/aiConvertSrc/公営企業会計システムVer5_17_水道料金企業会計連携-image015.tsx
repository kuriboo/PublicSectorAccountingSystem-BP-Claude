import React from 'react';
import styled from '@emotion/styled';

type District = {
  districtCode: string;
  districtName: string;
};

type DistrictManagerProps = {
  districts: District[];
  onAdd?: () => void;
  onEdit?: (district: District) => void;
  onDelete?: (districtCode: string) => void;
};

const DistrictManager: React.FC<DistrictManagerProps> = ({
  districts,
  onAdd,
  onEdit,
  onDelete,
}) => {
  return (
    <Container>
      <Title>事業区分マスタ</Title>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHeaderCell>事業区分CD</TableHeaderCell>
            <TableHeaderCell>事業区分名称</TableHeaderCell>
            <TableHeaderCell>削除</TableHeaderCell>
          </TableRow>
        </TableHeader>
        <TableBody>
          {districts.map((district) => (
            <TableRow key={district.districtCode}>
              <TableCell>{district.districtCode}</TableCell>
              <TableCell
                onClick={() => onEdit && onEdit(district)}
                className="editable"
              >
                {district.districtName}
              </TableCell>
              <TableCell>
                <DeleteButton
                  onClick={() => onDelete && onDelete(district.districtCode)}
                >
                  削除
                </DeleteButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <AddButton onClick={onAdd}>追加</AddButton>
    </Container>
  );
};

const Container = styled.div`
  background-color: #f0f0f0;
  padding: 16px;
  border-radius: 4px;
`;

const Title = styled.h2`
  font-size: 18px;
  margin-bottom: 16px;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 16px;
`;

const TableHeader = styled.thead`
  background-color: #e0e0e0;
`;

const TableHeaderCell = styled.th`
  padding: 8px;
  text-align: left;
`;

const TableBody = styled.tbody``;

const TableRow = styled.tr`
  &:nth-of-type(even) {
    background-color: #f8f8f8;
  }
`;

const TableCell = styled.td`
  padding: 8px;

  &.editable {
    cursor: pointer;
    &:hover {
      background-color: #e8e8e8;
    }
  }
`;

const DeleteButton = styled.button`
  background-color: #ff4d4d;
  color: white;
  border: none;
  padding: 4px 8px;
  cursor: pointer;
  &:hover {
    background-color: #cc0000;
  }
`;

const AddButton = styled.button`
  background-color: #4CAF50;
  color: white;
  border: none;
  padding: 8px 16px;
  cursor: pointer;
  &:hover {
    background-color: #45a049;
  }
`;

// Usage example
const districts: District[] = [
  { districtCode: '001', districtName: 'ぎょうせい1地区' },
  { districtCode: '002', districtName: 'ぎょうせい2地区' },
  { districtCode: '003', districtName: '新木場地区' },
  { districtCode: '004', districtName: '夢の島地区' },
];

const App: React.FC = () => {
  const handleAdd = () => {
    console.log('Add button clicked');
  };

  const handleEdit = (district: District) => {
    console.log(`Edit button clicked for district: ${district.districtCode}`);
  };

  const handleDelete = (districtCode: string) => {
    console.log(`Delete button clicked for district: ${districtCode}`);
  };

  return (
    <DistrictManager
      districts={districts}
      onAdd={handleAdd}
      onEdit={handleEdit}  
      onDelete={handleDelete}
    />
  );
};

export default App;