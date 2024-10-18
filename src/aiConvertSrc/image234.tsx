import React from 'react';
import styled from 'styled-components';

// 科目検索フォームのプロパティ型定義
type SearchFormProps = {
  className?: string;
  searchGroups?: string[];
  onSearch: (keyword: string) => void;
};

// 科目検索フォームコンポーネント
const SearchForm: React.FC<SearchFormProps> = ({ className, searchGroups = [], onSearch }) => {
  const [keyword, setKeyword] = React.useState('');

  // 検索ボタンクリック時の処理
  const handleSearch = () => {
    onSearch(keyword);
  };

  return (
    <div className={className}>
      <div>
        <label>令和02年度</label>
        <label>科目検索</label>
      </div>
      <div>
        <label>前</label>
        <input type="text" value={keyword} onChange={e => setKeyword(e.target.value)} />
        <label>期</label>
      </div>
      <table>
        <thead>
          <tr>
            <th>授業グループコード</th>
            <th>名称</th>
            <th>指定</th>
          </tr>
        </thead>
        <tbody>
          {searchGroups.map((group, index) => (
            <tr key={index}>
              <td></td>
              <td>{group}</td>
              <td></td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        <button onClick={handleSearch}>表示</button>
        <button>クリア</button>
        <button>キャンセル</button>
      </div>
    </div>
  );
};

// スタイリング
const StyledSearchForm = styled(SearchForm)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background-color: #f0f0f0;
  padding: 20px;

  label {
    margin-right: 10px;
  }

  input {
    margin-right: 10px;
    padding: 5px;
  }
  
  table {
    margin-top: 20px;
    width: 100%;
    border-collapse: collapse;
  }

  th, td {
    border: 1px solid #ccc;
    padding: 5px;
  }

  button {
    margin-top: 20px;
    margin-right: 10px;
    padding: 5px 10px;
  }

  @media (max-width: 600px) {
    padding: 10px;
    
    table {
      font-size: 12px;
    }
  }
`;

// サンプルデータを使用して表示する例
const SampleSearchGroups = ['授業グループ1', '授業グループ2', '授業グループ3'];

const App: React.FC = () => {
  const handleSearch = (keyword: string) => {
    console.log(`検索キーワード: ${keyword}`);
  };

  return (
    <StyledSearchForm searchGroups={SampleSearchGroups} onSearch={handleSearch} />
  );
};

export default App;