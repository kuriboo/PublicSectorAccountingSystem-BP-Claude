import React from 'react';
import styled from '@emotion/styled';

interface FormProps {
  title: string;
  project: string;
  bank: string;
  indent: number;
  onOk: () => void;
  onCancel: () => void;
}

const Form: React.FC<FormProps> = ({ title, project, bank, indent, onOk, onCancel }) => {
  return (
    <FormContainer>
      <Title>{title}</Title>
      <InputGroup>
        <Label>項目名称1</Label>
        <Input type="text" value={project} readOnly />
      </InputGroup>
      <InputGroup>
        <Label>改行区分</Label>
        <Select value={bank}>
          <option value="1">1行改行</option>
        </Select>
      </InputGroup>
      <InputGroup>
        <Label>インデント</Label>
        <Input type="number" value={indent} readOnly />
      </InputGroup>
      <ButtonGroup>
        <Button onClick={onOk}>OK</Button>
        <Button onClick={onCancel}>クリア</Button>
        <CancelButton onClick={onCancel}>キャンセル</CancelButton>
      </ButtonGroup>
    </FormContainer>
  );
};

const FormContainer = styled.div`
  background-color: #f0f0f0;
  padding: 16px;
  width: 300px;
`;

const Title = styled.div`
  font-weight: bold;
  margin-bottom: 16px;
`;

const InputGroup = styled.div`
  margin-bottom: 8px;
`;

const Label = styled.label`
  display: inline-block;
  width: 100px;
`;

const Input = styled.input`
  width: 150px;
`;

const Select = styled.select`
  width: 150px;
`;

const ButtonGroup = styled.div`
  text-align: center;
  margin-top: 16px;
`;

const Button = styled.button`
  margin: 0 8px;
`;

const CancelButton = styled(Button)`
  background-color: #ccc;
`;

// Usage example
const App: React.FC = () => {
  const handleOk = () => {
    // Handle OK button click
  };

  const handleCancel = () => {
    // Handle Cancel button click  
  };

  return (
    <Form
      title="詳細設定"
      project="1. 業務活動によるキャッシュ・フロー" 
      bank="1"
      indent={0}
      onOk={handleOk}
      onCancel={handleCancel}
    />
  );
};

export default App;