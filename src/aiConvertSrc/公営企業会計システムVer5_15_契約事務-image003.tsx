import React from 'react';
import styled from 'styled-components';

// 相手先情報の型定義
interface Counterparty {
  name: string;
  branch: string;
}

// 相手先登録フォームのプロパティ型定義
interface CounterpartyFormProps {
  onSubmit: (counterparty: Counterparty) => void;
}

// 相手先登録フォームコンポーネント
const CounterpartyForm: React.FC<CounterpartyFormProps> = ({ onSubmit }) => {
  const [name, setName] = React.useState('');
  const [branch, setBranch] = React.useState('');
  
  // フォーム送信時の処理
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // 相手先情報をプロパティ経由で親コンポーネントに渡す
    onSubmit({ name, branch });
    // フォームをリセット
    setName('');
    setBranch('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Label>
        相手先
        <Input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </Label>
      <Label>
        代表取締役
        <Input
          type="text"
          value={branch}
          onChange={(e) => setBranch(e.target.value)}
        />
      </Label>
      <ButtonGroup>
        <Button type="submit">OK</Button>
        <Button type="reset">クリア</Button>
        <CancelButton type="button">キャンセル</CancelButton>
      </ButtonGroup>
    </Form>
  );
};

// スタイリング用のコンポーネント
const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 16px;
  background: #f0f0f0;
  border-radius: 4px;
`;

const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const Input = styled.input`
  padding: 4px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 8px;
  margin-top: 8px;
`;

const Button = styled.button`
  padding: 4px 16px;
  background: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background: #0056b3;
  }
`;

const CancelButton = styled(Button)`
  background: #6c757d;

  &:hover {
    background: #545b62;
  }
`;

// サンプルデータ
const sampleCounterparty: Counterparty = {
  name: '株式会社○○',
  branch: '東京支店',
};

// 使用例
const App: React.FC = () => {
  const handleSubmit = (counterparty: Counterparty) => {
    console.log('Submitted:', counterparty);
  };

  return (
    <div>
      <h1>相手先登録</h1>
      <CounterpartyForm onSubmit={handleSubmit} />
      <h2>サンプルデータ</h2>
      <p>相手先: {sampleCounterparty.name}</p>
      <p>代表取締役: {sampleCounterparty.branch}</p>
    </div>
  );
};

export default App;