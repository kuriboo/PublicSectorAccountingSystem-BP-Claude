import React from 'react';
import styled from '@emotion/styled';

type CaseReportAssignmentProps = {
  caseNumber: string;
  year: number;
  department: string;
  workType: string;
  dispatchCategories: string[];
  selectedDispatchCategory: string;
  onDispatchCategoryChange: (category: string) => void;
  onSubmit: () => void;
  onCancel: () => void;
  onFinish: () => void;
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  @media (min-width: 768px) {
    max-width: 600px;
    margin: 0 auto;
  }
`;

const Title = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
`;

const InfoRow = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 10px;
`;

const InfoLabel = styled.span`
  font-weight: bold;
`;

const InfoValue = styled.span``;

const DispatchSection = styled.div`
  margin-top: 20px;
`;

const DispatchLabel = styled.label`
  display: block;
  margin-bottom: 10px;
`;

const DispatchSelect = styled.select`
  width: 100%;
  padding: 5px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  width: 100%;
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background-color: #0056b3;
  }
`;

const CaseReportAssignment: React.FC<CaseReportAssignmentProps> = ({
  caseNumber,
  year,
  department,
  workType,
  dispatchCategories,
  selectedDispatchCategory,
  onDispatchCategoryChange,
  onSubmit,
  onCancel,
  onFinish,
}) => {
  return (
    <Container>
      <Title>案件情報抽出処理</Title>
      <InfoRow>
        <InfoLabel>年度:</InfoLabel>
        <InfoValue>{year}</InfoValue>
      </InfoRow>
      <InfoRow>
        <InfoLabel>受付区分:</InfoLabel>
        <InfoValue>{department}</InfoValue>
      </InfoRow>
      <InfoRow>
        <InfoLabel>工事:</InfoLabel>
        <InfoValue>{workType}</InfoValue>
      </InfoRow>
      <InfoRow>
        <InfoLabel>物件:</InfoLabel>
        <InfoValue>{caseNumber}</InfoValue>
      </InfoRow>
      <DispatchSection>
        <DispatchLabel htmlFor="dispatchCategory">抽出区分</DispatchLabel>
        <DispatchSelect
          id="dispatchCategory"
          value={selectedDispatchCategory}
          onChange={(e) => onDispatchCategoryChange(e.target.value)}
        >
          {dispatchCategories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </DispatchSelect>
      </DispatchSection>
      <ButtonContainer>
        <Button onClick={onSubmit}>終了</Button>
        <Button onClick={onCancel}>クリア</Button>
        <Button onClick={onFinish}>終了</Button>
      </ButtonContainer>
    </Container>
  );
};

// Usage example
const App: React.FC = () => {
  const handleDispatchCategoryChange = (category: string) => {
    console.log('Selected dispatch category:', category);
  };

  const handleSubmit = () => {
    console.log('Form submitted');
  };

  const handleCancel = () => {
    console.log('Form cancelled');
  };

  const handleFinish = () => {
    console.log('Form finished');
  };

  return (
    <CaseReportAssignment
      caseNumber="429100081"
      year={29}
      department="新規"
      workType="工事"
      dispatchCategories={['新規', '再抽出']}
      selectedDispatchCategory="新規"
      onDispatchCategoryChange={handleDispatchCategoryChange}
      onSubmit={handleSubmit}
      onCancel={handleCancel}    
      onFinish={handleFinish}
    />
  );
};

export default App;