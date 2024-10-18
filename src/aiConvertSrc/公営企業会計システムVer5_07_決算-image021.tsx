import React from 'react';
import styled from 'styled-components';

type DecisionBenefitCalculationFormProps = {
  averageAnnualIncome: number;
  years: number;
  onSubmit: (totalBenefit: number) => void;
};

const DecisionBenefitCalculationForm: React.FC<DecisionBenefitCalculationFormProps> = ({
  averageAnnualIncome,
  years,
  onSubmit,
}) => {
  // 決算損益計算書の総利益を計算する関数
  const calculateTotalBenefit = () => {
    const totalBenefit = averageAnnualIncome * years;
    onSubmit(totalBenefit);
  };

  return (
    <Container>
      <Title>決算損益計算書計算理</Title>
      <Subtitle>行政市水道事業会計</Subtitle>
      <Subtitle>管理者 予算科目登録権限者 さょうせい 太郎</Subtitle>
      <Subtitle>平成30年04月06日</Subtitle>

      <InputContainer>
        <Label>集計年度</Label>
        <InputValue>{averageAnnualIncome}</InputValue>
        <Label>年度</Label>
      </InputContainer>

      <TextAreaContainer>
        <TextArea
          value="決算損益計算書・決算貸借対照表データを作成します。"
          readOnly
        />
      </TextAreaContainer>

      <ButtonContainer>
        <Button onClick={calculateTotalBenefit}>OK</Button>
        <Button>クリア</Button>
        <Button>終了</Button>
      </ButtonContainer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #f0f0f0;
  font-family: sans-serif;
`;

const Title = styled.h2`
  font-size: 24px;
  margin-bottom: 10px;
`;

const Subtitle = styled.p`
  font-size: 16px;
  margin-bottom: 5px;
`;

const InputContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 10px 0;
`;

const Label = styled.label`
  margin-right: 10px;
`;

const InputValue = styled.span`
  font-weight: bold;
  margin-right: 5px;
`;

const TextAreaContainer = styled.div`
  margin: 20px 0;
`;

const TextArea = styled.textarea`
  width: 400px;
  height: 100px;
  resize: none;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 300px;
`;

const Button = styled.button`
  padding: 5px 10px;
  font-size: 16px;
`;

// 使用例
const App: React.FC = () => {
  const handleSubmit = (totalBenefit: number) => {
    alert(`総利益: ${totalBenefit}円`);
  };

  return (
    <DecisionBenefitCalculationForm
      averageAnnualIncome={1000000}
      years={4}
      onSubmit={handleSubmit}
    />
  );
};

export default App;