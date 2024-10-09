import React from 'react';

type ConsumptionTaxCalculatorProps = {
  taxRate?: number;
  taxExemptThreshold?: number;
  items: {
    name: string;
    price: number;
    taxable: boolean;
  }[];
};

const ConsumptionTaxCalculator: React.FC<ConsumptionTaxCalculatorProps> = ({
  taxRate = 0.1,
  taxExemptThreshold = 1000,
  items,
}) => {
  // 課税対象の合計金額を計算
  const totalTaxableAmount = items
    .filter((item) => item.taxable)
    .reduce((total, item) => total + item.price, 0);

  // 消費税額を計算
  const consumptionTax = totalTaxableAmount * taxRate;

  // 非課税対象の合計金額を計算
  const totalTaxExemptAmount = items
    .filter((item) => !item.taxable)
    .reduce((total, item) => total + item.price, 0);

  // 総合計金額を計算
  const totalAmount = totalTaxableAmount + totalTaxExemptAmount;

  return (
    <div className="bg-white p-4 rounded shadow">
      <h2 className="text-lg font-bold mb-4">消費税計算明細書</h2>
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-100">
            <th className="border px-4 py-2">品目</th>
            <th className="border px-4 py-2">金額</th>
            <th className="border px-4 py-2">課税対象</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => (
            <tr key={index}>
              <td className="border px-4 py-2">{item.name}</td>
              <td className="border px-4 py-2 text-right">{item.price.toLocaleString()}</td>
              <td className="border px-4 py-2 text-center">{item.taxable ? '○' : '-'}</td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td className="border px-4 py-2 font-bold">課税対象計</td>
            <td className="border px-4 py-2 text-right font-bold" colSpan={2}>
              {totalTaxableAmount.toLocaleString()}
            </td>
          </tr>
          <tr>
            <td className="border px-4 py-2 font-bold">消費税({taxRate * 100}%)</td>
            <td className="border px-4 py-2 text-right font-bold" colSpan={2}>
              {consumptionTax.toLocaleString()}
            </td>
          </tr>
          <tr>
            <td className="border px-4 py-2 font-bold">非課税対象計</td>
            <td className="border px-4 py-2 text-right font-bold" colSpan={2}>
              {totalTaxExemptAmount.toLocaleString()}
            </td>
          </tr>
          <tr>
            <td className="border px-4 py-2 font-bold">合計</td>
            <td className="border px-4 py-2 text-right font-bold" colSpan={2}>
              {totalAmount.toLocaleString()}
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

// サンプルデータを使用した表示用コンポーネント
const SampleConsumptionTaxCalculator: React.FC = () => {
  const sampleItems = [
    { name: '課税対象商品A', price: 1000, taxable: true },
    { name: '課税対象商品B', price: 500, taxable: true },
    { name: '非課税対象商品C', price: 800, taxable: false },
    { name: '課税対象商品D', price: 1200, taxable: true },
  ];

  return <ConsumptionTaxCalculator items={sampleItems} />;
};

export default ConsumptionTaxCalculator;