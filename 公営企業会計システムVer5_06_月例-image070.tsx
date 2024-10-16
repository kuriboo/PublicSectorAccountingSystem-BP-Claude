import React from 'react';
import styled from '@emotion/styled';

type RangeSelectorProps = {
  title: string;
  startDate: string;
  endDate: string;
  startAmount: number;
  endAmount: number;
  onClickOK?: () => void;
  onClickCancel?: () => void;
  onClickClose?: () => void;
};

const RangeSelector: React.FC<RangeSelectorProps> = ({
  title,
  startDate,
  endDate,
  startAmount,
  endAmount,
  onClickOK,
  onClickCancel,
  onClickClose,
}) => {
  return (
    <Container>
      <Title>{title}</Title>
      <Row>
        <Label>範囲指定</Label>
        <Input type="text" value={startDate} readOnly />
        <Separator>～</Separator>
        <Input type="text" value={endDate} readOnly />
      </Row>
      <Row>
        <Label>事業科目</Label>
        <Input type="text" value={startAmount.toLocaleString()} readOnly />
        <Separator>～</Separator>
        <Input type="text" value={endAmount.toLocaleString()} readOnly />
      </Row>
      <ButtonRow>
        <Button onClick={onClickOK}>OK</Button>
        <Button onClick={onClickCancel}>クリア</Button>
        <Button onClick={onClickClose}>終了</Button>
      </ButtonRow>
    </Container>
  );
};

// Styled components
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #f0f0f0;
  border-radius: 8px;
  width: 100%;
  max-width: 400px;
`;

const Title = styled.h2`
  margin-bottom: 20px;
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  width: 100%;
`;

const Label = styled.label`
  margin-right: 10px;
  width: 80px;
`;

const Input = styled.input`
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 120px;
`;

const Separator = styled.span`
  margin: 0 10px;
`;

const ButtonRow = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
  width: 100%;
`;

const Button = styled.button`
  padding: 8px 16px;
  margin-left: 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

// Usage example
const App: React.FC = () => {
  const handleOK = () => {
    console.log('OK clicked');
  };

  const handleCancel = () => {
    console.log('Cancel clicked');
  };

  const handleClose = () => {
    console.log('Close clicked');
  };

  return (
    <RangeSelector
      title="事業別執行明細表"
      startDate="平成29年09月"
      endDate="平成29年09月"
      startAmount={0}
      endAmount={99999999}
      onClickOK={handleOK}
      onClickCancel={handleCancel}
      onClickClose={handleClose}
    />
  );
};

export default App;