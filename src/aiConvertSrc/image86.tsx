import React from 'react';
import styled from '@emotion/styled';

interface ReportFormProps {
  title?: string;
  fiscalYear?: string;
  fiscalMonth?: string;
  onSubmit?: () => void;
  onCancel?: () => void;
}

const ReportForm: React.FC<ReportFormProps> = ({
  title = '業者情報取込更新処理',
  fiscalYear = '令和29年',
  fiscalMonth = '09月05日',
  onSubmit,
  onCancel,
}) => {
  return (
    <Container>
      <Title>{title}</Title>
      <FiscalInfo>
        <div>行政市水道事業会計</div>
        <div>総務課 予算・会計担当 さようせい太郎</div>
        <div>平成29年09月05日</div>
      </FiscalInfo>
      <Form>
        <Label>
          取り込み年度
          <Select>
            <option value="current">令和29年</option>
            <option value="previous">令和28年</option>
          </Select>
        </Label>
        <Label>
          更新年月日
          <Input type="date" />
        </Label>
        <Label>
          <Input type="date" />
        </Label>
      </Form>
      <ButtonContainer>
        <Button onClick={onSubmit}>OK</Button>
        <Button onClick={onCancel}>クリア</Button>
        <Button type="submit">終了</Button>
      </ButtonContainer>
    </Container>
  );
};

const Container = styled.div`
  font-family: 'Meiryo', sans-serif;
  max-width: 800px;
  margin: 0 auto;
  padding: 24px;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 24px;
`;

const FiscalInfo = styled.div`
  margin-bottom: 32px;
  > div {
    margin-bottom: 8px;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
`;

const Select = styled.select`
  padding: 4px;
  font-size: 16px;
  margin-left: 8px;
`;

const Input = styled.input`
  padding: 4px;
  font-size: 16px;
  margin-left: 8px;
`;

const ButtonContainer = styled.div`
  margin-top: 32px;
  text-align: center;
`;

const Button = styled.button`
  font-size: 16px;
  padding: 8px 16px;
  margin: 0 8px;
`;

// Usage example
const App: React.FC = () => {
  const handleSubmit = () => {
    console.log('Form submitted');
  };

  const handleCancel = () => {
    console.log('Form cancelled');
  };

  return (
    <ReportForm 
      onSubmit={handleSubmit}
      onCancel={handleCancel}
    />
  );
};

export default App;