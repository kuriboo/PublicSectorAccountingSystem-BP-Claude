import React from 'react';
import styled from 'styled-components';

// Material科目登録の型定義
type MaterialSubject = {
  code: string;
  name: string;
  yomi: string;
  standard: number;
  actual: number;
  difference: number;
};

// Material科目登録コンポーネント
const MaterialSubjectRegistration: React.FC<{
  data: MaterialSubject[];
  onClose: () => void;
  onCancel: () => void;
  onSubmit: () => void;
}> = ({ data, onClose, onCancel, onSubmit }) => {
  return (
    <Container>
      <Header>
        <Title>科目別決算見込登録</Title>
        <CloseButton onClick={onClose}>×</CloseButton>
      </Header>
      <Form>
        <Label>予算節</Label>
        <Input type="text" defaultValue="0020|0101" />
        <Message>指定した節コードの科目が表示されます。</Message>
        <Table>
          <thead>
            <tr>
              <th>科目コード</th>
              <th>科目名称</th>
              <th>予算見積</th>
              <th>決算見込額</th>
              <th>差異見込額</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr key={index}>
                <td>{row.code}</td>
                <td>{row.name}</td>
                <td>{row.standard.toLocaleString()}</td>
                <td>{row.actual.toLocaleString()}</td>
                <td>{row.difference.toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Form>
      <Footer>
        <CancelButton onClick={onCancel}>クリア</CancelButton>
        <SubmitButton onClick={onSubmit}>終了</SubmitButton>
      </Footer>
    </Container>
  );
};

// スタイリング
const Container = styled.div`
  background-color: #f0f0f0;
  padding: 10px;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
`;

const Title = styled.div`
  font-size: 18px;
  font-weight: bold;
`;

const CloseButton = styled.button`
  border: none;
  background: none;
  font-size: 20px;
  cursor: pointer;
`;

const Form = styled.div`
  background-color: white;
  padding: 10px;
`;

const Label = styled.div`
  font-weight: bold;
  margin-bottom: 5px;
`;

const Input = styled.input`
  width: 100%;
  margin-bottom: 5px;
  padding: 5px;
`;

const Message = styled.div`
  font-size: 12px;
  color: gray;
  margin-bottom: 10px;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;

  th, td {
    border: 1px solid #ccc;
    padding: 5px;
    text-align: right;
  }

  th {
    background-color: #f0f0f0;
  }
`;

const Footer = styled.div`
  margin-top: 10px;
  text-align: center;
`;

const CancelButton = styled.button`
  margin-right: 10px;
`;

const SubmitButton = styled.button``;

// サンプルデータ
const sampleData: MaterialSubject[] = [
  {
    code: '0020/0101/0001',
    name: '給料',
    yomi: 'キュウリョウ',
    standard: 129516000,
    actual: 129516000, 
    difference: 0
  },
  {
    code: '0020/0101/0008000',
    name: '旅用/給料',
    yomi: '',
    standard: 0,
    actual: 1004488,
    difference: 1004488
  },
];

// 使用例
const App: React.FC = () => {
  return (
    <MaterialSubjectRegistration 
      data={sampleData}
      onClose={() => console.log('Close clicked')}
      onCancel={() => console.log('Cancel clicked')}
      onSubmit={() => console.log('Submit clicked')}
    />
  );
};

export default App;