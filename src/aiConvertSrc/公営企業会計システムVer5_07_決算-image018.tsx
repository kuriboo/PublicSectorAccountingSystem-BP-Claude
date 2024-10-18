// LoanTermSelector.tsx
import React from 'react';
import styled from '@emotion/styled';

type LoanTermSelectorProps = {
  years: number;
  onChange: (years: number) => void;
};

const LoanTermSelector: React.FC<LoanTermSelectorProps> = ({ years, onChange }) => {
  return (
    <Wrapper>
      <Title>決算貸借対照表集計処理</Title>
      <YearSelector>
        <Label>集計年度</Label>
        <Select value={years} onChange={(e) => onChange(Number(e.target.value))}>
          <option value={2029}>平成29</option>
          <option value={2030}>平成30年04月06日</option>
        </Select>
        <Label>年度</Label>
      </YearSelector>
      <MessageBox>
        決算損益計算書・決算貸借対照表データー作成作成します。
      </MessageBox>
      <ButtonGroup>
        <Button>OK</Button>
        <Button>クリア</Button>
        <Button>終了</Button>
      </ButtonGroup>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: #f0f0f0;
  padding: 16px;
`;

const Title = styled.h2`
  margin: 0 0 16px;
  font-size: 20px;
`;

const YearSelector = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
`;

const Label = styled.label`
  margin-right: 8px;
`;

const Select = styled.select`
  padding: 4px;
  font-size: 16px;
  margin-right: 8px;
`;

const MessageBox = styled.div`
  background-color: white;
  border: 1px solid #ccc;
  padding: 16px;
  margin-bottom: 16px;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const Button = styled.button`
  margin-left: 8px;
  padding: 8px 16px;
  font-size: 16px;
`;

// Usage example
const App = () => {
  const [years, setYears] = React.useState(2030);

  return (
    <div>
      <LoanTermSelector 
        years={years}
        onChange={(selectedYears) => setYears(selectedYears)}
      />
      <p>Selected years: {years}</p>
    </div>
  );
};

export default LoanTermSelector;