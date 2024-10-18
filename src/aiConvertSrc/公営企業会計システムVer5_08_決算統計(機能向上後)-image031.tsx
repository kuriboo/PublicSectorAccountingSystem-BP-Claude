import React from 'react';
import styled from '@emotion/styled';

type DecisionSummaryProps = {
  year: number;
  step1Title: string;
  step1Detail: string;
  step1File: string;
  step1Execution: string;
  step2Title: string;
  step2Detail: string;
  step2File: string;
  step2Execution: string;
};

const DecisionSummary: React.FC<DecisionSummaryProps> = ({
  year,
  step1Title,
  step1Detail,
  step1File,
  step1Execution,
  step2Title,
  step2Detail,
  step2File,
  step2Execution,
}) => {
  return (
    <Container>
      <Title>決算統計 ①データ取込み {year} 年度</Title>
      <Step>
        <StepTitle>{step1Title}</StepTitle>
        <StepDetail>{step1Detail}</StepDetail>
        {step1File && <FileLink href={step1File}>ファイル選択</FileLink>}
        {step1Execution && <ExecuteButton>取込実行</ExecuteButton>}
      </Step>
      <Step>
        <StepTitle>{step2Title}</StepTitle>
        <StepDetail>{step2Detail}</StepDetail>
        {step2File && <FileLink href={step2File}>ファイル選択</FileLink>}
        {step2Execution && <ExecuteButton>取込実行</ExecuteButton>}
      </Step>
    </Container>
  );
};

// Sample data for demonstration
const sampleData: DecisionSummaryProps = {
  year: 2020,
  step1Title: 'Step1. 振替・精算分類情報を取込みます。',
  step1Detail:
    '※企業会計システムの「KST1030 科目別振替性質マスター」を更新してCSV出力した振替・性質分類のマスターを取り込んでください。',
  step1File: 'path/to/step1/file',
  step1Execution: 'execute',
  step2Title: 'Step2. 科目情報を取込みます。',
  step2Detail:
    '※企業会計システムの「KST1030 科目別振替性質マスター」を更新してCSV出力した科目一覧を取り込んでください。既存の組づけ設定が科目情報に付加されている場合は⑧シートに展開されます。',
  step2File: 'path/to/step2/file',
  step2Execution: 'execute',
};

// Usage example
const UsageExample: React.FC = () => {
  return <DecisionSummary {...sampleData} />;
};

export default DecisionSummary;

// Styled components
const Container = styled.div`
  padding: 16px;
`;

const Title = styled.h2`
  font-size: 18px;
  margin-bottom: 16px;
`;

const Step = styled.div`
  margin-bottom: 24px;
`;

const StepTitle = styled.h3`
  font-size: 16px;
  margin-bottom: 8px;
`;

const StepDetail = styled.p`
  margin-bottom: 8px;
`;

const FileLink = styled.a`
  margin-right: 16px;
`;

const ExecuteButton = styled.button`
  padding: 8px 16px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;