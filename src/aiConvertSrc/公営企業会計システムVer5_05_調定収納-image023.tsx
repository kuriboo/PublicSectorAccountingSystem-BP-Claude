import React from 'react';
import styled from 'styled-components';

// 相手先情報のプロパティ型定義
type ContactInfoProps = {
  name: string;
  phoneNumber: string;
  postalCode: string;
  address: string;
  faxNumber?: string;
};

// 相手先情報コンポーネント
const ContactInfo: React.FC<ContactInfoProps> = ({
  name,
  phoneNumber,
  postalCode,
  address,
  faxNumber,
}) => {
  return (
    <Container>
      <Title>相手先情報</Title>
      <InputWrapper>
        <Label>名称</Label>
        <Input type="text" value={name} readOnly />
      </InputWrapper>
      <InputWrapper>
        <Label>略名</Label>
        <Input type="text" value={phoneNumber} readOnly />
      </InputWrapper>
      <InputWrapper>
        <Label>郵便番号</Label>
        <Input type="text" value={postalCode} readOnly />
        <Button>住所</Button>
      </InputWrapper>
      <InputWrapper>
        <Label>住所</Label>
        <Input type="text" value={address} readOnly />
      </InputWrapper>
      <InputWrapper>
        <Label>電話番号</Label>
        <Input type="text" value={phoneNumber} readOnly />
      </InputWrapper>
      {faxNumber && (
        <InputWrapper>
          <Label>FAX番号</Label>
          <Input type="text" value={faxNumber} readOnly />
        </InputWrapper>
      )}
      <ButtonGroup>
        <Button primary>OK</Button>
        <Button>クリア</Button>
        <Button>キャンセル</Button>
      </ButtonGroup>
    </Container>
  );
};

// スタイリング
const Container = styled.div`
  background-color: #f0f0f0;
  padding: 20px;
  border-radius: 4px;
  width: 400px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  @media (max-width: 600px) {
    width: 100%;
  }
`;

const Title = styled.h2`
  margin-bottom: 20px;
`;

const InputWrapper = styled.div`
  margin-bottom: 10px;
`;

const Label = styled.label`
  display: inline-block;
  width: 100px;
  font-weight: bold;
`;

const Input = styled.input`
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 200px;
`;

const Button = styled.button<{ primary?: boolean }>`
  padding: 8px 12px;
  background-color: ${(props) => (props.primary ? '#007bff' : '#fff')};
  color: ${(props) => (props.primary ? '#fff' : '#333')};
  border: 1px solid #ccc;
  border-radius: 4px;
  cursor: pointer;
  margin-left: 10px;

  &:hover {
    background-color: ${(props) => (props.primary ? '#0056b3' : '#f0f0f0')};
  }
`;

const ButtonGroup = styled.div`
  margin-top: 20px;
  text-align: right;
`;

// 使用例
const App: React.FC = () => {
  const contactData: ContactInfoProps = {
    name: '株式会社ぎょうせい',
    phoneNumber: '136-8575',
    postalCode: '136-8575',
    address: '東京都江東区新木場1丁目18-11',
    faxNumber: '03-5665-6540',
  };

  return (
    <div>
      <h1>相手先情報</h1>
      <ContactInfo {...contactData} />
    </div>
  );
};

export default App;