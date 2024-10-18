import React from 'react';
import styled from '@emotion/styled';

type FixedAssetMasterProps = {
  assetNumber?: string;
  assetName?: string;
  acquisitionAmount?: number;
  accumulatedDepreciation?: number;
  bookValue?: number;
  usefulLifeYears?: number;
  usefulLifeMonths?: number;
  depreciationExpense?: number;
  currentYearDepreciation?: number;
  currentMonthDepreciation?: number;
  taxAccount?: number;
  taxAccountName?: string;
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  font-family: Arial, sans-serif;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-around;
  }
`;

const Section = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;

  @media (min-width: 768px) {
    margin-bottom: 0;
  }
`;

const Title = styled.h2`
  margin-bottom: 10px;
`;

const InputGroup = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const Label = styled.label`
  margin-right: 10px;
`;

const Input = styled.input`
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const FixedAssetMaster: React.FC<FixedAssetMasterProps> = ({
  assetNumber = '8002400',
  assetName = '資産名称',
  acquisitionAmount = 500000,
  accumulatedDepreciation = 0,
  bookValue = 0,
  usefulLifeYears = 0,
  usefulLifeMonths = 0,
  depreciationExpense = 0,
  currentYearDepreciation = 0,
  currentMonthDepreciation = 0,
  taxAccount = 0,
  taxAccountName = '',
}) => {
  return (
    <Container>
      <Section>
        <Title>償却累計額</Title>
        <InputGroup>
          <Label>前期末残高</Label>
          <Input type="number" value={accumulatedDepreciation} readOnly />
        </InputGroup>
        <InputGroup>
          <Label>当期増加額</Label>
          <Input type="number" value={currentYearDepreciation} readOnly />
        </InputGroup>
        <InputGroup>
          <Label>当期減少額</Label>
          <Input type="number" value={0} readOnly />
        </InputGroup>
      </Section>

      <Section>
        <Title>償却除外額</Title>
        <InputGroup>
          <Label>前期末残高</Label>
          <Input type="number" value={0} readOnly />
        </InputGroup>
        <InputGroup>
          <Label>当期増加額</Label>
          <Input type="number" value={0} readOnly />
        </InputGroup>
        <InputGroup>
          <Label>当期減少額</Label>
          <Input type="number" value={0} readOnly />
        </InputGroup>
      </Section>

      <Section>
        <Title>過年度償却</Title>
        <InputGroup>
          <Label>修正益</Label>
          <Input type="number" value={0} readOnly />
        </InputGroup>
        <InputGroup>
          <Label>修正損</Label>
          <Input type="number" value={0} readOnly />
        </InputGroup>
      </Section>
    </Container>
  );
};

// Usage example
const App: React.FC = () => {
  return (
    <div>
      <h1>Fixed Asset Master</h1>
      <FixedAssetMaster
        assetNumber="8002400"
        assetName="資産名称"
        acquisitionAmount={500000}
      />
    </div>
  );
};

export default App;