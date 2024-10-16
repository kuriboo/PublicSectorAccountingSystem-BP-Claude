import React from 'react';
import styled from '@emotion/styled';

interface WaterBillingFormProps {
  // 入力項目のプロパティ定義
  registrationNumber: string;
  meterReadingDate: string;
  consumerNumber: string;
  meterNumber: string;
  usage: number;
  usageTax: number;
  sewerageTax: number;
  taxRate: number;
  amountBilled: number;
  deadlineDiscount: number;
  deadlineNormal: number;
  // イベントハンドラのプロパティ定義  
  onRegistrationNumberChange: (value: string) => void;
  onMeterReadingDateChange: (value: string) => void;
  onConsumerNumberChange: (value: string) => void;
  onMeterNumberChange: (value: string) => void;
  onUsageChange: (value: number) => void;
  onTaxRateChange: (value: number) => void;
  onSubmit: () => void;
  onCancel: () => void;
}

const WaterBillingForm: React.FC<WaterBillingFormProps> = ({
  registrationNumber,
  meterReadingDate,
  consumerNumber, 
  meterNumber,
  usage,
  usageTax,
  sewerageTax,
  taxRate,
  amountBilled,
  deadlineDiscount,
  deadlineNormal,
  onRegistrationNumberChange,
  onMeterReadingDateChange,
  onConsumerNumberChange,
  onMeterNumberChange,
  onUsageChange,
  onTaxRateChange,
  onSubmit,
  onCancel,
}) => {

  // 水道料金と下水道料金の計算
  const calculateTax = (usage: number, taxRate: number) => {
    return Math.floor(usage * taxRate);
  };

  // 請求金額の計算
  const calculateAmountBilled = (usageTax: number, sewerageTax: number) => {
    return usageTax + sewerageTax;
  };

  // 税率の変更ハンドラ
  const handleTaxRateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(e.target.value);
    onTaxRateChange(value);

    // 使用量が入力済みの場合、税率変更時に各料金を再計算
    if (usage > 0) {
      const newUsageTax = calculateTax(usage, value);
      const newSewerageTax = calculateTax(usage, value); 
      const newAmountBilled = calculateAmountBilled(newUsageTax, newSewerageTax);
      // 再計算結果を親コンポーネントに通知
      // （簡略化のため詳細は省略）
    }
  };

  // 使用量の変更ハンドラ  
  const handleUsageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    onUsageChange(value);

    // 税率が入力済みの場合、使用量変更時に各料金を再計算
    if (taxRate > 0) {
      const newUsageTax = calculateTax(value, taxRate);
      const newSewerageTax = calculateTax(value, taxRate);
      const newAmountBilled = calculateAmountBilled(newUsageTax, newSewerageTax);
      // 再計算結果を親コンポーネントに通知 
      // （簡略化のため詳細は省略）
    }
  };
  
  return (
    <FormWrapper>
      <div>
        <label>
          伝票日付: 
          <input type="text" value={registrationNumber} onChange={e => onRegistrationNumberChange(e.target.value)} />
        </label>
      </div>
      <div>
        <label>
          検針年月日:
          <input type="text" value={meterReadingDate} onChange={e => onMeterReadingDateChange(e.target.value)} />
        </label>
      </div>
      <div>
        <label>
          需要家番号: 
          <input type="text" value={consumerNumber} onChange={e => onConsumerNumberChange(e.target.value)} />
        </label>
      </div>
      <div>
        <label>  
          メーター番号:
          <input type="text" value={meterNumber} onChange={e => onMeterNumberChange(e.target.value)} />
        </label>
      </div>
      <TaxSection>
        <TaxType>
          <div>借方細目・明細</div>
          <div>借方科目</div>
          <div>借方明細</div>
          <div>貸方科目</div>
          <div>貸方細目</div> 
          <div>貸方明細</div>
        </TaxType>
        <TaxDetail>
          <div>水道料金収益</div>
          <div>水道料金収益</div>
          <div>水道料金収益</div>
          <div>仮受水道料金 水道料金</div>
          <div>仮受水道料金 仮受消費税等</div>  
          <div>仮受水道料金（日中）</div>
        </TaxDetail>
      </TaxSection>
      <div>
        <label>
          使用量:
          <input type="number" value={usage} onChange={handleUsageChange} />
        </label>
      </div>
      <div>  
        <label>
          税率:
          <input type="number" value={taxRate} onChange={handleTaxRateChange} />%
        </label>
      </div>
      <div>水道料金: {usageTax}</div>
      <div>下水道料金: {sewerageTax}</div>
      <div>請求金額: {amountBilled}</div>
      <div>請求税額: {Math.floor(amountBilled * taxRate / 100)}</div>
      <div>消費税額: {Math.floor(amountBilled * 0.08)}</div> 
      <div>
        <button onClick={onSubmit}>OK</button>
        <button onClick={onCancel}>クリア</button> 
        <button>キャンセル</button>
      </div>
    </FormWrapper>
  );
};

// スタイリング
const FormWrapper = styled.div`
  display: grid;
  grid-gap: 10px;

  label {
    display: block;
  }

  input {
    margin-left: 10px;
  }

  button {
    margin-right: 10px;
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

const TaxSection = styled.div`
  display: grid;
  grid-template-columns: 100px 1fr; 
  margin-bottom: 20px;

  > div {
    padding: 5px;
  }
`;

const TaxType = styled.div`
  text-align: center;
  background: #f0f0f0;
`; 

const TaxDetail = styled.div`
  > div {
    padding-left: 10px;
  }  
`;

// 使用例
const WaterBillingFormSample: React.FC = () => {
  // フォームの状態管理（useState等は省略）
  // ...

  return (
    <WaterBillingForm
      registrationNumber="000012"
      meterReadingDate="2023年12月25日"
      consumerNumber="00001"
      meterNumber="水道料金振替(川中地区)"
      usage={5}
      usageTax={5000}
      sewerageTax={4860}  
      taxRate={8}
      amountBilled={9860}
      deadlineDiscount={0}
      deadlineNormal={370}
      onRegistrationNumberChange={value => { /* 状態更新 */ }}
      onMeterReadingDateChange={value => { /* 状態更新 */ }}
      onConsumerNumberChange={value => { /* 状態更新 */ }}
      onMeterNumberChange={value => { /* 状態更新 */ }}
      onUsageChange={value => { /* 状態更新 */ }}
      onTaxRateChange={value => { /* 状態更新 */ }}
      onSubmit={() => { /* 送信処理 */ }}  
      onCancel={() => { /* キャンセル処理 */ }}
    />
  );  
};

export default WaterBillingForm;