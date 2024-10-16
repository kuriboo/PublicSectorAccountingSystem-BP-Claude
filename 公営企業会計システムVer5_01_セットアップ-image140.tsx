import React from 'react';
import styled from '@emotion/styled';

type PreproductMasterProps = {
  data: {
    code: number;
    name: string;
  }[];
};

const PreproductMaster: React.FC<PreproductMasterProps> = ({ data }) => {
  return (
    <Container>
      <Title>預金種別マスタ</Title>
      <Table>
        <thead>
          <tr>
            <HeaderCell>コード</HeaderCell>
            <HeaderCell>名称</HeaderCell>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.code}>
              <Cell>{item.code}</Cell>
              <Cell>{item.name}</Cell>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

// Styling with CSS-in-JS
const Container = styled.div`
  background-color: #f0f0f0;
  padding: 20px;
  border-radius: 4px;
`;

const Title = styled.h2`
  font-size: 18px;
  margin-bottom: 10px;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const HeaderCell = styled.th`
  background-color: #e0e0e0;
  padding: 8px;
  text-align: left;
`;

const Cell = styled.td`
  padding: 8px;
  border-bottom: 1px solid #ccc;
`;

// Sample data for demonstration
const sampleData = [
  { code: 0, name: '専用' },
  { code: 1, name: '普通預金' },
  { code: 2, name: '当座預金' },
  { code: 9, name: 'その他' },
];

const PreproductMasterDemo: React.FC = () => {
  return <PreproductMaster data={sampleData} />;
};

export default PreproductMasterDemo;