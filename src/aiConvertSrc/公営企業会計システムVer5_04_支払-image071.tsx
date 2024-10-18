import React from 'react';
import styled from '@emotion/styled';

type PrinterSettingProps = {
  isReportSelected?: boolean;
  isTaxSelected?: boolean;
  isSecretSelected?: boolean;
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #f0f0f0;
  border-radius: 5px;
`;

const Title = styled.h2`
  margin-bottom: 20px;
`;

const CheckboxContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  cursor: pointer;
`;

const Checkbox = styled.input`
  margin-right: 5px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
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

const PrinterSetting: React.FC<PrinterSettingProps> = ({
  isReportSelected = false,
  isTaxSelected = false,
  isSecretSelected = false,
}) => {
  return (
    <Container>
      <Title>印刷対象帳票名</Title>
      <CheckboxContainer>
        <CheckboxLabel>
          <Checkbox type="checkbox" checked={isReportSelected} />
          調書兼命令書(一般)
        </CheckboxLabel>
        <CheckboxLabel>
          <Checkbox type="checkbox" checked={isTaxSelected} />
          税区分別 税率別金額合計一覧
        </CheckboxLabel>
        <CheckboxLabel>
          <Checkbox type="checkbox" checked={isSecretSelected} />
          秘区分別 秘号別金額合計一覧
        </CheckboxLabel>
      </CheckboxContainer>
      <ButtonContainer>
        <Button>OK</Button>
        <Button>クリア</Button>
        <Button>キャンセル</Button>
      </ButtonContainer>
    </Container>
  );
};

// Usage example
const App: React.FC = () => {
  return (
    <div>
      <h1>Printer Setting Example</h1>
      <PrinterSetting 
        isReportSelected={true}
        isTaxSelected={false}
        isSecretSelected={true}
      />
    </div>
  );
};

export default App;