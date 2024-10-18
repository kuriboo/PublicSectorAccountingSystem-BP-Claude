import React from 'react';
import styled from '@emotion/styled';

interface BasicInfoFormProps {
  companyNumber: string;
  companyName: string;
  postalCode: string;
  address: string;
  phoneNumber: string;
  incorporationDate: string;
  capital: string;
  industry: string;
  businessDetails: string;
  submissionCategory: string;
  submissionNumber: string;
  onSubmit: () => void;
  onCancel: () => void;
  onEnd: () => void;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  font-family: Arial, sans-serif;

  @media (min-width: 768px) {
    max-width: 500px;
    margin: 0 auto;
  }
`;

const Title = styled.h2`
  margin-bottom: 20px;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
  width: 100%;
`;

const Label = styled.label`
  margin-bottom: 5px;
`;

const Input = styled.input`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const TextArea = styled.textarea`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  resize: vertical;
`;

const RadioGroup = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const RadioLabel = styled.label`
  margin-left: 5px;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  width: 100%;
`;

const Button = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  background-color: #007bff;
  color: #fff;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const BasicInfoForm: React.FC<BasicInfoFormProps> = ({
  companyNumber,
  companyName,
  postalCode,
  address,
  phoneNumber,
  incorporationDate,
  capital,
  industry,
  businessDetails,
  submissionCategory,
  submissionNumber,
  onSubmit,
  onCancel,
  onEnd,
}) => {
  return (
    <Container>
      <Title>固定資産基礎情報修正</Title>
      <FormGroup>
        <Label>資産番号</Label>
        <Input type="text" value={companyNumber} readOnly />
      </FormGroup>
      <FormGroup>
        <Label>資産名称</Label>
        <Input type="text" defaultValue={companyName} />
      </FormGroup>
      <FormGroup>
        <Label>所在地</Label>
        <Input type="text" defaultValue={address} />
      </FormGroup>
      <FormGroup>
        <Label>施工年度</Label>
        <Input type="text" />
      </FormGroup>
      <FormGroup>
        <Label>部門</Label>
        <Input type="text" />
      </FormGroup>
      <FormGroup>
        <Label>稼働</Label>
        <Input type="text" defaultValue="01/01" />
      </FormGroup>
      <FormGroup>
        <Label>摘要</Label>
        <TextArea rows={4}></TextArea>
      </FormGroup>
      <FormGroup>
        <Label>会計区分</Label>
        <RadioGroup>
          <Input type="radio" id="acquisition" name="accountingCategory" value="acquisition" defaultChecked />
          <RadioLabel htmlFor="acquisition">取得</RadioLabel>
        </RadioGroup>
        <RadioGroup>
          <Input type="radio" id="leased" name="accountingCategory" value="leased" />
          <RadioLabel htmlFor="leased">リース</RadioLabel>
        </RadioGroup>
      </FormGroup>
      <FormGroup>
        <Label>業者</Label>
        <Input type="text" defaultValue="0000000001" />
      </FormGroup>
      <FormGroup>
        <Label>所属課</Label>
        <Input type="text" defaultValue="営業課" />
      </FormGroup>
      <ButtonGroup>
        <Button onClick={onSubmit}>OK</Button>
        <Button onClick={onCancel}>クリア</Button>
        <Button onClick={onEnd}>終了</Button>
      </ButtonGroup>
    </Container>
  );
};

export default BasicInfoForm;

// Usage example
const App: React.FC = () => {
  const handleSubmit = () => {
    console.log('Form submitted');
  };

  const handleCancel = () => {
    console.log('Form cleared');
  };

  const handleEnd = () => {
    console.log('Form ended');
  };

  return (
    <BasicInfoForm
      companyNumber="800100"
      companyName="きょうせい市リース資産"
      postalCode="123-4567"
      address="東京都新宿区西新宿1-1-1"
      phoneNumber="03-1234-5678"
      incorporationDate="2020年09月12日"
      capital="10,000,000円"
      industry="不動産業"
      businessDetails="不動産の賃貸、管理"
      submissionCategory="実績対比"
      submissionNumber="0001"
      onSubmit={handleSubmit}
      onCancel={handleCancel}
      onEnd={handleEnd}
    />
  );
};