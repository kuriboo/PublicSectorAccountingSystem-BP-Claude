import React from 'react';
import styled from 'styled-components';

// 特定収入充当表収入項目設定コピーコンポーネントのプロパティ型定義
interface CopyProjectSettingsProps {
  fromDate: string;
  toDate: string;
}

// 特定収入充当表収入項目設定コピーコンポーネント
const CopyProjectSettings: React.FC<CopyProjectSettingsProps> = ({ fromDate, toDate }) => {
  return (
    <Container>
      <Title>特定収入充当表収入項目設定コピー</Title>
      <DateRange>
        <DateLabel>譲渡期間</DateLabel>
        <FromDate>{fromDate}</FromDate>
        <Separator>〜</Separator>
        <ToDate>{toDate}</ToDate>
      </DateRange>
      <ProjectType>
        <ProjectTypeLabel>前年度</ProjectTypeLabel>
        <ProjectTypeValue>平成31年度</ProjectTypeValue>
      </ProjectType>
      <ProjectPeriod>
        <ProjectPeriodLabel>譲渡期間</ProjectPeriodLabel>
        <FromPeriod>{fromDate}</FromPeriod>
        <PeriodSeparator>〜</PeriodSeparator>
        <ToPeriod>{toDate}</ToPeriod>
      </ProjectPeriod>
      <Message>前年度の特定収入充当項目マスタを、処理対象年度にコピーします。</Message>
      <ButtonContainer>
        <OKButton>OK</OKButton>
        <CancelButton>終了</CancelButton>
      </ButtonContainer>
    </Container>
  );
};

// スタイリング
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #f0f0f0;
  border-radius: 5px;
  font-family: Arial, sans-serif;
`;

const Title = styled.h2`
  margin-bottom: 20px;
  font-size: 18px;
  font-weight: bold;
`;

const DateRange = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const DateLabel = styled.span`
  margin-right: 10px;
`;

const FromDate = styled.span`
  margin-right: 5px;
`;

const Separator = styled.span`
  margin-right: 5px;
`;

const ToDate = styled.span``;

const ProjectType = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const ProjectTypeLabel = styled.span`
  margin-right: 10px;
`;

const ProjectTypeValue = styled.span``;

const ProjectPeriod = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const ProjectPeriodLabel = styled.span`
  margin-right: 10px;
`;

const FromPeriod = styled.span`
  margin-right: 5px;
`;

const PeriodSeparator = styled.span`
  margin-right: 5px;
`;

const ToPeriod = styled.span``;

const Message = styled.p`
  margin-bottom: 20px;
  font-size: 14px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const Button = styled.button`
  padding: 8px 16px;
  margin: 0 10px;
  font-size: 14px;
  border-radius: 4px;
  cursor: pointer;
`;

const OKButton = styled(Button)`
  background-color: #007bff;
  color: #fff;
  border: none;
`;

const CancelButton = styled(Button)`
  background-color: #f0f0f0;
  color: #333;
  border: 1px solid #ccc;
`;

// 使用例
const App: React.FC = () => {
  return (
    <div>
      <h1>特定収入充当表収入項目設定コピー</h1>
      <CopyProjectSettings fromDate="平成31年04月01日" toDate="令和02年03月31日" />
    </div>
  );
};

export default App;