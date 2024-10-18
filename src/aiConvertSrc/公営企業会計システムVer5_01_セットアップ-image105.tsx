import React from 'react';
import styled from '@emotion/styled';

type Period = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

interface MastersThesisScheduleProps {
  year: number;
  period: Period;
  schedule: {
    middlePresentationScreening: number;
    thesisFirstDraftSubmission: number;
    finalPresentationParticipationQualification: number;
    finalThesisSubmission: number;
    degreeApplicationQualification: number;
    degreeApproval: number;
    bindingFeePayment: number;
    finalReportResubmission: number;
    mastersDegreeConferment: number;
    dissertationDeferralApplication: number;
  };
  usage: {
    middlePresentationScreeningUsage: number;
    thesisFirstDraftSubmissionUsage: number;
    finalPresentationParticipationQualificationUsage: number;
    finalThesisSubmissionUsage: number;
    degreeApplicationQualificationUsage: number;
    bindingFeePaymentUsage: number;
    finalDegree: number;
  };
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 20px;
  box-sizing: border-box;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-around;
  }
`;

const Title = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
`;

const ScheduleContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 20px;

  @media (min-width: 768px) {
    width: 45%;
  }
`;

const UsageContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  @media (min-width: 768px) {
    width: 45%;
  }
`;

const ScheduleItem = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;

const Label = styled.span`
  font-weight: bold;
`;

const Value = styled.span``;

/**
 * 修士論文のスケジュールと使用状況を表示するコンポーネント
 */
const MastersThesisSchedule: React.FC<MastersThesisScheduleProps> = ({
  year,
  period,
  schedule,
  usage,
}) => {
  return (
    <Container>
      <Title>補てん財源経過表設定 マスタ保守</Title>
      <ScheduleContainer>
        <ScheduleItem>
          <Label>平成28年</Label>
          <Value>{year}</Value>
        </ScheduleItem>
        <ScheduleItem>
          <Label>年度</Label>
          <Value>{period}</Value>
        </ScheduleItem>
        <ScheduleItem>
          <Label>資本的収支不足額等</Label>
          <Value>{schedule.middlePresentationScreening.toLocaleString()}</Value>
        </ScheduleItem>
        <ScheduleItem>
          <Label>前年度発生財源(未発行企業債)</Label>
          <Value>{schedule.thesisFirstDraftSubmission.toLocaleString()}</Value>
        </ScheduleItem>
        <ScheduleItem>
          <Label>補てん使用可能額</Label>
          <Value>
            {(schedule.middlePresentationScreening +
              schedule.thesisFirstDraftSubmission).toLocaleString()}
          </Value>
        </ScheduleItem>
        <ScheduleItem>
          <Label>過年度分積立金取崩額</Label>
          <Value>
            {schedule.finalPresentationParticipationQualification.toLocaleString()}
          </Value>
        </ScheduleItem>
        <ScheduleItem>
          <Label>過年度分積立金取崩額</Label>
          <Value>{schedule.finalThesisSubmission.toLocaleString()}</Value>
        </ScheduleItem>
        <ScheduleItem>
          <Label>過年度分積立金取崩額</Label>
          <Value>{schedule.degreeApplicationQualification.toLocaleString()}</Value>
        </ScheduleItem>
        <ScheduleItem>
          <Label>過年度分積立金取崩額</Label>
          <Value>{schedule.degreeApproval.toLocaleString()}</Value>
        </ScheduleItem>
        <ScheduleItem>
          <Label>過年度分積立金取崩額</Label>
          <Value>{schedule.bindingFeePayment.toLocaleString()}</Value>
        </ScheduleItem>
        <ScheduleItem>
          <Label>過年度分積立金取崩額</Label>
          <Value>{schedule.finalReportResubmission.toLocaleString()}</Value>
        </ScheduleItem>
        <ScheduleItem>
          <Label>未発行企業債</Label>
          <Value>{schedule.mastersDegreeConferment.toLocaleString()}</Value>
        </ScheduleItem>
        <ScheduleItem>
          <Label>前年度からの繰越工事資金</Label>
          <Value>{schedule.dissertationDeferralApplication.toLocaleString()}</Value>
        </ScheduleItem>
      </ScheduleContainer>
      
      <UsageContainer>
        <ScheduleItem>
          <Label>（補填）未処分利益剰余金</Label>
          <Value>{usage.middlePresentationScreeningUsage.toLocaleString()}</Value>
        </ScheduleItem>
        <ScheduleItem>
          <Label>減債積立金</Label>
          <Value>{usage.thesisFirstDraftSubmissionUsage.toLocaleString()}</Value>
        </ScheduleItem>
        <ScheduleItem>
          <Label>建設改良積立金</Label>
          <Value>{usage.finalPresentationParticipationQualificationUsage.toLocaleString()}</Value>
        </ScheduleItem>
        <ScheduleItem>
          <Label>過年度分積立金取崩額</Label>
          <Value>{usage.finalThesisSubmissionUsage.toLocaleString()}</Value>
        </ScheduleItem>
        <ScheduleItem>
          <Label>当年度分積立金取崩額</Label>
          <Value>{usage.degreeApplicationQualificationUsage.toLocaleString()}</Value>
        </ScheduleItem>
        <ScheduleItem>
          <Label>繰越財源充当</Label>
          <Value>{usage.bindingFeePaymentUsage.toLocaleString()}</Value>
        </ScheduleItem>
        <ScheduleItem>
          <Label>当年度財源充当</Label>
          <Value>{usage.finalDegree.toLocaleString()}</Value>
        </ScheduleItem>
        <ScheduleItem>
          <Label>前年度からの繰越工事資金</Label>
          <Value>0</Value>
        </ScheduleItem>
        <ScheduleItem>
          <Label>過年度分</Label>
          <Value>0</Value>
        </ScheduleItem>
        <ScheduleItem>
          <Label>当年度分</Label>
          <Value>0</Value>
        </ScheduleItem>
      </UsageContainer>
    </Container>
  );
};

// サンプルデータ
const sampleData: MastersThesisScheduleProps = {
  year: 2016,
  period: 1,
  schedule: {
    middlePresentationScreening: 10000,
    thesisFirstDraftSubmission: 20000,
    finalPresentationParticipationQualification: 0,
    finalThesisSubmission: 0, 
    degreeApplicationQualification: 0,
    degreeApproval: 0,
    bindingFeePayment: 0,
    finalReportResubmission: 0,
    mastersDegreeConferment: 0,
    dissertationDeferralApplication: 0,
  },
  usage: {
    middlePresentationScreeningUsage: 0,
    thesisFirstDraftSubmissionUsage: 0, 
    finalPresentationParticipationQualificationUsage: 0,
    finalThesisSubmissionUsage: 0,
    degreeApplicationQualificationUsage: 0,
    bindingFeePaymentUsage: 0,
    finalDegree: 0,
  },
};

// 使用例
const App: React.FC = () => {
  return (
    <div>
      <h1>修士論文スケジュール</h1>
      <MastersThesisSchedule {...sampleData} />
    </div>
  );
};

export default App;