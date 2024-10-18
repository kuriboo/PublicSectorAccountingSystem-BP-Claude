import React from 'react';
import styled from 'styled-components';

// 課税期間のラジオボタンの型定義
type TaxPeriodProps = {
  value: string;
  onChange: (value: string) => void;
};

// 課税期間のラジオボタンコンポーネント
const TaxPeriod: React.FC<TaxPeriodProps> = ({ value, onChange }) => {
  // ラジオボタンの変更イベントハンドラ
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  return (
    <TaxPeriodWrapper>
      <TaxPeriodLabel>
        <input
          type="radio"
          value="平成31年04月01日 ～ 令和02年03月31日"
          checked={value === '平成31年04月01日 ～ 令和02年03月31日'}
          onChange={handleChange}
        />
        平成31年04月01日 ～ 令和02年03月31日
      </TaxPeriodLabel>
    </TaxPeriodWrapper>
  );
};

// スタイリング
const TaxPeriodWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
`;

const TaxPeriodLabel = styled.label`
  display: flex;
  align-items: center;
  font-size: 16px;

  input[type='radio'] {
    margin-right: 8px;
  }
`;

// サンプルデータ
const sampleData = {
  taxPeriod: '平成31年04月01日 ～ 令和02年03月31日',
};

// 使用例
const App: React.FC = () => {
  const [taxPeriod, setTaxPeriod] = React.useState(sampleData.taxPeriod);

  return (
    <div>
      <h2>課税期間</h2>
      <TaxPeriod value={taxPeriod} onChange={setTaxPeriod} />
    </div>
  );
};

export default App;