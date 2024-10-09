import React from 'react';

interface TaskManagementFormProps {
  onSubmit: (formData: FormData) => void;
}

interface FormData {
  startDate: string;
  endDate: string;
  keyword: string;
  responsible: string;
  client: string;
  orderStatus: string[];
}

const TaskManagementForm: React.FC<TaskManagementFormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = React.useState<FormData>({
    startDate: '',
    endDate: '',
    keyword: '',
    responsible: '',
    client: '',
    orderStatus: [],
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData(prevData => ({
      ...prevData,
      orderStatus: checked
        ? [...prevData.orderStatus, name]
        : prevData.orderStatus.filter(status => status !== name),
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-4 rounded-lg shadow-md">
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <label htmlFor="startDate" className="block mb-1">
            伝票日付
          </label>
          <input
            type="date"
            id="startDate"
            name="startDate"
            value={formData.startDate}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md px-2 py-1"
          />
        </div>
        <div>
          <label htmlFor="endDate" className="block mb-1">
            ～
          </label>
          <input
            type="date"
            id="endDate"
            name="endDate"
            value={formData.endDate}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md px-2 py-1"
          />
        </div>
      </div>
      <div className="mb-4">
        <label htmlFor="keyword" className="block mb-1">
          キーワード
        </label>
        <input
          type="text"
          id="keyword"
          name="keyword"
          value={formData.keyword}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-md px-2 py-1"
        />
      </div>
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <label htmlFor="responsible" className="block mb-1">
            責任者
          </label>
          <input
            type="text"
            id="responsible"
            name="responsible"
            value={formData.responsible}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md px-2 py-1"
          />
        </div>
        <div>
          <label htmlFor="client" className="block mb-1">
            得意先
          </label>
          <select
            id="client"
            name="client"
            value={formData.client}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md px-2 py-1"
          >
            <option value="">すべて</option>
            {/* Add client options */}
          </select>
        </div>
      </div>
      <div className="mb-4">
        <label className="block mb-1">伝票種別</label>
        <div className="flex space-x-4">
          <label>
            <input
              type="checkbox"
              name="estimate"
              checked={formData.orderStatus.includes('estimate')}
              onChange={handleCheckboxChange}
              className="mr-1"
            />
            見積
          </label>
          <label>
            <input
              type="checkbox"
              name="order"
              checked={formData.orderStatus.includes('order')}
              onChange={handleCheckboxChange}
              className="mr-1"
            />
            受注
          </label>
          <label>
            <input
              type="checkbox"
              name="delivery"
              checked={formData.orderStatus.includes('delivery')}
              onChange={handleCheckboxChange}
              className="mr-1"
            />
            納品
          </label>
          <label>
            <input
              type="checkbox"
              name="invoice"
              checked={formData.orderStatus.includes('invoice')}
              onChange={handleCheckboxChange}
              className="mr-1"
            />
            請求
          </label>
          <label>
            <input
              type="checkbox"
              name="receipt"
              checked={formData.orderStatus.includes('receipt')}
              onChange={handleCheckboxChange}
              className="mr-1"
            />
            入金
          </label>
        </div>
      </div>
      <div className="text-right">
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md">
          検索
        </button>
      </div>
    </form>
  );
};

// Usage example
const App: React.FC = () => {
  const handleFormSubmit = (formData: FormData) => {
    console.log('Form submitted:', formData);
    // Perform search or other actions with the form data
  };

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-bold mb-4">特定課税仕入伝票管理入力</h1>
      <TaskManagementForm onSubmit={handleFormSubmit} />
    </div>
  );
};

export default App;