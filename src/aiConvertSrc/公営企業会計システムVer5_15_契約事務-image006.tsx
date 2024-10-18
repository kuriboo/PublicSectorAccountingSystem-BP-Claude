import React from 'react';
import styled from '@emotion/styled';

// 注記コードの型定義
type NoteCode = {
  code: string;
  name: string;
};

// コンポーネントのプロパティの型定義
type NoteEditorProps = {
  noteCodes: NoteCode[];
  onOk?: () => void;
  onCancel?: () => void;
};

// コンポーネントのスタイリング
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #f5f5f5;
  border-radius: 4px;
  width: 100%;
  max-width: 400px;
  box-sizing: border-box;

  @media (max-width: 600px) {
    max-width: 100%;
  }
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;
`;

const TableHeader = styled.th`
  padding: 10px;
  text-align: left;
  background-color: #e0e0e0;
  border: 1px solid #ccc;
`;

const TableCell = styled.td`
  padding: 10px;
  border: 1px solid #ccc;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
`;

const Button = styled.button`
  padding: 8px 16px;
  margin-left: 10px;
  background-color: ${(props) => (props.primary ? '#007bff' : '#6c757d')};
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;

// 注記エディタコンポーネント
const NoteEditor: React.FC<NoteEditorProps> = ({ noteCodes, onOk, onCancel }) => {
  // 注記コードと名称の入力値を管理するステート
  const [code, setCode] = React.useState('');
  const [name, setName] = React.useState('');

  // OKボタンのクリックハンドラ
  const handleOk = () => {
    if (onOk) {
      onOk();
    }
  };

  // キャンセルボタンのクリックハンドラ  
  const handleCancel = () => {
    if (onCancel) {
      onCancel();
    }
  };

  return (
    <Container>
      <Table>
        <thead>
          <tr>
            <TableHeader>注記種別</TableHeader>
            <TableHeader>注記名称</TableHeader>
          </tr>
        </thead>
        <tbody>
          {noteCodes.map((noteCode) => (
            <tr key={noteCode.code}>
              <TableCell>{noteCode.code}</TableCell>
              <TableCell>{noteCode.name}</TableCell>
            </tr>
          ))}
        </tbody>
      </Table>
      <div>
        <label>注記種別：</label>
        <input type="text" value={code} onChange={(e) => setCode(e.target.value)} />
      </div>
      <div>
        <label>注記名称：</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </div>
      <ButtonContainer>
        <Button onClick={handleCancel}>クリア</Button>
        <Button primary onClick={handleOk}>OK</Button>
        <Button>キャンセル</Button>
      </ButtonContainer>
    </Container>
  );
};

// サンプルデータ
const sampleNoteCodes: NoteCode[] = [
  { code: '注記001', name: '指定給水装置工事事業者' },
];

// 使用例
const App: React.FC = () => {
  return (
    <div>
      <h1>注記エディタ</h1>
      <NoteEditor noteCodes={sampleNoteCodes} />
    </div>
  );
};

export default App;