import React from 'react';

interface FormData {
  tax: number;
  endOfTerm: string;
  interestRate: number;
  paymentMethod: string;
  entryField: string;
  unknown1: string;
  unknown2: string;
  unknown3: string;
  business: string;
  dateOpened: string;
}

interface FormProps {
  initialData?: FormData;
  onSubmit: (data: FormData) => void;
}

const Form: React.FC<FormProps> = ({ initialData, onSubmit }) => {
  const [formData, setFormData] = React.useState<FormData>(initialData || {
    tax: 0,
    endOfTerm: '',
    interestRate: 0,
    paymentMethod: '',
    entryField: '',
    unknown1: '',
    unknown2: '',
    unknown3: '',
    business: '',
    dateOpened: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prevData => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4">
      <div>
        <label htmlFor="tax">税区分</label>
        <select id="tax" name="tax" value={formData.tax} onChange={handleChange}>
          <option value={1}>課税1</option>
          <option value={2}>課税2</option>
        </select>
      </div>
      <div>
        <label htmlFor="endOfTerm">末払計上区分</label>
        <select id="endOfTerm" name="endOfTerm" value={formData.endOfTerm} onChange={handleChange}>
          <option value="1">通常末払計上1</option>
          <option value="2">通常末払計上2</option>
        </select>
      </div>
      <div>
        <label htmlFor="interestRate">予算科目区分</label>
        <input type="number" id="interestRate" name="interestRate" value={formData.interestRate} onChange={handleChange} />
      </div>
      <div>
        <label htmlFor="paymentMethod">エントリー区分</label>
        <select id="paymentMethod" name="paymentMethod" value={formData.paymentMethod} onChange={handleChange}>
          {/* Add options */}
        </select>
      </div>
      <div>
        <label htmlFor="entryField">積算基礎税込フラグ</label>
        <select id="entryField" name="entryField" value={formData.entryField} onChange={handleChange}>
          <option value="excluded">税抜</option>
          <option value="included">税込</option>
        </select>
      </div>
      {/* Add remaining form fields */}
      <button type="submit" className="col-span-2 bg-blue-500 text-white font-bold py-2 px-4 rounded">
        事業科目
      </button>
    </form>
  );
};

export default Form;