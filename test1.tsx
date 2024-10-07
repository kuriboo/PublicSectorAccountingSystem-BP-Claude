```tsx
import React from 'react';

interface FormData {
  prediction1: string;
  prediction1Ratio: number;
  prediction2: string;
  prediction2Ratio: number;
  entryFee: number;
  acquisitionRatio: number;
  payoutRatio: number;
  paymentMethod: 'transfer' | 'cash';
  operationFee: string;
  transferFee: string;
  managementFee: string;
  remark: string;
  venue: string;
  organizer: string;
}

interface BookingFormProps {
  defaultData?: FormData;
  onSubmit: (data: FormData) => void;
}

const BookingForm: React.FC<BookingFormProps> = ({ defaultData, onSubmit }) => {
  const [formData, setFormData] = React.useState<FormData>(defaultData || {
    prediction1: '',
    prediction1Ratio: 0,
    prediction2: '',
    prediction2Ratio: 0,
    entryFee: 0,
    acquisitionRatio: 0,
    payoutRatio: 0,
    paymentMethod: 'transfer',
    operationFee: '',
    transferFee: '',
    managementFee: '',
    remark: '',
    venue: '',
    organizer: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* 予想1 */}
      <div>
        <label htmlFor="prediction1" className="block font-medium text-gray-700">
          予想1
        </label>
        <div className="mt-1 flex">
          <input
            type="text"
            id="prediction1"
            name="prediction1"
            value={formData.prediction1}
            onChange={handleChange}
            className="w-2/3 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          />
          <input
            type="number"
            id="prediction1Ratio"
            name="prediction1Ratio"
            value={formData.prediction1Ratio}
            onChange={handleChange}
            className="w-1/3 ml-2 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
      </div>

      {/* 予想2 */}
      <div>
        <label htmlFor="prediction2" className="block font-medium text-gray-700">
          予想2
        </label>
        <div className="mt-1 flex">
          <input
            type="text"
            id="prediction2"
            name="prediction2"
            value={formData.prediction2}
            onChange={handleChange}
            className="w-2/3 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          />
          <input
            type="number"
            id="prediction2Ratio"
            name="prediction2Ratio"
            value={formData.prediction2Ratio}
            onChange={handleChange}
            className="w-1/3 ml-2 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
      </div>

      {/* 税区分 */}
      <div>
        <label htmlFor="acquisitionRatio" className="block font-medium text-gray-700">
          税区分
        </label>
        <select
          id="acquisitionRatio"
          name="acquisitionRatio"
          value={formData.acquisitionRatio}
          onChange={handleChange}
          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
        >
          <option value={0}>内税</option>
          <option value={8}>外税(8%)</option>
          <option value={10}>外税(10%)</option>
        </select>
      </div>

      {/* 精算基礎税込フラグ */}
      <div>
        <label htmlFor="paymentMethod" className="block font-medium text-gray-700">
          精算基礎税込フラグ
        </label>
        <select
          id="paymentMethod"
          name="paymentMethod"
          value={formData.paymentMethod}
          onChange={handleChange}
          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
        >
          <option value="transfer">振込</option>
          <option value="cash">現金</option>
        </select>
      </div>

      {/* 運営手数料 */}
      <div>
        <label htmlFor="operationFee" className="block font-medium text-gray-700">
          運営手数料
        </label>
        <input
          type="text"
          id="operationFee"
          name="operationFee"
          value={formData.operationFee}
          onChange={handleChange}
          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
        />
      </div>

      {/* 振込手数料 */}
      <div>
        <label htmlFor="transferFee" className="block font-medium text-gray-700">
          振込手数料
        </label>
        <input
          type="text"
          id="transferFee"
          name="transferFee"
          value={formData.transferFee}
          onChange={handleChange}
          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
        />
      </div>

      {/* 事業料 */}
      <div>
        <label htmlFor="managementFee" className="block font-medium text-gray-700">
          事業料
        </label>
        <input
          type="text"
          id="managementFee"
          name="managementFee"
          value={formData.managementFee}
          onChange={handleChange}
          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
        />
      </div>

      {/* 備考 */}
      <div>
        <label htmlFor="remark" className="block font-medium text-gray-700">
          備考
        </label>
        <input
          type="text"
          id="remark"
          name="remark"
          value={formData.remark}
          onChange={handleChange}
          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
        />
      </div>

      <button
        type="submit"
        className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        予約する
      </button>
    </form>
  );
};

export default BookingForm;
```