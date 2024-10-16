import React from 'react';
import styled from 'styled-components';

// 入力フィールドのプロパティ型定義
type InputFieldProps = {
  label: string;
  value: string;
  onChange: (value: string) => void;
  required?: boolean;
  startDate?: string;
  endDate?: string;
  segment?: string;
};

// 入力フィールドコンポーネント
const InputField: React.FC<InputFieldProps> = ({
  label,
  value,
  onChange,
  required = false,
  startDate,
  endDate,
  segment,
}) => {
  return (
    <FieldWrapper>
      <Label>{label}</Label>
      {startDate && endDate ? (
        <DateRange>
          <input
            type="date"
            value={startDate}
            onChange={(e) => onChange(e.target.value)}
            required={required}
          />
          <span>〜</span>
          <input
            type="date"
            value={endDate}
            onChange={(e) => onChange(e.target.value)}
            required={required}
          />
        </DateRange>
      ) : segment ? (
        <select value={segment} onChange={(e) => onChange(e.target.value)} required={required}>
          <option value="">選択してください</option>
          <option value="segment1">セグメント1</option>
          <option value="segment2">セグメント2</option>
          {/* 必要なセグメントを追加 */}
        </select>
      ) : (
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          required={required}
        />
      )}
    </FieldWrapper>
  );
};

// スタイリング用のコンポーネント
const FieldWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
`;

const Label = styled.label`
  font-weight: bold;
  margin-bottom: 8px;
`;

const DateRange = styled.div`
  display: flex;
  align-items: center;

  input {
    flex: 1;
    margin-right: 8px;
  }

  span {
    margin-right: 8px;
  }
`;

// サンプルデータ
const sampleData = {
  projectName: '特定収入充当表収入項目設定一覧',
  fiscalYear: '令和02年度',
  taxAssessmentPeriod: '令和02年04月01日 〜 令和03年03月31日',
  segment: 'segment1',
};

// 使用例コンポーネント
const UsageExample: React.FC = () => {
  const [formData, setFormData] = React.useState(sampleData);

  const handleChange = (field: keyof typeof sampleData) => (value: string) => {
    setFormData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

  return (
    <div>
      <h2>特定収入充当表収入項目設定一覧</h2>
      <InputField
        label="範囲指定"
        value=""
        onChange={() => {}}
        startDate={formData.taxAssessmentPeriod.split(' 〜 ')[0]}
        endDate={formData.taxAssessmentPeriod.split(' 〜 ')[1]}
        required
      />
      <InputField
        label="会計年度"
        value={formData.fiscalYear}
        onChange={handleChange('fiscalYear')}
        required
      />
      <InputField label="セグメント" value={formData.segment} onChange={handleChange('segment')} />
    </div>
  );
};

export default InputField;