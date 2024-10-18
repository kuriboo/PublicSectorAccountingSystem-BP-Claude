import React from 'react';
import styled from 'styled-components';

// 予算特定収入科目設定科目別修正の型定義
type BudgetRevisionFormProps = {
  companyYear: string;
  accountTitle: string;
  budgetSection: string;
  taxCategory: string;
  revisionDate: string;
  revisionAmount: number;
  additionalInfo: number;
  specialNotes: string;
  isRevisedAmountIncrease: boolean;
  isNewBudgetItemAdded: boolean;
};

// スタイル定義
const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 100%;
  max-width: 600px;
  box-sizing: border-box;
  
  @media (max-width: 600px) {
    max-width: 100%;
  }
`;

const FormSection = styled.div`
  margin-bottom: 20px;
`;

const FormLabel = styled.label`
  font-weight: bold;
`;

const FormInput = styled.input`
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 3px;
  width: 100%;
  box-sizing: border-box;
`;

const FormSelect = styled.select`
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 3px;
  width: 100%;
  box-sizing: border-box;
`;

const FormCheckbox = styled.input.attrs({ type: 'checkbox' })`
  margin-right: 5px;
`;

// 予算特定収入科目設定科目別修正コンポーネント
const BudgetRevisionForm: React.FC<BudgetRevisionFormProps> = ({
  companyYear,
  accountTitle,
  budgetSection,
  taxCategory,
  revisionDate,
  revisionAmount,
  additionalInfo,
  specialNotes,
  isRevisedAmountIncrease,
  isNewBudgetItemAdded,
}) => {
  return (
    <FormContainer>
      <FormSection>
        <FormLabel>範囲指定</FormLabel>
        <div>
          <FormLabel>会計年度</FormLabel>
          <FormInput type="text" value={companyYear} readOnly />
        </div>
        <div>
          <FormLabel>予算編成区分</FormLabel>
          <FormInput type="text" value={budgetSection} readOnly />
        </div>
        <div>
          <FormLabel>税区分指定</FormLabel>
          <FormSelect value={taxCategory}>
            <option value="税抜・特定収入のみ">税抜・特定収入のみ</option>
            {/* 他の選択肢を追加 */}
          </FormSelect>
        </div>
      </FormSection>

      <FormSection>
        <FormLabel>予算科目</FormLabel>
        <div>
          <FormLabel>予算節</FormLabel>
          <FormInput type="text" value={revisionDate} readOnly />
        </div>
        <div>
          <FormLabel>予算細節</FormLabel>
          <FormInput type="number" value={revisionAmount} readOnly />
        </div>
        <div>
          <FormLabel>予算明細</FormLabel>
          <FormInput type="number" value={additionalInfo} readOnly />
        </div>
        <div>
          <FormLabel>税区分</FormLabel>
          <FormInput type="text" value="特定収入" readOnly />
        </div>
      </FormSection>

      <FormSection>
        <FormCheckbox
          checked={isRevisedAmountIncrease}
          readOnly
        />
        <FormLabel>特定収入がるまれる</FormLabel>
        <FormCheckbox
          checked={isNewBudgetItemAdded}
          readOnly
        />
        <FormLabel>借入金の償還に充てられた補助金を含む</FormLabel>
      </FormSection>
    </FormContainer>
  );
};

export default BudgetRevisionForm;

// サンプルデータを用いた表示用コンポーネント
const SampleBudgetRevisionForm = () => {
  const sampleData: BudgetRevisionFormProps = {
    companyYear: '令和2年度',
    accountTitle: '特別会計',
    budgetSection: '当初予算',
    taxCategory: '税抜・特定収入のみ',
    revisionDate: '001-03-909',
    revisionAmount: 0,
    additionalInfo: 1004,
    specialNotes: '特定収入',
    isRevisedAmountIncrease: true,
    isNewBudgetItemAdded: true,
  };

  return <BudgetRevisionForm {...sampleData} />;
};

// SampleBudgetRevisionFormコンポーネントをエクスポート
export { SampleBudgetRevisionForm };