import React from 'react';

interface FormData {
  taxCategory: string;
  taxRate: number;
  collectionCategory: string;
  entryCategory: string;
  consumptionTaxFlag: boolean;
  basicRate: string;
  reducedRate: string;
  departmentCode: string;
  accountTitle: string;
  subAccountTitle: string;
}

interface FormProps {
  formData: FormData;
  onInputChange: (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
}

const Form: React.FC<FormProps> = ({ formData, onInputChange }) => {
  return (
    <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="taxCategory">
          税区分
        </label>
        <div className="relative">
          <select
            className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
            id="taxCategory"
            name="taxCategory"
            value={formData.taxCategory}
            onChange={onInputChange}
          >
            <option value="消費税1">消費税1</option>
            {/* Add more tax category options */}
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
          </div>
        </div>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="taxRate">
          消費税
        </label>
        <div className="relative">
          <input
            className="appearance-none block w-full bg-white text-gray-700 border border-gray-400 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            id="taxRate"
            name="taxRate"
            type="number"
            value={formData.taxRate}
            onChange={onInputChange}
          />
          <div className="absolute inset-y-0 right-0 flex items-center px-4 text-gray-700">
            %
          </div>
        </div>
      </div>
      {/* Implement other form fields similarly */}
      <div className="flex items-center justify-between">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
          事業科目
        </button>
      </div>
    </div>
  );
};

// Sample usage
const SampleFormData: FormData = {
  taxCategory: '消費税1',
  taxRate: 10,
  collectionCategory: '2',
  entryCategory: '経常',
  consumptionTaxFlag: false,
  basicRate: '0000001',
  reducedRate: '0000001',
  departmentCode: '',
  accountTitle: '',
  subAccountTitle: '',
};

const SampleForm: React.FC = () => {
  const [formData, setFormData] = React.useState<FormData>(SampleFormData);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = event.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  return <Form formData={formData} onInputChange={handleInputChange} />;
};

export default SampleForm;