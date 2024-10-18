import React, { useState } from 'react';
import styled from '@emotion/styled';

// 型定義
interface ReportFormProps {
  onSubmit: (data: ReportData) => void;
}

interface ReportData {
  range: string;
  size: 'A4' | 'A4_sideways';
  title: string;
  hidePage: boolean;
  comment: string;
  executionDate: string;
  settlementDate: string;
}

// スタイリング
const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f0f0f0;
  border-radius: 5px;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
`;

const Label = styled.label`
  font-weight: bold;
  margin-bottom: 5px;
`;

const Input = styled.input`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Select = styled.select`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const TextArea = styled.textarea`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background-color: #0056b3;
  }
`;

// コンポーネント
const ReportForm: React.FC<ReportFormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = useState<ReportData>({
    range: '',
    size: 'A4',
    title: '',
    hidePage: false,
    comment: '',
    executionDate: '',
    settlementDate: '',
  });

  // 入力値の変更ハンドラ
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  // フォーム送信ハンドラ
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <FormContainer>
      <form onSubmit={handleSubmit}>
        <FormGroup>
          <Label>範囲指定</Label>
          <Input
            type="text"
            name="range"
            value={formData.range}
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label>サイズ</Label>
          <Select name="size" value={formData.size} onChange={handleChange}>
            <option value="A4">A4 横</option>
            <option value="A4_sideways">A4 縦</option>
          </Select>
        </FormGroup>
        <FormGroup>
          <Label>タイトル</Label>
          <Input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label>
            <Input
              type="checkbox"
              name="hidePage"
              checked={formData.hidePage}
              onChange={handleChange}
            />
            ページ番号を非表示にする
          </Label>
        </FormGroup>
        <FormGroup>
          <Label>コメント</Label>
          <TextArea
            name="comment"
            value={formData.comment}
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label>集計日時</Label>
          <Input
            type="text"
            name="executionDate"
            value={formData.executionDate}
            readOnly
          />
        </FormGroup>
        <FormGroup>
          <Label>集計対象</Label>
          <Input
            type="text"
            name="settlementDate"
            value={formData.settlementDate}
            readOnly
          />
        </FormGroup>
        <Button type="submit">終了</Button>
      </form>
    </FormContainer>
  );
};

// 使用例
const SampleData: ReportData = {
  range: 'H30.04.01 ～ H30.04.30',
  size: 'A4',
  title: '',
  hidePage: false,
  comment: '',
  executionDate: 'H30.05.06 13:58:36',
  settlementDate: '平成30年04月度',
};

const App: React.FC = () => {
  const handleSubmit = (data: ReportData) => {
    console.log(data);
    // ここで送信処理を行う
  };

  return (
    <div>
      <h1>決算損益計算書</h1>
      <ReportForm onSubmit={handleSubmit} />
      <h2>入力内容</h2>
      <pre>{JSON.stringify(SampleData, null, 2)}</pre>
    </div>
  );
};

export default App;