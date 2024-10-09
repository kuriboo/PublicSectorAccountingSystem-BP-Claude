import React from 'react';

type TaxInputProps = {
  label: string;
  value: number;
  onChange: (value: number) => void;
  className?: string;
};

const TaxInput: React.FC<TaxInputProps> = ({ label, value, onChange, className }) => {
  return (
    <div className={`flex items-center ${className}`}>
      <span className="mr-2">{label}</span>
      <input
        type="number"
        value={value}
        onChange={(e) => onChange(parseFloat(e.target.value))}
        className="border border-gray-300 rounded px-2 py-1"
      />
    </div>
  );
};

type TaxRowProps = {
  label: string;
  taxRate: number;
  amount: number;
  className?: string;
};

const TaxRow: React.FC<TaxRowProps> = ({ label, taxRate, amount, className }) => {
  return (
    <div className={`flex items-center justify-between ${className}`}>
      <span>{label}</span>
      <span>{taxRate}%</span>
      <span>{amount.toLocaleString()}</span>
    </div>
  );
};

type TaxCalculatorProps = {
  salesAmount: number;
  taxAmount: number;
  consumptionTaxRate: number;
  localConsumptionTaxRate?: number;
};

const TaxCalculator: React.FC<TaxCalculatorProps> = ({
  salesAmount,
  taxAmount,
  consumptionTaxRate,
  localConsumptionTaxRate = 0,
}) => {
  // 消費税額の計算
  const calculatedTaxAmount = salesAmount * (consumptionTaxRate / 100);

  // 地方消費税額の計算
  const calculatedLocalTaxAmount = salesAmount * (localConsumptionTaxRate / 100);

  return (
    <div className="p-4 border border-gray-300 rounded">
      <TaxInput
        label="決定額"
        value={salesAmount}
        onChange={(value) => console.log('Sales amount changed:', value)}
        className="mb-2"
      />
      <TaxInput
        label="税抜額"
        value={taxAmount}
        onChange={(value) => console.log('Tax amount changed:', value)}
        className="mb-4"
      />
      <TaxRow label="消費税率" taxRate={consumptionTaxRate} amount={calculatedTaxAmount} className="mb-2" />
      {localConsumptionTaxRate > 0 && (
        <TaxRow
          label="地税額"
          taxRate={localConsumptionTaxRate}
          amount={calculatedLocalTaxAmount}
          className="mb-2"
        />
      )}
      <div className="mt-4">
        <button className="bg-blue-500 text-white px-4 py-2 rounded">確定</button>
      </div>
    </div>
  );
};

// サンプルデータを使用した表示用コンポーネント
const TaxCalculatorSample: React.FC = () => {
  return (
    <TaxCalculator
      salesAmount={1000000}
      taxAmount={1000000}
      consumptionTaxRate={10}
      localConsumptionTaxRate={0}
    />
  );
};

export default TaxCalculatorSample;