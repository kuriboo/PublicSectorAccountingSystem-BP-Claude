import React, { useState } from 'react';
import styled from '@emotion/styled';

type GradeCalculatorProps = {
  initialCurrentGrade?: number;
  initialTargetGrade?: number;
};

const GradeCalculator: React.FC<GradeCalculatorProps> = ({ 
  initialCurrentGrade = 0, 
  initialTargetGrade = 0 
}) => {
  const [currentGrade, setCurrentGrade] = useState<number>(initialCurrentGrade);
  const [targetGrade, setTargetGrade] = useState<number>(initialTargetGrade);
  const [calculatedGrade, setCalculatedGrade] = useState<string>('');

  const handleCalculate = () => {
    // 計算ロジックを実装（例は単純な加算）
    const grade = currentGrade + targetGrade;
    setCalculatedGrade(grade.toString());
  };

  const handleClear = () => {
    setCurrentGrade(0);
    setTargetGrade(0);
    setCalculatedGrade('');
  };

  const handleCancel = () => {
    // キャンセル処理を実装（例：初期値に戻す）
    setCurrentGrade(initialCurrentGrade);
    setTargetGrade(initialTargetGrade);
    setCalculatedGrade('');
  };

  return (
    <Container>
      <Title>単位集計計算機</Title>
      <InputRow>
        <Label>集計先区分</Label>
        <Input 
          type="number" 
          value={currentGrade} 
          onChange={(e) => setCurrentGrade(Number(e.target.value))} 
        />
      </InputRow>
      <InputRow>
        <Label>集計先番号</Label>
        <Input 
          type="number" 
          value={targetGrade} 
          onChange={(e) => setTargetGrade(Number(e.target.value))} 
        />
      </InputRow>
      <InputRow>
        <Label>加減区分</Label>
        <Input value="+ -" readOnly />
      </InputRow>
      <ButtonRow>
        <Button onClick={handleCalculate}>OK</Button>
        <Button onClick={handleClear}>クリア</Button>
        <Button onClick={handleCancel}>キャンセル</Button>
      </ButtonRow>
      {calculatedGrade && <Result>計算結果: {calculatedGrade}</Result>}
    </Container>
  );
};

// スタイリング
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  font-family: sans-serif;
`;

const Title = styled.h2`
  margin-bottom: 20px;
`;

const InputRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 10px;
`;

const Label = styled.label`
  margin-right: 10px;
`;

const Input = styled.input`
  padding: 5px;
  border-radius: 5px;
  border: 1px solid #ccc;
  width: 150px;
`;

const ButtonRow = styled.div`
  margin-top: 20px;
`;

const Button = styled.button`
  padding: 5px 10px;
  margin: 0 5px;
  border-radius: 5px;
  border: none;
  background-color: #007bff;
  color: #fff;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const Result = styled.p`
  margin-top: 20px;
  font-size: 18px;
`;

// 使用例
const App: React.FC = () => {
  return (
    <div>
      <h1>成績計算アプリ</h1>
      <GradeCalculator initialCurrentGrade={80} initialTargetGrade={90} />
    </div>
  );
};

export default App;