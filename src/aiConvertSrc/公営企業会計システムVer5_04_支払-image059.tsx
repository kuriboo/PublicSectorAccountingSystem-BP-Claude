import React from 'react';
import styled from 'styled-components';

// 予定表の型定義
type Schedule = {
  id: string;
  title: string;
  content: string;
};

// PredictionFormコンポーネントのProps型定義
type PredictionFormProps = {
  schedule: Schedule;
  onOk: (schedule: Schedule, amount: number, taxRate: number, consumptionTax: number) => void;
  onCancel: () => void;
};

// PredictionFormコンポーネント
const PredictionForm: React.FC<PredictionFormProps> = ({ schedule, onOk, onCancel }) => {
  // 状態管理用のstate
  const [amount, setAmount] = React.useState(0);
  const [taxRate, setTaxRate] = React.useState(10);
  const [consumptionTax, setConsumptionTax] = React.useState(0);

  // 金額入力時のハンドラ
  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputAmount = Number(e.target.value);
    setAmount(inputAmount);
    calculateTax(inputAmount, taxRate);
  };

  // 消費税率変更時のハンドラ
  const handleTaxRateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTaxRate = Number(e.target.value);
    setTaxRate(newTaxRate);
    calculateTax(amount, newTaxRate);
  };

  // 消費税計算
  const calculateTax = (amount: number, taxRate: number) => {
    const tax = Math.floor(amount * (taxRate / 100));
    setConsumptionTax(tax);
  };

  // OKボタンクリック時のハンドラ
  const handleOk = () => {
    onOk(schedule, amount, taxRate, consumptionTax);
  };

  // 日付表示のフォーマット
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    return `${year}/${month}/${day}`;
  };

  return (
    <FormWrapper>
      <FormGroup>
        <Label>予算科目</Label>
        <Input type="text" value={schedule.title} readOnly />
      </FormGroup>
      <FormGroup>
        <Label>節</Label>
        <Input type="text" value={schedule.id} readOnly />
      </FormGroup>
      <FormGroup>
        <Label>細節</Label>
        <Input type="text" value={schedule.content} readOnly />
      </FormGroup>
      <AmountGroup>
        <AmountLabel>予定額</AmountLabel>
        <AmountInput type="number" value={amount} onChange={handleAmountChange} />
      </AmountGroup>
      <TaxGroup>
        <TaxLabel>消費税率</TaxLabel>
        <TaxInput type="number" value={taxRate} onChange={handleTaxRateChange} />%
      </TaxGroup>
      <SummaryGroup>
        <SummaryLabel>消費税額</SummaryLabel>
        <SummaryValue>{consumptionTax.toLocaleString()}</SummaryValue>
      </SummaryGroup>
      <ButtonGroup>
        <CancelButton onClick={onCancel}>キャンセル</CancelButton>
        <OkButton onClick={handleOk}>OK</OkButton>
      </ButtonGroup>
    </FormWrapper>
  );
};

// スタイリング用のコンポーネント
const FormWrapper = styled.div`
  padding: 16px;
  background-color: #f0f0f0;
`;

const FormGroup = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
`;

const Label = styled.label`
  width: 100px;
  font-weight: bold;
`;

const Input = styled.input`
  flex: 1;
  padding: 4px;
`;

const AmountGroup = styled.div`
  display: flex;
  align-items: center;
  margin-top: 16px;
`;

const AmountLabel = styled.label`
  width: 100px;
  font-weight: bold;
`;

const AmountInput = styled.input`
  flex: 1;
  padding: 4px;
`;

const TaxGroup = styled.div`
  display: flex;
  align-items: center;
  margin-top: 8px;
`;

const TaxLabel = styled.label`
  width: 100px;
  font-weight: bold;
`;

const TaxInput = styled.input`
  width: 60px;
  padding: 4px;
  margin-right: 4px;
`;

const SummaryGroup = styled.div`
  display: flex;
  align-items: center;
  margin-top: 16px;
`;

const SummaryLabel = styled.label`
  width: 100px;
  font-weight: bold;
`;

const SummaryValue = styled.span`
  font-size: 18px;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 16px;
`;

const CancelButton = styled.button`
  padding: 8px 16px;
  background-color: #ccc;
  border: none;
  border-radius: 4px;
  margin-right: 8px;
  cursor: pointer;
`;

const OkButton = styled.button`
  padding: 8px 16px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

// サンプルデータ
const sampleSchedule: Schedule = {
  id: '0001',
  title: '総務/庁舎記事',
  content: '総務/庁舎記事',
};

// サンプル表示用のコンポーネント
const App: React.FC = () => {
  const handleOk = (schedule: Schedule, amount: number, taxRate: number, consumptionTax: number) => {
    console.log('OK:', schedule, amount, taxRate, consumptionTax);
  };

  const handleCancel = () => {
    console.log('キャンセル');
  };

  return (
    <div>
      <h1>予定表入力フォーム</h1>
      <PredictionForm
        schedule={sampleSchedule}
        onOk={handleOk}
        onCancel={handleCancel}
      />
    </div>
  );
};

export default App;