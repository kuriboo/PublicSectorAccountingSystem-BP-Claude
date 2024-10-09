import React from 'react';

type ReservationData = {
  reservationDate: string;
  reservationNumber: string;
  branchOfficeCode: string;
  branchOfficeName: string;
  customerNumber: string;
  customerName: string;
  sumPrice: number;
  consumptionTax: number;
  preTaxPrice: number;
  discountAmount: number;
  paymentAmount: number;
  changeAmount: number;
  taxRate: number;
  discountRate: number;
  roundDown: number;
  memo: string;
};

type ReservationFormProps = {
  data: ReservationData;
  onSubmit: (data: ReservationData) => void;
};

const ReservationForm: React.FC<ReservationFormProps> = ({ data, onSubmit }) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(data);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="reservationDate">
          予約日
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="reservationDate"
          type="text"
          value={data.reservationDate}
          readOnly
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="reservationNumber">
          予約番号
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="reservationNumber"
          type="text"
          value={data.reservationNumber}
          readOnly
        />
      </div>
      {/* 他のフィールドも同様に実装 */}
      <div className="flex items-center justify-between">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          確定
        </button>
        <button
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="button"
        >
          キャンセル
        </button>
      </div>
    </form>
  );
};

// サンプルデータを使用した表示用コンポーネント
const ReservationFormSample: React.FC = () => {
  const sampleData: ReservationData = {
    reservationDate: '2023/01/13',
    reservationNumber: '0001',
    branchOfficeCode: '001',
    branchOfficeName: '日吉店',
    customerNumber: '0001',
    customerName: '電子書籍',
    sumPrice: 0,
    consumptionTax: 1000000,
    preTaxPrice: -1000000,
    discountAmount: -100000,
    paymentAmount: -100000,
    changeAmount: 0,
    taxRate: 0.1,
    discountRate: 0,
    roundDown: 0,
    memo: '',
  };

  const handleSubmit = (data: ReservationData) => {
    console.log('Submitted data:', data);
  };

  return <ReservationForm data={sampleData} onSubmit={handleSubmit} />;
};

export default ReservationFormSample;