import React from 'react';
import styled from 'styled-components';

// 検索グループの型定義
interface SearchGroup {
  name: string;
  searchFields: SearchField[];
}

// 検索フィールドの型定義
interface SearchField {
  label: string;
  value: string;
}

// コンポーネントのプロパティの型定義
interface SearchFormProps {
  searchGroups: SearchGroup[];
  onSearch: (groupName: string, field: string, value: string) => void;
}

// スタイル定義
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: center;
  }
`;

const GroupContainer = styled.div`
  margin-bottom: 20px;
  @media (min-width: 768px) {
    margin-right: 20px;
    margin-bottom: 0;
  }
`;

const FieldContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const FieldLabel = styled.label`
  margin-right: 10px;
`;

const FieldInput = styled.input`
  padding: 5px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const Button = styled.button`
  padding: 10px 20px;
  margin: 0 5px;
`;

const SearchForm: React.FC<SearchFormProps> = ({ searchGroups, onSearch }) => {
  // 状態管理
  const [groupName, setGroupName] = React.useState(searchGroups[0]?.name || '');
  const [searchValues, setSearchValues] = React.useState<{ [key: string]: string }>({});

  // グループ変更ハンドラ
  const handleGroupChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setGroupName(e.target.value);
    setSearchValues({});
  };

  // 検索フィールド変更ハンドラ
  const handleSearchChange = (field: string, value: string) => {
    setSearchValues(prevValues => ({
      ...prevValues,
      [field]: value
    }));
  };

  // 検索ボタンクリックハンドラ
  const handleSearch = () => {
    Object.entries(searchValues).forEach(([field, value]) => {
      onSearch(groupName, field, value);
    });
  };

  // 現在選択中のグループ
  const selectedGroup = searchGroups.find(group => group.name === groupName);

  return (
    <Container>
      <GroupContainer>
        <div>
          令和2年度
          <select value={groupName} onChange={handleGroupChange}>
            {searchGroups.map(group => (
              <option key={group.name} value={group.name}>
                {group.name}
              </option>
            ))}
          </select>
        </div>
        {selectedGroup?.searchFields.map(field => (
          <FieldContainer key={field.label}>
            <FieldLabel>{field.label}</FieldLabel>
            <FieldInput
              type="text"
              value={searchValues[field.value] || ''}
              onChange={e => handleSearchChange(field.value, e.target.value)}
            />
          </FieldContainer>
        ))}
      </GroupContainer>
      <table>
        <thead>
          <tr>
            <th>採分グループコード</th>
            <th>名称</th>
            <th>摘要</th>
          </tr>
        </thead>
        <tbody>
          {/* サンプルデータを表示 */}
          <tr>
            <td>001</td>
            <td>グループ1</td>
            <td>サンプル1</td>
          </tr>
          <tr>
            <td>002</td>
            <td>グループ2</td>
            <td>サンプル2</td>
          </tr>
        </tbody>
      </table>
      <ButtonContainer>
        <Button onClick={handleSearch}>検索</Button>
        <Button>クリア</Button>
        <Button>キャンセル</Button>
      </ButtonContainer>
    </Container>
  );
};



// 使用例
const App: React.FC = () => {
  const searchGroups: SearchGroup[] = [
    {
      name: '科目検索',
      searchFields: [
        { label: '節', value: 'section' },
        { label: '細節', value: 'subSection' },
        { label: '明細', value: 'item' },
      ],
    },
    {
      name: 'その他の検索',
      searchFields: [
        { label: 'フィールド1', value: 'field1' },
        { label: 'フィールド2', value: 'field2' },
      ],
    },
  ];

  const handleSearch = (groupName: string, field: string, value: string) => {
    console.log(`Search: Group=${groupName}, Field=${field}, Value=${value}`);
  };

  return (
    <div>
      <h1>検索フォーム</h1>
      <SearchForm searchGroups={searchGroups} onSearch={handleSearch} />
    </div>
  );
};

export default App;