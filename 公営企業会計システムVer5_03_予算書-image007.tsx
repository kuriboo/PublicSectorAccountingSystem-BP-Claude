import React from 'react';
import styled from '@emotion/styled';

type EmploymentType = '日' | '節' | '細節' | '明細';

interface WorkScheduleInputProps {
  workCode: string;
  employmentType: EmploymentType;
  workDays: string;
  workHours: string;
  amount: number;
  onSubmit: () => void;
  onCancel: () => void;
}

const WorkScheduleInput: React.FC<WorkScheduleInputProps> = ({
  workCode,
  employmentType,
  workDays,
  workHours,
  amount,
  onSubmit,
  onCancel,
}) => {
  return (
    <Container>
      <Title>仕訳科目損益登録</Title>
      <EmploymentTypeContainer>
        <EmploymentTypeLabel>科目名称表示レベル</EmploymentTypeLabel>
        <EmploymentTypeOptions>
          <EmploymentTypeOption selected={employmentType === '日'}>日</EmploymentTypeOption>
          <EmploymentTypeOption selected={employmentType === '節'}>節</EmploymentTypeOption>
          <EmploymentTypeOption selected={employmentType === '細節'}>細節</EmploymentTypeOption>
          <EmploymentTypeOption selected={employmentType === '明細'}>明細</EmploymentTypeOption>
        </EmploymentTypeOptions>
      </EmploymentTypeContainer>
      <WorkCodeContainer>
        <WorkCodeLabel>仕訳コード</WorkCodeLabel>
        <WorkCode>{workCode || '600153'}</WorkCode>
      </WorkCodeContainer>
      <WorkDetailsContainer>
        <WorkDetail>
          <WorkDetailLabel>借方科目</WorkDetailLabel>
          <WorkDetailValue>{workDays || '00202020100110001'}</WorkDetailValue>
          <WorkDetailSubLabel>消費税</WorkDetailSubLabel>
        </WorkDetail>
        <WorkDetail>
          <WorkDetailLabel>貸方科目</WorkDetailLabel>
          <WorkDetailValue>{workHours || '00110808000080001'}</WorkDetailValue>
          <WorkDetailSubLabel>その他雑収益</WorkDetailSubLabel>
        </WorkDetail>
      </WorkDetailsContainer>
      <AmountContainer>
        <AmountValue>{amount.toLocaleString() || '1,000,000'} 円</AmountValue>
      </AmountContainer>
      <ButtonsContainer>
        <SubmitButton onClick={onSubmit}>OK</SubmitButton>
        <CancelButton onClick={onCancel}>クリア</CancelButton>
      </ButtonsContainer>
    </Container>
  );
};

const Container = styled.div`
  background-color: #f0f0f0;
  padding: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h2`
  margin-bottom: 24px;
`;

const EmploymentTypeContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
`;

const EmploymentTypeLabel = styled.span`
  margin-right: 8px;
`;

const EmploymentTypeOptions = styled.div`
  display: flex;
`;

const EmploymentTypeOption = styled.span<{ selected: boolean }>`
  padding: 4px 8px;
  background-color: ${({ selected }) => (selected ? '#c0c0c0' : 'transparent')};
  margin-right: 8px;
  cursor: pointer;
`;

const WorkCodeContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
`;

const WorkCodeLabel = styled.span`
  margin-right: 8px;
`;

const WorkCode = styled.span`
  font-weight: bold;
`;

const WorkDetailsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 16px;
`;

const WorkDetail = styled.div`
  display: flex;
  flex-direction: column;
`;

const WorkDetailLabel = styled.span`
  font-weight: bold;
  margin-bottom: 8px;
`;

const WorkDetailValue = styled.span`
  margin-bottom: 4px;
`;

const WorkDetailSubLabel = styled.span`
  font-size: 12px;
`;

const AmountContainer = styled.div`
  margin-bottom: 24px;
`;

const AmountValue = styled.span`
  font-size: 24px;
  font-weight: bold;
`;

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const SubmitButton = styled.button`
  padding: 8px 16px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  margin-right: 16px;
  cursor: pointer;
`;

const CancelButton = styled.button`
  padding: 8px 16px;
  background-color: #6c757d;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

// サンプルデータを使用した表示用コンポーネント
const SampleWorkScheduleInput: React.FC = () => {
  const handleSubmit = () => {
    console.log('Submit button clicked');
  };

  const handleCancel = () => {
    console.log('Cancel button clicked');
  };

  return (
    <WorkScheduleInput
      workCode="600153"
      employmentType="節"
      workDays="00202020100110001"
      workHours="00110808000080001"
      amount={1000000}
      onSubmit={handleSubmit}
      onCancel={handleCancel}
    />
  );
};

export default WorkScheduleInput;