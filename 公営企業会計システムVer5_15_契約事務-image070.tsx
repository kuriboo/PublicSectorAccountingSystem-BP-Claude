以下は、Next.js + TypeScriptを使用して、与えられた画像を元にコンポーネントを生成したコードです。

import React from 'react';
import styled from 'styled-components';

type MaskCategory = {
  name: string;
  items: string[];
};

type MaskSelectionProps = {
  categories: MaskCategory[];
  onConfirm: () => void;
  onCancel: () => void;
  onClose: () => void;
};

const MaskSelection: React.FC<MaskSelectionProps> = ({
  categories,
  onConfirm,
  onCancel,
  onClose,
}) => {
  return (
    <Container>
      <Title>次年度マスク作成</Title>
      <Description>
        平成29年度のマスク付き年賀状に使用します。
      </Description>
      <CategoryContainer>
        {categories.map((category, index) => (
          <CategoryColumn key={index}>
            <CategoryTitle>{category.name}</CategoryTitle>
            <CategoryItems>
              {category.items.map((item, itemIndex) => (
                <CategoryItem key={itemIndex}>{item}</CategoryItem>
              ))}
            </CategoryItems>
          </CategoryColumn>
        ))}
      </CategoryContainer>
      <Note>
        ※何回でも実行可能です。
        <br />
        ただし、前回の次年度マスク作成処理後に行った変更内容は削除されますので、
        注意してください。
      </Note>
      <ButtonContainer>
        <Button onClick={onConfirm}>OK</Button>
        <Button onClick={onCancel}>クリア</Button>
        <Button onClick={onClose}>終了</Button>
      </ButtonContainer>
    </Container>
  );
};

const Container = styled.div`
  background-color: #f0f0f0;
  padding: 16px;
  width: 500px;
  box-sizing: border-box;
`;

const Title = styled.h2`
  font-size: 18px;
  margin-bottom: 8px;
`;

const Description = styled.p`
  font-size: 14px;
  margin-bottom: 16px;
`;

const CategoryContainer = styled.div`
  display: flex;
`;

const CategoryColumn = styled.div`
  flex: 1;
  margin-right: 16px;

  &:last-child {
    margin-right: 0;
  }
`;

const CategoryTitle = styled.h3`
  font-size: 16px;
  margin-bottom: 8px;
`;

const CategoryItems = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const CategoryItem = styled.li`
  font-size: 14px;
  margin-bottom: 4px;
`;

const Note = styled.p`
  font-size: 12px;
  color: #666;
  margin-top: 16px;
  margin-bottom: 16px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const Button = styled.button`
  padding: 8px 16px;
  font-size: 14px;
  margin-left: 8px;
`;

// サンプルデータを用いた使用例
const sampleCategories: MaskCategory[] = [
  {
    name: '基本情報',
    items: [
      '用語マスタ',
      '格付指標',
      '契約管理区分種別名称マスタ',
      '契約管理区分名称マスタ',
      '所属別案内',
      '契約決裁順マスタ',
      '契約決裁合議者マスタ',
    ],
  },
  {
    name: '業者情報',
    items: [
      '業者マスタ',
      '業者別営業所マスタ',
      '相手先リンクマスタ',
      '業者態様マスタ',
      '注記名称マスタ',
      '注記内容マスタ',
      '業者注記マスタ',
      '業者別業態マスタ',
      '業者別業種明細マスタ',
      '物品明細マスタ',
      '業者経歴',
      '格付基準規程',
      'JV構成マスタ',
      '業者別経審',
    ],
  },
];

const App: React.FC = () => {
  const handleConfirm = () => {
    console.log('Confirmed');
  };

  const handleCancel = () => {
    console.log('Cancelled');
  };

  const handleClose = () => {
    console.log('Closed');
  };

  return (
    <MaskSelection
      categories={sampleCategories}
      onConfirm={handleConfirm}
      onCancel={handleCancel}
      onClose={handleClose}
    />
  );
};

export default App;