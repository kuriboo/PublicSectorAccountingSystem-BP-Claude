import React from 'react';
import styled from 'styled-components';

// 貸借計算解除のプロパティ型定義
type LendingCalcProps = {
  fromDate?: string;
  toDate?: string;
  fromLending?: number;
  toLending?: number;
  fromBorrow?: number;
  toBorrow?: number;
  onClose?: () => void;
  onCancel?: () => void;
  onSubmit?: () => void;
};

// 貸借計算解除コンポーネント
const LendingCalc: React.FC<LendingCalcProps> = ({
  fromDate = '',
  toDate = '',
  fromLending = 0,
  toLending = 0,
  fromBorrow = 0,
  toBorrow = 0,
  onClose,
  onCancel,
  onSubmit,
}) => {
  return (
    <Container>
      <Title>貸借計算解除</Title>
      <DateContainer>
        <Label>借方計算年度</Label>
        <Value>{fromDate}</Value>
        <Label>〜</Label>
        <Value>{toDate}</Value>
      </DateContainer>
      <RangeContainer>
        <RangeItem>
          <RangeLabel>当日繰越</RangeLabel>
          <RangeValue>{fromLending}</RangeValue>
          <RangeLabel>〜</Label>
          <RangeValue>{toLending}</RangeValue>
        </RangeItem>
        <RangeItem>
          <RangeLabel>資産番号</RangeLabel>
          <RangeValue>{fromBorrow}</RangeValue>
          <RangeLabel>〜</RangeLabel>
          <RangeValue>{toBorrow}</RangeValue>
        </RangeItem>
      </RangeContainer>
      <NoteContainer>
        <NoteTitle>更新資産数</NoteTitle>
        <NoteText>
          各資産について、指定した年度の借期計算を解除します。
          当年度に繰越処理を行った資産については、借期計算できません。
          該当資産の借期計算を行いたい場合は、先に繰越登録内容を削除してください。
        </NoteText>
      </NoteContainer>
      <ButtonContainer>
        <Button onClick={onClose}>エラー確認</Button>
        <Button onClick={onCancel}>クリア</Button>
        <SubmitButton onClick={onSubmit}>終了</SubmitButton>
      </ButtonContainer>
    </Container>
  );
};

// スタイリング
const Container = styled.div`
  background-color: #f0f0f0;
  padding: 16px;
  width: 100%;
  box-sizing: border-box;
`;

const Title = styled.h2`
  font-size: 18px;
  margin-bottom: 16px;
`;

const DateContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
`;

const Label = styled.span`
  font-weight: bold;
  margin-right: 8px;
`;

const Value = styled.span`
  margin-right: 8px;
`;

const RangeContainer = styled.div`
  margin-bottom: 16px;
`;

const RangeItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
`;

const RangeLabel = styled.span`
  font-weight: bold;
  margin-right: 8px;
`;

const RangeValue = styled.span`
  margin-right: 8px;
`;

const NoteContainer = styled.div`
  margin-bottom: 16px;
`;

const NoteTitle = styled.h3`
  font-size: 16px;
  margin-bottom: 8px;
`;

const NoteText = styled.p`
  font-size: 14px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const Button = styled.button`
  padding: 8px 16px;
  margin-left: 8px;
  border: none;
  border-radius: 4px;
  background-color: #ccc;
  color: #333;
  cursor: pointer;

  &:hover {
    background-color: #999;
    color: #fff;
  }
`;

const SubmitButton = styled(Button)`
  background-color: #007bff;
  color: #fff;

  &:hover {
    background-color: #0056b3;
  }
`;

// 使用例
const App: React.FC = () => {
  return (
    <div>
      <LendingCalc
        fromDate="平成29年09月12日"
        toDate="平成29年09月12日"
        fromLending={1111111}
        toLending={999999999}
        fromBorrow={0}
        toBorrow={9999999999}
        onClose={() => console.log('エラー確認クリック')}
        onCancel={() => console.log('クリアクリック')}  
        onSubmit={() => console.log('終了クリック')}
      />
    </div>
  );
};

export default App;