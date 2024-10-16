import React from 'react';
import styled from '@emotion/styled';

type DecisionReportProps = {
  items: string[];
  values: number[];
};

const DecisionReport: React.FC<DecisionReportProps> = ({ items, values }) => {
  return (
    <Container>
      <Title>決算総括入力</Title>
      <TableContainer>
        <Table>
          <thead>
            <tr>
              <Th>項目名称</Th>
              <Th>公正法24条8項の額</Th>
            </tr>
          </thead>
          <tbody>
            {items.map((item, index) => (
              <tr key={index}>
                <Td>{item}</Td>
                <Td>{values[index] || 0}</Td>
              </tr>
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

// Sample data for testing
const sampleItems = ['水道事業収入', '第1項 営業収益', '第2項 営業外収益', '第3項 特別利益'];
const sampleValues = [0, 0, 0, 0];

const DecisionReportExample: React.FC = () => {
  return (
    <div>
      <h2>Decision Report Example</h2>
      <DecisionReport items={sampleItems} values={sampleValues} />
    </div>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const Title = styled.h1`
  font-size: 24px;
  margin-bottom: 20px;
`;

const TableContainer = styled.div`
  width: 100%;
  max-width: 600px;
  overflow-x: auto;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;
`;

const Th = styled.th`
  background-color: #f2f2f2;
  padding: 10px;
  text-align: left;
`;

const Td = styled.td`
  padding: 10px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  max-width: 600px;
`;

const Button = styled.button`
  padding: 10px 20px;
  margin-left: 10px;
  cursor: pointer;
`;

export default DecisionReportExample;