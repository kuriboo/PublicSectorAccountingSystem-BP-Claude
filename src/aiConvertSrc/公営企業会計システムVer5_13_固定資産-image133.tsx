import React from 'react';
import styled from '@emotion/styled';

type FinancialDataProps = {
  financialFixedAssets?: number; // 財源固定資産
  financialCurrentAssets?: number; // 財源流動負債
  cumulativeProfitLoss?: number; // 当期増加額
  cumulativeDepreciation?: number; // 当期減少額
  increaseFixedAssets?: number; // 前期末残高
  increaseCurrentAssets?: number; // 前期末残高
  increaseProfitLoss?: number; // 当期増加額
  increaseDepreciation?: number; // 当期減少額
  depreciation?: number; // 除却
  depreciation2?: number; // 除却額
};

const FinancialData: React.FC<FinancialDataProps> = ({
  financialFixedAssets = 0,
  financialCurrentAssets = 0,
  cumulativeProfitLoss = 5000.0,
  cumulativeDepreciation = 0,
  increaseFixedAssets = 0,
  increaseCurrentAssets = 0,
  increaseProfitLoss = 0,
  increaseDepreciation = 0,
  depreciation = 0,
  depreciation2 = 0,
}) => {
  return (
    <Container>
      <Title>財源別固定資産累計額表</Title>
      <DataContainer>
        <Column>
          <ColumnTitle>財源原価</ColumnTitle>
          <DataItem>
            <Label>財源固定資産</Label>
            <Value>{financialFixedAssets.toLocaleString()}</Value>
          </DataItem>
          <DataItem>
            <Label>前期末残高</Label>
            <Value>{financialCurrentAssets.toLocaleString()}</Value>
          </DataItem>
          <DataItem>
            <Label>当期増加額</Label>
            <Value>{cumulativeProfitLoss.toLocaleString()}</Value>
          </DataItem>
          <DataItem>
            <Label>当期減少額</Label>
            <Value>{cumulativeDepreciation.toLocaleString()}</Value>
          </DataItem>
        </Column>
        <Column>
          <ColumnTitle>増加累計額</ColumnTitle>
          <DataItem>
            <Label>前期末残高</Label>
            <Value>{increaseFixedAssets.toLocaleString()}</Value>
          </DataItem>
          <DataItem>
            <Label>当期増加額</Label>
            <Value>{increaseProfitLoss.toLocaleString()}</Value>
          </DataItem>
          <DataItem>
            <Label>当期減少額</Label>
            <Value>{increaseDepreciation.toLocaleString()}</Value>
          </DataItem>
        </Column>
        <Column>
          <ColumnTitle>減少累計額</ColumnTitle>
          <DataItem>
            <Label>除却</Label>
            <Value>{depreciation.toLocaleString()}</Value>
          </DataItem>
          <DataItem>
            <Label>除却額</Label>
            <Value>{depreciation2.toLocaleString()}</Value>
          </DataItem>
        </Column>
      </DataContainer>
    </Container>
  );
};

const Container = styled.div`
  font-family: sans-serif;
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
`;

const Title = styled.h2`
  text-align: center;
  margin-bottom: 20px;
`;

const DataContainer = styled.div`
  display: flex;
  justify-content: space-between;
  
  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

const Column = styled.div`
  flex: 1;
  margin: 0 10px;
  
  @media (max-width: 600px) {
    margin: 10px 0;
  }
`;

const ColumnTitle = styled.h3`
  margin-bottom: 10px;
`;

const DataItem = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 5px;
`;

const Label = styled.div`
  font-weight: bold;
`;

const Value = styled.div``;

// Example usage
const App: React.FC = () => {
  return (
    <div>
      <h1>Financial Data Example</h1>
      <FinancialData 
        financialFixedAssets={8002400}
        financialCurrentAssets={1}
        cumulativeProfitLoss={5000}
      />
    </div>
  );
};

export default App;