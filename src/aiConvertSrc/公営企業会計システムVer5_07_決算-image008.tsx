import React from 'react';
import styled from 'styled-components';

// 収益費用明細書コンポーネントの型定義
interface ExpenseRevenueStatementProps {
  startDate?: string;
  endDate?: string;
  size?: 'A4' | 'A4横';
  orientation?: '縦' | '横';
  openSide?: '左' | '右';
  pageNumber?: number;
  note?: string;
}

// 収益費用明細書コンポーネント
const ExpenseRevenueStatement: React.FC<ExpenseRevenueStatementProps> = ({
  startDate = '',
  endDate = '',
  size = 'A4',
  orientation = '縦',
  openSide = '左',
  pageNumber = 1,
  note = '',
}) => {
  return (
    <Container>
      <Title>収益費用明細書</Title>
      <DateRange>
        <Label>会計期間</Label>
        <Input type="text" value={startDate} placeholder="開始日" />
        <Separator>〜</Separator>
        <Input type="text" value={endDate} placeholder="終了日" />
      </DateRange>
      <RadioGroup>
        <RadioLabel>
          <Radio type="radio" name="size" value="A4" checked={size === 'A4'} />
          A4
        </RadioLabel>
        <RadioLabel>
          <Radio type="radio" name="size" value="A4横" checked={size === 'A4横'} />
          A4 横
        </RadioLabel>
      </RadioGroup>
      <InputGroup>
        <Label>収益サブタイトル</Label>
        <Input type="text" />
      </InputGroup>
      <InputGroup>
        <Label>費用サブタイトル</Label>
        <Input type="text" />
      </InputGroup>
      <RadioGroup>
        <RadioLabel>
          <Radio type="radio" name="openSide" value="左" checked={openSide === '左'} />
          左
        </RadioLabel>
        <RadioLabel>
          <Radio type="radio" name="openSide" value="右" checked={openSide === '右'} />
          右
        </RadioLabel>
      </RadioGroup>
      <InputGroup>
        <Label>開始頁</Label>
        <Input type="number" value={pageNumber} min={1} />
      </InputGroup>
      <RadioGroup>
        <RadioLabel>
          <Radio type="radio" name="orientation" value="縦" checked={orientation === '縦'} />
          縦
        </RadioLabel>
        <RadioLabel>
          <Radio type="radio" name="orientation" value="横" checked={orientation === '横'} />
          横
        </RadioLabel>
      </RadioGroup>
      <Note>{note}</Note>
      <ButtonGroup>
        <Button>OK</Button>
        <Button>クリア</Button>
        <Button primary>終了</Button>
      </ButtonGroup>
    </Container>
  );
};

// サンプルデータ
const sampleData: ExpenseRevenueStatementProps = {
  startDate: '平成29年04月01日',
  endDate: '平成30年03月31日',
  size: 'A4',
  orientation: '縦',
  openSide: '左',
  pageNumber: 1,
  note: '指定した仕訳科目内の執行額を集計し、収益費用明細書を作成します。',
};

// 使用例
const App: React.FC = () => {
  return (
    <div>
      <h1>収益費用明細書</h1>
      <ExpenseRevenueStatement {...sampleData} />
    </div>
  );
};

export default App;

// スタイリング
const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 24px;
  background-color: #f0f0f0;
  border-radius: 8px;
`;

const Title = styled.h2`
  margin: 0;
`;

const DateRange = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const Label = styled.label`
  font-weight: bold;
`;

const Input = styled.input`
  padding: 4px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Separator = styled.span`
  margin: 0 8px;
`;

const RadioGroup = styled.div`
  display: flex;
  gap: 16px;
`;

const RadioLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 4px;
`;

const Radio = styled.input`
  margin: 0;
`;

const InputGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const Note = styled.p`
  margin: 0;
  color: #666;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 8px;
`;

const Button = styled.button<{ primary?: boolean }>`
  padding: 8px 16px;
  color: ${({ primary }) => (primary ? '#fff' : '#333')};
  background-color: ${({ primary }) => (primary ? '#007bff' : '#f0f0f0')};
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;