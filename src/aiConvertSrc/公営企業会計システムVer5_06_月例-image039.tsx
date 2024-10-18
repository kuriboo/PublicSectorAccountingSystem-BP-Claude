import React from 'react';
import styled from '@emotion/styled';

type ContractPeriodFormProps = {
  startDate: string;
  endDate: string;
  renewalDate: string;
  workStyle: '日' | '昼' | '細昼' | '明晰';
  paymentCycle: 'なし' | '含まない';
  collectMethod: '全体' | 'ブロック' | 'セグメント';
  onStartDateChange: (date: string) => void;
  onEndDateChange: (date: string) => void;
  onRenewalDateChange: (date: string) => void;
  onWorkStyleChange: (style: '日' | '昼' | '細昼' | '明晰') => void;
  onPaymentCycleChange: (cycle: 'なし' | '含まない') => void;
  onCollectMethodChange: (method: '全体' | 'ブロック' | 'セグメント') => void;
  onOkClick: () => void;
  onCancelClick: () => void;
  onSubmit: () => void;
};

const FormContainer = styled.div`
  padding: 20px;

  @media (max-width: 600px) {
    padding: 10px;
  }
`;

const FormField = styled.div`
  margin-bottom: 15px;
`;

const FormLabel = styled.div`
  margin-bottom: 5px;
  font-weight: bold;
`;

const FormInput = styled.input`
  padding: 5px;
  border: 1px solid #ccc;
  width: 120px;
`;

const FormSelect = styled.select`
  padding: 5px;
`;

const FormRadio = styled.input`
  margin-right: 5px;
`;

const RadioLabel = styled.label`
  margin-right: 10px;
`;

const ButtonContainer = styled.div`
  text-align: right;
  margin-top: 20px;
`;

const SubmitButton = styled.button`
  padding: 10px 20px;
  margin-right: 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  cursor: pointer;
`;

const CancelButton = styled.button`
  padding: 10px 20px; 
  background-color: #6c757d;
  color: #fff;
  border: none;
  cursor: pointer;
`;

const ContractPeriodForm: React.FC<ContractPeriodFormProps> = ({
  startDate,
  endDate,
  renewalDate,
  workStyle,
  paymentCycle,
  collectMethod,
  onStartDateChange,
  onEndDateChange,
  onRenewalDateChange,
  onWorkStyleChange,
  onPaymentCycleChange,
  onCollectMethodChange,
  onOkClick,
  onCancelClick,
  onSubmit,
}) => {
  // Handle form submission 
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit();
  };

  return (
    <FormContainer>
      <form onSubmit={handleSubmit}>
        <FormField>
          <FormLabel>契約期</FormLabel>
          <FormInput
            type="date"
            value={startDate}
            onChange={(e) => onStartDateChange(e.target.value)}
          />{' '}
          ～{' '}
          <FormInput
            type="date" 
            value={endDate}
            onChange={(e) => onEndDateChange(e.target.value)}
          />
        </FormField>
        <FormField>
          <FormLabel>仕訳科目</FormLabel>
          <FormInput
            type="number"
            value={renewalDate}
            onChange={(e) => onRenewalDateChange(e.target.value)}
          />
          ～
          <FormInput
            type="number"
            value={renewalDate}
            onChange={(e) => onRenewalDateChange(e.target.value)}
          />
        </FormField>
        <FormField>
          <FormLabel>作業区分</FormLabel>
          <FormRadio
            type="radio"
            id="workStyle1"
            checked={workStyle === '日'}
            onChange={() => onWorkStyleChange('日')}
          />
          <RadioLabel htmlFor="workStyle1">日</RadioLabel>
          <FormRadio
            type="radio"
            id="workStyle2"  
            checked={workStyle === '昼'}
            onChange={() => onWorkStyleChange('昼')}
          />
          <RadioLabel htmlFor="workStyle2">昼</RadioLabel>
          <FormRadio
            type="radio"
            id="workStyle3"
            checked={workStyle === '細昼'}
            onChange={() => onWorkStyleChange('細昼')}
          />
          <RadioLabel htmlFor="workStyle3">細昼</RadioLabel>
          <FormRadio 
            type="radio"
            id="workStyle4"
            checked={workStyle === '明晰'}
            onChange={() => onWorkStyleChange('明晰')}
          />
          <RadioLabel htmlFor="workStyle4">明晰</RadioLabel>
        </FormField>
        <FormField>
          <FormLabel>決算仕訳</FormLabel>
          <FormSelect
            value={paymentCycle}
            onChange={(e) =>
              onPaymentCycleChange(e.target.value as 'なし' | '含まない')
            }
          >
            <option value="なし">なし</option>
            <option value="含まない">含まない</option>
          </FormSelect>
        </FormField>
        <FormField>
          <FormLabel>集計対象</FormLabel>
          <FormSelect
            value={collectMethod}
            onChange={(e) =>
              onCollectMethodChange(e.target.value as '全体' | 'ブロック' | 'セグメント')
            }
          >
            <option value="全体">全体</option>
            <option value="ブロック">ブロック</option>
            <option value="セグメント">セグメント</option>
          </FormSelect>
        </FormField>
        <ButtonContainer>
          <SubmitButton type="submit">終了</SubmitButton>
          <CancelButton type="button" onClick={onCancelClick}>
            クリア
          </CancelButton>
        </ButtonContainer>
      </form>
    </FormContainer>
  );
};

// Sample usage
const MyComponent: React.FC = () => {
  const handleSubmit = () => {
    console.log('Form submitted');
  };

  return (
    <ContractPeriodForm
      startDate="2023-09-01"
      endDate="2023-09-30" 
      renewalDate="12345678"
      workStyle="日"
      paymentCycle="なし"
      collectMethod="全体"
      onStartDateChange={(date) => console.log('Start date changed:', date)}
      onEndDateChange={(date) => console.log('End date changed:', date)}
      onRenewalDateChange={(date) => console.log('Renewal date changed:', date)}
      onWorkStyleChange={(style) => console.log('Work style changed:', style)}
      onPaymentCycleChange={(cycle) => console.log('Payment cycle changed:', cycle)} 
      onCollectMethodChange={(method) => console.log('Collect method changed:', method)}
      onOkClick={() => console.log('OK clicked')}
      onCancelClick={() => console.log('Cancel clicked')}
      onSubmit={handleSubmit}
    />
  );
};

export default MyComponent;