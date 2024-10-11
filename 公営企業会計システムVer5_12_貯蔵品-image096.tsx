import React from 'react';
import styled from '@emotion/styled';

type DatePickerProps = {
  value: string;
  onChange: (value: string) => void;
};

const Container = styled.div`
  background-color: #f0f0f0;
  padding: 16px;
  border-radius: 4px;
  display: inline-block;
`;

const Label = styled.div`
  font-size: 14px;
  color: #333;
  margin-bottom: 8px;
`;

const Input = styled.input`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  width: 200px;
  margin-bottom: 16px;
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
  font-size: 14px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const DatePicker: React.FC<DatePickerProps> = ({ value, onChange }) => {
  // フォーマットされた日付文字列を取得
  const formattedDate = value.replace(/(\d{4})(\d{2})(\d{2})/, '$1/$2/$3');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    // 入力値を適切なフォーマットに変換
    const formattedValue = inputValue.replace(/\//g, '');
    onChange(formattedValue);
  };

  return (
    <Container>
      <Label>適用開始年月日</Label>
      <Input type="text" value={formattedDate} onChange={handleChange} />
      <ButtonContainer>
        <Button>OK</Button>
        <Button>クリア</Button>
        <Button>キャンセル</Button>
      </ButtonContainer>
    </Container>
  );
};

// 使用例
const App: React.FC = () => {
  const [date, setDate] = React.useState('');

  const handleDateChange = (value: string) => {
    setDate(value);
  };

  return (
    <div>
      <h1>日付選択コンポーネント</h1>
      <DatePicker value={date} onChange={handleDateChange} />
      <p>選択された日付: {date}</p>
    </div>
  );
};

export default App;