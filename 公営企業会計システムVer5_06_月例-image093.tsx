import React from 'react';
import styled from '@emotion/styled';

type CashFlowWorkEntryFormProps = {
  onSubmit: () => void;
  onCancel: () => void;
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #f0f0f0;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);

  @media (max-width: 600px) {
    padding: 10px;
  }
`;

const Title = styled.h2`
  font-size: 20px;
  margin-bottom: 20px;
  color: #333;

  @media (max-width: 600px) {
    font-size: 18px;
    margin-bottom: 15px;
  }
`;

const FormGroup = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const Label = styled.label`
  font-weight: bold;
  margin-right: 10px;
  color: #555;

  @media (max-width: 600px) {
    margin-bottom: 5px;
  }
`;

const Input = styled.input`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 14px;

  @media (max-width: 600px) {
    width: 100%;
  }
`;

const Select = styled.select`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 14px;

  @media (max-width: 600px) {
    width: 100%;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: stretch;
  }
`;

const Button = styled.button`
  padding: 10px 20px;
  margin-left: 10px;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;

  @media (max-width: 600px) {
    margin-left: 0;
    margin-bottom: 10px;
  }
`;

const SubmitButton = styled(Button)`
  background-color: #007bff;
  color: #fff;

  &:hover {
    background-color: #0056b3;
  }
`;

const CancelButton = styled(Button)`
  background-color: #6c757d;
  color: #fff;

  &:hover {
    background-color: #5a6268;
  }
`;

const CashFlowWorkEntryForm: React.FC<CashFlowWorkEntryFormProps> = ({ onSubmit, onCancel }) => {
  return (
    <Container>
      <Title>キャッシュ・フロー仕訳伝票一括抽出</Title>
      <FormGroup>
        <Label>範囲指定</Label>
        <Input type="date" defaultValue="令和5年10月27日" /> ～ <Input type="date" defaultValue="令和5年10月27日" />
      </FormGroup>
      <FormGroup>
        <Label>セグメント</Label>
        <Select>
          <option value="">選択してください</option>
          {/* Add segment options */}
        </Select>
      </FormGroup>
      <ButtonGroup>
        <CancelButton onClick={onCancel}>クリア</CancelButton>
        <SubmitButton onClick={onSubmit}>終了</SubmitButton>
      </ButtonGroup>
    </Container>
  );
};

export default CashFlowWorkEntryForm;

// Usage example
const UsageExample: React.FC = () => {
  const handleSubmit = () => {
    console.log('Form submitted');
  };

  const handleCancel = () => {
    console.log('Form canceled');
  };

  return (
    <div>
      <h1>Cash Flow Work Entry Form Example</h1>
      <CashFlowWorkEntryForm onSubmit={handleSubmit} onCancel={handleCancel} />
    </div>
  );
};