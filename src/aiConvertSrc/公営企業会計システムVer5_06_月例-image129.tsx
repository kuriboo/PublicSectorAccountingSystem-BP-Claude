import React from 'react';
import styled from '@emotion/styled';

// 消費税計算明細書のプロパティ型定義
type TaxStatementProps = {
  startDate: string;
  endDate: string;
  taxRate: number;
  collectionMethod: '預かり' | '積立' | '税込';
  inTaxRateCalc: boolean;
  outTaxRateCalc: boolean;
  discountTaxRateCalc: boolean;
  discountTaxRate: number;
  calculation: '税率どおりの消費税額を入力' | '控除対象となった消費税額を入力または控除対象外消費税額を振替入力';
};

// 各入力項目のスタイル定義
const InputWrapper = styled.div`
  margin-bottom: 16px;
`;

const InputLabel = styled.label`
  display: block;
  font-weight: bold;
  margin-bottom: 8px;
`;

const InputField = styled.input`
  width: 120px;
  padding: 4px;
`;

const CheckboxWrapper = styled.div`
  margin-bottom: 8px;
`;

const ButtonWrapper = styled.div`
  text-align: center;
`;

const Button = styled.button`
  padding: 8px 16px;
  margin: 0 4px;
`;

// 消費税計算明細書コンポーネント
const TaxStatement: React.FC<TaxStatementProps> = ({
  startDate,
  endDate,
  taxRate,
  collectionMethod,
  inTaxRateCalc,
  outTaxRateCalc,
  discountTaxRateCalc,
  discountTaxRate,
  calculation,
}) => {
  return (
    <div>
      <h2>消費税計算明細書</h2>
      <InputWrapper>
        <InputLabel>範囲指定</InputLabel>
        <div>
          <InputField type="date" value={startDate} /> ～ <InputField type="date" value={endDate} />
          <InputField type="number" value={taxRate} />%
        </div>
      </InputWrapper>
      <InputWrapper>
        <InputLabel>集計対象</InputLabel>
        <div>
          <label>
            <input type="radio" checked={collectionMethod === '預かり'} />
            全体
          </label>
          <label>
            <input type="radio" checked={collectionMethod === '積立'} />
            ブロック
          </label>
          <label>
            <input type="radio" checked={collectionMethod === '税込'} />
            セグメント
          </label>
        </div>
      </InputWrapper>
      <CheckboxWrapper>
        <label>
          <input type="checkbox" checked={inTaxRateCalc} />
          「課税標準額調整入力」で登録した伝票も出力する
        </label>
      </CheckboxWrapper>
      <CheckboxWrapper>
        <label>
          <input type="checkbox" checked={outTaxRateCalc} />
          「軽減の対象」のみの伝票を出力する
        </label>
      </CheckboxWrapper>
      <CheckboxWrapper>
        <label>
          <input type="checkbox" checked={discountTaxRateCalc} />
          「適用額求書発行事業者」のみの伝票を出力する
        </label>
        <InputField type="number" value={discountTaxRate} />%
      </CheckboxWrapper>
      <InputWrapper>
        <InputLabel>計算方法</InputLabel>
        <div>
          <label>
            <input type="radio" checked={calculation === '税率どおりの消費税額を入力'} />
            税率どおりの消費税額を入力
          </label>
          <label>
            <input type="radio" checked={calculation === '控除対象となった消費税額を入力または控除対象外消費税額を振替入力'} />
            控除対象となった消費税額を入力または控除対象外消費税額を振替入力
          </label>
        </div>
      </InputWrapper>
      <ButtonWrapper>
        <Button>CSV出力</Button>
        <Button>クリア</Button>
        <Button>終了</Button>
      </ButtonWrapper>
    </div>
  );
};

// サンプルデータを用いた使用例
const App: React.FC = () => {
  const taxStatementProps: TaxStatementProps = {
    startDate: '2023-01-01',
    endDate: '2023-12-31',
    taxRate: 10,
    collectionMethod: '預かり',
    inTaxRateCalc: true,
    outTaxRateCalc: false,
    discountTaxRateCalc: true,
    discountTaxRate: 8,
    calculation: '税率どおりの消費税額を入力',
  };

  return (
    <div>
      <h1>消費税計算明細書</h1>
      <TaxStatement {...taxStatementProps} />
    </div>
  );
};

export default App;