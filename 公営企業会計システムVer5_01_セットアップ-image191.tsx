import React from 'react';
import styled from '@emotion/styled';

type MasterData = {
  id: number;
  name: string;
}

type Props = {
  systemMasterItems: MasterData[];
  customMasterItems: MasterData[];
  onOk?: () => void;
  onCancel?: () => void;
  onDelete?: () => void;
}

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px;
  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: center;
  }
`;

const StyledColumn = styled.div`
  display: flex;
  flex-direction: column;
  margin: 8px;
`;

const StyledTable = styled.table`
  border-collapse: collapse;
  th, td {
    border: 1px solid #ccc;
    padding: 4px;
    text-align: center;
  }
`;

const StyledButtonGroup = styled.div`
  margin-top: 16px;
  button {
    margin: 0 4px;
  }
`;

const MasterMaintenance: React.FC<Props> = ({
  systemMasterItems,
  customMasterItems,
  onOk,
  onCancel,
  onDelete,
}) => {
  return (
    <StyledWrapper>
      <StyledColumn>
        <h3>システム予算編成区分コード</h3>
        <StyledTable>
          <thead>
            <tr>
              <th>予算編成区分コード</th>
            </tr>
          </thead>
          <tbody>
            {systemMasterItems.map(item => (
              <tr key={item.id}>
                <td>{item.id}</td>
              </tr>
            ))}
          </tbody>
        </StyledTable>
      </StyledColumn>
      
      <StyledColumn>
        <h3>名称</h3>
        <StyledTable>
          <thead>
            <tr>
              <th>予算編成区分コード</th>
              <th>名称</th>
            </tr>
          </thead>
          <tbody>
            {customMasterItems.map(item => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
              </tr>
            ))}
          </tbody>
        </StyledTable>
      </StyledColumn>
      
      <StyledButtonGroup>
        <button onClick={onOk}>OK</button>
        <button onClick={onCancel}>クリア</button>
        <button onClick={onDelete}>削除</button>
      </StyledButtonGroup>
    </StyledWrapper>
  );
};

// サンプル用のデータと使用例
const SampleMasterMaintenance: React.FC = () => {
  const systemMasterItems: MasterData[] = [
    { id: 1, name: '' },
    { id: 2, name: '' },
  ];
  
  const customMasterItems: MasterData[] = [
    { id: 1, name: '当初予算' },
    { id: 2, name: '補正予算' },
  ];

  return (
    <MasterMaintenance
      systemMasterItems={systemMasterItems}
      customMasterItems={customMasterItems}
      onOk={() => console.log('OK clicked')}
      onCancel={() => console.log('Cancel clicked')}  
      onDelete={() => console.log('Delete clicked')}
    />
  );
};

export default MasterMaintenance;