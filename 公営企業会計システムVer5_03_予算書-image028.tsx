import React from 'react';
import styled from '@emotion/styled';

interface ReservationFormProps {
  onSubmit: (data: ReservationData) => void;
}

interface ReservationData {
  year: string;
  forecastCategory: string;
  companyCode: string;
  processingCategory: '見積要求額' | '査定額';
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 100%;
  max-width: 400px;
  margin: 0 auto;

  @media (max-width: 600px) {
    max-width: 100%;
  }
`;

const Row = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;

const Label = styled.label`
  flex: 1;
`;

const Input = styled.input`
  flex: 2;
  padding: 5px;
`;

const Select = styled.select`
  flex: 2;
  padding: 5px;
`;

const SubmitButton = styled.button`
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const ReservationForm: React.FC<ReservationFormProps> = ({ onSubmit }) => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const data: ReservationData = {
      year: formData.get('year') as string,
      forecastCategory: formData.get('forecastCategory') as string,
      companyCode: formData.get('companyCode') as string,
      processingCategory: formData.get('processingCategory') as '見積要求額' | '査定額',
    };
    onSubmit(data);
  };

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <Row>
          <Label>年度</Label>
          <Input type="text" name="year" defaultValue="令和3" />
        </Row>
        <Row>
          <Label>予算編成区分</Label>
          <Select name="forecastCategory" defaultValue="1">
            <option value="1">当初①</option>
            {/* Add more options */}
          </Select>
        </Row>
        <Row>
          <Label>回数</Label>
          <Input type="text" name="companyCode" />
        </Row>
        <Row>
          <Label>金額種別</Label>
          <Select name="processingCategory" defaultValue="見積要求額">
            <option value="見積要求額">見積要求額</option>
            <option value="査定額">査定額</option>
          </Select>
        </Row>
        <Row>
          <Label>処理区分</Label>
          <Input type="text" value="事項別明細書1「実施計画明細書」の説明欄(科目名称、予算額）を自動作成します。" readOnly />
        </Row>
        <SubmitButton type="submit">OK</SubmitButton>
      </form>
    </Container>
  );
};

// サンプルデータを使用した表示用コンポーネント
const App: React.FC = () => {
  const handleSubmit = (data: ReservationData) => {
    console.log(data);
    // フォームデータの送信処理を実装
  };

  return (
    <div>
      <h1>予算企業会計システム</h1>
      <ReservationForm onSubmit={handleSubmit} />
    </div>
  );
};

export default App;