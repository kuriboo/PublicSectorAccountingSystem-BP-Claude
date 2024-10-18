import React from 'react';
import styled from '@emotion/styled';

// 型定義
type GroupMasterProps = {
  groupCodes: string[];
  groupNames: string[];
  onSubmit: (groupCode: string) => void;
};

// スタイル定義
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px;
  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const GroupList = styled.div`
  width: 100%;
  margin-bottom: 16px;
  @media (min-width: 768px) {
    width: 60%;
    margin-bottom: 0;
    margin-right: 16px;
  }
`;

const GroupItem = styled.div`
  padding: 8px;
  border-bottom: 1px solid #ccc;
`;

const GroupCode = styled.span`
  margin-right: 8px;
`;

const GroupName = styled.span`
  font-weight: bold;
`;

const FormContainer = styled.div`
  width: 100%;
  @media (min-width: 768px) {
    width: 35%;
  }
`;

const Input = styled.input`
  width: 100%;
  padding: 8px;
  margin-bottom: 8px;
`;

const Button = styled.button`
  padding: 8px 16px;
  background-color: #007bff;
  color: #fff;
  border: none;
  cursor: pointer;
`;

// コンポーネント定義
const GroupMaster: React.FC<GroupMasterProps> = ({ groupCodes, groupNames, onSubmit }) => {
  const [groupCode, setGroupCode] = React.useState('');

  // 送信処理
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(groupCode);
    setGroupCode('');
  };

  return (
    <Container>
      <GroupList>
        {groupCodes.map((code, index) => (
          <GroupItem key={code}>
            <GroupCode>{code}</GroupCode>
            <GroupName>{groupNames[index]}</GroupName>
          </GroupItem>
        ))}
      </GroupList>
      <FormContainer>
        <form onSubmit={handleSubmit}>
          <Input
            type="text"
            value={groupCode}
            onChange={(e) => setGroupCode(e.target.value)}
            placeholder="所属コード"
          />
          <Button type="submit">所属コード</Button>
        </form>
      </FormContainer>
    </Container>
  );
};

// 使用例
const App: React.FC = () => {
  const groupCodes = ['0000001', '0000002', '0000007', '0000009', '9999999'];
  const groupNames = ['総務課', '水道用センター', '経営企画課', 'テスト', '総務課'];

  const handleSubmit = (groupCode: string) => {
    console.log(`Submitted group code: ${groupCode}`);
    // 送信処理を実装
  };

  return (
    <div>
      <h1>指定金融機関グループマスタ</h1>
      <GroupMaster
        groupCodes={groupCodes}
        groupNames={groupNames}
        onSubmit={handleSubmit}
      />
    </div>
  );
};

export default App;