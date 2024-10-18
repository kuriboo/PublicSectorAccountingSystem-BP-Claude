import React from 'react';
import styled from 'styled-components';

// ログインモーターコンポーネントのプロパティ型定義
type LoginMonitorProps = {
  heading?: string;
  data?: Array<{
    date: string;
    loginId: string;
    previousDate: string;
  }>;
  note?: string;
};

// データ項目の型定義
type LoginData = {
  date: string;
  loginId: string;
  previousDate: string;
};

// 日付のバリデーション関数
const isValidDate = (dateString: string): boolean => {
  const regex = /^\d{4}\/\d{2}\/\d{2}$/;
  if (!regex.test(dateString)) return false;
  const parts = dateString.split('/');
  const date = new Date(parseInt(parts[0]), parseInt(parts[1]) - 1, parseInt(parts[2]));
  return date.getFullYear() === parseInt(parts[0]) &&
         date.getMonth() === parseInt(parts[1]) - 1 &&
         date.getDate() === parseInt(parts[2]);
};

// データのバリデーション関数
const validateLoginData = (data: LoginData): boolean => {
  return isValidDate(data.date) &&
         typeof data.loginId === 'string' && data.loginId.length > 0 &&
         (data.previousDate === '' || /^\d{4}\/\d{2}\/\d{2} \d{2}:\d{2}:\d{2}$/.test(data.previousDate));
};

// ログインモーターコンポーネント
const LoginMonitor: React.FC<LoginMonitorProps> = ({ heading = 'ログインモーター', data = [], note = '' }) => {
  const validData = data.filter(validateLoginData);

  if (validData.length === 0) {
    return <ErrorMessage>有効なデータがありません。</ErrorMessage>;
  }

  return (
    <Container>
      <Heading>{heading}</Heading>
      <Table>
        <thead>
          <tr>
            <TableHeader>所属</TableHeader>
            <TableHeader>担当</TableHeader>
            <TableHeader>所属・会計担当</TableHeader>
            <TableHeader>ぎょうせい太郎</TableHeader>
          </tr>
        </thead>
        <tbody>
          {validData.map((item : LoginData, index) => (
            <TableRow key={index}>
              <TableCell>{item.date}</TableCell>
              <TableCell>{item.loginId}</TableCell>
              <TableCell></TableCell>
              <TableCell>{item.previousDate || '-'}</TableCell>
            </TableRow>
          ))}
        </tbody>
      </Table>
      {note && <Note>{note}</Note>}
    </Container>
  );
};

// スタイリング
const Container = styled.div`
  background-color: #f0f0f0;
  padding: 16px;
  border-radius: 4px;
  font-family: Arial, sans-serif;
`;

const Heading = styled.h2`
  font-size: 18px;
  margin-bottom: 16px;
  color: #333;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  background-color: #fff;
`;

const TableHeader = styled.th`
  padding: 12px 8px;
  border: 1px solid #ccc;
  background-color: #f9f9f9;
  text-align: left;
  font-weight: bold;
  color: #333;
`;

const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f7f7f7;
  }
`;

const TableCell = styled.td`
  padding: 12px 8px;
  border: 1px solid #ccc;
  color: #666;
`;

const Note = styled.p`
  margin-top: 16px;
  font-size: 14px;
  color: #666;
  line-height: 1.5;
`;

const ErrorMessage = styled.div`
  color: #d32f2f;
  font-size: 16px;
  padding: 16px;
  background-color: #ffebee;
  border-radius: 4px;
  margin-bottom: 16px;
`;

// サンプルデータを使用したコンポーネントの表示例
const SampleUsage: React.FC = () => {
  const sampleData = [
    {
      date: '2017/09/05',
      loginId: '予算・会計担当',
      previousDate: '2017/09/05 11:30:26',
    },
    // 無効なデータを追加してテスト
    {
      date: 'invalid date',
      loginId: '',
      previousDate: 'invalid time',
    },
  ];

  return (
    <div>
      <h1>ログインモーターサンプル</h1>
      <LoginMonitor
        heading="行政市水道事業会計"
        data={sampleData}
        note="ログインモーターで管理されている、現在システムにログインしている職員とそのログイン時間を会計年度別に一覧表示します。"
      />
    </div>
  );
};

export default SampleUsage;