import React from 'react';
import styled from '@emotion/styled';

type MasterData = {
  code: string;
  name: string;
};

type MasterListProps = {
  title: string;
  data: MasterData[];
  onSelect: (code: string) => void;
};

const MasterList: React.FC<MasterListProps> = ({ title, data, onSelect }) => {
  return (
    <Container>
      <Title>{title}</Title>
      <ListContainer>
        {data.map((item) => (
          <ListItem key={item.code} onClick={() => onSelect(item.code)}>
            <span>{item.code}</span>
            <span>{item.name}</span>
          </ListItem>
        ))}
      </ListContainer>
    </Container>
  );
};

const Container = styled.div`
  background-color: #f0f0f0;
  padding: 16px;
  width: 300px;

  @media (max-width: 600px) {
    width: 100%;
  }
`;

const Title = styled.h2`
  margin: 0 0 8px;
`;

const ListContainer = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  height: 200px;
  overflow-y: auto;
`;

const ListItem = styled.li`
  padding: 4px;
  cursor: pointer;

  &:hover {
    background-color: #e0e0e0;
  }

  span {
    margin-right: 8px;
  }
`;

// Usage example
const SampleMasterList: React.FC = () => {
  const sampleData: MasterData[] = [
    { code: '001', name: 'ぎょうせい1地区' },
    { code: '002', name: 'ぎょうせい2地区' },
    { code: '003', name: '新木場地区' },
    { code: '004', name: '夢の島地区' },
  ];

  const handleSelect = (code: string) => {
    console.log(`Selected code: ${code}`);
  };

  return <MasterList title="事業区分マスタ" data={sampleData} onSelect={handleSelect} />;
};

export default SampleMasterList;