import React from 'react';
import styled from '@emotion/styled';

// ドキュメントリストのプロパティ型定義
type DocumentListProps = {
  documents: {
    name: string;
    updatedAt: string;
    fileType: string;
  }[];
};

// ドキュメントリストコンポーネント
const DocumentList: React.FC<DocumentListProps> = ({ documents }) => {
  return (
    <List>
      {documents.map((doc, index) => (
        <ListItem key={index}>
          <DocumentIcon>{doc.fileType}</DocumentIcon>
          <DocumentName>{doc.name}</DocumentName>
          <DocumentDate>{doc.updatedAt}</DocumentDate>
        </ListItem>
      ))}
    </List>
  );
};

// スタイリング
const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const ListItem = styled.li`
  display: flex;
  align-items: center;
  padding: 8px;
  border-bottom: 1px solid #eee;

  &:last-child {
    border-bottom: none;
  }
`;

const DocumentIcon = styled.div`
  background-color: #f0f0f0;
  color: #888;
  width: 40px;
  height: 40px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 12px;
  font-size: 12px;
`;

const DocumentName = styled.div`
  flex: 1;
`;

const DocumentDate = styled.div`
  color: #888;
  font-size: 12px;
`;

// サンプルデータ
const sampleData = [
  {
    name: 'Book2222.csv',
    updatedAt: '2017/02/08 14:09',
    fileType: 'csv',
  },
  {
    name: '11_予算仕訳相互コード一覧11742309result.csv',
    updatedAt: '2017/08/28 17:42',
    fileType: 'csv',
  },
  {
    name: 'Office のカスタム テンプレート',
    updatedAt: '2016/05/11 13:14',
    fileType: 'フォルダー',
  },
  {
    name: 'My Data Sources',
    updatedAt: '2014/09/30 11:50',
    fileType: 'フォルダー',
  },
  {
    name: 'ipmsg_img',
    updatedAt: '2016/11/30 16:01',
    fileType: 'フォルダー',
  },
];

// 使用例
const App: React.FC = () => {
  return (
    <div>
      <h2>ドキュメント一覧</h2>
      <DocumentList documents={sampleData} />
    </div>
  );
};

export default App;