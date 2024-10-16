import React from 'react';
import styled from '@emotion/styled';

type ValueCalculationProps = {
  year: number;
  period: number;
  collectMethod?: '前年度決算額' | '本年度予算額';
  description?: string;
  onOk?: () => void;
  onCancel?: () => void;
  onClose?: () => void;
};

const ValueCalculation: React.FC<ValueCalculationProps> = ({
  year,
  period,
  collectMethod = '前年度決算額',
  description = '',
  onOk,
  onCancel,
  onClose,
}) => {
  return (
    <Container>
      <Header>
        <Title>実績値集計処理</Title>
        <Info>
          <Label>総務課</Label>
          <Value>予算・会計担当 ぎょうせい太郎</Value>
          <Label>平成29年06月09日</Label>
        </Info>
      </Header>
      <Content>
        <Row>
          <Label>次期会計年度</Label>
          <Value>{year}年度</Value>
        </Row>
        <Row>
          <Label>集計金額</Label>
          <RadioGroup>
            <Radio
              type="radio"
              checked={collectMethod === '前年度決算額'}
            />
            <RadioLabel>前年度決算額</RadioLabel>
            <Radio
              type="radio"
              checked={collectMethod === '本年度予算額'}
            />
            <RadioLabel>本年度予算額</RadioLabel>
          </RadioGroup>
        </Row>
        <Row>
          <Label>処理概要</Label>
          <Description>{description}</Description>
        </Row>
      </Content>
      <Footer>
        <Button onClick={onOk}>OK</Button>
        <Button onClick={onCancel}>クリア</Button>
        <Button onClick={onClose}>終了</Button>
      </Footer>
    </Container>
  );
};

const Container = styled.div`
  font-family: sans-serif;
  border: 1px solid #ccc;
  padding: 16px;
  width: 450px;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
`;

const Title = styled.div`
  font-weight: bold;
  font-size: 18px;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 14px;
`;

const Content = styled.div`
  margin-bottom: 16px;
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
`;

const Label = styled.div`
  width: 100px;
  margin-right: 8px;
`;

const Value = styled.div`
  flex: 1;
`;

const RadioGroup = styled.div`
  display: flex;
  align-items: center;
`;

const Radio = styled.input`
  margin-right: 4px;
`;

const RadioLabel = styled.label`
  margin-right: 8px;
`;

const Description = styled.div`
  flex: 1;
  padding: 8px;
  border: 1px solid #ccc;
  font-size: 14px;
`;

const Footer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const Button = styled.button`
  margin-left: 8px;
  padding: 4px 16px;
`;

// Usage example
const App: React.FC = () => {
  return (
    <ValueCalculation
      year={2023}
      period={30}
      description="前年度の決算額または本年度の予算額を集計します。何回でも実行可能です。予算額はその時点での最新を集計します。"
    />
  );
};

export default App;