import React from 'react';
import styled from '@emotion/styled';

interface ReservationFormProps {
  onSubmit: (data: ReservationData) => void;
}

interface ReservationData {
  date: {
    from: Date;
    to: Date;
  };
  title: string;
  allDay: boolean;
  count: number;
  remarks: string;
}

const ReservationForm: React.FC<ReservationFormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = React.useState<ReservationData>({
    date: {
      from: new Date(),
      to: new Date(),
    },
    title: '',
    allDay: true,
    count: 1,
    remarks: '',
  });

  // フォームの値が変更された時の処理
  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type, checked } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  // 日付が変更された時の処理
  const handleDateChange = (key: 'from' | 'to') => (date: Date | null) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      date: {
        ...prevFormData.date,
        [key]: date || new Date(),
      },
    }));
  };

  // フォーム送信時の処理
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit(formData);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormSection>
        <Label>期間指定</Label>
        <DateInputs>
          <DateInput
            type="date"
            value={formData.date.from.toISOString().slice(0, 10)}
            onChange={handleDateChange('from')}
          />
          <DateSeparator>～</DateSeparator>
          <DateInput
            type="date"
            value={formData.date.to.toISOString().slice(0, 10)}
            onChange={handleDateChange('to')}
          />
        </DateInputs>
      </FormSection>
      <FormSection>
        <Label>タイトル</Label>
        <Input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          required
        />
      </FormSection>
      <FormSection>
        <Label>終日</Label>
        <AllDayInputs>
          <AllDayInput
            type="radio"
            id="allDay"
            name="allDay"
            value="true"
            checked={formData.allDay}
            onChange={handleChange}
          />
          <AllDayLabel htmlFor="allDay">する</AllDayLabel>
          <AllDayInput
            type="radio"
            id="notAllDay"
            name="allDay" 
            value="false"
            checked={!formData.allDay}
            onChange={handleChange}
          />
          <AllDayLabel htmlFor="notAllDay">しない</AllDayLabel>
        </AllDayInputs>
      </FormSection>
      <FormSection>
        <Label>人数</Label>
        <CountInput
          type="number"
          name="count"
          min={1}
          value={formData.count}
          onChange={handleChange}
          required
        />
      </FormSection>
      <FormSection>
        <Label>処理概要</Label>
        <Textarea
          name="remarks"
          value={formData.remarks}
          onChange={handleChange}
          placeholder="決算統計損益計算書を作成します。"
        />  
      </FormSection>
      <SubmitButton type="submit">終了</SubmitButton>
    </Form>
  );
};

// サンプルデータを使用したコンポーネントの使用例
const SampleUsage: React.FC = () => {
  const handleSubmit = (data: ReservationData) => {
    console.log(data);
  };

  return (
    <div>
      <h2>公募企業会計システム 決算統計損益計算書</h2>
      <ReservationForm onSubmit={handleSubmit} />
    </div>
  );
};

// スタイリング
const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
  background-color: #f0f0f0;
  border-radius: 10px;
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
  border-radius: 5px;
`;

const DateInputs = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const DateInput = styled(Input)`
  width: 150px;
`;

const DateSeparator = styled.span`
  font-size: 18px;
`;

const AllDayInputs = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const AllDayInput = styled.input`
  margin-right: 5px;
`;

const AllDayLabel = styled.label`
  font-size: 14px;
`;

const CountInput = styled(Input)`
  width: 80px;
`;

const Textarea = styled.textarea`
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 5px;
  resize: vertical;
  min-height: 100px;
`;

const SubmitButton = styled.button`
  padding: 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #0056b3;
  }
`;

export default ReservationForm;