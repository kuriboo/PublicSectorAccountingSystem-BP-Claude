import React from 'react';
import styled from 'styled-components';

// 特定収入課修正内訳入力フォームのプロパティ型
type SpecialIncomeDeductionFormProps = {
  predictedAmount: number;
  actualAmount: number;
  taxRates: { rate: number; amount: number }[];
  onAmountChange: (amount: number) => void;
  onTaxRateChange: (index: number, amount: number) => void;
};

// 特定収入課修正内訳入力フォームコンポーネント
const SpecialIncomeDeductionForm: React.FC<SpecialIncomeDeductionFormProps> = ({
  predictedAmount,
  actualAmount,
  taxRates,
  onAmountChange,
  onTaxRateChange,
}) => {
  return (
    <FormWrapper>
      <FormRow>
        <FormLabel>予算編成額</FormLabel>
        <FormValue>{predictedAmount.toLocaleString()} 円</FormValue>
      </FormRow>
      <FormRow>
        <FormLabel>予算の内訳</FormLabel>
        <FormValue>
          <input 
            type="radio"
            id="predicted"
            checked={actualAmount === predictedAmount}
            onChange={() => onAmountChange(predictedAmount)}
          />
          <label htmlFor="predicted">課税仕入れ等</label>
          <input
            type="radio"
            id="custom"
            checked={actualAmount !== predictedAmount}
            onChange={() => onAmountChange(0)}
          />
          <label htmlFor="custom">借入金の償還に充てられた補助金</label>
          <CustomAmountInput
            type="number"
            value={actualAmount !== predictedAmount ? actualAmount : ''}
            onChange={(e) => onAmountChange(Number(e.target.value))}
            disabled={actualAmount === predictedAmount}
          />
        </FormValue>
      </FormRow>
      <FormRow>
        <FormLabel>特定収入に該当する金額</FormLabel>
        <FormValue>{actualAmount.toLocaleString()} 円</FormValue>
      </FormRow>
      <FormRow>
        <FormLabel>特定収入以外の額</FormLabel>
        <FormValue>{(predictedAmount - actualAmount).toLocaleString()} 円</FormValue>
      </FormRow>
      <TaxRateTable>
        <thead>
          <tr>
            <th>課税仕入れ等に係る特定収入消費税率及び地方消費税率</th>
            <th>課税売上対応分</th>
            <th>課税対応額</th>
            <th>課税仕入れ等に係る特定収入</th>
          </tr>
        </thead>
        <tbody>
          {taxRates.map((rate, index) => (
            <tr key={index}>
              <td>{rate.rate.toFixed(2)}% ({(rate.rate / 2).toFixed(2)}%)</td>
              <td>
                <TaxRateAmountInput
                  type="number"
                  value={rate.amount}
                  onChange={(e) => onTaxRateChange(index, Number(e.target.value))}
                />
                円
              </td>
              <td>{Math.round(rate.amount * rate.rate).toLocaleString()} 円</td>
              <td>{Math.round(actualAmount * rate.rate).toLocaleString()} 円</td>
            </tr>
          ))}
        </tbody>
      </TaxRateTable>
      <FormRow>
        <div />
        <SpecialIncomeDeductionAmount>
          使途不特定の特定収入 {actualAmount.toLocaleString()} 円
        </SpecialIncomeDeductionAmount>
      </FormRow>
      <FormButtonRow>
        <FormButton>OK</FormButton>
        <FormButton>クリア</FormButton>
        <FormButton>キャンセル</FormButton>
      </FormButtonRow>
    </FormWrapper>
  );
};

// サンプルデータ
const sampleData = {
  predictedAmount: 11500000,
  actualAmount: 11500000,
  taxRates: [
    { rate: 10, amount: 0 },
    { rate: 8, amount: 0 },
    { rate: 8, amount: 0 },  
    { rate: 5, amount: 0 },
    { rate: 3, amount: 0 },
    { rate: 0, amount: 0 },
  ],
};

// サンプル表示用コンポーネント
const SampleSpecialIncomeDeductionForm = () => {
  const [data, setData] = React.useState(sampleData);

  const handleAmountChange = (amount: number) => {
    setData((prev) => ({ ...prev, actualAmount: amount }));
  };

  const handleTaxRateChange = (index: number, amount: number) => {
    setData((prev) => ({
      ...prev,
      taxRates: prev.taxRates.map((r, i) => (i === index ? { ...r, amount } : r)),
    }));
  };

  return (
    <SpecialIncomeDeductionForm
      predictedAmount={data.predictedAmount}
      actualAmount={data.actualAmount}
      taxRates={data.taxRates}
      onAmountChange={handleAmountChange}
      onTaxRateChange={handleTaxRateChange}
    />
  );
};

// スタイル
const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const FormRow = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

const FormLabel = styled.div`
  flex: 1;
  font-weight: bold;
`;

const FormValue = styled.div`
  flex: 2;
`;

const CustomAmountInput = styled.input`
  margin-left: 8px;
  width: 150px;
`;

const TaxRateTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  th,
  td {
    border: 1px solid #ccc;
    padding: 4px;
    text-align: center;
  }
`;

const TaxRateAmountInput = styled.input`
  width: 100px;
`;

const SpecialIncomeDeductionAmount = styled.div`
  text-align: right;
`;

const FormButtonRow = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 8px;
  margin-top: 16px;
`;

const FormButton = styled.button`
  padding: 4px 16px;
`;

export default SampleSpecialIncomeDeductionForm;