import React from 'react';
import styled from 'styled-components';

// 顧客情報のプロパティ型定義
type CustomerInfo = {
  postalCode: string;
  address: string;
  phoneNumber: string;
  fax: string;
  email: string;
  representative: string;
  position: string;
};

// 顧客情報入力フォームコンポーネント
const CustomerInfoForm: React.FC<{ info?: CustomerInfo }> = ({ info }) => {
  // デフォルト値の設定
  const defaultInfo: CustomerInfo = {
    postalCode: '',
    address: '',
    phoneNumber: '',
    fax: '',
    email: '',
    representative: '',
    position: '',
    ...info,
  };

  return (
    <Form>
      <Label>郵便番号</Label>
      <Input type="text" defaultValue={defaultInfo.postalCode} />
      <Label>住所</Label>
      <Input type="text" defaultValue={defaultInfo.address} />
      <PhoneBlock>
        <Label>電話番号</Label>
        <Input type="tel" defaultValue={defaultInfo.phoneNumber} />
        <Label>FAX</Label>
        <Input type="tel" defaultValue={defaultInfo.fax} />
      </PhoneBlock>
      <Label>Eメール</Label>
      <Input type="email" defaultValue={defaultInfo.email} />
      <Label>代表者役職</Label>
      <Input type="text" defaultValue={defaultInfo.position} />
      <Label>代表者</Label>
      <Input type="text" defaultValue={defaultInfo.representative} />
      <ButtonBlock>
        <Button>OK</Button>
        <Button>クリア</Button>
        <Button>キャンセル</Button>
      </ButtonBlock>
    </Form>
  );
};

// スタイリング
const Form = styled.form`
  display: grid;
  gap: 8px;
  padding: 16px;
  @media (min-width: 768px) {
    grid-template-columns: 100px 1fr;
  }
`;

const Label = styled.label`
  font-weight: bold;
  @media (min-width: 768px) {
    justify-self: end;
  }  
`;

const Input = styled.input`
  padding: 4px;
`;

const PhoneBlock = styled.div`
  display: grid;
  gap: 8px;
  grid-template-columns: 100px 1fr;
  @media (min-width: 768px) {
    grid-column: 2;
    grid-template-columns: 100px 1fr 80px 1fr; 
  }
`;

const ButtonBlock = styled.div`
  text-align: center;
  grid-column: 1 / -1;
`;

const Button = styled.button`
  margin: 0 8px;
`;

// 使用例
const CustomerInfoFormExample = () => {
  const info = {
    postalCode: '123-4567',
    address: '東京都港区1-2-3',
    phoneNumber: '03-1234-5678',
    fax: '03-1234-5678',
    email: 'info@example.com',
    representative: '田中 太郎',
    position: '代表取締役',
  };

  return (
    <div>
      <h2>顧客情報入力フォーム</h2>
      <CustomerInfoForm info={info} />
    </div>
  );
};

export default CustomerInfoFormExample;