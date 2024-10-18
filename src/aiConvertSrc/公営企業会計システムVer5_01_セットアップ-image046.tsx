import React from 'react';
import styled from '@emotion/styled';

// ブロックの型定義
type Block = {
  id: string;
  name: string;
};

// セグメントの型定義
type Segment = {
  id: string;
  name: string;
};

// プロパティの型定義
type Props = {
  blocks: Block[];
  segments: Segment[];
  onAddSegment: (block: Block) => void;
  onDeleteSegment: (segment: Segment) => void;
  onFinish: () => void;
  onCancel: () => void;
};

// スタイル定義
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-around;
  }
`;

const BlockList = styled.div`
  width: 100%;
  max-width: 400px;
  border: 1px solid #ccc;
  padding: 10px;
  margin-bottom: 20px;
  @media (min-width: 768px) {
    margin-bottom: 0;
    margin-right: 20px;
  }
`;

const SegmentList = styled.div`
  width: 100%;
  max-width: 400px;
  border: 1px solid #ccc;
  padding: 10px;
`;

const ListItem = styled.div`
  padding: 5px;
  cursor: pointer;
  &:hover {
    background-color: #f0f0f0;
  }
`;

const ButtonContainer = styled.div`
  margin-top: 20px;
  text-align: center;
`;

const Button = styled.button`
  padding: 10px 20px;
  margin: 0 10px;
`;

// コンポーネントの定義
const BlockSegmentManager: React.FC<Props> = ({
  blocks,
  segments,
  onAddSegment,
  onDeleteSegment,
  onFinish,
  onCancel,
}) => {
  return (
    <Container>
      <BlockList>
        <h3>ブロック管理マスタ</h3>
        {blocks.map((block) => (
          <ListItem key={block.id} onClick={() => onAddSegment(block)}>
            {block.id} {block.name}
          </ListItem>
        ))}
      </BlockList>
      <SegmentList>
        <h3>ブロック</h3>
        {segments.map((segment) => (
          <ListItem key={segment.id} onClick={() => onDeleteSegment(segment)}>
            {segment.id} {segment.name}
          </ListItem>
        ))}
      </SegmentList>
      <ButtonContainer>
        <Button onClick={onFinish}>行確定</Button>
        <Button onClick={onCancel}>行キャンセル</Button>
      </ButtonContainer>
    </Container>
  );
};

// サンプルデータと使用例
const sampleBlocks: Block[] = [
  { id: '01', name: '(旧)川北' },
  { id: '02', name: '(旧)中央' },
  { id: '03', name: '(旧)平' },
  { id: '04', name: '(旧)浜風' },
  { id: '11', name: '城北川北' },
  { id: '12', name: '城北中央' },
];

const sampleSegments: Segment[] = [
  { id: '21', name: '城東中央' },
  { id: '22', name: '城東平' },
];

const SampleUsage: React.FC = () => {
  // セグメントの追加処理
  const handleAddSegment = (block: Block) => {
    console.log('Add segment:', block);
  };

  // セグメントの削除処理  
  const handleDeleteSegment = (segment: Segment) => {
    console.log('Delete segment:', segment);
  };

  // 確定処理
  const handleFinish = () => {
    console.log('Finish');
  };

  // キャンセル処理
  const handleCancel = () => {
    console.log('Cancel');
  };

  return (
    <BlockSegmentManager
      blocks={sampleBlocks}
      segments={sampleSegments}
      onAddSegment={handleAddSegment}
      onDeleteSegment={handleDeleteSegment}
      onFinish={handleFinish}
      onCancel={handleCancel}
    />
  );
};

export default SampleUsage;