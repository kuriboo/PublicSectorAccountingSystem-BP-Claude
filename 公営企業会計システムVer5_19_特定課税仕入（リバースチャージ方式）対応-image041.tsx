import React from 'react';

// 住所検索コンポーネントの型定義
interface AddressSearchProps {
  defaultPrefecture?: string;
  defaultCity?: string;
  defaultTown?: string;
  onAddressChange?: (prefecture: string, city: string, town: string) => void;
}

// 住所検索コンポーネント
const AddressSearch: React.FC<AddressSearchProps> = ({
  defaultPrefecture = '',
  defaultCity = '',
  defaultTown = '',
  onAddressChange,
}) => {
  const [prefecture, setPrefecture] = React.useState(defaultPrefecture);
  const [city, setCity] = React.useState(defaultCity);
  const [town, setTown] = React.useState(defaultTown);

  // 住所変更時のハンドラ
  const handleAddressChange = () => {
    onAddressChange?.(prefecture, city, town);
  };

  return (
    <div className="flex space-x-4">
      <div>
        <label htmlFor="prefecture">都道府県</label>
        <input
          id="prefecture"
          type="text"
          value={prefecture}
          onChange={(e) => setPrefecture(e.target.value)}
          onBlur={handleAddressChange}
          className="border border-gray-300 rounded px-2 py-1"
        />
      </div>
      <div>
        <label htmlFor="city">市区町村</label>
        <input
          id="city"
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          onBlur={handleAddressChange}
          className="border border-gray-300 rounded px-2 py-1"
        />
      </div>
      <div>
        <label htmlFor="town">町名番地</label>
        <input
          id="town"
          type="text"
          value={town}
          onChange={(e) => setTown(e.target.value)}
          onBlur={handleAddressChange}
          className="border border-gray-300 rounded px-2 py-1"
        />
      </div>
    </div>
  );
};

// 仕入先目区分の型定義
type SupplierCategory = '仕入先目区分' | '細節決裁区分' | '未払計上';

// 仕入先目区分コンポーネントの型定義
interface SupplierCategoryProps {
  value?: SupplierCategory;
  onChange?: (value: SupplierCategory) => void;
}

// 仕入先目区分コンポーネント
const SupplierCategorySelect: React.FC<SupplierCategoryProps> = ({ value, onChange }) => {
  const options: SupplierCategory[] = ['仕入先目区分', '細節決裁区分', '未払計上'];

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onChange?.(e.target.value as SupplierCategory);
  };

  return (
    <select value={value} onChange={handleChange} className="border border-gray-300 rounded px-2 py-1">
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};

// サンプルデータ
const sampleData = {
  defaultPrefecture: '東京都',
  defaultCity: '新宿区',
  defaultTown: '西新宿1-1-1',
  supplierCategory: '仕入先目区分' as SupplierCategory,
};

// 表示用コンポーネント
const SampleComponent: React.FC = () => {
  const [supplierCategory, setSupplierCategory] = React.useState(sampleData.supplierCategory);
  const [bs4Date, setBs4Date] = React.useState('');

  const handleAddressChange = (prefecture: string, city: string, town: string) => {
    console.log('住所変更:', prefecture, city, town);
  };

  return (
    <div>
      <h2>住所検索</h2>
      <AddressSearch
        defaultPrefecture={sampleData.defaultPrefecture}
        defaultCity={sampleData.defaultCity}
        defaultTown={sampleData.defaultTown}
        onAddressChange={handleAddressChange}
      />

      <h2>仕入先目区分</h2>
      <SupplierCategorySelect value={supplierCategory} onChange={setSupplierCategory} />

      <h2>未払計上</h2>
      <div>
        <label htmlFor="bs4Date">補助科目設定</label>
        <input
          id="bs4Date"
          type="text"
          value={bs4Date}
          onChange={(e) => setBs4Date(e.target.value)}
          className="border border-gray-300 rounded px-2 py-1"
        />
      </div>
      <div>BS科目締起算日: {bs4Date || 0}</div>
    </div>
  );
};

export default SampleComponent;