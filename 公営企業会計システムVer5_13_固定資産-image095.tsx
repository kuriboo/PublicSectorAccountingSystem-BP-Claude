import React from 'react';

type InvestmentSummaryProps = {
  investmentNumber: string;
  node: string;
  usage: string;
  startDate: string;
  endDate: string;
  investmentPlan: {
    annualAmount: number;
    years: number;
    interestRate: number;
    premiumType: string;
    targetYield: number;
    managementFee: number;
    yearlyPremium: number;
    totalPremium: number;
  };
  accountingGroup: {
    accountCode: string;
    subAccountCode: string;
    managementCostCode: string;
    ratio: number;
    debitNumber: string;
    amount: number;
  };
};

const InvestmentSummary: React.FC<InvestmentSummaryProps> = ({
  investmentNumber,
  node,
  usage,
  startDate,
  endDate,
  investmentPlan,
  accountingGroup,
}) => {
  return (
    <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <h2 className="text-2xl font-bold mb-4">予算書作成内容表示</h2>
      <div className="mb-4">
        <div className="grid grid-cols-3 gap-4">
          <div>
            <label className="block text-gray-700 font-bold mb-2">予算番号</label>
            <div>{investmentNumber || '-'}</div>
          </div>
          <div>
            <label className="block text-gray-700 font-bold mb-2">節</label>
            <div>{node || '-'}</div>
          </div>
          <div>
            <label className="block text-gray-700 font-bold mb-2">細節</label>
            <div>{usage || '-'}</div>
          </div>
        </div>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">予測年月</label>
        <div>
          {startDate} 〜 {endDate}
        </div>
      </div>
      <div className="mb-4">
        <h3 className="text-lg font-bold mb-2">取得年月</h3>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-gray-700 font-bold mb-2">取得金額</label>
            <div>{investmentPlan.annualAmount.toLocaleString() || '-'}</div>
          </div>
          <div>
            <label className="block text-gray-700 font-bold mb-2">耐用年数</label>
            <div>{investmentPlan.years || '-'} 年</div>
          </div>
          <div>
            <label className="block text-gray-700 font-bold mb-2">利用率</label>
            <div>{investmentPlan.interestRate || '-'} %</div>
          </div>
          <div>
            <label className="block text-gray-700 font-bold mb-2">償却方法</label>
            <div>{investmentPlan.premiumType || '-'}</div>
          </div>
          <div>
            <label className="block text-gray-700 font-bold mb-2">残存価額</label>
            <div>{investmentPlan.targetYield.toLocaleString() || '-'}</div>
          </div>
          <div>
            <label className="block text-gray-700 font-bold mb-2">年間償却額</label>
            <div>{investmentPlan.yearlyPremium.toLocaleString() || '-'}</div>
          </div>
          <div>
            <label className="block text-gray-700 font-bold mb-2">償却累計額</label>
            <div>{investmentPlan.totalPremium.toLocaleString() || '-'}</div>
          </div>
        </div>
      </div>
      <div>
        <h3 className="text-lg font-bold mb-2">管理明細</h3>
        <table className="table-auto w-full">
          <thead>
            <tr>
              <th className="px-4 py-2">管轄コード</th>
              <th className="px-4 py-2">現場コード</th>
              <th className="px-4 py-2">管理名称</th>
              <th className="px-4 py-2">現場名称</th>
              <th className="px-4 py-2">取得数量</th>
              <th className="px-4 py-2">単位</th>
              <th className="px-4 py-2">取得金額</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-4 py-2">{accountingGroup.accountCode || '-'}</td>
              <td className="border px-4 py-2">{accountingGroup.subAccountCode || '-'}</td>
              <td className="border px-4 py-2">{accountingGroup.managementCostCode || '-'}</td>
              <td className="border px-4 py-2">{accountingGroup.ratio || '-'}</td>
              <td className="border px-4 py-2">{accountingGroup.debitNumber || '-'}</td>
              <td className="border px-4 py-2">本</td>
              <td className="border px-4 py-2">{accountingGroup.amount.toLocaleString() || '-'}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

// 使用例
const sampleData: InvestmentSummaryProps = {
  investmentNumber: '8000320',
  node: '001',
  usage: '001',
  startDate: '05101/0501',
  endDate: '05103/0403',
  investmentPlan: {
    annualAmount: 20.0,
    years: 2000,
    interestRate: 5000.0,
    premiumType: '定額法',
    targetYield: 2.50,
    managementFee: 10.00,
    yearlyPremium: 11280,
    totalPremium: 96.00,
  },
  accountingGroup: {
    accountCode: '000001',
    subAccountCode: '000001',
    managementCostCode: 'DIP(AT)減耗費',
    ratio: 0.75,
    debitNumber: '2000',
    amount: 5000.0,
  },
};

const App: React.FC = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Investment Summary Example</h1>
      <InvestmentSummary {...sampleData} />
    </div>
  );
};

export default App;