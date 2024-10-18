import React from 'react';
import styled from 'styled-components';

// 明細書情報の型定義
type MeisaishoInfo = {
  printOrder: number;
  documentCategory: string;
  documentCategoryCode: string;
  printCount: number;
};

// 明細書コンポーネントのプロパティ型定義
type MeisaishoProps = {
  info: MeisaishoInfo;
  onDelete: () => void;
};

// 明細書コンポーネント
const Meisaisho: React.FC<MeisaishoProps> = ({ info, onDelete }) => {
  const { printOrder, documentCategory, documentCategoryCode, printCount } = info;

  return (
    <Row>
      <Cell>{printOrder}</Cell>
      <Cell>{documentCategory}</Cell>
      <Cell>{documentCategoryCode}</Cell>
      <Cell>{printCount}</Cell>
      <DeleteButton onClick={onDelete}>削除</DeleteButton>
    </Row>
  );
};

// 明細書一覧コンポーネントのプロパティ型定義
type MeisaishoListProps = {
  list: MeisaishoInfo[];
  onDelete: (index: number) => void;
};

// 明細書一覧コンポーネント 
const MeisaishoList: React.FC<MeisaishoListProps> = ({ list, onDelete }) => {
  // 明細書リストが空の場合の処理
  if (list.length === 0) {
    return <Message>明細書情報がありません</Message>;
  }

  return (
    <Table>
      <thead>
        <Row>
          <HeaderCell>印字区分</HeaderCell>
          <HeaderCell>明細書分類</HeaderCell>
          <HeaderCell>印字分類</HeaderCell>
          <HeaderCell>印字金額</HeaderCell>
          <HeaderCell></HeaderCell>
        </Row>
      </thead>
      <tbody>
        {list.map((info, index) => (
          <Meisaisho key={index} info={info} onDelete={() => onDelete(index)} />
        ))}
      </tbody>
    </Table>
  );
};

// サンプルデータ
const sampleData: MeisaishoInfo[] = [
  {
    printOrder: 1,
    documentCategory: '印字区分名称',
    documentCategoryCode: '01',
    printCount: 10000,
  },
  {
    printOrder: 2,
    documentCategory: '備考名称・金額明細',
    documentCategoryCode: '',
    printCount: 0,
  },
];

// 使用例
const App: React.FC = () => {
  const handleDelete = (index: number) => {
    console.log(`${index}番目の明細書を削除`);
  };

  return (
    <Wrapper>
      <Title>収益費用明細書備考入力</Title>
      <MeisaishoList list={sampleData} onDelete={handleDelete} />
      <RegistrationInfo>収益費用明細書に印字する備考の印字を行います。</RegistrationInfo>
    </Wrapper>
  );
};

// スタイリング
const Wrapper = styled.div`
  padding: 16px;
`;

const Title = styled.h2`
  font-size: 18px;
  margin-bottom: 8px;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 16px;
`;

const Row = styled.tr`
  &:nth-child(even) {
    background-color: #f2f2f2;
  }
`;

const Cell = styled.td`
  padding: 8px;
  border: 1px solid #ddd;
  text-align: center;
`;

const HeaderCell = styled(Cell)`
  font-weight: bold;
  background-color: #f2f2f2;
`;

const DeleteButton = styled.button`
  color: red;
  border: none;
  background: none;
  cursor: pointer;
`;

const Message = styled.p`
  color: #999;
  text-align: center;
`;

const RegistrationInfo = styled.p`
  color: #999;
  font-size: 12px;
  text-align: right;
`;

export default App;