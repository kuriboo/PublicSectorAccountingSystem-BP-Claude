import React from 'react';

// 特定課税仕入伝票管理入力用のコンポーネントの型定義
interface TaxInvoiceInputProps {
  onSubmit: (data: TaxInvoiceInputData) => void;
}

// 特定課税仕入伝票管理入力用のデータの型定義
interface TaxInvoiceInputData {
  taxCategory: string;
  orderDate: string;
  deliveryDate: string;
  checkDeductionLimit: boolean;
  taxRate: number;
  totalAmount: number;
  note: string;
}

// 特定課税仕入伝票管理入力用のコンポーネント
const TaxInvoiceInput: React.FC<TaxInvoiceInputProps> = ({ onSubmit }) => {
  const [data, setData] = React.useState<TaxInvoiceInputData>({
    taxCategory: '',
    orderDate: '',
    deliveryDate: '',
    checkDeductionLimit: false,
    taxRate: 0,
    totalAmount: 0,
    note: '',
  });

  // フォーム送信時の処理
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(data);
  };

  // 入力値変更時の処理
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === 'checkbox' ? checked : value;
    setData((prevData) => ({ ...prevData, [name]: newValue }));
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2" htmlFor="taxCategory">
          課税区分
        </label>
        <select
          id="taxCategory"
          name="taxCategory"
          value={data.taxCategory}
          onChange={handleChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          required
        >
          <option value="">選択してください</option>
          <option value="課税">課税</option>
          <option value="非課税">非課税</option>
        </select>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2" htmlFor="orderDate">
          伝票日付
        </label>
        <input
          type="date"
          id="orderDate"
          name="orderDate"
          value={data.orderDate}
          onChange={handleChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2" htmlFor="deliveryDate">
          仕入年月日
        </label>
        <input
          type="date"
          id="deliveryDate"
          name="deliveryDate"
          value={data.deliveryDate}
          onChange={handleChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">
          <input
            type="checkbox"
            name="checkDeductionLimit"
            checked={data.checkDeductionLimit}
            onChange={handleChange}
            className="mr-2 leading-tight"
          />
          <span className="text-sm">課税の支出予算額行から税額中の伝票のみ抽出</span>
        </label>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2" htmlFor="taxRate">
          税率
        </label>
        <select
          id="taxRate"
          name="taxRate"
          value={data.taxRate}
          onChange={handleChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        >
          <option value={0}>選択してください</option>
          <option value={5}>5%</option>
          <option value={8}>8%</option>
          <option value={10}>10%</option>
        </select>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2" htmlFor="totalAmount">
          合計金額
        </label>
        <input
          type="number"
          id="totalAmount"
          name="totalAmount"
          value={data.totalAmount}
          onChange={handleChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2" htmlFor="note">
          摘要
        </label>
        <textarea
          id="note"
          name="note"
          value={data.note}
          onChange={handleChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        ></textarea>
      </div>
      <div className="flex items-center justify-between">
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          実行
        </button>
      </div>
    </form>
  );
};

// サンプルデータ
const sampleData: TaxInvoiceInputData = {
  taxCategory: '課税',
  orderDate: '2023-03-27',
  deliveryDate: '2023-03-27',
  checkDeductionLimit: true,
  taxRate: 10,
  totalAmount: 1000000,
  note: '電子書籍購入',
};

// 表示用のコンポーネント
const App: React.FC = () => {
  const handleSubmit = (data: TaxInvoiceInputData) => {
    console.log(data);
  };

  return (
    <div className="container mx-auto">
      <h1 className="text-2xl font-bold mb-4">特定課税仕入伝票管理入力</h1>
      <TaxInvoiceInput onSubmit={handleSubmit} />
      <h2 className="text-xl font-bold mt-8 mb-4">サンプルデータ</h2>
      <pre className="bg-gray-100 p-4 rounded">{JSON.stringify(sampleData, null, 2)}</pre>
    </div>
  );
};

export default App;