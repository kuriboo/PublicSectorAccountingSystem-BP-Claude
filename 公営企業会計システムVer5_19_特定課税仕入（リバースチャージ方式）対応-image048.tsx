import React from 'react';

type SupportTicketProps = {
  ticketNumber: string;
  date: string;
  department: string;
  billedPerson: string;
  billedDepartment: string;
  billedLocation: string;
  cashierStampRecipient: string;
  expenseDetails: {
    date: string;
    description: string;
    vendor: string;
    amount: number;
  }[];
  totalAmount: number;
};

const SupportTicket: React.FC<SupportTicketProps> = ({
  ticketNumber,
  date,
  department,
  billedPerson,
  billedDepartment,
  billedLocation,
  cashierStampRecipient,
  expenseDetails,
  totalAmount,
}) => {
  return (
    <div className="bg-white p-4">
      <div className="text-center text-lg font-bold mb-4">支払伝票（単票）</div>
      <div className="flex justify-between mb-2">
        <div>平成27年度</div>
        <div>伝票No. {ticketNumber}</div>
      </div>
      <table className="table-auto w-full text-left whitespace-no-wrap mb-4">
        <thead>
          <tr>
            <th className="px-4 py-2">所属</th>
            <th className="px-4 py-2">氏名</th>
            <th className="px-4 py-2">平成28年3月27日</th>
            <th className="px-4 py-2">事務所長</th>
            <th className="px-4 py-2">課長</th>
            <th className="px-4 py-2">係長</th>
            <th className="px-4 py-2">起案者</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border px-4 py-2">{department}</td>
            <td className="border px-4 py-2">{billedPerson}</td>
            <td className="border px-4 py-2"></td>
            <td className="border px-4 py-2"></td>
            <td className="border px-4 py-2"></td>
            <td className="border px-4 py-2"></td>
            <td className="border px-4 py-2"></td>
          </tr>
        </tbody>
      </table>
      <div className="flex mb-4">
        <div className="w-1/2">
          <div className="mb-2">借方科目</div>
          <div>事業費用</div>
          <div>○○事業</div>
          <div>印刷製本費</div>
          <div>消耗品費</div>
          <div>食糧費</div>
        </div>
        <div className="w-1/2">
          <div className="mb-2">貸方科目</div>
          <div>現金預金</div>
          <div>現金預金</div>
          <div>普通預金</div>
          <div>普通預金</div>
          <div>普通預金</div>
        </div>
      </div>
      <div className="text-right mb-4">金額 {totalAmount.toLocaleString()}円</div>
      <table className="table-auto w-full text-left whitespace-no-wrap mb-4">
        <thead>
          <tr>
            <th className="px-4 py-2">年月日</th>
            <th className="px-4 py-2">摘要</th>
            <th className="px-4 py-2">金額</th>
          </tr>
        </thead>
        <tbody>
          {expenseDetails.map((detail, index) => (
            <tr key={index}>
              <td className="border px-4 py-2">{detail.date}</td>
              <td className="border px-4 py-2">
                {detail.description}
                <br />
                {detail.vendor}
              </td>
              <td className="border px-4 py-2 text-right">
                {detail.amount.toLocaleString()}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-end">
        <div>収入印紙貼付 収入印紙</div>
      </div>
    </div>
  );
};

// Example usage:
const SampleSupportTicket: React.FC = () => {
  const sampleData: SupportTicketProps = {
    ticketNumber: '27-000451',
    date: '平成27年度',
    department: '××課',
    billedPerson: '鈴木',
    billedDepartment: '',
    billedLocation: '',
    cashierStampRecipient: '',
    expenseDetails: [
      {
        date: '3/1',
        description: '○○の購入',
        vendor: '△△商事',
        amount: 30000,
      },
      {
        date: '3/5',
        description: '□□の印刷',
        vendor: '◇◇印刷',
        amount: 50000,
      },
    ],
    totalAmount: 80000,
  };

  return <SupportTicket {...sampleData} />;
};

export default SampleSupportTicket;