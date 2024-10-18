import React from 'react';
import styled from 'styled-components';

// 型定義
type ReportFormProps = {
  onSubmit: (data: string) => void;
  onCancel: () => void;
};

// スタイル定義
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #f0f0f0;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);

  @media (max-width: 600px) {
    padding: 10px;
  }
`;

const Title = styled.h2`
  margin-bottom: 20px;
  color: #333;
`;

const TextArea = styled.textarea`
  width: 100%;
  height: 150px;
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
  resize: vertical;

  @media (max-width: 600px) {
    height: 100px;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: ${props => props.color || '#007bff'};
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;

// コンポーネント定義
const ReportForm: React.FC<ReportFormProps> = ({ onSubmit, onCancel }) => {
  const [inputValue, setInputValue] = React.useState('');

  // フォーム送信時の処理
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(inputValue);
    setInputValue('');
  };

  return (
    <Container>
      <Title>業者情報取込準備処理</Title>
      <form onSubmit={handleSubmit}>
        <TextArea
          value={inputValue}
          onChange={e => setInputValue(e.target.value)}
          placeholder="内容を入力してください"
        />
        <ButtonGroup>
          <Button type="submit" color="#28a745">送信</Button>
          <Button type="button" color="#dc3545" onClick={onCancel}>
            キャンセル
          </Button>
        </ButtonGroup>
      </form>
    </Container>
  );
};

// 使用例
const App: React.FC = () => {
  const handleSubmit = (data: string) => {
    console.log('送信データ:', data);
    // 送信処理の実装
  };

  const handleCancel = () => {
    console.log('キャンセルされました');
    // キャンセル処理の実装
  };

  return (
    <div>
      <h1>業者情報取り込み</h1>
      <ReportForm onSubmit={handleSubmit} onCancel={handleCancel} />
    </div>
  );
};

export default App;