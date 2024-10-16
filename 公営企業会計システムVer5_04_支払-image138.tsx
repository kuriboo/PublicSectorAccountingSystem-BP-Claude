import React from 'react';
import styled from '@emotion/styled';

type TransferDetailProps = {
  transferDate: string;
  accountNumber: string;
  bankName: string;
  bankCode: string;
  isFdTransaction: boolean;
  group: string;
};

const TransferDetail: React.FC<TransferDetailProps> = ({
  transferDate,
  accountNumber,
  bankName,
  bankCode,
  isFdTransaction,
  group,
}) => {
  return (
    <Container>
      <Title>振込依頼書</Title>
      <DateContainer>
        <DateLabel>依頼日</DateLabel>
        <DateValue>{transferDate}</DateValue>
      </DateContainer>
      <DetailContainer>
        <DetailItem>
          <DetailLabel>振込依頼日</DetailLabel>
          <DetailValue>{transferDate}</DetailValue>
        </DetailItem>
        <DetailItem>
          <DetailLabel>振込日</DetailLabel>
          <DetailValue>{transferDate}</DetailValue>
        </DetailItem>
        <DetailItem>
          <DetailLabel>
            <input type="radio" checked={!isFdTransaction} readOnly /> 振込金融機関宛
          </DetailLabel>
          <DetailLabel>
            <input type="radio" checked={isFdTransaction} readOnly /> 銀行別改頁
          </DetailLabel>
        </DetailItem>
      </DetailContainer>
      <GroupContainer>
        <GroupLabel>グループ1&2</GroupLabel>
        <GroupValue>{group}</GroupValue>
      </GroupContainer>
      <ButtonContainer>
        <Button>OK</Button>
        <Button>クリア</Button>
        <Button>終了</Button>
      </ButtonContainer>
    </Container>
  );
};

const Container = styled.div`
  background-color: #f0f0f0;
  padding: 16px;
  width: 400px;
`;

const Title = styled.h2`
  text-align: center;
  margin-bottom: 16px;
`;

const DateContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 16px;
`;

const DateLabel = styled.span`
  font-weight: bold;
  margin-right: 8px;
`;

const DateValue = styled.span``;

const DetailContainer = styled.div`
  margin-bottom: 16px;
`;

const DetailItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
`;

const DetailLabel = styled.span`
  flex: 1;
`;

const DetailValue = styled.span`
  flex: 1;
  text-align: right;
`;

const GroupContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 16px;
`;

const GroupLabel = styled.span`
  font-weight: bold;
  margin-right: 8px;
`;

const GroupValue = styled.span``;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const Button = styled.button`
  margin-left: 8px;
`;

// Usage example
const App: React.FC = () => {
  return (
    <TransferDetail
      transferDate="平成29年06月17日"
      accountNumber="1234567890"
      bankName="三菱東京UFJ銀行"
      bankCode="0005"
      isFdTransaction={false}
      group="グループ1 & 2"
    />
  );
};

export default App;