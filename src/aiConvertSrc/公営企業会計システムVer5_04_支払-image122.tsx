import React from 'react';
import styled from 'styled-components';

// 範囲指定コンポーネントの型定義
interface RangeSpecificationProps {
  onSubmit: (startDate: string, endDate: string) => void;
}

// 範囲指定コンポーネント
const RangeSpecification: React.FC<RangeSpecificationProps> = ({ onSubmit }) => {
  const [startDate, setStartDate] = React.useState('');
  const [endDate, setEndDate] = React.useState('');

  // 送信ボタンクリック時の処理
  const handleSubmit = () => {
    onSubmit(startDate, endDate);
  };

  return (
    <Container>
      <Title>範囲指定</Title>
      <DateRangeContainer>
        <DateInput
          type="text"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
          placeholder="0000000"
        />
        <Separator>〜</Separator>
        <DateInput
          type="text"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
          placeholder="9999999"
        />
      </DateRangeContainer>
      <ButtonContainer>
        <Button onClick={handleSubmit}>OK</Button>
        <Button>クリア</Button>
        <Button>終了</Button>
      </ButtonContainer>
    </Container>
  );
};

// サンプルデータを用いた使用例
const SampleUsage: React.FC = () => {
  const handleSubmit = (startDate: string, endDate: string) => {
    console.log(`Selected date range: ${startDate} - ${endDate}`);
  };

  return (
    <div>
      <h1>範囲指定コンポーネントの使用例</h1>
      <RangeSpecification onSubmit={handleSubmit} />
    </div>
  );
};

// スタイリング
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Title = styled.h2`
  margin-bottom: 10px;
`;

const DateRangeContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const DateInput = styled.input`
  padding: 5px;
  margin: 0 5px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Separator = styled.span`
  margin: 0 5px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const Button = styled.button`
  padding: 8px 16px;
  margin: 0 5px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

export default SampleUsage;