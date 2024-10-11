import React from 'react';
import styled from '@emotion/styled';

type Process = {
  id: number;
  name: string;
};

type Category = {
  id: number;
  name: string;
  processes: Process[];
};

type ProcessMapProps = {
  categories: Category[];
};

const ProcessMap: React.FC<ProcessMapProps> = ({ categories }) => {
  return (
    <ProcessMapContainer>
      <ProcessMapHeader>
        <span>調定・収納</span>
      </ProcessMapHeader>
      <ProcessMapContent>
        {categories.map((category) => (
          <CategorySection key={category.id}>
            <CategoryHeader>{category.name}</CategoryHeader>
            <ProcessList>
              {category.processes.map((process) => (
                <ProcessItem key={process.id}>{process.name}</ProcessItem>
              ))}
            </ProcessList>
          </CategorySection>
        ))}
      </ProcessMapContent>
    </ProcessMapContainer>
  );
};

const ProcessMapContainer = styled.div`
  background-color: #f0f0f0;
  border: 1px solid #ccc;
  padding: 10px;
`;

const ProcessMapHeader = styled.div`
  background-color: #1e88e5;
  color: white;
  padding: 10px;
  font-weight: bold;
`;

const ProcessMapContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  padding: 20px;
`;

const CategorySection = styled.div`
  flex: 1;
`;

const CategoryHeader = styled.div`
  background-color: #90caf9;
  padding: 10px;
  font-weight: bold;
`;

const ProcessList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

const ProcessItem = styled.li`
  background-color: #e3f2fd;
  padding: 10px;
  margin-bottom: 5px;
  cursor: pointer;

  &:hover {
    background-color: #bbdefb;
  }
`;

// Usage example
const App: React.FC = () => {
  const sampleData: Category[] = [
    {
      id: 1,
      name: '調定処理',
      processes: [
        { id: 1, name: '調定用紙登入力' },
        { id: 2, name: '調定伝票処理' },
        { id: 3, name: '調定の照合入力' },
      ],
    },
    {
      id: 2,
      name: '収納処理',
      processes: [
        { id: 4, name: '収納処理' },
        { id: 5, name: '収納伝票処理' },
      ],
    },
    // Add more categories and processes as needed
  ];

  return (
    <div>
      <h1>Process Map Example</h1>
      <ProcessMap categories={sampleData} />
    </div>
  );
};

export default App;