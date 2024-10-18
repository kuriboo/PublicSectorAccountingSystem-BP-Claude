import React from 'react';
import styled from 'styled-components';

type ComparisonTableProps = {
  startDate: string;
  endDate: string;
  company: string;
  branch: string;
  basePay: string;
  yearsOfService: number;
  totalWorkingMonths: number;
  averageWorkingDays: number;
  closingDate: string;
  approvalStatus: string;
  compareStartDate: string;
  compareEndDate: string;
  compareCompany: string;
  compareBranch: string;
  compareBasePay: string;
  compareYearsOfService: number;
  compareTotalWorkingMonths: number;
  compareAverageWorkingDays: number;
  compareClosingDate: string;
  compareApprovalStatus: string;
};

const ComparisonTable: React.FC<ComparisonTableProps> = ({
  startDate,
  endDate,
  company,
  branch,
  basePay,
  yearsOfService,
  totalWorkingMonths,
  averageWorkingDays,
  closingDate,
  approvalStatus,
  compareStartDate,
  compareEndDate,
  compareCompany,
  compareBranch,
  compareBasePay,
  compareYearsOfService,
  compareTotalWorkingMonths,
  compareAverageWorkingDays,
  compareClosingDate,
  compareApprovalStatus,
}) => {
  return (
    <TableWrapper>
      <Title>対前年度比較表</Title>
      <DateRange>
        作成日：{startDate}～{endDate}
      </DateRange>
      <TableHeader>会計年度 ・ 当年度 ・ 次年度</TableHeader>
      <TableGrid>
        <TableColumn>
          <TableLabel>年度</TableLabel>
          <TableValue>{startDate.split('-')[0]}年度</TableValue>

          <TableLabel>金額区分</TableLabel>
          <TableValue>{company}</TableValue>

          <TableLabel>補正回数</TableLabel>
          <TableValue>{totalWorkingMonths}回</TableValue>

          <TableLabel>対象月</TableLabel>
          <TableValue>{closingDate.split('-')[1]}月</TableValue>

          <TableLabel>決算見込回数</TableLabel>
          <TableValue>{averageWorkingDays}回</TableValue>

          <TableLabel>
            <Radio type="radio" checked={approvalStatus === '見積要求額'} readOnly />
            見積要求額
          </TableLabel>
          <TableLabel>
            <Radio type="radio" checked={approvalStatus === '査定額'} readOnly />
            査定額
          </TableLabel>
        </TableColumn>

        <TableColumn>
          <TableLabel>年度</TableLabel>
          <TableValue>{compareStartDate.split('-')[0]}年度</TableValue>

          <TableLabel>金額区分</TableLabel>
          <TableValue>{compareCompany}</TableValue>

          <TableLabel>補正回数</TableLabel>
          <TableValue>{compareTotalWorkingMonths}回</TableValue>

          <TableLabel>対象月</TableLabel>
          <TableValue>{compareClosingDate.split('-')[1]}月</TableValue>

          <TableLabel>決算見込回数</TableLabel>
          <TableValue>{compareAverageWorkingDays}回</TableValue>

          <TableLabel>
            <Radio type="radio" checked={compareApprovalStatus === '見積要求額'} readOnly />
            見積要求額
          </TableLabel>
          <TableLabel>
            <Radio type="radio" checked={compareApprovalStatus === '査定額'} readOnly />
            査定額
          </TableLabel>
        </TableColumn>
      </TableGrid>
      <Notes>
        年度には、その列にどの年度のデータを印字するかを指定してください。
        比較したい金額の区分をA列、B列にそれぞれ指定します。
      </Notes>
    </TableWrapper>
  );
};

// Styling
const TableWrapper = styled.div`
  font-family: Arial, sans-serif;
  background: #f0f0f0;
  padding: 16px;
  margin-bottom: 20px;
`;

const Title = styled.h2`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 8px;
`;

const DateRange = styled.p`
  font-size: 14px;
  margin-bottom: 16px;
`;

const TableHeader = styled.div`
  background: #d0d0d0;
  padding: 8px 0;
  text-align: center;
  font-weight: bold;
`;

const TableGrid = styled.div`
  display: flex;
  justify-content: space-between;
`;

const TableColumn = styled.div`
  flex-basis: 48%;
`;

const TableLabel = styled.div`
  display: flex;
  align-items: center;
  margin: 8px 0;
`;

const TableValue = styled.div`
  font-weight: bold;
  margin: 8px 0;
`;

const Radio = styled.input`
  margin-right: 8px;
`;

const Notes = styled.p`
  margin-top: 16px;
  font-size: 12px;
`;

// Sample usage
const ComparisonTableSample = () => {
  return (
    <ComparisonTable
      startDate="2022-06-23"
      endDate="2023-06-28"
      company="運用補成表(合計)"
      branch="001"
      basePay="当初予算"
      yearsOfService={1}
      totalWorkingMonths={2}
      averageWorkingDays={2}
      closingDate="2023-06"
      approvalStatus="見積要求額"
      compareStartDate="2021-06-23"
      compareEndDate="2022-06-28"
      compareCompany="決算見込"
      compareBranch="001"
      compareBasePay="当初予算"
      compareYearsOfService={1}
      compareTotalWorkingMonths={1}
      compareAverageWorkingDays={1}
      compareClosingDate="2022-06"
      compareApprovalStatus="査定額"
    />
  );
};

export default ComparisonTableSample;