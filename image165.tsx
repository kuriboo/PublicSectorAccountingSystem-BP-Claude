import React, { useState } from 'react';
import styled from 'styled-components';

// 行のデータ型
type RowData = {
  no: number;
  text: string;
};

// テーブルのプロパティ型
type TableProps = {
  data: RowData[];
};

// テーブルコンポーネント
const Table: React.FC<TableProps> = ({ data }) => {
  return (
    <TableWrapper>
      <TableHeader>
        <HeaderCell>No</HeaderCell>
        <HeaderCell>文言</HeaderCell>
      </TableHeader>
      <TableBody>
        {data.map((row, index) => (
          <TableRow key={index}>
            <Cell>{row.no}</Cell>
            <Cell>{row.text}</Cell>
          </TableRow>
        ))}
      </TableBody>
    </TableWrapper>
  );
};

// 入力フォームコンポーネント
const InputForm: React.FC = () => {
  const [text, setText] = useState('');

  // 行追加処理
  const handleAddRow = () => {
    // 実際の行追加ロジックを実装する
    console.log('Adding row with text:', text);
    setText('');
  };

  return (
    <InputWrapper>
      <Input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="(保管)"
      />
      <AddButton onClick={handleAddRow}>行追加</AddButton>
    </InputWrapper>
  );
};

// サンプルデータ
const sampleData: RowData[] = [
  { no: 1, text: '(納付書保管)' },
  { no: 2, text: '(金融機関保管)' },
  { no: 3, text: '(保管)' },
];

// 使用例コンポーネント
const App: React.FC = () => {
  return (
    <Container>
      <Table data={sampleData} />
      <InputForm />
      <ButtonWrapper>
        <Button>OK</Button>
        <Button>クリア</Button>
        <Button>キャンセル</Button>
      </ButtonWrapper>
    </Container>
  );
};

// スタイリング
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const TableWrapper = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;
`;

const TableHeader = styled.thead`
  background-color: #f0f0f0;
`;

const HeaderCell = styled.th`
  padding: 10px;
  text-align: left;
`;

const TableBody = styled.tbody``;

const TableRow = styled.tr``;

const Cell = styled.td`
  padding: 10px;
  border-bottom: 1px solid #ccc;
`;

const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const Input = styled.input`
  padding: 5px;
  margin-right: 10px;
`;

const AddButton = styled.button`
  padding: 5px 10px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
`;

const Button = styled.button`
  padding: 10px 20px;
  margin-left: 10px;
`;

export default App;