import React from 'react';
import styled from '@emotion/styled';

type TaxSettingFormProps = {
  year: number;
  month: number;
  fromDate: string;
  toDate: string;
  taxType: 'general' | 'reduced' | 'exempt';
  rate: number;
  isSpecialTax: boolean;
  specialTaxRate: number;
  isRoundDown: boolean;
  isOmitFraction: boolean;
  isAdjustFraction: boolean;
  adjustFractionRate: number;
};

const TaxSettingForm: React.FC<TaxSettingFormProps> = ({
  year,
  month,
  fromDate,
  toDate,
  taxType,
  rate,
  isSpecialTax,
  specialTaxRate,
  isRoundDown,
  isOmitFraction,
  isAdjustFraction,
  adjustFractionRate,
}) => {
  // 税率の入力フィールドを生成
  const renderRateInput = () => {
    if (taxType === 'general' || taxType === 'reduced') {
      return <input type="number" value={rate} />;
    }
    return null;
  };

  return (
    <Form>
      <Row>
        <span>作成年月</span>
        <input type="number" value={fromDate} />
        <span>～</span>
        <input type="number" value={toDate} />
        <span>予算科目</span>
        <input type="number" value={year * 100000000 + month} />
        <span>～</span> 
        <input type="number" value={9999999999} />
      </Row>
      <Row>
        <span>作表区分</span>
        <label>
          <input type="radio" checked={taxType === 'general'} />
          節
        </label>
        <label>
          <input type="radio" checked={taxType === 'reduced'} />
          細節
        </label>
        <label>
          <input type="radio" checked={taxType === 'exempt'} />
          明細
        </label>
        <span>税率</span>
        {renderRateInput()}
        <span>%</span>
        <label>
          <input type="checkbox" checked={isSpecialTax} />
          軽減税率
        </label>
      </Row>
      <Row>
        <label>
          <input type="checkbox" checked={isRoundDown} />
          「課税標準額×税率」で登録した伝票も出力する
        </label>
      </Row>
      <Row>  
        <label>
          <input type="checkbox" checked={isOmitFraction} />
          「軽減のみ保存」のみの伝票を出力する
        </label>
      </Row>
      <Row>
        <label>  
          <input type="checkbox" checked={isAdjustFraction} />
          「課税請求書発行事業者」のみの伝票を出力する
        </label>
        <input type="number" value={adjustFractionRate} />
        <span>%</span>
      </Row>
      <Row>
        <OKButton>OK</OKButton>
        <ClearButton>クリア</ClearButton>  
        <EndButton>終了</EndButton>
      </Row>
    </Form>
  );
};

// スタイリング
const Form = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 16px;
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const OKButton = styled.button`
  padding: 4px 16px;
  background: #1976d2;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const ClearButton = styled.button`
  padding: 4px 16px;
  background: #9e9e9e;
  color: white;  
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const EndButton = styled.button`
  padding: 4px 16px;
  background: #f44336;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;  
`;

// サンプルデータ
const sampleData: TaxSettingFormProps = {
  year: 2023,
  month: 7,
  fromDate: '2023-05-01',
  toDate: '2023-06-30',
  taxType: 'general',
  rate: 10,
  isSpecialTax: false,
  specialTaxRate: 8,
  isRoundDown: true,
  isOmitFraction: false, 
  isAdjustFraction: false,
  adjustFractionRate: 0,
};

const App: React.FC = () => {
  return (
    <div>
      <h1>消費税計算書条件作成</h1>
      <TaxSettingForm {...sampleData} />
    </div>
  );  
};

export default App;