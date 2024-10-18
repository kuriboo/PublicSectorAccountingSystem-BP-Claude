import React from 'react';
import styled from '@emotion/styled';

interface MasterData {
  code: number;
  name: string;
}

interface ScheduleMasterProps {
  title: string;
  masters: MasterData[];
  systems: MasterData[];
}

const ScheduleMaster: React.FC<ScheduleMasterProps> = ({ title, masters, systems }) => {
  return (
    <Container>
      <Title>{title}</Title>
      <TableContainer>
        <Table>
          <thead>
            <TableRow>
              <TableHeader>予算編成区分コード</TableHeader>
              <TableHeader>システム予算編成区分コード</TableHeader>
              <TableHeader>名称</TableHeader>
            </TableRow>
          </thead>
          <tbody>
            {masters.map((master, index) => (
              <TableRow key={master.code}>
                <TableData>{master.code}</TableData>
                <TableData>{systems[index]?.code ?? ''}</TableData>
                <TableData>{master.name}</TableData>
              </TableRow>
            ))}
          </tbody>
        </Table>
      </TableContainer>
    </Container>
  );
};

const Container = styled.div`
  padding: 16px;
`;

const Title = styled.h2`
  font-size: 18px;
  margin-bottom: 8px;
`;

const TableContainer = styled.div`
  overflow-x: auto;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const TableRow = styled.tr`
  &:nth-of-type(even) {
    background-color: #f2f2f2;
  }
`;

const TableHeader = styled.th`
  padding: 8px;
  text-align: left;
  border-bottom: 1px solid #ddd;
`;

const TableData = styled.td`
  padding: 8px;
  border-bottom: 1px solid #ddd;
`;

// Usage example
const masters: MasterData[] = [
  { code: 1, name: '当初予算' },
  { code: 2, name: '補正予算' },
  { code: 3, name: '補正予算' },
  { code: 4, name: '決算見込' },
  { code: 5, name: '決算・決算統計' },
  { code: 6, name: '月次' },
];

const systems: MasterData[] = [
  { code: 2, name: '当初予算' },
  { code: 1, name: '補正予算' },
  { code: 3, name: '補正予算' },
  { code: 4, name: '決算見込' },
  { code: 5, name: '決算・決算統計' },
  { code: 6, name: '月次' },
];

const App: React.FC = () => {
  return (
    <div>
      <ScheduleMaster title="予算編成区分マスタ" masters={masters} systems={systems} />
    </div>
  );
};

export default App;