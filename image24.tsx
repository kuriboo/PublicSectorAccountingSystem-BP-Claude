import React from 'react';

type ExpenseSummaryProps = {
  fiscalYear: number;
  department: string;
  name: string;
  corporateExpense: number;
  businessExpense: number;
  total: number;
  [key: string]: any;
};

const ExpenseSummary: React.FC<ExpenseSummaryProps> = ({
  fiscalYear,
  department,
  name,
  corporateExpense,
  businessExpense,
  total,
  ...rest
}) => {
  return (
    <div className="border border-gray-400 p-4">
      <h2 className="text-lg font-bold mb-4">振替伝票（申票）</h2>
      <div className="grid grid-cols-6 gap-2 mb-4">
        <div>平成 {fiscalYear} 年度</div>
        <div>行秋市事業会計</div>
        <div>伝票№</div>
        <div>27-009481</div>
      </div>
      <table className="w-full table-fixed mb-4">
        <tbody>
          <tr>
            <td colSpan={2}>所属</td>
            <td colSpan={2}>自由日１ケ月前 ～ 自由 27 日</td>
            <td>伝票<br />作成年月日</td>
            <td>自由日２ケ月後 ～ 月</td>
            <td>起案者</td>
          </tr>
          <tr>
            <td rowSpan={2}>部課</td>
            <td rowSpan={2}>{department}</td>
            <td colSpan={2}>{name}</td>
            <td rowSpan={2}>経理<br />確認</td>
            <td rowSpan={2}>係長<br />審査係長</td>
            <td rowSpan={2}>施設係長</td>
          </tr>
          <tr>
            <td colSpan={2}>
              <div className="grid grid-cols-2">
                <div>借方科目<br />細節<br />明細</div>
                <div>貸方科目<br />細節<br />明細</div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <table className="w-full table-fixed mb-4">
        <tbody>
          <tr>
            <td rowSpan={3}>事業費用<br />営業費用<br />〇〇事業<br />印刷製本費<br />消耗品費<br />光熱水費</td>
            <td rowSpan={3}>{corporateExpense.toLocaleString()}円</td>
            <td rowSpan={3}>流動負債<br />未払金<br />営業未払金<br />営業未払金<br />営業未払金<br />営業未払金</td>
            <td rowSpan={3}>{businessExpense.toLocaleString()}円</td>
            <td>金額</td>
          </tr>
          <tr>
            <td>{total.toLocaleString()}円</td>
          </tr>
        </tbody>
      </table>
      <div className="grid grid-cols-2">
        <div>
          <div>起案者</div>
          <div>収入区分</div>
        </div>
        <div>  
          <div>課長</div>
          <div>資金予算区分</div>
        </div>
      </div>
      <div className="text-xs text-gray-500 mt-2">
        {JSON.stringify(rest)}
      </div>
    </div>
  );
};

// Usage example
const App: React.FC = () => {
  const expenseSummaryData = {
    fiscalYear: 27,
    department: '財政部',
    name: '財政課',
    corporateExpense: 1000000,
    businessExpense: 1000000,
    total: 2000000,
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Expense Summary</h1>
      <ExpenseSummary {...expenseSummaryData} />
    </div>
  );
};

export default App;