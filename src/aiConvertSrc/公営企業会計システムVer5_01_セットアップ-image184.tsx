以下は、指定された要件に基づいて作成したNext.js + TypeScriptのコンポーネントコードです。

import React from 'react';
import styled from 'styled-components';

// ログインモーターコンポーネントのプロパティ型定義
type LoginMonitorProps = {
  heading?: string;
  data?: {
    date: string;
    loginId: string;
    previousDate: string;
  }[];
  note?: string;
};

// ログインモーターコンポーネント
const LoginMonitor: React.FC<LoginMonitorProps> = ({ heading = 'ログインモーター', data = [], note = '' }) => {
  return (
    <Container>
      <Heading>{heading}</Heading>
      <Table>
        <thead>
          <tr>
            <th>所属</th>
            <th>担当</th>
            <th>所属・会計担当</th>
            <th>ぎょうせい太郎</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.date}</td>
              <td>{item.loginId}</td>
              <td></td>
              <td>{item.previousDate}</td>
            </tr>
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
`;

const Heading = styled.h2`
  font-size: 18px;
  margin-bottom: 8px;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  
  th, td {
    padding: 8px;
    border: 1px solid #ccc;
  }

  th {
    background-color: #f9f9f9;
    text-align: left;
  }
`;

const Note = styled.p`
  margin-top: 8px;
  font-size: 14px;
`;

// サンプルデータを使用したコンポーネントの表示例
const SampleUsage: React.FC = () => {
  const sampleData = [
    {
      date: '2017/09/05',
      loginId: '予算・会計担当',
      previousDate: '2017/09/05 11:30:26',
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

このコードでは、指定された要件に従って、ログインモーターコンポーネントを作成しています。コンポーネントはプロパティを通じてカスタマイズ可能で、スタイリングにはCSS-in-JS形式のstyled-componentsを使用しています。また、サンプルデータを使用してコンポーネントの使用例を示しています。