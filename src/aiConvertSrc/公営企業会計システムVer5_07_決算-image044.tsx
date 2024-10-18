import React from 'react';
import styled from '@emotion/styled';

type Props = {
  title: string;
  fiscalYear: string;
  company: string;
  onSubmit: (data: { company: string; fiscalYear: string }) => void;
  onCancel: () => void;
  onClose: () => void;
};

const Container = styled.div`
  background-color: #f0f0f0;
  padding: 20px;
  border-radius: 4px;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 18px;
  margin-bottom: 20px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Input = styled.input`
  padding: 8px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 200px;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const Button = styled.button`
  padding: 8px 16px;
  margin: 0 10px;
  border: none;
  border-radius: 4px;
  background-color: #007bff;
  color: #fff;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const FiscalYearProcessingDialog: React.FC<Props> = ({
  title,
  fiscalYear,
  company,
  onSubmit,
  onCancel,
  onClose,
}) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ company, fiscalYear });
  };

  return (
    <Container>
      <Title>{title}</Title>
      <Form onSubmit={handleSubmit}>
        <Input type="text" value={company} readOnly />
        <Input type="text" value={fiscalYear} readOnly />
        <ButtonGroup>
          <Button type="submit">OK</Button>
          <Button type="button" onClick={onCancel}>
            キャンセル
          </Button>
          <Button type="button" onClick={onClose}>
            終了
          </Button>
        </ButtonGroup>
      </Form>
    </Container>
  );
};

export default FiscalYearProcessingDialog;

// Usage example
const App: React.FC = () => {
  const handleSubmit = (data: { company: string; fiscalYear: string }) => {
    console.log('Submitted:', data);
  };

  const handleCancel = () => {
    console.log('Cancelled');
  };

  const handleClose = () => {
    console.log('Closed');
  };

  return (
    <FiscalYearProcessingDialog
      title="年間処理実処理件数表"
      fiscalYear="平成29年09月04日"
      company="ぎょうせい太郎"
      onSubmit={handleSubmit}
      onCancel={handleCancel}
      onClose={handleClose}
    />
  );
};