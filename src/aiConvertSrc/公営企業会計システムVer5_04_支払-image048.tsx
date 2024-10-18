import React from 'react';
import styled from '@emotion/styled';

type PrinterStatusSelectorProps = {
  onChange: (value: string) => void;
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  max-width: 400px;
  padding: 16px;
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
  align-items: center;
  margin-bottom: 8px;
`;

const CheckboxLabel = styled.label`
  margin-left: 8px;
  font-size: 16px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  margin-top: 16px;
`;

const Button = styled.button`
  padding: 8px 16px;
  margin-left: 8px;
  font-size: 16px;
  border: none;
  border-radius: 4px;
  background-color: #f0f0f0;
  cursor: pointer;

  &:hover {
    background-color: #e0e0e0;
  }
`;

const PrinterStatusSelector: React.FC<PrinterStatusSelectorProps> = ({ onChange }) => {
  const [selectedOption, setSelectedOption] = React.useState<string>('');

  const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(event.target.value);
  };

  const handleOkClick = () => {
    onChange(selectedOption);
  };

  return (
    <Container>
      <Title>印刷対象帳票名</Title>
      <OptionContainer>
        <input
          type="radio"
          id="option1"
          name="printerOption"
          value="変更予定負担行為伺書(工事)とりまとめ"
          checked={selectedOption === '変更予定負担行為伺書(工事)とりまとめ'}
          onChange={handleOptionChange}
        />
        <CheckboxLabel htmlFor="option1">変更予定負担行為伺書(工事)とりまとめ</CheckboxLabel>
      </OptionContainer>
      <OptionContainer>
        <input
          type="radio"
          id="option2"
          name="printerOption"
          value="変更予定支出負担行為伺書(工事)"
          checked={selectedOption === '変更予定支出負担行為伺書(工事)'}
          onChange={handleOptionChange}
        />
        <CheckboxLabel htmlFor="option2">変更予定支出負担行為伺書(工事)</CheckboxLabel>
      </OptionContainer>
      <ButtonContainer>
        <Button onClick={handleOkClick}>OK</Button>
        <Button>クリア</Button>
        <Button>キャンセル</Button>
      </ButtonContainer>
    </Container>
  );
};



// Usage example:
const SamplePage = () => {
  const handlePrinterStatusChange = (value: string) => {
    console.log('Selected option:', value);
  };

  return (
    <div>
      <h1>Sample Page</h1>
      <PrinterStatusSelector onChange={handlePrinterStatusChange} />
    </div>
  );
};

export default SamplePage;