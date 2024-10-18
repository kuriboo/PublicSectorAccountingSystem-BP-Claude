import React from 'react';
import styled from 'styled-components';

type InvoiceFormProps = {
  resourceNumber?: string;
  workOrder?: string;
  invoiceNumber?: string;
  totalAmount?: number;
  taxAmount?: number;
  billingPeriodFrom?: string;
  billingPeriodTo?: string;
  issueDate?: string;
  paymentDueDate?: string;
  billingAmount?: number;
  deductionAmount?: number;
  memo?: string;
  departmentCode?: string;
  accountTitle?: string;
  subAccountTitle?: string;
  projectCode?: string;
  onSubmit?: () => void;
};

const InvoiceForm: React.FC<InvoiceFormProps> = ({
  resourceNumber = '8003600',
  workOrder = '0001',
  invoiceNumber = '651010602',
  totalAmount = 0,
  taxAmount = 0,
  billingPeriodFrom = '',
  billingPeriodTo = '',  
  issueDate = '',
  paymentDueDate = '',
  billingAmount = 2000000,
  deductionAmount = 0,
  memo = '',
  departmentCode = '111001',
  accountTitle = 'OO町',
  subAccountTitle = '',
  projectCode = '',
  onSubmit = () => {},
}) => {
  return (
    <FormWrapper>
      <FormRow>
        <Label>資産番号</Label>
        <Input value={resourceNumber} readOnly />
      </FormRow>
      <FormRow>
        <Label>工事合計金額</Label>
        <Input value={totalAmount} readOnly />
        <Label>年度</Label>
        <Select>
          <option>平成29</option>
        </Select>
      </FormRow>
      <FormRow>
        <Label>節</Label>
        <Input value={invoiceNumber.slice(0,4)} readOnly />
        <Label>細節</Label>
        <Input value={invoiceNumber.slice(4)} readOnly />
      </FormRow>
      <FormSection>
        <SectionTitle>会計区分</SectionTitle>
        <RadioButton
          type="radio" 
          id="accountType1" 
          name="accountType"
          value="登録"
          defaultChecked 
        />
        <RadioLabel htmlFor="accountType1">登録</RadioLabel>
        <RadioButton
          type="radio"
          id="accountType2"
          name="accountType" 
          value="訂正" 
        />
        <RadioLabel htmlFor="accountType2">訂正</RadioLabel>
        <RadioButton 
          type="radio"
          id="accountType3"
          name="accountType"
          value="削除"
        />  
        <RadioLabel htmlFor="accountType3">削除</RadioLabel>
      </FormSection>
      <FormRow>
        <Label>施工年度</Label>
        <Select>
          <option>平成29年度</option>
        </Select>
        <Label>起工年月日</Label>
        <Input value={billingPeriodFrom} type="text" />
      </FormRow>
      <FormRow>  
        <Label>業者</Label>
        <Select>
          <option>○○設備(株)</option>  
        </Select>
      </FormRow>
      <FormRow>
        <Label>所属</Label>
        <Input value="000005" readOnly />
        <Label>水道建設課</Label>
      </FormRow>
      <FormRow>
        <Label>取得年月日</Label>
        <Input type="text" value={issueDate} />
        <Label>サービス</Label>
      </FormRow>  
      <FormRow>
        <Label>取得価額</Label>
        <Input type="number" value={billingAmount} />
        <Label>耐用年数</Label>
        <Input type="number" value="6.0" />
        <Label>償却率</Label>
        <Input type="number" value="10.00" />  
      </FormRow>
      <FormRow>
        <Label>残存率</Label>  
        <Input type="number" value="10.00" />
        <Label>減価償却費</Label>
        <Input type="number" value={deductionAmount} />
      </FormRow>
      <FormRow>
        <Label>年間償却額</Label>
        <Input type="number" value="180000" />
      </FormRow>
      <FormRow>  
        <Label>増設率</Label>
        <Input type="number" value="95.00" />
        <Label>償却限度額</Label>
        <Input type="number" value="1900000" readOnly />
      </FormRow>
      <FormRow>
        <Label>明細区分</Label>
        <RadioButton type="radio" id="breakdown1" name="breakdown" value="新設" defaultChecked />
        <RadioLabel htmlFor="breakdown1">新設</RadioLabel>  
        <RadioButton type="radio" id="breakdown2" name="breakdown" value="増設" />
        <RadioLabel htmlFor="breakdown2">増設</RadioLabel>
      </FormRow>
      <FormRow>
        <Label>明細講座</Label> 
        <Input value="改良" readOnly />
        <Label>予算費目</Label>
        <Input value="委託費(月額)" readOnly />
      </FormRow>
      <FormRow>
        <Label>自由設定</Label>
        <Input type="text" value={memo} />
      </FormRow>
      <FormRow>
        <Label>整理部署</Label>
        <Input value={departmentCode} readOnly /> 
        <Label>{accountTitle}</Label>
      </FormRow>
      <FormRow>
        <Label>地区</Label>
        <Input value={subAccountTitle} readOnly /> 
      </FormRow>
      <FormRow>
        <Label>摘要</Label>
        <Input value={projectCode} readOnly />
      </FormRow>
      <SubmitButton type="button" onClick={onSubmit}>登録内容確認</SubmitButton>
    </FormWrapper>
  );
};

const FormWrapper = styled.div`
  display: grid;
  gap: 10px;
`;

const FormRow = styled.div`
  display: grid;  
  grid-template-columns: 100px 1fr;
  gap: 10px;
  align-items: center;
  @media (min-width: 768px) {
    grid-template-columns: 100px 1fr 100px 1fr;  
  }
`;

const Label = styled.label`
  font-weight: bold;
`;

const Input = styled.input`
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 3px;
`;

const Select = styled.select`
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 3px;
`;

const FormSection = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin: 10px 0;
`;

const SectionTitle = styled.div`
  font-weight: bold;
`;

const RadioButton = styled.input`
  margin-left: 10px;
`;

const RadioLabel = styled.label`
  margin-left: 5px;
`;

const SubmitButton = styled.button`
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

// Usage example
const App: React.FC = () => {
  const handleSubmit = () => {
    console.log('Submit clicked');
  };

  return (
    <div>
      <h1>Invoice Form</h1>  
      <InvoiceForm onSubmit={handleSubmit} />
    </div>
  );
};

export default App;