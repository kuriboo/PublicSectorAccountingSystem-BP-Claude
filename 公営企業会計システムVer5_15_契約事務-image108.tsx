import React from 'react';
import styled from '@emotion/styled';

// 注記名称マスタの型定義
type NotationItem = {
  code: string;
  name: string;
};

type NotationMasterProps = {
  notationItems: NotationItem[];
  onAddNotation: (code: string, name: string) => void;
  onEditNotation: (index: number, code: string, name: string) => void;
  onDeleteNotation: (index: number) => void;
};

const NotationMaster: React.FC<NotationMasterProps> = ({
  notationItems,
  onAddNotation,
  onEditNotation,
  onDeleteNotation,
}) => {
  const [code, setCode] = React.useState('');
  const [name, setName] = React.useState('');

  // 新規追加ボタン押下時の処理
  const handleAddNotation = () => {
    if (code && name) {
      onAddNotation(code, name);
      setCode('');
      setName('');
    }
  };

  // 変更ボタン押下時の処理
  const handleEditNotation = (index: number) => {
    if (code && name) {
      onEditNotation(index, code, name);
      setCode('');
      setName('');
    }
  };

  // 削除ボタン押下時の処理  
  const handleDeleteNotation = (index: number) => {
    onDeleteNotation(index);
  };

  return (
    <Container>
      <Title>注記種別保守</Title>
      <Fields>
        <Field>
          <Label>コード</Label>
          <Input
            value={code}
            onChange={(e) => setCode(e.target.value)}
          />
        </Field>
        <Field>
          <Label>名称</Label>
          <Input
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Field>
      </Fields>
      <AddButton onClick={handleAddNotation}>追加</AddButton>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHeaderCell>注記コード</TableHeaderCell>
            <TableHeaderCell>注記名称</TableHeaderCell>
            <TableHeaderCell></TableHeaderCell>
          </TableRow>
        </TableHeader>
        <TableBody>
          {notationItems.map((item, index) => (
            <TableRow key={item.code}>
              <TableCell>{item.code}</TableCell>
              <TableCell>{item.name}</TableCell>
              <TableCell>
                <EditButton onClick={() => handleEditNotation(index)}>
                  変更
                </EditButton>
                <DeleteButton onClick={() => handleDeleteNotation(index)}>
                  削除
                </DeleteButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Buttons>
        <Button>OK</Button>
        <Button>クリア</Button>
        <Button>終了</Button>
      </Buttons>
    </Container>
  );
};

// サンプルデータを用いた使用例
const App: React.FC = () => {
  const [notationItems, setNotationItems] = React.useState<NotationItem[]>([
    { code: '001', name: '指定給水装置工事事業者' },
    { code: '002', name: '注記名称マスト×××' },
  ]);

  const handleAddNotation = (code: string, name: string) => {
    setNotationItems([...notationItems, { code, name }]);
  };

  const handleEditNotation = (index: number, code: string, name: string) => {
    const newItems = [...notationItems];
    newItems[index] = { code, name };
    setNotationItems(newItems);
  };

  const handleDeleteNotation = (index: number) => {
    const newItems = notationItems.filter((_, i) => i !== index);
    setNotationItems(newItems);
  };

  return (
    <NotationMaster
      notationItems={notationItems}
      onAddNotation={handleAddNotation}
      onEditNotation={handleEditNotation}  
      onDeleteNotation={handleDeleteNotation}
    />
  );
};

// スタイリング
const Container = styled.div`
  padding: 16px;
`;

const Title = styled.h2`
  font-size: 18px;
  margin-bottom: 16px;
`;

const Fields = styled.div`
  display: flex;
  gap: 16px;
  margin-bottom: 16px;
`;

const Field = styled.div`
  display: flex;
  align-items: center;
`;

const Label = styled.label`
  margin-right: 8px;
`;

const Input = styled.input`
  padding: 4px;
`;

const AddButton = styled.button`
  margin-bottom: 16px;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 16px;
`;

const TableHeader = styled.thead`
  background-color: #f0f0f0;
`;

const TableBody = styled.tbody``;

const TableRow = styled.tr``;

const TableHeaderCell = styled.th`
  padding: 8px;
  text-align: left;
  border: 1px solid #ccc;
`;

const TableCell = styled.td`
  padding: 8px;
  border: 1px solid #ccc;
`;

const EditButton = styled.button`
  margin-right: 8px;
`;

const DeleteButton = styled.button``;

const Buttons = styled.div`
  text-align: center;
`;

const Button = styled.button`
  margin: 0 8px;
`;

export default App;