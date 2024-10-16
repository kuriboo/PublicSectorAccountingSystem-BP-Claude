import React from 'react';
import styled from '@emotion/styled';

interface ReceiptFormProps {
  formData: {
    division: string;
    year: number;
    purchaseNumber: string;
    specifiedNumber: string;
    yieldDate: string;
    expireDate: string;
    supplierCode: string;
    taxRate: number;
    includeTax: boolean;
    includePremium: boolean;
    includeDiscount: boolean;
    taxPrice: number;
    premiumPrice: number;
  };
  onInputChange: (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
}

const ReceiptForm: React.FC<ReceiptFormProps> = ({ formData, onInputChange }) => {
  return (
    <FormWrapper>
      <FormTitle>収入区分一括更新</FormTitle>
      <FormRow>
        <FormLabel>条件設定</FormLabel>
        <FormSelect name="division" value={formData.division} onChange={onInputChange}>
          <option value="平成31">平成31</option>
          {/* Add more options */}
        </FormSelect>
        <FormLabel>年度</FormLabel>
        <FormInput type="text" name="year" value={formData.year} onChange={onInputChange} />
      </FormRow>
      <FormRow>
        <FormLabel>収入区分</FormLabel>
        <FormInput type="text" name="purchaseNumber" value={formData.purchaseNumber} onChange={onInputChange} />
        <FormLabel>設定無し</FormLabel>
      </FormRow>
      <FormRow>
        <FormLabel>摘要検索</FormLabel>
        <FormInput type="text" name="specifiedNumber" value={formData.specifiedNumber} onChange={onInputChange} />
      </FormRow>
      <FormRow>
        <FormLabel>決定処理日</FormLabel>
        <FormInput type="text" name="yieldDate" value={formData.yieldDate} onChange={onInputChange} />
        <FormLabel>～</FormLabel>
        <FormInput type="text" name="expireDate" value={formData.expireDate} onChange={onInputChange} />
      </FormRow>
      <FormRow>
        <FormLabel>税込金額</FormLabel>
        <FormInput type="number" name="taxPrice" value={formData.taxPrice} onChange={onInputChange} />
        <FormLabel>～</FormLabel>
        <FormInput type="number" name="premiumPrice" value={formData.premiumPrice} onChange={onInputChange} />
      </FormRow>
      <FormRow>
        <FormLabel>伝票区分</FormLabel>
        <FormCheckbox type="checkbox" name="includeTax" checked={formData.includeTax} onChange={onInputChange} label="決定" />
        <FormCheckbox type="checkbox" name="includePremium" checked={formData.includePremium} onChange={onInputChange} label="前払" />
        <FormCheckbox type="checkbox" name="includeDiscount" checked={formData.includeDiscount} onChange={onInputChange} label="前払(締越)" />
      </FormRow>
      <FormRow>
        <FormLabel>収入区分一括設定</FormLabel>
        <FormSelect name="supplierCode" value={formData.supplierCode} onChange={onInputChange}>
          <option value="課税">課税</option>
          {/* Add more options */}
        </FormSelect>
        <FormLabel>確定</FormLabel>
      </FormRow>
      <FormNotice>
        確定ボタンを押下すると、表示されている全ての伝票の収入区分を一括で設定します。
        確定後、必ずOKボタンで更新してください。
      </FormNotice>
    </FormWrapper>
  );
};

// Styled components
const FormWrapper = styled.div`
  padding: 16px;
  background-color: #f0f0f0;
`;

const FormTitle = styled.h2`
  font-size: 18px;
  margin-bottom: 16px;
`;

const FormRow = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
`;

const FormLabel = styled.label`
  margin-right: 8px;
`;

const FormInput = styled.input`
  padding: 4px;
  margin-right: 8px;
`;

const FormSelect = styled.select`
  padding: 4px;
  margin-right: 8px;
`;

const FormCheckbox = styled.label`
  display: flex;
  align-items: center;
  margin-right: 8px;

  input {
    margin-right: 4px;
  }
`;

const FormNotice = styled.p`
  margin-top: 16px;
  font-size: 14px;
  color: #666;
`;

// Sample usage
const sampleData = {
  division: '平成31',
  year: 2023,
  purchaseNumber: '999999',
  specifiedNumber: '000000000000000000',
  yieldDate: '0000000000000000',
  expireDate: '9999999999999999',
  supplierCode: '課税',
  taxRate: 0.1,
  includeTax: true,
  includePremium: true,
  includeDiscount: false,
  taxPrice: 0,
  premiumPrice: 999999999999,
};

const SampleUsage: React.FC = () => {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type, checked } = event.target;
    const newValue = type === 'checkbox' ? checked : value;
    // Update form data state based on input changes
    // ...
  };

  return <ReceiptForm formData={sampleData} onInputChange={handleInputChange} />;
};

export default ReceiptForm;