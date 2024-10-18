import React from 'react';
import styled from '@emotion/styled';

type PrinterSettingProps = {
  isDuplexPrinting: boolean;
  isControlCodeConversion: boolean;
  isTurningAdjustment: boolean;
  isPageSegmentation: boolean;
};

const Container = styled.div`
  background-color: #f0f0f0;
  padding: 16px;
  border-radius: 4px;
`;

const Title = styled.div`
  font-weight: bold;
  margin-bottom: 8px;
`;

const OptionList = styled.div`
  display: flex;
  flex-direction: column;
`;

const OptionItem = styled.label`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
  cursor: pointer;
`;

const OptionText = styled.span`
  margin-left: 8px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 16px;
`;

const Button = styled.button`
  padding: 8px 16px;
  border-radius: 4px;
  border: none;
  background-color: #007bff;
  color: #fff;
  font-weight: bold;
  cursor: pointer;
  margin-left: 8px;

  &:hover {
    background-color: #0056b3;
  }
`;

const PrinterSetting: React.FC<PrinterSettingProps> = ({
  isDuplexPrinting,
  isControlCodeConversion,
  isTurningAdjustment,
  isPageSegmentation,
}) => {
  return (
    <Container>
      <Title>印刷対象範囲名</Title>
      <OptionList>
        <OptionItem>
          <input type="checkbox" checked={isControlCodeConversion} />
          <OptionText>調書兼命令書(一般) とりまとめ</OptionText>
        </OptionItem>
        <OptionItem>
          <input type="checkbox" checked={isControlCodeConversion} />
          <OptionText>調書兼命令書(一般)</OptionText>
        </OptionItem>
        <OptionItem>
          <input type="checkbox" checked={isTurningAdjustment} />
          <OptionText>控除明細印刷</OptionText>
        </OptionItem>
        <OptionItem>
          <input type="checkbox" checked={isPageSegmentation} />
          <OptionText>債権者一覧</OptionText>
        </OptionItem>
      </OptionList>
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
      <h1>Printer Settings</h1>
      <PrinterSetting
        isDuplexPrinting={true}
        isControlCodeConversion={false}
        isTurningAdjustment={true}
        isPageSegmentation={false}
      />
    </div>
  );
};

export default App;