import React from 'react';
import styled from '@emotion/styled';

type SampleData = {
  workCompany: string;
  workDuration: string;
}

type WorkExperienceProps = {
  /** 職歴データの配列 */
  data: SampleData[];
}

/** 職歴コンポーネント */
const WorkExperience: React.FC<WorkExperienceProps> = ({ data }) => {
  return (
    <Container>
      <Title>仕事経験</Title>
      {data.map((item, index) => (
        <WorkItem key={index}>
          <WorkCompany>{item.workCompany}</WorkCompany>
          <WorkDuration>{item.workDuration}</WorkDuration>
        </WorkItem>
      ))}
    </Container>
  );
};

const Container = styled.div`
  margin-bottom: 24px;
`;

const Title = styled.h2`
  font-size: 18px;
  margin-bottom: 8px;

  @media (min-width: 768px) {
    font-size: 24px;
  }
`;

const WorkItem = styled.div`
  margin-bottom: 16px;
`;

const WorkCompany = styled.div`
  font-size: 16px;
  font-weight: bold;

  @media (min-width: 768px) {
    font-size: 18px;
  }
`;

const WorkDuration = styled.div`
  font-size: 14px;
  color: #666;

  @media (min-width: 768px) {
    font-size: 16px;
  }
`;

/** サンプルデータを用いた職歴コンポーネントの使用例 */
const WorkExperienceSample: React.FC = () => {
  const sampleData: SampleData[] = [
    {
      workCompany: '株式会社ABC',
      workDuration: '2018年4月〜現在',
    },
    {
      workCompany: '株式会社XYZ',
      workDuration: '2015年4月〜2018年3月',
    },
  ];

  return (
    <div>
      <h1>職歴サンプル</h1>
      <WorkExperience data={sampleData} />
    </div>
  );
};

export default WorkExperience;