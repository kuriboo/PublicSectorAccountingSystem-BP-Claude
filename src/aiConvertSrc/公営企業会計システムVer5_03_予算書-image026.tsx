import React from 'react';
import styled from '@emotion/styled';

type FormData = {
  reportYear: number;
  reportMonth: number;
  reportDay: number;
  expenseType: string;
  customerCode: string;
  periodFrom: string;
  periodTo: string;
  size: 'A4' | 'A4Landscape';
  title: string;
  subTitle: string;
  remarks: string;
  signatureRequired: boolean;
  copies: number;
  segment: string;
};

type ExpenseReportFormProps = {
  initialData?: FormData;
  onSubmit: (data: FormData) => void;
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
  background-color: #f0f0f0;
`;

const Row = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
`;

const Label = styled.label`
  font-weight: bold;
`;

const Input = styled.input`
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
`;

const Select = styled.select`
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
`;

const Checkbox = styled.input`
  margin-right: 0.5rem;
`;

const Button = styled.button`
  padding: 0.5rem 1rem;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
`;

const ExpenseReportForm: React.FC<ExpenseReportFormProps> = ({
  initialData = {
    reportYear: new Date().getFullYear(),
    reportMonth: new Date().getMonth() + 1,
    reportDay: new Date().getDate(),
    expenseType: '',
    customerCode: '',
    periodFrom: '',
    periodTo: '',
    size: 'A4',
    title: '',
    subTitle: '',
    remarks: '',
    signatureRequired: true,
    copies: 1,
    segment: '',
  },
  onSubmit,
}) => {
  const [formData, setFormData] = React.useState<FormData>(initialData);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, type, checked } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit(formData);
  };

  return (
    <Container>
      <h2>補正予算実施計画書作成</h2>
      <form onSubmit={handleSubmit}>
        <Row>
          <Label>年度</Label>
          <Input
            type="number"
            name="reportYear"
            value={formData.reportYear}
            onChange={handleChange}
            required
          />
        </Row>
        <Row>
          <Label>年</Label>
          <Input
            type="number"
            name="reportMonth"
            min="1"
            max="12"
            value={formData.reportMonth}
            onChange={handleChange}
            required
          />
          <Label>月</Label>
          <Input
            type="number"
            name="reportDay"
            min="1"
            max="31"
            value={formData.reportDay}
            onChange={handleChange}
            required
          />
          <Label>日</Label>
        </Row>
        <Row>
          <Label>説明種別</Label>
          <Select
            name="expenseType"
            value={formData.expenseType}
            onChange={handleChange}
            required
          >
            <option value="">選択してください</option>
            <option value="見積要求額">見積要求額</option>
            <option value="査定額">査定額</option>
          </Select>
        </Row>
        <Row>
          <Label>範囲指定</Label>
          <Input
            type="text"
            name="periodFrom"
            placeholder="予算科目"
            value={formData.periodFrom}
            onChange={handleChange}
          />
          <span>〜</span>
          <Input
            type="text"
            name="periodTo"
            placeholder="予算科目"
            value={formData.periodTo}
            onChange={handleChange}
          />
        </Row>
        <Row>
          <Label>サイズ</Label>
          <Select name="size" value={formData.size} onChange={handleChange}>
            <option value="A4">A4 縦</option>
            <option value="A4Landscape">A4 横</option>
          </Select>
        </Row>
        <Row>
          <Label>タイトル</Label>
          <Input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
          />
        </Row>
        <Row>
          <Label>サブタイトル</Label>
          <Input
            type="text"
            name="subTitle"
            value={formData.subTitle}
            onChange={handleChange}
          />
        </Row>
        <Row>
          <Label>注タイトル</Label>
          <Input
            type="text"
            name="remarks"
            value={formData.remarks}
            onChange={handleChange}
          />
        </Row>
        <Row>
          <Label>頁印字</Label>
          <Checkbox
            type="checkbox"
            name="signatureRequired"
            checked={formData.signatureRequired}
            onChange={handleChange}
          />
          <span>する</span>
          <Checkbox
            type="checkbox"
            name="signatureRequired"
            checked={!formData.signatureRequired}
            onChange={handleChange}
          />
          <span>しない</span>
        </Row>
        <Row>
          <Label>部数</Label>
          <Input
            type="number"
            name="copies"
            min="1"
            value={formData.copies}
            onChange={handleChange}
          />
        </Row>
        <Row>
          <Label>セグメント</Label>
          <Select
            name="segment"
            value={formData.segment}
            onChange={handleChange}
          ></Select>
        </Row>
        <Button type="submit">OK</Button>
      </form>
    </Container>
  );
};

// Usage example
const App: React.FC = () => {
  const handleSubmit = (data: FormData) => {
    console.log('Submitted data:', data);
  };

  return (
    <div>
      <h1>Expense Report Form</h1>
      <ExpenseReportForm onSubmit={handleSubmit} />
    </div>
  );
};

export default App;