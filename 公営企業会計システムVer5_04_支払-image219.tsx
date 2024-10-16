import React from 'react';
import styled from '@emotion/styled';

type PrintSettingProps = {
  onCancel: () => void;
  onPrint: (settings: PrintSettings) => void;
};

type PrintSettings = {
  printComment: boolean;
  printBackgroundColor: boolean;
  printBackgroundImage: boolean;
  headerPosition: 'top' | 'bottom';
  headerRepeat: 'repeat' | 'noRepeat';
  footerPosition: 'top' | 'bottom'; 
  footerRepeat: 'repeat' | 'noRepeat';
};

const PrintSetting: React.FC<PrintSettingProps> = ({ onCancel, onPrint }) => {
  const [settings, setSettings] = React.useState<PrintSettings>({
    printComment: true,
    printBackgroundColor: true,
    printBackgroundImage: true,
    headerPosition: 'top',
    headerRepeat: 'repeat',
    footerPosition: 'top',
    footerRepeat: 'repeat',
  });

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = event.target;
    setSettings(prevSettings => ({
      ...prevSettings,
      [name]: checked,
    }));
  };

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = event.target;
    setSettings(prevSettings => ({
      ...prevSettings,
      [name]: value,
    }));
  };

  return (
    <Container>
      <Title>印刷対象情報</Title>
      <CheckboxContainer>
        <Checkbox
          type="checkbox"
          name="printComment"
          checked={settings.printComment}
          onChange={handleCheckboxChange}
        />
        <CheckboxLabel>予定負担行為伺書（一般）</CheckboxLabel>
      </CheckboxContainer>
      <CheckboxContainer>
        <Checkbox
          type="checkbox"
          name="printBackgroundColor"
          checked={settings.printBackgroundColor}
          onChange={handleCheckboxChange}
        />
        <CheckboxLabel>予定負担行為伺書（一般）とりまとめ</CheckboxLabel>
      </CheckboxContainer>
      <CheckboxContainer>
        <Checkbox
          type="checkbox"
          name="printBackgroundImage"
          checked={settings.printBackgroundImage}
          onChange={handleCheckboxChange}
        />
        <CheckboxLabel>入札執行依頼書（一般）</CheckboxLabel>
      </CheckboxContainer>
      
      <Title>再発行中学</Title>
      <SelectContainer>
        <Select name="headerPosition" value={settings.headerPosition} onChange={handleSelectChange}>
          <option value="top">有</option>
          <option value="bottom">無</option>
        </Select>
      </SelectContainer>
      <SelectContainer>
        <Select name="headerRepeat" value={settings.headerRepeat} onChange={handleSelectChange}>
          <option value="repeat">指定無</option>
          <option value="noRepeat">指定</option>
        </Select>
        <PageInput type="number" min={0} defaultValue={0} />
      </SelectContainer>
      
      <Title>返却再発行</Title>
      <SelectContainer>
        <Select name="footerPosition" value={settings.footerPosition} onChange={handleSelectChange}>
          <option value="top">指定無</option>
          <option value="bottom">指定</option>
        </Select>
        <PageInput type="number" min={0} defaultValue={0} />
      </SelectContainer>

      <ButtonContainer>
        <CancelButton onClick={onCancel}>クリア</CancelButton>
        <PrintButton onClick={() => onPrint(settings)}>キャンセル</PrintButton>
      </ButtonContainer>
    </Container>
  );
};

// Sample usage
const App: React.FC = () => {
  const handlePrint = (settings: PrintSettings) => {
    console.log('Print settings:', settings);
    // Perform printing logic here
  };

  return (
    <div>
      <h1>Print Settings Example</h1>
      <PrintSetting onCancel={() => console.log('Canceled')} onPrint={handlePrint} />
    </div>
  );
};

export default App;

// Styled components
const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  max-width: 400px;
  margin: 0 auto;
`;

const Title = styled.h3`
  margin: 0;
`;

const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const Checkbox = styled.input`
  margin: 0;
`;

const CheckboxLabel = styled.label`
  margin: 0;
`;

const SelectContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const Select = styled.select`
  padding: 0.25rem;
`;

const PageInput = styled.input`
  width: 60px;
  padding: 0.25rem;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 0.5rem;
  margin-top: 1rem;
`;

const Button = styled.button`
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const CancelButton = styled(Button)`
  background-color: #ccc;
  color: #333;
`;

const PrintButton = styled(Button)`
  background-color: #007bff;
  color: #fff;
`;