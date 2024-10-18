import React from 'react';
import styled from '@emotion/styled';

type FixedDateRangeFormProps = {
  defaultStartDate?: string;
  defaultEndDate?: string;
  onSubmit: (startDate: string, endDate: string) => void;
};

const FixedDateRangeForm: React.FC<FixedDateRangeFormProps> = ({
  defaultStartDate = '',
  defaultEndDate = '',
  onSubmit,
}) => {
  const [startDate, setStartDate] = React.useState(defaultStartDate);
  const [endDate, setEndDate] = React.useState(defaultEndDate);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(startDate, endDate);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Title>固定資産現況表作成</Title>
      <DateRow>
        <DateLabel>作業年月日</DateLabel>
        <DateValue>平成29年09月12日</DateValue>
      </DateRow>
      <Row>
        <RowLabel>範囲指定</RowLabel>
        <InputWrapper>
          <DateInput
            type="text"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
          />
          <Separator>～</Separator>
          <DateInput
            type="text"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
          />
        </InputWrapper>
      </Row>
      <Row>
        <RowLabel>取得年月日</RowLabel>
        <InputWrapper>
          <DateValue>平成29年04月01日</DateValue>
          <Separator>～</Separator>
          <DateValue>平成30年03月31日</DateValue>
        </InputWrapper>
      </Row>
      <ButtonRow>
        <SubmitButton type="submit">OK</SubmitButton>
        <ClearButton type="button">クリア</ClearButton>
        <CloseButton type="button">終了</CloseButton>
      </ButtonRow>
    </Form>
  );
};

// Styles
const Form = styled.form`
  background: #f0f0f0;
  padding: 16px;
  min-width: 400px;
`;

const Title = styled.h2`
  font-size: 18px;
  margin: 0 0 16px;
`;

const DateRow = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
`;

const DateLabel = styled.span`
  width: 100px;
`;

const DateValue = styled.span`
  margin-left: 8px;
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
`;

const RowLabel = styled.span`
  width: 100px;
`;

const InputWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const DateInput = styled.input`
  padding: 4px;
  width: 120px;
`;

const Separator = styled.span`
  margin: 0 8px;
`;

const ButtonRow = styled.div`
  margin-top: 16px;
  text-align: center;
`;

const SubmitButton = styled.button`
  padding: 8px 16px;
  margin-right: 8px;
`;

const ClearButton = styled.button`
  padding: 8px 16px;
  margin-right: 8px;
`;

const CloseButton = styled.button`
  padding: 8px 16px;
`;

// Usage example
const App: React.FC = () => {
  const handleSubmit = (startDate: string, endDate: string) => {
    console.log('Start Date:', startDate);
    console.log('End Date:', endDate);
  };

  return (
    <div>
      <h1>Fixed Date Range Form Example</h1>
      <FixedDateRangeForm
        defaultStartDate="00000000"
        defaultEndDate="99999999"
        onSubmit={handleSubmit}
      />
    </div>
  );
};

export default App;