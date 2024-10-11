import React from 'react';
import styled from '@emotion/styled';

type CompanyLineSelectionProps = {
  header: string;
  fiscalYear: string;
  defaultStartCode: string;
  defaultEndCode: string;
  onClickClear: () => void;
  onClickOK: () => void;
  onClickCancel: () => void;
};

const CompanyLineSelection: React.FC<CompanyLineSelectionProps> = ({
  header,
  fiscalYear,
  defaultStartCode,
  defaultEndCode,
  onClickClear,
  onClickOK,
  onClickCancel,
}) => {
  // State to hold the start and end code values
  const [startCode, setStartCode] = React.useState(defaultStartCode);
  const [endCode, setEndCode] = React.useState(defaultEndCode);

  return (
    <Container>
      <Header>{header}</Header>
      <FiscalYear>{fiscalYear}</FiscalYear>

      <InputContainer>
        <InputLabel>事業コード</InputLabel>
        <Input
          type="text"
          value={startCode}
          onChange={(e) => setStartCode(e.target.value)}
        />
        <Separator>〜</Separator>
        <Input
          type="text"
          value={endCode}
          onChange={(e) => setEndCode(e.target.value)}
        />
      </InputContainer>

      <ButtonContainer>
        <Button onClick={onClickClear}>クリア</Button>
        <Button onClick={onClickOK}>OK</Button>
        <Button onClick={onClickCancel}>終了</Button>
      </ButtonContainer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 400px;
  box-sizing: border-box;

  @media (max-width: 600px) {
    width: 100%;
  }
`;

const Header = styled.h2`
  margin-bottom: 10px;
`;

const FiscalYear = styled.p`
  margin-bottom: 20px;
`;

const InputContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const InputLabel = styled.label`
  margin-right: 10px;
`;

const Input = styled.input`
  width: 80px;
  padding: 5px;
`;

const Separator = styled.span`
  margin: 0 10px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const Button = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

// Example usage
const ExampleUsage: React.FC = () => {
  return (
    <CompanyLineSelection
      header="継続費線選計算書"
      fiscalYear="H29年09月19日"
      defaultStartCode="00"
      defaultEndCode="99" 
      onClickClear={() => console.log('Clear clicked')}
      onClickOK={() => console.log('OK clicked')}
      onClickCancel={() => console.log('Cancel clicked')}
    />
  );
};

export default CompanyLineSelection;