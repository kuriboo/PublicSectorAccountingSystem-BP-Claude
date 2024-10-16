import React from 'react';
import styled from '@emotion/styled';

type ReservationCompletionProps = {
  reservationNumber: string;
  branchName: string;
  date: string;
};

const Container = styled.div`
  background-color: #f0f0f0;
  padding: 20px;
  border-radius: 8px;
  max-width: 600px;
  margin: 0 auto;

  @media (max-width: 600px) {
    padding: 10px;
  }
`;

const Title = styled.h2`
  font-size: 24px;
  color: #333;
  margin-bottom: 20px;

  @media (max-width: 600px) {
    font-size: 20px;
    margin-bottom: 10px;
  }
`;

const InfoText = styled.p`
  font-size: 18px;
  color: #555;
  margin-bottom: 10px;

  @media (max-width: 600px) {
    font-size: 16px;
  }
`;

const BranchInfo = styled.div`
  margin-bottom: 20px;
`;

const BranchLabel = styled.span`
  font-weight: bold;
`;

const InstructionList = styled.ol`
  margin-left: 20px;
`;

const InstructionItem = styled.li`
  margin-bottom: 10px;
`;

const ButtonContainer = styled.div`
  text-align: center;
  margin-top: 30px;
`;

const Button = styled.button`
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 10px 20px;
  font-size: 18px;
  border-radius: 4px;
  cursor: pointer;
  margin: 0 10px;

  &:hover {
    background-color: #0056b3;
  }
`;

const ReservationCompletion: React.FC<ReservationCompletionProps> = ({
  reservationNumber,
  branchName,
  date,
}) => {
  return (
    <Container>
      <Title>予算仕訳構成比率一括初期設定</Title>
      <InfoText>予算番号: {reservationNumber}</InfoText>
      <BranchInfo>
        <BranchLabel>予算編成区分</BranchLabel>: {branchName}
      </BranchInfo>
      <InstructionList>
        <InstructionItem>当機能は、予算科目に仕訳コードの構成比の初期設定ができます。</InstructionItem>
        <InstructionItem>
          予算科目毎下の先頭の仕訳コードに「残り全て」と、他の仕訳コードには「集計対象外」を設定します。
        </InstructionItem>
        <InstructionItem>構成比設定がわれていない予算科目を処理対象としますので、既に構成比設定されている予算科目は構成比の変更はありません。</InstructionItem>
      </InstructionList>
      <ButtonContainer>
        <Button>OK</Button>
        <Button>クリア</Button>
        <Button>終了</Button>
      </ButtonContainer>
    </Container>
  );
};

export default ReservationCompletion;

// Usage example
const App: React.FC = () => {
  return (
    <div>
      <ReservationCompletion
        reservationNumber="H29予算"
        branchName="当初予算"
        date="平成29年08月30日"
      />
    </div>
  );
};