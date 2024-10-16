import React from 'react';
import styled from 'styled-components';

// 調整入力プロパティの型定義
type AdjustmentInputProps = {
  label: string;
  value: number;
  onChange: (value: number) => void;
};

// 調整入力コンポーネント
const AdjustmentInput: React.FC<AdjustmentInputProps> = ({ label, value, onChange }) => {
  // 入力値が変更された時のハンドラ
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseInt(e.target.value);
    onChange(newValue);
  };

  return (
    <InputWrapper>
      <Label>{label}</Label>
      <Input type="number" value={value} onChange={handleChange} />
    </InputWrapper>
  );
};

// 計算結果表示プロパティの型定義
type CalculationResultProps = {
  label: string;
  value: number;
};

// 計算結果表示コンポーネント 
const CalculationResult: React.FC<CalculationResultProps> = ({ label, value }) => {
  return (
    <ResultWrapper>
      <Label>{label}</Label>
      <Result>{value.toLocaleString()}円</Result>
    </ResultWrapper>
  );
};

// 自動車予算計算機プロパティの型定義
type CarBudgetCalculatorProps = {
  initialFuelCost?: number;
  initialMaintenanceCost?: number;
};

// 自動車予算計算機コンポーネント
const CarBudgetCalculator: React.FC<CarBudgetCalculatorProps> = ({
  initialFuelCost = 0,
  initialMaintenanceCost = 0,
}) => {
  // 状態管理用のstate
  const [fuelCost, setFuelCost] = React.useState(initialFuelCost);
  const [maintenanceCost, setMaintenanceCost] = React.useState(initialMaintenanceCost);

  // 自動車予算の計算
  const totalBudget = fuelCost + maintenanceCost;

  return (
    <CalculatorWrapper>
      <Title>自動車予算計算機</Title>
      <AdjustmentInput
        label="1,000円丸め調整入力(往路)"
        value={fuelCost}
        onChange={(value) => setFuelCost(value)}
      />
      <AdjustmentInput
        label="1,000円丸め調整入力(予算)"  
        value={maintenanceCost}
        onChange={(value) => setMaintenanceCost(value)}
      />
      <CalculationResult label="1,000円丸め自動処理" value={totalBudget} />
    </CalculatorWrapper>
  );
};

// スタイリング用のStyled Components
const CalculatorWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #f5f5f5;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h2`
  margin-bottom: 20px;
  font-size: 24px;
  color: #333;
`;

const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const Label = styled.label`
  margin-right: 10px;
  font-size: 16px;
  color: #555;
`;

const Input = styled.input`
  padding: 8px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const ResultWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
`;

const Result = styled.span`
  font-size: 20px;
  font-weight: bold;
  color: #ff5722;
`;

// 使用例
const App: React.FC = () => {
  return (
    <div>
      <h1>自動車予算計算アプリ</h1>
      <CarBudgetCalculator initialFuelCost={10000} initialMaintenanceCost={20000} />
    </div>
  );
};

export default App;