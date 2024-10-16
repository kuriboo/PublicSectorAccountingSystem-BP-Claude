import React, { ChangeEvent, useState } from 'react';
import styled from '@emotion/styled';

// 補てん財源表作成コンポーネントの型定義
type CreateFundingSourceFormProps = {
  onSubmit: (data: { year: number; tableNo: number; selectedFundingType: string; fundingAmount: number; remarks: string }) => void;
};

// スタイル定義
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #f0f0f0;
  border-radius: 5px;
  width: 100%;
  max-width: 400px;
  box-sizing: border-box;
  
  @media (max-width: 600px) {
    max-width: 100%;
  }
`;

const FormField = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
  width: 100%;
`;

const Label = styled.label`
  font-weight: bold;
  margin-bottom: 5px;
`;

const Input = styled.input`
  padding: 8px;
  border-radius: 3px;
  border: 1px solid #ccc;
`;

const Select = styled.select`
  padding: 8px;
  border-radius: 3px;
  border: 1px solid #ccc;
`;

const TextArea = styled.textarea`
  padding: 8px;
  border-radius: 3px;
  border: 1px solid #ccc;
`;

const FormFooter = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
`;

const SubmitButton = styled.button`
  padding: 8px 16px;
  border-radius: 3px;
  border: none;
  background-color: #007bff;
  color: #fff;
  cursor: pointer;
`;

// 補てん財源表作成コンポーネント
const CreateFundingSourceForm: React.FC<CreateFundingSourceFormProps> = ({ onSubmit }) => {
  const [year, setYear] = useState<number>(0);
  const [tableNo, setTableNo] = useState<number>(1);
  const [selectedFundingType, setSelectedFundingType] = useState<string>('予算');
  const [fundingAmount, setFundingAmount] = useState<number>(1);
  const [remarks, setRemarks] = useState<string>('');

  // 送信ボタンクリック時の処理
  const handleSubmit = () => {
    onSubmit({ year, tableNo, selectedFundingType, fundingAmount, remarks });
  };

  return (
    <Container>
      <FormField>
        <Label>年度</Label>
        <Input type="number" value={year} onChange={(e: ChangeEvent<HTMLInputElement>) => setYear(Number(e.target.value))} />
      </FormField>
      <FormField>
        <Label>表No.</Label>
        <Input type="number" value={tableNo} min={1} onChange={(e: ChangeEvent<HTMLInputElement>) => setTableNo(Number(e.target.value))} />
      </FormField>
      <FormField>
        <Label>区分</Label>
        <Select value={selectedFundingType} onChange={(e: ChangeEvent<HTMLSelectElement>) => setSelectedFundingType(e.target.value)}>
          <option value="予算">予算</option>
          <option value="決算">決算</option>
        </Select>
      </FormField>
      <FormField>
        <Label>予算編成区分</Label>
        <Input type="number" value={fundingAmount} min={1} onChange={(e: ChangeEvent<HTMLInputElement>) => setFundingAmount(Number(e.target.value))} />
      </FormField>
      <FormField>
        <Label>備考</Label>
        <TextArea rows={3} value={remarks} onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setRemarks(e.target.value)} />
      </FormField>
      <FormFooter>
        <SubmitButton onClick={handleSubmit}>終了</SubmitButton>
      </FormFooter>
    </Container>
  );
};

// サンプルデータを用いたコンポーネントの使用例
const SampleUsage: React.FC = () => {
  const handleFormSubmit = (data: { year: number; tableNo: number; selectedFundingType: string; fundingAmount: number; remarks: string }) => {
    console.log('Submitted data:', data);
    // ここでフォームの送信処理を行う
  };

  return (
    <div>
      <h2>補てん財源表作成</h2>
      <CreateFundingSourceForm onSubmit={handleFormSubmit} />
    </div>
  );
};

export default SampleUsage;