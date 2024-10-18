import React from 'react';
import styled from 'styled-components';

// チェックリストの項目の型定義
type ChecklistItem = {
  label: string;
  value: string;
};

// コンポーネントのプロパティの型定義
type ChecklistFormProps = {
  title: string;
  date: string;
  items: ChecklistItem[];
  onSubmit: (selectedItems: string[]) => void;
};

// スタイル定義
const Container = styled.div`
  font-family: Arial, sans-serif;
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #f9f9f9;
`;

const Title = styled.h2`
  margin-bottom: 10px;
`;

const DateText = styled.p`
  margin-bottom: 20px;
`;

const ItemList = styled.div`
  display: flex;
  flex-direction: column;
`;

const ItemLabel = styled.label`
  margin-bottom: 10px;
`;

const SubmitButton = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  border: none;
  background-color: #007bff;
  color: #fff;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #0056b3;
  }
`;

// コンポーネントの定義
const ChecklistForm: React.FC<ChecklistFormProps> = ({ title, date, items, onSubmit }) => {
  const [selectedItems, setSelectedItems] = React.useState<string[]>([]);

  const handleChange = (value: string) => {
    const selected = selectedItems.includes(value)
      ? selectedItems.filter((item) => item !== value)
      : [...selectedItems, value];
    setSelectedItems(selected);
  };

  const handleSubmit = () => {
    onSubmit(selectedItems);
  };

  return (
    <Container>
      <Title>{title}</Title>
      <DateText>作成年月日: {date}</DateText>
      <ItemList>
        {items.map((item) => (
          <ItemLabel key={item.value}>
            <input
              type="checkbox"
              value={item.value}
              checked={selectedItems.includes(item.value)}
              onChange={() => handleChange(item.value)}
            />
            {item.label}
          </ItemLabel>
        ))}
      </ItemList>
      <SubmitButton onClick={handleSubmit}>部門</SubmitButton>
    </Container>
  );
};

// サンプルデータ
const sampleItems: ChecklistItem[] = [
  { label: '全て', value: 'all' },
  { label: '管理（資産番号）', value: 'managedByAssetNumber' },
  { label: '管理以外', value: 'notManaged' },
];

// 使用例
const App: React.FC = () => {
  const handleSubmit = (selectedItems: string[]) => {
    console.log('Selected items:', selectedItems);
  };

  return (
    <ChecklistForm
      title="抽出処理チェックリスト作成"
      date="平成29年09月11日"
      items={sampleItems}
      onSubmit={handleSubmit}
    />
  );
};

export default App;