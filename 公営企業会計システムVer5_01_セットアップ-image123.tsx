import React from 'react';
import styled from 'styled-components';

type CarValueEstimateProps = {
  registrationCode: string;
  modelName: string;
  modelGrade: string;
  mileage: number;
  annualInspectionYear: number;
  annualInspectionMonth: number;
  estimatedValue: number;
};

const CarValueEstimate: React.FC<CarValueEstimateProps> = ({
  registrationCode,
  modelName,
  modelGrade,
  mileage,
  annualInspectionYear,
  annualInspectionMonth,
  estimatedValue,
}) => {
  return (
    <Container>
      <Header>
        <Title>登録</Title>
        <Value>{registrationCode}</Value>
      </Header>
      <Body>
        <Row>
          <Label>車種コード</Label>
          <Value>{registrationCode || '-'}</Value>
        </Row>
        <Row>
          <Label>車種名称</Label>
          <Value>{modelName || '-'}</Value>
        </Row>
        <Row>
          <Label>車種規格</Label>
          <Value>{modelGrade || '-'}</Value>
        </Row>
        <Row>
          <Label>適用開始年月日</Label>
          <Value>
            {annualInspectionYear && annualInspectionMonth
              ? `${annualInspectionYear}年${annualInspectionMonth}月`
              : '-'}
          </Value>
        </Row>
        <Row>
          <Label>車価</Label>
          <Value>{estimatedValue ? `${estimatedValue.toLocaleString()}円` : '-'}</Value>
        </Row>
      </Body>
      <ButtonGroup>
        <Button>前データ</Button>
        <Button>次データ</Button>
        <Button primary>OK</Button>
        <Button>クリア</Button>
        <Button>キャンセル</Button>
      </ButtonGroup>
    </Container>
  );
};

// Styled components
const Container = styled.div`
  font-family: sans-serif;
  border: 1px solid #ccc;
  padding: 16px;
  max-width: 400px;
  margin: 0 auto;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
`;

const Title = styled.h2`
  margin: 0;
  margin-right: 16px;
`;

const Body = styled.div`
  margin-bottom: 16px;
`;

const Row = styled.div`
  display: flex;
  margin-bottom: 8px;
`;

const Label = styled.div`
  width: 120px;
  font-weight: bold;
`;

const Value = styled.div`
  flex: 1;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Button = styled.button<{ primary?: boolean }>`
  padding: 4px 8px;
  border: none;
  background: ${(props) => (props.primary ? '#007bff' : '#f0f0f0')};
  color: ${(props) => (props.primary ? '#fff' : '#333')};
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;

// Usage example
const sampleData: CarValueEstimateProps = {
  registrationCode: '00001',
  modelName: '液体塩素',
  modelGrade: '10トンへ',
  mileage: 0,
  annualInspectionYear: 2022,
  annualInspectionMonth: 4,
  estimatedValue: 120000,
};

const App: React.FC = () => {
  return (
    <div>
      <h1>Car Value Estimate</h1>
      <CarValueEstimate {...sampleData} />
    </div>
  );
};

export default App;