import React from 'react';
import styled from '@emotion/styled';

type CompanyInfoProps = {
  companyName: string;
  companyCode: string;
  fiscalYear: string;
  businessCategory: string;
  jobType: string;
};

type WorkDetailProps = {
  estimatedAmount: number;
  workFrom: string;
  workTo: string;
  workDetail: string;
};

type BillingProps = {
  billingAmount: number;
  taxAmount: number;
  totalAmount: number;
  paymentDeadline: string;
  paymentMethod: 'bank' | 'cash';
  directPayment: boolean;
  taxCategory: 'taxIncluded' | 'taxExcluded';
};

type BillProps = {
  companyInfo: CompanyInfoProps;
  workDetail: WorkDetailProps;
  billing: BillingProps;
};

const Container = styled.div`
  font-family: sans-serif;
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  box-sizing: border-box;
`;

const CompanyInfo = styled.div`
  margin-bottom: 20px;
`;

const CompanyName = styled.h2`
  font-size: 24px;
  margin: 0 0 10px;
`;

const CompanyDetail = styled.p`
  margin: 0;
`;

const WorkDetail = styled.div`
  margin-bottom: 20px;
`;

const WorkDetailRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 5px;
`;

const WorkDetailLabel = styled.div`
  font-weight: bold;
`;

const WorkDetailValue = styled.div``;

const Billing = styled.div`
  border: 1px solid #ccc;
  padding: 10px;
`;

const BillingRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 5px;

  &:last-child {
    margin-bottom: 0;
  }
`;

const BillingLabel = styled.div`
  font-weight: bold;
`;

const BillingValue = styled.div``;

const Bill: React.FC<BillProps> = ({ companyInfo, workDetail, billing }) => {
  // 会社情報のデフォルト値
  const defaultCompanyInfo: CompanyInfoProps = {
    companyName: '',
    companyCode: '',
    fiscalYear: '',
    businessCategory: '',
    jobType: '',
  };

  // 作業内容のデフォルト値  
  const defaultWorkDetail: WorkDetailProps = {
    estimatedAmount: 0,
    workFrom: '',
    workTo: '',
    workDetail: '',
  };

  // 請求情報のデフォルト値
  const defaultBilling: BillingProps = {
    billingAmount: 0,
    taxAmount: 0, 
    totalAmount: 0,
    paymentDeadline: '',
    paymentMethod: 'bank',
    directPayment: false,
    taxCategory: 'taxIncluded',
  };

  // プロパティに値がセットされていない場合はデフォルト値を使用
  const {
    companyName,
    companyCode,
    fiscalYear,
    businessCategory,
    jobType,
  } = { ...defaultCompanyInfo, ...companyInfo };

  const { estimatedAmount, workFrom, workTo, workDetail } = {
    ...defaultWorkDetail,
    ...workDetail,
  };

  const {
    billingAmount,
    taxAmount,
    totalAmount,
    paymentDeadline,
    paymentMethod,
    directPayment,
    taxCategory,
  } = { ...defaultBilling, ...billing };

  return (
    <Container>
      <CompanyInfo>
        <CompanyName>{companyName}</CompanyName>
        <CompanyDetail>会社コード: {companyCode}</CompanyDetail>
        <CompanyDetail>年度: {fiscalYear}</CompanyDetail>
        <CompanyDetail>事業: {businessCategory}</CompanyDetail>
        <CompanyDetail>職種: {jobType}</CompanyDetail>
      </CompanyInfo>
      
      <WorkDetail>
        <WorkDetailRow>
          <WorkDetailLabel>予算金額</WorkDetailLabel>
          <WorkDetailValue>{estimatedAmount.toLocaleString()}円</WorkDetailValue>
        </WorkDetailRow>
        <WorkDetailRow>  
          <WorkDetailLabel>作業期間</WorkDetailLabel>
          <WorkDetailValue>{workFrom} ~ {workTo}</WorkDetailValue>
        </WorkDetailRow>
        <WorkDetailRow>
          <WorkDetailLabel>作業内容</WorkDetailLabel> 
          <WorkDetailValue>{workDetail}</WorkDetailValue>
        </WorkDetailRow>
      </WorkDetail>

      <Billing>
        <BillingRow>
          <BillingLabel>請求金額</BillingLabel>
          <BillingValue>{billingAmount.toLocaleString()}円</BillingValue>
        </BillingRow>
        <BillingRow>
          <BillingLabel>消費税額</BillingLabel>
          <BillingValue>{taxAmount.toLocaleString()}円</BillingValue>  
        </BillingRow>
        <BillingRow>
          <BillingLabel>税抜金額</BillingLabel>
          <BillingValue>{totalAmount.toLocaleString()}円</BillingValue>
        </BillingRow>
        <BillingRow>  
          <BillingLabel>支払期日</BillingLabel>
          <BillingValue>{paymentDeadline}</BillingValue>
        </BillingRow>
        <BillingRow>
          <BillingLabel>支払方法</BillingLabel>
          <BillingValue>
            {paymentMethod === 'bank' ? '銀行振込' : '現金'}
            {directPayment ? '（直接払い）' : ''}
          </BillingValue>
        </BillingRow>
        <BillingRow>
          <BillingLabel>消費税区分</BillingLabel>  
          <BillingValue>
            {taxCategory === 'taxIncluded' ? '内税' : '外税'} 
          </BillingValue>
        </BillingRow>
      </Billing>
    </Container>
  );
};

export default Bill;

// 使用例
const App: React.FC = () => {
  const billData: BillProps = {
    companyInfo: {
      companyName: '株式会社アイウエオ',  
      companyCode: 'A1234',
      fiscalYear: '2023年9月期', 
      businessCategory: 'システム開発',
      jobType: 'プログラマー',
    },
    workDetail: {  
      estimatedAmount: 1000000,
      workFrom: '2023年4月1日',
      workTo: '2023年9月30日',
      workDetail: 'XXXシステムの設計・開発',
    },
    billing: {
      billingAmount: 1100000, 
      taxAmount: 100000,
      totalAmount: 1000000,
      paymentDeadline: '2023年10月末日',
      paymentMethod: 'bank',
      directPayment: false,
      taxCategory: 'taxIncluded',
    },
  };

  return <Bill {...billData} />;  
};