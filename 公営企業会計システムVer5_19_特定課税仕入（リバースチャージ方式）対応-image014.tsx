// 振替入出金検索コンポーネント
import React from 'react';

// 振替入出金検索フォームの型定義
interface TransferSearchFormProps {
  onSubmit: (formData: TransferSearchFormData) => void;
}

// 振替入出金検索フォームの入力データの型定義
interface TransferSearchFormData {
  transferType: string;
  startDate: string;
  endDate: string;
  reportType: string;
  minAmount: number;
  maxAmount: number;
  note: string;
}

// 振替入出金検索フォームコンポーネント
const TransferSearchForm: React.FC<TransferSearchFormProps> = ({ onSubmit }) => {
  // フォームの状態管理
  const [formData, setFormData] = React.useState<TransferSearchFormData>({
    transferType: '振替',
    startDate: '',
    endDate: '',
    reportType: '予算科目',
    minAmount: 0,
    maxAmount: 999999999999,
    note: '',
  });

  // フォーム入力変更時のハンドラ
  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = event.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  // フォーム送信時のハンドラ
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">
          振替条件設定
        </label>
        <div className="flex items-center mb-2">
          <input
            type="radio"
            id="transfer"
            name="transferType"
            value="振替"
            checked={formData.transferType === '振替'}
            onChange={handleChange}
            className="mr-2"
          />
          <label htmlFor="transfer" className="text-gray-700">
            振替
          </label>
        </div>
        <div className="flex items-center">
          <input
            type="radio"
            id="transfer-schedule"
            name="transferType"
            value="振替予定"
            checked={formData.transferType === '振替予定'}
            onChange={handleChange}
            className="mr-2"
          />
          <label htmlFor="transfer-schedule" className="text-gray-700">
            振替予定
          </label>
        </div>
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">
          振替日
        </label>
        <div className="flex items-center">
          <input
            type="date"
            name="startDate"
            value={formData.startDate}
            onChange={handleChange}
            className="border p-2 rounded mr-2"
          />
          <span className="mr-2">～</span>
          <input
            type="date"
            name="endDate"
            value={formData.endDate}
            onChange={handleChange}
            className="border p-2 rounded"
          />
        </div>
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">
          集計条件
        </label>
        <div className="flex items-center mb-2">
          <input
            type="radio"
            id="budget-item"
            name="reportType"
            value="予算科目"
            checked={formData.reportType === '予算科目'}
            onChange={handleChange}
            className="mr-2"
          />
          <label htmlFor="budget-item" className="text-gray-700">
            予算科目
          </label>
        </div>
        <div className="flex items-center">
          <input
            type="radio"
            id="detail"
            name="reportType"
            value="明細"
            checked={formData.reportType === '明細'}
            onChange={handleChange}
            className="mr-2"
          />
          <label htmlFor="detail" className="text-gray-700">
            明細
          </label>
        </div>
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">
          振替金額
        </label>
        <div className="flex items-center">
          <input
            type="number"
            name="minAmount"
            min={0}
            max={formData.maxAmount}
            value={formData.minAmount}
            onChange={handleChange}
            className="border p-2 rounded mr-2"
          />
          <span className="mr-2">～</span>
          <input
            type="number"
            name="maxAmount"
            min={formData.minAmount}
            max={999999999999}
            value={formData.maxAmount}
            onChange={handleChange}
            className="border p-2 rounded"
          />
        </div>
      </div>

      <div className="mb-4">
        <label htmlFor="note" className="block text-gray-700 font-bold mb-2">
          摘要
        </label>
        <input
          type="text"
          id="note"
          name="note"
          value={formData.note}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />
      </div>

      <div className="text-center">
        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          表示
        </button>
      </div>
    </form>
  );
};

// 振替入出金検索結果の型定義
interface TransferSearchResultProps {
  results: TransferSearchResult[];
}

// 振替入出金検索結果の型定義
interface TransferSearchResult {
  date: string;
  description: string;
  amount: number;
}

// 振替入出金検索結果コンポーネント
const TransferSearchResult: React.FC<TransferSearchResultProps> = ({ results }) => {
  return (
    <table className="w-full border-collapse">
      <thead>
        <tr className="bg-gray-200">
          <th className="border p-2">振替日</th>
          <th className="border p-2">振替金額</th>
          <th className="border p-2">摘要</th>
        </tr>
      </thead>
      <tbody>
        {results.map((result, index) => (
          <tr key={index} className={index % 2 === 0 ? 'bg-gray-100' : ''}>
            <td className="border p-2">{result.date}</td>
            <td className="border p-2 text-right">{result.amount.toLocaleString()}</td>
            <td className="border p-2">{result.description}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

// サンプルデータ
const sampleResults: TransferSearchResult[] = [
  { date: '2016-03-20', description: '振込手数料', amount: 800 },
  { date: '2016-03-20', description: 'リース6%、その他の投資', amount: 10000 },
  { date: '2016-03-20', description: '振分 6% その他の投資', amount: 800 },
  { date: '2016-03-24', description: '信販税に振替', amount: 60 },
  { date: '2016-03-25', description: '振替入力', amount: 1000 },
  { date: '2016-03-25', description: '電子書籍購入費 消費税分', amount: 8000 },
  { date: '2016-03-25', description: '電子書籍購入 消費税分', amount: 800 },
  { date: '2016-03-27', description: '電子書籍 消費税分', amount: 80000 },
];

// 使用例
const TransferSearchExample: React.FC = () => {
  const handleSearch = (formData: TransferSearchFormData) => {
    // 検索処理を実装
    console.log('検索条件:', formData);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">振替入出金検索</h1>
      <TransferSearchForm onSubmit={handleSearch} />
      <div className="mt-8">
        <TransferSearchResult results={sampleResults} />
      </div>
    </div>
  );
};

export default TransferSearchExample;