import React from 'react';
import styled from 'styled-components';

// 会計選択データ出力画面のプロパティの型定義
interface AccountSelectionOutputProps {
  date: string;
  customerName: string;
  posNumber: string;
  storeNumber: string;
  storeName: string;
  cdNumber: string;
  adjustmentDate: string;
  correctionDate: string;
  regularPaymentDateFrom: string;
  regularPaymentDateTo: string;
  collectionPaymentDateFrom: string;
  collectionPaymentDateTo: string;
}

// 会計選択データ出力画面のコンポーネント
const AccountSelectionOutput: React.FC<AccountSelectionOutputProps> = ({
  date,
  customerName,
  posNumber,
  storeNumber,
  storeName,
  cdNumber,
  adjustmentDate,
  correctionDate,
  regularPaymentDateFrom,
  regularPaymentDateTo,
  collectionPaymentDateFrom,
  collectionPaymentDateTo,
}) => {
  return (
    <Container>
      <Title>会計選択データ出力</Title>
      <SectionTitle>出力設定</SectionTitle>
      <InputGroup>
        <Label>
          <Input type="radio" name="output" value="all" defaultChecked />
          すべて
        </Label>
        <Label>
          <Input type="radio" name="output" value="above" />
          上水
        </Label>
        <Label>
          <Input type="radio" name="output" value="below" />
          下水
        </Label>
      </InputGroup>
      <SectionTitle>前回出力履歴</SectionTitle>
      <InfoGroup>
        <InfoLabel>日時:</InfoLabel>
        <InfoValue>{date}</InfoValue>
      </InfoGroup>
      <InfoGroup>
        <InfoLabel>内容:</InfoLabel>
        <InfoValue>
          {customerName} {posNumber} {storeNumber} {storeName} {cdNumber}
        </InfoValue>
      </InfoGroup>
      <SectionTitle>更正</SectionTitle>
      <InputGroup>
        <Label>
          <Input type="checkbox" />
          調定CD
        </Label>
        <DateInputGroup>
          <DateInputLabel>調定年月</DateInputLabel>
          <DateInput value={adjustmentDate} readOnly />
        </DateInputGroup>
        <DateInputGroup>
          <DateInputLabel>調定修正日</DateInputLabel>
          <DateInput value={correctionDate} readOnly />
        </DateInputGroup>
      </InputGroup>
      <InputGroup>
        <Label>
          <Input type="checkbox" />
          調定更正
        </Label>
      </InputGroup>
      <SectionTitle>収納</SectionTitle>
      <DateRangeInputGroup>
        <DateInputLabel>収納年月日</DateInputLabel>
        <DateInput value={regularPaymentDateFrom} readOnly />
        <DateRangeSeparator>〜</DateRangeSeparator>
        <DateInput value={regularPaymentDateTo} readOnly />
      </DateRangeInputGroup>
      <DateRangeInputGroup>
        <DateInputLabel>収納処理年月日</DateInputLabel>
        <DateInput value={collectionPaymentDateFrom} readOnly />
        <DateRangeSeparator>〜</DateRangeSeparator>
        <DateInput value={collectionPaymentDateTo} readOnly />
      </DateRangeInputGroup>
      <ButtonGroup>
        <Button>ポータル</Button>
        <Button>ログアウト</Button>
        <Button primary>OK</Button>
        <Button>クリア</Button>
        <Button>終了</Button>
      </ButtonGroup>
    </Container>
  );
};

// サンプルデータ
const sampleData: AccountSelectionOutputProps = {
  date: '2017/09/19 23:24:59',
  customerName: '別集計',
  posNumber: 'H29.06〜H29.06',
  storeNumber: '2017/06/01〜2017/06/30',
  storeName: '東正',
  cdNumber: 'RyclnWN連携データ',
  adjustmentDate: '31 〜 31',
  correctionDate: '31 〜 31',
  regularPaymentDateFrom: '平成29年 9月21日',
  regularPaymentDateTo: '平成29年 9月21日',
  collectionPaymentDateFrom: '平成29年 9月21日',
  collectionPaymentDateTo: '平成29年 9月21日',
};

// サンプルコンポーネント
const App: React.FC = () => {
  return (
    <div>
      <h1>会計選択データ出力</h1>
      <AccountSelectionOutput {...sampleData} />
    </div>
  );
};

// スタイリング
const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 16px;
  max-width: 600px;
  margin: 0 auto;
`;

const Title = styled.h2`
  font-size: 24px;
  margin: 0;
`;

const SectionTitle = styled.h3`
  font-size: 18px;
  margin: 0;
`;

const InputGroup = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
`;

const Label = styled.label`
  display: flex;
  align-items: center;
  gap: 4px;
`;

const Input = styled.input``;

const InfoGroup = styled.div`
  display: flex;
  gap: 8px;
`;

const InfoLabel = styled.span`
  font-weight: bold;
`;

const InfoValue = styled.span``;

const DateInputGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const DateInputLabel = styled.span`
  white-space: nowrap;
`;

const DateInput = styled.input`
  width: 120px;
`;

const DateRangeInputGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const DateRangeSeparator = styled.span``;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 24px;
`;

const Button = styled.button<{ primary?: boolean }>`
  padding: 8px 16px;
  background-color: ${({ primary }) => (primary ? '#007bff' : '#f0f0f0')};
  color: ${({ primary }) => (primary ? '#fff' : '#333')};
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;

export default App;