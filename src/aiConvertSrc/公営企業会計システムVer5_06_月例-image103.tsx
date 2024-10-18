import React from 'react';
import styled from '@emotion/styled';

// 月次合計残高計算表の型定義
interface MonthlyBalanceCalculationFormProps {
  period?: string; // 集計期間
  isContained?: boolean; // 含む
  isNotContained?: boolean; // 含まない
}

// 月次合計残高計算表コンポーネント
const MonthlyBalanceCalculationForm: React.FC<MonthlyBalanceCalculationFormProps> = ({
  period = '',
  isContained = false,
  isNotContained = false,
}) => {
  return (
    <FormWrapper>
      <Title>月次合計残高計算表</Title>
      <FormGroup>
        <Label>集計期間</Label>
        <Input type="text" value={period} readOnly />
      </FormGroup>
      <FormGroup>
        <Label>決算仕訳</Label>
        <InputGroup>
          <RadioButton type="radio" checked={isContained} readOnly />
          <RadioLabel>含む</RadioLabel>
          <RadioButton type="radio" checked={isNotContained} readOnly />
          <RadioLabel>含まない</RadioLabel>
        </InputGroup>
      </FormGroup>
      <ButtonGroup>
        <Button>CSV出力</Button>
        <Button>クリア</Button>
        <Button primary>終了</Button>
      </ButtonGroup>
    </FormWrapper>
  );
};

// サンプルデータ
const sampleData: MonthlyBalanceCalculationFormProps = {
  period: '令和04年04月01日 ～ 令和05年03月31日',
  isContained: true,
  isNotContained: false,
};

// 表示用コンポーネント
const App: React.FC = () => {
  return (
    <MonthlyBalanceCalculationForm
      period={sampleData.period}
      isContained={sampleData.isContained}
      isNotContained={sampleData.isNotContained}
    />
  );
};

// スタイリング
const FormWrapper = styled.div`
  background-color: #f0f0f0;
  padding: 20px;
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
  box-sizing: border-box;
`;

const Title = styled.h2`
  font-size: 20px;
  text-align: center;
  margin-bottom: 20px;
`;

const FormGroup = styled.div`
  margin-bottom: 15px;
`;

const Label = styled.label`
  display: block;
  font-weight: bold;
  margin-bottom: 5px;
`;

const Input = styled.input`
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
`;

const InputGroup = styled.div`
  display: flex;
  align-items: center;
`;

const RadioButton = styled.input`
  margin-right: 5px;
`;

const RadioLabel = styled.label`
  margin-right: 10px;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
`;

const Button = styled.button<{ primary?: boolean }>`
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  background-color: ${({ primary }) => (primary ? '#007bff' : '#f0f0f0')};
  color: ${({ primary }) => (primary ? '#fff' : '#333')};
  cursor: pointer;
  margin-left: 10px;

  &:hover {
    opacity: 0.8;
  }
`;

export default MonthlyBalanceCalculationForm;