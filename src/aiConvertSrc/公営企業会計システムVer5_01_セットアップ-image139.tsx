import React from 'react';
import styled from '@emotion/styled';

interface BankTransferFormProps {
  bankCode1?: string;
  bankCode2?: string;
  onSubmit?: () => void;
  onCancel?: () => void;
  onClose?: () => void;
}

const Container = styled.div`
  background-color: #f0f0f0;
  padding: 20px;
  border-radius: 5px;
  width: 300px;
  margin: 0 auto;
`;

const Title = styled.h2`
  margin-bottom: 20px;
`;

const FormGroup = styled.div`
  margin-bottom: 15px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 5px;
`;

const Input = styled.input`
  width: 100%;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 3px;

  &:read-only {
    background-color: #eee;
  }
`;

const ButtonGroup = styled.div`
  text-align: right;
  margin-top: 20px;
`;

const Button = styled.button`
  margin-left: 10px;
  padding: 5px 10px;
  border: none;
  border-radius: 3px;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;

const BankTransferForm: React.FC<BankTransferFormProps> = ({
  bankCode1 = '',
  bankCode2 = '',
  onSubmit,
  onCancel,
  onClose,
}) => {
  return (
    <Container>
      <Title>銀行／支店マスタリスト作成</Title>
      <FormGroup>
        <Label>範囲指定</Label>
        <Input type="text" value={bankCode1} readOnly />
        <span>～</span>
        <Input type="text" value={bankCode2} readOnly />
      </FormGroup>
      <ButtonGroup>
        <Button onClick={onSubmit}>実行</Button>
        <Button onClick={onCancel}>クリア</Button>
        <Button onClick={onClose}>終了</Button>
      </ButtonGroup>
    </Container>
  );
};

// Usage example
const BankTransferFormExample = () => {
  const handleSubmit = () => {
    console.log('Submitted');
  };

  const handleCancel = () => {
    console.log('Cancelled');
  };

  const handleClose = () => {
    console.log('Closed');
  };

  return (
    <BankTransferForm
      bankCode1="0000"
      bankCode2="9999"
      onSubmit={handleSubmit}
      onCancel={handleCancel}
      onClose={handleClose}
    />
  );
};

export default BankTransferForm;