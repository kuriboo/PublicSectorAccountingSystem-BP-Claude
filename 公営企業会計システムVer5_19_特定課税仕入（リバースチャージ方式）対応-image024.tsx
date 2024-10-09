// BalanceSheet.tsx

import React from 'react';

type BalanceSheetProps = {
  data: {
    assets: {
      current: number;
      fixed: number;
      total: number;
    };
    liabilities: {
      current: number;
      longTerm: number;
      total: number;
    };
    equity: {
      capital: number;
      earned: number;
      total: number;
    };
    total: number;
  };
};

const BalanceSheet: React.FC<BalanceSheetProps> = ({ data }) => {
  return (
    <div className="bg-white p-4 rounded shadow">
      <h2 className="text-2xl font-bold mb-4">貸借対照表</h2>
      <table className="w-full border-collapse">
        <thead>
          <tr>
            <th className="border px-4 py-2">項目</th>
            <th className="border px-4 py-2">金額</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border px-4 py-2">流動資産</td>
            <td className="border px-4 py-2 text-right">{data.assets.current.toLocaleString()}</td>
          </tr>
          <tr>
            <td className="border px-4 py-2">固定資産</td>
            <td className="border px-4 py-2 text-right">{data.assets.fixed.toLocaleString()}</td>
          </tr>
          <tr>
            <td className="border px-4 py-2">資産合計</td>
            <td className="border px-4 py-2 text-right">{data.assets.total.toLocaleString()}</td>
          </tr>
          <tr>
            <td className="border px-4 py-2">流動負債</td>
            <td className="border px-4 py-2 text-right">{data.liabilities.current.toLocaleString()}</td>
          </tr>
          <tr>
            <td className="border px-4 py-2">固定負債</td>
            <td className="border px-4 py-2 text-right">{data.liabilities.longTerm.toLocaleString()}</td>
          </tr>
          <tr>
            <td className="border px-4 py-2">負債合計</td>
            <td className="border px-4 py-2 text-right">{data.liabilities.total.toLocaleString()}</td>
          </tr>
          <tr>
            <td className="border px-4 py-2">資本金</td>
            <td className="border px-4 py-2 text-right">{data.equity.capital.toLocaleString()}</td>
          </tr>
          <tr>
            <td className="border px-4 py-2">利益剰余金</td>
            <td className="border px-4 py-2 text-right">{data.equity.earned.toLocaleString()}</td>
          </tr>
          <tr>
            <td className="border px-4 py-2">純資産合計</td>
            <td className="border px-4 py-2 text-right">{data.equity.total.toLocaleString()}</td>
          </tr>
          <tr>
            <td className="border px-4 py-2">負債・純資産合計</td>
            <td className="border px-4 py-2 text-right">{data.total.toLocaleString()}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

// サンプルデータを用いた使用例
const sampleData = {
  assets: {
    current: 6905506916,
    fixed: 2480000,
    total: 6907986916,
  },
  liabilities: {
    current: 475860411,
    longTerm: 47738079,
    total: 523598490,
  },
  equity: {
    capital: 42000,
    earned: 6384346426,
    total: 6384388426,
  },
  total: 6907986916,
};

const BalanceSheetSample: React.FC = () => {
  return <BalanceSheet data={sampleData} />;
};

export default BalanceSheet;