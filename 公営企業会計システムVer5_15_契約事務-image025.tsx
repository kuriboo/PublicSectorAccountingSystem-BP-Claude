以下は、指定された要件に基づいて作成したNext.js + TypeScriptのコンポーネントです。

import React from 'react';
import styled from 'styled-components';

// 水道管路維持管理システムの検索画面のProps
interface WaterworksMaintenanceSystemSearchProps {
  defaultDepartment?: string; // デフォルトの所属部署
  defaultPosition?: string; // デフォルトの役職
  defaultName?: string; // デフォルトの氏名
  onSearch?: (department: string, position: string, name: string) => void; // 検索ボタンがクリックされた時のイベントハンドラ
}

// 水道管路維持管理システムの検索画面
const WaterworksMaintenanceSystemSearch: React.FC<WaterworksMaintenanceSystemSearchProps> = ({
  defaultDepartment = '',
  defaultPosition = '',
  defaultName = '', 
  onSearch,
}) => {
  const [department, setDepartment] = React.useState(defaultDepartment); // 所属部署
  const [position, setPosition] = React.useState(defaultPosition); // 役職
  const [name, setName] = React.useState(defaultName); // 氏名

  // 検索ボタンがクリックされた時のハンドラ
  const handleSearch = () => {
    onSearch?.(department, position, name);
  };

  return (
    <Container>
      <Title>水道管路維持管理システム</Title>
      <SearchArea>
        <Label>所属</Label>
        <Select value={department} onChange={e => setDepartment(e.target.value)}>
          <option value="">選択してください</option>
          <option value="営業">営業</option>
          <option value="工事">工事</option>
          <option value="管理">管理</option>
        </Select>
        <Label>役職</Label>
        <Select value={position} onChange={e => setPosition(e.target.value)}>
          <option value="">選択してください</option>
          <option value="部長">部長</option>
          <option value="課長">課長</option>
          <option value="係長">係長</option>
        </Select>
        <Label>氏名</Label>
        <Input value={name} onChange={e => setName(e.target.value)} />
        <SearchButton type="button" onClick={handleSearch}>検索</SearchButton>
      </SearchArea>
    </Container>
  );
};

// サンプルデータを用いた使用例
const SampleUsage: React.FC = () => {
  const handleSearch = (department: string, position: string, name: string) => {
    console.log('検索条件:', department, position, name);
    // 実際の検索処理を実装する
  };

  return (
    <WaterworksMaintenanceSystemSearch 
      defaultDepartment="営業"
      defaultPosition="部長"
      defaultName="山田太郎"
      onSearch={handleSearch}
    />
  );
};

// スタイリング
const Container = styled.div`
  padding: 16px;
`;

const Title = styled.h1`
  font-size: 24px;
  margin-bottom: 16px;
`;

const SearchArea = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  
  @media (max-width: 600px) {
    flex-direction: column;
    align-items: stretch;
  }
`;

const Label = styled.label`
  margin-right: 4px;
  white-space: nowrap;
`;

const Select = styled.select`
  padding: 4px;
  border-radius: 4px;
  border: 1px solid #ccc;
`;

const Input = styled.input`
  padding: 4px;
  border-radius: 4px;
  border: 1px solid #ccc;
`;

const SearchButton = styled.button`
  padding: 4px 16px;
  border-radius: 4px;
  border: none;
  background-color: #007bff;
  color: #fff;
  cursor: pointer;
  
  &:hover {
    background-color: #0056b3;
  }
`;

export default WaterworksMaintenanceSystemSearch;