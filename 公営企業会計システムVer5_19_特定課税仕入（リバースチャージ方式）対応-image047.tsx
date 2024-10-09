import React from 'react';

interface JutyukenInputProps {
  projectCode?: string;
  syozokuCode?: string;
  eigyoCode?: string;
  kigyo?: string;
  selectedKokyaku?: string;
  handleProjectCodeChange?: (value: string) => void;
  handleSyozokuCodeChange?: (value: string) => void;
  handleEigyoCodeChange?: (value: string) => void;
  handleKigyoChange?: (value: string) => void;
  handleKokyakuChange?: (value: string) => void;
}

const JutyukenInput: React.FC<JutyukenInputProps> = ({
  projectCode = '002010113',
  syozokuCode = '0001',
  eigyoCode = '0001',
  kigyo = '',
  selectedKokyaku = '',
  handleProjectCodeChange,
  handleSyozokuCodeChange,
  handleEigyoCodeChange,
  handleKigyoChange,
  handleKokyakuChange,
}) => {
  return (
    <div className="bg-white p-4 rounded shadow">
      <div className="mb-4">
        <label htmlFor="projectCode" className="block mb-2 font-bold text-gray-700">
          予算科目
        </label>
        <div className="flex items-center">
          <input
            type="text"
            id="projectCode"
            className="border border-gray-300 rounded py-2 px-3 w-full"
            value={projectCode}
            onChange={(e) => handleProjectCodeChange?.(e.target.value)}
          />
          <span className="ml-2">〇〇事業費</span>
        </div>
      </div>

      <div className="mb-4">
        <label htmlFor="syozokuCode" className="block mb-2 font-bold text-gray-700">
          予算節
        </label>
        <div className="flex items-center">
          <input
            type="text"
            id="syozokuCode"
            className="border border-gray-300 rounded py-2 px-3 w-full"
            value={syozokuCode}
            onChange={(e) => handleSyozokuCodeChange?.(e.target.value)}
          />
          <span className="ml-2">印刷製本費</span>
        </div>
      </div>

      <div className="mb-4">
        <label htmlFor="eigyoCode" className="block mb-2 font-bold text-gray-700">
          予算細節
        </label>
        <div className="flex items-center">
          <input
            type="text"
            id="eigyoCode"
            className="border border-gray-300 rounded py-2 px-3 w-full"
            value={eigyoCode}
            onChange={(e) => handleEigyoCodeChange?.(e.target.value)}
          />
          <span className="ml-2">電子書籍費</span>
          <button className="ml-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded">
            科目検索
          </button>
        </div>
      </div>

      <div className="mb-4">
        <label htmlFor="kigyo" className="block mb-2 font-bold text-gray-700">
          税区分
        </label>
        <div className="relative">
          <select
            id="kigyo"
            className="block appearance-none w-full border border-gray-300 rounded py-2 px-3 leading-tight focus:outline-none"
            value={kigyo}
            onChange={(e) => handleKigyoChange?.(e.target.value)}
          >
            <option value="">課税</option>
            {/* Add more options as needed */}
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <svg className="fill-current h-4 w-4" viewBox="0 0 20 20">
              <path d="M10 12l-6-6h12z" />
            </svg>
          </div>
        </div>
      </div>

      <div className="mb-4">
        <label htmlFor="kokyaku" className="block mb-2 font-bold text-gray-700">
          取入区分
        </label>
        <input
          type="text"
          id="kokyaku"
          className="border border-gray-300 rounded py-2 px-3 w-full"
          value={selectedKokyaku}
          onChange={(e) => handleKokyakuChange?.(e.target.value)}
        />
      </div>

      {/* Tax calculation section */}
      <div className="grid grid-cols-2 gap-4">
        <div>
          <p className="font-bold">予算残金額</p>
          <p>1,001,000</p>
        </div>
        <div>
          <p className="font-bold">前</p>
          <p>0</p>
        </div>
        <div>
          <p className="font-bold">予算現額</p>
          <p>1,001,000</p>
        </div>
        <div>
          <p className="font-bold">負担累計</p>
          <p>1,001,000</p>
        </div>
        <div>
          <p className="font-bold">負担残額</p>
          <p>-1,001,000</p>
        </div>
        <div>
          <p className="font-bold">予定累計</p>
          <p>0</p>
        </div>
        <div>
          <p className="font-bold">予定残額</p>
          <p>-1,001,000</p>
        </div>
      </div>

      {/* Amount fields */}
      <div className="mb-4">
        <label htmlFor="amount" className="block mb-2 font-bold text-gray-700">
          決定額
        </label>
        <input
          type="text"
          id="amount"
          className="border border-gray-300 rounded py-2 px-3 w-full"
          defaultValue="1,000,000"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="taxAmount" className="block mb-2 font-bold text-gray-700">
          税抜額
        </label>
        <input
          type="text"
          id="taxAmount"
          className="border border-gray-300 rounded py-2 px-3 w-full"
          defaultValue="925,924"
        />
      </div>

      {/* Tax calculation */}
      <div className="mb-4 grid grid-cols-4 gap-4 items-center">
        <label htmlFor="taxRate" className="font-bold text-gray-700">
          消費税率
        </label>
        <div className="col-span-2">
          <input
            type="text"
            id="taxRate"
            className="border border-gray-300 rounded py-2 px-3 w-full"
            defaultValue="8"
          />
        </div>
        <span className="text-right">%</span>
      </div>

      <div className="mb-4 grid grid-cols-4 gap-4 items-center">
        <label htmlFor="taxAmount2" className="font-bold text-gray-700">
          消費税額
        </label>
        <div className="col-span-3">
          <input
            type="text"
            id="taxAmount2"
            className="border border-gray-300 rounded py-2 px-3 w-full"
            defaultValue="74,074"
          />
        </div>
      </div>

      {/* Other fields */}
      <div className="mb-4">
        <label htmlFor="otherTax" className="block mb-2 font-bold text-gray-700">
          他税率
        </label>
        <div className="grid grid-cols-6 gap-4">
          <input
            type="text"
            id="otherTax"
            className="col-span-3 border border-gray-300 rounded py-2 px-3"
            defaultValue="0.00"
          />
          <span className="col-span-1 text-center">%</span>
          <input
            type="text"
            id="otherTaxAmount"
            className="col-span-2 border border-gray-300 rounded py-2 px-3"
            defaultValue="0"
          />
        </div>
      </div>

      <div className="mb-4">
        <label htmlFor="note" className="block mb-2 font-bold text-gray-700">
          摘要
        </label>
        <input type="text" id="note" className="border border-gray-300 rounded py-2 px-3 w-full" />
      </div>

      <div className="flex justify-end">
        <button
          type="button"
          className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-2 px-4 rounded mr-2"
        >
          キャンセル
        </button>
        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          OK
        </button>
      </div>
    </div>
  );
};

export default JutyukenInput;

// Example usage
const App: React.FC = () => {
  const handleProjectCodeChange = (value: string) => {
    console.log('Project Code:', value);
  };

  const handleSyozokuCodeChange = (value: string) => {
    console.log('Syozoku Code:', value);
  };

  const handleEigyoCodeChange = (value: string) => {
    console.log('Eigyo Code:', value);
  };

  const handleKigyoChange = (value: string) => {
    console.log('Kigyo:', value);
  };

  const handleKokyakuChange = (value: string) => {
    console.log('Kokyaku:', value);
  };

  return (
    <div className="container mx-auto">
      <h1 className="text-2xl font-bold mb-4">Jutyuken Input Example</h1>
      <JutyukenInput
        handleProjectCodeChange={handleProjectCodeChange}
        handleSyozokuCodeChange={handleSyozokuCodeChange}
        handleEigyoCodeChange={handleEigyoCodeChange}
        handleKigyoChange={handleKigyoChange}
        handleKokyakuChange={handleKokyakuChange}
      />
    </div>
  );
};