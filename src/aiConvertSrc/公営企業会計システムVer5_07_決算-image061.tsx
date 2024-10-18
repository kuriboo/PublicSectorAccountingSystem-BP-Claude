import React from 'react';
import styled from '@emotion/styled';

type MembershipPlanFormProps = {
  onSubmit: (selectedPlan: string) => void;
};

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #f0f0f0;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  @media (min-width: 768px) {
    max-width: 400px;
    margin: 0 auto;
  }
`;

const Title = styled.h2`
  margin-bottom: 20px;
  font-size: 24px;
`;

const PlanContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;

const PlanInput = styled.input`
  margin-right: 10px;
`;

const PlanLabel = styled.label`
  font-size: 18px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const SubmitButton = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const MembershipPlanForm: React.FC<MembershipPlanFormProps> = ({ onSubmit }) => {
  const [selectedPlan, setSelectedPlan] = React.useState('');

  const handlePlanChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedPlan(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(selectedPlan);
  };

  return (
    <FormContainer>
      <Title>会計年度</Title>
      <PlanContainer>
        <PlanInput
          type="radio"
          id="annual"
          name="plan"
          value="annual"
          checked={selectedPlan === 'annual'}
          onChange={handlePlanChange}
        />
        <PlanLabel htmlFor="annual">年度</PlanLabel>
      </PlanContainer>
      <ButtonContainer>
        <SubmitButton type="submit" onClick={handleSubmit}>
          OK
        </SubmitButton>
        <SubmitButton type="button">クリア</SubmitButton>
        <SubmitButton type="button">終了</SubmitButton>
      </ButtonContainer>
    </FormContainer>
  );
};

// Example usage
const App: React.FC = () => {
  const handlePlanSubmit = (selectedPlan: string) => {
    console.log('Selected plan:', selectedPlan);
    // Perform further actions with the selected plan
  };

  return (
    <div>
      <MembershipPlanForm onSubmit={handlePlanSubmit} />
    </div>
  );
};

export default App;