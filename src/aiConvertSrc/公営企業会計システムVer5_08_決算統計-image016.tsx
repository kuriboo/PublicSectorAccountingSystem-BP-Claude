import React from 'react';
import styled from '@emotion/styled';

// TypeScriptの型定義
type LoanApplicationFormProps = {
  onSubmit: (data: { jobType: string; title: string; content: string; period: number; }) => void;
};

// スタイリング
const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #f0f0f0;
  border-radius: 5px;
  width: 100%;
  max-width: 400px;
  margin: 0 auto;

  @media (max-width: 600px) {
    padding: 10px;
  }
`;

const FormLabel = styled.label`
  margin-bottom: 10px;
  font-weight: bold;
`;

const FormInput = styled.input`
  padding: 8px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 100%;
`;

const FormTextarea = styled.textarea`
  padding: 8px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 100%;
  resize: vertical;
`;

const FormButton = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

// コンポーネントの実装
const LoanApplicationForm: React.FC<LoanApplicationFormProps> = ({ onSubmit }) => {
  const [jobType, setJobType] = React.useState('');
  const [title, setTitle] = React.useState('');
  const [content, setContent] = React.useState('');
  const [period, setPeriod] = React.useState(1);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // 値が入っていない場合の処理
    if (!jobType || !title || !content) {
      alert('すべての項目を入力してください。');
      return;
    }

    onSubmit({ jobType, title, content, period });
  };

  return (
    <FormContainer>
      <FormLabel>職種</FormLabel>
      <FormInput type="text" value={jobType} onChange={(e) => setJobType(e.target.value)} />

      <FormLabel>タイトル</FormLabel>
      <FormInput type="text" value={title} onChange={(e) => setTitle(e.target.value)} />

      <FormLabel>貸借対照表</FormLabel>
      <FormTextarea value={content} onChange={(e) => setContent(e.target.value)} />

      <FormLabel>開始日</FormLabel>
      <FormInput type="number" min={1} value={period} onChange={(e) => setPeriod(Number(e.target.value))} />

      <FormButton onClick={handleSubmit}>終了</FormButton>
    </FormContainer>
  );
};

// サンプルデータを用いた表示用コンポーネント
const App: React.FC = () => {
  const handleSubmit = (data: { jobType: string; title: string; content: string; period: number; }) => {
    console.log(data);
    // ここで送信処理を行う
  };

  return (
    <div>
      <h1>融資申込書</h1>
      <LoanApplicationForm onSubmit={handleSubmit} />
    </div>
  );
};

export default App;