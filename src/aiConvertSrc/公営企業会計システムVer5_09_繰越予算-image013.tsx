import React from 'react';
import styled from '@emotion/styled';

interface CompanyInfoProps {
  companyName: string;
  fiscalYearEndMonth: number;
  fiscalYearEndDay: number;
}

const CompanyInfo: React.FC<CompanyInfoProps> = ({
  companyName,
  fiscalYearEndMonth,
  fiscalYearEndDay,
}) => {
  // 会社名が空の場合は「会社名未設定」と表示
  const displayCompanyName = companyName ? companyName : '会社名未設定';

  // 決算月日が0の場合は「未設定」と表示
  const displayFiscalYearEnd = fiscalYearEndMonth && fiscalYearEndDay
    ? `${fiscalYearEndMonth}月${fiscalYearEndDay}日`
    : '未設定';

  return (
    <Container>
      <Title>会計基本処理</Title>
      <InfoWrapper>
        <InfoLabel>総勘定元帳事業会計</InfoLabel>
        <InfoValue>{displayCompanyName}</InfoValue>
      </InfoWrapper>
      <InfoWrapper>
        <InfoLabel>行政市水道事業会計</InfoLabel>
        <InfoValue>平成29年09月05日</InfoValue>
      </InfoWrapper>
      <InfoWrapper>
        <InfoLabel>平成29年</InfoLabel>
        <InfoValue>4月</InfoValue>
      </InfoWrapper>
      <ButtonWrapper>
        <Button>OK</Button>
        <Button>終了</Button>
      </ButtonWrapper>
    </Container>
  );
};

// サンプルデータを使用した表示用コンポーネント
const SampleCompanyInfo: React.FC = () => {
  return (
    <CompanyInfo
      companyName="せよう せい太郎"
      fiscalYearEndMonth={9}
      fiscalYearEndDay={5}
    />
  );
};

// スタイリング用のコンポーネント
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

const InfoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 10px;
`;

const InfoLabel = styled.p`
  font-weight: bold;
`;

const InfoValue = styled.p``;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  margin-top: 20px;
`;

const Button = styled.button`
  margin-left: 10px;
  padding: 5px 10px;
  border: none;
  border-radius: 5px;
  background-color: #f0f0f0;
  cursor: pointer;

  &:hover {
    background-color: #e0e0e0;
  }
`;

export default CompanyInfo;