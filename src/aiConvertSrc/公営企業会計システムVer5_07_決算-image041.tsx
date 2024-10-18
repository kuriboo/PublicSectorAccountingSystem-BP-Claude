import React from 'react';
import styled from 'styled-components';

// 設定されたプロパティの型定義
interface Props {
  title: string;
  fixedInterestRate: number;
  variableInterestRate: number;
  incentive: number;
  total: number;
}

// コンポーネントの定義
const MortgageCalculator: React.FC<Props> = ({
  title,
  fixedInterestRate,
  variableInterestRate,
  incentive,
  total,
}) => {
  // 固定資産構成比率の計算
  const fixedAssetRatio = (fixedInterestRate / total) * 100;

  return (
    <Container>
      <Title>{title}</Title>
      <CalculationBox>
        <Label>固定資産構成比率 (%)</Label>
        <InputWrapper>
          <Input value={fixedAssetRatio.toFixed(2)} readOnly />
          <Equals>=</Equals>
          <Input value={fixedInterestRate} readOnly />
          <Operator>+</Operator>
          <Input value={variableInterestRate} readOnly />
          <Operator>+</Operator>
          <Input value={incentive} readOnly />
        </InputWrapper>
        <Total>
          <TotalLabel>計</TotalLabel>
          <TotalValue>{total}</TotalValue>
        </Total>
      </CalculationBox>
    </Container>
  );
};

// コンポーネントのスタイリング
const Container = styled.div`
  font-family: Arial, sans-serif;
  padding: 20px;
  background-color: #f5f5f5;
  border-radius: 5px;
`;

const Title = styled.h2`
  margin-bottom: 20px;
  color: #333;
`;

const CalculationBox = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;

const Label = styled.div`
  font-weight: bold;
  margin-bottom: 10px;
`;

const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const Input = styled.input`
  width: 80px;
  padding: 5px;
  margin-right: 10px;
  border: 1px solid #ccc;
  border-radius: 3px;
  text-align: right;
`;

const Equals = styled.span`
  margin-right: 10px;
`;

const Operator = styled.span`
  margin: 0 10px;
`;

const Total = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-top: 20px;
`;

const TotalLabel = styled.span`
  font-weight: bold;
  margin-right: 10px;
`;

const TotalValue = styled.span`
  font-size: 18px;
  font-weight: bold;
`;

// コンポーネントの使用例
const App: React.FC = () => {
  // サンプルデータ
  const data = {
    title: '固定資産構成比率計算',
    fixedInterestRate: 50,
    variableInterestRate: 30,
    incentive: 20,
    total: 100,
  };

  return (
    <div>
      <MortgageCalculator {...data} />
    </div>
  );
};

export default App;