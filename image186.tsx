import React from 'react';
import styled from '@emotion/styled';

interface LoginMonitorProps {
  loginRecords?: LoginRecord[];
  onDelete?: () => void;
  onClose?: () => void;
}

interface LoginRecord {
  id: number;
  datetime: string;
  ipAddress: string;
  location: string;
}

const LoginMonitor: React.FC<LoginMonitorProps> = ({ loginRecords = [], onDelete, onClose }) => {
  return (
    <Container>
      <Header>
        <Title>ログインモニター</Title>
        <CloseButton onClick={onClose}>閉じる</CloseButton>
      </Header>
      <Table>
        <thead>
          <tr>
            <Th>所属</Th>
            <Th>担当</Th>
            <Th>所属·担当·職員コード順</Th>
            <Th>ログイン日時</Th>
          </tr>
        </thead>
        <tbody>
          {loginRecords.map((record) => (
            <tr key={record.id}>
              <Td>FP539</Td>
              <Td>年度</Td>
              <Td>{record.location}</Td>
              <Td>{formatDatetime(record.datetime)}</Td>
            </tr>
          ))}
        </tbody>
      </Table>
      {loginRecords.length === 0 && <Empty>ログインモニターで管理されている、現在システムにログインしている職員はいません。</Empty>}
      <DeleteButton onClick={onDelete}>削除</DeleteButton>
    </Container>
  );
};

// Format datetime string to desired format
const formatDatetime = (datetime: string) => {
  const d = new Date(datetime);
  const year = d.getFullYear();
  const month = String(d.getMonth() + 1).padStart(2, '0');
  const date = String(d.getDate()).padStart(2, '0');
  const hours = String(d.getHours()).padStart(2, '0');
  const mins = String(d.getMinutes()).padStart(2, '0');
  const secs = String(d.getSeconds()).padStart(2, '0');
  return `${year}/${month}/${date} ${hours}:${mins}:${secs}`;
};

const Container = styled.div`
  background-color: #f0f0f0;
  padding: 16px;
  min-width: 500px;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`;

const Title = styled.div`
  font-size: 18px;
  font-weight: bold;
`;

const CloseButton = styled.button`
  padding: 4px 8px;
  font-size: 14px;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 16px;
`;

const Th = styled.th`
  background-color: #d0d0d0;
  border: 1px solid #ccc;
  padding: 8px;
  text-align: center;
  font-size: 14px;
`;

const Td = styled.td`
  border: 1px solid #ccc;
  padding: 8px;
  text-align: center;
  font-size: 14px;
`;

const Empty = styled.div`
  text-align: center;
  color: #666;
  padding: 32px 0;
`;

const DeleteButton = styled.button`
  padding: 4px 8px;
  float: right;
`;

// Sample usage
const sampleData: LoginRecord[] = [
  {
    id: 1,
    datetime: '2017/09/05 11:30:26',
    ipAddress: '',
    location: 'ぎょうせい大郎',
  },
];

const App: React.FC = () => {
  return (
    <div>
      <h1>Login Monitor Sample</h1>
      <LoginMonitor
        loginRecords={sampleData}
        onDelete={() => console.log('Delete clicked')}
        onClose={() => console.log('Close clicked')}
      />
    </div>
  );
};

export default App;