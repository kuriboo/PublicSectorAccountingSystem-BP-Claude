import React from 'react';
import styled from '@emotion/styled';

interface FormData {
  period: 'fixed' | 'range' | 'arbitrary';
  fixedDate: string;
  rangeStartDate: string;
  rangeEndDate: string;
  arbitraryStartDate: string;
  arbitraryEndDate: string;
  daysOfWeek: string[];
  oneTimeBonusDate: boolean;
  paymentDate: string;
}

interface DateRangeProps {
  formData: FormData;
  onFormDataChange: (newFormData: FormData) => void;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 16px;
`;

const PeriodRadioGroup = styled.div`
  display: flex;
  gap: 8px;
`;

const DateRangeContainer = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
`;

const DaysOfWeekCheckboxes = styled.div`
  display: flex;
  gap: 8px;
`;

const DateRange: React.FC<DateRangeProps> = ({ formData, onFormDataChange }) => {
  const handlePeriodChange = (period: FormData['period']) => {
    onFormDataChange({ ...formData, period });
  };

  const handleFixedDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onFormDataChange({ ...formData, fixedDate: e.target.value });
  };

  const handleRangeChange = (field: 'rangeStartDate' | 'rangeEndDate') => (e: React.ChangeEvent<HTMLInputElement>) => {
    onFormDataChange({ ...formData, [field]: e.target.value });
  };

  const handleArbitraryRangeChange = (field: 'arbitraryStartDate' | 'arbitraryEndDate') => (e: React.ChangeEvent<HTMLInputElement>) => {
    onFormDataChange({ ...formData, [field]: e.target.value });
  };

  const handleDaysOfWeekChange = (day: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
    const newDaysOfWeek = e.target.checked
      ? [...formData.daysOfWeek, day]
      : formData.daysOfWeek.filter((d) => d !== day);
    onFormDataChange({ ...formData, daysOfWeek: newDaysOfWeek });
  };

  const handleOneTimeBonusDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onFormDataChange({ ...formData, oneTimeBonusDate: e.target.checked });
  };

  const handlePaymentDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onFormDataChange({ ...formData, paymentDate: e.target.value });
  };

  return (
    <Container>
      <PeriodRadioGroup>
        <label>
          <input
            type="radio"
            checked={formData.period === 'fixed'}
            onChange={() => handlePeriodChange('fixed')}
          />
          毎週固定
        </label>
        <label>
          <input
            type="radio"
            checked={formData.period === 'range'}
            onChange={() => handlePeriodChange('range')}
          />
          納入期限
        </label>
        <label>
          <input
            type="radio"
            checked={formData.period === 'arbitrary'}
            onChange={() => handlePeriodChange('arbitrary')}
          />
          納付書番号
        </label>
      </PeriodRadioGroup>
      {formData.period === 'fixed' && (
        <input type="date" value={formData.fixedDate} onChange={handleFixedDateChange} />
      )}
      {formData.period === 'range' && (
        <DateRangeContainer>
          <input type="date" value={formData.rangeStartDate} onChange={handleRangeChange('rangeStartDate')} />
          ~
          <input type="date" value={formData.rangeEndDate} onChange={handleRangeChange('rangeEndDate')} />
        </DateRangeContainer>
      )}
      {formData.period === 'arbitrary' && (
        <DateRangeContainer>
          <input type="number" value={formData.arbitraryStartDate} onChange={handleArbitraryRangeChange('arbitraryStartDate')} />
          ~
          <input type="number" value={formData.arbitraryEndDate} onChange={handleArbitraryRangeChange('arbitraryEndDate')} />
        </DateRangeContainer>
      )}
      <DaysOfWeekCheckboxes>
        {['すべて', '受付未', '受付済', '収納済'].map((day) => (
          <label key={day}>
            <input
              type="checkbox"
              checked={formData.daysOfWeek.includes(day)}
              onChange={handleDaysOfWeekChange(day)}
            />
            {day}
          </label>
        ))}
      </DaysOfWeekCheckboxes>
      <label>
        <input
          type="checkbox"
          checked={formData.oneTimeBonusDate}
          onChange={handleOneTimeBonusDateChange}
        />
        一時値務者を抽出対象とする
      </label>
      <input type="text" value={formData.paymentDate} onChange={handlePaymentDateChange} />
    </Container>
  );
};

// Usage example
const App: React.FC = () => {
  const [formData, setFormData] = React.useState<FormData>({
    period: 'fixed',
    fixedDate: '2023-07-01',
    rangeStartDate: '',
    rangeEndDate: '',
    arbitraryStartDate: '',
    arbitraryEndDate: '',
    daysOfWeek: [],
    oneTimeBonusDate: false,
    paymentDate: '',
  });

  return (
    <div>
      <h1>納入通知書処理状況一覧表</h1>
      <DateRange formData={formData} onFormDataChange={setFormData} />
    </div>
  );
};

export default App;