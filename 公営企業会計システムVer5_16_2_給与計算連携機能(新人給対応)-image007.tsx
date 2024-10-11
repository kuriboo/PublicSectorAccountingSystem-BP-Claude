import React from 'react';
import styled from '@emotion/styled';

interface ForeignExchangeSystemProps {
  projectId: string;
  executionDate: string;
  exchangeCodes: string[];
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  font-family: Arial, sans-serif;
`;

const Title = styled.h2`
  margin-bottom: 10px;
`;

const ProjectIdInput = styled.input`
  padding: 5px;
  margin-bottom: 10px;
  width: 200px;
`;

const ExecutionDateInput = styled.input`
  padding: 5px;
  margin-bottom: 10px;
  width: 200px;
`;

const ExchangeCodesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 10px;
`;

const ExchangeCodeInput = styled.input`
  padding: 5px;
  margin-bottom: 5px;
  width: 200px;
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-right: 10px;

  &:last-child {
    margin-right: 0;
  }
`;

const ForeignExchangeSystem: React.FC<ForeignExchangeSystemProps> = ({
  projectId,
  executionDate,
  exchangeCodes,
}) => {
  // State for input values
  const [inputProjectId, setInputProjectId] = React.useState(projectId);
  const [inputExecutionDate, setInputExecutionDate] = React.useState(executionDate);
  const [inputExchangeCodes, setInputExchangeCodes] = React.useState(exchangeCodes);

  // Event handlers for input changes
  const handleProjectIdChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputProjectId(e.target.value);
  };

  const handleExecutionDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputExecutionDate(e.target.value);
  };

  const handleExchangeCodeChange = (index: number, e: React.ChangeEvent<HTMLInputElement>) => {
    const updatedCodes = [...inputExchangeCodes];
    updatedCodes[index] = e.target.value;
    setInputExchangeCodes(updatedCodes);
  };

  // Event handlers for button clicks
  const handleOkClick = () => {
    // Perform actions when OK button is clicked
    console.log('OK clicked');
  };

  const handleClearClick = () => {
    // Clear input values when Clear button is clicked
    setInputProjectId('');
    setInputExecutionDate('');
    setInputExchangeCodes(['']);
  };

  const handleCancelClick = () => {
    // Perform actions when Cancel button is clicked
    console.log('Cancel clicked');
  };

  return (
    <Container>
      <Title>対象外控除コード設定</Title>
      <ProjectIdInput
        type="text"
        value={inputProjectId}
        onChange={handleProjectIdChange}
        placeholder="控除項目コード"
      />
      <ExecutionDateInput
        type="text"
        value={inputExecutionDate}
        onChange={handleExecutionDateChange}
        placeholder="追加"
      />
      <ExchangeCodesContainer>
        {inputExchangeCodes.map((code, index) => (
          <ExchangeCodeInput
            key={index}
            type="text"
            value={code}
            onChange={(e) => handleExchangeCodeChange(index, e)}
            placeholder={`控除項目コード${index + 1}`}
          />
        ))}
      </ExchangeCodesContainer>
      <div>
        <Button onClick={handleOkClick}>OK</Button>
        <Button onClick={handleClearClick}>クリア</Button>
        <Button onClick={handleCancelClick}>終了</Button>
      </div>
    </Container>
  );
};

// Sample usage
const App: React.FC = () => {
  return (
    <ForeignExchangeSystem
      projectId="5400000"
      executionDate=""
      exchangeCodes={['5400000', '5400001']}
    />
  );
};

export default App;