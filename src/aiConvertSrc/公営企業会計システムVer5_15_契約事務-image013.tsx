import React from 'react';
import styled from 'styled-components';

// Define types for component props
interface RepresentativeProps {
  postalCode: string;
  address: string;
  phoneNumber: string;
  faxNumber: string;
  email: string;
  representative: string;
  representativeKana: string;
  manager: string;
  managerKana: string;
}

// Define styled components
const Container = styled.div`
  font-family: Arial, sans-serif;
  padding: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 100%;
  max-width: 400px;
  margin: 0 auto;

  @media (max-width: 600px) {
    max-width: 100%;
  }
`;

const Label = styled.label`
  display: block;
  margin-bottom: 4px;
  font-weight: bold;
`;

const Input = styled.input`
  width: 100%;
  padding: 8px;
  margin-bottom: 12px;
  box-sizing: border-box;
`;

const ButtonContainer = styled.div`
  text-align: right;
  margin-top: 16px;
`;

const Button = styled.button`
  padding: 8px 16px;
  margin-left: 8px;
  border: none;
  border-radius: 4px;
  background-color: #007bff;
  color: #fff;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

// Define main component
const Representative: React.FC<RepresentativeProps> = ({
  postalCode,
  address,
  phoneNumber,
  faxNumber,  
  email,
  representative,
  representativeKana,
  manager,
  managerKana,
}) => {
  return (
    <Container>
      <Label>郵便番号</Label>
      <Input type="text" value={postalCode} readOnly />

      <Label>住所</Label>
      <Input type="text" value={address} readOnly />

      <Label>電話番号</Label>  
      <Input type="tel" value={phoneNumber} readOnly />

      <Label>FAX</Label>
      <Input type="tel" value={faxNumber || '-'} readOnly />

      <Label>Eメール</Label>
      <Input type="email" value={email || '-'} readOnly />

      <Label>代表者役職</Label>
      <Input type="text" value={representative} readOnly />

      <Label>代表者 フリガナ</Label>
      <Input type="text" value={representativeKana} readOnly />
        
      <Label>担当者役職</Label>
      <Input type="text" value={manager || '-'} readOnly />

      <Label>担当者 フリガナ</Label>  
      <Input type="text" value={managerKana || '-'} readOnly />

      <ButtonContainer>
        <Button>OK</Button>
        <Button>クリア</Button>
        <Button>キャンセル</Button>
      </ButtonContainer>
    </Container>
  );
};

// Example usage
const App: React.FC = () => {
  const representativeData = {
    postalCode: '123-4567',
    address: '○△市内元町1-2-3',  
    phoneNumber: '11-2222-3333',
    faxNumber: '11-2222-3333',
    email: 'xx@yy.jp',
    representative: '代表取締役社長',
    representativeKana: 'ダイヒョウ タロウ',  
    manager: '課長',
    managerKana: 'カチョウ イチロウ',
  };

  return (
    <div>
      <h1>Representative Information</h1>
      <Representative {...representativeData} />
    </div>
  );
};

export default App;