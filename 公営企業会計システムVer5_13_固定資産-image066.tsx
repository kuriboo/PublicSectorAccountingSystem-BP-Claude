import React from 'react';
import styled from '@emotion/styled';

type CompanyInfoProps = {
  fiscalYear: string;
  year: string;
  currentTerm: string;
  previousTerm: string;
  note: string;
};

const CompanyInfo: React.FC<CompanyInfoProps> = ({
  fiscalYear,
  year,
  currentTerm,
  previousTerm,
  note,
}) => {
  return (
    <Container>
      <Title>年次更新</Title>
      <InfoContainer>
        <InfoItem>
          <InfoLabel>当期会計年度</InfoLabel>
          <InfoValue>{currentTerm} 年度</InfoValue>
        </InfoItem>
        <InfoItem>
          <InfoLabel>次期会計年度</InfoLabel>
          <InfoValue>{previousTerm} 年度</InfoValue>
        </InfoItem>
      </InfoContainer>
      <NoteContainer>
        <NoteText>{note}</NoteText>
      </NoteContainer>
      <ButtonContainer>
        <CancelButton>キャンセル</CancelButton>
        <ConfirmButton>OK</ConfirmButton>
      </ButtonContainer>
    </Container>
  );
};

const Container = styled.div`
  background-color: #f0f0f0;
  padding: 20px;
  border-radius: 4px;
  width: 400px;
  margin: 0 auto;
`;

const Title = styled.h2`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 20px;
`;

const InfoContainer = styled.div`
  margin-bottom: 20px;
`;

const InfoItem = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;

const InfoLabel = styled.span`
  font-weight: bold;
`;

const InfoValue = styled.span``;

const NoteContainer = styled.div`
  margin-bottom: 20px;
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
  border-radius: 4px;
  font-size: 14px;
  cursor: pointer;
`;

const CancelButton = styled(Button)`
  background-color: #ccc;
  color: #fff;
  margin-right: 10px;
`;

const ConfirmButton = styled(Button)`
  background-color: #007bff;
  color: #fff;
`;

// サンプルデータを用いた使用例
const App: React.FC = () => {
  const sampleData: CompanyInfoProps = {
    fiscalYear: '令和29年09月12日',
    year: '平成29年',
    currentTerm: '平成29',
    previousTerm: '平成30',
    note: '平成29年度から平成30年度へ処理会計年度を更新します。\n債務計算処理終了後に実行して下さい。\n\nこの処理を行うと平成29年度の債務資産明細表等の出力はできません。\n決算処理終了後に実行して下さい。',
  };

  return <CompanyInfo {...sampleData} />;
};

export default App;