import React from 'react';
import styled from 'styled-components';

// PrintSetting component props type
interface PrintSettingProps {
  showCommandName?: boolean;
  showSupportCommand?: boolean;
  showDefinition?: boolean;
}

// PrintSetting component
const PrintSetting: React.FC<PrintSettingProps> = ({
  showCommandName = true,
  showSupportCommand = false,
  showDefinition = true,
}) => {
  return (
    <Container>
      <Title>印刷対象集要名</Title>
      <Options>
        <Option>
          <Checkbox type="checkbox" checked={showCommandName} readOnly />
          調書兼命令書(その他 ES)
        </Option>
        <Option>
          <Checkbox type="checkbox" checked={showSupportCommand} readOnly />
          支払通知書
        </Option>
        <Option>
          <Checkbox type="checkbox" checked={showDefinition} readOnly />
          調定伺書
        </Option>
      </Options>
      <Buttons>
        <Button>OK</Button>
        <Button>クリア</Button>
        <Button>キャンセル</Button>
      </Buttons>
    </Container>
  );
};

// Styled components
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-family: sans-serif;
`;

const Title = styled.h2`
  margin-bottom: 20px;
`;

const Options = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 20px;
`;

const Option = styled.label`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  font-size: 14px;
`;

const Checkbox = styled.input`
  margin-right: 10px;
`;

const Buttons = styled.div`
  display: flex;
  justify-content: center;
`;

const Button = styled.button`
  padding: 8px 16px;
  margin: 0 10px;
  font-size: 14px;
  border: none;
  border-radius: 4px;
  background-color: #f0f0f0;
  cursor: pointer;

  &:hover {
    background-color: #e0e0e0;
  }
`;

// Sample usage
const App: React.FC = () => {
  return (
    <div>
      <h1>Print Settings Example</h1>
      <PrintSetting />
    </div>
  );
};

export default App;