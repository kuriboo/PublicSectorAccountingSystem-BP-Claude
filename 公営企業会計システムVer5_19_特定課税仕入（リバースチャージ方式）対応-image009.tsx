import React from 'react';

type TaxWithholdingPersonProps = {
  fromDate: string;
  toDate: string;
  onFromDateChange: (date: string) => void;
  onToDateChange: (date: string) => void;
  canEditDates?: boolean;
  title: string;
  deduction: number;
  addition: number;
  onDeductionChange: (value: number) => void;
  onAdditionChange: (value: number) => void;
  taxAmount: number;
};

const TaxWithholdingPerson: React.FC<TaxWithholdingPersonProps> = ({
  fromDate,
  toDate,
  onFromDateChange,
  onToDateChange,
  canEditDates = true,
  title,
  deduction,
  addition,
  onDeductionChange,
  onAdditionChange,
  taxAmount,
}) => {
  return (
    <div className="border border-gray-300 p-4">
      <h2 className="text-lg font-bold mb-4">{title}</h2>
      <div className="mb-4">
        <label htmlFor="fromDate" className="block mb-1">
          伝票日付
        </label>
        <input
          type="date"
          id="fromDate"
          value={fromDate}
          onChange={(e) => onFromDateChange(e.target.value)}
          disabled={!canEditDates}
          className="border border-gray-300 p-2"
        />
        <span className="mx-2">~</span>
        <input
          type="date"
          id="toDate"
          value={toDate}
          onChange={(e) => onToDateChange(e.target.value)}
          disabled={!canEditDates}
          className="border border-gray-300 p-2"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="deduction" className="block mb-1">
          控除金額
        </label>
        <input
          type="number"
          id="deduction"
          value={deduction}
          onChange={(e) => onDeductionChange(Number(e.target.value))}
          className="border border-gray-300 p-2"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="addition" className="block mb-1">
          税抜金額
        </label>
        <input
          type="number"
          id="addition"
          value={addition}
          onChange={(e) => onAdditionChange(Number(e.target.value))}
          className="border border-gray-300 p-2"
        />
      </div>
      <div>
        <span>消費税額:</span>
        <span className="ml-2">{taxAmount}</span>
      </div>
    </div>
  );
};

// サンプルデータ
const sampleData = {
  fromDate: '2028-03-27',
  toDate: '2028-03-27',
  title: '平成27年 4月',
  deduction: 80000,
  addition: 80000,
  taxAmount: 0,
};

const SampleUsage: React.FC = () => {
  const [data, setData] = React.useState(sampleData);

  const handleFromDateChange = (date: string) => {
    setData((prev) => ({ ...prev, fromDate: date }));
  };

  const handleToDateChange = (date: string) => {
    setData((prev) => ({ ...prev, toDate: date }));
  };

  const handleDeductionChange = (value: number) => {
    setData((prev) => ({ ...prev, deduction: value }));
  };

  const handleAdditionChange = (value: number) => {
    setData((prev) => ({ ...prev, addition: value }));
  };

  return (
    <TaxWithholdingPerson
      fromDate={data.fromDate}
      toDate={data.toDate}
      onFromDateChange={handleFromDateChange}
      onToDateChange={handleToDateChange}
      title={data.title}
      deduction={data.deduction}
      addition={data.addition}
      onDeductionChange={handleDeductionChange}
      onAdditionChange={handleAdditionChange}
      taxAmount={data.taxAmount}
    />
  );
};

export default SampleUsage;