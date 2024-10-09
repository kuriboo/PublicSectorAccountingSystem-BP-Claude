import React from 'react';

type Item = {
  code: string;
  name: string;
  unitPrice: number;
  quantity: number;
  amount: number;
  tax: number;
};

type InvoiceProps = {
  invoiceNumber: string;
  issueDate: string;
  dueDate: string;
  items: Item[];
  subtotal: number;
  taxRate: number;
  taxAmount: number;
  total: number;
};

const Invoice: React.FC<InvoiceProps> = ({
  invoiceNumber,
  issueDate,
  dueDate,
  items,
  subtotal,
  taxRate,
  taxAmount,
  total,
}) => {
  return (
    <div className="bg-white p-6 rounded shadow">
      {/* Invoice header */}
      <div className="flex justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold">請求書</h2>
          <p className="text-gray-600">{invoiceNumber}</p>
        </div>
        <div className="text-right">
          <p>発行日: {issueDate}</p>
          <p>期限: {dueDate}</p>
        </div>
      </div>

      {/* Invoice items table */}
      <table className="w-full mb-6">
        <thead>
          <tr className="bg-gray-100">
            <th className="px-4 py-2 text-left">商品コード</th>
            <th className="px-4 py-2 text-left">商品名</th>
            <th className="px-4 py-2 text-right">単価</th>
            <th className="px-4 py-2 text-right">数量</th>
            <th className="px-4 py-2 text-right">金額</th>
            <th className="px-4 py-2 text-right">消費税</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => (
            <tr key={index} className="border-b">
              <td className="px-4 py-2">{item.code}</td>
              <td className="px-4 py-2">{item.name}</td>
              <td className="px-4 py-2 text-right">{item.unitPrice}</td>
              <td className="px-4 py-2 text-right">{item.quantity}</td>
              <td className="px-4 py-2 text-right">{item.amount}</td>
              <td className="px-4 py-2 text-right">{item.tax}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Invoice summary */}
      <div className="flex justify-end space-x-4">
        <div className="text-right">
          <p>小計: {subtotal}</p>
          <p>消費税率: {taxRate}%</p>
          <p>消費税: {taxAmount}</p>
          <p className="text-xl font-bold">合計: {total}</p>
        </div>
      </div>
    </div>
  );
};

// Sample usage
const sampleData: InvoiceProps = {
  invoiceNumber: '0020101155',
  issueDate: '2016/3/24',
  dueDate: '2016/3/25',
  items: [
    {
      code: '450',
      name: 'パソコン',
      unitPrice: 98000,
      quantity: 1,
      amount: 1000,
      tax: 8,
    },
    {
      code: '42',
      name: 'ケーブル',
      unitPrice: 450,
      quantity: 1,
      amount: 1000,
      tax: 8,
    },
  ],
  subtotal: 291553781,
  taxRate: 0.08,
  taxAmount: 93696984,
  total: 291553781,
};

const InvoiceSample: React.FC = () => {
  return <Invoice {...sampleData} />;
};

export default InvoiceSample;