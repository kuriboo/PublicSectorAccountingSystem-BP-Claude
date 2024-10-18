import React from 'react';
import styled from 'styled-components';

// 入力金額の型定義
interface InputAmount {
  tax: number;
  tip: number;
  consumption: number;
}

// 計算結果の型定義
interface CalculationResult {
  type: string;
  amount: number;
  tax: number;
  tip: number;
  consumption: number;
}

// コンポーネントのプロパティの型定義
interface Props {
  inputAmount: InputAmount;
  calculationResults: CalculationResult[];
}

// 入力金額表示用のスタイル定義
const InputAmountWrapper = styled.div`
  margin-bottom: 20px;
`;

const InputAmountRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 5px;
`;

const InputAmountLabel = styled.div`
  font-weight: bold;
`;

const InputAmountValue = styled.div``;

// 計算結果表示用のスタイル定義
const CalculationResultsWrapper = styled.div`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;
`;

const CalculationResultsHeader = styled.div`
  display: flex;
  font-weight: bold;
  border-bottom: 1px solid #ccc;
  padding: 5px;
`;

const CalculationResultsHeaderItem = styled.div`
  flex: 1;
  text-align: center;
`;

const CalculationResultsRow = styled.div`
  display: flex;
  border-bottom: 1px solid #ccc;
  padding: 5px;

  &:last-child {
    border-bottom: none;
  }
`;

const CalculationResultsItem = styled.div`
  flex: 1;
  text-align: right;
`;

// ボタン用のスタイル定義
const ButtonWrapper = styled.div`
  text-align: center;
`;

const Button = styled.button`
  margin: 0 5px;
  padding: 5px 10px;
  font-size: 14px;
`;

/**
 * 入力金額と計算結果を表示するコンポーネント
 */
const TaxCalculator: React.FC<Props> = ({ inputAmount, calculationResults }) => {
  return (
    <div>
      {/* 入力金額の表示 */}
      <InputAmountWrapper>
        <InputAmountRow>
          <InputAmountLabel>税込額</InputAmountLabel>
          <InputAmountValue>{inputAmount.tax.toLocaleString()}</InputAmountValue>
        </InputAmountRow>
        <InputAmountRow>
          <InputAmountLabel>税抜額</InputAmountLabel>
          <InputAmountValue>{inputAmount.tip.toLocaleString()}</InputAmountValue>
        </InputAmountRow>
        <InputAmountRow>
          <InputAmountLabel>消費税額</InputAmountLabel>
          <InputAmountValue>{inputAmount.consumption.toLocaleString()}</InputAmountValue>
        </InputAmountRow>
      </InputAmountWrapper>

      {/* 計算結果の表示 */}
      <CalculationResultsWrapper>
        <CalculationResultsHeader>
          <CalculationResultsHeaderItem>税区分</CalculationResultsHeaderItem>
          <CalculationResultsHeaderItem>消費税率</CalculationResultsHeaderItem>
          <CalculationResultsHeaderItem>税込額</CalculationResultsHeaderItem>
          <CalculationResultsHeaderItem>税抜額</CalculationResultsHeaderItem>
          <CalculationResultsHeaderItem>消費税額</CalculationResultsHeaderItem>
        </CalculationResultsHeader>
        {calculationResults.map((result, index) => (
          <CalculationResultsRow key={index}>
            <CalculationResultsItem>{result.type}</CalculationResultsItem>
            <CalculationResultsItem>{result.amount.toLocaleString()}%</CalculationResultsItem>
            <CalculationResultsItem>{result.tax.toLocaleString()}</CalculationResultsItem>
            <CalculationResultsItem>{result.tip.toLocaleString()}</CalculationResultsItem>
            <CalculationResultsItem>{result.consumption.toLocaleString()}</CalculationResultsItem>
          </CalculationResultsRow>
        ))}
      </CalculationResultsWrapper>

      {/* ボタンの表示 */}
      <ButtonWrapper>
        <Button>OK</Button>
        <Button>クリア</Button>
        <Button>キャンセル</Button>
      </ButtonWrapper>
    </div>
  );
};



// 使用例
const sampleData = {
  inputAmount: {
    tax: 26000,
    tip: 22880,
    consumption: 2000,
  },
  calculationResults: [
    {
      type: '課税',
      amount: 8000,
      tax: 15000,
      tip: 13889,
      consumption: 1111,
    },
    {
      type: '課税',
      amount: 10000,
      tax: 10000,
      tip: 9091,
      consumption: 909,
    },
  ],
};

const App: React.FC = () => {
  return (
    <div>
      <h1>消費税計算ツール</h1>
      <TaxCalculator
        inputAmount={sampleData.inputAmount}
        calculationResults={sampleData.calculationResults}
      />
    </div>
  );
};

export default App;