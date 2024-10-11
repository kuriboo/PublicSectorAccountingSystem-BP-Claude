import React from 'react';
import styled from 'styled-components';

// 型定義
type WaterCodeMasterProps = {
  codes: {
    code: string;
    name: string;
    displayName: string;
  }[];
  onCodeChange: (code: string) => void;
};

// スタイル定義
const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;

const Title = styled.h2`
  font-size: 24px;
  margin: 0;
`;

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Select = styled.select`
  padding: 5px;
  font-size: 16px;
`;

const Input = styled.input`
  padding: 5px;
  font-size: 16px;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const TableHeader = styled.th`
  padding: 10px;
  text-align: left;
  border-bottom: 1px solid #ccc;
`;

const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f2f2f2;
  }
`;

const TableCell = styled.td`
  padding: 10px;
`;

// コンポーネント定義
const WaterCodeMaster: React.FC<WaterCodeMasterProps> = ({ codes, onCodeChange }) => {
  // 検索タイプと検索ワードの状態管理
  const [searchType, setSearchType] = React.useState('名称');
  const [searchWord, setSearchWord] = React.useState('');

  // 検索タイプ変更ハンドラ
  const handleSearchTypeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSearchType(event.target.value);
  };

  // 検索ワード変更ハンドラ
  const handleSearchWordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchWord(event.target.value);
  };

  // 検索条件に合致するコードをフィルタリング
  const filteredCodes = codes.filter((code) => {
    if (searchType === '名称') {
      return code.name.includes(searchWord);
    } else {
      return code.code.includes(searchWord);
    }
  });

  return (
    <Container>
      <Header>
        <Title>貯蔵品単価名称マスタ</Title>
        <SearchContainer>
          <Select value={searchType} onChange={handleSearchTypeChange}>
            <option value="名称">名称</option>
            <option value="コード">コード</option>
          </Select>
          <Input type="text" value={searchWord} onChange={handleSearchWordChange} />
        </SearchContainer>
      </Header>
      <Table>
        <thead>
          <TableRow>
            <TableHeader>単価名称コード</TableHeader>
            <TableHeader>名称</TableHeader>
            <TableHeader>略名</TableHeader>
          </TableRow>
        </thead>
        <tbody>
          {filteredCodes.map((code) => (
            <TableRow key={code.code} onClick={() => onCodeChange(code.code)}>
              <TableCell>{code.code}</TableCell>
              <TableCell>{code.name}</TableCell>
              <TableCell>{code.displayName}</TableCell>
            </TableRow>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default WaterCodeMaster;

// 使用例
const sampleCodes = [
  { code: '000100', name: '東水器 新品', displayName: '東水器 新品' },  
  { code: '000200', name: '東水器 中古', displayName: '東水器 中古' },
  { code: '000400', name: '東水器 電磁式', displayName: '東水器 電磁式' },
  { code: '000600', name: '東水器 適用品', displayName: '東水器 適用品' },
  { code: '001000', name: '東水器 遠隔式', displayName: '東水器 遠隔式' },
];

const App: React.FC = () => {
  const handleCodeChange = (code: string) => {
    console.log(`Selected code: ${code}`);
  };

  return <WaterCodeMaster codes={sampleCodes} onCodeChange={handleCodeChange} />;  
};