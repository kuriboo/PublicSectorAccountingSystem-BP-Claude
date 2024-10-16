import React, { useState } from 'react';
import styled from '@emotion/styled';

interface Props {
  title?: string;
  fiscalYears?: string[];
  reportTypes?: string[];
  onLogin: (fiscalYear: string, reportType: string, accountCode: string, password: string) => void;
}

const LoginForm: React.FC<Props> = ({ 
  title = '公営企業会計システム', 
  fiscalYears = [],
  reportTypes = [],
  onLogin,
}) => {
  const [fiscalYear, setFiscalYear] = useState(fiscalYears[0] || '');
  const [reportType, setReportType] = useState(reportTypes[0] || '');
  const [accountCode, setAccountCode] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onLogin(fiscalYear, reportType, accountCode, password);
  };

  return (
    <Container>
      <Title>{title}</Title>
      <Form onSubmit={handleSubmit}>
        <Label>
          接続先:
          <Select value={fiscalYear} onChange={(e) => setFiscalYear(e.target.value)}>
            {fiscalYears.map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </Select>
        </Label>
        <Label>
          令和:
          <Input type="text" value={accountCode} onChange={(e) => setAccountCode(e.target.value)} />
          年度
        </Label>
        <Label>
          業務コード:
          <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </Label>
        <Label>
          所属担当:
          <Select value={reportType} onChange={(e) => setReportType(e.target.value)}>
            {reportTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </Select>
        </Label>
        <SubmitButton type="submit">終了</SubmitButton>
      </Form>
      <Footer>
        <div>Version : Ver5.19.0.0_20230731</div>
        <LoginButton>ログイン</LoginButton>
      </Footer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #f0f8ff;
  border-radius: 10px;
`;

const Title = styled.h1`
  font-size: 24px;
  margin-bottom: 20px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const Select = styled.select`
  margin-left: 10px;
`;

const Input = styled.input`
  margin-left: 10px;
`;

const SubmitButton = styled.button`
  align-self: flex-end;
  margin-top: 20px;
`;

const Footer = styled.footer`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 20px;
`;

const LoginButton = styled.button``;

// Usage example
const App: React.FC = () => {
  const handleLogin = (fiscalYear: string, reportType: string, accountCode: string, password: string) => {
    console.log('Login:', fiscalYear, reportType, accountCode, password);
  };

  return (
    <LoginForm
      fiscalYears={['上水道事業会計', '下水道事業会計']}
      reportTypes={['総務課', '管理課']}  
      onLogin={handleLogin}
    />
  );
};

export default App;