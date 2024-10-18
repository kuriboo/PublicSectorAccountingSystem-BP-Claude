import React, { useState } from 'react';
import styled from '@emotion/styled';

interface MasterData {
  code: string;
  name: string;
}

interface Props {
  title: string;
  masters: MasterData[];
  onSelect: (code: string) => void;
}

const MasterSelector: React.FC<Props> = ({ title, masters, onSelect }) => {
  const [filter, setFilter] = useState('');

  // フィルター処理
  const filteredMasters = masters.filter(master =>
    master.name.includes(filter)
  );

  return (
    <Container>
      <Title>{title}</Title>
      {/* 文章入力 */}
      <Input
        type="text"
        value={filter}
        onChange={e => setFilter(e.target.value)}
        placeholder="文章を入力してください"
      />
      {/* マスタデータ一覧 */}
      <MasterList>
        {filteredMasters.map(master => (
          <MasterItem key={master.code} onClick={() => onSelect(master.code)}>
            {master.name}
          </MasterItem>
        ))}
      </MasterList>
    </Container>
  );
};

// スタイリング
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  width: 300px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #f9f9f9;
`;

const Title = styled.h2`
  margin-bottom: 10px;
`;

const Input = styled.input`
  margin-bottom: 10px;
  padding: 6px;
  width: 100%;
`;

const MasterList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
  width: 100%;
  max-height: 200px;
  overflow-y: auto;
`;

const MasterItem = styled.li`
  padding: 8px;
  cursor: pointer;

  &:hover {
    background-color: #e9e9e9;
  }
`;

// 使用例
const SampleMasterSelector = () => {
  const sampleMasters: MasterData[] = [
    { code: '1', name: '文章マスタ1' },
    { code: '2', name: '文章マスタ2' },
    { code: '3', name: '文章マスタ3' },
    { code: '4', name: '文章マスタ4' },
    { code: '5', name: '文章マスタ5' },
  ];

  const handleSelect = (code: string) => {
    console.log(`選択されたコード: ${code}`);
  };

  return (
    <MasterSelector
      title="文章マスタ"
      masters={sampleMasters}
      onSelect={handleSelect}
    />
  );
};

export default SampleMasterSelector;