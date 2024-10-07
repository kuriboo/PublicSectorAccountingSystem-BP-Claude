import React from 'react';

interface MeisaiProps {
  year: number;
  branch: string;
  taxRate: number;
  residenceTax: string;
  incomeTax: string;
  entryTax: string;
  managementFee: string;
  parkingFee: string;
  repairReserveFund: string;
  eoMonthAdjustment: string;
  transfer: string;
  miscExpense: string;
  specialNote: string;
}

const Meisai: React.FC<MeisaiProps> = ({
  year,
  branch,
  taxRate,
  residenceTax,
  incomeTax,
  entryTax,
  managementFee,
  parkingFee, 
  repairReserveFund,
  eoMonthAdjustment,
  transfer,
  miscExpense,
  specialNote,
}) => {
  return (
    <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          年度
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="number"
          value={year}
          readOnly
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          支店名
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          value={branch}
          readOnly
        />
      </div>
      {/* 他のフィールドも同様に実装 */}
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          消費税
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="number"
          value={taxRate}
          readOnly
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          住民税
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          value={residenceTax}
          readOnly
        />
      </div>
      {/* 以下省略 */}
    </div>
  );
};

export default Meisai;