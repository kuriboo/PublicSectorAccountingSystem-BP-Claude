import React from 'react';
import styled from 'styled-components';

// 備考入力コンポーネントの型定義
type BikouInputProps = {
  value: string;
  onChange: (value: string) => void;
};

// 備考入力コンポーネント
const BikouInput: React.FC<BikouInputProps> = ({ value, onChange }) => {
  return (
    <BikouInputWrapper>
      <BikouLabel>処理概要</BikouLabel>
      <BikouTextarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="備考に印字する内容を入力してください。"
      />
    </BikouInputWrapper>
  );
};

// スタイリング
const BikouInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
`;

const BikouLabel = styled.label`
  font-weight: bold;
  margin-bottom: 8px;
`;

const BikouTextarea = styled.textarea`
  min-height: 80px;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  resize: vertical;

  &::placeholder {
    color: #999;
  }
`;

// サンプルデータ
const sampleData = {
  value: '備考に印字する内容を入力してください。',
  onChange: (value: string) => console.log(`Bikou changed: ${value}`),
};

// 使用例
const App: React.FC = () => {
  const [bikou, setBikou] = React.useState(sampleData.value);

  return (
    <div>
      <h1>備考入力コンポーネント</h1>
      <BikouInput value={bikou} onChange={setBikou} />
      <p>現在の備考: {bikou}</p>
    </div>
  );
};

export default App;