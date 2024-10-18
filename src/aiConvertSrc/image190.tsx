import React from 'react';
import styled from 'styled-components';

// 型定義
type AccessLogProps = {
  organizationName: string;
  period: {
    start: string;
    end: string;
  };
  location: string;
  employeeNumber: string;
  name: string;
  processingDivision: string;
  logsPerPage?: number;
};

type AccessLogEntryProps = {
  date: string;
  time: string;
  location: string;
  employeeNumber: string;
  name: string;
  processingDivision: string;
};

// スタイル定義
const Container = styled.div`
  font-family: sans-serif;
  width: 100%;
  overflow-x: auto;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`;

const HeaderItem = styled.div`
  margin-right: 16px;
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

  thead {
    background-color: #f0f0f0;
  }
`;

const Pager = styled.div`
  margin-top: 16px;
  display: flex;
  justify-content: flex-end;
`;

// AccessLogコンポーネント
const AccessLog: React.FC<AccessLogProps> = ({
  organizationName,
  period,
  location,
  employeeNumber,
  name,
  processingDivision,
  logsPerPage = 20,
}) => {
  // ダミーデータ
  const logs: AccessLogEntryProps[] = [
    {
      date: 'H29.09.05',
      time: '11:10:39',
      location: '総務課',
      employeeNumber: '子算・会計担当',
      name: 'さょうせい太郎',
      processingDivision: 'LOGOUT',
    },
    // ...
  ];

  // ページネーション用のstate
  const [currentPage, setCurrentPage] = React.useState(1);

  // 現在のページのログを取得
  const offset = (currentPage - 1) * logsPerPage;
  const currentLogs = logs.slice(offset, offset + logsPerPage);

  return (
    <Container>
      <Header>
        <HeaderItem>アクセス監視照会</HeaderItem>
        <HeaderItem>
          {organizationName} {period.start}〜{period.end}
        </HeaderItem>
      </Header>
      <div>
        <span>所属：{location}</span>
        <span>氏名：{name}</span>
        <span>職員：{employeeNumber}</span>
        <span>処理画面：{processingDivision}</span>
      </div>
      <Table>
        <thead>
          <tr>
            <th>処理日</th>
            <th>年度</th>
            <th>所属</th>
            <th>担当</th>
            <th>職員</th>
            <th>処理画面</th>
            <th>処理</th>
          </tr>
        </thead>
        <tbody>
          {currentLogs.map((log, i) => (
            <tr key={i}>
              <td>{log.date}</td>
              <td>{log.time}</td>
              <td>{log.location}</td>
              <td>{log.employeeNumber}</td>
              <td>{log.name}</td>
              <td>{log.processingDivision}</td>
              <td>{log.processingDivision}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Pager>
        {/* ページ切り替えボタンを実装 */}
      </Pager>
    </Container>
  );
};

export default AccessLog;

// 使用例
const App: React.FC = () => {
  return (
    <AccessLog
      organizationName="予算・会計担当"
      period={{
        start: '平成29年09月05日',
        end: '平成29年09月05日',
      }}
      location="ぎょうせい太郎"
      employeeNumber="999"
      name="予算・会計担当"
      processingDivision="LOGOUT"
    />
  );
};