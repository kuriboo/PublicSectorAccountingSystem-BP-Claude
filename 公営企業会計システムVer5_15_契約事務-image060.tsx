import React from 'react';
import styled from '@emotion/styled';

interface MasterMaintenanceProps {
  items: string[];
  onAdd: () => void;
  onEdit: (index: number) => void;
  onDelete: (index: number) => void;
  onCancel: () => void;
  onSave: () => void;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #f0f0f0;
  font-family: Arial, sans-serif;
`;

const Title = styled.h2`
  margin-bottom: 20px;
`;

const ItemList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
  width: 100%;
`;

const ItemRow = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid #ccc;
`;

const ItemText = styled.span`
  flex-grow: 1;
`;

const Button = styled.button`
  padding: 5px 10px;
  margin-left: 10px;
  border: none;
  background-color: #007bff;
  color: #fff;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const AddButton = styled(Button)`
  margin-top: 20px;
`;

const MasterMaintenance: React.FC<MasterMaintenanceProps> = ({
  items,
  onAdd,
  onEdit,
  onDelete,
  onCancel,
  onSave,
}) => {
  return (
    <Container>
      <Title>文章マスタ保守</Title>
      <ItemList>
        {items.map((item, index) => (
          <ItemRow key={index}>
            <ItemText>{item}</ItemText>
            <div>
              <Button onClick={() => onEdit(index)}>編集</Button>
              <Button onClick={() => onDelete(index)}>行削除</Button>
            </div>
          </ItemRow>
        ))}
      </ItemList>
      <AddButton onClick={onAdd}>行追加</AddButton>
      <div>
        <Button onClick={onCancel}>キャンセル</Button>
        <Button onClick={onSave}>終了</Button>
      </div>
    </Container>
  );
};

// Usage example
const MasterMaintenancePage: React.FC = () => {
  const sampleItems = ['文章マスタ1', '文章マスタ2', '文章マスタ3', '文章マスタ4', '文章マスタ5'];

  const handleAdd = () => {
    console.log('Add item');
  };

  const handleEdit = (index: number) => {
    console.log(`Edit item at index ${index}`);
  };

  const handleDelete = (index: number) => {
    console.log(`Delete item at index ${index}`);
  };

  const handleCancel = () => {
    console.log('Cancel');
  };

  const handleSave = () => {
    console.log('Save');
  };

  return (
    <MasterMaintenance
      items={sampleItems}
      onAdd={handleAdd}
      onEdit={handleEdit}
      onDelete={handleDelete}
      onCancel={handleCancel}
      onSave={handleSave}
    />
  );
};

export default MasterMaintenancePage;