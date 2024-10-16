import React from 'react';
import styled from 'styled-components';

type PrintSurveySettingsProps = {
  isIncludingBlankItems: boolean;
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
`;

const Title = styled.h2`
  font-size: 18px;
  margin-bottom: 20px;
`;

const OptionContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const OptionLabel = styled.label`
  margin-left: 10px;
  font-size: 14px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 20px;
`;

const Button = styled.button`
  padding: 10px 20px;
  font-size: 14px;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;

const OkButton = styled(Button)`
  background-color: #007bff;
  color: #fff;
  border: none;
`;

const CancelButton = styled(Button)`
  background-color: #fff;
  color: #007bff;
  border: 1px solid #007bff;
`;

const PrintSurveySettings: React.FC<PrintSurveySettingsProps> = ({
  isIncludingBlankItems,
}) => {
  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Perform form submission logic here
  };

  return (
    <Container>
      <Title>印刷対象帳票を絞り込む（物品）</Title>
      <form onSubmit={handleSubmit}>
        <OptionContainer>
          <input
            type="checkbox"
            id="includingBlankItems"
            checked={isIncludingBlankItems}
            readOnly
          />
          <OptionLabel htmlFor="includingBlankItems">
            負担行為とリまとめ向簿
          </OptionLabel>
        </OptionContainer>
        <ButtonContainer>
          <OkButton type="submit">OK</OkButton>
          <CancelButton type="button">クリア</CancelButton>
        </ButtonContainer>
      </form>
    </Container>
  );
};

// Usage example
const App: React.FC = () => {
  return (
    <div>
      <PrintSurveySettings isIncludingBlankItems={true} />
    </div>
  );
};

export default App;