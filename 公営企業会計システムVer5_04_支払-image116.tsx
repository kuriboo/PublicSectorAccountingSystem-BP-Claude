import React from 'react';
import styled from 'styled-components';

// 出納入力フォームのプロパティ型定義
type NyuryokuFormProps = {
  teikiYosoDate?: string;
  teikiTukiDate?: string;
  destination?: string;
  from?: string;
  company?: string;
  price?: number;
  payment?: number;
  reason?: string;
  effect?: string;
  paymentMethod?: string;
  paymentDate?: string;
  onSubmit: (data: NyuryokuFormData) => void;
};

// 出納入力フォームの入力データ型定義 
type NyuryokuFormData = {
  teikiYosoDate: string;
  teikiTukiDate: string;
  destination: string;
  from: string;
  company: string;
  price: number;
  payment: number;
  reason: string;
  effect: string;
  paymentMethod: string;
  paymentDate: string;
};

// 出納入力フォームコンポーネント
const NyuryokuForm: React.FC<NyuryokuFormProps> = ({
  teikiYosoDate = '',
  teikiTukiDate = '',
  destination = '',
  from = '',
  company = '',
  price = 0,
  payment = 0,
  reason = '',
  effect = '',
  paymentMethod = '',
  paymentDate = '',
  onSubmit,
}) => {
  // フォーム送信時のハンドラ
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data: NyuryokuFormData = {
      teikiYosoDate,
      teikiTukiDate,
      destination,
      from,
      company,
      price,
      payment,
      reason,
      effect,
      paymentMethod,
      paymentDate,
    };
    onSubmit(data);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Row>
        <Label>支払予定日</Label>
        <DateInput type="date" defaultValue={teikiYosoDate} />
        <Label>支払締日</Label>
        <DateInput type="date" defaultValue={teikiTukiDate} />
      </Row>
      <Row>
        <Label>支払先</Label>
        <Input type="text" defaultValue={destination} />
        <Label>から</Label>
        <Input type="text" defaultValue={from} />
        <Label>その他</Label>
        <Input type="text" defaultValue={company} />
      </Row>
      <Row>
        <Label>所属</Label>
        <Input type="text" defaultValue={reason} />
        <Label>対象</Label>
        <Input type="text" defaultValue={effect} />
      </Row>
      <Row>
        <Label>区分</Label>
        <Input type="text" defaultValue={paymentMethod} />
        <Label>対象</Label>
        <Input type="text" defaultValue={paymentMethod} />
      </Row>
      <Row>
        <Label>摘要</Label>
        <TextArea defaultValue={effect} />
      </Row>
      <SubmitButton type="submit">表示</SubmitButton>
    </Form>
  );
};

// サンプルデータ
const sampleData: NyuryokuFormData = {
  teikiYosoDate: '令和04年03月31日',
  teikiTukiDate: '令和04年03月31日',
  destination: '農業集落排水事業 テストシナリオ15',
  from: '',
  company: '',
  price: 15000,
  payment: 15000,
  reason: '下水道事業特別会計',
  effect: 'テストシナリオ15',
  paymentMethod: '7',
  paymentDate: '令和04年03月31日',
};

// サンプル表示用コンポーネント
const SampleNyuryokuForm = () => {
  const handleSubmit = (data: NyuryokuFormData) => {
    console.log(data);
    // 送信処理など
  };

  return <NyuryokuForm {...sampleData} onSubmit={handleSubmit} />;
};

// スタイリング
const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
  max-width: 600px;
  margin: 0 auto;
`;

const Row = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: stretch;
  }
`;

const Label = styled.label`
  flex: 1;
`;

const Input = styled.input`
  flex: 2;
  padding: 4px;
`;

const DateInput = styled(Input)`
  flex: 1;
`;

const TextArea = styled.textarea`
  flex: 1;
  padding: 4px;
`;

const SubmitButton = styled.button`
  background: #1e88e5;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 8px 16px;
  cursor: pointer;
`;

export default NyuryokuForm;