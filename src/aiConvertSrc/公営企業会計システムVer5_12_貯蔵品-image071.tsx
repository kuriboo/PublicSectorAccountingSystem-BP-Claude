import React from 'react';
import styled from '@emotion/styled';

type RepairItem = {
  id: number;
  name: string;
  status: string;
  assignee: string;
};

type RepairFlowProps = {
  repairItems: RepairItem[];
};

const RepairFlow: React.FC<RepairFlowProps> = ({ repairItems }) => {
  return (
    <Container>
      {repairItems.map((item) => (
        <FlowItem key={item.id}>
          <ItemName>{item.name}</ItemName>
          {item.status && <ItemStatus>{item.status}</ItemStatus>}
          {item.assignee && <ItemAssignee>{item.assignee}</ItemAssignee>}
        </FlowItem>
      ))}
      <BaseSystemRepair>基本システムへの反映</BaseSystemRepair>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: center;
  }
`;

const FlowItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: #f8f8f8;
  max-width: 200px;
  text-align: center;
`;

const ItemName = styled.div`
  font-weight: bold;
`;

const ItemStatus = styled.div`
  color: #666;
`;

const ItemAssignee = styled.div`
  color: #666;
`;

const BaseSystemRepair = styled.div`
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: #f0f0f0;
  max-width: 200px;
  text-align: center;
`;

// Usage example
const App: React.FC = () => {
  const sampleData: RepairItem[] = [
    { id: 1, name: '仕訳マスタ', status: '参照', assignee: '' },
    { id: 2, name: '貯蔵品用の\n自動作成', status: '参照', assignee: '' },
    { id: 3, name: '修繕単価マスタ', status: '', assignee: '修繕単価マスタ' },
  ];

  return (
    <div>
      <h1>修繕フロー</h1>
      <RepairFlow repairItems={sampleData} />
    </div>
  );
};

export default App;