// 消費税申告書作成コンポーネント
import React from 'react';
import styled from '@emotion/styled';

type ConsumptionTaxReturnProps = {
  firstTaxBase: number;
  secondTaxBase: number;
  firstDeduction: number;
  secondDeduction: number;
  specialProvision: boolean;
}

const ConsumptionTaxReturn: React.FC<ConsumptionTaxReturnProps> = ({
  firstTaxBase,
  secondTaxBase,
  firstDeduction,
  secondDeduction,
  specialProvision
}) => {
  return (
    <Container>
      <Title>消費税申告書作成</Title>
      
      <CheckboxGroup>
        <CheckboxItem>
          <Checkbox type="checkbox" checked={firstTaxBase > 0} readOnly />
          <Label>第一表 課税期間分の消費税及び地方消費税の（確定）申告書</Label>
        </CheckboxItem>

        <CheckboxItem>
          <Checkbox type="checkbox" checked={secondTaxBase > 0} readOnly />
          <Label>第二表 課税期間分の消費税及び地方消費税の（確定）申告書</Label>
        </CheckboxItem>

        <CheckboxItem>
          <Checkbox type="checkbox" checked={firstDeduction > 0} readOnly />
          <Label>付表1-3 税率別消費税額計算表 兼 地方消費税の課税標準となる消費税額計算表</Label>
        </CheckboxItem>

        <CheckboxItem>
          <Checkbox type="checkbox" checked={secondDeduction > 0} readOnly />
          <Label>付表2-3 課税売上割合・控除対象仕入割合の計算表</Label>
        </CheckboxItem>

        <CheckboxItem>
          <Checkbox type="checkbox" checked={specialProvision} readOnly />
          <Label>特定収入に係る課税仕入れ等の税額の計算表</Label>
        </CheckboxItem>
      </CheckboxGroup>

      <ButtonGroup>
        <Button>OK</Button>
        <Button>クリア</Button>
        <Button>キャンセル</Button>
      </ButtonGroup>
    </Container>
  );
};

// サンプルデータ
const sampleData: ConsumptionTaxReturnProps = {
  firstTaxBase: 1000000,
  secondTaxBase: 500000,
  firstDeduction: 100000,
  secondDeduction: 50000,
  specialProvision: true
};

// 表示用コンポーネント
const App: React.FC = () => {
  return (
    <ConsumptionTaxReturn
      firstTaxBase={sampleData.firstTaxBase}
      secondTaxBase={sampleData.secondTaxBase}
      firstDeduction={sampleData.firstDeduction} 
      secondDeduction={sampleData.secondDeduction}
      specialProvision={sampleData.specialProvision}
    />
  );
};

// スタイリング
const Container = styled.div`
  font-family: sans-serif;
  padding: 20px;
  background-color: #f0f0f0;

  @media (max-width: 600px) {
    padding: 10px;
  }
`;

const Title = styled.h2`
  margin-bottom: 20px;
`;

const CheckboxGroup = styled.div`
  margin-bottom: 20px;
`;

const CheckboxItem = styled.div`
  margin-bottom: 10px;
  display: flex;
  align-items: center;
`;

const Checkbox = styled.input`
  margin-right: 10px;
`;

const Label = styled.label``;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: flex-end;

  @media (max-width: 600px) {
    flex-direction: column;  
  }
`;

const Button = styled.button`
  padding: 5px 15px;
  margin-left: 10px;
  min-width: 100px;

  @media (max-width: 600px) {
    margin-left: 0;
    margin-bottom: 10px;
  }
`;

export default ConsumptionTaxReturn;