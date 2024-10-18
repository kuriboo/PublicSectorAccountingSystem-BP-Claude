import React from 'react';
import styled from '@emotion/styled';

// 月次・年次消費税計算書のプロパティ型定義
type TaxReportProps = {
  startDate: string;
  endDate: string;
  forecastStart: string;
  forecastEnd: string;
  isTaxInclusive: boolean;
  isIndividualTax: boolean;
  taxRate: number;
  specialTaxRate: number;
};

// スタイル定義
const Container = styled.div`
  padding: 16px;
`;

const Title = styled.h2`
  font-size: 18px;
  margin-bottom: 16px;
`;

const DateRange = styled.div`
  margin-bottom: 16px;
`;

const CheckboxGroup = styled.div`
  margin-bottom: 8px;
`;

const Checkbox = styled.input`
  margin-right: 4px;
`;

const TaxRateInput = styled.input`
  width: 60px;
  margin-left: 8px;
`;

// 月次・年次消費税計算書コンポーネント
const TaxReport: React.FC<TaxReportProps> = ({
  startDate = '',
  endDate = '',
  forecastStart = '',
  forecastEnd = '',
  isTaxInclusive = false,
  isIndividualTax = false,
  taxRate = 0,
  specialTaxRate = 0,
}) => {
  return (
    <Container>
      <Title>月次・年次消費税計算書</Title>
      <DateRange>
        作表期間：
        <input type="text" defaultValue={startDate} /> ～ <input type="text" defaultValue={endDate} />
      </DateRange>
      <DateRange>
        予算期間：
        <input type="text" defaultValue={forecastStart} /> ～ <input type="text" defaultValue={forecastEnd} />
      </DateRange>
      <div>
        <CheckboxGroup>
          <label>
            <Checkbox type="checkbox" defaultChecked={isTaxInclusive} />
            「課税標準額調整入力」で登録した伝票も出力する
          </label>
        </CheckboxGroup>
        <CheckboxGroup>
          <label>
            <Checkbox type="checkbox" defaultChecked={isIndividualTax} />
            「集計のみ保存」のみの伝票を出力する
          </label>
        </CheckboxGroup>
        <CheckboxGroup>
          <label>
            「適格請求書発行事業者」のみの伝票を出力する
            <TaxRateInput type="number" defaultValue={specialTaxRate} />%
          </label>
        </CheckboxGroup>
      </div>
      税率 <TaxRateInput type="number" defaultValue={taxRate} />%
    </Container>
  );
};

// サンプルデータ
const sampleData: TaxReportProps = {
  startDate: '2022/07/01',
  endDate: '2022/07/31', 
  forecastStart: '2022/04/01',
  forecastEnd: '2023/03/31',
  isTaxInclusive: true,
  isIndividualTax: false,
  taxRate: 10,
  specialTaxRate: 8,
};

// 使用例
const TaxReportSample: React.FC = () => {
  return <TaxReport {...sampleData} />;  
};

export default TaxReport;