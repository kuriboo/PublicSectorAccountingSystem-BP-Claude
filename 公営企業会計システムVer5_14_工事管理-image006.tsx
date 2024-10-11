import React from 'react';
import styled from '@emotion/styled';

type MembershipMasterProps = {
  currentMembership?: string;
  nextMembership?: string;
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  font-size: 14px;
  @media (min-width: 768px) {
    font-size: 16px;
  }
`;

const Title = styled.h2`
  margin-bottom: 20px;
  @media (min-width: 768px) {
    font-size: 24px;
  }
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;
`;

const TableHeader = styled.th`
  padding: 10px;
  border: 1px solid #ccc;
  background-color: #f0f0f0;
`;

const TableData = styled.td`
  padding: 10px;
  border: 1px solid #ccc;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
`;

const Button = styled.button`
  padding: 10px 20px;
  margin-left: 10px;
  border: none;
  border-radius: 5px;
  background-color: #007bff;
  color: #fff;
  cursor: pointer;
  &:hover {
    background-color: #0056b3;
  }
`;

const MembershipMaster: React.FC<MembershipMasterProps> = ({ 
  currentMembership = '平成29年度', 
  nextMembership = '平成30年度'
}) => {
  return (
    <Container>
      <Title>次年度マスタ作成</Title>
      <Table>
        <thead>
          <tr>
            <TableHeader>当期会計年度</TableHeader>
            <TableHeader>年度</TableHeader>
          </tr>
        </thead>
        <tbody>
          <tr>
            <TableData>{currentMembership}</TableData>
            <TableData>年度</TableData>
          </tr>
          <tr>
            <TableData>{nextMembership}</TableData>
            <TableData>年度</TableData>
          </tr>
        </tbody>
      </Table>
      <ButtonContainer>
        <Button>キャンセル</Button>
        <Button>OK</Button>
        <Button>終了</Button>
      </ButtonContainer>
    </Container>
  );
};

// Usage example
const App: React.FC = () => {
  return (
    <div>
      <MembershipMaster />
    </div>
  );
};

export default App;