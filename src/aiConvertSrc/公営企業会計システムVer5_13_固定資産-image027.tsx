import React from 'react';
import styled from '@emotion/styled';

type LeaseRegistrationFormProps = {
  leaseNumber: string;
  startDate: string;
  endDate: string;
  tenant: string;
  phoneNumber: string;
  faxNumber: string;
  contactPerson: string;
  insuranceCompany: string;
  depositAmount: number;
  keyMoneyAmount: number;
  advancePaymentAmount: number;
  monthlyRent: number;
  parkingFee: number;
  totalMonthlyAmount: number;
  taxAmount: number;
  rewardAmount: number;
  totalAmount: number;
  onSubmit: () => void;
  onCancel: () => void;
  onPrint: () => void;
};

const FormContainer = styled.div`
  display: grid;
  grid-template-columns: 150px 1fr;
  gap: 10px;
  margin-bottom: 20px;
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

const FormLabel = styled.label`
  font-weight: bold;
`;

const FormInput = styled.input`
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
`;

const Button = styled.button`
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  background-color: #007bff;
  color: #fff;
  cursor: pointer;
  &:hover {
    background-color: #0056b3;
  }
`;

const LeaseRegistrationForm: React.FC<LeaseRegistrationFormProps> = ({
  leaseNumber,
  startDate,
  endDate,
  tenant,
  phoneNumber,
  faxNumber,
  contactPerson,
  insuranceCompany,
  depositAmount,
  keyMoneyAmount,
  advancePaymentAmount,
  monthlyRent,
  parkingFee,
  totalMonthlyAmount,
  taxAmount,
  rewardAmount,
  totalAmount,
  onSubmit,
  onCancel,
  onPrint,
}) => {
  return (
    <div>
      <h2>リース資産除却登録</h2>
      <FormContainer>
        <FormLabel>資産番号</FormLabel>
        <FormInput type="text" value={leaseNumber} readOnly />
        <FormLabel>異動区分</FormLabel>
        <FormInput type="text" value="全除却" readOnly />
        <FormLabel>異動摘要</FormLabel>
        <FormInput type="text" value="全除却" readOnly />
        <FormLabel>節</FormLabel>
        <FormInput type="text" value="0510113101 リース資産" readOnly />
        <FormLabel>細節</FormLabel>
        <FormInput type="text" value="0001 リース資産" readOnly />
        <FormLabel>明細</FormLabel>
        <FormInput type="text" value="0001 リース資産" readOnly />
        <FormLabel>資産名称</FormLabel>
        <FormInput type="text" value="複写機（前期機関リース）" readOnly />
        <FormLabel>所在地</FormLabel>
        <FormInput type="text" value="茨城県下妻市高道祖" readOnly />
        <FormLabel>契約方法</FormLabel>
        <FormInput type="text" value="所有権移転外ファイナンスリース" readOnly />
        <FormLabel>期間</FormLabel>
        <FormInput type="text" value="096ヶ月" readOnly />
        <FormLabel>取得年月日</FormLabel>
        <FormInput type="text" value={startDate} readOnly />
        <FormLabel>除却年月日</FormLabel>
        <FormInput type="text" value={endDate} readOnly />
        <FormLabel>耐用年数</FormLabel>
        <FormInput type="number" value={5} readOnly />
        <FormLabel>償却区分</FormLabel>
        <FormInput type="text" value="リース期間定額法" readOnly />
        <FormLabel>明細区分</FormLabel>
        <FormInput type="text" value="明細無し" readOnly />
        <FormLabel>所属</FormLabel>
        <FormInput type="text" value="営業課" readOnly />
      </FormContainer>

      <h3>償却対象額</h3>
      <FormContainer>
        <FormLabel>取得価額</FormLabel>
        <FormInput type="number" value={40000} readOnly />
        <FormLabel>減価償却累計額</FormLabel>
        <FormInput type="number" value={13333} readOnly />
        <FormLabel>帳簿価額</FormLabel>
        <FormInput type="number" value={26667} readOnly />
      </FormContainer>

      <h3>除却額</h3>
      <FormContainer>
        <FormLabel>除却額</FormLabel>
        <FormInput type="number" value={40000} readOnly />
        <FormLabel>内償却累計額</FormLabel>
        <FormInput type="number" value={13333} readOnly />
        <FormLabel>除却後／収入</FormLabel>
        <FormInput type="number" value={0} readOnly />
      </FormContainer>

      <h3>売却額</h3>  
      <FormContainer>
        <FormLabel>売却額</FormLabel>
        <FormInput type="number" value={0} readOnly />
        <FormLabel>損益／収入</FormLabel>
        <FormInput type="number" value={0} readOnly />
      </FormContainer>

      <h3>除却後</h3>
      <FormContainer>  
        <FormLabel>帳簿原価</FormLabel>
        <FormInput type="number" value={0} readOnly />
        <FormLabel>償却除外額</FormLabel>
        <FormInput type="number" value={0} readOnly />
        <FormLabel>償却対象額</FormLabel>
        <FormInput type="number" value={0} readOnly />
        <FormLabel>償却明細額</FormLabel>
        <FormInput type="number" value={0} readOnly />
      </FormContainer>

      <ButtonContainer>
        <Button onClick={onSubmit}>OK</Button>
        <Button onClick={onCancel}>クリア</Button>  
        <Button onClick={onPrint}>終了</Button>
      </ButtonContainer>
    </div>
  );
};

// サンプルデータを使用した表示用コンポーネント
const SampleLeaseRegistrationForm = () => {
  const handleSubmit = () => {
    console.log('フォームが送信されました');
  };

  const handleCancel = () => {    
    console.log('フォームがクリアされました');
  };

  const handlePrint = () => {
    console.log('フォームが終了しました');  
  };

  return (
    <LeaseRegistrationForm
      leaseNumber="8000200"
      startDate="平成29年09月12日"  
      endDate="平成32年08月31日"
      tenant="リース資産"
      phoneNumber="0001"
      faxNumber="0001"
      contactPerson="リース資産"   
      insuranceCompany="複写機（前期機関リース）"
      depositAmount={40000}
      keyMoneyAmount={13333}
      advancePaymentAmount={26667} 
      monthlyRent={40000}
      parkingFee={13333}
      totalMonthlyAmount={26667}
      taxAmount={0}
      rewardAmount={0}
      totalAmount={0}
      onSubmit={handleSubmit}
      onCancel={handleCancel}
      onPrint={handlePrint}
    />
  );
};

export default SampleLeaseRegistrationForm;