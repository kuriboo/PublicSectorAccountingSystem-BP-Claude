import React from 'react';
import styled from 'styled-components';

// 振替条件設定のプロパティ型定義
interface TransferConditionProps {
  transferNumber?: string;
  receptionDate?: string;
  transferAmount?: number;
  remarks?: string;
}

// 振替条件設定コンポーネント
const TransferCondition: React.FC<TransferConditionProps> = ({
  transferNumber = '',
  receptionDate = '',
  transferAmount = 0,
  remarks = '',
}) => {
  // 振替日の範囲を計算
  const today = new Date();
  const minTransferDate = today.toISOString().split('T')[0];
  today.setDate(today.getDate() + 90);
  const maxTransferDate = today.toISOString().split('T')[0];

  return (
    <Container>
      <Title>振替条件設定</Title>
      <Row>
        <Label>振替番号</Label>
        <Input type="text" value={transferNumber} readOnly />
      </Row>
      <Row>
        <Label>振替日</Label>
        <Input type="date" min={minTransferDate} max={maxTransferDate} required />
      </Row>
      <Row>
        <Label>振替金額</Label>
        <Input type="number" min={0} max={999999999999} value={transferAmount} required />
      </Row>
      <Row>
        <Label>摘要</Label>
        <Input type="text" value={remarks} />
      </Row>
      <ButtonContainer>
        <Button>検索</Button>
        <Button primary>予約科目</Button>
      </ButtonContainer>
    </Container>
  );
};

// サンプルデータ
const sampleData: TransferConditionProps = {
  transferNumber: 'AB227',
  receptionDate: '2016-03-27',
  transferAmount: 80000,
  remarks: '電子書籍/消費税分',
};

// サンプル表示用コンポーネント 
const SampleTransferCondition: React.FC = () => {
  return (
    <SampleContainer>
      <h2>振替条件設定サンプル</h2>
      <TransferCondition {...sampleData} />
    </SampleContainer>
  );
};

// スタイル定義
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  @media (max-width: 600px) {
    padding: 10px;
  }
`;

const Title = styled.h3`
  margin-bottom: 20px;
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
  width: 100%;
  @media (max-width: 600px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const Label = styled.label`
  margin-right: 10px;
  width: 100px;
  @media (max-width: 600px) {
    margin-bottom: 5px;
  }
`;

const Input = styled.input`
  padding: 5px;
  border-radius: 3px;
  border: 1px solid #ccc;
  width: 200px;
  @media (max-width: 600px) {
    width: 100%;
  }
`;

const ButtonContainer = styled.div`
  margin-top: 20px;
`;

const Button = styled.button<{ primary?: boolean }>`
  padding: 10px 20px;
  border-radius: 5px;
  border: none;
  margin-right: 10px;
  background-color: ${props => props.primary ? '#007bff' : '#f0f0f0'};
  color: ${props => props.primary ? '#fff' : '#333'};
  cursor: pointer;
`;

const SampleContainer = styled.div`
  margin-top: 40px;
`;

export default TransferCondition;