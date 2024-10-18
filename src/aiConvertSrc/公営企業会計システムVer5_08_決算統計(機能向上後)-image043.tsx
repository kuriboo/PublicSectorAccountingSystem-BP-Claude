import React from 'react';
import styled from 'styled-components';

// 性質コード検索プロパティの型定義
type SearchProps = {
  items: {
    code: string;
    name: string;
    description: string;
  }[];
};

// 性質コード検索コンポーネント
const SearchComponent: React.FC<SearchProps> = ({ items }) => {
  // 検索レベルのstate
  const [searchLevel, setSearchLevel] = React.useState('小分類');

  // 検索レベルの変更ハンドラ
  const handleLevelChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchLevel(e.target.value);
  };

  return (
    <Container>
      <Title>令和02年度</Title>
      <SearchBox>
        <SearchInput type="text" placeholder="公共下水道" />
        <SearchLevelRadio>
          <label>
            <input
              type="radio"
              value="大分類"
              checked={searchLevel === '大分類'}
              onChange={handleLevelChange}
            />
            大分類
          </label>
          <label>
            <input
              type="radio"
              value="中分類"
              checked={searchLevel === '中分類'}
              onChange={handleLevelChange}
            />
            中分類
          </label>
          <label>
            <input
              type="radio"
              value="小分類"
              checked={searchLevel === '小分類'}
              onChange={handleLevelChange}
            />
            小分類
          </label>
        </SearchLevelRadio>
        <SearchButton>表示</SearchButton>
      </SearchBox>
      <ResultTable>
        <thead>
          <tr>
            <th>性質コード</th>
            <th>性質略名</th>
            <th>性質正式名</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.code}>
              <td>{item.code}</td>
              <td>{item.name}</td>
              <td>{item.description}</td>
            </tr>
          ))}
        </tbody>
      </ResultTable>
      <ButtonGroup>
        <Button>確定</Button>
        <Button>OK</Button>
        <Button>クリア</Button>
        <CancelButton>キャンセル</CancelButton>
      </ButtonGroup>
    </Container>
  );
};

// サンプルデータ
const sampleData = [
  {
    code: '17102101001',
    name: '報酬(会計パ)-事務',
    description: '報酬(会計年度_パート)[事務職]',
  },
  {
    code: '17102101002',
    name: '報酬(会計パ)-技術',
    description: '報酬(会計年度_パート)[技術職]',
  },
  // ...
];

// 使用例
const App: React.FC = () => {
  return (
    <div>
      <h1>性質コード検索</h1>
      <SearchComponent items={sampleData} />
    </div>
  );
};

// スタイリング
const Container = styled.div`
  font-family: sans-serif;
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
`;

const Title = styled.h2`
  font-size: 20px;
  margin-bottom: 20px;
`;

const SearchBox = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const SearchInput = styled.input`
  padding: 8px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-right: 10px;
`;

const SearchLevelRadio = styled.div`
  display: flex;
  align-items: center;
  margin-right: 10px;

  label {
    margin-right: 10px;
  }
`;

const SearchButton = styled.button`
  padding: 8px 16px;
  font-size: 16px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const ResultTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;

  th,
  td {
    padding: 8px;
    border: 1px solid #ccc;
  }

  th {
    background-color: #f0f0f0;
    font-weight: bold;
    text-align: left;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const Button = styled.button`
  padding: 8px 16px;
  font-size: 16px;
  margin-left: 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const CancelButton = styled(Button)`
  background-color: #dc3545;
`;

export default App;