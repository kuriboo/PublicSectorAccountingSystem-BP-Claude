import React from 'react';
import styled from '@emotion/styled';

type ReservationFormProps = {
  onSubmit: (data: ReservationData) => void;
};

type ReservationData = {
  date: string;
  time: string;
  numberOfPeople: number;
  courseType: string;
  name: string;
  phoneNumber: string;
  email: string;
  additionalRequests: string;
};

const ReservationForm: React.FC<ReservationFormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = React.useState<ReservationData>({
    date: '',
    time: '',
    numberOfPeople: 1,
    courseType: '',
    name: '',
    phoneNumber: '',
    email: '',
    additionalRequests: '',
  });

  // フォームの入力値が変更された時のハンドラ
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  // 予約ボタンがクリックされた時のハンドラ
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormSection>
        <Label>予約日</Label>
        <Input type="date" name="date" value={formData.date} onChange={handleChange} required />
        <Input type="time" name="time" value={formData.time} onChange={handleChange} required />
      </FormSection>
      
      <FormSection>
        <Label>人数</Label>
        <Select name="numberOfPeople" value={formData.numberOfPeople} onChange={handleChange}>
          {[...Array(10)].map((_, i) => (
            <option key={i} value={i + 1}>{i + 1}名</option>
          ))}
        </Select>
      </FormSection>

      <FormSection>
        <Label>予約コース</Label>
        <RadioGroup>
          <Radio type="radio" id="course-a" name="courseType" value="A" checked={formData.courseType === 'A'} onChange={handleChange} />
          <RadioLabel htmlFor="course-a">昼の部</RadioLabel>

          <Radio type="radio" id="course-b" name="courseType" value="B" checked={formData.courseType === 'B'} onChange={handleChange} />
          <RadioLabel htmlFor="course-b">夜の部</RadioLabel>
        </RadioGroup>
      </FormSection>

      <FormSection>
        <Label>予約者情報</Label>
        <Input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="代表者名" required />
        <Input type="tel" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} placeholder="電話番号" required />
        <Input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="メールアドレス" />
      </FormSection>

      <FormSection>
        <Label>連絡事項</Label>
        <Textarea name="additionalRequests" value={formData.additionalRequests} onChange={handleChange} rows={3} />
      </FormSection>

      <SubmitButton type="submit">予約</SubmitButton>
    </Form>
  );
};

// サンプルデータを用いたコンポーネントの使用例
const SampleReservationForm: React.FC = () => {
  const handleSubmit = (data: ReservationData) => {
    console.log('Submitted data:', data);
    // ここで予約データをサーバーに送信するなどの処理を行う
  };

  return (
    <div>
      <h2>予約フォーム</h2>
      <ReservationForm onSubmit={handleSubmit} />
    </div>
  );
};

export default SampleReservationForm;

// スタイリング用のコンポーネント
const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-width: 400px;
  margin: 0 auto;
`;

const FormSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const Label = styled.label`
  font-weight: bold;
`;

const Input = styled.input`
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Select = styled.select`
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const RadioGroup = styled.div`
  display: flex;
  gap: 10px;
`;

const Radio = styled.input`
  margin-right: 5px;
`;

const RadioLabel = styled.label`
  margin-right: 15px;
`;

const Textarea = styled.textarea`
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const SubmitButton = styled.button`
  padding: 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;