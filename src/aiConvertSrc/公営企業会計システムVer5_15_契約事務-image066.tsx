import React from 'react';
import styled from '@emotion/styled';

type WorkerInfoProps = {
  workerId: string;
  workerName: string;
  workLocation: string;
  workType: string;
  contract: string;
};

type DateInfoProps = {
  startDate: string;
  endDate: string;
  middleDate: string;
  dueDate: string;
};

type InspectionInfoProps = {
  inspectionDate: string;
  inspectionResult: string;
};

type WorkerDetailProps = {
  workerInfo: WorkerInfoProps;
  dateInfo: DateInfoProps;
  inspectionInfo: InspectionInfoProps;
};

const Container = styled.div`
  font-family: Arial, sans-serif;
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Title = styled.h2`
  margin-bottom: 20px;
`;

const InfoContainer = styled.div`
  margin-bottom: 20px;
`;

const InfoTitle = styled.h3`
  margin-bottom: 10px;
`;

const InfoItem = styled.div`
  margin-bottom: 5px;
`;

const DateContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

const DateItem = styled.div`
  flex: 1;
  min-width: 150px;
`;

const WorkerDetail: React.FC<WorkerDetailProps> = ({ workerInfo, dateInfo, inspectionInfo }) => {
  return (
    <Container>
      <Title>検査入力</Title>
      <InfoContainer>
        <InfoTitle>検査情報</InfoTitle>
        <InfoItem>工事番号: {workerInfo.workerId}</InfoItem>
        <InfoItem>工事名称: {workerInfo.workLocation}</InfoItem>
        <InfoItem>請負業者: {workerInfo.workerName}</InfoItem>
        <InfoItem>工事分類: {workerInfo.workType}</InfoItem>
        <InfoItem>工事場所: {workerInfo.contract}</InfoItem>
      </InfoContainer>

      <InfoContainer>
        <InfoTitle>検査情報</InfoTitle>
        <DateContainer>
          <DateItem>着工年月日: {dateInfo.startDate}</DateItem>
          <DateItem>完了年月日: {dateInfo.endDate}</DateItem>
          <DateItem>中間検査回数: {dateInfo.middleDate}</DateItem>
          <DateItem>年月日区分: {dateInfo.dueDate}</DateItem>
        </DateContainer>
      </InfoContainer>

      <InfoContainer>
        <InfoTitle>各種年月日</InfoTitle>
        <InfoItem>検査年月日: {inspectionInfo.inspectionDate}</InfoItem>
        <InfoItem>検査結果: {inspectionInfo.inspectionResult}</InfoItem>
      </InfoContainer>
    </Container>
  );
};

// サンプルデータ
const sampleData: WorkerDetailProps = {
  workerInfo: {
    workerId: '42910007',
    workerName: '土木一式工事',
    workLocation: '工事',
    workType: '最上川取水場取水井水位計設置工事',
    contract: '工事請負契約',
  },
  dateInfo: {
    startDate: '平成29年08月08日',
    endDate: '平成29年09月15日',
    middleDate: '2 回',
    dueDate: '3 回',
  },
  inspectionInfo: {
    inspectionDate: '平成29年08月08日',
    inspectionResult: '',
  },
};

const App: React.FC = () => {
  return (
    <div>
      <WorkerDetail {...sampleData} />
    </div>
  );
};

export default App;