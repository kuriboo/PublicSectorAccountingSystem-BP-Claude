以下が、画像を元に作成したNext.js + TypeScriptのコンポーネントコードです。

import React from 'react';
import styled from 'styled-components';

// 課税標準額計算フォームのプロパティ型定義
type TaxCalcFormProps = {
  fiscalYear: string; // 年度
  taxRate: number; // 税率
  taxDeduction: number; // 税額控除
  onCalc: (result: number) => void; // 計算結果のコールバック
};

// 課税標準額計算フォームコンポーネント
const TaxCalcForm: React.FC<TaxCalcFormProps> = ({
  fiscalYear,
  taxRate,
  taxDeduction,
  onCalc,
}) => {
  // 課税標準額の入力値を管理するstate
  const [taxBase, setTaxBase] = React.useState<number>(0);

  // 消費税額の計算
  const handleCalc = () => {
    const taxAmount = Math.floor(taxBase * (taxRate / 100)) - taxDeduction;
    onCalc(taxAmount);
  };

  return (
    <FormWrapper>
      <Title>課税標準額入力</Title>
      <Label>
        年度
        <span>{fiscalYear}</span>
      </Label>
      <InputWrapper>
        <Label>
          課税標準額
          <Input
            type="number"
            value={taxBase}
            onChange={(e) => setTaxBase(Number(e.target.value))}
          />
          円
        </Label>
        <CalcButton onClick={handleCalc}>計算</CalcButton>
      </InputWrapper>
    </FormWrapper>
  );
};

// 消費税額計算結果表示コンポーネント
const TaxAmountResult: React.FC<{ amount: number }> = ({ amount }) => {
  return (
    <ResultWrapper>
      <Label>計算結果</Label>
      <ResultValue>{amount.toLocaleString()}円</ResultValue>
    </ResultWrapper>
  );
};

// 課税標準額計算フォームのスタイル
const FormWrapper = styled.div`
  background: #f0f0f0;
  padding: 16px;
  margin-bottom: 16px;
`;

const Title = styled.h3`
  font-size: 18px;
  margin-bottom: 8px;
`;

const Label = styled.label`
  display: inline-block;
  margin-bottom: 8px;

  > span {
    margin-left: 8px;
  }
`;

const InputWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const Input = styled.input`
  padding: 4px;
  border-radius: 4px;
  border: 1px solid #ccc;
  margin: 0 8px;
`;

const CalcButton = styled.button`
  padding: 4px 16px;
  border-radius: 4px;
  background: #1e88e5;
  color: white;
  margin-left: 8px;
  cursor: pointer;
`;

// 消費税額計算結果のスタイル
const ResultWrapper = styled.div`
  text-align: right;
`;

const ResultValue = styled.div`
  font-size: 24px;
  font-weight: bold;
`;

// サンプルデータを使用して計算フォームを表示するコンポーネント
const TaxCalcFormSample: React.FC = () => {
  const [taxAmount, setTaxAmount] = React.useState<number>(0);

  return (
    <div>
      <TaxCalcForm
        fiscalYear="2023/10/30"
        taxRate={10}
        taxDeduction={50000}
        onCalc={(result) => setTaxAmount(result)}
      />
      <TaxAmountResult amount={taxAmount} />
    </div>
  );
};

export default TaxCalcFormSample;