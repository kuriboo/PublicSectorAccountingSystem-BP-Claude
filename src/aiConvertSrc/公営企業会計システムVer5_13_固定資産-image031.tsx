import React from 'react';
import styled from '@emotion/styled';

type LandAcquisitionInputFormProps = {
  assetNumber?: string;
  acquisitionDate?: string;
  registrationDate?: string;
  surveyType?: '地上権' | '所有権';
  address?: string;
  area?: number;
  purpose?: string;
  acquisitionCost?: number;
  leaseCost?: number;
  remarks?: string;
  onSubmit: (formData: LandAcquisitionInputFormData) => void;
};

type LandAcquisitionInputFormData = {
  assetNumber: string;
  acquisitionDate: string;
  registrationDate: string;
  surveyType: '地上権' | '所有権';
  address: string;
  area: number;
  purpose: string;
  acquisitionCost: number;
  leaseCost: number;  
  remarks: string;
};

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;

  @media (max-width: 600px) {
    max-width: 100%;
  }
`;

const FormField = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const FormLabel = styled.label`
  font-weight: bold;
`;

const FormInput = styled.input`
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 3px;
`;

const FormSelect = styled.select`
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 3px;
`;

const FormTextarea = styled.textarea`
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 3px;
`;

const FormButton = styled.button`
  padding: 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 3px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const LandAcquisitionInputForm: React.FC<LandAcquisitionInputFormProps> = ({
  assetNumber = '',
  acquisitionDate = '',
  registrationDate = '',
  surveyType = '所有権',
  address = '',
  area = 0,
  purpose = '',
  acquisitionCost = 0,
  leaseCost = 0,
  remarks = '',
  onSubmit,
}) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData: LandAcquisitionInputFormData = {
      assetNumber,
      acquisitionDate,
      registrationDate,
      surveyType,
      address,
      area,
      purpose,
      acquisitionCost,
      leaseCost,
      remarks,
    };
    onSubmit(formData);
  };

  return (
    <FormContainer>
      <h2>土地除却入力</h2>
      <form onSubmit={handleSubmit}>
        <FormField>
          <FormLabel>資産番号</FormLabel>
          <FormInput type="text" value={assetNumber} onChange={(e) => assetNumber = e.target.value} />
        </FormField>
        <FormField>
          <FormLabel>異動区分</FormLabel>
          <FormSelect>
            <option value="一部除却">一部除却</option>
            <option value="全除却">全除却</option>
            <option value="滅失">滅失</option>
          </FormSelect>
        </FormField>
        <FormField>
          <FormLabel>異動年月日</FormLabel>
          <FormInput type="date" value={acquisitionDate} onChange={(e) => acquisitionDate = e.target.value} />
        </FormField>
        <FormField>
          <FormLabel>登記年月日</FormLabel>
          <FormInput type="date" value={registrationDate} onChange={(e) => registrationDate = e.target.value} />
        </FormField>
        <FormField>
          <FormLabel>所在地</FormLabel>
          <FormInput type="text" value={address} onChange={(e) => address = e.target.value} />
        </FormField>
        <FormField>
          <FormLabel>地目</FormLabel>
          <FormInput type="text" value={purpose} onChange={(e) => purpose = e.target.value} />
        </FormField>
        <FormField>
          <FormLabel>面積</FormLabel>
          <FormInput type="number" value={area} onChange={(e) => area = parseFloat(e.target.value)} /> m²
        </FormField>
        <FormField>
          <FormLabel>取得価額</FormLabel>
          <FormInput type="number" value={acquisitionCost} onChange={(e) => acquisitionCost = parseFloat(e.target.value)} /> 円
        </FormField>
        <FormField>
          <FormLabel>地代</FormLabel>
          <FormInput type="number" value={leaseCost} onChange={(e) => leaseCost = parseFloat(e.target.value)} /> 円
        </FormField>
        <FormField>
          <FormLabel>権利種類</FormLabel>
          <FormSelect value={surveyType} onChange={(e) => surveyType = e.target.value as '地上権' | '所有権'}>
            <option value="所有権">所有権</option>
            <option value="地上権">地上権</option>
          </FormSelect>
        </FormField>
        <FormField>
          <FormLabel>備考</FormLabel>
          <FormTextarea value={remarks} onChange={(e) => remarks = e.target.value} />
        </FormField>
        <FormButton type="submit">登録</FormButton>
      </form>
    </FormContainer>
  );
};

// Usage example
const SampleLandAcquisitionForm = () => {
  const handleSubmit = (formData: LandAcquisitionInputFormData) => {
    console.log(formData);
    // Handle form submission
  };

  return (
    <LandAcquisitionInputForm
      assetNumber="7612900"  
      acquisitionDate="2022-09-13"
      address="〇〇町1丁目"
      area={2.09}
      purpose="宅地"
      acquisitionCost={10000}
      surveyType="地上権"
      onSubmit={handleSubmit}
    />
  );
};

export default LandAcquisitionInputForm;