import React from 'react';
import { format } from 'date-fns';

// 特定課税仕入伝票管理入力フォームのプロパティ型定義
type TaxInvoiceFormProps = {
  onSubmit: (data: TaxInvoiceData) => void;
};

// 特定課税仕入伝票データの型定義
type TaxInvoiceData = {
  date: Date;
  type: '課税' | '計上' | '削除';
  number: string;
  registrationDate: Date;
  expirationDate: Date;
  includeExpiration: boolean;
  account: string;
  category: string;
  details: string;
  taxRate: number;
  taxAmount: number;
  total: number;
  memo: string;
};

// 特定課税仕入伝票管理入力フォームコンポーネント
const TaxInvoiceForm: React.FC<TaxInvoiceFormProps> = ({ onSubmit }) => {
  // フォームの状態管理
  const [formData, setFormData] = React.useState<TaxInvoiceData>({
    date: new Date(),
    type: '課税',
    number: '',
    registrationDate: new Date(),
    expirationDate: new Date(),
    includeExpiration: false,
    account: '',
    category: '',
    details: '',
    taxRate: 0,
    taxAmount: 0,
    total: 0,
    memo: '',
  });

  // フォーム送信時の処理
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 bg-white rounded shadow">
      <div className="mb-4">
        <label htmlFor="date" className="block mb-1">伝票日付</label>
        <input
          type="date"
          id="date"
          value={format(formData.date, 'yyyy-MM-dd')}
          onChange={(e) => setFormData({ ...formData, date: new Date(e.target.value) })}
          className="w-full px-2 py-1 border rounded"
          required
        />
      </div>
      {/* 他のフォーム入力欄も同様に実装 */}
      <button type="submit" className="px-4 py-2 text-white bg-blue-500 rounded">
        登録
      </button>
    </form>
  );
};

// サンプルデータ
const sampleData: TaxInvoiceData = {
  date: new Date('2016/03/27'),
  type: '課税',
  number: '1000000',
  registrationDate: new Date('2016/03/01'),
  expirationDate: new Date('2016/03/31'),
  includeExpiration: true,
  account: '外注費',
  category: '生産原価',
  details: '電気工事',
  taxRate: 8,
  taxAmount: 10000,
  total: 110000,
  memo: '',
};

// サンプル表示用コンポーネント
const TaxInvoiceSample: React.FC = () => {
  const handleSubmit = (data: TaxInvoiceData) => {
    console.log(data);
  };

  return (
    <div>
      <h1>特定課税仕入伝票管理入力フォーム</h1>
      <TaxInvoiceForm onSubmit={handleSubmit} />
      <h2>サンプルデータ</h2>
      <pre>{JSON.stringify(sampleData, null, 2)}</pre>
    </div>
  );
};

export default TaxInvoiceSample;