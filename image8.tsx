import React from 'react';
import styled from 'styled-components';

// 貨幣区分コンポーネントの型定義
type CurrencyDivisionProps = {
  currencyDivision: string;
  setCurrencyDivision: (currencyDivision: string) => void;
};

// 貨幣区分コンポーネント
const CurrencyDivision: React.FC<CurrencyDivisionProps> = ({
  currencyDivision,
  setCurrencyDivision,
}) => {
  return (
    <CurrencyDivisionWrapper>
      <CurrencyDivisionLabel>貨幣区分</CurrencyDivisionLabel>
      <CurrencyDivisionInput
        type="text"
        value={currencyDivision}
        onChange={(e) => setCurrencyDivision(e.target.value)}
      />
    </CurrencyDivisionWrapper>
  );
};

// 仕訳科目区分コンポーネントの型定義
type AccountingSubjectDivisionProps = {
  accountingSubjectDivision: string;
  setAccountingSubjectDivision: (accountingSubjectDivision: string) => void;
};

// 仕訳科目区分コンポーネント
const AccountingSubjectDivision: React.FC<AccountingSubjectDivisionProps> = ({
  accountingSubjectDivision,
  setAccountingSubjectDivision,
}) => {
  return (
    <AccountingSubjectDivisionWrapper>
      <AccountingSubjectDivisionLabel>仕訳科目区分</AccountingSubjectDivisionLabel>
      <AccountingSubjectDivisionInput
        type="text"
        value={accountingSubjectDivision}
        onChange={(e) => setAccountingSubjectDivision(e.target.value)}
      />
    </AccountingSubjectDivisionWrapper>
  );
};

// 細節決済区分コンポーネントの型定義
type DetailedSettlementDivisionProps = {
  detailedSettlementDivision: string;
  setDetailedSettlementDivision: (detailedSettlementDivision: string) => void;
};

// 細節決済区分コンポーネント
const DetailedSettlementDivision: React.FC<DetailedSettlementDivisionProps> = ({
  detailedSettlementDivision,
  setDetailedSettlementDivision,
}) => {
  return (
    <DetailedSettlementDivisionWrapper>
      <DetailedSettlementDivisionLabel>細節決済区分</DetailedSettlementDivisionLabel>
      <DetailedSettlementDivisionInput
        type="text"
        value={detailedSettlementDivision}
        onChange={(e) => setDetailedSettlementDivision(e.target.value)}
      />
    </DetailedSettlementDivisionWrapper>
  );
};

// 未払計上コンポーネントの型定義
type UnpaidRecordingProps = {
  unpaidRecording: string;
  setUnpaidRecording: (unpaidRecording: string) => void;
};

// 未払計上コンポーネント
const UnpaidRecording: React.FC<UnpaidRecordingProps> = ({
  unpaidRecording,
  setUnpaidRecording,
}) => {
  return (
    <UnpaidRecordingWrapper>
      <UnpaidRecordingLabel>未払計上</UnpaidRecordingLabel>
      <UnpaidRecordingSelect
        value={unpaidRecording}
        onChange={(e) => setUnpaidRecording(e.target.value)}
      >
        <option value="">選択してください</option>
        <option value="option1">オプション1</option>
        <option value="option2">オプション2</option>
      </UnpaidRecordingSelect>
    </UnpaidRecordingWrapper>
  );
};

// BS科目線描額コンポーネントの型定義
type BSSubjectLineDrawingAmountProps = {
  bsSubjectLineDrawingAmount: number;
  setBSSubjectLineDrawingAmount: (bsSubjectLineDrawingAmount: number) => void;
};

// BS科目線描額コンポーネント
const BSSubjectLineDrawingAmount: React.FC<BSSubjectLineDrawingAmountProps> = ({
  bsSubjectLineDrawingAmount,
  setBSSubjectLineDrawingAmount,
}) => {
  return (
    <BSSubjectLineDrawingAmountWrapper>
      <BSSubjectLineDrawingAmountLabel>BS科目線描額</BSSubjectLineDrawingAmountLabel>
      <BSSubjectLineDrawingAmountInput
        type="number"
        value={bsSubjectLineDrawingAmount}
        onChange={(e) => setBSSubjectLineDrawingAmount(Number(e.target.value))}
      />
    </BSSubjectLineDrawingAmountWrapper>
  );
};

// スタイリング
const CurrencyDivisionWrapper = styled.div`
  margin-bottom: 10px;
`;

const CurrencyDivisionLabel = styled.label`
  display: block;
  font-weight: bold;
`;

const CurrencyDivisionInput = styled.input`
  width: 100%;
  padding: 5px;
`;

const AccountingSubjectDivisionWrapper = styled.div`
  margin-bottom: 10px;
`;

const AccountingSubjectDivisionLabel = styled.label`
  display: block;
  font-weight: bold;
`;

const AccountingSubjectDivisionInput = styled.input`
  width: 100%;
  padding: 5px;
`;

const DetailedSettlementDivisionWrapper = styled.div`
  margin-bottom: 10px;
`;

const DetailedSettlementDivisionLabel = styled.label`
  display: block;
  font-weight: bold;
`;

const DetailedSettlementDivisionInput = styled.input`
  width: 100%;
  padding: 5px;
`;

const UnpaidRecordingWrapper = styled.div`
  margin-bottom: 10px;
`;

const UnpaidRecordingLabel = styled.label`
  display: block;
  font-weight: bold;
`;

const UnpaidRecordingSelect = styled.select`
  width: 100%;
  padding: 5px;
`;

const BSSubjectLineDrawingAmountWrapper = styled.div`
  margin-bottom: 10px;
`;

const BSSubjectLineDrawingAmountLabel = styled.label`
  display: block;
  font-weight: bold;
`;

const BSSubjectLineDrawingAmountInput = styled.input`
  width: 100%;
  padding: 5px;
`;

// サンプルデータ
const sampleData = {
  currencyDivision: 'JPY',
  accountingSubjectDivision: 'Sales',
  detailedSettlementDivision: 'Cash',
  unpaidRecording: 'option1',
  bsSubjectLineDrawingAmount: 1000,
};

// 使用例コンポーネント
const UsageExample: React.FC = () => {
  const [currencyDivision, setCurrencyDivision] = React.useState(sampleData.currencyDivision);
  const [accountingSubjectDivision, setAccountingSubjectDivision] = React.useState(sampleData.accountingSubjectDivision);
  const [detailedSettlementDivision, setDetailedSettlementDivision] = React.useState(sampleData.detailedSettlementDivision);
  const [unpaidRecording, setUnpaidRecording] = React.useState(sampleData.unpaidRecording);
  const [bsSubjectLineDrawingAmount, setBSSubjectLineDrawingAmount] = React.useState(sampleData.bsSubjectLineDrawingAmount);

  return (
    <div>
      <CurrencyDivision
        currencyDivision={currencyDivision}
        setCurrencyDivision={setCurrencyDivision}
      />
      <AccountingSubjectDivision
        accountingSubjectDivision={accountingSubjectDivision}
        setAccountingSubjectDivision={setAccountingSubjectDivision}
      />
      <DetailedSettlementDivision
        detailedSettlementDivision={detailedSettlementDivision}
        setDetailedSettlementDivision={setDetailedSettlementDivision}
      />
      <UnpaidRecording
        unpaidRecording={unpaidRecording}
        setUnpaidRecording={setUnpaidRecording}
      />
      <BSSubjectLineDrawingAmount
        bsSubjectLineDrawingAmount={bsSubjectLineDrawingAmount}
        setBSSubjectLineDrawingAmount={setBSSubjectLineDrawingAmount}
      />
    </div>
  );
};

export default UsageExample;