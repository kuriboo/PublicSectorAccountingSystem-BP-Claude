import React from 'react';
import styled from '@emotion/styled';

// 総勘定合計表コンポーネントのPropsの型定義
type GeneralLedgerSummaryProps = {
  startDate: string;
  endDate: string;
  executionDate: string;
  workType: '日' | '節' | '細節' | '明細';
  specifyAttendance: boolean;
};

// 総勘定合計表コンポーネント
const GeneralLedgerSummary: React.FC<GeneralLedgerSummaryProps> = ({
  startDate = '',
  endDate = '',
  executionDate = '',
  workType = '日',
  specifyAttendance = false,
}) => {
  return (
    <Container>
      <Title>総勘定合計表</Title>
      <DateRangeContainer>
        <DateLabel>範囲指定</DateLabel>
        <DateInput type="text" value={startDate} readOnly />
        <DateRange>~</DateRange>
        <DateInput type="text" value={endDate} readOnly />
      </DateRangeContainer>
      <WorkTypeContainer>
        <WorkTypeLabel>作表区分</WorkTypeLabel>
        <WorkTypeOption>
          <input type="radio" checked={workType === '日'} readOnly /> 日
        </WorkTypeOption>
        <WorkTypeOption>
          <input type="radio" checked={workType === '節'} readOnly /> 節
        </WorkTypeOption>
        <WorkTypeOption>
          <input type="radio" checked={workType === '細節'} readOnly /> 細節
        </WorkTypeOption>
        <WorkTypeOption>
          <input type="radio" checked={workType === '明細'} readOnly /> 明細
        </WorkTypeOption>
      </WorkTypeContainer>
      <AttendanceContainer>
        <AttendanceLabel>決算仕訳</AttendanceLabel>
        <AttendanceOption>
          <input type="radio" checked={specifyAttendance} readOnly /> 含む
        </AttendanceOption>
        <AttendanceOption>
          <input type="radio" checked={!specifyAttendance} readOnly /> 含まない
        </AttendanceOption>
      </AttendanceContainer>
      <ExecutionDateContainer>
        <ExecutionDateLabel>行政市事業会計 最高権限 管理者 行政 太郎</ExecutionDateLabel>
        <ExecutionDate>令和05年07月24日</ExecutionDate>
      </ExecutionDateContainer>
    </Container>
  );
};

// スタイリング
const Container = styled.div`
  font-family: sans-serif;
  width: 100%;
  padding: 20px;
  box-sizing: border-box;

  @media (max-width: 600px) {
    padding: 10px;
  }
`;

const Title = styled.h2`
  margin: 0 0 20px;

  @media (max-width: 600px) {
    font-size: 18px;
  }
`;

const DateRangeContainer = styled.div`
  margin-bottom: 15px;
  display: flex;
  align-items: center;

  @media (max-width: 600px) {
    flex-wrap: wrap;
  }
`;

const DateLabel = styled.div`
  margin-right: 5px;

  @media (max-width: 600px) {
    width: 100%;
  }
`;

const DateInput = styled.input`
  margin: 0 5px;
  padding: 3px;
  width: 100px;

  @media (max-width: 600px) {
    margin: 5px 0;
  }
`;

const DateRange = styled.span`
  margin: 0 5px;
`;

const WorkTypeContainer = styled.div`
  margin-bottom: 10px;
  display: flex;
  align-items: center;

  @media (max-width: 600px) {
    flex-wrap: wrap;
  }
`;

const WorkTypeLabel = styled.div`
  margin-right: 10px;
  
  @media (max-width: 600px) {
    width: 100%;
  }
`;

const WorkTypeOption = styled.label`
  margin-right: 10px;

  @media (max-width: 600px) {
    margin: 5px 10px 5px 0;
  }
`;

const AttendanceContainer = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;

  @media (max-width: 600px) {  
    flex-wrap: wrap;
  }
`;

const AttendanceLabel = styled.div`
  margin-right: 10px;

  @media (max-width: 600px) {
    width: 100%;
  }
`;

const AttendanceOption = styled.label`
  margin-right: 10px;

  @media (max-width: 600px) {
    margin: 5px 10px 5px 0;
  }  
`;

const ExecutionDateContainer = styled.div`
  text-align: right;
`;

const ExecutionDateLabel = styled.div`
  font-size: 14px;

  @media (max-width: 600px) {
    font-size: 12px;
  }
`;

const ExecutionDate = styled.div`
  font-size: 14px;
  
  @media (max-width: 600px) {
    font-size: 12px;
  }
`;

// 使用例
const App: React.FC = () => {
  return (
    <GeneralLedgerSummary 
      startDate="令和04年04月01日"
      endDate="令和05年03月31日"
      executionDate="令和05年07月24日"
      workType="日"
      specifyAttendance={true}
    />
  );
};

export default App;