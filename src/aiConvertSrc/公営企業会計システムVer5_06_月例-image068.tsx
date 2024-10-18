import React from 'react';
import styled from 'styled-components';

// 日付の入力フィールドのプロパティ
interface DateFieldProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
}

// 日付の入力フィールドコンポーネント
const DateField: React.FC<DateFieldProps> = ({ label, value, onChange }) => {
  // 入力値が変更された時のハンドラ
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  return (
    <FieldWrapper>
      <Label>{label}</Label>
      <Input type="text" value={value} onChange={handleChange} />
    </FieldWrapper>
  );
};

// 集計対象の選択肢
const aggregationOptions = ['ブロック', 'セグメント'];

// 条件入力フォームのプロパティ
interface SearchFormProps {
  dateFrom: string;
  dateTo: string;
  aggregation: string;
  onDateFromChange: (value: string) => void;
  onDateToChange: (value: string) => void;
  onAggregationChange: (value: string) => void;
  onSubmit: () => void;
  onCancel: () => void;
  onClear: () => void;
}

// 条件入力フォームコンポーネント
const SearchForm: React.FC<SearchFormProps> = ({
  dateFrom,
  dateTo,
  aggregation,
  onDateFromChange,
  onDateToChange,
  onAggregationChange,
  onSubmit,
  onCancel,
  onClear,
}) => {
  return (
    <Form>
      <Title>詳所・利細・細節別予算執行明細表作成</Title>
      <FieldSet>
        <Legend>範囲指定</Legend>
        <DateField label="作成年月" value={dateFrom} onChange={onDateFromChange} />
        <DateField label="〜" value={dateTo} onChange={onDateToChange} />
      </FieldSet>
      <FieldSet>
        <Legend>集計対象</Legend>
        <Select value={aggregation} onChange={e => onAggregationChange(e.target.value)}>
          {aggregationOptions.map(option => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </Select>
      </FieldSet>
      <ButtonGroup>
        <Button onClick={onSubmit}>実行</Button>
        <Button onClick={onClear}>クリア</Button>
        <Button onClick={onCancel}>キャンセル</Button>
      </ButtonGroup>
    </Form>
  );
};

// サンプルデータ
const sampleData = {
  dateFrom: '令和05年07月',
  dateTo: '令和06年07月',
  aggregation: 'ブロック',
};

// サンプルコンポーネント
const SampleComponent: React.FC = () => {
  const [formData, setFormData] = React.useState(sampleData);

  const handleDateFromChange = (value: string) => {
    setFormData(prevData => ({ ...prevData, dateFrom: value }));
  };

  const handleDateToChange = (value: string) => {
    setFormData(prevData => ({ ...prevData, dateTo: value }));
  };

  const handleAggregationChange = (value: string) => {
    setFormData(prevData => ({ ...prevData, aggregation: value }));
  };

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
  };

  const handleClear = () => {
    setFormData(sampleData);
  };

  const handleCancel = () => {
    console.log('Cancelled');
  };

  return (
    <SearchForm
      {...formData}
      onDateFromChange={handleDateFromChange}
      onDateToChange={handleDateToChange}
      onAggregationChange={handleAggregationChange}
      onSubmit={handleSubmit}
      onClear={handleClear}
      onCancel={handleCancel}
    />
  );
};

// スタイリング
const Form = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #f0f0f0;
`;

const Title = styled.h2`
  margin-bottom: 20px;
`;

const FieldSet = styled.fieldset`
  margin-bottom: 20px;
  padding: 10px;
  border: 1px solid #ccc;
`;

const Legend = styled.legend`
  padding: 0 5px;
  font-weight: bold;
`;

const FieldWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const Label = styled.label`
  margin-right: 10px;
`;

const Input = styled.input`
  padding: 5px;
  border: 1px solid #ccc;
`;

const Select = styled.select`
  padding: 5px;
  border: 1px solid #ccc;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
`;

const Button = styled.button`
  margin: 0 5px;
  padding: 10px 20px;
  border: none;
  background-color: #007bff;
  color: #fff;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

export default SampleComponent;