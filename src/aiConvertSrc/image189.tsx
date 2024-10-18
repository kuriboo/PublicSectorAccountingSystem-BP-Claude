import React from 'react';
import styled from 'styled-components';

// 区分マスタの型定義
type Division = {
  code: number;
  name: string;
};

// コンポーネントのプロパティの型定義
type Props = {
  divisions: Division[];
  selectedDivision: number;
  onChangeDivision: (divisionCode: number) => void;
};

// スタイル定義
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: center;
  }
`;

const Title = styled.div`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const Select = styled.select`
  padding: 5px 10px;
  font-size: 16px;
  border-radius: 5px;
  border: 1px solid #ccc;
  outline: none;
`;

// 区分マスタコンポーネント
const DivisionMaster: React.FC<Props> = ({ divisions, selectedDivision, onChangeDivision }) => {
  // 区分変更時のハンドラ
  const handleChangeDivision = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const divisionCode = Number(e.target.value);
    onChangeDivision(divisionCode);
  };

  return (
    <Container>
      <Title>流用区分コード</Title>
      <Select value={selectedDivision} onChange={handleChangeDivision}>
        {divisions.map((division) => (
          <option key={division.code} value={division.code}>
            {division.name}
          </option>
        ))}
      </Select>
    </Container>
  );
};

// 使用例
const divisions: Division[] = [
  { code: 0, name: '職員給与費以外' },
  { code: 1, name: '3条人件費' },
  { code: 2, name: '3条人件費以外' },
  { code: 3, name: '4条人件費' },
  { code: 4, name: '4条人件費以外' },
  { code: 9, name: '予備費' },
  { code: 9, name: '交際費' },
];

const App: React.FC = () => {
  const [selectedDivision, setSelectedDivision] = React.useState(0);

  const handleChangeDivision = (divisionCode: number) => {
    setSelectedDivision(divisionCode);
  };

  return (
    <div>
      <h1>区分マスタ</h1>
      <DivisionMaster
        divisions={divisions}
        selectedDivision={selectedDivision}
        onChangeDivision={handleChangeDivision}
      />
    </div>
  );
};

export default App;