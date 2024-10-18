import React from 'react';
import styled from 'styled-components';

// マスタ情報のインターフェース定義
interface MasterData {
  id: number;
  name: string;
}

// プロパティのインターフェース定義
interface MasterSelectionProps {
  title: string;
  basicMasters: MasterData[];
  businessMasters: MasterData[];
  onEnd: () => void;
  onCancel: () => void;
}

// コンポーネントのスタイル定義
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

const Column = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  @media (min-width: 768px) {
    margin-bottom: 0;
  }
`;

const Title = styled.h3`
  margin-bottom: 10px;
`;

const MasterList = styled.ul`
  list-style: none;
  padding: 0;
`;

const MasterItem = styled.li`
  margin-bottom: 5px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
`;

const Button = styled.button`
  margin-left: 10px;
  padding: 5px 10px;
`;

const MasterSelection: React.FC<MasterSelectionProps> = ({
  title,
  basicMasters,
  businessMasters,
  onEnd,
  onCancel,
}) => {
  return (
    <Container>
      <Column>
        <Title>{`<基本情報>`}</Title>
        <MasterList>
          {basicMasters.map((master) => (
            <MasterItem key={master.id}>{master.name}</MasterItem>
          ))}
        </MasterList>
      </Column>
      <Column>
        <Title>{`<業者情報>`}</Title>
        <MasterList>
          {businessMasters.map((master) => (
            <MasterItem key={master.id}>{master.name}</MasterItem>
          ))}
        </MasterList>
      </Column>
      <ButtonContainer>
        <Button onClick={onEnd}>OK</Button>
        <Button onClick={onCancel}>クリア</Button>
        <Button onClick={onEnd}>終了</Button>
      </ButtonContainer>
    </Container>
  );
};

// サンプルデータと使用例
const SampleMasterSelection: React.FC = () => {
  const basicMasters: MasterData[] = [
    { id: 1, name: '基本マスタ1' },
    { id: 2, name: '基本マスタ2' },
    { id: 3, name: '基本マスタ3' },
  ];

  const businessMasters: MasterData[] = [
    { id: 1, name: '業者マスタ1' },
    { id: 2, name: '業者マスタ2' },
    { id: 3, name: '業者マスタ3' },
  ];

  const handleEnd = () => {
    console.log('終了ボタンがクリックされました');
  };

  const handleCancel = () => {
    console.log('クリアボタンがクリックされました');
  };

  return (
    <MasterSelection
      title="次年度マスタ作成"
      basicMasters={basicMasters}
      businessMasters={businessMasters}
      onEnd={handleEnd}
      onCancel={handleCancel}
    />
  );
};

export default SampleMasterSelection;