import React from 'react';
import styled from '@emotion/styled';

// 初期マスタデータの型定義
type InitialMasterData = {
  code: string;
  name1: string;
  name2: string;
};

// コンポーネントのProps型定義
type MasterMaintenanceProps = {
  initialMasterData: InitialMasterData[];
};

// 各パーツのスタイル定義
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const Title = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
`;

const Form = styled.form`
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
`;

const Input = styled.input`
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;

  th,
  td {
    border: 1px solid #ccc;
    padding: 8px;
    text-align: left;
  }

  th {
    background-color: #f2f2f2;
  }
`;

const Button = styled.button`
  padding: 5px 10px;
  border: none;
  border-radius: 4px;
  background-color: #007bff;
  color: #fff;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

// マスタメンテナンスコンポーネント
const MasterMaintenance: React.FC<MasterMaintenanceProps> = ({ initialMasterData }) => {
  // マスタデータのstate
  const [masterData, setMasterData] = React.useState<InitialMasterData[]>(initialMasterData);
  
  // 検索処理
  const handleSearch = () => {
    // 検索処理の実装
  };
  
  // データ追加処理
  const handleAdd = () => {
    // データ追加処理の実装  
  };
  
  // データ削除処理
  const handleDelete = () => {
    // データ削除処理の実装
  };
  
  // 編集処理
  const handleEdit = () => {
    // 編集処理の実装
  };
  
  return (
    <Container>
      <Title>摘要初期値マスタ</Title>
      <Form>
        <Input placeholder="摘要" />
        <Input placeholder="内容1" />
        <Input placeholder="内容2" />
        <Button onClick={handleSearch}>検索</Button>
        <Button onClick={handleAdd}>登録</Button>
        <Button onClick={handleEdit}>訂正</Button>
        <Button onClick={handleDelete}>削除</Button>
      </Form>
      <Table>
        <thead>
          <tr>
            <th>コード</th>
            <th>内容1</th>
            <th>内容2</th>
          </tr>
        </thead>
        <tbody>
          {masterData.map((data) => (
            <tr key={data.code}>
              <td>{data.code}</td>
              <td>{data.name1}</td>
              <td>{data.name2}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

// サンプルデータ
const sampleData: InitialMasterData[] = [
  { code: '000001', name1: '月分給料', name2: '' },
  { code: '000002', name1: '月分手当等', name2: '' },
  { code: '000003', name1: '月分期末勤勉手当', name2: '' },
  // ... 他のサンプルデータ
];

// 使用例
const App: React.FC = () => {
  return (
    <div>
      <h1>マスタメンテナンス画面</h1>
      <MasterMaintenance initialMasterData={sampleData} />
    </div>
  );
};

export default App;