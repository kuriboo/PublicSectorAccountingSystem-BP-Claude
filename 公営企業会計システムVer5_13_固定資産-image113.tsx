import React from 'react';
import styled from 'styled-components';

// 予定登録フォームのプロパティ型
type ScheduleFormProps = {
  onSubmit: (data: ScheduleData) => void;
};

// 予定データの型
type ScheduleData = {
  date: string;
  division: string;
  subject: string;
  content: string;
  startTime: string;
  endTime: string;
  activityLocation: string;
  travelTime: string;
};

// 予定登録フォームコンポーネント
const ScheduleForm: React.FC<ScheduleFormProps> = ({ onSubmit }) => {
  // フォームの状態管理
  const [formData, setFormData] = React.useState<ScheduleData>({
    date: '',
    division: '',
    subject: '',
    content: '',
    startTime: '',
    endTime: '',
    activityLocation: '',
    travelTime: '',
  });

  // フォームの入力値が変更された時のハンドラ
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  // フォームがサブミットされた時のハンドラ
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormField>
        <Label>施設名</Label>
        <Input type="text" name="subject" value={formData.subject} onChange={handleChange} required />
      </FormField>
      <FormField>
        <Label>分類</Label>
        <Select name="division" value={formData.division} onChange={handleChange}>
          <option value="">選択してください</option>
          {/* 分類の選択肢 */}
        </Select>
      </FormField>
      <FormField>
        <Label>開始時</Label>
        <Input type="text" name="startTime" value={formData.startTime} onChange={handleChange} />
      </FormField>
      {/* 残りのフォームフィールド */}
      <SubmitButton type="submit">登録</SubmitButton>
    </Form>
  );
};

// スタイリング
const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const FormField = styled.div`
  display: flex;
  align-items: center;
`;

const Label = styled.label`
  width: 100px;
`;

const Input = styled.input`
  padding: 0.5rem;
  flex: 1;
`;

const Select = styled.select`
  padding: 0.5rem;
  flex: 1;
`;

const SubmitButton = styled.button`
  padding: 0.5rem;
  background-color: #007bff;
  color: #fff;
  border: none;
  cursor: pointer;
`;

// サンプルデータ
const sampleData: ScheduleData = {
  date: '2023-12-22',
  division: '会議',
  subject: '経営会議',
  content: '経営方針について',
  startTime: '10:00',
  endTime: '12:00',
  activityLocation: '本社会議室',
  travelTime: '30分',
};

// 使用例
const App: React.FC = () => {
  const handleScheduleSubmit = (data: ScheduleData) => {
    console.log('予定登録:', data);
  };

  return (
    <div>
      <h1>予定登録フォーム</h1>
      <ScheduleForm onSubmit={handleScheduleSubmit} />
    </div>
  );
};

export default App;