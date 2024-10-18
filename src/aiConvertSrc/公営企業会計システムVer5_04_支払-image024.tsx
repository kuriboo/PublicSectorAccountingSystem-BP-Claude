import React from 'react';
import styled from '@emotion/styled';

type PrintSettingsProps = {
  printSummary: boolean;
  printRequestForms: boolean;
  onChangePrintSummary: (checked: boolean) => void;
  onChangePrintRequestForms: (checked: boolean) => void;
  onClickOk: () => void;
  onClickClear: () => void;
  onClickCancel: () => void;
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px;
  background-color: #f0f0f0;
  border-radius: 8px;
  width: 100%;
  max-width: 400px;
  box-sizing: border-box;

  @media (max-width: 600px) {
    max-width: 100%;
  }
`;

const Title = styled.div`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 16px;
`;

const OptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 16px;
`;

const OptionLabel = styled.label`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
  cursor: pointer;
`;

const OptionCheckbox = styled.input`
  margin-right: 8px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const Button = styled.button`
  padding: 8px 16px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }
`;

const PrintSettings: React.FC<PrintSettingsProps> = ({
  printSummary,
  printRequestForms,
  onChangePrintSummary,
  onChangePrintRequestForms,
  onClickOk,
  onClickClear,
  onClickCancel,
}) => {
  return (
    <Container>
      <Title>印刷対象帳票の何を印刷するか（物品）</Title>
      <OptionContainer>
        <OptionLabel>
          <OptionCheckbox
            type="checkbox"
            checked={printSummary}
            onChange={(e) => onChangePrintSummary(e.target.checked)}
          />
          負担行為とりまとめ何種
        </OptionLabel>
        <OptionLabel>
          <OptionCheckbox
            type="checkbox"
            checked={printRequestForms}
            onChange={(e) => onChangePrintRequestForms(e.target.checked)}
          />
          とりまとめ後収調書兼請求書
        </OptionLabel>
      </OptionContainer>
      <ButtonContainer>
        <Button onClick={onClickOk}>OK</Button>
        <Button onClick={onClickClear}>クリア</Button>
        <Button onClick={onClickCancel}>キャンセル</Button>
      </ButtonContainer>
    </Container>
  );
};

// Usage example
const App: React.FC = () => {
  const [printSummary, setPrintSummary] = React.useState(true);
  const [printRequestForms, setPrintRequestForms] = React.useState(false);

  const handleChangePrintSummary = (checked: boolean) => {
    setPrintSummary(checked);
  };

  const handleChangePrintRequestForms = (checked: boolean) => {
    setPrintRequestForms(checked);
  };

  const handleClickOk = () => {
    console.log('OK clicked');
    // Perform necessary actions
  };

  const handleClickClear = () => {
    console.log('Clear clicked');
    setPrintSummary(false);
    setPrintRequestForms(false);
  };

  const handleClickCancel = () => {
    console.log('Cancel clicked');
    // Perform necessary actions
  };

  return (
    <PrintSettings
      printSummary={printSummary}
      printRequestForms={printRequestForms}
      onChangePrintSummary={handleChangePrintSummary}
      onChangePrintRequestForms={handleChangePrintRequestForms}
      onClickOk={handleClickOk}
      onClickClear={handleClickClear}
      onClickCancel={handleClickCancel}
    />
  );
};

export default App;