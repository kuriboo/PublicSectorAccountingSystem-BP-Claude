import React from 'react';
import styled from '@emotion/styled';

type WorkScheduleProps = {
  company: string;
  schedule: {
    date: string;
    dayOfWeek: string;
    startTime: string;
    endTime: string;
    breakTime: string;
    workingHours: string;
    requiredWorkingHours: string;
    overWorkHours: string;
  }[];
  memo: string;
};

const WorkSchedule: React.FC<WorkScheduleProps> = ({ company, schedule, memo }) => {
  return (
    <WorkScheduleWrapper>
      <CompanyName>{company}の調整入力(仕訳科目)</CompanyName>
      <TableWrapper>
        <Table>
          <thead>
            <tr>
              <HeaderCell>日付</HeaderCell>
              <HeaderCell>曜日</HeaderCell>
              <HeaderCell>始業</HeaderCell>
              <HeaderCell>終業</HeaderCell>
              <HeaderCell>休憩時間</HeaderCell>
              <HeaderCell>就業時間</HeaderCell>
              <HeaderCell>要就労方時間金額</HeaderCell>
              <HeaderCell>要就労方時間金額</HeaderCell>
            </tr>
          </thead>
          <tbody>
            {schedule.map((day, index) => (
              <tr key={index}>
                <Cell>{day.date}</Cell>
                <Cell>{day.dayOfWeek}</Cell>
                <Cell>{day.startTime}</Cell>
                <Cell>{day.endTime}</Cell>
                <Cell>{day.breakTime}</Cell>
                <Cell>{day.workingHours}</Cell>
                <Cell>{day.requiredWorkingHours}</Cell>
                <Cell>{day.overWorkHours}</Cell>
              </tr>
            ))}
          </tbody>
        </Table>
      </TableWrapper>
      <MemoLabel>事務所報告</MemoLabel>
      <Memo>{memo}</Memo>
      <ButtonWrapper>
        <ConfirmButton>確定</ConfirmButton>
        <CancelButton>終了</CancelButton>
      </ButtonWrapper>
    </WorkScheduleWrapper>
  );
};

// Styled components
const WorkScheduleWrapper = styled.div`
  font-family: sans-serif;
`;

const CompanyName = styled.h2`
  margin-bottom: 20px;
`;

const TableWrapper = styled.div`
  overflow-x: auto;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  
  th, td {
    border: 1px solid #ccc;
    padding: 8px;
    text-align: center;
  }

  th {
    background-color: #f0f0f0;
  }
`;

const HeaderCell = styled.th`
  min-width: 100px;
`;

const Cell = styled.td`
  min-width: 100px;
`;

const MemoLabel = styled.div`
  margin-top: 20px;
`;

const Memo = styled.div`
  white-space: pre-wrap;
`;

const ButtonWrapper = styled.div`
  margin-top: 20px;
  text-align: center;
`;

const Button = styled.button`
  margin: 0 10px;
  padding: 5px 20px;
  font-size: 16px;
`;

const ConfirmButton = styled(Button)`
  background-color: #007bff;
  color: white;
  border: none;
`;

const CancelButton = styled(Button)`
  background-color: #6c757d;
  color: white;  
  border: none;
`;

// Usage example
const App: React.FC = () => {
  const sampleData: WorkScheduleProps = {
    company: '1000円丸め調整入力',
    schedule: [
      {
        date: '平成29年6月1日',
        dayOfWeek: '木',
        startTime: '',
        endTime: '',
        breakTime: '',
        workingHours: '2,813,456,000',
        requiredWorkingHours: '2,813,456,818',
        overWorkHours: '0',
      },
      // ...
    ],
    memo: `
      ・歓
      ・項
      ・目
      ・節
      ・細節
      ・明細節
    `,
  };

  return <WorkSchedule {...sampleData} />;
};

export default App;