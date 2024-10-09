import React from 'react';

interface TaxSearchFormProps {
  onSearch: (params: { startDate: string; endDate: string; }) => void;
}

const TaxSearchForm: React.FC<TaxSearchFormProps> = ({ onSearch }) => {
  const [startDate, setStartDate] = React.useState('');
  const [endDate, setEndDate] = React.useState('');

  const handleSearch = () => {
    if (!startDate || !endDate) {
      alert('請填寫起始日期和結束日期');
      return;
    }
    onSearch({ startDate, endDate });
  };

  return (
    <div className="bg-white p-4 rounded shadow">
      <h2 className="text-lg font-bold mb-4">特定課税仕入伝票管理入力</h2>
      <div className="mb-4">
        <label htmlFor="startDate" className="block mb-1">起算日付</label>
        <input
          type="date"
          id="startDate"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
          className="border rounded w-full py-2 px-3"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="endDate" className="block mb-1">終了日付</label>
        <input
          type="date"
          id="endDate"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
          className="border rounded w-full py-2 px-3"
        />
      </div>
      <div>
        <label>
          <input type="checkbox" className="mr-2" />
          課税の支出予算科目か税額中の伝票のみ抽出
        </label>
      </div>
      <button
        onClick={handleSearch}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        検索
      </button>
    </div>
  );
};

// Usage example
const App: React.FC = () => {
  const handleSearch = (params: { startDate: string; endDate: string }) => {
    console.log('Search params:', params);
    // Perform search with the params
  };

  return (
    <div className="container mx-auto">
      <TaxSearchForm onSearch={handleSearch} />
    </div>
  );
};

export default App;