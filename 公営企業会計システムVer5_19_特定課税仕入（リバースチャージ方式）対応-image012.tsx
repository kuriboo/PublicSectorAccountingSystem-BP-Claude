import React from 'react';

interface SearchFormProps {
  onSubmit: (formData: FormData) => void;
}

interface FormData {
  fiscalYear: string;
  dateRange: {
    start: string;
    end: string;
  };
  accountType: '予算科目' | '仕訳科目';
  accountCode: string;
  accountName: string;
  amountRange: {
    min: number;
    max: number;
  };
}

const SearchForm: React.FC<SearchFormProps> = ({ onSubmit }) => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData: FormData = {
      fiscalYear: form.fiscalYear.value,
      dateRange: {
        start: form.startDate.value,
        end: form.endDate.value,
      },
      accountType: form.accountType.value as '予算科目' | '仕訳科目',
      accountCode: form.accountCode.value,
      accountName: form.accountName.value,
      amountRange: {
        min: parseInt(form.minAmount.value, 10) || 0,
        max: parseInt(form.maxAmount.value, 10) || 999999999999,
      },
    };
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-4 rounded shadow">
      <div className="mb-4">
        <label htmlFor="fiscalYear" className="block mb-2">
          検索条件設定
        </label>
        <input
          type="text"
          id="fiscalYear"
          name="fiscalYear"
          className="w-full border border-gray-300 p-2 rounded"
          defaultValue="平成27 年度"
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2">振替番号</label>
        <div className="flex space-x-2">
          <input
            type="radio"
            id="budgetAccount"
            name="accountType"
            value="予算科目"
            defaultChecked
          />
          <label htmlFor="budgetAccount">予算科目</label>
          <input
            type="radio"
            id="journalAccount"
            name="accountType"
            value="仕訳科目"
          />
          <label htmlFor="journalAccount">仕訳科目</label>
        </div>
      </div>
      <div className="mb-4 grid grid-cols-2 gap-4">
        <div>
          <label htmlFor="startDate" className="block mb-2">
            振替日
          </label>
          <input
            type="text"
            id="startDate"
            name="startDate"
            className="w-full border border-gray-300 p-2 rounded"
            defaultValue="平成28年06月27日"
          />
        </div>
        <div>
          <label htmlFor="endDate" className="block mb-2">
            〜
          </label>
          <input
            type="text"
            id="endDate"
            name="endDate"
            className="w-full border border-gray-300 p-2 rounded"
            defaultValue="平成28年06月27日"
          />
        </div>
      </div>
      <div className="mb-4">
        <label htmlFor="accountCode" className="block mb-2">
          科目CD
        </label>
        <input
          type="text"
          id="accountCode"
          name="accountCode"
          className="w-full border border-gray-300 p-2 rounded"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="accountName" className="block mb-2">
          摘要
        </label>
        <input
          type="text"
          id="accountName"
          name="accountName"
          className="w-full border border-gray-300 p-2 rounded"
        />
      </div>
      <div className="mb-4 flex space-x-2 items-center">
        <label htmlFor="minAmount" className="block mb-2">
          振替金額
        </label>
        <input
          type="number"
          id="minAmount"
          name="minAmount"
          className="border border-gray-300 p-2 rounded"
          defaultValue={0}
        />
        <span>〜</span>
        <input
          type="number"
          id="maxAmount"
          name="maxAmount"
          className="border border-gray-300 p-2 rounded"
          defaultValue={999999999999}
        />
      </div>
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        表示
      </button>
    </form>
  );
};

export default SearchForm;

// Example usage
const ExamplePage: React.FC = () => {
  const handleSubmit = (formData: FormData) => {
    console.log(formData);
    // Perform search based on form data
  };

  return (
    <div className="container mx-auto">
      <h1 className="text-2xl font-bold mb-4">検索条件</h1>
      <SearchForm onSubmit={handleSubmit} />
    </div>
  );
};