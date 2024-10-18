import React from 'react';
import styled from '@emotion/styled';

type ReservationFormProps = {
  onSubmit: (data: ReservationData) => void;
};

type ReservationData = {
  year: number;
  month: number;
  day: number;
  hour: number;
  minute: number;
  numberOfPeople: number;
  isFirstTime: boolean;
  isBirthday: boolean;
  isAnniversary: boolean;
  name: string;
  phoneNumber: string;
  email: string;
  requests: string;
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #f0f0f0;
  @media (min-width: 768px) {
    max-width: 600px;
    margin: 0 auto;
  }
`;

const Title = styled.h2`
  margin-bottom: 20px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Section = styled.div`
  margin-bottom: 20px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 5px;
`;

const Input = styled.input`
  padding: 5px;
  margin-bottom: 10px;
`;

const Select = styled.select`
  padding: 5px;
  margin-bottom: 10px;
`;

const Checkbox = styled.input`
  margin-right: 5px;
`;

const Button = styled.button`
  padding: 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  cursor: pointer;
`;

const ReservationForm: React.FC<ReservationFormProps> = ({ onSubmit }) => {
  // 予約日時のデフォルト値を設定
  const currentDate = new Date();
  const defaultYear = currentDate.getFullYear();
  const defaultMonth = currentDate.getMonth() + 1;
  const defaultDay = currentDate.getDate();
  const defaultHour = 12;
  const defaultMinute = 0;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // フォームデータを収集
    const formData = new FormData(e.currentTarget);
    const data: ReservationData = {
      year: Number(formData.get('year')),
      month: Number(formData.get('month')),
      day: Number(formData.get('day')),
      hour: Number(formData.get('hour')),
      minute: Number(formData.get('minute')),
      numberOfPeople: Number(formData.get('numberOfPeople')),
      isFirstTime: formData.get('isFirstTime') === 'on',
      isBirthday: formData.get('isBirthday') === 'on',
      isAnniversary: formData.get('isAnniversary') === 'on',
      name: formData.get('name') as string,
      phoneNumber: formData.get('phoneNumber') as string,
      email: formData.get('email') as string,
      requests: formData.get('requests') as string,
    };
    onSubmit(data);
  };

  return (
    <Container>
      <Title>予約見積要求書作成</Title>
      <Form onSubmit={handleSubmit}>
        <Section>
          <Label>予約日時</Label>
          <Select name="year" defaultValue={defaultYear}>
            {Array.from({ length: 10 }, (_, i) => (
              <option key={i} value={defaultYear + i}>{defaultYear + i}年</option>
            ))}
          </Select>
          <Select name="month" defaultValue={defaultMonth}>
            {Array.from({ length: 12 }, (_, i) => (
              <option key={i} value={i + 1}>{i + 1}月</option>
            ))}
          </Select>
          <Select name="day" defaultValue={defaultDay}>
            {Array.from({ length: 31 }, (_, i) => (
              <option key={i} value={i + 1}>{i + 1}日</option>
            ))}
          </Select>
        </Section>
        <Section>
          <Label>時間</Label>
          <Input type="number" name="hour" defaultValue={defaultHour} />
          <span>時</span>
          <Input type="number" name="minute" defaultValue={defaultMinute} />
          <span>分</span>
        </Section>
        <Section>
          <Label>人数</Label>
          <Input type="number" name="numberOfPeople" />
        </Section>
        <Section>
          <Label>
            <Checkbox type="checkbox" name="isFirstTime" />
            初めての利用
          </Label>
          <Label>
            <Checkbox type="checkbox" name="isBirthday" />
            誕生日
          </Label>
          <Label>
            <Checkbox type="checkbox" name="isAnniversary" />
            記念日
          </Label>
        </Section>
        <Section>
          <Label>お名前</Label>
          <Input type="text" name="name" required />
        </Section>
        <Section>
          <Label>電話番号</Label>
          <Input type="tel" name="phoneNumber" required />
        </Section>
        <Section>
          <Label>メールアドレス</Label>
          <Input type="email" name="email" />
        </Section>
        <Section>
          <Label>要望事項</Label>
          <Input type="text" name="requests" />
        </Section>
        <Button type="submit">予約する</Button>
      </Form>
    </Container>
  );
};

// 使用例
const App: React.FC = () => {
  const handleSubmit = (data: ReservationData) => {
    console.log(data);
    // 予約データの送信処理など
  };

  return (
    <div>
      <h1>予約フォーム</h1>
      <ReservationForm onSubmit={handleSubmit} />
    </div>
  );
};

export default App;