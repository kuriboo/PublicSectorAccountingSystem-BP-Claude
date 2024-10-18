import React from 'react';
import styled from 'styled-components';

// 移管先と移管元の型定義
type TransferData = {
  id: string;
  name: string;
  amount: number;
  unit: string;
  remarks: string;
};

// コンポーネントのプロパティの型定義
type TransferFormProps = {
  transferFrom: TransferData;
  transferTo: TransferData;
  onTransfer: () => void;
  onCancel: () => void;
  onClear: () => void;
};

// スタイルコンポーネント
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

const TransferBlock = styled.div`
  border: 1px solid #ccc;
  padding: 10px;
  margin-bottom: 20px;
  width: 100%;
  @media (min-width: 768px) {
    width: 45%;
  }
`;

const Title = styled.div`
  font-weight: bold;
  margin-bottom: 10px;
`;

const ItemRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 5px;
`;

const ItemName = styled.div`
  flex: 1;
`;

const ItemValue = styled.div`
  flex: 2;
  text-align: right;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const Button = styled.button`
  padding: 5px 10px;
  margin: 0 5px;
`;

// 移管元・先の表示コンポーネント
const TransferItem: React.FC<{ data: TransferData }> = ({ data }) => (
  <TransferBlock>
    <Title>{data.name}</Title>
    <ItemRow>
      <ItemName>保管場所</ItemName>
      <ItemValue>{data.id}</ItemValue>
    </ItemRow>
    <ItemRow>
      <ItemName>DIF(A1)算定管</ItemName>
      <ItemValue>{data.amount} {data.unit}</ItemValue>
    </ItemRow>
  </TransferBlock>
);

// メインのコンポーネント
const TransferForm: React.FC<TransferFormProps> = ({
  transferFrom,
  transferTo,
  onTransfer,
  onCancel,
  onClear,
}) => {
  return (
    <Container>
      {/* 移管元の表示 */}
      <TransferItem data={transferFrom} />
      
      {/* 移管先の表示 */}
      <TransferItem data={transferTo} />
      
      {/* ボタン */}
      <ButtonContainer>
        <Button onClick={onTransfer}>移管</Button>
        <Button onClick={onCancel}>クリア</Button>
        <Button onClick={onClear}>終了</Button>
      </ButtonContainer>
    </Container>
  );
};

// サンプルデータ
const sampleData = {
  transferFrom: {
    id: '保管場所A',
    name: '移管元',
    amount: 0.75,
    unit: '本',
    remarks: '',
  },
  transferTo: {
    id: '保管場所B',
    name: '移管先',
    amount: 0.75,
    unit: '本',
    remarks: '',
  },
};

// 使用例
const TransferFormExample: React.FC = () => (
  <TransferForm
    transferFrom={sampleData.transferFrom}
    transferTo={sampleData.transferTo}
    onTransfer={() => console.log('Transferred')}
    onCancel={() => console.log('Cancelled')}
    onClear={() => console.log('Cleared')}
  />
);

export default TransferForm;