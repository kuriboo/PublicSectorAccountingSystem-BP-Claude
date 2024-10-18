// DateRangeForm.tsx
import React from 'react';
import styled from '@emotion/styled';

// 日時入力フィールドのプロパティ型
type DateTimeFieldProps = {
  label: string;
  value: string;
  onChange: (value: string) => void;
};

// 日時入力フィールドコンポーネント
const DateTimeField: React.FC<DateTimeFieldProps> = ({ label, value, onChange }) => {
  return (
    <FieldWrapper>
      <Label>{label}</Label>
      <Input
        type="datetime-local"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </FieldWrapper>
  );
};

// 会場選択フィールドのプロパティ型
type VenueFieldProps = {
  label: string;
  value: string;
  onChange: (value: string) => void;
  options: string[];
};

// 会場選択フィールドコンポーネント 
const VenueField: React.FC<VenueFieldProps> = ({ label, value, onChange, options }) => {
  return (
    <FieldWrapper>
      <Label>{label}</Label>
      <Select value={value} onChange={(e) => onChange(e.target.value)}>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </Select>
    </FieldWrapper>
  );
};

// 日時範囲フォームのプロパティ型
type DateRangeFormProps = {
  startDate: string;
  endDate: string;
  startVenue: string;
  endVenue: string;
  onStartDateChange: (value: string) => void;
  onEndDateChange: (value: string) => void;  
  onStartVenueChange: (value: string) => void;
  onEndVenueChange: (value: string) => void;
  venueOptions: string[];
};

// 日時範囲フォームコンポーネント
const DateRangeForm: React.FC<DateRangeFormProps> = ({
  startDate,
  endDate,
  startVenue,
  endVenue,
  onStartDateChange,
  onEndDateChange,
  onStartVenueChange,
  onEndVenueChange,
  venueOptions,
}) => {
  return (
    <FormWrapper>
      <DateTimeField
        label="指名適定日時"
        value={startDate}
        onChange={onStartDateChange}
      />
      <VenueField
        label="会場名"
        value={startVenue}
        onChange={onStartVenueChange}
        options={venueOptions}
      />
      <DateTimeField
        label="現場説明日時"
        value={startDate}
        onChange={onStartDateChange}
      />
      <VenueField
        label="会場名"
        value={startVenue}
        onChange={onStartVenueChange}
        options={venueOptions}
      />
      <DateTimeField label="開札日時" value={startDate} onChange={onStartDateChange} />
      <DateTimeField label="開札日時" value={endDate} onChange={onEndDateChange} />
      <ButtonWrapper>
        <Button>OK</Button>
        <Button>クリア</Button>
        <Button>キャンセル</Button>
      </ButtonWrapper>
    </FormWrapper>
  );
};

// サンプルデータ
const sampleData = {
  startDate: '2023-06-01T08:00',
  endDate: '2023-06-05T18:00',
  startVenue: '606:水道用センター',
  endVenue: '606:浄化センター', 
  venueOptions: ['606:水道用センター', '806:浄化センター'],
};

// 使用例
const App: React.FC = () => {
  const [startDate, setStartDate] = React.useState(sampleData.startDate);
  const [endDate, setEndDate] = React.useState(sampleData.endDate);
  const [startVenue, setStartVenue] = React.useState(sampleData.startVenue);
  const [endVenue, setEndVenue] = React.useState(sampleData.endVenue);

  return (
    <DateRangeForm
      startDate={startDate}
      endDate={endDate}
      startVenue={startVenue}
      endVenue={endVenue}
      onStartDateChange={setStartDate}
      onEndDateChange={setEndDate}
      onStartVenueChange={setStartVenue}
      onEndVenueChange={setEndVenue}
      venueOptions={sampleData.venueOptions}
    />
  );
};

// スタイリング
const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const FieldWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const Label = styled.label`
  width: 120px;
  font-weight: bold;
`;

const Input = styled.input`
  flex: 1;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Select = styled.select`
  flex: 1;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 8px;
  margin-top: 16px;
`;

const Button = styled.button`
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  background-color: #007bff;
  color: #fff;
  cursor: pointer;
  
  &:hover {
    background-color: #0056b3;
  }
`;

export default App;