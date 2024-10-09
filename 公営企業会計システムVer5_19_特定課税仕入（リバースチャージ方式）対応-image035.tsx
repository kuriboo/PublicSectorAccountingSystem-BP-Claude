import React from 'react';

type ConsumptionTaxReportProps = {
  title: string;
  data: {
    date: string;
    salesAmount: number;
    taxAmount: number;
    totalAmount: number;
    accountItems: {
      name: string;
      salesAmount: number;
      taxAmount: number;
      totalAmount: number;
    }[];
  }[];
};

const ConsumptionTaxReport: React.FC<ConsumptionTaxReportProps> = ({ title, data }) => {
  return (
    <div className="overflow-x-auto">
      <h2 className="text-lg font-bold mb-4">{title}</h2>
      <table className="table-auto border-collapse border border-gray-400">
        <thead>
          <tr>
            <th className="border border-gray-400 px-4 py-2">年月日</th>
            <th className="border border-gray-400 px-4 py-2">事業所・部門</th>
            <th className="border border-gray-400 px-4 py-2">品目</th>
            <th className="border border-gray-400 px-4 py-2">金額</th>
            <th className="border border-gray-400 px-4 py-2">税率</th>
            <th className="border border-gray-400 px-4 py-2">消費税</th>
            <th className="border border-gray-400 px-4 py-2">合計金額</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <React.Fragment key={index}>
              <tr>
                <td className="border border-gray-400 px-4 py-2" rowSpan={item.accountItems.length + 1}>
                  {item.date}
                </td>
                {/* Render other columns */}
              </tr>
              {item.accountItems.map((accountItem, accountIndex) => (
                <tr key={accountIndex}>
                  <td className="border border-gray-400 px-4 py-2">{accountItem.name}</td>
                  <td className="border border-gray-400 px-4 py-2 text-right">{accountItem.salesAmount.toLocaleString()}</td>
                  <td className="border border-gray-400 px-4 py-2 text-right">{accountItem.taxAmount.toLocaleString()}</td>
                  <td className="border border-gray-400 px-4 py-2 text-right">{accountItem.totalAmount.toLocaleString()}</td>
                </tr>
              ))}
              {/* 総合計行 */}
              {index === data.length - 1 && (
                <tr>
                  <td className="border border-gray-400 px-4 py-2 font-bold" colSpan={3}>総合計</td>
                  <td className="border border-gray-400 px-4 py-2 text-right font-bold">{item.salesAmount.toLocaleString()}</td>
                  <td className="border border-gray-400 px-4 py-2 text-right font-bold">{item.taxAmount.toLocaleString()}</td>
                  <td className="border border-gray-400 px-4 py-2 text-right font-bold">{item.totalAmount.toLocaleString()}</td>
                </tr>
              )}
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
};

// サンプルデータ
const sampleData = [
  {
    date: '2023/01/01',
    salesAmount: 2030111070,
    taxAmount: 93006943,
    totalAmount: 1937104127,
    accountItems: [
      { name: '非課税売上', salesAmount: 38107, taxAmount: 0, totalAmount: 38107 },
      { name: '特定課税仕入', salesAmount: 0, taxAmount: 0, totalAmount: 0 },
      // ...
    ],
  },
  // ...
];

// 使用例
const ConsumptionTaxReportSample: React.FC = () => {
  return <ConsumptionTaxReport title="消費税計算明細書" data={sampleData} />;
};

export default ConsumptionTaxReport;