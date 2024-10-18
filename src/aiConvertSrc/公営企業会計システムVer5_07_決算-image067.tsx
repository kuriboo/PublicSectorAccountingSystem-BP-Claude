import React from 'react';
import styled from '@emotion/styled';

interface TaxManagementFormProps {
  fiscalYear: string;
  period: string;
  onFiscalYearChange: (value: string) => void;
  onPeriodChange: (value: string) => void;
}

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 100%;
  max-width: 400px;
  box-sizing: border-box;
`;

const FormLabel = styled.label`
  font-weight: bold;
`;

const FormSelect = styled.select`
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 14px;
  width: 100%;
`;

const TaxManagementForm: React.FC<TaxManagementFormProps> = ({
  fiscalYear,
  period,
  onFiscalYearChange,
  onPeriodChange,
}) => {
  return (
    <FormWrapper>
      <FormLabel>
        会計年度
        <FormSelect value={fiscalYear} onChange={(e) => onFiscalYearChange(e.target.value)}>
          <option value="">-- 選択してください --</option>
          <option value="2023">2023年度</option>
          <option value="2022">2022年度</option>
          {/* 他の年度オプションを追加 */}
        </FormSelect>
      </FormLabel>
      <FormLabel>
        課税期間
        <FormSelect value={period} onChange={(e) => onPeriodChange(e.target.value)}>
          <option value="">-- 選択してください --</option>
          <option value="1">平成31年04月01日 〜 令和02年03月31日</option>
          {/* 他の課税期間オプションを追加 */}
        </FormSelect>
      </FormLabel>
    </FormWrapper>
  );
};

// サンプルデータを用いた使用例
const SampleUsage: React.FC = () => {
  const [fiscalYear, setFiscalYear] = React.useState('');
  const [period, setPeriod] = React.useState('');

  return (
    <div>
      <h2>税区分集計・調整額一覧表</h2>
      <TaxManagementForm
        fiscalYear={fiscalYear}
        period={period}
        onFiscalYearChange={setFiscalYear}
        onPeriodChange={setPeriod}
      />
      {/* 選択された年度と期間に基づいて他のコンポーネントを表示 */}
      <p>選択された年度: {fiscalYear}</p>
      <p>選択された期間: {period}</p>
    </div>
  );
};

export default TaxManagementForm;