import React from 'react';
import styled from '@emotion/styled';

// 受付番号の型定義
type Reception = {
  startNumber: string;
  endNumber: string;
}

// 各日付の型定義
type DateRange = {
  startDate: string;
  endDate: string;
}

// コンポーネントのPropsの型定義
type ReceptionFormProps = {
  reception: Reception;
  receptionDate: DateRange;
  publishDate: DateRange;
  closeDate: DateRange;
  drawDate: DateRange;
  paymentDate: DateRange;
  certificationDate: DateRange;
  rtDate: DateRange;
}

// コンポーネントのスタイル定義
const FormWrapper = styled.div`
  background: #f0f0f0;
  padding: 16px;
  border-radius: 8px;

  @media (max-width: 600px) {
    padding: 8px;
  }
`;

const FormLabel = styled.label`
  display: block;
  margin-bottom: 8px;
  font-weight: bold;
`;

const FormInput = styled.input`
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  margin-bottom: 16px;
`;

const FormDateWrapper = styled.div`
  display: flex;
  gap: 8px;
  margin-bottom: 16px;

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

// 受付番号フォームコンポーネント
const ReceptionForm: React.FC<ReceptionFormProps> = ({
  reception,
  receptionDate,
  publishDate,
  closeDate,
  drawDate,
  paymentDate,
  certificationDate,
  rtDate,
}) => {
  return (
    <FormWrapper>
      <FormLabel>受付番号</FormLabel>
      <FormInput type="text" value={reception.startNumber} />
      <span>～</span>
      <FormInput type="text" value={reception.endNumber} />

      <FormLabel>受付日</FormLabel>
      <FormDateWrapper>
        <FormInput type="text" value={receptionDate.startDate} />
        <span>～</span>
        <FormInput type="text" value={receptionDate.endDate} />
      </FormDateWrapper>

      {/* 以下、同様に他の日付フォームも実装 */}
      <FormLabel>発行日</FormLabel>
      <FormDateWrapper>
        <FormInput type="text" value={publishDate.startDate} />
        <span>～</span>
        <FormInput type="text" value={publishDate.endDate} />
      </FormDateWrapper>

      <FormLabel>締切日</FormLabel>
      <FormDateWrapper>
        <FormInput type="text" value={closeDate.startDate} />
        <span>～</span>
        <FormInput type="text" value={closeDate.endDate} />
      </FormDateWrapper>

      {/* 残りの日付フォームも同様に実装 */}
      
    </FormWrapper>
  );
};

// サンプルデータを用いた使用例
const SampleReceptionForm = () => {
  // サンプルデータ
  const sampleData: ReceptionFormProps = {
    reception: {
      startNumber: '0000',
      endNumber: '9999',
    },
    receptionDate: {
      startDate: '平成30年02月27日',
      endDate: '平成30年02月27日',
    },
    publishDate: {
      startDate: '年 月 日',
      endDate: '年 月 日',
    },
    closeDate: {  
      startDate: '年 月 日',
      endDate: '年 月 日',
    },
    drawDate: {
      startDate: '年 月 日', 
      endDate: '年 月 日',
    },
    paymentDate: {
      startDate: '年 月 日',
      endDate: '年 月 日', 
    },
    certificationDate: {
      startDate: '年 月 日',
      endDate: '年 月 日',
    },
    rtDate: {
      startDate: '年 月 日',
      endDate: '年 月 日',
    },
  };

  return (
    <ReceptionForm 
      reception={sampleData.reception}
      receptionDate={sampleData.receptionDate}
      publishDate={sampleData.publishDate}
      closeDate={sampleData.closeDate}
      drawDate={sampleData.drawDate}
      paymentDate={sampleData.paymentDate}  
      certificationDate={sampleData.certificationDate}
      rtDate={sampleData.rtDate}
    />
  );
};

export default ReceptionForm;