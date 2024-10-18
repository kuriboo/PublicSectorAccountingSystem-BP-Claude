import React from 'react';
import styled from '@emotion/styled';

type CalculationSettingProps = {
  fiscalYearEnd: string;
  currentTerm: number;
  carryForwardAmount: number;
  onCurrentTermChange: (value: number) => void;
  onCarryForwardAmountChange: (value: number) => void;
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 20px;
  gap: 20px;
  background-color: #f0f0f0;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const Section = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Label = styled.label`
  font-weight: bold;
`;

const InputContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

const Input = styled.input`
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Note = styled.p`
  font-size: 12px;
  color: #666;
  margin-top: 10px;
`;

const CalculationSetting: React.FC<CalculationSettingProps> = ({
  fiscalYearEnd,
  currentTerm,
  carryForwardAmount,
  onCurrentTermChange,
  onCarryForwardAmountChange,
}) => {
  return (
    <Container>
      <Section>
        <Label>累計年度</Label>
        <div>{fiscalYearEnd.replace(/\D/g, '')}年度</div>
      </Section>
      <Section>
        <Label>資金期首残高の端数処理</Label>
        <InputContainer>
          <Input
            type="number"
            value={currentTerm}
            onChange={(e) => onCurrentTermChange(Number(e.target.value))}
          />
          <span>円</span>
        </InputContainer>
        <Label>資金期末残高の端数処理</Label>
        <InputContainer>
          <Input
            type="number"
            value={carryForwardAmount}
            onChange={(e) => onCarryForwardAmountChange(Number(e.target.value))}
          />
          <span>円</span>
        </InputContainer>
      </Section>
      <Note>
        外貨建取引の影響で、当該金額が発生している場合には、右側に金額を入力してください。
        千円未満の値を円単位で入力してください。
      </Note>
    </Container>
  );
};

// サンプルデータを用いた使用例
const SampleUsage: React.FC = () => {
  const [currentTerm, setCurrentTerm] = React.useState(0);
  const [carryForwardAmount, setCarryForwardAmount] = React.useState(0);

  return (
    <CalculationSetting
      fiscalYearEnd="平成29年"
      currentTerm={currentTerm}
      carryForwardAmount={carryForwardAmount}
      onCurrentTermChange={setCurrentTerm}
      onCarryForwardAmountChange={setCarryForwardAmount}
    />
  );
};

export default CalculationSetting;