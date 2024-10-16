import React from 'react';
import styled from '@emotion/styled';

// 特定課税仕入伝票管理入力コンポーネントの型定義
interface TaxablePurchaseInputProps {
  onSubmit: (data: FormData) => void;
}

// 特定課税仕入伝票管理入力コンポーネント
const TaxablePurchaseInput: React.FC<TaxablePurchaseInputProps> = ({ onSubmit }) => {
  // フォーム送信時の処理
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    onSubmit(formData);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Title>特定課税仕入伝票管理入力</Title>
      <DateRange>
        <Label>
          伝票日付
          <Input type="date" name="startDate" />
          ～
          <Input type="date" name="endDate" />
        </Label>
        <Label>
          <Input type="checkbox" name="includeNoDate" />
          課税の支出予算執行から説明のつかない伝票のみ抽出
        </Label>
      </DateRange>
      <Label>
        担当
        <Input type="text" name="person" />
      </Label>
      <RadioGroup>
        <Label>
          <Input type="radio" name="type" value="登録" />
          登録
        </Label>
        <Label>
          <Input type="radio" name="type" value="訂正" />
          訂正
        </Label>
        <Label>
          <Input type="radio" name="type" value="削除" />
          削除
        </Label>
      </RadioGroup>
      <SubmitButton type="submit">検索</SubmitButton>
    </Form>
  );
};

// スタイリング用のコンポーネント
const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const Title = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
`;

const DateRange = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
`;

const Label = styled.label`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const Input = styled.input`
  margin-left: 10px;
`;

const RadioGroup = styled.div`
  display: flex;
  margin-bottom: 20px;
`;

const SubmitButton = styled.button`
  padding: 10px 20px;
  font-size: 18px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

// サンプルデータ
const sampleData = {
  startDate: '2016/03/01',
  endDate: '2016/03/31',
  includeNoDate: true,
  person: '太田',
  type: '登録',
};

// 使用例
const App: React.FC = () => {
  const handleSubmit = (data: FormData) => {
    // フォームデータの処理
    console.log(data);
  };

  return (
    <div>
      <TaxablePurchaseInput onSubmit={handleSubmit} />
      <pre>{JSON.stringify(sampleData, null, 2)}</pre>
    </div>
  );
};

export default App;