import React from 'react';
import styled from '@emotion/styled';

// 指定金融機関グループマスタの型定義
type DesignatedFinancialInstitutionGroup = {
  groupCode: string;
  groupName: string;
};

// 指定金融機関グループマスタのプロパティの型定義
type DesignatedFinancialInstitutionGroupMasterProps = {
  groups: DesignatedFinancialInstitutionGroup[];
  onSelectGroup: (groupCode: string) => void;
};

// 指定金融機関グループマスタコンポーネント
const DesignatedFinancialInstitutionGroupMaster: React.FC<DesignatedFinancialInstitutionGroupMasterProps> = ({
  groups,
  onSelectGroup,
}) => {
  return (
    <Container>
      <Title>指定金融機関グループマスタ</Title>
      <Description>
        指定金融機関の口座を複数管理したい場合、設定するマスタです。
        <br />
        指定金融機関グループを作成し、グループに紐付ける予算所属を設定します。
        <br />
        設定されていない所属は下の一覧から確認することができます。
        <br />
        所属が変更となった年度は、必ず確認を行ってください。
      </Description>
      <Table>
        <thead>
          <tr>
            <TableHeader>所属コード</TableHeader>
            <TableHeader>名称</TableHeader>
          </tr>
        </thead>
        <tbody>
          {groups.map((group) => (
            <TableRow key={group.groupCode} onClick={() => onSelectGroup(group.groupCode)}>
              <TableCell>{group.groupCode}</TableCell>
              <TableCell>{group.groupName}</TableCell>
            </TableRow>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

// 指定金融機関マスタの型定義
type DesignatedFinancialInstitution = {
  code: string;
  name: string;
};

// 指定金融機関マスタのプロパティの型定義
type DesignatedFinancialInstitutionMasterProps = {
  institutions: DesignatedFinancialInstitution[];
  onRegisterCode: (code: string) => void;
};

// 指定金融機関マスタコンポーネント 
const DesignatedFinancialInstitutionMaster: React.FC<DesignatedFinancialInstitutionMasterProps> = ({
  institutions,
  onRegisterCode,
}) => {
  const [code, setCode] = React.useState('');

  // 所属コードを登録する処理
  const handleRegisterCode = () => {
    if (code) {
      onRegisterCode(code);
      setCode('');
    }
  };

  return (
    <Container>
      <Title>指定金融機関マスタ</Title>
      <Table>
        <thead>
          <TableRow>
            <TableHeader>所属コード</TableHeader>
            <TableHeader>名称</TableHeader>
          </TableRow>
        </thead>
        <tbody>
          {institutions.map((institution) => (
            <TableRow key={institution.code}>
              <TableCell>{institution.code}</TableCell>
              <TableCell>{institution.name}</TableCell>
            </TableRow>
          ))}
        </tbody>
      </Table>
      <InputContainer>
        <Input
          type="text"
          placeholder="所属コード"
          value={code}
          onChange={(e) => setCode(e.target.value)}
        />
        <Button onClick={handleRegisterCode}>行確定</Button>
      </InputContainer>
    </Container>
  );
};

// サンプルデータ
const sampleGroups: DesignatedFinancialInstitutionGroup[] = [
  { groupCode: '0000005', groupName: '水道部総務課' },
  { groupCode: '0000006', groupName: '水道用センター' },
  { groupCode: '0000007', groupName: '経営企画課' },
  { groupCode: '00000008', groupName: 'テスト' },
  { groupCode: '99999999', groupName: '総務課' },
];

const sampleInstitutions: DesignatedFinancialInstitution[] = [
  { code: '0000001', name: '総務課' },
  { code: '0000002', name: '営業課' },
];

// サンプルコンポーネント
const App: React.FC = () => {
  const handleSelectGroup = (groupCode: string) => {
    console.log(`Selected group: ${groupCode}`);
  };

  const handleRegisterCode = (code: string) => {
    console.log(`Registered code: ${code}`);
  };

  return (
    <div>
      <DesignatedFinancialInstitutionGroupMaster
        groups={sampleGroups}
        onSelectGroup={handleSelectGroup}
      />
      <DesignatedFinancialInstitutionMaster
        institutions={sampleInstitutions}
        onRegisterCode={handleRegisterCode}
      />
    </div>
  );
};

// スタイリング
const Container = styled.div`
  padding: 20px;
`;

const Title = styled.h2`
  font-size: 18px;
  margin-bottom: 10px;
`;

const Description = styled.p`
  margin-bottom: 20px;
  line-height: 1.5;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;
`;

const TableHeader = styled.th`
  background-color: #f2f2f2;
  padding: 10px;
  text-align: left;
`;

const TableRow = styled.tr`
  cursor: pointer;
  &:hover {
    background-color: #f2f2f2;
  }
`;

const TableCell = styled.td`
  padding: 10px;
`;

const InputContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
`;

const Input = styled.input`
  padding: 5px;
  margin-right: 10px;
`;

const Button = styled.button`
  padding: 5px 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

export default App;