import React from 'react';
import styled from 'styled-components';

// 予定入力フォームのプロパティ型定義
type ScheduleFormProps = {
  date: string;
  title: string;
  onTitleChange: (title: string) => void;
  onSubmit: () => void;
};

// 予定入力フォームコンポーネント
const ScheduleForm: React.FC<ScheduleFormProps> = ({
  date,
  title,
  onTitleChange,
  onSubmit,
}) => {
  return (
    <Form>
      <Label>予定入力</Label>
      <DateInput type="text" value={date} readOnly />
      <TitleInput
        type="text"
        value={title}
        onChange={(e) => onTitleChange(e.target.value)}
        placeholder="予算議成徳高権眼"
      />
      <SubmitButton type="button" onClick={onSubmit}>
        登録
      </SubmitButton>
    </Form>
  );
};

// スタイリング用のコンポーネント
const Form = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px;
  background-color: #f0f0f0;
`;

const Label = styled.div`
  font-weight: bold;
`;

const DateInput = styled.input`
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #fff;
`;

const TitleInput = styled.input`
  flex: 1;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const SubmitButton = styled.button`
  padding: 5px 10px;
  border: none;
  border-radius: 4px;
  background-color: #007bff;
  color: #fff;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

// サンプルデータを用いたコンポーネントの使用例
const App: React.FC = () => {
  const [title, setTitle] = React.useState('');

  const handleTitleChange = (newTitle: string) => {
    setTitle(newTitle);
  };

  const handleSubmit = () => {
    // 登録処理を実装
    console.log('登録:', title);
    setTitle('');
  };

  return (
    <div>
      <h1>予定入力フォーム</h1>
      <ScheduleForm
        date="2023/06/25"
        title={title}
        onTitleChange={handleTitleChange}
        onSubmit={handleSubmit}
      />
    </div>
  );
};

export default App;