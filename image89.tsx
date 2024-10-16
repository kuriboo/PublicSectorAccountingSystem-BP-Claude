import React from 'react';
import styled from 'styled-components';

// CSVファイルの入力フォームのプロパティ
type CSVInputProps = {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

// CSVファイルの入力フォームコンポーネント
const CSVInput: React.FC<CSVInputProps> = ({ value, onChange }) => {
  return (
    <InputWrapper>
      <Input type="text" value={value} onChange={onChange} />
    </InputWrapper>
  );
};

// スタイリング
const InputWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;

const Input = styled.input`
  width: 300px;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;

  @media (max-width: 600px) {
    width: 100%;
  }
`;

// ボタンのプロパティ
type ButtonProps = {
  label: string;
  onClick: () => void;
};

// ボタンコンポーネント
const Button: React.FC<ButtonProps> = ({ label, onClick }) => {
  return <StyledButton onClick={onClick}>{label}</StyledButton>;
};

// ボタンのスタイリング
const StyledButton = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-right: 10px;

  &:hover {
    background-color: #0056b3;
  }
`;

// サンプルデータ
const sampleData = {
  csvValue: 'sample.csv',
};

// 使用例
const App: React.FC = () => {
  const [csvValue, setCsvValue] = React.useState(sampleData.csvValue);

  const handleCSVChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCsvValue(event.target.value);
  };

  const handleOK = () => {
    // OKボタンがクリックされた時の処理
    console.log('OKがクリックされました');
  };

  const handleCancel = () => {
    // キャンセルボタンがクリックされた時の処理
    console.log('キャンセルがクリックされました');
  };

  const handleEnd = () => {
    // 終了ボタンがクリックされた時の処理
    console.log('終了がクリックされました');
  };

  return (
    <div>
      <CSVInput value={csvValue} onChange={handleCSVChange} />
      <div>
        <Button label="OK" onClick={handleOK} />
        <Button label="クリア" onClick={handleCancel} />
        <Button label="終了" onClick={handleEnd} />
      </div>
    </div>
  );
};

export default App;