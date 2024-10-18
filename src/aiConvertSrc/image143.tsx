import React from 'react';
import styled from '@emotion/styled';

type FixedTermCapitalManagementSystemProps = {
  currentFiscalYear: number;
  company: string;
  department: string;
  section: string;
  processingDate: string;
};

const Container = styled.div`
  background-color: #f0f0f0;
  padding: 16px;
  width: 100%;
  box-sizing: border-box;

  @media (min-width: 768px) {
    max-width: 600px;
    margin: 0 auto;
  }
`;

const Header = styled.div`
  margin-bottom: 16px;
`;

const Title = styled.h2`
  font-size: 20px;
  margin: 0;

  @media (min-width: 768px) {
    font-size: 24px;
  }
`;

const CurrentFiscalYear = styled.p`
  font-size: 14px;
  color: #666;
  margin: 8px 0 0;
`;

const InfoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 8px;
  margin-bottom: 16px;
`;

const InfoItem = styled.div`
  background-color: #fff;
  padding: 8px;
  border-radius: 4px;
`;

const InfoLabel = styled.p`
  font-size: 14px;
  color: #666;
  margin: 0;
`;

const InfoValue = styled.p`
  font-size: 16px;
  font-weight: bold;
  margin: 4px 0 0;
`;

const ProcessingDateContainer = styled.div`
  background-color: #fff;
  padding: 16px;
  border-radius: 4px;
`;

const ProcessingDateLabel = styled.p`
  font-size: 14px;
  color: #666;
  margin: 0;
`;

const ProcessingDate = styled.p`
  font-size: 16px;
  font-weight: bold;
  margin: 4px 0 0;
`;

const FixedTermCapitalManagementSystem: React.FC<FixedTermCapitalManagementSystemProps> = ({
  currentFiscalYear,
  company,
  department,
  section,
  processingDate,
}) => {
  return (
    <Container>
      <Header>
        <Title>固定資産年次更新取消</Title>
        <CurrentFiscalYear>行政水道事業会計32G</CurrentFiscalYear>
      </Header>
      <InfoGrid>
        <InfoItem>
          <InfoLabel>当期会計年度</InfoLabel>
          <InfoValue>{currentFiscalYear}年度</InfoValue>
        </InfoItem>
        <InfoItem>
          <InfoLabel>前期会計年度</InfoLabel>
          <InfoValue>{currentFiscalYear - 1}年度</InfoValue>
        </InfoItem>
      </InfoGrid>
      <ProcessingDateContainer>
        <ProcessingDateLabel>処理概要</ProcessingDateLabel>
        <ProcessingDate>{processingDate}</ProcessingDate>
      </ProcessingDateContainer>
    </Container>
  );
};

export default FixedTermCapitalManagementSystem;

// Usage example
const App: React.FC = () => {
  return (
    <FixedTermCapitalManagementSystem
      currentFiscalYear={30}
      company="株式会社〇〇"
      department="管理部"
      section="管理課"
      processingDate="平成30年度の処理会計年度を取り消し、平成29年度へ戻す処理を行います。
異動データを含め、年次更新後に登録更新された固定資産データは全て削除されます。
また、予測データは全て削除されます。
複数年度を遡る処理は出来ません。
年次更新取消処理を行うまでは、各異動処理及びマスタメンテナンスによる
        固定資産データの更新を行わないでください。"
    />
  );
};