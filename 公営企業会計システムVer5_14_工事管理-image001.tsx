import React from 'react';
import styled from '@emotion/styled';

type Division = {
  code: string;
  name: string;
};

type Props = {
  mainDivision: Division;
  subDivision: Division;
  fiscalCode: string;
  onMainDivisionChange: (division: Division) => void;
  onSubDivisionChange: (division: Division) => void;
  onFiscalCodeChange: (fiscalCode: string) => void;
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 20px;
`;

const Title = styled.div`
  font-weight: bold;
`;

const SelectContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Select = styled.select`
  padding: 5px;
  font-size: 16px;
`;

const Input = styled.input`
  padding: 5px;
  font-size: 16px;
`;

const DivisionManagementSystem: React.FC<Props> = ({
  mainDivision,
  subDivision,
  fiscalCode,
  onMainDivisionChange,
  onSubDivisionChange,
  onFiscalCodeChange,
}) => {
  const handleMainDivisionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const division = { code: e.target.value, name: e.target.selectedOptions[0].text };
    onMainDivisionChange(division);
  };

  const handleSubDivisionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const division = { code: e.target.value, name: e.target.selectedOptions[0].text };
    onSubDivisionChange(division);
  };

  const handleFiscalCodeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onFiscalCodeChange(e.target.value);
  };

  return (
    <Container>
      <Title>システム工事種目分類マスタ保守</Title>
      <SelectContainer>
        <div>工事種目分類コード</div>
        <Select value={mainDivision.code} onChange={handleMainDivisionChange}>
          <option value="001">本工事費</option>
          {/* Add more options */}
        </Select>
      </SelectContainer>
      <SelectContainer>
        <div>システム工事種目分類コード</div>
        <Select value={subDivision.code} onChange={handleSubDivisionChange}>
          <option value="001">本工事費</option>
          {/* Add more options */}
        </Select>
      </SelectContainer>
      <SelectContainer>
        <div>財源コード</div>
        <Input type="text" value={fiscalCode} onChange={handleFiscalCodeChange} />
        <button>キャンセル</button>
      </SelectContainer>
    </Container>
  );
};

// Usage example
const App: React.FC = () => {
  const [mainDivision, setMainDivision] = React.useState<Division>({ code: '001', name: '本工事費' });
  const [subDivision, setSubDivision] = React.useState<Division>({ code: '001', name: '本工事費' });
  const [fiscalCode, setFiscalCode] = React.useState<string>('01');

  return (
    <DivisionManagementSystem
      mainDivision={mainDivision}
      subDivision={subDivision}
      fiscalCode={fiscalCode}
      onMainDivisionChange={setMainDivision}
      onSubDivisionChange={setSubDivision}
      onFiscalCodeChange={setFiscalCode}
    />
  );
};

export default App;