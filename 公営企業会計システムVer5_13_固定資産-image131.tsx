import React from 'react';
import styled from '@emotion/styled';

interface FixedAssetMasterProps {
  assetNumber: string;
  assetName: string;
  acquisitionAmount: number;
  currentBookValue: number;
  accumulatedDepreciation: number;
  monthlyDepreciation: number;
  currentMonthDepreciation: number;
  yearlyDepreciation: number;
  straightLineRate: number;
  decliningBalanceRate: number;
}

const FixedAssetMaster: React.FC<FixedAssetMasterProps> = ({
  assetNumber,
  assetName,
  acquisitionAmount,
  currentBookValue,
  accumulatedDepreciation,
  monthlyDepreciation,
  currentMonthDepreciation,
  yearlyDepreciation,
  straightLineRate,
  decliningBalanceRate,
}) => {
  return (
    <Container>
      <Title>固定資産マスタ</Title>
      <Field>
        <Label>資産番号</Label>
        <Value>{assetNumber}</Value>
      </Field>
      <Field>
        <Label>資産名称</Label>
        <Value>{assetName || '未入力'}</Value>
      </Field>
      <Grid>
        <GridSection>
          <Heading>帳簿原価</Heading>
          <Field>
            <Label>前期末残高</Label>
            <Value>{acquisitionAmount}</Value>
          </Field>
          <Field>
            <Label>当期増加額</Label>
            <Value>{currentBookValue || 0}</Value>
          </Field>
          <Field>
            <Label>当期減少額</Label>
            <Value>{accumulatedDepreciation || 0}</Value>
          </Field>
        </GridSection>
        <GridSection>
          <Heading>償却累計額</Heading>
          <Field>
            <Label>前期末残高</Label>
            <Value>{monthlyDepreciation || 0}</Value>
          </Field>
          <Field>
            <Label>当期増加額</Label>
            <Value>{currentMonthDepreciation || 0}</Value>
          </Field>
          <Field>
            <Label>当期減少額</Label>
            <Value>{yearlyDepreciation || 0}</Value>
          </Field>
        </GridSection>
        <GridSection>
          <Heading>過年度償却</Heading>
          <Field>
            <Label>前期末残高</Label>
            <Value>0</Value>
          </Field>
          <Field>
            <Label>当期増加額</Label>
            <Value>0</Value>
          </Field>
          <Field>
            <Label>当期減少額</Label>
            <Value>0</Value>
          </Field>
        </GridSection>
        <GridSection>
          <Heading>過年度償却</Heading>
          <Field>
            <Label>定率法</Label>
            <Value>{straightLineRate || 0}</Value>
          </Field>
          <Field>
            <Label>定率法</Label>
            <Value>{decliningBalanceRate || 0}</Value>
          </Field>
        </GridSection>
      </Grid>
    </Container>
  );
};

const Container = styled.div`
  padding: 16px;
`;

const Title = styled.h2`
  font-size: 18px;
  margin-bottom: 16px;
`;

const Field = styled.div`
  display: flex;
  margin-bottom: 8px;
`;

const Label = styled.div`
  width: 120px;
  font-weight: bold;
`;

const Value = styled.div`
  flex: 1;
`;

const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const GridSection = styled.div`
  width: 50%;
  padding: 16px;
  box-sizing: border-box;
`;

const Heading = styled.h3`
  font-size: 16px;
  margin-bottom: 8px;
`;

// Usage example
const App: React.FC = () => {
  const sampleData: FixedAssetMasterProps = {
    assetNumber: '8002400',
    assetName: '行政市前水ポンプ場',
    acquisitionAmount: 0,
    currentBookValue: 5000000,
    accumulatedDepreciation: 0,
    monthlyDepreciation: 0,
    currentMonthDepreciation: 0,
    yearlyDepreciation: 0,
    straightLineRate: 0,
    decliningBalanceRate: 0,
  };

  return <FixedAssetMaster {...sampleData} />;
};

export default App;