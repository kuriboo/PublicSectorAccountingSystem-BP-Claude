import React from 'react';
import styled from '@emotion/styled';

type BlockType = {
  code: number;
  name: string;
};

type BlockMasterProps = {
  blocks: BlockType[];
  selectedBlock: number;
  onChangeBlock: (blockCode: number) => void;
};

const BlockMaster: React.FC<BlockMasterProps> = ({ blocks, selectedBlock, onChangeBlock }) => {
  return (
    <Container>
      <Title>ブロック名称マスタ</Title>
      <Table>
        <thead>
          <tr>
            <th>ブロック</th>
            <th>名称</th>
          </tr>
        </thead>
        <tbody>
          {blocks.map((block) => (
            <tr key={block.code} className={block.code === selectedBlock ? 'selected' : ''}>
              <td>{block.code}</td>
              <td>{block.name}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

// Usage example
const App: React.FC = () => {
  const blocks: BlockType[] = [
    { code: 10, name: '城北ブロック' },
    { code: 20, name: '城東ブロック' },
    { code: 30, name: '城西ブロック' },
    { code: 40, name: '城南ブロック' },
    { code: 50, name: '行政/県庁ブロック' },
    { code: 70, name: '広域ブロック(全セグメント)' },
    { code: 90, name: 'その他ブロック(ビジネス・なし等)' },
  ];

  const [selectedBlock, setSelectedBlock] = React.useState<number>(10);

  const handleChangeBlock = (blockCode: number) => {
    setSelectedBlock(blockCode);
  };

  return <BlockMaster blocks={blocks} selectedBlock={selectedBlock} onChangeBlock={handleChangeBlock} />;
};

const Container = styled.div`
  font-family: sans-serif;
  background: #f0f0f0;
  padding: 20px;
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
`;

const Title = styled.h2`
  margin: 0 0 10px;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;

  th,
  td {
    border: 1px solid #ccc;
    padding: 8px;
    text-align: left;
  }

  th {
    background: #eee;
  }

  tr.selected {
    background: #e0e0e0;
  }
`;

export default App;