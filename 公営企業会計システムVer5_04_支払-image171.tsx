import React from 'react';
import styled from 'styled-components';

// 日付の型定義
type DateRange = {
  start: Date;
  end: Date;
};

// プロパティの型定義
interface Props {
  dateRange: DateRange;
  onClickOk: () => void;
  onClickCancel: () => void;
  onClickClear: () => void;
}

// スタイル定義
const Container = styled.div`
  background-color: #f0f0f0;
  padding: 16px;
  border-radius: 4px;
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
`;

const Title = styled.h2`
  font-size: 18px;
  margin-bottom: 16px;
`;

const InputContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
`;

const Label = styled.label`
  margin-right: 8px;
`;

const Input = styled.input`
  padding: 4px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 120px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const Button = styled.button`
  padding: 8px 16px;
  margin-left: 8px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

// コンポーネント定義
const DateRangeForm: React.FC<Props> = ({ dateRange, onClickOk, onClickCancel, onClickClear }) => {
  // 日付のフォーマット
  const formatDate = (date: Date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  return (
    <Container>
      <Title>未払金一覧表（予算）作成</Title>
      <InputContainer>
        <Label>範囲指定</Label>
        <Input type="date" value={formatDate(dateRange.start)} readOnly />
        <span>〜</span>
        <Input type="date" value={formatDate(dateRange.end)} readOnly />
      </InputContainer>
      <ButtonContainer>
        <Button onClick={onClickOk}>OK</Button>
        <Button onClick={onClickCancel}>クリア</Button>
        <Button onClick={onClickClear}>終了</Button>
      </ButtonContainer>
    </Container>
  );
};

// サンプルデータと使用例
const App: React.FC = () => {
  const sampleDateRange: DateRange = {
    start: new Date('2022-04-01'),
    end: new Date('2022-09-30'),
  };

  const handleOk = () => {
    console.log('OKがクリックされました');
  };

  const handleCancel = () => {
    console.log('クリアがクリックされました');
  };

  const handleClear = () => {
    console.log('終了がクリックされました');
  };

  return (
    <DateRangeForm
      dateRange={sampleDateRange}
      onClickOk={handleOk}
      onClickCancel={handleCancel}
      onClickClear={handleClear}
    />
  );
};

export default App;