import React from 'react';
import styled from '@emotion/styled';

interface MasterData {
  code: string;
  name: string;
}

interface MasterMaintProps {
  masterCode: string;
  masterName: string;
  data: MasterData[];
}

const MasterMaint: React.FC<MasterMaintProps> = ({ masterCode, masterName, data }) => {
  return (
    <Container>
      <Title>{masterName}</Title>
      <TableContainer>
        <Table>
          <thead>
            <tr>
              <TableHeader>コード</TableHeader>
              <TableHeader>名称</TableHeader>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <TableRow key={index}>
                <TableData>{item.code}</TableData>
                <TableData>{item.name}</TableData>
              </TableRow>
            ))}
          </tbody>
        </Table>
      </TableContainer>
      <ButtonContainer>
        <Button>OK</Button>
        <Button>クリア</Button>
        <Button>終了</Button>
      </ButtonContainer>
    </Container>
  );
};

// Styles
const Container = styled.div`
  padding: 20px;
`;

const Title = styled.h2`
  font-size: 18px;
  margin-bottom: 10px;
`;

const TableContainer = styled.div`
  margin-bottom: 20px;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const TableHeader = styled.th`
  padding: 10px;
  text-align: left;
  background-color: #f0f0f0;
`;

const TableRow = styled.tr`
  &:nth-of-type(even) {
    background-color: #f9f9f9;
  }
`;

const TableData = styled.td`
  padding: 10px;
`;

const ButtonContainer = styled.div`
  text-align: right;
`;

const Button = styled.button`
  padding: 8px 16px;
  margin-left: 10px;
`;

// Sample usage
const App: React.FC = () => {
  const sampleData: MasterData[] = [
    { code: '001', name: '予算担当' },
    { code: '002', name: '経理' },
    { code: '999', name: '予算・会計担当' },
  ];

  return (
    <div>
      <MasterMaint
        masterCode="001"
        masterName="担当マスタ"
        data={sampleData}
      />
    </div>
  );
};

export default App;