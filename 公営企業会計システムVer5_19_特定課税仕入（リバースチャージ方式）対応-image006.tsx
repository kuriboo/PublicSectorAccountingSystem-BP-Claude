import React from 'react';

interface TaxWithholdingFormProps {
  onSubmit: (data: TaxWithholdingData) => void;
}

interface TaxWithholdingData {
  taisyoku: 'kotei' | 'nensyu' | 'kyuyo';
  startDate: string;
  endDate: string;
  excludeBonus: boolean;
  incomeTaxAmount: number;
  residentTaxAmount: number;
  totalWithholdingAmount: number;
}

const TaxWithholdingForm: React.FC<TaxWithholdingFormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = React.useState<TaxWithholdingData>({
    taisyoku: 'kotei',
    startDate: '',
    endDate: '',
    excludeBonus: false,
    incomeTaxAmount: 0,
    residentTaxAmount: 0,
    totalWithholdingAmount: 0,
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = event.target;
    const newValue = type === 'checkbox' ? checked : value;
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: newValue,
    }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* 退職区分 */}
      <div>
        <label>
          <input
            type="radio"
            name="taisyoku"
            value="kotei"
            checked={formData.taisyoku === 'kotei'}
            onChange={handleChange}
          />
          定額
        </label>
        <label>
          <input
            type="radio"
            name="taisyoku"
            value="nensyu"
            checked={formData.taisyoku === 'nensyu'}
            onChange={handleChange}
          />
          年度
        </label>
        <label>
          <input
            type="radio"
            name="taisyoku"
            value="kyuyo"
            checked={formData.taisyoku === 'kyuyo'}
            onChange={handleChange}
          />
          給与
        </label>
      </div>

      {/* 検索 */}
      <div>
        <label>
          伝票日付
          <input
            type="date"
            name="startDate"
            value={formData.startDate}
            onChange={handleChange}
          />
          ～
          <input
            type="date"
            name="endDate"
            value={formData.endDate}
            onChange={handleChange}
          />
        </label>
        <label>
          <input
            type="checkbox"
            name="excludeBonus"
            checked={formData.excludeBonus}
            onChange={handleChange}
          />
          課税の支出予算科目から税額対の伝票のみ抽出
        </label>
      </div>

      {/* 編集 */}
      <div>
        <label>
          所得税額
          <input
            type="number"
            name="incomeTaxAmount"
            value={formData.incomeTaxAmount}
            onChange={handleChange}
          />
        </label>
        <label>
          住民税額
          <input
            type="number"
            name="residentTaxAmount"
            value={formData.residentTaxAmount}
            onChange={handleChange}
          />
        </label>
      </div>

      {/* 集計結果 */}
      <div>
        税込金額: {formData.incomeTaxAmount + formData.residentTaxAmount}
        税抜金額: {formData.incomeTaxAmount + formData.residentTaxAmount}
        消費税額: {formData.totalWithholdingAmount}
      </div>

      <button type="submit">OK</button>
      <button type="reset">クリア</button>
      <button type="button">キャンセル</button>
    </form>
  );
};

// Usage example
const App: React.FC = () => {
  const handleSubmit = (data: TaxWithholdingData) => {
    console.log(data);
  };

  return (
    <div>
      <h1>特定課税仕入伝票管理入力</h1>
      <TaxWithholdingForm onSubmit={handleSubmit} />
    </div>
  );
};

export default App;