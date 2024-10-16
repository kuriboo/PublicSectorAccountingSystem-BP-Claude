import React from 'react';
import styled from '@emotion/styled';

type PrintSettingsProps = {
  printDoubledSided?: boolean;
  printBackgroundImages?: boolean;
};

const PrintSettingsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-family: sans-serif;

  @media (min-width: 768px) {
    max-width: 400px;
  }
`;

const PrintSettingsTitle = styled.h3`
  margin: 0 0 16px;
`;

const PrintOption = styled.label`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
  cursor: pointer;
`;

const PrintOptionCheckbox = styled.input`
  margin-right: 8px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 16px;
  width: 100%;
`;

const Button = styled.button`
  padding: 8px 16px;
  margin-left: 8px;
  border: none;
  border-radius: 4px;
  background-color: #007bff;
  color: #fff;
  font-size: 14px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const PrintSettings: React.FC<PrintSettingsProps> = ({
  printDoubledSided = false,
  printBackgroundImages = false,
}) => {
  return (
    <PrintSettingsContainer>
      <PrintSettingsTitle>印刷対象範囲名</PrintSettingsTitle>
      <PrintOption>
        <PrintOptionCheckbox
          type="checkbox"
          checked={printDoubledSided}
          readOnly
        />
        貧担行為とりまとめ伺書
      </PrintOption>
      <PrintOption>
        <PrintOptionCheckbox
          type="checkbox"
          checked={printBackgroundImages}
          readOnly
        />
        とりまとめ検収調書検討求書
      </PrintOption>
      <ButtonContainer>
        <Button>OK</Button>
        <Button>クリア</Button>
        <Button>キャンセル</Button>
      </ButtonContainer>
    </PrintSettingsContainer>
  );
};

// Usage example
const App: React.FC = () => {
  return (
    <div>
      <h1>Print Settings Example</h1>
      <PrintSettings printDoubledSided={true} printBackgroundImages={false} />
    </div>
  );
};

export default App;