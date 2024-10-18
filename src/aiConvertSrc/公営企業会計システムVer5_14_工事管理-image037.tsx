import React from 'react';
import styled from '@emotion/styled';

type CompanyInfo = {
  companyName: string;
  businessYear: number;
  businessMonth: number;
};

type WorkerInfo = {
  employmentDay: number;
  employmentMonth: number;
  retirementDay: number;
  retirementMonth: number;
};

type Props = {
  companyInfo: CompanyInfo;
  workerInfo: WorkerInfo;
  onCancel: () => void;
  onSubmit: () => void;
  onPrint: () => void;
};

const Container = styled.div`
  background-color: #f0f0f0;
  padding: 20px;
  width: 400px;
  margin: 0 auto;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 18px;
  margin-bottom: 20px;
`;

const CompanyInfoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;

const Label = styled.label`
  font-weight: bold;
`;

const Input = styled.input`
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 3px;
  width: 120px;
`;

const WorkerInfoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;

const ButtonWrapper = styled.div`
  margin-top: 20px;
`;

const Button = styled.button`
  padding: 8px 16px;
  margin: 0 5px;
  border: none;
  border-radius: 4px;
  background-color: #007bff;
  color: #fff;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const InfoForm: React.FC<Props> = ({
  companyInfo,
  workerInfo,
  onCancel,
  onSubmit,
  onPrint,
}) => {
  return (
    <Container>
      <Title>工事台帳作成</Title>
      <CompanyInfoWrapper>
        <Label>工事台帳年度</Label>
        <Input type="number" value={companyInfo.businessYear} readOnly />
        <Label>年度</Label>
      </CompanyInfoWrapper>
      <CompanyInfoWrapper>
        <Label>工事台帳番号</Label>
        <Input type="text" value={companyInfo.companyName} readOnly />
        <Label>～</Label>
        <Input type="text" value={String(companyInfo.businessMonth).padStart(6, '0')} readOnly />
      </CompanyInfoWrapper>
      <WorkerInfoWrapper>
        <Label>事業科目</Label>
        <Input type="number" value={workerInfo.employmentDay} readOnly />
        <Label>工区番号</Label>
        <Input type="number" value={workerInfo.employmentMonth} readOnly />
        <Label>～</Label>
        <Input type="number" value={workerInfo.retirementDay} readOnly />
        <Label>工区番号</Label>
        <Input type="number" value={workerInfo.retirementMonth} readOnly />
      </WorkerInfoWrapper>
      <WorkerInfoWrapper>
        <Label>所属</Label>
        <Input type="text" readOnly />
        <Label>～</Label>
        <Input type="text" readOnly />
      </WorkerInfoWrapper>
      <ButtonWrapper>
        <Button onClick={onSubmit}>終了</Button>
        <Button onClick={onCancel}>クリア</Button>
        <Button onClick={onPrint}>終了</Button>
      </ButtonWrapper>
    </Container>
  );
};

// Usage example
const App: React.FC = () => {
  const companyInfo: CompanyInfo = {
    companyName: 'ABC Company',
    businessYear: 2023,
    businessMonth: 6,
  };

  const workerInfo: WorkerInfo = {
    employmentDay: 1,
    employmentMonth: 4,
    retirementDay: 30,
    retirementMonth: 9,
  };

  const handleCancel = () => {
    // Handle cancel action
  };

  const handleSubmit = () => {
    // Handle submit action
  };

  const handlePrint = () => {
    // Handle print action
  };

  return (
    <InfoForm
      companyInfo={companyInfo}
      workerInfo={workerInfo}
      onCancel={handleCancel}
      onSubmit={handleSubmit}
      onPrint={handlePrint}
    />
  );
};

export default App;