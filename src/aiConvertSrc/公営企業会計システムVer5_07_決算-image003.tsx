import React from 'react';
import styled from '@emotion/styled';

// 曜日の型定義
type Day = '月' | '火' | '水' | '木' | '金' | '土' | '日';

// 表の行を表すコンポーネントの型定義
type RowProps = {
  day: Day;
  value: string;
};

// 表の行を表すコンポーネント
const Row: React.FC<RowProps> = ({ day, value }) => {
  return (
    <tr>
      <DayCell>{day}</DayCell>
      <InputCell>
        <input type="text" defaultValue={value} />
      </InputCell>
    </tr>
  );
};

// 資本的収支明細書項目名称修正コンポーネントの型定義
type RepairStatementProps = {
  data: RowProps[];
  note?: string;
};

// 資本的収支明細書項目名称修正コンポーネント
const RepairStatement: React.FC<RepairStatementProps> = ({ data, note }) => {
  return (
    <Container>
      <Header>
        <Title>資本的収支明細書項目名称修正</Title>
        <DateText>令和02年05月28日</DateText>
      </Header>
      <div>
        <label>
          <input type="radio" name="type" />
          登録 
        </label>
        <label>
          <input type="radio" name="type" />
          訂正
        </label>
        <label>
          <input type="radio" name="type" />
          削除
        </label>
      </div>
      <YearSelect>
        <option value="30">平成30</option>
      </YearSelect>
      年度
      <Table>
        <thead>
          <tr>
            <HeaderCell>款</HeaderCell>
            <HeaderCell>項</HeaderCell>
            <HeaderCell>目</HeaderCell>
            <HeaderCell>節</HeaderCell>
          </tr>
        </thead>
        <tbody>
          {data.map((row, i) => (
            <Row key={i} {...row} />
          ))}
        </tbody>
      </Table>
      {note && <Note>{note}</Note>}
      <Footer>
        <Button>OK</Button>
        <Button>クリア</Button>
        <Button>終了</Button>
      </Footer>
    </Container>
  );
};

// サンプルデータ
const sampleData: RowProps[] = [
  { day: '月', value: '名称1' },
  { day: '火', value: '名称2' },
  { day: '水', value: '名称3' },
  { day: '木', value: '名称4' },
];

// 使用例
const App: React.FC = () => {
  return (
    <RepairStatement
      data={sampleData}
      note="資本的収支明細書名称コードで作成した資本的収支明細書の名称を修正します。"
    />
  );
};

export default App;

// スタイリング
const Container = styled.div`
  font-family: sans-serif;
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const Title = styled.div`
  font-size: 24px;
  font-weight: bold;
`;

const DateText = styled.div`
  font-size: 18px;
`;

const YearSelect = styled.select`
  font-size: 16px;
  margin-right: 5px;
`;

const Table = styled.table`
  width: 100%;
  margin-top: 20px;
  border-collapse: collapse;

  th,
  td {
    border: 1px solid #ccc;
    padding: 10px;
    text-align: center;
  }
`;

const HeaderCell = styled.th`
  background-color: #f0f0f0;
`;

const DayCell = styled.td`
  width: 40px;
`;

const InputCell = styled.td`
  input {
    width: 100%;
    padding: 5px;
    box-sizing: border-box;
  }
`;

const Note = styled.div`
  margin-top: 20px;
`;

const Footer = styled.div`
  margin-top: 20px;
  text-align: center;
`;

const Button = styled.button`
  font-size: 16px;
  padding: 5px 10px;
  margin: 0 5px;
`;