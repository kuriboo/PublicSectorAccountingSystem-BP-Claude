import React from 'react';

type ResultItem = {
  title: string;
  consumer: string;
  billingDate: string;
  dueDate: string;
  quantity: number;
  unitPrice: number;
  price: number;
  tax: number;
  remarks: string;
};

type Result = {
  date: string;
  items: ResultItem[];
  totalPrice: number;
  totalTax: number;
  totalAmount: number;
};

type ResultTableProps = {
  data: Result;
};

const ResultTable: React.FC<ResultTableProps> = ({ data }) => {
  return (
    <div className="bg-white shadow-md rounded-md p-4">
      <h2 className="text-xl font-bold mb-4">{data.date}</h2>
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-100">
            <th className="px-4 py-2">摘要</th>
            <th className="px-4 py-2">請求先</th>
            <th className="px-4 py-2">請求日</th>
            <th className="px-4 py-2">決済期日</th>
            <th className="px-4 py-2">数量</th>
            <th className="px-4 py-2">単価</th>
            <th className="px-4 py-2">金額</th>
            <th className="px-4 py-2">消費税</th>
            <th className="px-4 py-2">備考</th>
          </tr>
        </thead>
        <tbody>
          {data.items.map((item, index) => (
            <tr key={index} className="border-t">
              <td className="px-4 py-2">{item.title}</td>
              <td className="px-4 py-2">{item.consumer}</td>
              <td className="px-4 py-2">{item.billingDate}</td>
              <td className="px-4 py-2">{item.dueDate}</td>
              <td className="px-4 py-2 text-right">{item.quantity}</td>
              <td className="px-4 py-2 text-right">{item.unitPrice}</td>
              <td className="px-4 py-2 text-right">{item.price}</td>
              <td className="px-4 py-2 text-right">{item.tax}</td>
              <td className="px-4 py-2">{item.remarks}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="mt-4 flex justify-end">
        <div className="mr-4">
          <p className="font-bold">合計金額</p>
          <p>{data.totalPrice}</p>
        </div>
        <div className="mr-4">
          <p className="font-bold">合計消費税</p>
          <p>{data.totalTax}</p>
        </div>
        <div>
          <p className="font-bold">合計請求金額</p>
          <p>{data.totalAmount}</p>
        </div>
      </div>
    </div>
  );
};

// Usage example
const sampleData: Result = {
  date: '2023/01/19',
  items: [
    {
      title: '時間超過仕入分',
      consumer: '○○事業',
      billingDate: '2016/3/24',
      dueDate: '2016/3/25',
      quantity: 450,
      unitPrice: 1000,
      price: 1000,
      tax: 80,
      remarks: '',
    },
    {
      title: '明細書(細面)',
      consumer: '',
      billingDate: '',
      dueDate: '',
      quantity: 1000,
      unitPrice: 1000,
      price: 1000,
      tax: 80,
      remarks: '',
    },
  ],
  totalPrice: 2090112079,
  totalTax: 93006944,
  totalAmount: 1997105127,
};

const ResultTableExample: React.FC = () => {
  return (
    <div>
      <h1>Result Table Example</h1>
      <ResultTable data={sampleData} />
    </div>
  );
};

export default ResultTableExample;