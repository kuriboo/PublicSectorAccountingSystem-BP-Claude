import React from 'react';
import styled from '@emotion/styled';

type PublicWorkStatisticsFormProps = {
  statistics: Array<{ id: number; name: string; }>;
  onSubmit: () => void;
};

const PublicWorkStatisticsForm: React.FC<PublicWorkStatisticsFormProps> = ({ statistics, onSubmit }) => {
  return (
    <FormContainer>
      <Title>決算統計集計根拠出力</Title>
      <Subtitle>令和03年11月23日</Subtitle>
      <Table>
        <thead>
          <tr>
            <TableHeader>選択</TableHeader>
            <TableHeader>表番号</TableHeader>
            <TableHeader>名称</TableHeader>
          </tr>
        </thead>
        <tbody>
          {statistics.map(s => (
            <TableRow key={s.id}>
              <TableData><input type="checkbox" /></TableData>
              <TableData>{s.id}</TableData>
              <TableData>{s.name}</TableData>
            </TableRow>
          ))}
        </tbody>
      </Table>
      <SubmitButton onClick={onSubmit}>終了</SubmitButton>
    </FormContainer>
  );
};

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  font-family: sans-serif;
`;

const Title = styled.div`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const Subtitle = styled.div`
  font-size: 14px;
  color: #666;
  margin-bottom: 20px;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;
`;

const TableRow = styled.tr`
  &:nth-of-type(even) {
    background-color: #f2f2f2;
  }
`;

const TableHeader = styled.th`
  padding: 12px;
  text-align: left;
  background-color: #ddd;
`;

const TableData = styled.td`
  padding: 12px;
`;

const SubmitButton = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  cursor: pointer;
  
  &:hover {
    background-color: #0056b3;
  }
`;

// Usage example
const App: React.FC = () => {
  const sampleData = [
    { id: 20, name: '損益計算書' },
    { id: 21, name: '費用構成表' },  
    { id: 22, name: '管借対照表' },
    { id: 23, name: '資本的収支に関する調' },
    { id: 32, name: '経営分析に関する調(一)' },
    { id: 40, name: '付属金に関する調' },
  ];

  const handleSubmit = () => {
    // Handle form submit
    console.log('Form submitted');
  };

  return (
    <PublicWorkStatisticsForm
      statistics={sampleData}
      onSubmit={handleSubmit}
    />
  );
};

export default App;