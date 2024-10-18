import React from 'react';
import styled from 'styled-components';

// 財源マスタの型定義
type FinanceSourceMaster = {
  code: string;
  name: string;
  order: number;
};

// プロパティの型定義
type FinanceSourceSelectionProps = {
  financeSourceMasters: FinanceSourceMaster[];
  selectedCode: string;
  onChange: (code: string) => void;
};

// コンポーネント
const FinanceSourceSelection: React.FC<FinanceSourceSelectionProps> = ({
  financeSourceMasters,
  selectedCode,
  onChange,
}) => {
  return (
    <Container>
      <Title>財源マスタ</Title>
      <Select
        value={selectedCode}
        onChange={(e) => onChange(e.target.value)}
      >
        <option value="">財源を選択</option>
        {financeSourceMasters.map((master) => (
          <option key={master.code} value={master.code}>
            {master.name}
          </option>
        ))}
      </Select>
    </Container>
  );
};

// スタイリング
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 16px;
`;

const Title = styled.label`
  font-weight: bold;
  margin-bottom: 8px;
`;

const Select = styled.select`
  padding: 8px;
  border-radius: 4px;
  border: 1px solid #ccc;
  font-size: 16px;
  width: 100%;

  @media (min-width: 768px) {
    width: 300px;
  }
`;

// サンプルデータ
const sampleFinanceSourceMasters: FinanceSourceMaster[] = [
  { code: '01', name: '国庫支出金', order: 1 },
  { code: '02', name: '都道府県支出金', order: 2 },
  { code: '03', name: '市町村支出金', order: 3 },
];

// 使用例
const App: React.FC = () => {
  const [selectedCode, setSelectedCode] = React.useState('');

  const handleChange = (code: string) => {
    setSelectedCode(code);
  };

  return (
    <div>
      <h1>財源マスタ選択</h1>
      <FinanceSourceSelection
        financeSourceMasters={sampleFinanceSourceMasters}
        selectedCode={selectedCode}
        onChange={handleChange}
      />
      <p>選択された財源コード: {selectedCode}</p>
    </div>
  );
};

export default App;