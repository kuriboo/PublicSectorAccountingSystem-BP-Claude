import React from 'react';
import styled from 'styled-components';

// 消費税率更正入力のプロパティ
type TaxCorrectionInputProps = {
  defaultTaxRate: number; // デフォルトの消費税率
  onTaxRateChange: (taxRate: number) => void; // 消費税率変更時のコールバック
};

// 消費税率更正入力コンポーネント
const TaxCorrectionInput: React.FC<TaxCorrectionInputProps> = ({
  defaultTaxRate,
  onTaxRateChange,
}) => {
  // 消費税率の状態管理
  const [taxRate, setTaxRate] = React.useState(defaultTaxRate);

  // 消費税率変更ハンドラ
  const handleTaxRateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newTaxRate = parseFloat(event.target.value);
    setTaxRate(newTaxRate);
    onTaxRateChange(newTaxRate);
  };

  return (
    <TaxCorrectionInputContainer>
      <TaxRateInput
        type="number"
        value={taxRate}
        onChange={handleTaxRateChange}
      />
      <span>%</span>
      <ApplyButton>入力</ApplyButton>
    </TaxCorrectionInputContainer>
  );
};

// スタイリング
const TaxCorrectionInputContainer = styled.div`
  display: flex;
  align-items: center;
`;

const TaxRateInput = styled.input`
  width: 60px;
  padding: 4px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-right: 4px;
`;

const ApplyButton = styled.button`
  padding: 4px 8px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

// 使用例
const App: React.FC = () => {
  const handleTaxRateChange = (taxRate: number) => {
    console.log(`New tax rate: ${taxRate}%`);
  };

  return (
    <div>
      <h2>消費税率更正入力</h2>
      <TaxCorrectionInput
        defaultTaxRate={8}
        onTaxRateChange={handleTaxRateChange}
      />
    </div>
  );
};

export default App;