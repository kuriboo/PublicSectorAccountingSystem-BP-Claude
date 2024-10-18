import React from 'react';
import styled from '@emotion/styled';

interface AccountCreationFormProps {
  onSubmit: (formData: FormData) => void;
}

interface FormData {
  type: string;
  frontFee: number;
  backFee: number;
  note: string;
  size: string;
  title: string;
  subtitle: string;
  note2: string;
  printing: boolean;
  opening: number;
}

const AccountCreationForm: React.FC<AccountCreationFormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = React.useState<FormData>({
    type: '見積要求額',
    frontFee: 0,
    backFee: 0,
    note: '',
    size: 'A4 横',
    title: '行政市水道事業会計',
    subtitle: '水道',
    note2: '',
    printing: true,
    opening: 1,
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type, checked } = event.target;
    const newValue = type === 'checkbox' ? checked : value;
    setFormData(prevState => ({ ...prevState, [name]: newValue }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit(formData);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Row>
        <Label>
          <input type="radio" name="type" value="見積要求額" checked={formData.type === '見積要求額'} onChange={handleChange} />
          見積要求額
        </Label>
        <Label>
          <input type="radio" name="type" value="予定額" checked={formData.type === '予定額'} onChange={handleChange} />
          予定額  
        </Label>
      </Row>
      
      <Row>
        <Label>前年度繰越金</Label>
        <Input type="number" name="frontFee" value={formData.frontFee} onChange={handleChange} /> (千円)
        <Label>当年度繰越金</Label>  
        <Input type="number" name="backFee" value={formData.backFee} onChange={handleChange} /> (円)
      </Row>
      <Row>
        <span>注)システム上は、千円未満切り捨てになっておりますので御留意して下さい。</span>
      </Row>

      <Row>
        <Label>サイズ</Label>
        <select name="size" value={formData.size} onChange={handleChange}>
          <option value="A4 横">A4 横</option>
          <option value="A4 縦">A4 縦</option>
        </select>
        <Label>タイトル</Label>
        <Input type="text" name="title" value={formData.title} onChange={handleChange} />
        <Label>サブタイトル</Label>
        <Input type="text" name="subtitle" value={formData.subtitle} onChange={handleChange} />
        <Label>注タイトル</Label>
        <Input type="text" name="note2" value={formData.note2} onChange={handleChange} />
      </Row>

      <Row>
        <Label>印刷</Label>  
        <input type="checkbox" name="printing" checked={formData.printing} onChange={handleChange} />
        <Label>開始頁</Label>
        <Input type="number" name="opening" value={formData.opening} onChange={handleChange} />
      </Row>

      <SubmitButton type="submit">終了</SubmitButton>
    </Form>
  );
};

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-width: 600px;
  margin: 0 auto;
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const Label = styled.label`
  display: flex;
  align-items: center;
  gap: 5px;
`;

const Input = styled.input`
  padding: 5px;
`;

const SubmitButton = styled.button`
  padding: 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

// Usage example
const App: React.FC = () => {
  const handleSubmit = (formData: FormData) => {
    console.log(formData);
    // Handle form submission
  };

  return (
    <div>
      <h1>Account Creation Form</h1>
      <AccountCreationForm onSubmit={handleSubmit} />  
    </div>
  );
};

export default App;