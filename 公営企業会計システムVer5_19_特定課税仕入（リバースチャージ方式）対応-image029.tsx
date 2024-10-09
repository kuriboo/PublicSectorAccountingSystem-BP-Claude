import React from 'react';

interface TaxReportFormProps {
  onSubmit: (data: { fiscalYear: string; taxPaid: number; taxUnpaid: number; totalTax: number; }) => void;
}

const TaxReportForm: React.FC<TaxReportFormProps> = ({ onSubmit }) => {
  const [fiscalYear, setFiscalYear] = React.useState('');
  const [taxPaid, setTaxPaid] = React.useState(0);
  const [taxUnpaid, setTaxUnpaid] = React.useState(0);
  const [totalTax, setTotalTax] = React.useState(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ fiscalYear, taxPaid, taxUnpaid, totalTax });
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="fiscalYear">
          会計年度
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="fiscalYear"
          type="text"
          placeholder="年_月_日"
          value={fiscalYear}
          onChange={(e) => setFiscalYear(e.target.value)}
        />
      </div>
      <div className="mb-6">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="taxPaid">
          納税金額
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          id="taxPaid"
          type="number"
          value={taxPaid}
          onChange={(e) => setTaxPaid(Number(e.target.value))}
        />
      </div>
      <div className="mb-6">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="taxUnpaid">
          税務未納
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          id="taxUnpaid"
          type="number"
          value={taxUnpaid}
          onChange={(e) => setTaxUnpaid(Number(e.target.value))}
        />
      </div>
      <div className="mb-6">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="totalTax">
          消費税額
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          id="totalTax"
          type="number"
          value={totalTax}
          onChange={(e) => setTotalTax(Number(e.target.value))}
        />
      </div>
      <div className="flex items-center justify-between">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          OK
        </button>
        <button
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="button"
        >
          クリア
        </button>
        <button
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="button"
        >
          キャンセル
        </button>
      </div>
    </form>
  );
};

// Example usage
const TaxReportPage: React.FC = () => {
  const handleSubmit = (data: { fiscalYear: string; taxPaid: number; taxUnpaid: number; totalTax: number; }) => {
    console.log(data);
    // Handle form submission, e.g., send data to server
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">消費税申告書</h1>
      <TaxReportForm onSubmit={handleSubmit} />
    </div>
  );
};

export default TaxReportPage;