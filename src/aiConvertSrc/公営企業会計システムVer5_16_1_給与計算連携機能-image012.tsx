import React from 'react';
import styled from '@emotion/styled';

type CompanyChangeFormProps = {
  fiscalYear: number;
  companyCode: string;
  submitForm: () => void;
};

const CompanyChangeForm: React.FC<CompanyChangeFormProps> = ({
  fiscalYear,
  companyCode,
  submitForm,
}) => {
  const currentYear = new Date().getFullYear();
  const currentMonth = new Date().getMonth() + 1;
  const currentDay = new Date().getDate();

  return (
    <FormWrapper>
      <FormTitle>科目変換テーブル保守</FormTitle>
      <FormSubtitle>
        総務課 予算・会計担当 ぎょうせい太郎
        <br />
        平成29年09月05日
      </FormSubtitle>
      <FormFieldset>
        <FormFieldsetTitle>会計年度</FormFieldsetTitle>
        <FormFieldsetContent>
          <FormRadio type="radio" name="accountingPeriod" value="currentFiscalYear" defaultChecked />
          <FormRadioLabel>当期</FormRadioLabel>
          <FormRadio type="radio" name="accountingPeriod" value="nextFiscalYear" />
          <FormRadioLabel>来期</FormRadioLabel>
        </FormFieldsetContent>
      </FormFieldset>
      <FormFieldset>
        <FormFieldsetTitle>会計区分</FormFieldsetTitle>
        <FormFieldsetContent>
          <FormSelect defaultValue="01">
            <option value="01">行政市水道事業会計</option>
          </FormSelect>
        </FormFieldsetContent>
      </FormFieldset>
      <FormFieldset>
        <FormFieldsetTitle>日コード</FormFieldsetTitle>
        <FormFieldsetContent>
          <FormInput type="text" defaultValue="0000000" />
        </FormFieldsetContent>
        <FormFieldsetNote>
          給与システムから連携される科目コードです。会計側科目コードではありません。
        </FormFieldsetNote>
      </FormFieldset>
      <FormFieldset>
        <FormFieldsetTitle>管理コード</FormFieldsetTitle>
        <FormFieldsetContent>
          <FormInput type="text" defaultValue="0001" />
        </FormFieldsetContent>
        <FormFieldsetNote>
          給与システムから連携される節・細節をもとにしたコードです。
        </FormFieldsetNote>
      </FormFieldset>
      <FormFieldset>
        <FormFieldsetTitle>検索項目コード</FormFieldsetTitle>
        <FormFieldsetContent>
          <FormInput type="text" defaultValue="000000" />
        </FormFieldsetContent>
        <FormFieldsetNote>
          給与システムから連携される検索区分・コードをもとにしたコードです。
        </FormFieldsetNote>
      </FormFieldset>
      <FormFieldset>
        <FormFieldsetTitle>仕訳コード</FormFieldsetTitle>
        <FormFieldsetContent>
          <FormInput type="text" />
        </FormFieldsetContent>
      </FormFieldset>
      <FormCheckboxFieldset>
        <FormCheckbox type="checkbox" id="carriedOverFlag" />
        <FormCheckboxLabel htmlFor="carriedOverFlag">0 or 1 1を設定すると4月末締分時の支出決定日が3月31日となります。</FormCheckboxLabel>
      </FormCheckboxFieldset>
      <FormCheckboxFieldset>
        <FormCheckbox type="checkbox" id="supportPaymentFlag" />
        <FormCheckboxLabel htmlFor="supportPaymentFlag">0 or 1 1を設定すると控除項目であっても補助金支払額定から除外されません。</FormCheckboxLabel>
      </FormCheckboxFieldset>
      <FormCheckboxFieldset>
        <FormCheckbox type="checkbox" id="prepaidExpenseFlag" />
        <FormCheckboxLabel htmlFor="prepaidExpenseFlag">0 or 1 1を設定すると支出決定日が来年月前月の残経営費目になります。</FormCheckboxLabel>
      </FormCheckboxFieldset>
      <FormButtonContainer>
        <FormButton onClick={submitForm}>OK</FormButton>
        <FormButton>クリア</FormButton>
        <FormButton>終了</FormButton>
      </FormButtonContainer>
    </FormWrapper>
  );
};

const FormWrapper = styled.div`
  background-color: #f0f0f0;
  padding: 16px;
`;

const FormTitle = styled.h2`
  font-size: 18px;
  margin-bottom: 8px;
`;

const FormSubtitle = styled.div`
  font-size: 14px;
  color: #666;
  margin-bottom: 16px;
`;

const FormFieldset = styled.fieldset`
  margin-bottom: 16px;
`;

const FormFieldsetTitle = styled.div`
  font-weight: bold;
  margin-bottom: 8px;
`;

const FormFieldsetContent = styled.div`
  display: flex;
  align-items: center;
`;

const FormFieldsetNote = styled.div`
  font-size: 12px;
  color: #666;
  margin-top: 4px;
`;

const FormRadio = styled.input`
  margin-right: 8px;
`;

const FormRadioLabel = styled.label`
  margin-right: 16px;
`;

const FormSelect = styled.select`
  padding: 4px;
  font-size: 14px;
`;

const FormInput = styled.input`
  padding: 4px;
  font-size: 14px;
`;

const FormCheckboxFieldset = styled.div`
  margin-bottom: 8px;
`;

const FormCheckbox = styled.input`
  margin-right: 8px;
`;

const FormCheckboxLabel = styled.label`
  font-size: 14px;
`;

const FormButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 16px;
`;

const FormButton = styled.button`
  padding: 8px 16px;
  margin-left: 8px;
  font-size: 14px;
`;

// Usage example
const App: React.FC = () => {
  const handleSubmit = () => {
    // Handle form submission
  };

  return (
    <CompanyChangeForm 
      fiscalYear={2023}
      companyCode="01"
      submitForm={handleSubmit}
    />
  );
};

export default App;