import React from 'react';
import styled from 'styled-components';

// 予算表示用のコンポーネント
const Budget: React.FC<{ label: string; amount: number }> = ({ label, amount }) => {
  return (
    <BudgetWrapper>
      <BudgetLabel>{label}</BudgetLabel>
      <BudgetAmount>{amount.toLocaleString()}</BudgetAmount>
    </BudgetWrapper>
  );
};

// 予算入力用のコンポーネント 
const BudgetInput: React.FC<{
  value: number;
  onChange: (value: number) => void;
}> = ({ value, onChange }) => {
  // 入力値が数値かどうかをチェック
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    if (!isNaN(Number(inputValue))) {
      onChange(Number(inputValue));
    }
  };

  return <StyledInput type="text" value={value} onChange={handleChange} />;
};

// ボタンコンポーネント
const Button: React.FC<{
  label: string;
  onClick: () => void;
  primary?: boolean;
}> = ({ label, onClick, primary = false }) => {
  return (
    <StyledButton onClick={onClick} primary={primary}>
      {label}
    </StyledButton>
  );
};

// 予算管理用のメインコンポーネント
const BudgetManager: React.FC = () => {
  const [budget, setBudget] = React.useState<number>(0);

  // OKボタンクリック時の処理
  const handleOk = () => {
    console.log(`Budget confirmed: ${budget}`);
    // TODO: 予算確定処理を実装
  };

  // クリアボタンクリック時の処理  
  const handleClear = () => {
    setBudget(0);
  };

  // 終了ボタンクリック時の処理
  const handleEnd = () => {
    console.log('Ended');
    // TODO: 終了処理を実装
  };

  return (
    <Wrapper>
      <Title>予算予算表示計画目標額</Title>
      <Content>
        <Budget label="予算" amount={budget} />
        <BudgetInput value={budget} onChange={setBudget} />
        <ButtonGroup>
          <Button label="OK" onClick={handleOk} primary />
          <Button label="クリア" onClick={handleClear} />
          <Button label="終了" onClick={handleEnd} />
        </ButtonGroup>
      </Content>
    </Wrapper>
  );
};

// スタイリング用のコンポーネント
const Wrapper = styled.div`
  background: #f0f0f0;
  padding: 16px;
  width: 300px;
`;

const Title = styled.div`
  font-weight: bold;
  margin-bottom: 8px;
`;

const Content = styled.div`
  background: white;
  padding: 16px;
`;

const BudgetWrapper = styled.div`
  display: flex;
  justify-content: space-between; 
  margin-bottom: 8px;
`;

const BudgetLabel = styled.div`
  font-weight: bold;
`;

const BudgetAmount = styled.div``;

const StyledInput = styled.input`
  padding: 4px;
  width: 100%;
  margin-bottom: 8px;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;
`;

const StyledButton = styled.button<{ primary?: boolean }>`
  padding: 8px;
  background: ${(props) => (props.primary ? '#1e90ff' : 'white')};
  color: ${(props) => (props.primary ? 'white' : 'black')};
  border: 1px solid gray;
  border-radius: 4px;

  &:hover {
    opacity: 0.8;
    cursor: pointer;
  }
`;

// サンプルデータを用いた使用例
const App: React.FC = () => {
  return (
    <div>
      <h1>予算管理アプリ</h1>
      <BudgetManager />
    </div>
  );
};

export default App;