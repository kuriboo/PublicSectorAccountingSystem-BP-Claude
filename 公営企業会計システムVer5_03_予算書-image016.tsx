import React from 'react';
import styled from '@emotion/styled';

interface ReservationFormProps {
  onSubmit: (data: ReservationData) => void;
}

interface ReservationData {
  year: number;
  forecastCategory: string;
  times: number;
  unit: '回' | '人';
  amount: number;
  date: string;
  style: 'A4' | '縦';
  title: string;
  subTitle: string;
  note: string;
  author: string;
  showGrid: boolean;
  showNumber: number;
}

const Container = styled.div`
  background-color: #f0f0f0;
  padding: 20px;
  border-radius: 5px;
  width: 400px;
  @media (max-width: 480px) {
    width: 100%;
  }
`;

const Title = styled.div`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 20px;
`;

const Row = styled.div`
  display: flex;
  margin-bottom: 10px;
`;

const Label = styled.div`
  width: 100px;
`;

const Select = styled.select`
  flex: 1;
  padding: 5px;
`;

const Input = styled.input`
  flex: 1;
  padding: 5px;
`;

const Radio = styled.input`
  margin-right: 5px;
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 5px;
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  &:hover {
    background-color: #0056b3;
  }
`;

const ReservationForm: React.FC<ReservationFormProps> = ({ onSubmit }) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // フォームのデータを収集し、onSubmitコールバックに渡す
    const data: ReservationData = {
      year: parseInt(e.currentTarget.year.value),
      forecastCategory: e.currentTarget.forecastCategory.value,
      times: parseInt(e.currentTarget.times.value),
      unit: (e.currentTarget.unit.value as '回' | '人'),
      amount: parseFloat(e.currentTarget.amount.value),
      date: e.currentTarget.date.value,
      style: (e.currentTarget.style.value as 'A4' | '縦'),
      title: e.currentTarget.title.value,
      subTitle: e.currentTarget.subTitle.value,
      note: e.currentTarget.note.value,
      author: e.currentTarget.author.value,
      showGrid: e.currentTarget.showGrid.checked,
      showNumber: parseInt(e.currentTarget.showNumber.value),
    };
    onSubmit(data);
  };

  return (
    <Container>
      <Title>予定貸借対照表作成</Title>
      <form onSubmit={handleSubmit}>
        <Row>
          <Label>年度</Label>
          <Input type="number" name="year" defaultValue={2023} required />
        </Row>
        <Row>
          <Label>予算種別区分</Label>
          <Select name="forecastCategory" defaultValue="決算見込">
            <option value="決算見込">決算見込</option>
            {/* 他のオプションを追加 */}
          </Select>
        </Row>
        <Row>
          <Label>回数</Label>
          <Input type="number" name="times" defaultValue={1} required min={1} />
          <Select name="unit" defaultValue="回">
            <option value="回">回</option>
            <option value="人">人</option>
          </Select>
        </Row>
        <Row>
          <Label>金額単位</Label>
          <Input type="number" name="amount" defaultValue={1} required min={1} />
        </Row>
        <Row>
          <Label>作成日</Label>
          <Input type="date" name="date" required />
        </Row>
        <Row>
          <Label>書式</Label>
          <Radio type="radio" name="style" value="A4" defaultChecked /> A4
          <Radio type="radio" name="style" value="縦" /> 縦
        </Row>
        <Row>
          <Label>タイトル</Label>
          <Input type="text" name="title" />
        </Row>
        <Row>
          <Label>サブタイトル</Label>
          <Input type="text" name="subTitle" />
        </Row>
        <Row>
          <Label>注タイトル</Label>
          <Input type="text" name="note" />
        </Row>
        <Row>
          <Label>作成者</Label>
          <Input type="text" name="author" defaultValue="管理人" />
        </Row>
        <Row>
          <Label>罫線</Label>
          <Radio type="radio" name="showGrid" value="1" defaultChecked /> する
          <Radio type="radio" name="showGrid" value="0" /> しない
        </Row>
        <Row>
          <Label>ページ</Label>
          <Input type="number" name="showNumber" defaultValue={1} required min={1} />
        </Row>
        <Button type="submit">Excel出力</Button>
      </form>
    </Container>
  );
};

// Usage example:
const App: React.FC = () => {
  const handleSubmit = (data: ReservationData) => {
    console.log(data);
    // 送信処理など
  };

  return (
    <div>
      <h1>予定貸借対照表作成フォーム</h1>
      <ReservationForm onSubmit={handleSubmit} />
    </div>
  );
};

export default App;