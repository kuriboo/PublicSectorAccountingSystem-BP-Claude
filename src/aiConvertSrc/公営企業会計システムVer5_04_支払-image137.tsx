import React from 'react';
import styled from '@emotion/styled';

// 支払予定表コンポーネントの型定義
type PaymentScheduleProps = {
  startDate: string;
  endDate: string;
  paymentMethod: 'すべて' | '受渡済' | '受渡済';
};

// 支払予定表コンポーネント
const PaymentSchedule: React.FC<PaymentScheduleProps> = ({ startDate, endDate, paymentMethod }) => {
  return (
    <Container>
      <Title>支払予定表</Title>
      <FormGroup>
        <Label>範囲指定</Label>
        <Input type="date" value={startDate} />
        <span>〜</span>
        <Input type="date" value={endDate} />
      </FormGroup>
      <FormGroup>
        <Label>支払方法</Label>
        <Select value={paymentMethod}>
          <option value="すべて">すべて</option>
          <option value="受渡済">受渡済</option>
          <option value="未受渡">未受渡</option>
        </Select>
      </FormGroup>
      <ButtonGroup>
        <Button>OK</Button>
        <Button>クリア</Button>
        <Button primary>終了</Button>
      </ButtonGroup>
    </Container>
  );
};

// スタイリング
const Container = styled.div`
  background-color: #f0f0f0;
  padding: 20px;
  border-radius: 4px;
`;

const Title = styled.h2`
  font-size: 18px;
  margin-bottom: 20px;
`;

const FormGroup = styled.div`
  margin-bottom: 15px;
  display: flex;
  align-items: center;
`;

const Label = styled.label`
  margin-right: 10px;
`;

const Input = styled.input`
  padding: 5px;
  border-radius: 4px;
  border: 1px solid #ccc;
  margin-right: 5px;
`;

const Select = styled.select`
  padding: 5px;
  border-radius: 4px;
  border: 1px solid #ccc;
`;

const ButtonGroup = styled.div`
  text-align: right;
`;

const Button = styled.button<{ primary?: boolean }>`
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  margin-left: 10px;
  background-color: ${(props) => (props.primary ? '#007bff' : '#f0f0f0')};
  color: ${(props) => (props.primary ? '#fff' : '#333')};
  cursor: pointer;
`;

// サンプルデータを用いた使用例
const App: React.FC = () => {
  return (
    <PaymentSchedule
      startDate="2023-08-17"
      endDate="2023-08-17"
      paymentMethod="すべて"
    />
  );
};

export default App;