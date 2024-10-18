import React from 'react';
import styled from '@emotion/styled';

interface PaymentScheduleProps {
  accountName: string;
  amountDate: string;
  givenDate: string;
  note: string;
}

const PaymentSchedule: React.FC<PaymentScheduleProps> = ({
  accountName,
  amountDate,
  givenDate,
  note,
}) => {
  return (
    <Container>
      <Title>給与預り金支払確定</Title>
      <InputContainer>
        <Label>給与支払確定日</Label>
        <Input type="text" value={amountDate} readOnly />
        <Button>表示</Button>
      </InputContainer>
      <DetailContainer>
        <LeftColumn>
          <DetailLabel>支払予定日</DetailLabel>
          <DetailValue>{givenDate}</DetailValue>
          <DetailLabel>起 案 日</DetailLabel>
          <DetailValue>{amountDate}</DetailValue>
        </LeftColumn>
        <RightColumn>
          <NoteLabel>処理概要</NoteLabel>
          <NoteValue>{note}</NoteValue>
        </RightColumn>
      </DetailContainer>
      <ButtonContainer>
        <CancelButton>クリア</CancelButton>
        <OkButton>OK</OkButton>
        <TransferButton>終了</TransferButton>
      </ButtonContainer>
    </Container>
  );
};

// Sample data for demonstration
const sampleData: PaymentScheduleProps = {
  accountName: '行政市水道事業会計 給湯燃 予算・会計担当 ぎょうせい太郎',
  amountDate: '平成29年09月19日',
  givenDate: '平成29年09月19日',
  note: '預り金支払のもとどなる給与支払の確定日を入力し、表示ボタンを押すことにより支払の対象となる控除項目が一覧表示されます。画面一覧より控除項目を選択し、預り金支払予定日および起案日を設定します。画面表示された控除項目に対し、いくつかの支払予定日を設定する必要がある場合は、一度OKボタンで登録してから次の預り金支払予定日の設定を行なってください。',
};

// Usage example
const App: React.FC = () => {
  return (
    <div>
      <h1>Payment Schedule</h1>
      <PaymentSchedule {...sampleData} />
    </div>
  );
};

export default App;

// Styles
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  font-family: sans-serif;
`;

const Title = styled.h2`
  margin-bottom: 20px;
`;

const InputContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const Label = styled.label`
  margin-right: 10px;
`;

const Input = styled.input`
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-right: 10px;
`;

const Button = styled.button`
  padding: 5px 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const DetailContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 20px;
`;

const LeftColumn = styled.div`
  flex: 1;
`;

const RightColumn = styled.div`
  flex: 1;
`;

const DetailLabel = styled.p`
  margin-bottom: 5px;
`;

const DetailValue = styled.p`
  margin-bottom: 10px;
`;

const NoteLabel = styled.p`
  margin-bottom: 5px;
`;

const NoteValue = styled.p`
  white-space: pre-wrap;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
`;

const CancelButton = styled(Button)`
  background-color: #6c757d;
  margin-right: 10px;
`;

const OkButton = styled(Button)`
  margin-right: 10px;
`;

const TransferButton = styled(Button)``;