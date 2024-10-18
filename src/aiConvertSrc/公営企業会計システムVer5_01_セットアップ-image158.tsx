import React from 'react';
import styled from '@emotion/styled';

type Item = {
  所属: string;
  担当: string;
  職責: string;
  初期値: number;
};

type Props = {
  items: Item[];
  onSave: (item: Item) => void;
  onCancel: () => void;
};

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  th, td {
    border: 1px solid #ccc;
    padding: 8px;
  }
`;

const Input = styled.input`
  width: 100%;
  padding: 4px;
  box-sizing: border-box;
`;

const Textarea = styled.textarea`
  width: 100%;
  padding: 4px;
  box-sizing: border-box;
`;

const Button = styled.button`
  padding: 4px 8px;
  margin-right: 4px;
`;

const ItemEditForm: React.FC<Props> = ({ items, onSave, onCancel }) => {
  const [editingItem, setEditingItem] = React.useState<Item | null>(null);

  const handleEdit = (item: Item) => {
    setEditingItem(item);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setEditingItem(prevItem => prevItem && { ...prevItem, [name]: value });
  };

  const handleSave = () => {
    if (editingItem) {
      onSave(editingItem);
      setEditingItem(null);
    }
  };

  return (
    <>
      <Table>
        <thead>
          <tr>
            <th>所属</th>
            <th>担当</th>
            <th>職責</th>
            <th>初期値</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => (
            <tr key={index}>
              <td>{item.所属}</td>
              <td>{item.担当}</td>
              <td>{item.職責}</td>
              <td>{item.初期値}</td>
              <td>
                <Button onClick={() => handleEdit(item)}>編集</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      {editingItem && (
        <div>
          <Input
            type="text"
            name="所属"
            value={editingItem.所属}
            onChange={handleChange}
          />
          <Input
            type="text"
            name="担当"
            value={editingItem.担当}
            onChange={handleChange}
          />
          <Input
            type="text" 
            name="職責"
            value={editingItem.職責}
            onChange={handleChange}
          />
          <Input
            type="number"
            name="初期値"
            value={editingItem.初期値}
            onChange={handleChange}
          />
          <Textarea
            name="内容詳細"
            value={editingItem.内容詳細 || ''}
            onChange={handleChange}
          />
          <div>
            <Button onClick={handleSave}>保存</Button>
            <Button onClick={onCancel}>キャンセル</Button>
          </div>
        </div>
      )}
    </>
  );
};

// 使用例
const App: React.FC = () => {
  const [items, setItems] = React.useState<Item[]>([
    { 所属: '000002', 担当: '001', 職責: '', 初期値: 0 },
  ]);

  const handleSave = (editedItem: Item) => {
    setItems(prevItems => prevItems.map(item =>
      item.所属 === editedItem.所属 ? editedItem : item
    ));
  };

  return (
    <div>
      <h1>所属担当職責初期設定</h1>
      <ItemEditForm 
        items={items}
        onSave={handleSave}
        onCancel={() => {}}
      />
    </div>
  );
};

export default App;