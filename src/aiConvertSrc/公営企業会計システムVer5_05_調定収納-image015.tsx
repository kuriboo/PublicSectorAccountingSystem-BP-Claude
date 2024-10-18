import React from 'react';
import styled from 'styled-components';

type CompanyCollectFormProps = {
  date?: string;
  debitAccountTitle?: string;
  debitAccountCode?: string;
  debitDepartment?: string;
  debitTaxCategory?: '課税' | '非課税' | '不課税';
  creditAccountTitle?: string;
  creditAccountCode?: string;
  creditDepartment?: string;
  creditTaxCategory?: '課税' | '非課税' | '不課税';
  taxRate?: number;
  subtotal?: number;
  taxAmount?: number;
  totalAmount?: number;
  subject?: string;
  memo?: string;
  onSubmit?: () => void;
};

const CompanyCollectForm: React.FC<CompanyCollectFormProps> = ({
  date = '',
  debitAccountTitle = '',
  debitAccountCode = '',
  debitDepartment = '',
  debitTaxCategory = '課税',
  creditAccountTitle = '',
  creditAccountCode = '',
  creditDepartment = '',
  creditTaxCategory = '課税',
  taxRate = 0,
  subtotal = 0,
  taxAmount = 0,
  totalAmount = 0,
  subject = '',
  memo = '',
  onSubmit = () => {},
}) => {
  return (
    <StyledForm>
      <StyledFieldSet>
        <StyledLegend>集合収納入力</StyledLegend>
        <StyledRow>
          <StyledLabel>収納日</StyledLabel>
          <StyledInput type="text" defaultValue={date} />
        </StyledRow>
        <StyledRow>
          <StyledLabel>摘要</StyledLabel>
          <StyledInput type="text" defaultValue={subject} />
        </StyledRow>
        <StyledSection>
          <StyledSubtitle>借方科目</StyledSubtitle>
          <StyledRow>
            <StyledLabel>節</StyledLabel>
            <StyledInputSmall type="text" defaultValue={debitAccountCode} />
            <StyledLabel>細節</StyledLabel>
            <StyledInputSmall type="text" defaultValue={debitAccountCode} />
            <StyledLabel>明細</StyledLabel>
            <StyledInputSmall type="text" defaultValue={debitAccountCode} />
          </StyledRow>
          <StyledLabel>{debitAccountTitle}</StyledLabel>
          <StyledRadioButtonWrapper>
            <StyledRadioButton
              type="radio"
              name="debitTaxCategory"
              value="課税"
              defaultChecked={debitTaxCategory === '課税'}
            />
            <StyledRadioButtonLabel>課税</StyledRadioButtonLabel>
            <StyledRadioButton
              type="radio"
              name="debitTaxCategory"
              value="非課税"
              defaultChecked={debitTaxCategory === '非課税'}
            />
            <StyledRadioButtonLabel>非課税</StyledRadioButtonLabel>
            <StyledRadioButton
              type="radio"
              name="debitTaxCategory"
              value="不課税"
              defaultChecked={debitTaxCategory === '不課税'}
            />
            <StyledRadioButtonLabel>不課税</StyledRadioButtonLabel>
          </StyledRadioButtonWrapper>
        </StyledSection>
        <StyledSection>
          <StyledSubtitle>貸方科目</StyledSubtitle>
          <StyledRow>
            <StyledLabel>節</StyledLabel>
            <StyledInputSmall type="text" defaultValue={creditAccountCode} />
            <StyledLabel>細節</StyledLabel>
            <StyledInputSmall type="text" defaultValue={creditAccountCode} />
            <StyledLabel>明細</StyledLabel>
            <StyledInputSmall type="text" defaultValue={creditAccountCode} />
          </StyledRow>
          <StyledLabel>{creditAccountTitle}</StyledLabel>
          <StyledRadioButtonWrapper>
            <StyledRadioButton
              type="radio"
              name="creditTaxCategory"
              value="課税"
              defaultChecked={creditTaxCategory === '課税'}
            />
            <StyledRadioButtonLabel>課税</StyledRadioButtonLabel>
            <StyledRadioButton
              type="radio"
              name="creditTaxCategory"
              value="非課税"
              defaultChecked={creditTaxCategory === '非課税'}
            />
            <StyledRadioButtonLabel>非課税</StyledRadioButtonLabel>
            <StyledRadioButton
              type="radio"
              name="creditTaxCategory"
              value="不課税"
              defaultChecked={creditTaxCategory === '不課税'}
            />
            <StyledRadioButtonLabel>不課税</StyledRadioButtonLabel>
          </StyledRadioButtonWrapper>
        </StyledSection>
        <StyledTaxRateWrapper>
          <StyledLabel>消費税率</StyledLabel>
          <StyledInputSmall type="number" defaultValue={taxRate} />%
        </StyledTaxRateWrapper>
        <StyledAmountWrapper>
          <StyledAmountRow>
            <StyledAmountLabel>年度</StyledAmountLabel>
            <StyledAmountValue>{subtotal.toLocaleString()}</StyledAmountValue>
          </StyledAmountRow>
          <StyledAmountRow>
            <StyledAmountLabel>件数</StyledAmountLabel>
            <StyledAmountValue>1</StyledAmountValue>
          </StyledAmountRow>
          <StyledAmountRow>
            <StyledAmountLabel>収入金額</StyledAmountLabel>
            <StyledAmountValue>{totalAmount.toLocaleString()}</StyledAmountValue>
          </StyledAmountRow>
        </StyledAmountWrapper>
        <StyledRow>
          <StyledLabel>調定金額</StyledLabel>
          <StyledInputLarge type="number" defaultValue={subtotal} />
        </StyledRow>
        <StyledRow>
          <StyledLabel>特定収入</StyledLabel>
          <StyledInputLarge type="number" defaultValue={0} />
        </StyledRow>
        <StyledRow>
          <StyledLabel>内消費税額</StyledLabel>
          <StyledInputLarge type="number" defaultValue={taxAmount} />
        </StyledRow>
        <StyledRow>
          <StyledLabel>特定収入</StyledLabel>
          <StyledInputLarge type="number" defaultValue={0} />
        </StyledRow>
        <StyledButtonWrapper>
          <StyledButton type="button">OK</StyledButton>
          <StyledButton type="button">クリア</StyledButton>
          <StyledButton type="button" onClick={onSubmit}>
            終了
          </StyledButton>
        </StyledButtonWrapper>
      </StyledFieldSet>
    </StyledForm>
  );
};

const StyledForm = styled.form`
  font-size: 14px;
`;

const StyledFieldSet = styled.fieldset`
  border: none;
  padding: 0;
`;

const StyledLegend = styled.legend`
  font-weight: bold;
  margin-bottom: 16px;
`;

const StyledSection = styled.section`
  margin-bottom: 24px;
`;

const StyledSubtitle = styled.h3`
  font-size: 12px;
  font-weight: bold;
  margin-bottom: 8px;
`;

const StyledRow = styled.div`
  align-items: center;
  display: flex;
  margin-bottom: 8px;
`;

const StyledLabel = styled.label`
  margin-right: 8px;
  white-space: nowrap;
`;

const StyledInput = styled.input`
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 4px 8px;
  width: 100%;
`;

const StyledInputSmall = styled(StyledInput)`
  width: 40px;
`;

const StyledInputLarge = styled(StyledInput)`
  width: 100%;
`;

const StyledRadioButtonWrapper = styled.div`
  display: flex;
  margin-top: 4px;
`;

const StyledRadioButton = styled.input`
  margin-right: 4px;
`;

const StyledRadioButtonLabel = styled.label`
  margin-right: 16px;
`;

const StyledTaxRateWrapper = styled.div`
  align-items: center;
  display: flex;
  margin-bottom: 16px;
`;

const StyledAmountWrapper = styled.div`
  margin-bottom: 16px;
`;

const StyledAmountRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 4px;
`;

const StyledAmountLabel = styled.div``;

const StyledAmountValue = styled.div`
  text-align: right;
`;

const StyledButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 24px;
`;

const StyledButton = styled.button`
  background-color: #f0f0f0;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-left: 8px;
  padding: 4px 16px;
`;

// Usage example
const CompanyCollectFormExample: React.FC = () => {
  return (
    <CompanyCollectForm
      date="R2.10.02"
      subject="(節)備品の費用負担"
      debitAccountTitle="(節)消耗品費"
      debitAccountCode="0001"
      creditAccountTitle="現金預金"
      creditAccountCode="0201"
      taxRate={10}
      subtotal={25000}
      taxAmount={2500}
      totalAmount={27500}
      onSubmit={() => alert('Submitted')}
    />
  );
};

export default CompanyCollectFormExample;