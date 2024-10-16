import React from 'react';
import styled from 'styled-components';

// 業者情報取込更新処理の入力フォームのプロパティ型
type InquiryFormProps = {
  onSubmit: (company: string) => void;
};

// 業者情報取込更新処理の入力フォームコンポーネント
const InquiryForm: React.FC<InquiryFormProps> = ({ onSubmit }) => {
  const [company, setCompany] = React.useState('');

  // 送信ボタンクリック時の処理
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(company);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Label>
        業者情報取込対象新処理
        <Input
          type="text"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
        />
      </Label>
      <SubmitButton type="submit" disabled={!company}>
        表示
      </SubmitButton>
      <Message>※一覧に直接書き込んで下さい。</Message>
    </Form>
  );
};

// スタイリング
const Form = styled.form`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
`;

const Label = styled.label`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: bold;
`;

const Input = styled.input`
  padding: 0.5rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 200px;
`;

const SubmitButton = styled.button`
  padding: 0.5rem 1rem;
  font-size: 1rem;
  background-color: #007bff;
  color: white;
  border: none; 
  border-radius: 4px;
  cursor: pointer;

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;

const Message = styled.p`
  margin: 0;
  font-size: 0.8rem;
  color: #666;
`;

// サンプルデータ
const companies = ['会社A', '会社B', '会社C'];

// 使用例
const App: React.FC = () => {
  const handleSubmit = (company: string) => {
    console.log('選択された会社:', company);
    // 実際の処理を実装
  };

  return (
    <div>
      <h1>業者情報取込更新処理</h1>
      <InquiryForm onSubmit={handleSubmit} />
      {/* 取得した業者情報の一覧表示 */}
      <ul>
        {companies.map((company, index) => (
          <li key={index}>{company}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;