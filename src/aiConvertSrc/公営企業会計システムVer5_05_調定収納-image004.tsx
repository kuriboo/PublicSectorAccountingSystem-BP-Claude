import React from 'react';
import styled from 'styled-components';

// 収納日統解除入力の型定義
type Receipt = {
  year: string;
  month: string;
  date: string;
};

type Input = {
  label: string;
  value: string;
};

type ReceiptInputProps = {
  receiptDate: Receipt;
  onReceiptDateChange: (receipt: Receipt) => void;
  onSubmit: () => void;
  onCancel: () => void;
  onClear: () => void;
};

// スタイル定義
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const Title = styled.div`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 20px;
`;

const Form = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const InputGroup = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;

const InputLabel = styled.label`
  margin-right: 10px;
`;

const InputField = styled.input`
  padding: 5px;
  width: 60px;
`;

const SubmitButton = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  cursor: pointer;
  margin-right: 10px;
`;

const CancelButton = styled.button`
  padding: 10px 20px;
  background-color: #6c757d;
  color: #fff;
  border: none;
  cursor: pointer;
  margin-right: 10px;
`;

const ClearButton = styled.button`
  padding: 10px 20px;
  background-color: #dc3545;
  color: #fff;
  border: none;
  cursor: pointer;
`;

// 収納日統解除入力コンポーネント
const ReceiptInput: React.FC<ReceiptInputProps> = ({
  receiptDate,
  onReceiptDateChange,
  onSubmit,
  onCancel,
  onClear,
}) => {
  // 入力フィールドの変更ハンドラ
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>, field: keyof Receipt) => {
    const value = e.target.value;
    onReceiptDateChange({ ...receiptDate, [field]: value });
  };

  // 入力フィールドのレンダリング
  const renderInput = (label: string, value: string, field: keyof Receipt) => (
    <InputGroup>
      <InputLabel>{label}</InputLabel>
      <InputField
        type="text"
        value={value}
        onChange={(e) => handleInputChange(e, field)}
      />
    </InputGroup>
  );

  return (
    <Container>
      <Title>収納日統解除入力(集合)</Title>
      <Form>
        {renderInput('節', receiptDate.year, 'year')}
        {renderInput('細節', receiptDate.month, 'month')}
        {renderInput('明細', receiptDate.date, 'date')}
        <InputGroup>
          <SubmitButton onClick={onSubmit}>OK</SubmitButton>
          <CancelButton onClick={onCancel}>クリア</CancelButton>
          <ClearButton onClick={onClear}>終了</ClearButton>
        </InputGroup>
      </Form>
    </Container>
  );
};

// サンプルデータ
const sampleData = {
  year: '001/01/01',
  month: '0001',
  date: '0002  0002-SNMI',
};

// 使用例
const App: React.FC = () => {
  const [receipt, setReceipt] = React.useState<Receipt>(sampleData);

  const handleReceiptChange = (newReceipt: Receipt) => {
    setReceipt(newReceipt);
  };

  const handleSubmit = () => {
    // 送信処理
    console.log('Submit:', receipt);
  };

  const handleCancel = () => {
    // キャンセル処理
    console.log('Cancel');
  };

  const handleClear = () => {
    // クリア処理
    setReceipt({ year: '', month: '', date: '' });
  };

  return (
    <ReceiptInput
      receiptDate={receipt}
      onReceiptDateChange={handleReceiptChange}
      onSubmit={handleSubmit}
      onCancel={handleCancel}
      onClear={handleClear}
    />
  );
};

export default App;