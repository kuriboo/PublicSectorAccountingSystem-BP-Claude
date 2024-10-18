import React from 'react';
import styled from '@emotion/styled';

interface CompanyInfoFormProps {
  companyName?: string;
  companyType?: '法人' | '個人事業主';
  postalCode?: string;
  address?: string;
  phoneNumber1?: string;
  phoneNumber2?: string;
  faxNumber?: string;
  managementNumber?: string;
  onSubmit: (data: CompanyInfoFormData) => void;
}

interface CompanyInfoFormData {
  companyName: string;
  companyType: '法人' | '個人事業主';
  postalCode: string;
  address: string;
  phoneNumber1: string;
  phoneNumber2: string;
  faxNumber: string;
  managementNumber: string;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 16px;
  background-color: #f0f0f0;
`;

const Row = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: stretch;
  }
`;

const Label = styled.label`
  flex: 1;
`;

const Input = styled.input`
  flex: 2;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const RadioGroup = styled.div`
  display: flex;
  gap: 16px;
`;

const SubmitButton = styled.button`
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  background-color: #007bff;
  color: #fff;
  cursor: pointer;
`;

const CompanyInfoForm: React.FC<CompanyInfoFormProps> = ({
  companyName = '',
  companyType = '法人',
  postalCode = '',
  address = '',
  phoneNumber1 = '',
  phoneNumber2 = '',
  faxNumber = '',
  managementNumber = '',
  onSubmit,
}) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data: CompanyInfoFormData = {
      companyName,
      companyType,
      postalCode,
      address,
      phoneNumber1,
      phoneNumber2,
      faxNumber,
      managementNumber,
    };
    onSubmit(data);
  };

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <Row>
          <Label>会社名</Label>
          <Input type="text" value={companyName} required />
        </Row>
        <Row>
          <Label>区分</Label>
          <RadioGroup>
            <label>
              <input
                type="radio"
                value="法人"
                checked={companyType === '法人'}
                onChange={() => {}}
              />
              法人
            </label>
            <label>
              <input
                type="radio"
                value="個人事業主"
                checked={companyType === '個人事業主'}
                onChange={() => {}}
              />
              個人事業主
            </label>
          </RadioGroup>
        </Row>
        <Row>
          <Label>郵便番号</Label>
          <Input type="text" value={postalCode} />
        </Row>
        <Row>
          <Label>住所</Label>
          <Input type="text" value={address} />
        </Row>
        <Row>
          <Label>部門1</Label>
          <Input type="text" value={phoneNumber1} />
        </Row>
        <Row>
          <Label>管理規格</Label>
          <Input type="text" value={managementNumber} />
        </Row>
        <Row>
          <Label>部門2</Label>
          <Input type="text" value={phoneNumber2} />
        </Row>
        <Row>
          <Label>管理規格</Label>
          <Input type="text" value={faxNumber} />
        </Row>
        <SubmitButton type="submit">OK</SubmitButton>
      </form>
    </Container>
  );
};

// サンプルデータと使用例
const sampleData: CompanyInfoFormData = {
  companyName: '株式会社サンプル',
  companyType: '法人',
  postalCode: '1234567',
  address: '東京都サンプル区サンプル町1-2-3',
  phoneNumber1: '03-1234-5678',
  phoneNumber2: '03-9876-5432',
  faxNumber: '03-1111-2222',
  managementNumber: '999999',
};

const SampleUsage: React.FC = () => {
  const handleSubmit = (data: CompanyInfoFormData) => {
    console.log('Submitted data:', data);
  };

  return <CompanyInfoForm {...sampleData} onSubmit={handleSubmit} />;
};

export default CompanyInfoForm;