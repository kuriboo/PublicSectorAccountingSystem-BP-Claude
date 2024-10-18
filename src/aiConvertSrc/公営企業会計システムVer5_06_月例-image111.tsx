import React from 'react';
import styled from 'styled-components';

// 型定義
type ReservationFormProps = {
  onSubmit: (data: ReservationData) => void;
};

type ReservationData = {
  reservationType: string;
  date: string;
  startTime: string;
  endTime: string;
  segment: string;
  content: string;
};

// スタイリング
const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
`;

const Title = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
`;

const FormGroup = styled.div`
  margin-bottom: 20px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 5px;
`;

const Input = styled.input`
  width: 100%;
  padding: 8px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Select = styled.select`
  width: 100%;
  padding: 8px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 8px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Button = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

// コンポーネント
const ReservationForm: React.FC<ReservationFormProps> = ({ onSubmit }) => {
  // フォーム送信時の処理
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data: ReservationData = {
      reservationType: formData.get('reservationType') as string,
      date: formData.get('date') as string,
      startTime: formData.get('startTime') as string,
      endTime: formData.get('endTime') as string,
      segment: formData.get('segment') as string,
      content: formData.get('content') as string,
    };
    onSubmit(data);
  };

  return (
    <Container>
      <Title>予算執行状況表</Title>
      <form onSubmit={handleSubmit}>
        <FormGroup>
          <Label>作表種別</Label>
          <Select name="reservationType" defaultValue="">
            <option value="" disabled>選択してください</option>
            <option value="予算執行状況表1（予定/月担）">予算執行状況表1（予定/月担）</option>
            <option value="予算執行状況表2（負担/執行）">予算執行状況表2（負担/執行）</option>
            <option value="予算執行状況表3（執行内訳）">予算執行状況表3（執行内訳）</option>
          </Select>
        </FormGroup>
        <FormGroup>
          <Label>作表日</Label>
          <Input type="date" name="date" required />
        </FormGroup>
        <FormGroup>
          <Label>予算科目</Label>
          <Input type="text" name="startTime" required />
        </FormGroup>
        <FormGroup>
          <Label>予算科目</Label>
          <Input type="text" name="endTime" required />
        </FormGroup>
        <FormGroup>
          <Label>作表区分</Label>
          <Select name="segment" defaultValue="日">
            <option value="日">日</option>
            <option value="節">節</option>
            <option value="細節">細節</option>
            <option value="明細">明細</option>
          </Select>
        </FormGroup>
        <FormGroup>
          <Label>集計対象</Label>
          <Select name="content" defaultValue="全体">
            <option value="全体">全体</option>
            <option value="ブロック">ブロック</option>
            <option value="セグメント">セグメント</option>
          </Select>
        </FormGroup>
        <Button type="submit">終了</Button>
      </form>
    </Container>
  );
};

export default ReservationForm;

// サンプルデータを使用した表示用コンポーネント
const SampleReservationForm = () => {
  const handleSubmit = (data: ReservationData) => {
    console.log(data);
    // ここでデータを処理する
  };

  return (
    <ReservationForm onSubmit={handleSubmit} />
  );
};

export { SampleReservationForm };