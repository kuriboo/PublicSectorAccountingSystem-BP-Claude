import React from 'react';
import styled from 'styled-components';

// 特定課税仕入伝票管理入力のプロパティ型定義
type TaxInvoiceInputProps = {
  onClose: () => void;
  onSubmit: (data: TaxInvoiceInputData) => void;
};

// 特定課税仕入伝票入力データの型定義
type TaxInvoiceInputData = {
  taxType: string;
  orderDate: Date;
  deadline: Date;
  billingAmount: number;
  taxAmount: number;
  totalAmount: number;
  expenseType: string;
  note: string;
};

// 特定課税仕入伝票管理入力コンポーネント
const TaxInvoiceInput: React.FC<TaxInvoiceInputProps> = ({ onClose, onSubmit }) => {
  // 状態管理用のstate
  const [taxType, setTaxType] = React.useState('課税');
  const [orderDate, setOrderDate] = React.useState(new Date());
  const [deadline, setDeadline] = React.useState(new Date());
  const [billingAmount, setBillingAmount] = React.useState(0);
  const [taxAmount, setTaxAmount] = React.useState(0);
  const [totalAmount, setTotalAmount] = React.useState(0);
  const [expenseType, setExpenseType] = React.useState('');
  const [note, setNote] = React.useState('');

  // 課税区分変更時の処理
  const handleTaxTypeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTaxType(e.target.value);
  };

  // 発生日変更時の処理 
  const handleOrderDateChange = (date: Date) => {
    setOrderDate(date);
  };

  // 支払期限変更時の処理
  const handleDeadlineChange = (date: Date) => {
    setDeadline(date);
  };

  // 請求金額変更時の処理
  const handleBillingAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const amount = Number(e.target.value);
    setBillingAmount(amount);
    calculateTotalAmount(amount, taxAmount);
  };

  // 消費税額変更時の処理  
  const handleTaxAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const amount = Number(e.target.value);
    setTaxAmount(amount);
    calculateTotalAmount(billingAmount, amount);
  };

  // 合計金額の計算
  const calculateTotalAmount = (billing: number, tax: number) => {
    const total = billing + tax;
    setTotalAmount(total);
  };

  // 経費科目変更時の処理
  const handleExpenseTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setExpenseType(e.target.value);
  };
  
  // 備考変更時の処理
  const handleNoteChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNote(e.target.value);
  };

  // OKボタンクリック時の処理
  const handleOk = () => {
    const data: TaxInvoiceInputData = {
      taxType,
      orderDate,
      deadline,
      billingAmount,
      taxAmount,
      totalAmount,
      expenseType,
      note,
    };
    onSubmit(data);
  };

  return (
    <Container>
      <Title>特定課税仕入伝票管理入力</Title>
      
      <DateWrapper>
        <Label>発生日付</Label>
        <DateInput
          value={orderDate}
          onChange={handleOrderDateChange}
        />
        <Label>支払期限</Label>
        <DateInput 
          value={deadline}
          onChange={handleDeadlineChange}
        />
      </DateWrapper>

      <RadioWrapper>
        <RadioButton
          type="radio"
          value="課税"
          checked={taxType === '課税'}
          onChange={handleTaxTypeChange}
        />
        <RadioLabel>課税</RadioLabel>

        <RadioButton
          type="radio" 
          value="非課税"
          checked={taxType === '非課税'}
          onChange={handleTaxTypeChange}
        />
        <RadioLabel>非課税</RadioLabel>
        
        <RadioButton
          type="radio"
          value="返還"
          checked={taxType === '返還'}
          onChange={handleTaxTypeChange}  
        />
        <RadioLabel>返還</RadioLabel>
      </RadioWrapper>
      
      <InputWrapper>
        <Label>請求金額</Label>
        <Input
          type="number"
          value={billingAmount}
          onChange={handleBillingAmountChange}
        />
        <Label>消費税額</Label>
        <Input
          type="number" 
          value={taxAmount}
          onChange={handleTaxAmountChange}
        />
      </InputWrapper>

      <InputWrapper>
        <Label>合計金額</Label>
        <Input
          type="number"
          value={totalAmount}
          readOnly
        />  
      </InputWrapper>
      
      <SelectWrapper>
        <Label>経費科目</Label>
        <Select value={expenseType} onChange={handleExpenseTypeChange}>
          <option value="">選択してください</option>
          <option value="旅費交通費">旅費交通費</option>
          <option value="会議費">会議費</option>
          <option value="雑費">雑費</option>
        </Select>
      </SelectWrapper>

      <InputWrapper>
        <Label>備考</Label>
        <Input
          type="text"
          value={note}
          onChange={handleNoteChange}
        />
      </InputWrapper>

      <ButtonWrapper>
        <Button onClick={handleOk}>OK</Button>
        <Button onClick={onClose}>クリア</Button>
        <Button onClick={onClose}>終了</Button>
      </ButtonWrapper>
    </Container>
  );
};

// サンプルデータ
const sampleData: TaxInvoiceInputData = {
  taxType: '課税',
  orderDate: new Date('2016/03/01'),
  deadline: new Date('2016/03/31'),  
  billingAmount: 10000,
  taxAmount: 1000,
  totalAmount: 11000,
  expenseType: '旅費交通費',
  note: '出張旅費',
};

// 使用例
const TaxInvoiceSample: React.FC = () => {
  const handleSubmit = (data: TaxInvoiceInputData) => {
    console.log(data);
  };

  return (
    <TaxInvoiceInput 
      onClose={() => console.log('close')}
      onSubmit={handleSubmit}
    />  
  );
};

// スタイリング
const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f0f0f0;
`;

const Title = styled.h2`
  margin-bottom: 20px;
  text-align: center;
`;

const DateWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const RadioWrapper = styled.div`
  margin-bottom: 10px;
`;

const RadioButton = styled.input`
  margin-right: 5px;
`;

const RadioLabel = styled.label`
  margin-right: 10px;
`;

const Label = styled.div`
  width: 100px;
`;

const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const Input = styled.input`
  flex: 1;
  padding: 5px;
`;

const SelectWrapper = styled.div`
  display: flex;
  align-items: center; 
  margin-bottom: 10px;
`;

const Select = styled.select`
  flex: 1;
  padding: 5px;
`;

const ButtonWrapper = styled.div`
  text-align: center;
`;

const Button = styled.button`
  margin: 0 5px;
  padding: 5px 10px;
`;

// 日付入力用のコンポーネント（ライブラリ等を使用する場合は適宜変更）
const DateInput = styled.input.attrs({ type: 'date' })`
  padding: 5px;
  margin-right: 10px;
`;

export default TaxInvoiceSample;