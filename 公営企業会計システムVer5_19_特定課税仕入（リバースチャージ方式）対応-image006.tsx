// TaxWithholding.tsx
import React from 'react';

type TaxWithholdingProps = {
  startDate: string;
  endDate: string;
  dependents: string;
  taxableAmount: number;
  incomeTaxAmount: number;
  inhabitantTaxAmount: number;
};

const TaxWithholding: React.FC<TaxWithholdingProps> = ({
  startDate,
  endDate,
  dependents,
  taxableAmount,
  incomeTaxAmount,
  inhabitantTaxAmount,
}) => {
  return (
    <div className="bg-white p-4 rounded shadow">
      <h2 className="text-lg font-bold mb-4">特定課税仕入伝票管理入力</h2>
      <div className="mb-4">
        <span className="mr-4">伝票日付</span>
        <span className="mr-2">{startDate}</span>
        <span>～</span>
        <span className="ml-2">{endDate}</span>
      </div>
      <div className="mb-4">
        <label htmlFor="dependents" className="mr-2">扶養</label>
        <input type="text" id="dependents" value={dependents} className="border px-2 py-1 rounded" />
      </div>
      <div className="mb-4">
        <span className="mr-4">課税対象額</span>
        <span>{taxableAmount.toLocaleString()}</span>
      </div>
      <div className="mb-4">
        <span className="mr-4">所得税額</span>
        <span>{incomeTaxAmount.toLocaleString()}</span>
      </div>
      <div>
        <span className="mr-4">住民税額</span>
        <span>{inhabitantTaxAmount.toLocaleString()}</span>
      </div>
      <div className="mt-4">
        {/* Add OK, Cancel, and Submit buttons */}
        <button className="bg-blue-500 text-white px-4 py-2 rounded mr-2">OK</button>
        <button className="bg-gray-300 text-gray-700 px-4 py-2 rounded mr-2">Cancel</button>
        <button className="bg-green-500 text-white px-4 py-2 rounded">Submit</button>
      </div>
    </div>
  );
};

export default TaxWithholding;