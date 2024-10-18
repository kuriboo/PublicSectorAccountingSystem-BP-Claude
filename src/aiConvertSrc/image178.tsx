import React from 'react';
import styled from '@emotion/styled';

type CompanyMasterFormProps = {
  data: {
    name: string;
    nameKana: string;
    postalCode: string;
    address: string;
    phoneNumber: string;
    faxNumber: string;
  }
};

const CompanyMasterForm: React.FC<CompanyMasterFormProps> = ({ data }) => {
  const {
    name,
    nameKana,
    postalCode,
    address,
    phoneNumber,
    faxNumber
  } = data;

  return (
    <FormContainer>
      <FormRow>
        <FormLabel>所属</FormLabel>
        <FormValue>{name}</FormValue>
        <FormLabel>所属</FormLabel>
        <FormValue>{nameKana}</FormValue>
      </FormRow>
      <FormRow>
        <FormLabel>担当コード</FormLabel>
        <FormValue>{postalCode}</FormValue>
        <FormLabel />
        <FormValue>{address}</FormValue>
      </FormRow>
      <FormRow>
        <FormLabel>APグループコード</FormLabel>
        <FormValue>{phoneNumber}</FormValue>
        <FormLabel>（権限可能所属）</FormLabel>
        <FormValue>{faxNumber}</FormValue>
      </FormRow>
      <ButtonContainer>
        <Button type="button">OK</Button>
        <Button type="button">クリア</Button>
        <Button type="button">終了</Button>
      </ButtonContainer>
    </FormContainer>
  );
};

// Styled components
const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 20px;
`;

const FormRow = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const FormLabel = styled.label`
  flex: 1;
  text-align: right;
  
  @media (max-width: 600px) {
    text-align: left;
  }
`;

const FormValue = styled.span`
  flex: 2;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  margin-top: 20px;
`;

const Button = styled.button`
  padding: 5px 10px;
`;

// Sample data for demonstration
const sampleData = {
  name: '○○○○○○',
  nameKana: '○○○○○○○',
  postalCode: '○○○',
  address: '○○○',
  phoneNumber: '○○○○○○○',
  faxNumber: '○○○○○○○'
};

const CompanyMasterFormDemo: React.FC = () => {
  return (
    <div>
      <h2>Company Master Form Demo</h2>
      <CompanyMasterForm data={sampleData} />
    </div>
  );
};

export default CompanyMasterFormDemo;