import React from 'react';
import styled from '@emotion/styled';

// 検索文字列の型定義
type SearchString = string;

// コード名称テーブルの型定義
type CodeNameTable = {
  code: string;
  name: string;
}[];

// コンポーネントのプロパティの型定義
type CodeNameSearchProps = {
  searchString: SearchString;
  codeNameTable: CodeNameTable;
};

// スタイル定義
const Container = styled.div`
  font-family: sans-serif;
`;

const Title = styled.div`
  font-weight: bold;
  margin-bottom: 10px;
`;

const SearchBox = styled.div`
  margin-bottom: 10px;
`;

const SearchInput = styled.input`
  padding: 5px;
  width: 200px;
`;

const TableContainer = styled.div`
  height: 200px;
  overflow-y: scroll;
  border: 1px solid #ccc;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const TableHeader = styled.th`
  padding: 5px;
  border: 1px solid #ccc;
  background-color: #f0f0f0;
`;

const TableCell = styled.td`
  padding: 5px;
  border: 1px solid #ccc;
`;

// メインコンポーネント
const CodeNameSearch: React.FC<CodeNameSearchProps> = ({ 
  searchString,
  codeNameTable
}) => {
  // 検索文字列で絞り込んだテーブルデータ
  const filteredTable = codeNameTable.filter(row =>
    row.name.includes(searchString)  
  );

  return (
    <Container>
      <Title>部門検索</Title>
      <SearchBox>
        <SearchInput type="text" value={searchString} placeholder="検索文字列" />
      </SearchBox>
      <TableContainer>
        <Table>
          <thead>
            <tr>
              <TableHeader>コード</TableHeader>
              <TableHeader>名称</TableHeader>
            </tr>
          </thead>
          <tbody>
            {filteredTable.map(row => (
              <tr key={row.code}>
                <TableCell>{row.code}</TableCell>
                <TableCell>{row.name}</TableCell>
              </tr>
            ))}
          </tbody>
        </Table>
      </TableContainer>
    </Container>
  );
};

// サンプルデータと使用例
const sampleData: CodeNameTable = [
  { code: '001', name: 'サンプル部門1' },
  { code: '002', name: '部門サンプル2' },
  // ...
];

const UsageExample: React.FC = () => {
  const [searchString, setSearchString] = React.useState('');

  return (
    <CodeNameSearch 
      searchString={searchString}
      codeNameTable={sampleData}
    />
  );  
};

export default UsageExample;