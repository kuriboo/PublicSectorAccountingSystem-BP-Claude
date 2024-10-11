import React from 'react';
import styled from '@emotion/styled';

interface EntryFormProps {
  years: number;
  months: number;
  fiscalYear: string;
  onSubmit: () => void;
  onCancel: () => void;
  onClear: () => void;
}

const EntryForm: React.FC<EntryFormProps> = ({
  years,
  months,
  fiscalYear,
  onSubmit,
  onCancel,
  onClear,
}) => {
  return (
    <Container>
      <Title>入札経過記載書</Title>
      <Subtitle>
        行政市水道事業会計
        <br />
        総務課 予算・会計担当 ぜよう世い太郎
        <br />
        平成29年09月05日
      </Subtitle>
      <Form>
        <InputGroup>
          <Label>年度</Label>
          <Input type="number" value={years} />
          <Label>年</Label>
        </InputGroup>
        <InputGroup>
          <Input type="number" value={months} />
          <Label>ヶ月</Label>
        </InputGroup>
        <InputGroup>
          <Label>工事</Label>
          <Select>
            <option>請負</option>
          </Select>
        </InputGroup>
        <InputGroup>
          <Label>物件</Label>
          <Input type="text" value={fiscalYear || '42910000月分手当等'} />
        </InputGroup>
        <InputGroup>
          <Checkbox type="checkbox" checked={true} />
          <Label>全選択</Label>
        </InputGroup>
      </Form>
      <ButtonGroup>
        <Button onClick={onSubmit}>OK</Button>
        <Button onClick={onClear}>クリア</Button>
        <Button onClick={onCancel}>終了</Button>
      </ButtonGroup>
    </Container>
  );
};

// Styled components
const Container = styled.div`
  font-family: sans-serif;
  margin: 16px;
  padding: 16px;
  border: 1px solid #ccc;
  width: 400px;
`;

const Title = styled.h2`
  margin: 0 0 8px;
`;

const Subtitle = styled.p`
  margin: 0 0 16px;
  font-size: 14px;
`;

const Form = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const InputGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const Label = styled.label`
  width: 60px;
`;

const Input = styled.input`
  padding: 4px;
  width: 60px;
`;

const Select = styled.select`
  padding: 4px;
`;

const Checkbox = styled.input`
  margin-right: 4px;
`;

const ButtonGroup = styled.div`
  margin-top: 16px;
  display: flex;
  justify-content: flex-end;
  gap: 8px;
`;

const Button = styled.button`
  padding: 8px 16px;
  min-width: 80px;
`;

// Sample usage
const App: React.FC = () => {
  const handleSubmit = () => {
    console.log('Submit');
  };

  const handleCancel = () => {
    console.log('Cancel');
  };

  const handleClear = () => {
    console.log('Clear');
  };

  return (
    <EntryForm
      years={29}
      months={9}
      fiscalYear="42910000月分手当等"
      onSubmit={handleSubmit}
      onCancel={handleCancel}
      onClear={handleClear}
    />
  );
};

export default App;