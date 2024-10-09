import React from 'react';

// 振替入力フォームのプロパティ型定義
type TransferFormProps = {
  date: string;
  transferDate: string;
  note: string;
  debitAccount: string;
  debitSubAccount: string;
  creditAccount: string;
  creditSubAccount: string;
  tax: number;
  taxAmount: number;
  amount: number;
  onSubmit: (data: TransferFormData) => void;
};

// 振替入力フォームの入力データ型定義
type TransferFormData = {
  date: string;
  transferDate: string;
  note: string;
  debitAccount: string;
  debitSubAccount: string;
  creditAccount: string;
  creditSubAccount: string;
  tax: number;
  taxAmount: number;
  amount: number;
};

// 振替入力フォームコンポーネント
const TransferForm: React.FC<TransferFormProps> = ({
  date,
  transferDate,
  note,
  debitAccount,
  debitSubAccount,
  creditAccount,
  creditSubAccount,
  tax,
  taxAmount,
  amount,
  onSubmit,
}) => {
  // フォーム送信ハンドラ
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data: TransferFormData = {
      date,
      transferDate,
      note,
      debitAccount,
      debitSubAccount,
      creditAccount,
      creditSubAccount,
      tax,
      taxAmount,
      amount,
    };
    onSubmit(data);
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 bg-white rounded shadow">
      <div className="mb-4">
        <label htmlFor="date" className="block mb-1 font-bold">日付</label>
        <input type="date" id="date" value={date} className="w-full px-2 py-1 border rounded" readOnly />
      </div>
      <div className="mb-4">
        <label htmlFor="transferDate" className="block mb-1 font-bold">振替日付</label>
        <input type="date" id="transferDate" value={transferDate} className="w-full px-2 py-1 border rounded" required />
      </div>
      <div className="mb-4">
        <label htmlFor="note" className="block mb-1 font-bold">摘要</label>
        <input type="text" id="note" value={note} className="w-full px-2 py-1 border rounded" />
      </div>
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <label htmlFor="debitAccount" className="block mb-1 font-bold">借方科目</label>
          <input type="text" id="debitAccount" value={debitAccount} className="w-full px-2 py-1 border rounded" required />
        </div>
        <div>
          <label htmlFor="debitSubAccount" className="block mb-1 font-bold">借方補助科目</label>
          <input type="text" id="debitSubAccount" value={debitSubAccount} className="w-full px-2 py-1 border rounded" required />
        </div>
        <div>
          <label htmlFor="creditAccount" className="block mb-1 font-bold">貸方科目</label>
          <input type="text" id="creditAccount" value={creditAccount} className="w-full px-2 py-1 border rounded" required />
        </div>
        <div>
          <label htmlFor="creditSubAccount" className="block mb-1 font-bold">貸方補助科目</label>
          <input type="text" id="creditSubAccount" value={creditSubAccount} className="w-full px-2 py-1 border rounded" required />
        </div>
      </div>
      <div className="mb-4">
        <label htmlFor="tax" className="block mb-1 font-bold">消費税率</label>
        <input type="number" id="tax" value={tax} min="0" className="w-full px-2 py-1 border rounded" required />
      </div>
      <div className="mb-4">
        <label htmlFor="taxAmount" className="block mb-1 font-bold">税抜金額</label>
        <input type="number" id="taxAmount" value={taxAmount} min="0" className="w-full px-2 py-1 border rounded" required />
      </div>
      <div className="mb-4">
        <label htmlFor="amount" className="block mb-1 font-bold">振替金額</label>
        <input type="number" id="amount" value={amount} min="0" className="w-full px-2 py-1 border rounded" required />
      </div>
      <button type="submit" className="px-4 py-2 text-white bg-blue-500 rounded">OK</button>
    </form>
  );
};

// 使用例
const TransferFormExample: React.FC = () => {
  const handleSubmit = (data: TransferFormData) => {
    console.log(data);
    // ここで送信されたデータを処理する
  };

  return (
    <TransferForm
      date="2023-03-27"
      transferDate="2023-03-28"
      note="備考サンプル"
      debitAccount="現金"
      debitSubAccount="現金1"
      creditAccount="売掛金"
      creditSubAccount="売掛金A"
      tax={10}
      taxAmount={8000}
      amount={8800}
      onSubmit={handleSubmit}
    />
  );
};

export default TransferForm;