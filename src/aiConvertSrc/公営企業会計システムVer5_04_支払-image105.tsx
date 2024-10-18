import React from 'react';
import styled from 'styled-components';

// 区分の型定義
type Division = {
  id: number;
  name: string;
  count: number;
  note: string;
};

// Divisionコンポーネントのプロパティ型定義
type DivisionProps = {
  division: Division;
};

// Divisionコンポーネント
const Division: React.FC<DivisionProps> = ({ division }) => {
  return (
    <DivisionWrapper>
      <IdCell>{division.id}</IdCell>
      <NameCell>{division.name}</NameCell>
      <CountCell>{division.count}</CountCell>
      <NoteCell>{division.note}</NoteCell>
    </DivisionWrapper>
  );
};

// スタイリング
const DivisionWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 8px;
  border-bottom: 1px solid #ccc;

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const IdCell = styled.div`
  width: 50px;
  font-weight: bold;
`;

const NameCell = styled.div`
  flex: 1;
  margin: 0 16px;
`;

const CountCell = styled.div`
  width: 80px;
  text-align: right;
`;

const NoteCell = styled.div`
  flex: 2;
  margin-left: 16px;

  @media (max-width: 600px) {
    margin-left: 0;
    margin-top: 8px;
  }
`;

// サンプルデータ
const sampleDivisions: Division[] = [
  { id: 1, name: '米', count: 10, note: '〇〇産のコシヒカリ' },
  { id: 2, name: '野菜', count: 20, note: '季節の野菜詰め合わせ' },
  { id: 3, name: '肉', count: 5, note: '国産黒毛和牛' },
];

// サンプル表示用コンポーネント
const DivisionList: React.FC = () => {
  return (
    <div>
      {sampleDivisions.map((division) => (
        <Division key={division.id} division={division} />
      ))}
    </div>
  );
};

export default DivisionList;