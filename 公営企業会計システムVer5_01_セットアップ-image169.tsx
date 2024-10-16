import React from 'react';
import styled from '@emotion/styled';

type GroupCodeMaster = {
  apGroupCode: string;
  individualDefinitionFlag: boolean;
  groupName: string;
};

type Props = {
  groupCodeMasterList: GroupCodeMaster[];
};

const Container = styled.div`
  padding: 16px;
`;

const Title = styled.div`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 8px;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;

  th,
  td {
    border: 1px solid #ccc;
    padding: 8px;
    text-align: center;
  }

  th {
    background-color: #f0f0f0;
  }
`;

const GroupCodeMasterTable: React.FC<Props> = ({ groupCodeMasterList }) => {
  return (
    <Container>
      <Title>アプリケーショングループマスタ</Title>
      <Table>
        <thead>
          <tr>
            <th>APグループコード</th>
            <th>個別設定</th>
            <th>グループ名称</th>
          </tr>
        </thead>
        <tbody>
          {groupCodeMasterList.map((groupCode, index) => (
            <tr key={index}>
              <td>{groupCode.apGroupCode}</td>
              <td>{groupCode.individualDefinitionFlag ? '可' : '不可'}</td>
              <td>{groupCode.groupName}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

// Usage example
const App: React.FC = () => {
  const sampleData: GroupCodeMaster[] = [
    {
      apGroupCode: '00000101',
      individualDefinitionFlag: true,
      groupName: '資金前渡振替一覧用',
    },
    {
      apGroupCode: '00000065',
      individualDefinitionFlag: true,
      groupName: '天払',
    },
    {
      apGroupCode: '00000102',
      individualDefinitionFlag: true,
      groupName: '',
    },
  ];

  return <GroupCodeMasterTable groupCodeMasterList={sampleData} />;
};

export default App;