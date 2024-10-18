import React from 'react';
import styled from '@emotion/styled';

type FrontMoneyAdjustmentFormProps = {
  date: string;
  accountingSubject: string;
  fiscalYear: string;
  taxCategory: 'tax_included' | 'tax_excluded' | 'non_taxable' | 'other';
  description: string;
  expirationDate: string;
  adjustment: number;
  commission: number;
  transferToAccount: number;
  onSubmit: () => void;
  onCancel: () => void;
  onClear: () => void;
};

const FrontMoneyAdjustmentForm: React.FC<FrontMoneyAdjustmentFormProps> = ({
  date,
  accountingSubject,
  fiscalYear,
  taxCategory,
  description,
  expirationDate,
  adjustment,
  commission,
  transferToAccount,
  onSubmit,
  onCancel,
  onClear,
}) => {
  return (
    <FormWrapper>
      <FormTitle>前受金調定入力</FormTitle>
      <FormSection>
        <Label>調定日</Label>
        <Input type="text" value={date} readOnly />

        <Label>収支科目</Label>
        <Input type="text" value={accountingSubject} readOnly />

        <Label>取消日</Label>
        <Input type="text" value={expirationDate} readOnly />

        <Label>会計年度</Label>
        <Input type="text" value={fiscalYear} readOnly />
      </FormSection>

      <FormSection>
        <RadioLabel>
          <input type="radio" checked={taxCategory === 'tax_included'} readOnly /> 税込
        </RadioLabel>
        <RadioLabel>
          <input type="radio" checked={taxCategory === 'tax_excluded'} readOnly /> 計上
        </RadioLabel>
        <RadioLabel>
          <input type="radio" checked={taxCategory === 'non_taxable'} readOnly /> 非課税
        </RadioLabel>
        <RadioLabel>
          <input type="radio" checked={taxCategory === 'other'} readOnly /> 取消
        </RadioLabel>
      </FormSection>

      <FormSection>
        <Label>摘要</Label>
        <Input type="text" value={description} readOnly />

        <Label>調整額</Label>
        <Input type="number" value={adjustment} readOnly />
      </FormSection>

      <FormSection>
        <Label>工事店</Label>
        {/* Render construction store details */}
      </FormSection>

      <FormSection>
        <Label>手数料</Label>
        <Input type="number" value={commission} readOnly />
      </FormSection>

      <FormSection>
        <Label>編集</Label>
        {/* Render edit actions */}
      </FormSection>

      <TotalSection>
        <Label>合計調定金額</Label>
        <TotalValue>{adjustment}</TotalValue>

        <Label>合計消費税額</Label>
        <TotalValue>{commission}</TotalValue>

        <Label>合計特定収入</Label>
        <TotalValue>{transferToAccount}</TotalValue>
      </TotalSection>

      <ButtonSection>
        <Button onClick={onSubmit}>OK</Button>
        <Button onClick={onClear}>クリア</Button>
        <Button onClick={onCancel}>終了</Button>
      </ButtonSection>
    </FormWrapper>
  );
};

// Styled components
const FormWrapper = styled.div`
  /* Add styles for the form wrapper */
`;

const FormTitle = styled.h2`
  /* Add styles for the form title */
`;

const FormSection = styled.div`
  /* Add styles for form sections */
`;

const Label = styled.label`
  /* Add styles for labels */
`;

const Input = styled.input`
  /* Add styles for input fields */
`;

const RadioLabel = styled.label`
  /* Add styles for radio labels */
`;

const TotalSection = styled.div`
  /* Add styles for the total section */
`;

const TotalValue = styled.span`
  /* Add styles for total values */  
`;

const ButtonSection = styled.div`
  /* Add styles for the button section */
`;

const Button = styled.button`
  /* Add styles for buttons */
`;

// Sample usage
const SampleUsage: React.FC = () => {
  const handleSubmit = () => {
    // Handle form submission
  };

  const handleCancel = () => {
    // Handle cancel action  
  };

  const handleClear = () => {
    // Handle clear action
  };

  return (
    <FrontMoneyAdjustmentForm
      date="平成29年06月30日"
      accountingSubject="前受検査調の精算"
      fiscalYear="平成29年度"
      taxCategory="tax_included"
      description="前受検査調の精算"
      expirationDate="平成29年09月13日"
      adjustment={15000}
      commission={0}
      transferToAccount={0}
      onSubmit={handleSubmit}
      onCancel={handleCancel}
      onClear={handleClear}
    />
  );
};

export default FrontMoneyAdjustmentForm;