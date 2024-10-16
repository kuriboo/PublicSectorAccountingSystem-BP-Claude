import React from 'react';
import styled from 'styled-components';

// 税額計算のためのインターフェース
interface TaxCalculationProps {
  fiscalYear: string;
  startDate: string;
  endDate: string;
  includeInterimTax: boolean;
  includeProvisionalTax: boolean;
  taxRate: number;
  treatmentOfFraction: string;
  treatmentOfFractionLowerLimit: string;
  consumptionTaxRateAdjustment: boolean;
  roundDownToNearestYen: boolean;
  includeConsumptionTax: boolean;
  includeTaxExemptSales: boolean;
  treatMarginalGainAsNonTaxable: boolean;
  includeOutOfScopeSales: boolean;
  includeTaxExemptPurchases: boolean;
  includeOutOfScopePurchases: boolean;
  nonTaxableRevenue: string;
  nonTaxableExpenses: string;
}

// スタイル定義
const Container = styled.div`
  margin: 20px;
`;

const Title = styled.h2`
  font-size: 20px;
  margin-bottom: 20px;
`;

const Row = styled.div`
  margin-bottom: 15px;
`;

const Label = styled.label`
  margin-right: 10px;
`;

const Input = styled.input`
  margin-right: 5px;
`;

const Select = styled.select`
  margin-right: 5px;
`;

const Checkbox = styled.input`
  margin-right: 5px;
`;

// 消費税処理マスタコンポーネント
const ConsumptionTaxMaster: React.FC<TaxCalculationProps> = ({
  fiscalYear,
  startDate,
  endDate,
  includeInterimTax,
  includeProvisionalTax,
  taxRate,
  treatmentOfFraction,
  treatmentOfFractionLowerLimit,
  consumptionTaxRateAdjustment,
  roundDownToNearestYen,
  includeConsumptionTax,
  includeTaxExemptSales,
  treatMarginalGainAsNonTaxable,
  includeOutOfScopeSales,
  includeTaxExemptPurchases,  
  includeOutOfScopePurchases,
  nonTaxableRevenue,
  nonTaxableExpenses,
}) => {
  // 端数処理の選択肢
  const fractions = ['切上', '切捨'];

  return (
    <Container>
      <Title>消費税処理マスタ</Title>
      <Row>
        <Label>会計年度</Label>
        <span>{fiscalYear}</span>
      </Row>
      <Row>  
        <Label>年度設定</Label>
        <Input type="date" value={startDate} />
        〜
        <Input type="date" value={endDate} />
      </Row>
      <Row>
        <Checkbox type="checkbox" checked={includeInterimTax} />
        <Label>中告対象年度</Label>
      </Row>
      <Row>  
        <Checkbox type="checkbox" checked={includeProvisionalTax} />
        <Label>法適化措置</Label>
      </Row>
      <Row>
        <Label>計算方法</Label>  
        <Label>税率計算（仕入）</Label>
        <Select value={treatmentOfFraction}>
          {fractions.map((f) => (
            <option key={f} value={f}>
              {f}  
            </option>
          ))}
        </Select>
        <Label>税率計算（売上）</Label>
        <Select value={treatmentOfFraction}>
          {fractions.map((f) => (
            <option key={f} value={f}>
              {f}
            </option>  
          ))}
        </Select>
      </Row>
      <Row>
        <Label>仕入控除税額計算（全額控除とならない場合）</Label>
        <Select value={treatmentOfFractionLowerLimit}>
          <option value="個別対応方式">個別対応方式</option>
          <option value="一括比例配分方式">一括比例配分方式</option> 
        </Select>  
      </Row>
      <Row>
        <Label>課税売上割合に進する割合</Label>
        <Input type="number" value={taxRate} />%
      </Row>
      <Row>
        <Label>伝票起票時における仕入税額の入力方法</Label>
        <Select>
          <option>税率どおりの消費税額を入力</option>
          <option>控除割合を加味した消費税額を入力</option>  
          <option>また控除対象外消費税額を振替入力</option>
        </Select>
      </Row>
      <Row>
        <Checkbox type="checkbox" checked={consumptionTaxRateAdjustment} />
        <Label>課税売上返還</Label>
      </Row>
      <Row>
        <Checkbox type="checkbox" checked={roundDownToNearestYen} />
        <Label>貸倒回収</Label>
      </Row>
      <Row>
        <Checkbox type="checkbox" checked={includeConsumptionTax} /> 
        <Label>非課税売上返還</Label>
      </Row>
      <Row>  
        <Checkbox type="checkbox" checked={includeTaxExemptSales} />
        <Label>非課税輸出売上返還</Label>
      </Row>
      <Row>
        <Checkbox type="checkbox" checked={treatMarginalGainAsNonTaxable} />  
        <Label>有価証券売上</Label>
      </Row>
      <Row>
        <Checkbox type="checkbox" checked={includeOutOfScopeSales} />
        <Label>国債現先取引簿価</Label>
      </Row>
      <Row>  
        <Checkbox type="checkbox" checked={includeTaxExemptPurchases} />
        <Label>不課税収入（国外）</Label>  
      </Row>
      <Row>
        <Checkbox type="checkbox" checked={includeOutOfScopePurchases} />  
        <Label>免税売上返還</Label>
      </Row>
      <Row>
        <Label>課税仕入返還</Label>
        <Select value={nonTaxableRevenue}>  
          <option value="課上計算">課上計算</option>
          <option value="割戻計算">割戻計算</option>
        </Select>  
      </Row>
      <Row>
        <Label>課税仕入</Label>
        <Select value={nonTaxableExpenses}>
          <option value="課上計算">課上計算</option>
          <option value="割戻計算">割戻計算</option>  
        </Select>
      </Row>
    </Container>  
  );
};

// サンプルデータ
const sampleData: TaxCalculationProps = {
  fiscalYear: '令和06年04月01日',
  startDate: '令和06年04月01日',
  endDate: '令和07年03月31日', 
  includeInterimTax: true,
  includeProvisionalTax: false,
  taxRate: 100,
  treatmentOfFraction: '切上',
  treatmentOfFractionLowerLimit: '個別対応方式',
  consumptionTaxRateAdjustment: false,
  roundDownToNearestYen: false,
  includeConsumptionTax: false,
  includeTaxExemptSales: false,  
  treatMarginalGainAsNonTaxable: false,
  includeOutOfScopeSales: false,
  includeTaxExemptPurchases: false,
  includeOutOfScopePurchases: false,
  nonTaxableRevenue: '課上計算',
  nonTaxableExpenses: '課上計算',
};

// 使用例
const App: React.FC = () => {
  return (
    <div>
      <ConsumptionTaxMaster {...sampleData} />
    </div>
  );  
};

export default App;