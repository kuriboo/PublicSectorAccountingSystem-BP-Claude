import React from 'react';
import styled from '@emotion/styled';

type TransferPlanFormProps = {
  years: number;
  transferType: 'partial' | 'full';
  fromDate: string;
  toDate: string;
  onYearsChange: (years: number) => void;
  onTransferTypeChange: (transferType: 'partial' | 'full') => void;
  onFromDateChange: (fromDate: string) => void;
  onToDateChange: (toDate: string) => void;
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const FormField = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Label = styled.label`
  font-weight: bold;
`;

const Input = styled.input`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Select = styled.select`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const TransferPlanForm: React.FC<TransferPlanFormProps> = ({
  years,
  transferType,
  fromDate,
  toDate,
  onYearsChange,
  onTransferTypeChange,
  onFromDateChange,
  onToDateChange,
}) => {
  return (
    <Container>
      <FormField>
        <Label>年数</Label>
        <Select
          value={years}
          onChange={(e) => onYearsChange(Number(e.target.value))}
        >
          <option value={1}>1年</option>
          {/* Add more options for years */}
        </Select>
      </FormField>

      <FormField>
        <Label>帳票種別</Label>
        <Select
          value={transferType}
          onChange={(e) => onTransferTypeChange(e.target.value as 'partial' | 'full')}
        >
          <option value="partial">所属別</option>
          <option value="full">事業別</option>
        </Select>
      </FormField>

      <FormField>
        <Label>範囲指定</Label>
        <div>
          <Input
            type="text"
            value={fromDate}
            onChange={(e) => onFromDateChange(e.target.value)}
            placeholder="所属"
          />
          〜
          <Input
            type="text"
            value={toDate}
            onChange={(e) => onToDateChange(e.target.value)}
            placeholder="事業科目"
          />
        </div>
      </FormField>

      <FormField>
        <Label>処理概要</Label>
        <div>指定した年度から5年分の実施計画データを出力します。帳票内訳の内容を出力します。</div>
      </FormField>
    </Container>
  );
};

// サンプルデータと使用例
const SampleTransferPlanForm: React.FC = () => {
  const [years, setYears] = React.useState(1);
  const [transferType, setTransferType] = React.useState<'partial' | 'full'>('partial');
  const [fromDate, setFromDate] = React.useState('0000000');
  const [toDate, setToDate] = React.useState('99999999');

  return (
    <TransferPlanForm
      years={years}
      transferType={transferType}
      fromDate={fromDate}  
      toDate={toDate}
      onYearsChange={setYears}
      onTransferTypeChange={setTransferType}
      onFromDateChange={setFromDate}
      onToDateChange={setToDate}
    />
  );
};

export default SampleTransferPlanForm;