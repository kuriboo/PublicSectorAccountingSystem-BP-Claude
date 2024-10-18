import React from 'react';
import styled from '@emotion/styled';

type JobDetails = {
  companyName: string;
  jobTitle: string;
  workDate: string;
  unit: string;
  salary: string;
  status: string;
}

type JobTableProps = {
  jobDetails: JobDetails[];
}

const JobTable: React.FC<JobTableProps> = ({ jobDetails }) => {
  return (
    <TableContainer>
      <TableHeader>
        <HeaderRow>
          <HeaderCell>予算明細名称</HeaderCell>
          <HeaderCell>積算基礎名称</HeaderCell>
          <HeaderCell>工事期日</HeaderCell>
          <HeaderCell>単価コード</HeaderCell>
          <HeaderCell>積算基礎金額</HeaderCell>
          <HeaderCell>数量</HeaderCell> 
          <HeaderCell>単位</HeaderCell>
        </HeaderRow>
      </TableHeader>
      <TableBody>
        {jobDetails.map((job, index) => (
          <TableRow key={index}>
            <TableCell>{job.companyName}</TableCell>
            <TableCell>{job.jobTitle}</TableCell>
            <TableCell>{job.workDate}</TableCell>
            <TableCell></TableCell>
            <TableCell>{job.salary}</TableCell>
            <TableCell></TableCell>
            <TableCell>{job.unit}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </TableContainer>
  );
};

// Styled Components
const TableContainer = styled.div`
  width: 100%;
  border: 1px solid #ccc;
  border-radius: 4px;
  overflow: hidden;
`;

const TableHeader = styled.div`
  background-color: #f0f0f0;
  font-weight: bold;
`;

const HeaderRow = styled.div`
  display: flex;
  border-bottom: 1px solid #ccc;
`;

const HeaderCell = styled.div`
  flex: 1;
  padding: 8px;
  text-align: center;
`;

const TableBody = styled.div``;

const TableRow = styled.div`
  display: flex;
  border-bottom: 1px solid #ccc;

  &:last-child {
    border-bottom: none;
  }
`;

const TableCell = styled.div`
  flex: 1;
  padding: 8px;
  text-align: center;
`;

// Sample Data
const sampleJobDetails: JobDetails[] = [
  {
    companyName: '工事会社A',
    jobTitle: '建築工事',
    workDate: '2023/05/01',
    unit: '式',
    salary: '1,000,000',
    status: '完了',
  },
  {
    companyName: '工事会社B',
    jobTitle: '電気工事',  
    workDate: '2023/06/15',
    unit: '式',
    salary: '500,000',
    status: '進行中',
  },
];

// Usage Example
const App: React.FC = () => {
  return (
    <div>
      <h1>積算詳細</h1>
      <JobTable jobDetails={sampleJobDetails} />
    </div>
  );
};

export default App;