import React from 'react';

interface FixedTermProductionProps {
  workType?: '管理' | '管理以外';
  managementNumber: string;
  fromSequenceNumber: string;
  toSequenceNumber: string;
  department1: '01' | '02';
  department2: '01' | '02';
  expirationDate: string;
  effectiveDate: string;
}

const FixedTermProduction: React.FC<FixedTermProductionProps> = ({
  workType = '管理',
  managementNumber = '',
  fromSequenceNumber = '',
  toSequenceNumber = '',
  department1 = '01',
  department2 = '02',
  expirationDate = '',
  effectiveDate = '',
}) => {
  return (
    <div className="bg-white p-4 rounded shadow">
      <h2 className="text-lg font-bold mb-4">抽出固定資産一覧表作成</h2>
      <div className="mb-4">
        <span className="mr-4">
          <input
            type="radio"
            id="management"
            name="workType"
            value="管理"
            checked={workType === '管理'}
            readOnly
          />
          <label htmlFor="management" className="ml-1">
            管理
          </label>
        </span>
        <span>
          <input
            type="radio"
            id="nonManagement"
            name="workType"
            value="管理以外"
            checked={workType === '管理以外'}
            readOnly
          />
          <label htmlFor="nonManagement" className="ml-1">
            管理以外
          </label>
        </span>
      </div>
      <div className="mb-4 grid grid-cols-2 gap-4">
        <div>
          <label htmlFor="managementNumber" className="block mb-1">
            管理番号
          </label>
          <input
            type="text"
            id="managementNumber"
            className="w-full px-2 py-1 border rounded"
            value={managementNumber}
            readOnly
          />
        </div>
        <div>
          <label htmlFor="sequenceNumber" className="block mb-1">
            資産番号
          </label>
          <div className="flex">
            <input
              type="text"
              id="fromSequenceNumber"
              className="w-full px-2 py-1 border rounded"
              value={fromSequenceNumber}
              readOnly
            />
            <span className="mx-2">〜</span>
            <input
              type="text"
              id="toSequenceNumber"
              className="w-full px-2 py-1 border rounded"
              value={toSequenceNumber}
              readOnly
            />
          </div>
        </div>
      </div>
      <div className="mb-4 grid grid-cols-2 gap-4">
        <div>
          <label htmlFor="department1" className="block mb-1">
            部門
          </label>
          <div className="flex items-center">
            <input
              type="text"
              id="department1"
              className="w-12 px-2 py-1 border rounded"
              value={department1}
              readOnly
            />
            <span className="ml-2">設水</span>
          </div>
        </div>
        <div>
          <label htmlFor="department2" className="block mb-1">
            部門
          </label>
          <div className="flex items-center">
            <input
              type="text"
              id="department2"
              className="w-12 px-2 py-1 border rounded"
              value={department2}
              readOnly
            />
            <span className="ml-2">導水</span>
          </div>
        </div>
      </div>
      <div className="mb-4 grid grid-cols-2 gap-4">
        <div>
          <label htmlFor="expirationDate" className="block mb-1">
            取得年月日
          </label>
          <input
            type="text"
            id="expirationDate"
            className="w-full px-2 py-1 border rounded"
            value={expirationDate}
            readOnly
          />
        </div>
        <div>
          <label htmlFor="effectiveDate" className="block mb-1">
            〜
          </label>
          <input
            type="text"
            id="effectiveDate"
            className="w-full px-2 py-1 border rounded"
            value={effectiveDate}
            readOnly
          />
        </div>
      </div>
      <div className="text-center">
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
          OK
        </button>
        <button className="bg-gray-300 hover:bg-gray-400 text-gray-700 font-bold py-2 px-4 rounded ml-4">
          クリア
        </button>
        <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded ml-4">
          終了
        </button>
      </div>
    </div>
  );
};

// Usage example
const App: React.FC = () => {
  return (
    <div className="container mx-auto mt-8">
      <FixedTermProduction
        managementNumber="999999999999"
        fromSequenceNumber="000000000"
        toSequenceNumber="999999999"
        expirationDate="平成29年09月"
        effectiveDate="平成30年09月"
      />
    </div>
  );
};

export default App;