import React from 'react';
import { useState } from 'react';
import styled from '@emotion/styled';

// 型定義
type FormValues = {
  startDate: string;
  endDate: string;
};

// スタイリング
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const Title = styled.h2`
  margin-bottom: 20px;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

const Label = styled.label`
  margin-bottom: 5px;
`;

const DateInput = styled.input`
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
`;

const Button = styled.button`
  padding: 10px 20px;
  margin-left: 10px;
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
const DateRangeForm: React.FC = () => {
  const [formValues, setFormValues] = useState<FormValues>({
    startDate: '',
    endDate: '',
  });

  // 入力値の変更を処理
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  // フォーム送信を処理
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // ここでフォームの送信処理を行う
    console.log(formValues);
  };

  return (
    <Container>
      <Title>月次損益計算書作成</Title>
      <form onSubmit={handleSubmit}>
        <FormGroup>
          <Label>期間指定</Label>
          <DateInput
            type="date"
            name="startDate"
            value={formValues.startDate}
            onChange={handleChange}
            required
          />
          <span>～</span>
          <DateInput
            type="date"
            name="endDate"
            value={formValues.endDate}
            onChange={handleChange}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label>集計日時</Label>
          <span>平成29年09月25日 14時28分</span>
        </FormGroup>
        <ButtonGroup>
          <Button type="button">クリア</Button>
          <Button type="submit">終了</Button>
        </ButtonGroup>
      </form>
    </Container>
  );
};

// 使用例
const App: React.FC = () => {
  return (
    <div>
      <DateRangeForm />
    </div>
  );
};

export default App;