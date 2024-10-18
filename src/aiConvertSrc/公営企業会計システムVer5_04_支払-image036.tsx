import React from 'react';
import styled from '@emotion/styled';

type PredictionInputProps = {
  currentYearSales?: number;
  salesTaxRate?: number;
  consumptionTaxRate?: number;
  consumptionTaxAmount?: number;
  predictedSales?: number;
  predictedTaxAmount?: number;
};

const PredictionInput: React.FC<PredictionInputProps> = ({
  currentYearSales = 0,
  salesTaxRate = 10,
  consumptionTaxRate = 10,
  consumptionTaxAmount = 0,
  predictedSales = 0,
  predictedTaxAmount = 0,
}) => {
  return (
    <Container>
      <Title>予想料目入力科目登録（工事）</Title>
      <Grid>
        <LeftColumn>
          <Row>
            <Label>予算科目</Label>
            <Value>004010828</Value>
            <Description>配改・工事請負費</Description>
          </Row>
          <Row>
            <Label>予算節</Label>
            <Value>0000</Value>
            <Description>配改管新設工事</Description>
          </Row>
          <Row>
            <Label>予算細節</Label>
            <Value>0000</Value>
            <Description>配改管新設工事</Description>
          </Row>
          <Row>
            <Label>科目検索</Label>
            <Value>科目検索</Value>
          </Row>
        </LeftColumn>
        <RightColumn>
          <AmountGrid>
            <AmountRow>
              <AmountLabel>前年度予算</AmountLabel>
              <AmountValue>{currentYearSales.toLocaleString()}</AmountValue>
            </AmountRow>
            <AmountRow>
              <AmountLabel>予算見積</AmountLabel>
              <AmountValue>229,190,000</AmountValue>
            </AmountRow>
            <AmountRow>
              <AmountLabel>予算計画</AmountLabel>
              <AmountValue>229,090,000</AmountValue>
            </AmountRow>
            <AmountRow>
              <AmountLabel>予定見積</AmountLabel>
              <AmountValue>228,090,000</AmountValue>
            </AmountRow>
            <AmountRow>
              <AmountLabel>予定計画</AmountLabel>
              <AmountValue>228,090,000</AmountValue>
            </AmountRow>
          </AmountGrid>
        </RightColumn>
      </Grid>
      
      <CalculationGrid>
        <CalculationRow>
          <CalculationLabel>予定額</CalculationLabel>
          <CalculationValue>{predictedSales.toLocaleString()}</CalculationValue>
          <CalculationLabel>負担額</CalculationLabel>
          <CalculationValue>{predictedTaxAmount.toLocaleString()}</CalculationValue>
        </CalculationRow>
        <CalculationRow>
          <CalculationLabel>税抜額</CalculationLabel>
          <CalculationValue>{(predictedSales - predictedTaxAmount).toLocaleString()}</CalculationValue>
          <CalculationLabel>税抜額</CalculationLabel>
          <CalculationValue>{(predictedSales - predictedTaxAmount).toLocaleString()}</CalculationValue>
        </CalculationRow>
        <CalculationRow>
          <CalculationLabel>消費税率</CalculationLabel>
          <CalculationValue>{salesTaxRate}%</CalculationValue>
          <CalculationLabel>消費税率</CalculationLabel>
          <CalculationValue>{consumptionTaxRate}%</CalculationValue>
        </CalculationRow>
        <CalculationRow>
          <CalculationLabel>消費税額</CalculationLabel>
          <CalculationValue>{consumptionTaxAmount.toLocaleString()}</CalculationValue>
          <CalculationLabel>消費税額</CalculationLabel>
          <CalculationValue>{consumptionTaxAmount.toLocaleString()}</CalculationValue>
        </CalculationRow>
      </CalculationGrid>
      
      <ButtonContainer>
        <Button>OK</Button>
        <Button>クリア</Button>
        <Button>キャンセル</Button>
      </ButtonContainer>
    </Container>
  );
};

// Sample data for testing
const sampleData: PredictionInputProps = {
  currentYearSales: 1100000,
  salesTaxRate: 10,
  consumptionTaxRate: 10,  
  consumptionTaxAmount: 100000,
  predictedSales: 1000000,
  predictedTaxAmount: 100000,
};

// Example usage
const App: React.FC = () => {
  return (
    <div>
      <h1>予想料目入力科目登録（工事）</h1>
      <PredictionInput {...sampleData} />
    </div>
  );
};

export default App;

// Styled components
const Container = styled.div`
  font-family: sans-serif;
  padding: 20px;
`;

const Title = styled.h2`
  margin-bottom: 20px;
`;

const Grid = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const LeftColumn = styled.div`
  flex: 1;
`;

const RightColumn = styled.div`
  flex: 1;
  margin-left: 20px;

  @media (max-width: 768px) {
    margin-left: 0;
    margin-top: 20px;
  }
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const Label = styled.div`
  width: 100px;
  font-weight: bold;
`;

const Value = styled.div`
  margin-left: 10px;
`;

const Description = styled.div`
  margin-left: 10px;
  color: #888;
`;

const AmountGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 10px;
`;

const AmountRow = styled.div`
  display: flex;
  justify-content: space-between;
`;

const AmountLabel = styled.div`
  font-weight: bold;
`;

const AmountValue = styled.div``;

const CalculationGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 10px;
  margin-bottom: 20px;
`;

const CalculationRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CalculationLabel = styled.div`
  font-weight: bold;
`;

const CalculationValue = styled.div``;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const Button = styled.button`
  padding: 8px 16px;
  margin-left: 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;