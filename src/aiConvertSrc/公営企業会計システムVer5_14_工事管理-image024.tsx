import React from 'react';
import styled from 'styled-components';

// 入力フィールドのプロパティ型定義
type InputFieldProps = {
  label: string;
  value: string;
  onChange: (value: string) => void;
};

// 入力フィールドコンポーネント
const InputField: React.FC<InputFieldProps> = ({ label, value, onChange }) => {
  return (
    <InputWrapper>
      <Label>{label}</Label>
      <Input type="text" value={value} onChange={e => onChange(e.target.value)} />
    </InputWrapper>
  );
};

// 振替予約登録フォームのプロパティ型定義
type TransferReservationFormProps = {
  onSubmit: (data: TransferReservationData) => void;
};

// 振替予約登録フォームの入力データ型定義
type TransferReservationData = {
  transferDate: string;
  transferAmount: string;
  remarks: string;
  taxAmount: string;
};

// 振替予約登録フォームコンポーネント
const TransferReservationForm: React.FC<TransferReservationFormProps> = ({ onSubmit }) => {
  // 入力データのState
  const [formData, setFormData] = React.useState<TransferReservationData>({
    transferDate: '',
    transferAmount: '',
    remarks: '',
    taxAmount: '0.01',
  });

  // 入力変更ハンドラ
  const handleChange = (key: keyof TransferReservationData) => (value: string) => {
    setFormData(prev => ({ ...prev, [key]: value }));
  };

  // フォーム送信ハンドラ
  const handleSubmit = () => {
    onSubmit(formData);
  };

  return (
    <FormWrapper>
      <Title>振替対象外指示科目設定入力</Title>
      <InputField label="前期末" value={formData.transferDate} onChange={handleChange('transferDate')} />
      <InputField label="今期末" value={formData.transferAmount} onChange={handleChange('transferAmount')} />
      <InputField label="備考" value={formData.remarks} onChange={handleChange('remarks')} />
      <TaxSection>
        <InputField label="税率" value={formData.taxAmount} onChange={handleChange('taxAmount')} />
        <TaxTypeSelect>
          <option value="transferTax">3月分期末予定テスト登録</option>
        </TaxTypeSelect>
      </TaxSection>
      <SubmitButton onClick={handleSubmit}>登録</SubmitButton>
    </FormWrapper>
  );
};

// サンプルデータ
const sampleData: TransferReservationData = {
  transferDate: '2023/03/19',
  transferAmount: '10,000',
  remarks: '3月分期末予定テスト登録',
  taxAmount: '0.01',
};

// 使用例
const App: React.FC = () => {
  const handleSubmit = (data: TransferReservationData) => {
    console.log('Submit:', data);
  };

  return (
    <div>
      <TransferReservationForm onSubmit={handleSubmit} />
      <SampleData>
        <p>サンプルデータ:</p>
        <pre>{JSON.stringify(sampleData, null, 2)}</pre>
      </SampleData>
    </div>
  );
};

// スタイリング
const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 24px;
  background-color: #f0f0f0;
  border-radius: 8px;
`;

const Title = styled.h2`
  margin: 0;
  font-size: 24px;
`;

const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const Label = styled.label`
  flex: 1;
`;

const Input = styled.input`
  flex: 2;
  padding: 8px;
  border-radius: 4px;
  border: 1px solid #ccc;
`;

const TaxSection = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
`;

const TaxTypeSelect = styled.select`
  padding: 8px;
  border-radius: 4px;
  border: 1px solid #ccc;
`;

const SubmitButton = styled.button`
  padding: 8px 16px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  align-self: flex-end;

  &:hover {
    background-color: #0056b3;
  }
`;

const SampleData = styled.div`
  margin-top: 24px;
  padding: 16px;
  background-color: #f0f0f0;
  border-radius: 8px;
  font-family: monospace;
  white-space: pre-wrap;
`;

export default App;