import React from 'react';
import styled from '@emotion/styled';

type FileItem = {
  id: number;
  fileName: string;
  registrationDate: string;
};

type FileListProps = {
  items: FileItem[];
};

const FileListContainer = styled.div`
  background-color: #f0f0f0;
  padding: 10px;
  border-radius: 4px;
`;

const FileListHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;

const FileListTitle = styled.h2`
  font-size: 18px;
  margin: 0;
`;

const FileListInfo = styled.div`
  font-size: 14px;
`;

const FileListTable = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const FileListTableHeader = styled.th`
  text-align: left;
  padding: 8px;
  border-bottom: 1px solid #ccc;
`;

const FileListTableRow = styled.tr`
  &:nth-of-type(even) {
    background-color: #f9f9f9;
  }
`;

const FileListTableCell = styled.td`
  padding: 8px;
  border-bottom: 1px solid #ccc;
`;

const FileListPagination = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
`;

const FileListPageInfo = styled.div`
  font-size: 14px;
`;

const FileListButton = styled.button`
  padding: 6px 12px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const FileList: React.FC<FileListProps> = ({ items }) => {
  // ファイルリストが空の場合の処理
  if (items.length === 0) {
    return <div>ファイルがありません。</div>;
  }

  return (
    <FileListContainer>
      <FileListHeader>
        <FileListTitle>資産番号 7482300</FileListTitle>
        <FileListInfo>関東行為に伴う書原の丘地区配水管</FileListInfo>
      </FileListHeader>
      <FileListTable>
        <thead>
          <tr>
            <FileListTableHeader>ファイル名</FileListTableHeader>
            <FileListTableHeader>登録日時</FileListTableHeader>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <FileListTableRow key={item.id}>
              <FileListTableCell>{item.fileName}</FileListTableCell>
              <FileListTableCell>{item.registrationDate}</FileListTableCell>
            </FileListTableRow>
          ))}
        </tbody>
      </FileListTable>
      <FileListPagination>
        <FileListPageInfo>5</FileListPageInfo>
        <div>
          <FileListButton>登録</FileListButton>
          <FileListButton>クリア</FileListButton>
        </div>
      </FileListPagination>
    </FileListContainer>
  );
};

// サンプルデータを用いた使用例
const SampleFileList: React.FC = () => {
  const sampleData: FileItem[] = [
    {
      id: 1,
      fileName: '雪原の丘配水管整備概要.txt',
      registrationDate: '2017/11/27 11:07',
    },
    {
      id: 2,
      fileName: '雪原の丘配水管整備工事地域.pdf',
      registrationDate: '2017/11/27 11:07',
    },
    {
      id: 3,
      fileName: '雪原の丘配水管整備工事地域地図.PNG',
      registrationDate: '2017/11/27 11:07',
    },
    {
      id: 4,
      fileName: '雪原の丘配水管第一区工期大日程.xlsx',
      registrationDate: '2017/11/27 11:08',
    },
  ];

  return <FileList items={sampleData} />;
};

export default SampleFileList;