import React from 'react';
import styled from 'styled-components';

// 仕訳検索の入力プロパティの型定義
type SearchProps = {
  year: number;
  month: number;
  dept: string;
}

// 仕訳検索のコンポーネント
const SearchComponent: React.FC<SearchProps> = ({ year, month, dept }) => {
  return (
    <SearchContainer>
      <TitleContainer>
        <Title>仕訳検索</Title>
        <Radio>
          <input type="radio" name="search" value="予算" />予算
          <input type="radio" name="search" value="仕訳" defaultChecked />仕訳
        </Radio>
      </TitleContainer>
      <InputContainer>
        <Label>年度</Label>
        <Input type="number" value={year} />
        <Label>月</Label>
        <Input type="number" value={month} />
        <Label>部門</Label>
        <Input type="text" value={dept} />
      </InputContainer>
      <Button>表示</Button>
    </SearchContainer>
  );
};

// 仕訳検索結果の型定義
type SearchResultProps = {
  results: {
    code: string;
    summary1: string;
    summary2: string;
    dept1: string;
    dept2: string;  
  }[];
}

// 仕訳検索結果のコンポーネント
const SearchResult: React.FC<SearchResultProps> = ({ results }) => {
  return (
    <ResultContainer>
      <TableHeader>
        <HeaderCell>仕訳コード</HeaderCell>
        <HeaderCell>摘要1</HeaderCell>
        <HeaderCell>摘要2</HeaderCell>
        <HeaderCell>部署1</HeaderCell>
        <HeaderCell>部署2</HeaderCell>
      </TableHeader>
      <TableBody>
        {results.map((result, index) => (
          <TableRow key={index}>
            <BodyCell>{result.code}</BodyCell>
            <BodyCell>{result.summary1}</BodyCell>
            <BodyCell>{result.summary2}</BodyCell>
            <BodyCell>{result.dept1}</BodyCell>
            <BodyCell>{result.dept2}</BodyCell>
          </TableRow>
        ))}
      </TableBody>
    </ResultContainer>
  );  
};

// スタイリング
const SearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #f0f0f0;
`;

const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 10px;
`;

const Title = styled.h2`
  margin: 0;
`;

const Radio = styled.div`
  display: flex;
  
  input {
    margin-left: 10px;
  }
`;

const InputContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const Label = styled.label`
  margin-right: 5px;
`;

const Input = styled.input`
  margin-right: 10px;
  padding: 5px;
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  cursor: pointer;
`;

const ResultContainer = styled.div`
  width: 100%;
  overflow-x: auto;
`;

const TableHeader = styled.div`
  display: flex;
  background-color: #f0f0f0;
  font-weight: bold;
`;

const HeaderCell = styled.div`
  flex: 1;
  padding: 10px;
  text-align: center;
  border: 1px solid #ccc;
`;

const TableBody = styled.div`
  display: flex;
  flex-direction: column;
`;

const TableRow = styled.div`
  display: flex;
`;

const BodyCell = styled.div`
  flex: 1;
  padding: 10px;
  text-align: center;
  border: 1px solid #ccc;
`;

// サンプルデータ
const sampleResults = [
  {
    code: '000106', 
    summary1: '過年度加入金調定額／未収金科目',
    summary2: '過年度加入金調定額／未収金科目',
    dept1: '生協',
    dept2: '生協'
  },
  {
    code: '000107',
    summary1: '過年度加入金調定額／未収金科目',
    summary2: '過年度加入金調定額／未収金科目',
    dept1: '生協',
    dept2: '生協' 
  },
  // ...
];

// 使用例
const App: React.FC = () => {
  return (
    <div>
      <SearchComponent year={2023} month={6} dept="経理" />
      <SearchResult results={sampleResults} />
    </div>
  );
};

export default App;