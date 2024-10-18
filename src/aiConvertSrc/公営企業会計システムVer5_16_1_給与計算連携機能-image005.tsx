import React from 'react';
import styled from '@emotion/styled';

type Process = {
  id: string;
  name: string;
};

type Department = {
  id: string;
  name: string;
  processes: Process[];
};

type Props = {
  departments: Department[];
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #f0f0f0;
`;

const DepartmentBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #fff;
`;

const DepartmentName = styled.h3`
  margin: 0;
  font-size: 18px;
`;

const ProcessList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 10px 0;
`;

const ProcessItem = styled.li`
  margin-bottom: 5px;
`;

const ProcessDiagram: React.FC<Props> = ({ departments }) => {
  return (
    <Container>
      {departments.map((department) => (
        <DepartmentBox key={department.id}>
          <DepartmentName>{department.name}</DepartmentName>
          <ProcessList>
            {department.processes.map((process) => (
              <ProcessItem key={process.id}>{process.name}</ProcessItem>
            ))}
          </ProcessList>
        </DepartmentBox>
      ))}
    </Container>
  );
};

// Usage example
const App: React.FC = () => {
  const sampleData: Department[] = [
    {
      id: '1',
      name: '給与支払処理',
      processes: [
        { id: '1-1', name: '賃金データ作成' },
        { id: '1-2', name: '振替に関する調査' },
        { id: '1-3', name: '出勤実績入力' },
        { id: '1-4', name: '給与支払' },
        { id: '1-5', name: '給与調整' },
      ],
    },
    {
      id: '2',
      name: '採用業務',
      processes: [
        { id: '2-1', name: '採用データ作成確認' },
        { id: '2-2', name: '振替に関する調査' },
        { id: '2-3', name: '出勤実績入力' },
        { id: '2-4', name: '給与支払' },
        { id: '2-5', name: '給与調整' },
      ],
    },
  ];

  return (
    <div>
      <h1>Process Diagram</h1>
      <ProcessDiagram departments={sampleData} />
    </div>
  );
};

export default App;