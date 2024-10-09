// SearchConditionComponent.tsx
import React from 'react';

type Props = {
  fiscalYear: number;
  onFiscalYearChange: (fiscalYear: number) => void;
  onSubmit: () => void;
};

const SearchConditionComponent: React.FC<Props> = ({ fiscalYear, onFiscalYearChange, onSubmit }) => {
  return (
    <div className="p-4 bg-white">
      <div className="mb-4">
        <label htmlFor="fiscalYear" className="block text-gray-700 font-bold mb-2">年度</label>
        <input
          type="number"
          id="fiscalYear"
          value={fiscalYear}
          onChange={(e) => onFiscalYearChange(Number(e.target.value))}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">振替範囲</label>
        <div className="flex items-center mb-2">
          <input type="radio" id="transferAll" name="transferRange" className="mr-2" />
          <label htmlFor="transferAll">予算科目</label>
        </div>
        <div className="flex items-center">
          <input type="radio" id="transferSpecific" name="transferRange" className="mr-2" />
          <label htmlFor="transferSpecific">仕訳科目</label>
        </div>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">振替日付</label>
        <div className="flex items-center mb-2">
          <input type="date" className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mr-2" />
          <span>〜</span>
          <input type="date" className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ml-2" />
        </div>
        <div className="flex items-center">
          <input type="radio" id="sundayTransfer" name="transferTiming" className="mr-2" />
          <label htmlFor="sundayTransfer">日曜振替</label>
          <input type="radio" id="monthEndTransfer" name="transferTiming" className="mr-2 ml-4" />
          <label htmlFor="monthEndTransfer">月末振替</label>
        </div>
      </div>
      <div className="mb-4">
        <label htmlFor="transferAmount" className="block text-gray-700 font-bold mb-2">振替金額</label>
        <div className="flex items-center">
          <input
            type="number"
            id="transferAmount"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
          <span className="ml-2">〜</span>
          <input
            type="number"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ml-2"
          />
        </div>
      </div>
      <div>
        <label htmlFor="remarks" className="block text-gray-700 font-bold mb-2">摘要</label>
        <input
          type="text"
          id="remarks"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <button
        type="button"
        onClick={onSubmit}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
      >
        表示
      </button>
    </div>
  );
};

// Usage example
const SearchConditionExample: React.FC = () => {
  const [fiscalYear, setFiscalYear] = React.useState(2023);

  const handleSubmit = () => {
    // Handle form submission
  };

  return (
    <SearchConditionComponent
      fiscalYear={fiscalYear}
      onFiscalYearChange={setFiscalYear}
      onSubmit={handleSubmit}
    />
  );
};

export default SearchConditionComponent;