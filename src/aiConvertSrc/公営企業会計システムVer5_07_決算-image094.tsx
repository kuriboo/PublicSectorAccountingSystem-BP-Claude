import React from 'react';
import styled from '@emotion/styled';

type Props = {
  projectName: string;
  projectPeriod: string;
  projectBudget: number;
  projectBudgetUsed: number;
  projectBudgetRemaining: number;
};

const ProjectSummary: React.FC<Props> = ({
  projectName,
  projectPeriod,
  projectBudget,
  projectBudgetUsed,
  projectBudgetRemaining,
}) => {
  return (
    <Container>
      <Title>プロジェクト概要</Title>
      <Table>
        <TableRow>
          <TableHeader>プロジェクト名</TableHeader>
          <TableData>{projectName || 'プロジェクト名なし'}</TableData>
        </TableRow>
        <TableRow>
          <TableHeader>プロジェクト期間</TableHeader>
          <TableData>{projectPeriod || '期間未設定'}</TableData>
        </TableRow>
        <TableRow>
          <TableHeader>プロジェクトの総予算</TableHeader>
          <TableData>{projectBudget ? `${projectBudget.toLocaleString()}円` : '0円'}</TableData>
        </TableRow>
        <TableRow>
          <TableHeader>プロジェクトの予算消化額</TableHeader>
          <TableData>{projectBudgetUsed ? `${projectBudgetUsed.toLocaleString()}円` : '0円'}</TableData>
        </TableRow>
        <TableRow>
          <TableHeader>プロジェクトの予算残高</TableHeader>
          <TableData>{projectBudgetRemaining ? `${projectBudgetRemaining.toLocaleString()}円` : '0円'}</TableData>
        </TableRow>
      </Table>
      <ButtonContainer>
        <Button type="button">OK</Button>
        <Button type="button">クリア</Button>
        <Button type="button">キャンセル</Button>
      </ButtonContainer>
    </Container>
  );
};

// Sample data for demo
const sampleData = {
  projectName: '第1期 営業展開',
  projectPeriod: '2023/04/01 - 2023/09/30', 
  projectBudget: 1000000,
  projectBudgetUsed: 250000,
  projectBudgetRemaining: 750000,
};

const ProjectSummaryDemo = () => {
  return (
    <div>
      <h2>Project Summary Demo</h2>
      <ProjectSummary {...sampleData} />
    </div>
  );
};

// Styles
const Container = styled.div`
  font-family: sans-serif;
  border: 1px solid #ccc;
  padding: 16px;
  width: 400px;

  @media (max-width: 480px) {
    width: 100%;
  }
`;

const Title = styled.h2`
  margin: 0 0 16px;
`;

const Table = styled.table`
  width: 100%;
  margin-bottom: 16px;
  border-collapse: collapse;
`;

const TableRow = styled.tr`
  &:nth-of-type(odd) {
    background-color: #f6f6f6;
  }
`;

const TableHeader = styled.th`
  border: 1px solid #ccc;
  padding: 4px;
  text-align: left;
  width: 50%;
`;

const TableData = styled.td`
  border: 1px solid #ccc;  
  padding: 4px;
`;

const ButtonContainer = styled.div`
  text-align: center;
`;

const Button = styled.button`
  margin: 0 4px;
`;

export default ProjectSummaryDemo;