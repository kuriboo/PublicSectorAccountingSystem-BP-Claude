import React from 'react';
import styled from 'styled-components';

// 予約変更計番号のプロパティの型定義
type ReservationNumberProps = {
  shinseiNumber: number;
  yoyakuNumber: number;
  creditArea: number;
  yoyakuArea: number;
};

// 予約変更計番号コンポーネント
const ReservationNumber: React.FC<ReservationNumberProps> = ({
  shinseiNumber,
  yoyakuNumber,
  creditArea,
  yoyakuArea,
}) => {
  return (
    <Container>
      <Title>予約制御変書計番号</Title>
      <InputGroup>
        <Label>集計先行番号</Label>
        <Input type="number" value={shinseiNumber} readOnly />
      </InputGroup>
      <InputGroup>
        <Label>予備行番号</Label>
        <Input type="number" value={yoyakuNumber} readOnly />
      </InputGroup>
      <InputGroup>
        <Label>計算区分</Label>
        <Input type="number" value={creditArea} readOnly />
      </InputGroup>
      <InputGroup>
        <Label>予価区分</Label>
        <Input type="number" value={yoyakuArea} readOnly />
      </InputGroup>
      <ButtonGroup>
        <Button>OK</Button>
        <Button>クリア</Button>
        <Button>キャンセル</Button>
      </ButtonGroup>
    </Container>
  );
};

// スタイリング
const Container = styled.div`
  background-color: #f0f0f0;
  padding: 20px;
  border-radius: 4px;
  width: 300px;
  margin: 0 auto;
`;

const Title = styled.h2`
  font-size: 18px;
  margin-bottom: 20px;
  text-align: center;
`;

const InputGroup = styled.div`
  margin-bottom: 10px;
`;

const Label = styled.label`
  display: block;
  font-weight: bold;
  margin-bottom: 5px;
`;

const Input = styled.input`
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;

const Button = styled.button`
  padding: 8px 16px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  
  &:hover {
    background-color: #0056b3;
  }
`;

// サンプルデータ
const sampleData: ReservationNumberProps = {
  shinseiNumber: 10,
  yoyakuNumber: 1,
  creditArea: 1,
  yoyakuArea: 1,
};

// 使用例
const App: React.FC = () => {
  return (
    <div>
      <h1>予約制御変書計番号</h1>
      <ReservationNumber {...sampleData} />
    </div>
  );
};

export default App;