import React from 'react';
import styled from '@emotion/styled';

type TitleMasterCreateProps = {
  title: string;
  code: string;
};

const TitleMasterCreateWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;
  background-color: #f0f0f0;
`;

const TitleLabel = styled.label`
  font-size: 1.2rem;
  margin-bottom: 8px;
`;

const TitleInput = styled.input`
  width: 200px;
  height: 32px;
  padding: 4px 8px;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-bottom: 16px;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 16px;
`;

const Button = styled.button`
  padding: 8px 16px;
  font-size: 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  background-color: #007bff;
  color: #fff;

  &:hover {
    background-color: #0056b3;
  }
`;

const TitleMasterCreate: React.FC<TitleMasterCreateProps> = ({ title, code }) => {
  // State for input values
  const [titleValue, setTitleValue] = React.useState(title);
  const [codeValue, setCodeValue] = React.useState(code);

  // Event handlers
  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitleValue(e.target.value);
  };

  const handleCodeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCodeValue(e.target.value);
  };

  const handleOKClick = () => {
    // Perform action when OK button is clicked
    console.log('OK clicked');
  };

  const handleCancelClick = () => {
    // Perform action when Cancel button is clicked  
    console.log('Cancel clicked');
  };

  const handleEndClick = () => {
    // Perform action when End button is clicked
    console.log('End clicked');
  };

  return (
    <TitleMasterCreateWrapper>
      <TitleLabel>範囲指定</TitleLabel>
      <TitleInput value={titleValue} onChange={handleTitleChange} />
      <TitleInput value={codeValue} onChange={handleCodeChange} />
      <ButtonGroup>
        <Button onClick={handleOKClick}>OK</Button>
        <Button onClick={handleCancelClick}>クリア</Button>
        <Button onClick={handleEndClick}>終了</Button>
      </ButtonGroup>
    </TitleMasterCreateWrapper>
  );
};

// Usage example
const App = () => {
  return (
    <div>
      <h1>Title Master Create</h1>
      <TitleMasterCreate title="MAD00002" code="SLID99999" />
    </div>
  );
};

export default App;