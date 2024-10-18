import React from 'react';
import styled from '@emotion/styled';

type PublicSettingDate = {
  systemDate: string;
  businessDate: string;
  setBusinessDate: (value: string) => void;
};

const PublicSettingDate: React.FC<PublicSettingDate> = ({
  systemDate,
  businessDate,
  setBusinessDate,
}) => {
  return (
    <Container>
      <Title>自由設定項目／内容マスタリスト作成</Title>
      <DateContainer>
        <Label>自由設定項目</Label>
        <DateInput
          type="text"
          value={businessDate}
          onChange={(e) => setBusinessDate(e.target.value)}
        />
        <Separator>〜</Separator>
        <DateInput type="text" value={systemDate} readOnly />
      </DateContainer>
      <RadioContainer>
        <RadioLabel>
          <RadioInput type="radio" name="dateType" value="counting" defaultChecked />
          出力する
        </RadioLabel>
        <RadioLabel>
          <RadioInput type="radio" name="dateType" value="notCounting" />
          出力しない
        </RadioLabel>
      </RadioContainer>
      <ButtonContainer>
        <Button>OK</Button>
        <Button>クリア</Button>
        <Button>終了</Button>
      </ButtonContainer>
    </Container>
  );
};

// Sample usage
const SampleComponent: React.FC = () => {
  const [businessDate, setBusinessDate] = React.useState('000000');
  const systemDate = '999999';

  return (
    <PublicSettingDate
      systemDate={systemDate}
      businessDate={businessDate}
      setBusinessDate={setBusinessDate}
    />
  );
};

// Styles
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  font-family: sans-serif;
`;

const Title = styled.h2`
  margin-bottom: 20px;
`;

const DateContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const Label = styled.label`
  margin-right: 10px;
`;

const DateInput = styled.input`
  padding: 5px;
  width: 100px;
`;

const Separator = styled.span`
  margin: 0 5px;
`;

const RadioContainer = styled.div`
  margin-bottom: 20px;
`;

const RadioLabel = styled.label`
  margin-right: 10px;
`;

const RadioInput = styled.input`
  margin-right: 5px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 200px;
`;

const Button = styled.button`
  padding: 8px 16px;
  background-color: #f0f0f0;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #e0e0e0;
  }
`;

export default PublicSettingDate;