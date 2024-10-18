import React from 'react';
import styled from '@emotion/styled';

// 型定義
interface ReportFormProps {
  onSubmit: (data: ReportFormData) => void;
}

interface ReportFormData {
  startDate: string;
  endDate: string;
  expectedDate: string;
  targetAmount: number;
  collectType: 'あり' | 'なし';
  accountType: '税込' | '税抜';
  detail: string;
}

// スタイル定義
const Container = styled.div`
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  box-sizing: border-box;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const FormGroup = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const Label = styled.label`
  margin-right: 10px;
  min-width: 120px;
`;

const Input = styled.input`
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 3px;
  flex: 1;
`;

const Select = styled.select`
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 3px;
`;

const TextArea = styled.textarea`
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 3px;
  flex: 1;
`;

const Button = styled.button`
  padding: 8px 16px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  align-self: flex-end;
`;

// コンポーネント実装
const ReportForm: React.FC<ReportFormProps> = ({ onSubmit }) => {
  // フォームの状態管理
  const [formData, setFormData] = React.useState<ReportFormData>({
    startDate: '',
    endDate: '',
    expectedDate: '',
    targetAmount: 0,
    collectType: 'あり',
    accountType: '税込',
    detail: '',
  });

  // フォームの入力値が変更された時の処理
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // フォーム送信時の処理
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label>作業日付</Label>
          <Input
            type="date"
            name="startDate"
            value={formData.startDate}
            onChange={handleChange}
            required
          />
          <span>〜</span>
          <Input
            type="date"
            name="endDate"
            value={formData.endDate}
            onChange={handleChange}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label>予算科目</Label>
          <Input
            type="text"
            name="expectedDate"
            value={formData.expectedDate}
            onChange={handleChange}
            required
          />
          <Label>予算科目</Label>
          <Input
            type="number"
            name="targetAmount"
            value={formData.targetAmount}
            onChange={handleChange}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label>細節印字</Label>
          <Select name="collectType" value={formData.collectType} onChange={handleChange}>
            <option value="あり">あり</option>
            <option value="なし">なし</option>
          </Select>
          <Label>集計区分</Label>
          <Select name="accountType" value={formData.accountType} onChange={handleChange}>
            <option value="税込">税込</option>
            <option value="税抜">税抜</option>
          </Select>
        </FormGroup>
        <FormGroup>
          <Label>処理摘要</Label>
          <TextArea
            name="detail"
            value={formData.detail}
            onChange={handleChange}
            rows={3}
          ></TextArea>
        </FormGroup>
        <Button type="submit">OK</Button>
      </Form>
    </Container>
  );
};

export default ReportForm;

// 使用例
const App: React.FC = () => {
  const handleSubmit = (data: ReportFormData) => {
    console.log(data);
    // ここで送信処理を行う
  };

  return <ReportForm onSubmit={handleSubmit} />;
};