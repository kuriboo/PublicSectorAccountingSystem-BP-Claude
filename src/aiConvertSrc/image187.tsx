import React from 'react';
import styled from '@emotion/styled';

// 団体マスタの型定義
type OrganizationMaster = {
  code: string;
  name: string;
};

// コンポーネントのProps型定義
type OrganizationMasterSystemProps = {
  organizations: OrganizationMaster[];
};

// スタイル定義
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  font-family: sans-serif;
`;

const Form = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
`;

const Input = styled.input`
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 3px;
`;

const Select = styled.select`
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 3px;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;

  th, td {
    border: 1px solid #ccc;
    padding: 8px;
    text-align: left;
  }

  th {
    background-color: #f0f0f0;
  }
`;

const OrganizationMasterSystem: React.FC<OrganizationMasterSystemProps> = ({ organizations }) => {
  return (
    <Container>
      <h2>団体マスタ</h2>
      <Form>
        <label>
          団体コード
          <Input type="text" />
        </label>
        <label>
          名称
          <Input type="text" />
        </label>
        <Select>
          <option value="登録">登録</option>
          <option value="行削除">行削除</option>
        </Select>
      </Form>
      <Table>
        <thead>
          <tr>
            <th>コード</th>
            <th>名称</th>
          </tr>
        </thead>
        <tbody>
          {organizations.map((org) => (
            <tr key={org.code}>
              <td>{org.code}</td>
              <td>{org.name}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

// サンプルデータ
const sampleOrganizations: OrganizationMaster[] = [
  { code: '000001', name: '水道局' },
  { code: '000002', name: '指定金融機関' },
];

// 使用例
const App: React.FC = () => {
  return (
    <div>
      <h1>公営企業会計システム</h1>
      <OrganizationMasterSystem organizations={sampleOrganizations} />
    </div>
  );
};

export default App;