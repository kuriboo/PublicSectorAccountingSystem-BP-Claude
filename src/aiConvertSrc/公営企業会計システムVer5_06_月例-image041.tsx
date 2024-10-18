import React from 'react';
import styled from 'styled-components';

// 日次損益計算書の期間指定コンポーネント
interface DateSelectionProps {
  startMonth: number;
  endMonth: number;
  accountType: string;
  accountPeriod: number;
  onStartMonthChange: (month: number) => void;
  onEndMonthChange: (month: number) => void;
  onAccountTypeChange: (type: string) => void;
  onAccountPeriodChange: (period: number) => void;
}

const DateSelection: React.FC<DateSelectionProps> = ({
  startMonth,
  endMonth,
  accountType,
  accountPeriod,
  onStartMonthChange,
  onEndMonthChange,
  onAccountTypeChange,
  onAccountPeriodChange,
}) => {
  // 月選択のオプションを生成
  const monthOptions = Array.from({ length: 12 }, (_, i) => (
    <option key={i + 1} value={i + 1}>
      {i + 1}月
    </option>
  ));

  return (
    <Container>
      <Title>月次損益計算書</Title>

      <Period>
        集計年月
        <MonthSelect
          value={startMonth}
          onChange={(e) => onStartMonthChange(Number(e.target.value))}
        >
          {monthOptions}
        </MonthSelect>
        〜
        <MonthSelect
          value={endMonth}
          onChange={(e) => onEndMonthChange(Number(e.target.value))}
        >
          {monthOptions}
        </MonthSelect>
      </Period>

      <AccountType>
        集計対象
        <RadioButton
          type="radio"
          name="accountType"
          value="全体"
          checked={accountType === '全体'}
          onChange={() => onAccountTypeChange('全体')}
        />
        全体
        <RadioButton
          type="radio"
          name="accountType"
          value="ブロック"
          checked={accountType === 'ブロック'}
          onChange={() => onAccountTypeChange('ブロック')}
        />
        ブロック
        <RadioButton
          type="radio"
          name="accountType"
          value="セグメント"
          checked={accountType === 'セグメント'}
          onChange={() => onAccountTypeChange('セグメント')}
        />
        セグメント
      </AccountType>

      <AccountPeriod>
        <label>
          <RadioButton
            type="radio"
            name="accountPeriod"
            value={20}
            checked={accountPeriod === 20}
            onChange={() => onAccountPeriodChange(20)}
          />
          20
        </label>
        限度ブロック
      </AccountPeriod>
    </Container>
  );
};

// スタイリング
const Container = styled.div`
  background-color: #f0f0f0;
  padding: 16px;
  border-radius: 4px;
`;

const Title = styled.h2`
  font-size: 18px;
  margin-bottom: 16px;
`;

const Period = styled.div`
  margin-bottom: 16px;
`;

const MonthSelect = styled.select`
  margin: 0 8px;
`;

const AccountType = styled.div`
  margin-bottom: 16px;
`;

const AccountPeriod = styled.div`
  margin-bottom: 16px;
`;

const RadioButton = styled.input`
  margin-right: 4px;
`;

// サンプルデータ
const sampleData = {
  startMonth: 1,
  endMonth: 12,
  accountType: '全体',
  accountPeriod: 20,
};

// 使用例
const App: React.FC = () => {
  const [startMonth, setStartMonth] = React.useState(sampleData.startMonth);
  const [endMonth, setEndMonth] = React.useState(sampleData.endMonth);
  const [accountType, setAccountType] = React.useState(sampleData.accountType);
  const [accountPeriod, setAccountPeriod] = React.useState(sampleData.accountPeriod);

  return (
    <DateSelection
      startMonth={startMonth}
      endMonth={endMonth}
      accountType={accountType}
      accountPeriod={accountPeriod}
      onStartMonthChange={setStartMonth}
      onEndMonthChange={setEndMonth}
      onAccountTypeChange={setAccountType}
      onAccountPeriodChange={setAccountPeriod}
    />
  );
};

export default DateSelection;