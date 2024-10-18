import React from 'react';
import styled from '@emotion/styled';

type RegisterFormProps = {
  onSubmit: (data: {
    registrationType: string;
    companyName: string;
    businessType: string;
    postalCode: string;
    phoneNumber: string;
    faxNumber: string;
    treatmentFee: number;
    annualDuesAndHospitalFee: number;
    annualSupplementaryFee: number;
    registrationFee: number;
  }) => void;
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 20px;
`;

const Row = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;

const Label = styled.label`
  width: 150px;
`;

const Input = styled.input`
  padding: 5px;
  flex: 1;
`;

const Select = styled.select`
  padding: 5px;
  flex: 1;
`;

const FeeSummary = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #ccc;
  padding: 10px;
  width: 300px;

  > div {
    display: flex;
    justify-content: space-between;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 10px;
  justify-content: flex-end;
  margin-top: 20px;
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  cursor: pointer;
`;

const RegisterForm: React.FC<RegisterFormProps> = ({ onSubmit }) => {
  // フォームの状態管理
  const [registrationType, setRegistrationType] = React.useState('1');
  const [companyName, setCompanyName] = React.useState('');
  const [businessType, setBusinessType] = React.useState('接骨院');
  const [postalCode, setPostalCode] = React.useState('');
  const [phoneNumber, setPhoneNumber] = React.useState('');
  const [faxNumber, setFaxNumber] = React.useState('');

  // 手数料の計算
  const treatmentFee = 0;
  const annualDuesAndHospitalFee = 0;
  const annualSupplementaryFee = 600;
  const registrationFee = 600;
  const totalFee = treatmentFee + annualDuesAndHospitalFee + annualSupplementaryFee + registrationFee;

  // フォーム送信時の処理  
  const handleSubmit = () => {
    onSubmit({
      registrationType,
      companyName,
      businessType,
      postalCode,
      phoneNumber,
      faxNumber,
      treatmentFee,
      annualDuesAndHospitalFee,
      annualSupplementaryFee,
      registrationFee,
    });
  };

  return (
    <Container>
      <Row>
        <Label>次期会計年度</Label>
        <div>平成30</div>
      </Row>
      <Row>
        <Label>事業実施計画登録</Label>  
        <Select
          value={registrationType}
          onChange={(e) => setRegistrationType(e.target.value)}
        >
          <option value="1">日本協議会回路会員催業務</option>
          <option value="2">日本協議会回路会員催業務</option>
        </Select>
      </Row>
      <Row>
        <Label>施術所</Label>
        <Input value={companyName} onChange={(e) => setCompanyName(e.target.value)} />  
      </Row>
      <Row>    
        <Label>業種</Label>
        <Select value={businessType} onChange={(e) => setBusinessType(e.target.value)}>
          <option value="接骨院">接骨院</option>
          <option value="整骨院">整骨院</option>
        </Select>

        <Label>区分</Label>
        <div>継続</div>
      </Row>
      <Row>
        <Label>郵便番号</Label>
        <Input value={postalCode} onChange={(e) => setPostalCode(e.target.value)} />
      </Row>
      <Row>
        <Label>℡</Label>  
        <Input value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
      </Row>
      <Row>  
        <Label>Fax</Label>
        <Input value={faxNumber} onChange={(e) => setFaxNumber(e.target.value)} /> 
      </Row>
      
      <FeeSummary>
        <div>
          <span>次年度会費</span>
          <span>0（千円）</span>
        </div>
        <div>
          <span>次年度施設費</span>  
          <span>0（千円）</span>
        </div>
        <div>
          <span>次年度以降の計画額</span>
          <span>600（千円）</span>  
        </div>
        <div>
          <span>総事業費</span>
          <span>{totalFee}（千円）</span>
        </div>
      </FeeSummary>

      <ButtonGroup>
        <Button onClick={handleSubmit}>内部開始</Button>  
        <Button>閉会判断</Button>
      </ButtonGroup>
    </Container>
  );
};

export default RegisterForm;

// サンプル使用例
const SampleUsage: React.FC = () => {
  const handleRegisterFormSubmit = (data: any) => {
    console.log(data);
    // フォームデータの送信処理等を実装
  };

  return (
    <div>
      <h1>事業実施計画登録</h1>
      <RegisterForm onSubmit={handleRegisterFormSubmit} />
    </div>  
  );
};