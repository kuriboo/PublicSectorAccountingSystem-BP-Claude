import React from 'react';
import styled from '@emotion/styled';

type CompanyInfoFormProps = {
  companyName: string;
  representativeName: string;
  capital: number;
  establishmentDate: string;
  numberOfEmployees: number;
  averageAge: number;
  onSubmit: () => void;
  onCancel: () => void;
  onClose: () => void;
};

const CompanyInfoForm: React.FC<CompanyInfoFormProps> = ({
  companyName,
  representativeName,
  capital,
  establishmentDate,
  numberOfEmployees,
  averageAge,
  onSubmit,
  onCancel,
  onClose,
}) => {
  return (
    <Container>
      <Title>企業基本情報</Title>
      <FormGroup>
        <Label>企業名称</Label>
        <Input type="text" defaultValue={companyName} />
      </FormGroup>
      <FormGroup>
        <Label>設立年月日</Label>
        <Input type="text" defaultValue={establishmentDate} />
      </FormGroup>
      <FormGroup>
        <Label>代表者名</Label>
        <Input type="text" defaultValue={representativeName} />
      </FormGroup>
      <FormGroup>
        <Label>資本金</Label>
        <Input type="number" defaultValue={capital} />
      </FormGroup>
      <FormGroup>
        <Label>従業員数</Label>
        <Input type="number" defaultValue={numberOfEmployees} />
      </FormGroup>
      <FormGroup>
        <Label>平均年齢</Label>
        <Input type="number" defaultValue={averageAge} />
      </FormGroup>
      <ButtonGroup>
        <Button onClick={onSubmit}>OK</Button>
        <Button onClick={onCancel}>クリア</Button>
        <Button onClick={onClose}>終了</Button>
      </ButtonGroup>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const Title = styled.h2`
  font-size: 18px;
  margin-bottom: 20px;
`;

const FormGroup = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  width: 100%;
`;

const Label = styled.label`
  flex: 1;
  margin-right: 10px;
`;

const Input = styled.input`
  flex: 2;
  padding: 5px;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const Button = styled.button`
  padding: 5px 10px;
  margin: 0 5px;
`;

// Usage example
const App: React.FC = () => {
  const handleSubmit = () => {
    // Handle form submission
  };

  const handleCancel = () => {
    // Handle form cancellation
  };

  const handleClose = () => {
    // Handle form closing
  };

  return (
    <CompanyInfoForm
      companyName="ABC Company"
      representativeName="John Doe"
      capital={1000000}
      establishmentDate="2022-01-01"
      numberOfEmployees={100}
      averageAge={35}
      onSubmit={handleSubmit}
      onCancel={handleCancel}      
      onClose={handleClose}
    />
  );
};

export default App;