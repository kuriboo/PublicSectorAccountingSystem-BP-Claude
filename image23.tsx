import React from 'react';

type ExpenseReportProps = {
  fiscalYear: number;
  department: string;
  representative: string;
  period: string;
  purpose: string;
  destination: string;
  departureDate: string;
  returnDate: string;
  travelExpenses: number;
  accommodationExpenses: number;
  total: number;
};

const ExpenseReport: React.FC<ExpenseReportProps> = ({
  fiscalYear,
  department,
  representative,
  period,
  purpose,
  destination,
  departureDate,
  returnDate,
  travelExpenses,
  accommodationExpenses,
  total,
}) => {
  return (
    <div className="bg-white p-4">
      <h2 className="text-lg font-bold mb-2">振替伝票（単票）</h2>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <p>平成 {fiscalYear} 年度</p>
          <p>所属 {department}</p>
          <p>氏名 {representative}</p>
        </div>
        <div className="text-right">
          <p>伝票No. 27-000481</p>
        </div>
      </div>
      <table className="w-full border-collapse mt-4">
        <tbody>
          <tr>
            <th className="border px-2 py-1">年月日</th>
            <th className="border px-2 py-1">金額</th>
            <th className="border px-2 py-1">摘要</th>
            <th className="border px-2 py-1">年月日</th>
            <th className="border px-2 py-1">金額</th>
            <th className="border px-2 py-1">摘要</th>
            <th className="border px-2 py-1" colSpan={2}></th>
          </tr>
          <tr>
            <td className="border px-2 py-1">{departureDate}</td>
            <td className="border px-2 py-1">{travelExpenses.toLocaleString()}</td>
            <td className="border px-2 py-1">旅費</td>
            <td className="border px-2 py-1">{returnDate}</td>
            <td className="border px-2 py-1">{accommodationExpenses.toLocaleString()}</td>
            <td className="border px-2 py-1">宿泊費</td>
            <td className="border px-2 py-1"></td>
            <td className="border px-2 py-1"></td>
          </tr>
          <tr>
            <td className="border px-2 py-1" colSpan={3}>
              <p>出張期間 {period}</p>
              <p>出張目的 {purpose}</p>
            </td>
            <td className="border px-2 py-1" colSpan={3}>
              <p>出張先 {destination}</p>
            </td>
            <td className="border px-2 py-1 text-right" colSpan={2}>
              合計 {total.toLocaleString()}円
            </td>
          </tr>
          <tr>
            <td className="border px-2 py-1" colSpan={4}>
              <p>上記の通り相違ありません</p>
            </td>
            <td className="border px-2 py-1" colSpan={4}>
              <p>責任者印</p>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

// Sample usage
const App: React.FC = () => {
  const expenseReportData: ExpenseReportProps = {
    fiscalYear: 27,
    department: '行政管理課',
    representative: '鈴木一郎',
    period: '4月1日〜4月7日',
    purpose: '出張',
    destination: '大阪',
    departureDate: '平成28年4月1日',
    returnDate: '平成28年4月7日',
    travelExpenses: 50000,
    accommodationExpenses: 30000,
    total: 80000,
  };

  return (
    <div>
      <ExpenseReport {...expenseReportData} />
    </div>
  );
};

export default App;