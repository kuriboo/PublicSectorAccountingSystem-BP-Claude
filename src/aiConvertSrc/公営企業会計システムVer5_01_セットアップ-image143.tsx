import React from 'react';
import styled from '@emotion/styled';

type MemberInfo = {
  id: string;
  name: string;
  department: string;
}

type MemberTableProps = {
  memberList: MemberInfo[];
  onSubmit: (selectedMembers: string[]) => void;
}

const MemberTable: React.FC<MemberTableProps> = ({ memberList, onSubmit }) => {
  const [selectedMembers, setSelectedMembers] = React.useState<string[]>([]);

  const handleToggleMember = (memberId: string) => {
    const index = selectedMembers.indexOf(memberId);
    if (index > -1) {
      setSelectedMembers(selectedMembers.filter(id => id !== memberId));
    } else {
      setSelectedMembers([...selectedMembers, memberId]);
    }
  }

  const handleSubmit = () => {
    onSubmit(selectedMembers);
  }

  return (
    <Container>
      <Title>行政市水道事業会計</Title>
      <TableContainer>
        <StyledTable>
          <thead>
            <tr>
              <th>選択</th>
              <th>名称1</th>
              <th>名称2</th>
              <th>管理者</th>
            </tr>
          </thead>
          <tbody>
            {memberList.map(member => (
              <tr key={member.id}>
                <td>
                  <input
                    type="checkbox"
                    checked={selectedMembers.includes(member.id)}
                    onChange={() => handleToggleMember(member.id)}
                  />
                </td>
                <td>{member.id}</td>
                <td>{member.name}</td>
                <td>{member.department}</td>
              </tr>
            ))}
          </tbody>
        </StyledTable>
      </TableContainer>
      <SubmitButton onClick={handleSubmit}>OK</SubmitButton>
    </Container>
  );
}

// サンプルデータ
const sampleData: MemberInfo[] = [
  { id: '01', name: '管理者', department: '予物' },
  { id: '02', name: '上水', department: '部長' },
  { id: '03', name: '上水', department: '課長' },
  { id: '04', name: '上水', department: '所管課長' },
  { id: '05', name: '上水', department: '課長補佐' },
  { id: '06', name: '上水', department: '係長' },
  { id: '07', name: '上水', department: '主査' },
  { id: '08', name: '上水', department: '主事' },
  { id: '09', name: '上水', department: '職員担当' },
  { id: '10', name: '上水', department: '(予備)' },
];

// 使用例
const App: React.FC = () => {
  const handleSubmit = (selectedMembers: string[]) => {
    console.log('選択されたメンバー:', selectedMembers);
  }

  return (
    <MemberTable memberList={sampleData} onSubmit={handleSubmit} />
  );
}

// スタイリング
const Container = styled.div`
  font-family: sans-serif;
`;

const Title = styled.h2`
  text-align: center;
  font-size: 18px;
  margin-bottom: 16px;
`;

const TableContainer = styled.div`
  max-height: 300px;
  overflow-y: auto;
`;

const StyledTable = styled.table`
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

const SubmitButton = styled.button`
  display: block;
  width: 100px;
  margin: 16px auto;
  padding: 8px;
  border: none;
  border-radius: 4px;
  background-color: #007bff;
  color: #fff;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

export default App;