import React from 'react';
import styled from 'styled-components';

// 区分の選択肢の型定義
type Segment = 'maejitu' | 'kumiai' | 'higashiura';

// コンポーネントのプロパティの型定義
interface SegmentAllocationFormProps {
  title: string;
  onSubmit: (data: { segment: Segment; startDate: string; endDate: string; }) => void;
}

// スタイルコンポーネント
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px;
  background-color: #f0f0f0;
  border-radius: 8px;
  width: 100%;
  max-width: 400px;
  box-sizing: border-box;

  @media (max-width: 600px) {
    max-width: 100%;
  }
`;

const Title = styled.h2`
  margin-bottom: 16px;
`;

const DateRangeContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 16px;
`;

const DateInput = styled.input`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 45%;
`;

const SegmentContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 16px;
`;

const SegmentLabel = styled.label`
  display: flex;
  align-items: center;
`;

const SubmitButton = styled.button`
  padding: 8px 16px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

// 区分別仕訳金額一覧コンポーネント
const SegmentAllocationForm: React.FC<SegmentAllocationFormProps> = ({ title, onSubmit }) => {
  const [segment, setSegment] = React.useState<Segment>('maejitu');
  const [startDate, setStartDate] = React.useState('');
  const [endDate, setEndDate] = React.useState('');

  // フォーム送信時の処理
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ segment, startDate, endDate });
  };

  return (
    <Container>
      <Title>{title}</Title>
      <form onSubmit={handleSubmit}>
        <DateRangeContainer>
          <DateInput
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            required
          />
          <DateInput
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            required
          />
        </DateRangeContainer>
        <SegmentContainer>
          <SegmentLabel>
            <input
              type="radio"
              value="maejitu"
              checked={segment === 'maejitu'}
              onChange={() => setSegment('maejitu')}
            />
            前日
          </SegmentLabel>
          <SegmentLabel>
            <input
              type="radio"
              value="kumiai"
              checked={segment === 'kumiai'}
              onChange={() => setSegment('kumiai')}
            />
            組合
          </SegmentLabel>
          <SegmentLabel>
            <input
              type="radio"
              value="higashiura"
              checked={segment === 'higashiura'}
              onChange={() => setSegment('higashiura')}
            />
            東浦
          </SegmentLabel>
        </SegmentContainer>
        <SubmitButton type="submit">検索</SubmitButton>
      </form>
    </Container>
  );
};

export default SegmentAllocationForm;

// 使用例
const ExampleComponent: React.FC = () => {
  const handleSubmit = (data: { segment: Segment; startDate: string; endDate: string; }) => {
    console.log('Submitted data:', data);
  };

  return (
    <div>
      <SegmentAllocationForm title="セグメント別仕訳金額一覧" onSubmit={handleSubmit} />
    </div>
  );
};