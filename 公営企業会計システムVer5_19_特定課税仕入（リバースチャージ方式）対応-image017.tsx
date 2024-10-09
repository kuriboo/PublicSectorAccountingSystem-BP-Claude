import React from 'react';

interface TaxCalculatorProps {
  startDate: string;
  endDate: string;
  taxRate: number;
  deductionRate: number;
  bankHolidaysIncluded: boolean;
}

interface TaxItem {
  date: string;
  dayOfWeek: string;
  isBankHoliday: boolean;
  isHalfDay: boolean;
  amount: number;
  deductedAmount: number;
  totalAmount: number;
}

const TaxCalculator: React.FC<TaxCalculatorProps> = ({
  startDate,
  endDate,
  taxRate,
  deductionRate,
  bankHolidaysIncluded,
}) => {
  // 税金計算用の日付配列を生成
  const taxItems: TaxItem[] = generateTaxItems(
    startDate,
    endDate,
    taxRate,
    deductionRate,
    bankHolidaysIncluded
  );

  // 合計金額を計算
  const totalAmount = taxItems.reduce((sum, item) => sum + item.totalAmount, 0);

  return (
    <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <h2 className="text-2xl font-bold mb-4">特定課税仕入調書</h2>
      <div className="mb-4">
        <span>対象期間：</span>
        <span>{startDate}</span>
        <span> 〜 </span>
        <span>{endDate}</span>
      </div>
      <table className="table-auto w-full text-left whitespace-no-wrap">
        <thead>
          <tr>
            <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">日付</th>
            <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">曜日</th>
            <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">税抜金額</th>
            <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">税額</th>
            <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">消費税額</th>
          </tr>
        </thead>
        <tbody>
          {taxItems.map((item, index) => (
            <tr key={index}>
              <td className="px-4 py-3">{item.date}</td>
              <td className="px-4 py-3">{item.dayOfWeek}</td>
              <td className="px-4 py-3">{item.amount.toLocaleString()}</td>
              <td className="px-4 py-3">{item.deductedAmount.toLocaleString()}</td>
              <td className="px-4 py-3">{item.totalAmount.toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="mt-4 text-right">
        <span className="text-xl font-bold">合計金額：</span>
        <span>{totalAmount.toLocaleString()}</span>
      </div>
    </div>
  );
};

// 指定期間の税金計算用配列を生成する関数
const generateTaxItems = (
  startDate: string,
  endDate: string,
  taxRate: number,
  deductionRate: number,
  bankHolidaysIncluded: boolean
): TaxItem[] => {
  const items: TaxItem[] = [];
  let currentDate = new Date(startDate);
  const lastDate = new Date(endDate);

  while (currentDate <= lastDate) {
    const isBankHoliday = isBankHolidayFunc(currentDate);
    const isHalfDay = isHalfDayFunc(currentDate);
    
    // 銀行休日を含めない場合はスキップ
    if (!bankHolidaysIncluded && isBankHoliday) {
      currentDate.setDate(currentDate.getDate() + 1);
      continue;
    }
    
    const amount = 90000; // 仮の税抜金額
    const deductedAmount = Math.floor(amount * deductionRate);
    const totalAmount = amount - deductedAmount;
    
    const item: TaxItem = {
      date: formatDate(currentDate),
      dayOfWeek: getDayOfWeek(currentDate),
      isBankHoliday,
      isHalfDay,
      amount,
      deductedAmount,
      totalAmount,
    };

    items.push(item);
    currentDate.setDate(currentDate.getDate() + 1);
  }

  return items;
};

// 日付をyyyy/MM/dd形式でフォーマット
const formatDate = (date: Date): string => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}/${month}/${day}`;
};

// 曜日を取得
const getDayOfWeek = (date: Date): string => {
  const daysOfWeek = ['日', '月', '火', '水', '木', '金', '土'];
  return daysOfWeek[date.getDay()];
};

// 銀行休日判定の仮実装
const isBankHolidayFunc = (date: Date): boolean => {
  // 銀行休日の判定ロジックを実装
  // 例: 土日は休日とする
  const dayOfWeek = date.getDay();
  return dayOfWeek === 0 || dayOfWeek === 6;
};

// 半日判定の仮実装
const isHalfDayFunc = (date: Date): boolean => {
  // 半日の判定ロジックを実装
  // 例: 15日は半日とする
  return date.getDate() === 15;
};

// サンプルデータを使用した表示用のコンポーネント
const SampleTaxCalculator: React.FC = () => {
  const startDate = '2016/03/27';
  const endDate = '2016/03/27';
  const taxRate = 0.1;
  const deductionRate = 0.1;
  const bankHolidaysIncluded = true;

  return (
    <TaxCalculator
      startDate={startDate}
      endDate={endDate}
      taxRate={taxRate}
      deductionRate={deductionRate}
      bankHolidaysIncluded={bankHolidaysIncluded}
    />
  );
};

export default SampleTaxCalculator;