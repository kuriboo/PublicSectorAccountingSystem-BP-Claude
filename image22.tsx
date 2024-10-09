import React from 'react';

interface ReportTableProps {
  companyName: string;
  companyAddress: string;
  fiscalYear: string;
  period: string;
  reportItems: {
    item: string;
    value: number;
  }[];
  totalAmount: number;
  accountName: string;
  directorName: string;
}

const ReportTable: React.FC<ReportTableProps> = ({
  companyName,
  companyAddress,
  fiscalYear,
  period,
  reportItems,
  totalAmount,
  accountName,
  directorName,
}) => {
  return (
    <div className="bg-white p-4 rounded shadow">
      <h2 className="text-lg font-bold mb-4">負担行為伺兼命令書</h2>
      <div className="mb-4">
        <div>決定No. 27-000451-07</div>
        <div>負担No. 27-000413</div>
      </div>
      <table className="w-full border-collapse">
        <tbody>
          <tr>
            <th className="border px-4 py-2">所属</th>
            <td className="border px-4 py-2">行政市事業会計</td>
          </tr>
          <tr>
            <th className="border px-4 py-2">所属</th>
            <td className="border px-4 py-2">課長</td>
          </tr>
          <tr>
            <th className="border px-4 py-2">起案者</th>
            <td className="border px-4 py-2"></td>
          </tr>
          <tr>
            <th className="border px-4 py-2">業務係長</th>
            <td className="border px-4 py-2">施設係長</td>
          </tr>
          <tr>
            <th className="border px-4 py-2">保</th>
            <td className="border px-4 py-2"></td>
          </tr>
          <tr>
            <th className="border px-4 py-2">起案者</th>
            <td className="border px-4 py-2"></td>
          </tr>
        </tbody>
      </table>

      <div className="mt-8">
        <div>以下のとおり支出してよろしいか。</div>
        <div>検収日 平成 年 月 日</div>
      </div>

      <table className="w-full border-collapse mt-4">
        <tbody>
          {reportItems.map((item, index) => (
            <tr key={index}>
              <th className="border px-4 py-2">{item.item}</th>
              <td className="border px-4 py-2">{item.value.toLocaleString()}円</td>
            </tr>
          ))}
          <tr>
            <th className="border px-4 py-2">負担累計</th>
            <td className="border px-4 py-2">{totalAmount.toLocaleString()}円</td>
          </tr>
          <tr>
            <th className="border px-4 py-2">予算残額</th>
            <td className="border px-4 py-2">{(1000000000 - totalAmount).toLocaleString()}円</td>
          </tr>
        </tbody>
      </table>

      <div className="mt-8">
        <div>予算所属 {accountName}</div>
        <div>摘要 電子書籍購入費</div>
      </div>
      
      <div className="text-right mt-12">
        <div>{companyName}</div>
        <div>{directorName}</div>
      </div>
    </div>
  );
};

// Usage example
const App: React.FC = () => {
  const reportData: ReportTableProps = {
    companyName: '株式会社○○',
    companyAddress: '○○市○○町1-2-3',
    fiscalYear: '平成28年',
    period: '3月27日',
    reportItems: [
      { item: '002事業費用', value: 1000000 },
      { item: '01営業費用', value: 1000000 },
      { item: '01○○事業', value: 0 },
      { item: '13印刷製本費', value: 100000000 },
      { item: '0001印刷製本費', value: 1001000 },
    ],
    totalAmount: 98999000,
    accountName: '電子書籍購入費',
    directorName: '山田太郎',
  };

  return (
    <div>
      <ReportTable {...reportData} />
    </div>
  );
};

export default App;