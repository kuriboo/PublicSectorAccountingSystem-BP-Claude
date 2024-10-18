import React from 'react';

interface FormProps {
  id: string;
  date: string;
  taxRate: number;
  revenue: string;
  costRate: number;
  entryCost: string;
  expenseCost: string;
  order: string;
  note: string;
  onSubmit: () => void;
  onClose: () => void;
  onCancel: () => void;
}

const Form: React.FC<FormProps> = ({
  id,
  date,
  taxRate,
  revenue,
  costRate,
  entryCost,
  expenseCost,
  order,
  note,
  onSubmit,
  onClose,
  onCancel,
}) => {
  return (
    <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">
          ID
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          value={id}
          readOnly
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">
          日付
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          value={date}
          readOnly
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">
          税区分
        </label>
        <select className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
          <option>課税1</option>
        </select>
      </div>
      {/* 消費税率、収入区分など残りのフィールド */}
      <div className="flex items-center justify-between">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="button"
          onClick={onSubmit}
        >
          登録
        </button>
        <button
          className="bg-transparent hover:bg-gray-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
          type="button"
          onClick={onClose}
        >
          閉じる
        </button>
        <button
          className="bg-transparent hover:bg-red-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
          type="button" 
          onClick={onCancel}
        >
          キャンセル
        </button>
      </div>
    </div>
  );
};

export default Form;