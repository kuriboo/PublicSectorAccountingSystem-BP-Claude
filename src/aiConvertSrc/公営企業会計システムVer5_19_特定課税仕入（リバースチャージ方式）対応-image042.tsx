import React from 'react';
import styled from '@emotion/styled';

type PredictionProps = {
  averageCode: string;
  year: number;
  predictedCode: string;
  taxRate: number;
  redemptionDivision: string;
  entryCost: string;
  includesTax: '税抜' | '税込';
  businessClassificationFlg: boolean;
  supplementaryPredictedSales: string;
  remarks: string;
  store: string;
  predictedDate: string;
};

const PredictionWrapper = styled.div`
  background-color: #f0f0f0;
  padding: 16px;
  border-radius: 4px;
`;

const PredictionRow = styled.div`
  display: flex;
  margin-bottom: 8px;

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

const PredictionLabel = styled.div`
  width: 180px;
  font-weight: bold;

  @media (max-width: 600px) {
    width: 100%;
    margin-bottom: 4px;
  }
`;

const PredictionValue = styled.div`
  flex: 1;
`;

const Prediction: React.FC<PredictionProps> = ({
  averageCode,
  year,
  predictedCode,
  taxRate,
  redemptionDivision,
  entryCost,
  includesTax,
  businessClassificationFlg,
  supplementaryPredictedSales,
  remarks,
  store,
  predictedDate,
}) => {
  return (
    <PredictionWrapper>
      <PredictionRow>
        <PredictionLabel>予算料目コード</PredictionLabel>
        <PredictionValue>{averageCode || '-'}</PredictionValue>
      </PredictionRow>
      <PredictionRow>
        <PredictionLabel>年度</PredictionLabel>
        <PredictionValue>{year || '-'}</PredictionValue>
      </PredictionRow>
      <PredictionRow>
        <PredictionLabel>予算科目区分</PredictionLabel>
        <PredictionValue>{predictedCode || '-'}</PredictionValue>
      </PredictionRow>
      <PredictionRow>
        <PredictionLabel>税区分</PredictionLabel>
        <PredictionValue>{taxRate ? `${taxRate}%` : '-'}</PredictionValue>
      </PredictionRow>
      <PredictionRow>
        <PredictionLabel>購買区分</PredictionLabel>
        <PredictionValue>{redemptionDivision || '-'}</PredictionValue>
      </PredictionRow>
      <PredictionRow>
        <PredictionLabel>予算計上区分</PredictionLabel>
        <PredictionValue>{entryCost || '-'}</PredictionValue>
      </PredictionRow>
      <PredictionRow>
        <PredictionLabel>収入区分</PredictionLabel>
        <PredictionValue>{includesTax || '-'}</PredictionValue>
      </PredictionRow>
      <PredictionRow>
        <PredictionLabel>精算基礎税込フラグ</PredictionLabel>
        <PredictionValue>{businessClassificationFlg ? '税込' : '税抜'}</PredictionValue>
      </PredictionRow>
      <PredictionRow>
        <PredictionLabel>補助科目</PredictionLabel>
        <PredictionValue>{supplementaryPredictedSales || '-'}</PredictionValue>
      </PredictionRow>
      <PredictionRow>
        <PredictionLabel>摘要</PredictionLabel>
        <PredictionValue>{remarks || '-'}</PredictionValue>
      </PredictionRow>
      <PredictionRow>
        <PredictionLabel>所属</PredictionLabel>
        <PredictionValue>{store || '-'}</PredictionValue>
      </PredictionRow>
      <PredictionRow>
        <PredictionLabel>施策</PredictionLabel>
        <PredictionValue>{predictedDate || '-'}</PredictionValue>
      </PredictionRow>
    </PredictionWrapper>
  );
};

// Usage example
const PredictionExample: React.FC = () => {
  const predictionData: PredictionProps = {
    averageCode: '000010113',
    year: 2023,
    predictedCode: '2 運常未払計上2',
    taxRate: 6.8,
    redemptionDivision: '2 経常',
    entryCost: '0626501011001001 営業未払金',
    includesTax: '税抜',
    businessClassificationFlg: true,
    supplementaryPredictedSales: '0000001 機材用',
    remarks: '000000 機材用',
    store: '電子事務部',
    predictedDate: '',
  };

  return <Prediction {...predictionData} />;
};

export default PredictionExample;