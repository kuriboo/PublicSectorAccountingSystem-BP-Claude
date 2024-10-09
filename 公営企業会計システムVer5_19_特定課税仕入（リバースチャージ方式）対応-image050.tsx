import React from 'react';

interface SupportTicketProps {
  ticketNumber: string;
  date: string;
  department: string;
  extension: string;
  details: string;
  manager: string;
  amountCollected: number;
  amountSpent: number;
  remarks: string;
  divisionChief: string;
  divisionChiefDate: string;
  accountingManager: string;
  accountingManagerDate: string;
  signature: string;
}

const SupportTicket: React.FC<SupportTicketProps> = ({
  ticketNumber = '',
  date = '',
  department = '',
  extension = '',
  details = '',
  manager = '',
  amountCollected = 0,
  amountSpent = 0,
  remarks = '',
  divisionChief = '',
  divisionChiefDate = '',
  accountingManager = '',
  accountingManagerDate = '',
  signature = '',
}) => {
  return (
    <div className="border border-gray-400 p-4">
      {/* Header */}
      <div className="flex justify-between mb-4">
        <h2 className="text-lg font-bold">支払伝票（単票）</h2>
        <div>
          <span className="mr-2">伝票No</span>
          <span>{ticketNumber}</span>
        </div>
      </div>

      {/* Table */}
      <table className="w-full">
        <thead>
          <tr>
            <th className="border px-4 py-2">所属</th>
            <th className="border px-4 py-2">氏名</th>
            <th className="border px-4 py-2">摘要</th>
            <th className="border px-4 py-2">領収書等</th>
            <th className="border px-4 py-2">金額</th>
            <th className="border px-4 py-2">起案者</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border px-4 py-2">{department}</td>
            <td className="border px-4 py-2">{manager}</td>
            <td className="border px-4 py-2">{details}</td>
            <td className="border px-4 py-2"></td>
            <td className="border px-4 py-2"></td>
            <td className="border px-4 py-2"></td>
          </tr>
        </tbody>
      </table>

      {/* Approval */}
      <div className="flex justify-between mt-8">
        <div>
          <p>借方科目</p>
          <p>細節</p>          
          <div className="flex flex-col">
            <span>事業費用</span>
            <span>○○事業</span>
            <span>印刷製本費</span>
            <span>調査委託費</span>
            <span>電子事務費</span>
          </div>

          <p>貸方科目</p>
          <div className="flex flex-col">
            <span>現金預金</span>
            <span>現金預金</span>
            <span>普通預金</span>
            <span>普通預金</span>
            <span>普通預金</span>
          </div>
        </div>

        <div>
          <p>借方科目細節</p>
          <div className="flex flex-col">
            <span>{amountSpent.toLocaleString()}円</span>
          </div>
          
          <p>貸方科目細節</p>
          <div className="flex flex-col">
            <span>{amountCollected.toLocaleString()}円</span>
          </div>
        </div>
      </div>

      <div className="mt-8">
        <p>備考: {remarks}</p>
      </div>
      
      {/* Footer */}
      <div className="flex justify-end mt-12">
        <div className="mr-8">
          <p>{divisionChief}</p>
          <p>{divisionChiefDate}</p>
        </div>
        <div>
          <p>{accountingManager}</p>
          <p>{accountingManagerDate}</p>
        </div>
      </div>

      <div className="flex justify-end mt-8">
        <div>{signature}</div>
      </div>
      
    </div>
  );
};

// Sample usage
const SampleSupportTicket = () => {
  return (
    <SupportTicket
      ticketNumber="27-000451"
      date="平成28年3月27日"
      department="事務部"
      manager="鈴木"
      details="平成28年3月27日の費用"
      amountCollected={1000000}
      amountSpent={1000000}
      remarks="備考"
      divisionChief="課長"
      accountingManager="経理"
    />
  );
};

export default SampleSupportTicket;