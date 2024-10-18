import React from 'react';
import styled from 'styled-components';

// 型定義
interface ReserveFormProps {
  onSubmit: (data: ReserveData) => void;
}

interface ReserveData {
  date: string;
  district: string;
  branch: string;
  name: string;
  kana: string;
  purpose: string;
  inquiry: string;
  collectDate: string;
  deliveryDate: string;
}

// スタイル定義
const Form = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 600px;
  margin: 0 auto;
`;

const Label = styled.label`
  margin-bottom: 10px;
`;

const Input = styled.input`
  padding: 5px;
  margin-bottom: 20px;
`;

const Select = styled.select`
  padding: 5px;
  margin-bottom: 20px;
`;

const SubmitButton = styled.button`
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

// メインコンポーネント
const ReserveForm: React.FC<ReserveFormProps> = ({ onSubmit }) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // フォームデータの取得
    const formData = new FormData(e.currentTarget);
    const data: ReserveData = {
      date: formData.get('date') as string,
      district: formData.get('district') as string,
      branch: formData.get('branch') as string,
      name: formData.get('name') as string,
      kana: formData.get('kana') as string,
      purpose: formData.get('purpose') as string,
      inquiry: formData.get('inquiry') as string,
      collectDate: formData.get('collectDate') as string,
      deliveryDate: formData.get('deliveryDate') as string,
    };

    // 値が空の場合は処理しない
    if (!data.date || !data.name || !data.collectDate) {
      alert('必須項目を入力してください。');
      return;
    }

    onSubmit(data);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Label>
        日付:
        <Input type="date" name="date" required />
      </Label>
      
      <Label>
        地区:
        <Select name="district" required>
          <option value="">選択してください</option>
          <option value="地区1">地区1</option>
          <option value="地区2">地区2</option>
        </Select>
      </Label>
      
      <Label>
        支店:
        <Select name="branch" required>
          <option value="">選択してください</option>
          <option value="支店1">支店1</option>
          <option value="支店2">支店2</option>
        </Select>
      </Label>
      
      <Label>
        お名前:
        <Input type="text" name="name" required />
      </Label>
      
      <Label>
        フリガナ:
        <Input type="text" name="kana" />
      </Label>
      
      <Label>
        ご用件:
        <Select name="purpose">
          <option value="">選択してください</option>
          <option value="用件1">用件1</option>
          <option value="用件2">用件2</option>
        </Select>
      </Label>
      
      <Label>
        お問い合わせ:
        <Input type="text" name="inquiry" />
      </Label>

      <Label>
        集計先行番号:
        <Input type="text" name="collectDate" required />
      </Label>
      
      <Label>
        加速区分:
        <Input type="text" name="deliveryDate" />
      </Label>

      <SubmitButton type="submit">送信</SubmitButton>
    </Form>
  );
};

// 使用例
const SampleData: ReserveData = {
  date: '2023-09-01',
  district: '地区1',
  branch: '支店1', 
  name: '山田太郎',
  kana: 'ヤマダタロウ',
  purpose: '用件1',
  inquiry: 'サンプル問い合わせ',
  collectDate: '001:01:01',
  deliveryDate: '1',
};

const App: React.FC = () => {
  const handleSubmit = (data: ReserveData) => {
    console.log(data);
    // 送信処理など
  };

  return (
    <div>
      <h1>予約システム</h1>
      <ReserveForm onSubmit={handleSubmit} />
    </div>
  );
};

export default App;