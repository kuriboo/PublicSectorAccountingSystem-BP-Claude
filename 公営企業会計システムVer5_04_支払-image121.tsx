import React from 'react';
import styled from '@emotion/styled';

type FlowProps = {
  title: string;
  date: string;
  operationType: 'new' | 'edit';
  format: 'text' | 'csv';
  dataType?: string;
  onSubmit: () => void;
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #f0f0f0;
`;

const Title = styled.h2`
  margin: 0;
  font-size: 18px;
`;

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const Label = styled.label`
  font-weight: bold;
`;

const Input = styled.input`
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Select = styled.select`
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const RadioGroup = styled.div`
  display: flex;
  gap: 10px;
`;

const RadioLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 5px;
`;

const Checkbox = styled.input`
  margin-right: 5px;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  margin-top: 10px;
`;

const Button = styled.button`
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  background-color: #007bff;
  color: #fff;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const Flow: React.FC<FlowProps> = ({ title, date, operationType, format, dataType, onSubmit }) => {
  return (
    <Container>
      <Title>{title}</Title>
      <InputGroup>
        <Label>振込日</Label>
        <Input type="text" value={date} readOnly />
      </InputGroup>
      <InputGroup>
        <Label>作成区分・新規</Label>
        <RadioGroup>
          <RadioLabel>
            <input type="radio" checked={operationType === 'new'} readOnly /> 新規
          </RadioLabel>
          <RadioLabel>
            <input type="radio" checked={operationType === 'edit'} readOnly /> 再作成
          </RadioLabel>
        </RadioGroup>
      </InputGroup>
      <InputGroup>
        <RadioLabel>
          <input type="radio" checked={format === 'text'} readOnly /> テキスト形式
        </RadioLabel>
        <RadioLabel>
          <input type="radio" checked={format === 'csv'} readOnly /> CSV形式
        </RadioLabel>
      </InputGroup>
      <InputGroup>
        <Select>
          <option>下水道課</option>
        </Select>
      </InputGroup>
      <InputGroup>
        <Checkbox type="checkbox" />
        公共料金支払データ登録の取込データは作成対象としない
      </InputGroup>
      <ButtonGroup>
        <Button onClick={onSubmit}>OK</Button>
        <Button>クリア</Button>
        <Button>終了</Button>
      </ButtonGroup>
    </Container>
  );
};

// Usage example:
const App: React.FC = () => {
  const handleSubmit = () => {
    console.log('Form submitted');
  };

  return (
    <Flow
      title="口座振込フロッピー作成"
      date="令和04年07月21日"
      operationType="new"
      format="text"
      dataType="下水道課"
      onSubmit={handleSubmit}
    />
  );
};

export default App;