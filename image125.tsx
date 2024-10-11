import React from 'react';
import styled from '@emotion/styled';

// 固定資産コンバート取消のデータ型定義
type ConvertCancelData = {
  no: number;
  companyCode: string;
  convertDate: string;
  fileName: string;
  filePath: string;
}

// 固定資産コンバート取消コンポーネントのプロパティ型定義
type ConvertCancelProps = {
  data: ConvertCancelData[];
}

// 固定資産コンバート取消コンポーネント
const ConvertCancel: React.FC<ConvertCancelProps> = ({ data }) => {
  return (
    <Container>
      <Title>固定資産コンバート取消</Title>
      <TransferDate>取消日 平成30年06月26日</TransferDate>

      <TableContainer>
        <TableHeader>
          <HeaderCell>No.</HeaderCell>
          <HeaderCell>コンバート回時</HeaderCell>
          <HeaderCell>異動区分</HeaderCell>
          <HeaderCell>取込ファイル名</HeaderCell>
        </TableHeader>
        <TableBody>
          {data.map((item, index) => (
            <TableRow key={index}>
              <Cell>{item.no}</Cell>
              <Cell>{item.convertDate}</Cell>
              <Cell>{item.companyCode}</Cell>
              <Cell>{item.fileName}</Cell>
            </TableRow>
          ))}
        </TableBody>
      </TableContainer>

      <Notes>
        ・固定資産コンバート最新で登録した固定資産情報を削除します。<br />
        ・コンバートを行った日時を指定して取消を行います。指定した日時にコンバートしたすべての固定資産情報が削除されます。<br />
        ただし、コンバート後、異動が発生した固定資産がある場合は、コンバート取消を行うことはできません。<br />
        コンバート後の異動をすべて削除してから、コンバート取消を行ってください。<br /> 
        ・当年度に行ったコンバートのみ取り消すことができます。<br />
        ・コンバート取消を行った場合、データを元に戻すことはできません。
      </Notes>
    </Container>
  );
};

// スタイリング
const Container = styled.div`
  font-family: "MS Gothic", monospace;
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
`;

const Title = styled.h2`
  font-size: 18px;
  margin-bottom: 10px;
`;

const TransferDate = styled.p`
  font-size: 14px;
  margin-bottom: 20px;
`;

const TableContainer = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;
`;

const TableHeader = styled.thead`
  background-color: #f0f0f0;
`;

const HeaderCell = styled.th`
  padding: 8px;
  text-align: left;
  border: 1px solid #ccc;
  white-space: nowrap;
`;

const TableBody = styled.tbody``;

const TableRow = styled.tr``;

const Cell = styled.td`
  padding: 8px;
  border: 1px solid #ccc;
`;

const Notes = styled.div`
  font-size: 12px;
  white-space: pre-line;
`;

// サンプルデータ
const sampleData: ConvertCancelData[] = [
  {
    no: 1,
    companyCode: '電算移行',
    convertDate: '平成30年06月25日 10:54:55',
    fileName: '固定資産情報_20180625145431.zip',
    filePath: '固定資産情報_20180625145431.zip',
  },
  {
    no: 2,
    companyCode: '電算移行',
    convertDate: '平成30年06月19日 15:57:28',
    fileName: '固定資産情報_20180619142707.zip',
    filePath: '固定資産情報_20180619142707.zip',
  },
];

// 使用例
const App: React.FC = () => {
  return (
    <div>
      <ConvertCancel data={sampleData} />
    </div>
  );
};

export default App;