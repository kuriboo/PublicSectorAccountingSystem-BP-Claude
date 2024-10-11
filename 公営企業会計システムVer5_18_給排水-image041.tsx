import React from 'react';
import styled from '@emotion/styled';

interface MasterMaintenanceFormProps {
  title: string;
  registrationDate: string;
  representativeNumber: string;
  applicationStartDate: string;
  representativeName1: string;
  representativeName2: string;
  postalCode: string;
  address: string;
  buildingName: string;
  telephoneNumber: string;
  faxNumber: string;
  accountNumber: string;
  accountHolderName: string;
  bankName: string;
  branch: string;
}

const MasterMaintenanceForm: React.FC<MasterMaintenanceFormProps> = ({
  title,
  registrationDate,
  representativeNumber,
  applicationStartDate,
  representativeName1,
  representativeName2,
  postalCode,
  address,
  buildingName,
  telephoneNumber,
  faxNumber,
  accountNumber,
  accountHolderName,
  bankName,
  branch,
}) => {
  return (
    <FormContainer>
      <FormTitle>{title}</FormTitle>
      <FormSubtitle>ぎょうせい市水道事業</FormSubtitle>
      <FormSubtitle>給水課</FormSubtitle>
      <FormLabel>平成26年03月25日</FormLabel>
      <FormGroup>
        <FormLabel>指定工事店番号</FormLabel>
        <FormInput value={representativeNumber} readOnly />
      </FormGroup>
      <FormGroup>
        <FormLabel>適用開始年月日</FormLabel>
        <FormInput value={applicationStartDate} readOnly />
      </FormGroup>
      <FormGroup>
        <FormLabel>代表者名1</FormLabel>
        <FormInput value={representativeName1} readOnly />
      </FormGroup>
      <FormGroup>
        <FormLabel>代表者名2</FormLabel>
        <FormInput value={representativeName2} readOnly />
      </FormGroup>
      <FormGroup>
        <FormLabel>郵便番号</FormLabel>
        <FormInput value={postalCode} readOnly />
      </FormGroup>
      <FormGroup>
        <FormLabel>住所1</FormLabel>
        <FormInput value={address} readOnly />
      </FormGroup>
      <FormGroup>
        <FormLabel>住所2</FormLabel>
        <FormInput value={buildingName} readOnly />
      </FormGroup>
      <FormGroup>
        <FormLabel>電話番号</FormLabel>
        <FormInput value={telephoneNumber} readOnly />
      </FormGroup>
      <FormGroup>
        <FormLabel>FAX番号</FormLabel>
        <FormInput value={faxNumber} readOnly />
      </FormGroup>
      <FormGroup>
        <FormLabel>振込口座</FormLabel>
        <FormInput value={accountNumber} readOnly />
      </FormGroup>
      <FormGroup>
        <FormLabel>口座名義人</FormLabel>
        <FormInput value={accountHolderName} readOnly />
      </FormGroup>
      <FormGroup>
        <FormLabel>振込銀行</FormLabel>
        <FormInput value={bankName} readOnly />
      </FormGroup>
      <FormGroup>
        <FormLabel>支店</FormLabel>
        <FormInput value={branch} readOnly />
      </FormGroup>
      <ButtonContainer>
        <Button>明細編集</Button>
        <Button>行削除</Button>
      </ButtonContainer>
    </FormContainer>
  );
};

// Sample data for the component
const sampleData: MasterMaintenanceFormProps = {
  title: '工事代理マスタ',
  registrationDate: '平成26年03月25日',
  representativeNumber: '1234567890',
  applicationStartDate: '平成26年03月25日',
  representativeName1: '山田 太郎',
  representativeName2: '山田 花子',
  postalCode: '123-4567',
  address: '東京都新宿区西新宿1-1-1',
  buildingName: 'サンプルビル101',
  telephoneNumber: '03-1234-5678',
  faxNumber: '03-1234-5679',
  accountNumber: '1234567',
  accountHolderName: 'ヤマダ タロウ',
  bankName: 'サンプル銀行',
  branch: '新宿支店',
};

const SampleUsage: React.FC = () => {
  return <MasterMaintenanceForm {...sampleData} />;
};

// Styled components
const FormContainer = styled.div`
  background-color: #f0f0f0;
  padding: 20px;
  border-radius: 4px;
`;

const FormTitle = styled.h2`
  font-size: 20px;
  margin-bottom: 10px;
`;

const FormSubtitle = styled.p`
  font-size: 14px;
  margin-bottom: 5px;
`;

const FormLabel = styled.label`
  display: block;
  font-size: 14px;
  margin-bottom: 5px;
`;

const FormInput = styled.input`
  width: 100%;
  padding: 8px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-bottom: 10px;
`;

const FormGroup = styled.div`
  margin-bottom: 15px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
`;

const Button = styled.button`
  padding: 8px 16px;
  font-size: 14px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-left: 10px;

  &:hover {
    background-color: #0056b3;
  }
`;

export default MasterMaintenanceForm;