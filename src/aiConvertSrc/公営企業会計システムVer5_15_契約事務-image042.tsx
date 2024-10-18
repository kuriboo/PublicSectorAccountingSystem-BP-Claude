import React, { useState } from 'react';
import styled from '@emotion/styled';

// 入札出席者コンポーネントの型定義
interface BidAttendanceProps {
  items?: string[];
  onSubmit: (selectedItems: string[]) => void;
}

// スタイル定義
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  @media (min-width: 768px) {
    max-width: 500px;
    margin: 0 auto;
  }
`;

const Title = styled.h2`
  margin-bottom: 20px;
`;

const RadioGroup = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
`;

const TextArea = styled.textarea`
  width: 100%;
  min-height: 200px;
  margin-bottom: 20px;
  padding: 10px;
  resize: vertical;
`;

const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  cursor: pointer;
  &:hover {
    background-color: #0056b3;
  }
`;

// 入札出席者コンポーネント
const BidAttendance: React.FC<BidAttendanceProps> = ({ items = [], onSubmit }) => {
  const [mode, setMode] = useState<'input' | 'select'>('input');
  const [inputText, setInputText] = useState('');
  const [selectedItems, setSelectedItems] = useState<string[]>([]);

  // モード切替ハンドラ
  const handleModeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMode(event.target.value as 'input' | 'select');
  };

  // テキストエリア変更ハンドラ
  const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputText(event.target.value);
  };

  // チェックボックス変更ハンドラ
  const handleItemChange = (item: string) => {
    const updatedItems = selectedItems.includes(item)
      ? selectedItems.filter((i) => i !== item)
      : [...selectedItems, item];
    setSelectedItems(updatedItems);
  };

  // 送信ハンドラ
  const handleSubmit = () => {
    const attendanceItems = mode === 'input' ? inputText.split('\n') : selectedItems;
    onSubmit(attendanceItems);
  };

  return (
    <Container>
      <Title>現場説明会・入札出席者</Title>
      <RadioGroup>
        <label>
          <input
            type="radio"
            value="input"
            checked={mode === 'input'}
            onChange={handleModeChange}
          />
          入力
        </label>
        <label>
          <input
            type="radio"
            value="select"
            checked={mode === 'select'}
            onChange={handleModeChange}
          />
          選択
        </label>
      </RadioGroup>
      {mode === 'input' ? (
        <TextArea value={inputText} onChange={handleInputChange} />
      ) : (
        items.map((item) => (
          <CheckboxLabel key={item}>
            <input
              type="checkbox"
              checked={selectedItems.includes(item)}
              onChange={() => handleItemChange(item)}
            />
            {item}
          </CheckboxLabel>
        ))
      )}
      <ButtonGroup>
        <Button onClick={handleSubmit}>OK</Button>
        <Button>クリア</Button>
        <Button>終了</Button>
      </ButtonGroup>
    </Container>
  );
};

export default BidAttendance;

// 使用例
const items = [
  '429100061月分手当等',
  '429100013:2017-010-4291000-SM1', 
  '429100023:2017-010-4291000-SM1'
];

const App: React.FC = () => {
  const handleSubmit = (selectedItems: string[]) => {
    console.log('Selected Items:', selectedItems);
  };

  return <BidAttendance items={items} onSubmit={handleSubmit} />;
};