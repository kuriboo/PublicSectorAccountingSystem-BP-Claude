import React from 'react';
import styled from 'styled-components';

type InsuranceListData = {
  code: string;
  name: string;
};

type InsuranceListProps = {
  title?: string;
  data: InsuranceListData[];
  onClose?: () => void;
};

// コンポーネントのスタイリング
const Container = styled.div`
  background-color: #f0f0f0;
  padding: 16px;
  border-radius: 4px;
  width: 400px;
  box-sizing: border-box;

  @media (max-width: 480px) {
    width: 100%;
  }
`;

const Title = styled.div`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 16px;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const TableHeader = styled.th`
  text-align: left;
  padding: 8px;
  border-bottom: 1px solid #ccc;
`;

const TableData = styled.td`
  padding: 8px;
  border-bottom: 1px solid #ccc;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 16px;
`;

const Button = styled.button`
  padding: 8px 16px;
  margin-left: 8px;
  border: none;
  border-radius: 4px;
  background-color: #007bff;
  color: #fff;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

// 保険場所一覧コンポーネント
const InsuranceList: React.FC<InsuranceListProps> = ({ title = '保管場所名称', data, onClose }) => {
  return (
    <Container>
      <Title>{title}</Title>
      <Table>
        <thead>
          <tr>
            <TableHeader>保管場所コード</TableHeader>
            <TableHeader>名称</TableHeader>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <TableData>{item.code}</TableData>
              <TableData>{item.name}</TableData>
            </tr>
          ))}
        </tbody>
      </Table>
      <ButtonContainer>
        <Button>OK</Button>
        <Button>クリア</Button>
        <Button onClick={onClose}>キャンセル</Button>
      </ButtonContainer>
    </Container>
  );
};

// サンプルデータ
const sampleData: InsuranceListData[] = [
  { code: '000001', name: '保管場所A' },
  { code: '000002', name: '保管場所B' },
  { code: '000003', name: '倉庫' },
];

// 使用例
const App: React.FC = () => {
  return (
    <div>
      <h1>保険場所一覧</h1>
      <InsuranceList
        data={sampleData}
        onClose={() => console.log('Closed')}
      />
    </div>
  );
};

export default App;