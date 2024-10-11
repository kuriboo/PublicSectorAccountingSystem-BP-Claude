import React from 'react';
import styled from 'styled-components';

// 保管場所の型定義
type StoragePlace = {
  code: string;
  name: string;
  postalCode: string;
};

// コンポーネントのプロパティの型定義
type Props = {
  storagePlace?: StoragePlace;
  onStoragePlaceChange?: (storagePlace: StoragePlace) => void;
};

// スタイリング
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #f0f0f0;
  border-radius: 5px;
  width: 100%;
  max-width: 400px;
  box-sizing: border-box;

  @media (max-width: 600px) {
    max-width: 100%;
  }
`;

const Title = styled.h2`
  margin-bottom: 20px;
`;

const InputGroup = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const Label = styled.label`
  margin-right: 10px;
`;

const Input = styled.input`
  padding: 5px;
  border-radius: 3px;
  border: 1px solid #ccc;
`;

const Select = styled.select`
  padding: 5px;
  border-radius: 3px;
  border: 1px solid #ccc;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
`;

const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f2f2f2;
  }
`;

const TableHeader = styled.th`
  padding: 8px;
  text-align: left;
  border-bottom: 1px solid #ddd;
`;

const TableCell = styled.td`
  padding: 8px;
  text-align: left;
  border-bottom: 1px solid #ddd;
`;

// コンポーネントの実装
const StoragePlaceForm: React.FC<Props> = ({ storagePlace, onStoragePlaceChange }) => {
  // 保管場所の変更ハンドラ
  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = event.target;
    if (onStoragePlaceChange) {
      onStoragePlaceChange({ ...storagePlace, [name]: value });
    }
  };

  return (
    <Container>
      <Title>入庫伝票月計表作成</Title>
      <InputGroup>
        <Label>年度</Label>
        <Select name="fiscalYear" value={storagePlace?.code || ''} onChange={handleChange}>
          <option value="">選択してください</option>
          <option value="2023">2023年度</option>
          <option value="2022">2022年度</option>
        </Select>
      </InputGroup>
      <InputGroup>
        <Label>保管場所</Label>
        <Input type="text" name="code" value={storagePlace?.code || ''} onChange={handleChange} />
        <Input type="text" name="name" value={storagePlace?.name || ''} onChange={handleChange} />
      </InputGroup>
      <InputGroup>
        <Label>所属</Label>
        <Input type="text" name="postalCode" value={storagePlace?.postalCode || ''} onChange={handleChange} />
      </InputGroup>
      <Table>
        <thead>
          <TableRow>
            <TableHeader>所属コード</TableHeader>
            <TableHeader>所属名称</TableHeader>
            <TableHeader>担当所属</TableHeader>
          </TableRow>
        </thead>
        <tbody>
          <TableRow>
            <TableCell>00000001</TableCell>
            <TableCell>総務課</TableCell>
            <TableCell>総務課</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>00000007</TableCell>
            <TableCell>経営企画課</TableCell>
            <TableCell></TableCell>
          </TableRow>
          <TableRow>
            <TableCell>99999999</TableCell>
            <TableCell>総務課</TableCell>
            <TableCell>担当</TableCell>
          </TableRow>
        </tbody>
      </Table>
    </Container>
  );
};

// サンプルデータ
const sampleStoragePlace: StoragePlace = {
  code: '0001',
  name: '保管場所A',
  postalCode: '1234567',
};

// 使用例
const App: React.FC = () => {
  const [storagePlace, setStoragePlace] = React.useState<StoragePlace>(sampleStoragePlace);

  const handleStoragePlaceChange = (updatedStoragePlace: StoragePlace) => {
    setStoragePlace(updatedStoragePlace);
  };

  return (
    <div>
      <h1>入庫伝票月計表作成フォーム</h1>
      <StoragePlaceForm storagePlace={storagePlace} onStoragePlaceChange={handleStoragePlaceChange} />
    </div>
  );
};

export default App;