import React from 'react';
import styled from 'styled-components';

// 課税売上割合算定表のプロパティ定義
interface TaxableRatioCalculationProps {
  companyName: string;
  fiscalYear: number;
  taxableRatio: number;
  taxableStartDate: string;
  taxableEndDate: string;
  includeProjectFee: boolean;
  includeTaxableSales: boolean;
}

// スタイル定義
const Container = styled.div`
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  box-sizing: border-box;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Title = styled.h2`
  font-size: 20px;
  margin-bottom: 20px;
`;

const CompanyName = styled.div`
  font-size: 18px;
  margin-bottom: 10px;
`;

const Row = styled.div`
  display: flex;
  margin-bottom: 10px;
`;

const Label = styled.div`
  width: 120px;
  font-weight: bold;
`;

const Value = styled.div`
  flex: 1;
`;

const OptionList = styled.div`
  margin-top: 20px;
`;

// 課税売上割合算定表コンポーネント
const TaxableRatioCalculation: React.FC<TaxableRatioCalculationProps> = ({
  companyName,
  fiscalYear,
  taxableRatio,
  taxableStartDate,
  taxableEndDate,
  includeProjectFee,
  includeTaxableSales,
}) => {
  return (
    <Container>
      <Title>課税売上割合算定表</Title>
      <CompanyName>{companyName}</CompanyName>
      <Row>
        <Label>会計年度</Label>
        <Value>平成{fiscalYear}年度</Value>
      </Row>
      <Row>
        <Label>課税期間</Label>
        <Value>平成{fiscalYear}年4月1日　～　令和{fiscalYear + 1}年3月31日</Value>
      </Row>
      <OptionList>
        <div>出力対象選択</div>
        <div>
          <input type="checkbox" checked={includeProjectFee} readOnly /> 予算区分・項目別表
        </div>
        <div>
          <input type="checkbox" checked={includeTaxableSales} readOnly /> 課税売上割合算定表
        </div>
      </OptionList>
    </Container>
  );
};

export default TaxableRatioCalculation;

// 使用例
const App: React.FC = () => {
  return (
    <TaxableRatioCalculation
      companyName="株式会社シーアンドエー"
      fiscalYear={31}
      taxableRatio={0.95}
      taxableStartDate="平成31年4月1日"
      taxableEndDate="令和2年3月31日"
      includeProjectFee={true}
      includeTaxableSales={true}
    />
  );
};