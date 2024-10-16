import React from 'react';
import styled from 'styled-components';

// 料金体系別収入状況コンポーネントの型定義
interface FeeSystemIncomeProps {
  year: number;
  month: number;
  isMonthly: boolean;
}

// 料金体系別収入状況コンポーネント
const FeeSystemIncome: React.FC<FeeSystemIncomeProps> = ({ year, month, isMonthly }) => {
  return (
    <Container>
      <Title>料金体系別収入状況作成</Title>
      <Subtitle>行政市水道事業会計 総務課 予算・会計担当 ぎょうせい太郎 平成29年09月04日</Subtitle>
      <FormContainer>
        <Label>範囲指定</Label>
        <YearMonthInput type="number" value={year} disabled /> 年
        <MonthInput type="number" value={month} disabled /> 月
        <RadioButtonContainer>
          <input type="radio" checked={isMonthly} disabled /> 税抜
          <input type="radio" checked={!isMonthly} disabled /> 税込
        </RadioButtonContainer>
      </FormContainer>
      <ButtonContainer>
        <Button>OK</Button>
        <Button>クリア</Button>
        <Button>終了</Button>
      </ButtonContainer>
    </Container>
  );
};

// サンプルデータ
const sampleData = {
  year: 29,
  month: 9,
  isMonthly: true,
};

// 表示用コンポーネント
const App: React.FC = () => {
  return (
    <div>
      <h1>料金体系別収入状況</h1>
      <FeeSystemIncome {...sampleData} />
    </div>
  );
};

export default App;

// styled-components を使用したスタイリング
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  font-family: sans-serif;
`;

const Title = styled.h2`
  margin-bottom: 10px;
`;

const Subtitle = styled.p`
  font-size: 14px;
  color: #666;
  margin-bottom: 20px;
`;

const FormContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const Label = styled.label`
  margin-right: 10px;
`;

const YearMonthInput = styled.input`
  width: 60px;
  margin-right: 5px;
`;

const MonthInput = styled.input`
  width: 40px;
  margin-right: 10px;
`;

const RadioButtonContainer = styled.div`
  display: flex;
  align-items: center;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const Button = styled.button`
  padding: 5px 10px;
  margin: 0 5px;
`;