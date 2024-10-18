import React from 'react';
import styled from 'styled-components';

// Props型定義
interface InputFormProps {
  onSubmit: (data: FormData) => void;
}

// フォームデータ型定義
interface FormData {
  date: string;
  name: string;
  section: string;
  empNo: string;
  deptCode: string;
  dept: string;
  notes: string;
  businessDivision: string;
}

// スタイル定義
const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 100%;
  max-width: 500px;
  box-sizing: border-box;
  
  @media screen and (max-width: 600px) {
    max-width: 100%;
  }
`;

const Label = styled.label`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Input = styled.input`
  padding: 5px;
  border-radius: 3px;
  border: 1px solid #ccc;
  font-size: 16px;
`;

const Select = styled.select`
  padding: 5px;
  border-radius: 3px;
  border: 1px solid #ccc;
  font-size: 16px;
`;

const Button = styled.button`
  padding: 8px 16px;
  border-radius: 5px;
  background-color: #007bff;
  color: #fff;
  font-size: 16px;
  cursor: pointer;
  border: none;
  
  &:hover {
    background-color: #0056b3;
  }
`;

// 入力フォームコンポーネント
const InputForm: React.FC<InputFormProps> = ({ onSubmit }) => {
  // フォーム送信ハンドラ
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData: FormData = {
      date: form.date.value,
      name: form.name.value,
      section: form.section.value,
      empNo: form.empNo.value,
      deptCode: form.deptCode.value,
      dept: form.dept.value,
      notes: form.notes.value,
      businessDivision: form.businessDivision.value,
    };
    onSubmit(formData);
    form.reset();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Label>
        入庫日
        <Input type="text" name="date" defaultValue="平成30年06月25日" />
      </Label>
      <Label>
        入庫区分
        <Select name="section" defaultValue="社内">
          <option value="社内">社内</option>
          <option value="修繕">修繕</option>
        </Select>
      </Label>
      <Label>
        入庫番号 <Input type="text" name="empNo" defaultValue="1" />
      </Label>
      <Label>
        伝票番号
        <Input type="text" name="deptCode" defaultValue="99999999" />
      </Label>
      <Label>
        入庫担当
        <Input type="text" name="name" defaultValue="町蔵入庫担当" />
      </Label>
      <Label>
        予算計上
        <Select name="businessDivision" defaultValue={1}>
          <option value={1}>町蔵OT</option>
        </Select>
        工事
      </Label>
      <Label>
        摘要 <Input type="text" name="notes" />
      </Label>
      <Button type="submit">登録</Button>
    </Form>
  );
};

// サンプルデータ
const sampleData: FormData = {
  date: '平成30年06月25日',
  name: '町蔵入庫担当',
  section: '社内',
  empNo: '041001',
  deptCode: '99999999',
  dept: '(会計)町蔵入庫担当',
  notes: '',
  businessDivision: '町蔵OT',
};

// 使用例
const App: React.FC = () => {
  const handleSubmit = (data: FormData) => {
    console.log(data);
  };

  return (
    <div>
      <h1>入庫登録</h1>
      <InputForm onSubmit={handleSubmit} />
      <h2>サンプルデータ</h2>
      <pre>{JSON.stringify(sampleData, null, 2)}</pre>
    </div>
  );
};

export default App;