import React from 'react';
import styled from 'styled-components';

interface SearchFormProps {
  title: string;
  onSubmit: (data: { category: string; startYear: number; endYear: number; tax: boolean }) => void;
}

const SearchForm: React.FC<SearchFormProps> = ({ title, onSubmit }) => {
  const currentYear = new Date().getFullYear();
  const [formData, setFormData] = React.useState({
    category: '明細表',
    startYear: currentYear,
    endYear: currentYear,
    tax: true,
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type, checked } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit({
      category: formData.category,
      startYear: formData.startYear,
      endYear: formData.endYear,
      tax: formData.tax,
    });
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <h2>{title}</h2>
      <div>
        <label>
          <input
            type="radio"
            name="category"
            value="合計表"
            checked={formData.category === '合計表'}
            onChange={handleChange}
          />
          合計表
        </label>
        <label>
          <input
            type="radio"
            name="category"
            value="明細表"
            checked={formData.category === '明細表'}
            onChange={handleChange}
          />
          明細表
        </label>
      </div>
      <div>
        <label>
          集計年月
          <select name="startYear" value={formData.startYear} onChange={handleChange}>
            {Array.from({ length: 10 }, (_, i) => currentYear - i).map((year) => (
              <option key={year} value={year}>
                {year}年
              </option>
            ))}
          </select>
          年
          <select name="endYear" value={formData.endYear} onChange={handleChange}>
            {Array.from({ length: 10 }, (_, i) => currentYear - i).map((year) => (
              <option key={year} value={year}>
                {year}年
              </option>
            ))}
          </select>
          年
        </label>
      </div>
      <div>
        <label>
          <input type="checkbox" name="tax" checked={formData.tax} onChange={handleChange} />
          税抜
        </label>
        <label>
          <input
            type="checkbox"
            name="tax"
            checked={!formData.tax}
            onChange={(e) => handleChange({ ...e, target: { ...e.target, checked: !e.target.checked } })}
          />
          税込
        </label>
      </div>
      <div>
        <StyledButton type="submit">検索</StyledButton>
      </div>
    </StyledForm>
  );
};

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 400px;
  margin: 0 auto;
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;

  h2 {
    margin: 0;
  }

  div {
    display: flex;
    gap: 1rem;
  }

  label {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
`;

const StyledButton = styled.button`
  padding: 0.5rem 1rem;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

// Usage example
const App: React.FC = () => {
  const handleSubmit = (data: { category: string; startYear: number; endYear: number; tax: boolean }) => {
    console.log('Search data:', data);
  };

  return <SearchForm title="費用構成表集計" onSubmit={handleSubmit} />;
};

export default App;