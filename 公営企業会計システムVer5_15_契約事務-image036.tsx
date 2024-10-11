import React from 'react';
import styled from '@emotion/styled';

type EntryType = {
  area: string;
  entryPrice: string;
};

type InputFormProps = {
  entries: EntryType[];
  onSubmit: (entryType: string, entryPrice: number) => void;
};

const InputForm: React.FC<InputFormProps> = ({ entries, onSubmit }) => {
  const [entryType, setEntryType] = React.useState('入札執行者');
  const [entryPrice, setEntryPrice] = React.useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // 値が入力されていない場合は処理しない
    if (!entryPrice) return;
    onSubmit(entryType, Number(entryPrice));
    setEntryPrice('');
  };

  return (
    <Container>
      <Title>入札執行者</Title>
      <Table>
        <thead>
          <tr>
            <TableHeader>関係者区分</TableHeader>
            <TableHeader>入札関係者</TableHeader>
          </tr>
        </thead>
        <tbody>
          {entries.map((entry, index) => (
            <tr key={index}>
              <TableData>{entry.area}</TableData>
              <TableData>{entry.entryPrice}</TableData>
            </tr>
          ))}
        </tbody>
      </Table>
      <Form onSubmit={handleSubmit}>
        <RadioButtonContainer>
          <label>
            <input
              type="radio"
              value="入札執行者"
              checked={entryType === '入札執行者'}
              onChange={(e) => setEntryType(e.target.value)}
            />
            入札執行者
          </label>
          <label>
            <input
              type="radio"
              value="入札立会者"
              checked={entryType === '入札立会者'}
              onChange={(e) => setEntryType(e.target.value)}
            />
            入札立会者
          </label>
        </RadioButtonContainer>
        <Input
          type="number"
          value={entryPrice}
          onChange={(e) => setEntryPrice(e.target.value)}
        />
        <Button type="submit">行確定</Button>
        <CancelButton type="button">行ｷｬﾝｾﾙ</CancelButton>
      </Form>
      <SubmitButton>OK</SubmitButton>
      <ClearButton>クリア</ClearButton>
      <CancelButton>キャンセル</CancelButton>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const Title = styled.h2`
  margin-bottom: 20px;
`;

const Table = styled.table`
  width: 100%;
  margin-bottom: 20px;
  border-collapse: collapse;
`;

const TableHeader = styled.th`
  padding: 10px;
  border: 1px solid #ccc;
  background-color: #f0f0f0;
`;

const TableData = styled.td`
  padding: 10px;
  border: 1px solid #ccc;
`;

const Form = styled.form`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const RadioButtonContainer = styled.div`
  display: flex;
  margin-right: 10px;
`;

const Input = styled.input`
  padding: 5px;
  margin-right: 10px;
`;

const Button = styled.button`
  padding: 5px 10px;
  margin-right: 10px;
`;

const SubmitButton = styled(Button)`
  background-color: #007bff;
  color: #fff;
`;

const ClearButton = styled(Button)`
  background-color: #6c757d;
  color: #fff;
`;

const CancelButton = styled(Button)`
  background-color: #dc3545;
  color: #fff;
`;

// サンプルデータ
const sampleEntries: EntryType[] = [
  { area: '入札執行者', entryPrice: 'ぎょうせい一郎' },
  { area: '入札立会人', entryPrice: 'ぎょうせい太郎' },
];

const App: React.FC = () => {
  const [entries, setEntries] = React.useState<EntryType[]>(sampleEntries);

  const handleSubmit = (entryType: string, entryPrice: number) => {
    setEntries([...entries, { area: entryType, entryPrice: entryPrice.toString() }]);
  };

  return <InputForm entries={entries} onSubmit={handleSubmit} />;
};

export default App;