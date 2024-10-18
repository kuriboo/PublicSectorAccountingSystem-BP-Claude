import React from 'react';
import styled from '@emotion/styled';

interface ReceiptData {
  name: string;
  amount: number;
  breakdown: {
    '3条': number;
    '4条': number;
    'その他': number;
  };
  preassessment: Array<{
    area: string;
    rate: string;
    exemptionAmount: number;
    selfAssessedAmount: number;
    deductibleAmount: number;
    taxableAmount: number;
  }>;
  totalDeductibleAmount: number;
  totalTaxableAmount: number;
}

interface ReceiptProps {
  data: ReceiptData;
}

const Receipt: React.FC<ReceiptProps> = ({ data }) => {
  return (
    <ReceiptContainer>
      <ReceiptTitle>特定収入項目名称: {data.name}</ReceiptTitle>
      <ReceiptAmount>特定収入額: {data.amount.toLocaleString()} 円</ReceiptAmount>
      <BreakdownContainer>
        <BreakdownItem>
          <BreakdownLabel>3条:</BreakdownLabel>
          <BreakdownValue>{data.breakdown['3条'].toLocaleString()} 円</BreakdownValue>
        </BreakdownItem>
        <BreakdownItem>
          <BreakdownLabel>4条:</BreakdownLabel>
          <BreakdownValue>{data.breakdown['4条'].toLocaleString()} 円</BreakdownValue>
        </BreakdownItem>
        <BreakdownItem>
          <BreakdownLabel>その他:</BreakdownLabel>
          <BreakdownValue>{data.breakdown['その他'].toLocaleString()} 円</BreakdownValue>
        </BreakdownItem>
      </BreakdownContainer>
      <PreassessmentContainer>
        <PreassessmentHeader>
          <PreassessmentHeaderItem>消費税率及び地方消費税率(地方消費税率)</PreassessmentHeaderItem>
          <PreassessmentHeaderItem>課税売上対応分</PreassessmentHeaderItem>
          <PreassessmentHeaderItem>課税・非課税売上共通対応分</PreassessmentHeaderItem>
          <PreassessmentHeaderItem>課税仕入れ等に係る特定収入額</PreassessmentHeaderItem>
        </PreassessmentHeader>
        {data.preassessment.map((item, index) => (
          <PreassessmentRow key={index}>
            <PreassessmentItem>{item.area}</PreassessmentItem>
            <PreassessmentItem>{item.exemptionAmount.toLocaleString()} 円</PreassessmentItem>
            <PreassessmentItem>{item.selfAssessedAmount.toLocaleString()} 円</PreassessmentItem>
            <PreassessmentItem>{item.taxableAmount.toLocaleString()} 円</PreassessmentItem>
          </PreassessmentRow>
        ))}
        <PreassessmentRow>
          <PreassessmentItem>合計</PreassessmentItem>
          <PreassessmentItem>{data.totalDeductibleAmount.toLocaleString()} 円</PreassessmentItem>
          <PreassessmentItem>0 円</PreassessmentItem>
          <PreassessmentItem>{data.totalTaxableAmount.toLocaleString()} 円</PreassessmentItem>
        </PreassessmentRow>
      </PreassessmentContainer>
    </ReceiptContainer>
  );
};

const ReceiptContainer = styled.div`
  font-family: Arial, sans-serif;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #f9f9f9;
`;

const ReceiptTitle = styled.h2`
  font-size: 18px;
  margin-bottom: 10px;
`;

const ReceiptAmount = styled.p`
  font-size: 16px;
  margin-bottom: 20px;
`;

const BreakdownContainer = styled.div`
  margin-bottom: 20px;
`;

const BreakdownItem = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 5px;
`;

const BreakdownLabel = styled.span`
  font-weight: bold;
`;

const BreakdownValue = styled.span``;

const PreassessmentContainer = styled.div`
  width: 100%;
  overflow-x: auto;
`;

const PreassessmentHeader = styled.div`
  display: flex;
  font-weight: bold;
  border-bottom: 1px solid #ccc;
  padding-bottom: 5px;
  margin-bottom: 10px;
`;

const PreassessmentHeaderItem = styled.div`
  flex: 1;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const PreassessmentRow = styled.div`
  display: flex;
  margin-bottom: 5px;
`;

const PreassessmentItem = styled.div`
  flex: 1;
  text-align: right;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

// サンプルデータ
const sampleData: ReceiptData = {
  name: '補助金・交付金等',
  amount: 5525740,
  breakdown: {
    '3条': 3625740,
    '4条': 1900000,
    'その他': 0,
  },
  preassessment: [
    {
      area: '10.00%(2.20%)',
      rate: '10.00%',
      exemptionAmount: 0,
      selfAssessedAmount: 0,
      deductibleAmount: 0,
      taxableAmount: 0,
    },
    {
      area: '8.00%(1.76%)',
      rate: '8.00%',
      exemptionAmount: 0,
      selfAssessedAmount: 0,
      deductibleAmount: 0,
      taxableAmount: 0,
    },
    {
      area: '8.00%(1.70%)',
      rate: '8.00%',
      exemptionAmount: 0,
      selfAssessedAmount: 0,
      deductibleAmount: 0,
      taxableAmount: 0,
    },
    {
      area: '5.00%(1.00%)',
      rate: '5.00%',
      exemptionAmount: 0,
      selfAssessedAmount: 0,
      deductibleAmount: 0,
      taxableAmount: 0,
    },
    {
      area: '3.00%(0.00%)',
      rate: '3.00%',
      exemptionAmount: 0,
      selfAssessedAmount: 0,
      deductibleAmount: 0,
      taxableAmount: 0,
    },
  ],
  totalDeductibleAmount: 0,
  totalTaxableAmount: 3625740,
};

const App: React.FC = () => {
  return (
    <div>
      <Receipt data={sampleData} />
    </div>
  );
};

export default App;