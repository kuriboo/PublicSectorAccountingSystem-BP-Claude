import React from 'react';
import styled from 'styled-components';

interface CompanyDetailProps {
  companyName: string;
  detailText: string;
  workType: '有形' | '無形';
  date: string;
}

const CompanyDetail: React.FC<CompanyDetailProps> = ({
  companyName,
  detailText,
  workType,
  date,
}) => {
  return (
    <Container>
      <Title>固定資産明細表作成</Title>
      <CompanyName>{companyName}</CompanyName>
      <DetailText>{detailText}</DetailText>
      <DateText>作成年月日　{date}</DateText>
      <WorkTypeContainer>
        <WorkTypeLabel>書式区分</WorkTypeLabel>
        <WorkTypeRadioButton
          type="radio"
          name="workType"
          value="有形"
          checked={workType === '有形'}
          readOnly
        />
        <WorkTypeText>有形</WorkTypeText>
        <WorkTypeRadioButton
          type="radio"
          name="workType"
          value="無形"
          checked={workType === '無形'}
          readOnly
        />
        <WorkTypeText>無形</WorkTypeText>
      </WorkTypeContainer>
      <ButtonContainer>
        <Button>OK</Button>
        <Button>クリア</Button>
        <Button>終了</Button>
      </ButtonContainer>
    </Container>
  );
};

// Styled components
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  font-family: 'Meiryo', sans-serif;
`;

const Title = styled.h2`
  margin-bottom: 20px;
`;

const CompanyName = styled.p`
  font-weight: bold;
  margin-bottom: 10px;
`;

const DetailText = styled.p`
  margin-bottom: 10px;
`;

const DateText = styled.p`
  margin-bottom: 20px;
`;

const WorkTypeContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const WorkTypeLabel = styled.label`
  margin-right: 10px;
`;

const WorkTypeRadioButton = styled.input`
  margin-right: 5px;
`;

const WorkTypeText = styled.span`
  margin-right: 10px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const Button = styled.button`
  padding: 10px 20px;
  margin: 0 10px;
  font-size: 16px;
  cursor: pointer;
`;

// Sample usage
const App: React.FC = () => {
  return (
    <CompanyDetail
      companyName="株式会社 予算・会計担当 ぎょうせい太郎"
      detailText="総務課 予算・会計担当 ぎょうせい太郎"
      workType="有形"
      date="平成29年09月12日"
    />
  );
};

export default App;