import React from 'react';
import styled from '@emotion/styled';

type CompanyInfoProps = {
  company: string;
  jobType: string;
  location: string;
};

type JobDetailProps = {
  jobTitle: string;
  jobDescription: string;
  peopleCount: number;
  prefecture: string;
  nearestStation: string;
  salary: string;
  workingDays: number;
  workingHours: string;
  selectionProcess: string;
};

type JobPostingProps = {
  companyInfo: CompanyInfoProps;
  jobDetail: JobDetailProps;
};

const Container = styled.div`
  font-family: Arial, sans-serif;
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  box-sizing: border-box;

  @media (max-width: 600px) {
    padding: 10px;
  }
`;

const CompanyInfo = styled.div`
  margin-bottom: 20px;
  padding: 10px;
  border: 1px solid #ccc;
`;

const JobDetail = styled.div`
  padding: 10px;
  border: 1px solid #ccc;
`;

const Field = styled.div`
  margin-bottom: 10px;
`;

const Label = styled.span`
  font-weight: bold;
`;

const Value = styled.span`
  margin-left: 10px;
`;

const JobPosting: React.FC<JobPostingProps> = ({ companyInfo, jobDetail }) => {
  return (
    <Container>
      <CompanyInfo>
        <Field>
          <Label>事業所所在地:</Label>
          <Value>{companyInfo.company || '東京都行政市'}</Value>
        </Field>
        <Field>
          <Label>事業内容:</Label>
          <Value>{companyInfo.jobType || '不明'}</Value>
        </Field>
        <Field>
          <Label>管理者名:</Label>
          <Value>{companyInfo.location || '行政 太郎'}</Value>
        </Field>
      </CompanyInfo>

      <JobDetail>
        <Field>
          <Label>人口区分:</Label>
          <Value>{jobDetail.peopleCount || 5}万人以上〜{jobDetail.peopleCount || 10}万人未満</Value>
        </Field>
        <Field>
          <Label>経営主体:</Label>
          <Value>{jobDetail.prefecture || '市営'}</Value>
        </Field>
        <Field>
          <Label>黒・赤字別:</Label>
          <Value>{jobDetail.nearestStation || '経常利益を生じた事業（黒字）'}</Value>
        </Field>
        <Field>
          <Label>現場別:</Label>
          <Value>{jobDetail.salary || 5}万人以上〜{jobDetail.salary || 10}万人未満</Value>
        </Field>
        <Field>
          <Label>流域下水道接続関係:</Label>
          <Value>{jobDetail.workingDays || '単独で終末処理を行っている事業'}</Value>
        </Field>
        <Field>
          <Label>排除方式別:</Label>
          <Value>{jobDetail.workingHours || '合流・分流併用'}</Value>
        </Field>
        <Field>
          <Label>供用開始年:</Label>
          <Value>{jobDetail.selectionProcess || '平成元年度以前'}</Value>
        </Field>
        <Field>
          <Label>会計事位:</Label>
          <Value>{jobDetail.jobTitle || '会計1'}</Value>
        </Field>
      </JobDetail>
    </Container>
  );
};

// Usage example
const App: React.FC = () => {
  const companyInfo: CompanyInfoProps = {
    company: '東京都港区',
    jobType: '下水道事業',
    location: '港区 次郎',
  };

  const jobDetail: JobDetailProps = {
    jobTitle: '会計2',
    jobDescription: '',
    peopleCount: 10,
    prefecture: '県営',
    nearestStation: '経常赤字事業（赤字）',
    salary: '10',
    workingDays: 4,
    workingHours: '分流・合流併用',
    selectionProcess: '平成5年度以降',
  };

  return <JobPosting companyInfo={companyInfo} jobDetail={jobDetail} />;
};

export default App;