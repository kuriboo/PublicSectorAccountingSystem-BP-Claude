import React from 'react';
import styled from '@emotion/styled';

type PaperSize = 'A4' | 'B4' | 'A4 縦';
type Orientation = 'すき' | 'しない';

interface FormData {
  year: string;
  forecastDivision: number;
  group: string;
  accountTitle: string;
  period: {
    from: string;
    to: string;
  };
  bookStyle: PaperSize;
  title: string;
  subTitle: string;
  footnote: string;
  paginate: Orientation;
  margin: number;
}

interface Props {
  onSubmit: (data: FormData) => void;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  font-family: sans-serif;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  max-width: 400px;
`;

const Label = styled.label`
  display: flex;
  align-items: center;
  gap: 10px;
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

const Button = styled.button`
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

const ReportSettingForm: React.FC<Props> = ({ onSubmit }) => {
  const [formData, setFormData] = React.useState<FormData>({
    year: '',
    forecastDivision: 1,
    group: '',
    accountTitle: '',
    period: {
      from: '',
      to: '',
    },
    bookStyle: 'A4',
    title: '',
    subTitle: '',
    footnote: '',
    paginate: 'すき',
    margin: 1,
  });

  // Handle form input changes
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Label>
          年度
          <Input
            type="text"
            name="year"
            value={formData.year}
            onChange={handleChange}
            required
          />
        </Label>

        <Label>
          予算編成区分
          <Select
            name="forecastDivision"
            value={formData.forecastDivision}
            onChange={handleChange}
            required
          >
            <option value={1}>当初予算</option>
          </Select>
        </Label>

        <Label>
          団体
          <Input
            type="text"
            name="group"
            value={formData.group}
            onChange={handleChange}
          />
        </Label>

        <Label>
          金額種別
          <Input
            type="text"
            name="accountTitle"
            value={formData.accountTitle}
            onChange={handleChange}
          />
        </Label>

        <Label>
          会計期間
          <div>
            <Input
              type="text"
              name="period.from"
              value={formData.period.from}
              onChange={handleChange}
              required
            />
            ～
            <Input
              type="text"
              name="period.to"
              value={formData.period.to}
              onChange={handleChange}
              required
            />
          </div>
        </Label>

        <RadioGroup>
          書式
          <Label>
            <Input
              type="radio"
              name="bookStyle"
              value="A4"
              checked={formData.bookStyle === 'A4'}
              onChange={handleChange}
            />
            A4 横
          </Label>
          <Label>
            <Input
              type="radio"
              name="bookStyle"
              value="B4"
              checked={formData.bookStyle === 'B4'}
              onChange={handleChange}
            />
            B4
          </Label>
          <Label>
            <Input
              type="radio"
              name="bookStyle"
              value="A4 縦"
              checked={formData.bookStyle === 'A4 縦'}
              onChange={handleChange}
            />
            A4 縦
          </Label>
        </RadioGroup>

        <Label>
          タイトル
          <Input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
          />
        </Label>

        <Label>
          サブタイトル
          <Input
            type="text"
            name="subTitle"
            value={formData.subTitle}
            onChange={handleChange}
          />
        </Label>

        <Label>
          柱タイトル
          <Input
            type="text"
            name="footnote"
            value={formData.footnote}
            onChange={handleChange}
          />
        </Label>

        <RadioGroup>
          頁中子
          <Label>
            <Input
              type="radio"
              name="paginate"
              value="すき"
              checked={formData.paginate === 'すき'}
              onChange={handleChange}
            />
            すき
          </Label>
          <Label>
            <Input
              type="radio"
              name="paginate"
              value="しない"
              checked={formData.paginate === 'しない'}
              onChange={handleChange}
            />
            しない
          </Label>
        </RadioGroup>

        <Label>
          開始頁
          <Input
            type="number"
            name="margin"
            value={formData.margin}
            onChange={handleChange}
          />
        </Label>

        <Button type="submit">実行</Button>
      </Form>
    </Container>
  );
};



// Example usage
const App = () => {
  const handleSubmit = (data: FormData) => {
    console.log('Form submitted:', data);
    // Perform actions with the form data
  };

  return (
    <div>
      <h1>予定損益計算書作成</h1>
      <ReportSettingForm onSubmit={handleSubmit} />
    </div>
  );
};

export default App;