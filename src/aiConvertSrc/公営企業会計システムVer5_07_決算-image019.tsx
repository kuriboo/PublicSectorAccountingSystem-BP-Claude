import React from 'react';
import styled from 'styled-components';

type LoanCalculatorProps = {
  years: number;
  onYearsChange: (years: number) => void;
  paymentType: 'full' | 'bonus' | 'segment';
  onPaymentTypeChange: (paymentType: 'full' | 'bonus' | 'segment') => void;
  segments: number;
  onSegmentsChange: (segments: number) => void;
}

const LoanCalculator: React.FC<LoanCalculatorProps> = ({
  years,
  onYearsChange,
  paymentType,
  onPaymentTypeChange,
  segments,
  onSegmentsChange,
}) => {
  return (
    <Container>
      <Title>決算貸借対照表計処理</Title>
      <Row>
        <Label>集計年度</Label>
        <Input type="text" value={years} onChange={e => onYearsChange(Number(e.target.value))} />
        <Label>年度</Label>
      </Row>
      <Description>決算損益計算書・決算貸借対照表データーを作成します。</Description>
      <Row>
        <Label>集計対象</Label>
        <RadioButton
          type="radio"
          checked={paymentType === 'full'}
          onChange={() => onPaymentTypeChange('full')}
        />
        <Label>全体</Label>
        <RadioButton
          type="radio"
          checked={paymentType === 'bonus'}
          onChange={() => onPaymentTypeChange('bonus')}
        />
        <Label>ブロック</Label>
        <RadioButton
          type="radio"
          checked={paymentType === 'segment'}
          onChange={() => onPaymentTypeChange('segment')}
        />
        <Label>セグメント</Label>
        {paymentType === 'segment' && (
          <Select value={segments} onChange={e => onSegmentsChange(Number(e.target.value))}>
            <option value={20}>20</option>
            {/* add more options */}
          </Select>
        )}
        <Label>区ブロック</Label>
      </Row>
      <ButtonRow>
        <Button>OK</Button>
        <Button>クリア</Button>
        <Button>終了</Button>
      </ButtonRow>
    </Container>
  );
};

// Styled components
const Container = styled.div`
  padding: 20px;
  background-color: #f2f2f2;
  border: 1px solid #ccc;
  @media (max-width: 600px) {
    padding: 10px;
  }
`;

const Title = styled.h2`
  margin-bottom: 20px;
  @media (max-width: 600px) {
    font-size: 18px;
  }  
`;

const Row = styled.div`
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  @media (max-width: 600px) {
    flex-wrap: wrap;
  }
`;

const Label = styled.label`
  margin-right: 10px;
  @media (max-width: 600px) {
    margin-bottom: 5px;
  }  
`;

const Input = styled.input`
  margin-right: 5px;
  padding: 5px;
  @media (max-width: 600px) {
    margin-bottom: 5px;
  }
`;

const Select = styled.select`
  margin-left: 5px;
  padding: 5px;
  @media (max-width: 600px) {
    margin-bottom: 5px;
  }  
`;

const RadioButton = styled.input`
  margin-right: 5px;
`;

const Description = styled.p`
  margin: 20px 0;
  @media (max-width: 600px) {
    font-size: 14px;
  }  
`;

const ButtonRow = styled.div`
  display: flex;
  justify-content: flex-end;
  @media (max-width: 600px) {
    justify-content: center;
  }
`;  

const Button = styled.button`
  margin-left: 10px;
  padding: 8px 15px;
  background-color: #007bff;
  color: #fff;
  border: none;
  cursor: pointer;
  @media (max-width: 600px) {
    margin: 5px;
    font-size: 14px;
  }
`;

// Usage example
const App: React.FC = () => {
  const [years, setYears] = React.useState(29);
  const [paymentType, setPaymentType] = React.useState<'full' | 'bonus' | 'segment'>('full');
  const [segments, setSegments] = React.useState(20);

  return (
    <LoanCalculator
      years={years}
      onYearsChange={setYears}
      paymentType={paymentType} 
      onPaymentTypeChange={setPaymentType}
      segments={segments}
      onSegmentsChange={setSegments}
    />
  );
};

export default App;