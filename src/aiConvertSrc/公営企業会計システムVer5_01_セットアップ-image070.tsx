import React from 'react';
import styled from '@emotion/styled';

type NumDistrictProps = {
  numDistricts: number;
  onChange: (value: number) => void;
};

const StyledSelect = styled.select`
  padding: 5px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: white;
  margin-left: 10px;
`;

const NumDistrict: React.FC<NumDistrictProps> = ({ numDistricts, onChange }) => {
  const options = Array.from({ length: 10 }, (_, i) => i + 1);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = parseInt(e.target.value, 10);
    onChange(value);
  };

  return (
    <div>
      加須区分
      <StyledSelect value={numDistricts} onChange={handleChange}>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}加須
          </option>
        ))}
      </StyledSelect>
    </div>
  );
};


// Usage example
const App: React.FC = () => {
  const [numDistricts, setNumDistricts] = React.useState(3);

  return (
    <div>
      <h1>集計先行番号編集画面</h1>
      <NumDistrict numDistricts={numDistricts} onChange={setNumDistricts} />
      <p>Selected number of districts: {numDistricts}</p>
    </div>
  );
};

export default App;