import React from 'react';
import styled from '@emotion/styled';

type DecisionMakingProcessProps = {
  companyName: string;
  averageProcessingTime: number;
  processingMethod: string;
  processingPeriod: string;
  note: string;
};

const Container = styled.div`
  width: 100%;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #f5f5f5;
`;

const Title = styled.h2`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const CompanyInfo = styled.div`
  margin-bottom: 20px;
`;

const CompanyName = styled.p`
  font-size: 16px;
  font-weight: bold;
`;

const ProcessingInfo = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;

const ProcessingItem = styled.p`
  font-size: 14px;
`;

const Note = styled.p`
  font-size: 14px;
  line-height: 1.5;
  white-space: pre-wrap;
`;

const DecisionMakingProcess: React.FC<DecisionMakingProcessProps> = ({
  companyName,
  averageProcessingTime,
  processingMethod,
  processingPeriod,
  note,
}) => {
  return (
    <Container>
      <Title>決算確定処理</Title>
      <CompanyInfo>
        <CompanyName>{companyName}</CompanyName>
      </CompanyInfo>
      <ProcessingInfo>
        <ProcessingItem>当期会計年度: {averageProcessingTime}</ProcessingItem>
        <ProcessingItem>決算確定利用値区分: {processingMethod}</ProcessingItem>
      </ProcessingInfo>
      <ProcessingInfo>
        <ProcessingItem>処理概要</ProcessingItem>
      </ProcessingInfo>
      <Note>{note}</Note>
    </Container>
  );
};

// Usage example
const App: React.FC = () => {
  const data = {
    companyName: '行政市水道事業会計',
    averageProcessingTime: 29,
    processingMethod: '決算値を利用',
    processingPeriod: 'ぎょうせい太郎',
    note: '管理マスタの決算確定利用値区分を「決算値を利用」に更新します。\n\n6月確正以降の処理の時に前年の締越額を決算見込から決算値に切替えます。',
  };

  return (
    <div>
      <DecisionMakingProcess {...data} />
    </div>
  );
};

export default App;