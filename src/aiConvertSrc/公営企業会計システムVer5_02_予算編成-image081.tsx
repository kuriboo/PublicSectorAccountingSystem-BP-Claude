import React from 'react';
import styled from 'styled-components';

// 予算調整準備調整入力のプロパティ型定義
type TaxAdjustmentProps = {
  defaultLeaseRate?: number; // デフォルトのリース契約分
  defaultFacilitiesSubsidyRate?: number; // デフォルトの設備補助率
  defaultTaxAdjustmentRate?: number; // デフォルトの集計先指定税率
  defaultExecutionTaxAdjustmentAmount?: number; // デフォルトの課税標準額
  defaultPrepaidTaxAdjustmentAmount?: number; // デフォルトの仮払消費税額
};

// 予算調整準備調整入力コンポーネント
const TaxAdjustment: React.FC<TaxAdjustmentProps> = ({
  defaultLeaseRate = 10,
  defaultFacilitiesSubsidyRate = 0,
  defaultTaxAdjustmentRate = 10,
  defaultExecutionTaxAdjustmentAmount = 0,
  defaultPrepaidTaxAdjustmentAmount = 0,
}) => {
  // リース契約分と負債性引当金取崩分のラジオボタンの状態
  const [adjustmentType, setAdjustmentType] = React.useState('leaseRate');

  // 各入力値を管理するstate
  const [leaseRate, setLeaseRate] = React.useState(defaultLeaseRate);
  const [facilitiesSubsidyRate, setFacilitiesSubsidyRate] = React.useState(defaultFacilitiesSubsidyRate);
  const [taxAdjustmentRate, setTaxAdjustmentRate] = React.useState(defaultTaxAdjustmentRate);
  const [executionTaxAdjustmentAmount, setExecutionTaxAdjustmentAmount] = React.useState(defaultExecutionTaxAdjustmentAmount);
  const [prepaidTaxAdjustmentAmount, setPrepaidTaxAdjustmentAmount] = React.useState(defaultPrepaidTaxAdjustmentAmount);

  return (
    <Container>
      <Header>予算課税標準額調整入力</Header>
      <AdjustmentTypeWrapper>
        <AdjustmentTypeLabel>
          <input
            type="radio"
            checked={adjustmentType === 'leaseRate'}
            onChange={() => setAdjustmentType('leaseRate')}
          />
          リース契約分
        </AdjustmentTypeLabel>
        <AdjustmentTypeLabel>
          <input
            type="radio"
            checked={adjustmentType === 'facilitiesSubsidy'}
            onChange={() => setAdjustmentType('facilitiesSubsidy')}
          />
          負債性引当金取崩分
        </AdjustmentTypeLabel>
      </AdjustmentTypeWrapper>

      <FieldGrid>
        <FieldLabel>範囲指定</FieldLabel>
        <div>
          <FieldValue>会計年度</FieldValue>
          <FieldValue>令和04年度</FieldValue>
        </div>
        <FieldLabel>予算集成区分</FieldLabel>
        <FieldValue>当初予算</FieldValue>
        <FieldLabel>最終査定値</FieldLabel>
        <FieldValue>見積要求額</FieldValue>
      </FieldGrid>

      {adjustmentType === 'leaseRate' ? (
        <InputRow>
          <InputLabel>集計先指定税率</InputLabel>
          <InputField
            type="number"
            value={leaseRate}
            onChange={(e) => setLeaseRate(Number(e.target.value))}
          />
          %
        </InputRow>
      ) : (
        <>
          <InputRow>
            <InputLabel>集計先指定税率</InputLabel>
            <InputField
              type="number"
              value={facilitiesSubsidyRate}
              onChange={(e) => setFacilitiesSubsidyRate(Number(e.target.value))}
            />
            %
          </InputRow>
          <InputRow>
            <InputLabel>課税標準額</InputLabel>
            <InputField
              type="number"
              value={taxAdjustmentRate}
              onChange={(e) => setTaxAdjustmentRate(Number(e.target.value))}
            />
            円
          </InputRow>
        </>
      )}

      <InputRow>
        <InputLabel>課税標準額</InputLabel>
        <InputField
          type="number"
          value={executionTaxAdjustmentAmount}
          onChange={(e) => setExecutionTaxAdjustmentAmount(Number(e.target.value))}
        />
        円
      </InputRow>
      <InputRow>
        <InputLabel>仮払消費税額</InputLabel>
        <InputField
          type="number"
          value={prepaidTaxAdjustmentAmount}
          onChange={(e) => setPrepaidTaxAdjustmentAmount(Number(e.target.value))}
        />
        円
      </InputRow>

      <ButtonRow>
        <Button>OK</Button>
        <Button>クリア</Button>
        <Button>終了</Button>
      </ButtonRow>
    </Container>
  );
};

// 表示用のサンプルコンポーネント
const SampleUsage: React.FC = () => {
  return (
    <div>
      <h2>予算課税標準額調整入力サンプル</h2>
      <TaxAdjustment />
    </div>
  );
};

// スタイリング用のStyled Componentsを定義
const Container = styled.div`
  font-family: sans-serif;
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  box-sizing: border-box;
`;

const Header = styled.h1`
  font-size: 24px;
  margin-bottom: 20px;
`;

const AdjustmentTypeWrapper = styled.div`
  margin-bottom: 20px;
`;

const AdjustmentTypeLabel = styled.label`
  margin-right: 10px;
`;

const FieldGrid = styled.div`
  display: grid;
  grid-template-columns: 120px 1fr;
  gap: 10px;
  margin-bottom: 20px;
`;

const FieldLabel = styled.div`
  font-weight: bold;
`;

const FieldValue = styled.div`
  margin-bottom: 5px;
`;

const InputRow = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const InputLabel = styled.div`
  width: 120px;
`;

const InputField = styled.input`
  width: 100px;
  margin-right: 5px;
  padding: 5px;
  box-sizing: border-box;
`;

const ButtonRow = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  margin-top: 20px;
`;

const Button = styled.button`
  padding: 5px 10px;
  min-width: 80px;
`;

export default SampleUsage;