import React from 'react';
import styled from '@emotion/styled';

// 特定課税仕入登録型入力コンポーネントの型定義
type TaxExemptInputProps = {
  startDate: string;
  endDate: string;
  taxRate: number;
  onStartDateChange: (value: string) => void;
  onEndDateChange: (value: string) => void;
  onTaxRateChange: (value: number) => void;
  onSubmit: () => void;
};

// 特定課税仕入登録型入力コンポーネント
const TaxExemptInput: React.FC<TaxExemptInputProps> = ({
  startDate,
  endDate,
  taxRate,
  onStartDateChange,
  onEndDateChange,
  onTaxRateChange,
  onSubmit,
}) => {
  return (
    <Container>
      <Title>特定課税仕入登録型入力</Title>
      <DateContainer>
        <Label>検索</Label>
        <DateInput
          type="date"
          value={startDate}
          onChange={(e) => onStartDateChange(e.target.value)}
        />
        <DateSpan>~</DateSpan>
        <DateInput
          type="date"
          value={endDate}
          onChange={(e) => onEndDateChange(e.target.value)}
        />
        <CheckboxLabel>
          <Checkbox type="checkbox" />
          課税の支出予算執行から税額中の伝票のみ抽出
        </CheckboxLabel>
      </DateContainer>
      <RateContainer>
        <Label>税率</Label>
        <RateInput
          type="number"
          value={taxRate}
          onChange={(e) => onTaxRateChange(Number(e.target.value))}
        />
        %
      </RateContainer>
      <TaxDetailTable>
        {/* 税額明細テーブルのコンポーネントをここに実装 */}
      </TaxDetailTable>
      <ButtonContainer>
        <SubmitButton onClick={onSubmit}>実行</SubmitButton>
      </ButtonContainer>
    </Container>
  );
};

// サンプルデータ
const sampleData = {
  startDate: '2016/03/27',
  endDate: '2016/03/27',
  taxRate: 10,
};

// 使用例コンポーネント
const SampleUsage = () => {
  const [startDate, setStartDate] = React.useState(sampleData.startDate);
  const [endDate, setEndDate] = React.useState(sampleData.endDate);
  const [taxRate, setTaxRate] = React.useState(sampleData.taxRate);

  const handleSubmit = () => {
    // 実行ボタン押下時の処理
    console.log('Submit:', { startDate, endDate, taxRate });
  };

  return (
    <TaxExemptInput
      startDate={startDate}
      endDate={endDate}
      taxRate={taxRate}
      onStartDateChange={setStartDate}
      onEndDateChange={setEndDate}
      onTaxRateChange={setTaxRate}
      onSubmit={handleSubmit}
    />
  );
};

// スタイル定義
const Container = styled.div`
  padding: 20px;
`;

const Title = styled.h2`
  margin-bottom: 20px;
`;

const DateContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const Label = styled.label`
  margin-right: 10px;
`;

const DateInput = styled.input`
  margin-right: 10px;
`;

const DateSpan = styled.span`
  margin-right: 10px;
`;

const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
`;

const Checkbox = styled.input`
  margin-right: 5px;
`;

const RateContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const RateInput = styled.input`
  width: 60px;
  margin-right: 5px;
`;

const TaxDetailTable = styled.div`
  margin-bottom: 20px;
`;

const ButtonContainer = styled.div`
  text-align: right;
`;

const SubmitButton = styled.button`
  padding: 5px 10px;
`;

export default TaxExemptInput;