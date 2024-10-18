import React from 'react';
import styled from 'styled-components';

// 作表制御表区分マスタの型定義
type MasterItem = {
  code: string;
  title: string;
};

type Props = {
  masterItems: MasterItem[];
  onRegister: () => void;
  onCancel: () => void;
};

// スタイルコンポーネント
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  @media (min-width: 768px) {
    max-width: 600px;
    margin: 0 auto;
  }
`;

const Title = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;
`;

const TableHeader = styled.th`
  padding: 10px;
  text-align: left;
  background-color: #f2f2f2;
  border: 1px solid #ddd;
`;

const TableData = styled.td`
  padding: 10px;
  border: 1px solid #ddd;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
`;

const Button = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background-color: #0056b3;
  }
`;

// 作表制御表区分マスタコンポーネント
const WorkControlMaster: React.FC<Props> = ({ masterItems, onRegister, onCancel }) => {
  return (
    <Container>
      <Title>作表制御表区分マスタ</Title>
      <Table>
        <thead>
          <tr>
            <TableHeader>作表制御表コード</TableHeader>
            <TableHeader>タイトル</TableHeader>
          </tr>
        </thead>
        <tbody>
          {masterItems.map((item) => (
            <tr key={item.code}>
              <TableData>{item.code}</TableData>
              <TableData>{item.title}</TableData>
            </tr>
          ))}
        </tbody>
      </Table>
      <ButtonContainer>
        <Button onClick={onRegister}>登録</Button>
        <Button onClick={onCancel}>キャンセル</Button>
      </ButtonContainer>
    </Container>
  );
};

// サンプルデータと使用例
const sampleData: MasterItem[] = [
  { code: '001', title: '費用構成表（合計）' },
  { code: '002', title: 'テスト表' },
  { code: '003', title: '作表制御表計表' },
];

const App: React.FC = () => {
  const handleRegister = () => {
    // 登録処理
    console.log('Registered');
  };

  const handleCancel = () => {
    // キャンセル処理
    console.log('Canceled');
  };

  return (
    <WorkControlMaster
      masterItems={sampleData}
      onRegister={handleRegister}
      onCancel={handleCancel}
    />
  );
};

export default App;