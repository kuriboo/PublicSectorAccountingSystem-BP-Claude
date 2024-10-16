// LogViewerコンポーネント
import React from 'react';
import styled from 'styled-components';

// ログデータの型定義
type Log = {
  timestamp: string;
  level: string;
  message: string;
};

// コンポーネントのプロパティ型定義
type LogViewerProps = {
  logs: Log[];
};

// スタイル定義
const LogViewerWrapper = styled.div`
  font-family: monospace;
  white-space: pre-wrap;
  background-color: #f5f5f5;
  padding: 10px;
  height: 300px;
  overflow-y: scroll;

  @media (max-width: 600px) {
    height: 200px;
  }
`;

const LogLine = styled.div<{ level: string }>`
  color: ${props => 
    props.level === 'ERROR' ? 'red' :
    props.level === 'WARN' ? 'orange' : 
    'inherit'
  };
`;

// LogViewerコンポーネント
const LogViewer: React.FC<LogViewerProps> = ({ logs }) => {
  return (
    <LogViewerWrapper>
      {logs.map((log, index) => (
        <LogLine key={index} level={log.level}>
          {log.timestamp} | {log.level}: {log.message}  
        </LogLine>
      ))}
    </LogViewerWrapper>
  );
};

// サンプルデータ
const sampleLogs: Log[] = [
  {
    timestamp: '2017/08/21 14:07:06',
    level: 'ACCESS',
    message: '通信内容のログファイル',
  },
  {
    timestamp: '2017/08/21 13:59:47',
    level: 'ERROR',
    message: 'ERROR_IMG_156847',
  },
];

// 使用例
const LogViewerExample: React.FC = () => {
  return (
    <div>
      <h3>ログビューア</h3>
      <LogViewer logs={sampleLogs} />
    </div>
  );
};

export default LogViewerExample;