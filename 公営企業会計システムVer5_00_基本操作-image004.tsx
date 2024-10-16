import React from 'react';
import styled from '@emotion/styled';

// 型定義
interface PublicEnterpriseAccountingSystemProps {
  version: string;
  companyName: string;
  jobTitle: string;
  employeeCode: string;
  password: string;
}

// スタイル定義
const SystemWrapper = styled.div`
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f5f5f5;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  font-family: Arial, sans-serif;

  @media (max-width: 600px) {
    padding: 10px;
  }
`;

const Title = styled.h1`
  font-size: 24px;
  color: #333;
  text-align: center;
  margin-bottom: 20px;

  @media (max-width: 600px) {
    font-size: 20px;
  }
`;

const FormGroup = styled.div`
  margin-bottom: 20px;
`;

const Label = styled.label`
  display: block;
  font-size: 16px;
  color: #333;
  margin-bottom: 5px;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Select = styled.select`
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Button = styled.button`
  display: block;
  width: 100%;
  padding: 10px;
  font-size: 16px;
  color: #fff;
  background-color: #007bff;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

// コンポーネント定義
const PublicEnterpriseAccountingSystem: React.FC<PublicEnterpriseAccountingSystemProps> = ({
  version,
  companyName,
  jobTitle,
  employeeCode,
  password,
}) => {
  // 例外処理
  if (!version || !companyName || !jobTitle || !employeeCode || !password) {
    return <div>必要な情報が入力されていません。</div>;
  }

  return (
    <SystemWrapper>
      <Title>公営企業会計システム</Title>
      <FormGroup>
        <Label>接続先</Label>
        <Select>
          <option>上水道事業会計</option>
        </Select>
      </FormGroup>
      <FormGroup>
        <Label>年度</Label>
        <Input type="text" value="29" readOnly />
      </FormGroup>
      <FormGroup>
        <Label>職員コード</Label>
        <Input type="text" value={employeeCode} readOnly />
      </FormGroup>
      <FormGroup>
        <Label>所属担当</Label>
        <Select>
          <option>総務課 予算・会計担当</option>
        </Select>
      </FormGroup>
      <FormGroup>
        <Label>パスワード</Label>
        <Input type="password" value={password} readOnly />
      </FormGroup>
      <Button>ログイン</Button>
    </SystemWrapper>
  );
};

export default PublicEnterpriseAccountingSystem;

// 使用例
const App: React.FC = () => {
  return (
    <PublicEnterpriseAccountingSystem
      version="20170401"
      companyName="○○市上水道事業"
      jobTitle="主任"
      employeeCode="99999"
      password="password"
    />
  );
};