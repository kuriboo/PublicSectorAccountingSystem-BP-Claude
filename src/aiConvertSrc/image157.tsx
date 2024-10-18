import React from 'react';
import styled from 'styled-components';

// 型定義
type TitleProps = {
  code: string;
  title: string;
  isHighlighted?: boolean;
};

type MasterProps = {
  titles: TitleProps[];
  onSelect: (code: string) => void;
};

// スタイル定義
const Container = styled.div`
  background-color: #f0f0f0;
  padding: 16px;
  width: 100%;
  box-sizing: border-box;
  
  @media (max-width: 600px) {
    padding: 8px;
  }
`;

const Title = styled.h2`
  font-size: 18px;
  margin-bottom: 8px;
  
  @media (max-width: 600px) {
    font-size: 16px;
  }
`;

const SearchInput = styled.input`
  width: 200px;
  padding: 4px;
  margin-bottom: 16px;
  
  @media (max-width: 600px) {
    width: 100%;
  }
`;

const TableContainer = styled.div`
  max-height: 300px;
  overflow-y: auto;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  
  th, td {
    padding: 8px;
    text-align: left;
    border-bottom: 1px solid #ddd;
  }
  
  tr:hover {
    background-color: #f5f5f5;
  }
  
  tr.highlighted {
    background-color: #e0e0e0;
  }
`;

// コンポーネント定義
const TitleMaster: React.FC<MasterProps> = ({ titles, onSelect }) => {
  const [searchWord, setSearchWord] = React.useState('');

  const filteredTitles = titles.filter((title) =>
    title.title.includes(searchWord)
  );

  return (
    <Container>
      <Title>画面タイトルマスタ</Title>
      <SearchInput
        type="text"
        value={searchWord}
        onChange={(e) => setSearchWord(e.target.value)}
        placeholder="検索条件を入力"
      />
      <TableContainer>
        <Table>
          <thead>
            <tr>
              <th>コード</th>
              <th>タイトル</th>
              <th>記工番号</th>
            </tr>
          </thead>
          <tbody>
            {filteredTitles.map((title) => (
              <tr
                key={title.code}
                className={title.isHighlighted ? 'highlighted' : ''}
                onClick={() => onSelect(title.code)}
              >
                <td>{title.code}</td>
                <td>{title.title}</td>
                <td></td>
              </tr>
            ))}
          </tbody>
        </Table>
      </TableContainer>
    </Container>
  );
};

// サンプルデータと使用例
const sampleTitles: TitleProps[] = [
  { code: 'BFD1010', title: '当年度データ作成' },
  { code: 'BFD1011', title: '評価計算' },
  { code: 'BFD1020', title: '単価計算' },
  { code: 'BFD1030', title: '当初予算データ作成' },
  { code: 'BFD1040', title: 'シーリング設定' },
];

const App: React.FC = () => {
  const handleSelect = (code: string) => {
    console.log(`Selected code: ${code}`);
  };

  return (
    <div>
      <h1>タイトルマスタサンプル</h1>
      <TitleMaster titles={sampleTitles} onSelect={handleSelect} />
    </div>
  );
};

export default App;