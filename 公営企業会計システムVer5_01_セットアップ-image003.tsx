import React from 'react';
import styled from '@emotion/styled';

type CalendarProps = {
  title?: string;
  enablePublicHolidays?: boolean;
  enableDaySelection?: boolean;
  enabledDays?: ('月' | '火' | '水' | '木' | '金' | '土' | '日')[];
  selectionRule?: '個別設定' | '現在登録済' | '前年度' | 'CSVファイル';
  onConfirm?: () => void;
  onCancel?: () => void;
};

const CalendarContainer = styled.div`
  background-color: white;
  border: 1px solid #ccc;
  padding: 16px;
  width: 420px;

  @media (max-width: 600px) {
    width: 100%;
  }
`;

const TitleText = styled.div`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 16px;
`;

const OptionsContainer = styled.div`
  margin-bottom: 16px;
`;

const Option = styled.div`
  margin-bottom: 8px;
`;

const OptionText = styled.span`
  margin-left: 4px;
`;

const RuleContainer = styled.div`
  margin-bottom: 16px;
`;

const Rule = styled.div`
  margin-bottom: 8px;
`;

const RuleText = styled.span`
  margin-left: 4px;
`;

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const Button = styled.button`
  margin-left: 8px;
  padding: 4px 16px;
`;

const Calendar: React.FC<CalendarProps> = ({
  title = '行政市水道部料金課',
  enablePublicHolidays = true,
  enableDaySelection = true,
  enabledDays = ['月', '火', '水', '木', '金', '土', '日'],
  selectionRule,
  onConfirm,
  onCancel,
}) => {
  const handleConfirm = () => {
    onConfirm?.();
  };

  const handleCancel = () => {
    onCancel?.();
  };

  return (
    <CalendarContainer>
      <TitleText>{title}</TitleText>
      <OptionsContainer>
        <Option>
          <input type="checkbox" checked={enablePublicHolidays} readOnly />
          <OptionText>行政市水道部料金課</OptionText>
        </Option>
        <Option>
          <input type="checkbox" checked={enableDaySelection} readOnly />
          <OptionText>指定金融機関</OptionText>
        </Option>
      </OptionsContainer>
      <RuleContainer>
        {enabledDays.map((day) => (
          <Rule key={day}>
            <input type="checkbox" checked readOnly />
            <RuleText>{day}</RuleText>
          </Rule>
        ))}
      </RuleContainer>
      <RuleContainer>
        <Rule>
          <input
            type="radio"
            checked={selectionRule === '個別設定'}
            readOnly
          />
          <RuleText>個別設定</RuleText>
        </Rule>
        <Rule>
          <input
            type="radio"
            checked={selectionRule === '現在登録済'}
            readOnly
          />
          <RuleText>現在登録済の祝日設定をそのまま次年度の祝日設定保持する</RuleText>
        </Rule>
        <Rule>
          <input
            type="radio"
            checked={selectionRule === '前年度'}
            readOnly
          />
          <RuleText>前年度の祝日をコピーする</RuleText>
        </Rule>
        <Rule>
          <input
            type="radio"
            checked={selectionRule === 'CSVファイル'}
            readOnly
          />
          <RuleText>CSVファイルを取り込む 取込</RuleText>
        </Rule>
      </RuleContainer>
      <ButtonsContainer>
        <Button onClick={handleConfirm}>作成</Button>
        <Button onClick={handleCancel}>終了</Button>
      </ButtonsContainer>
    </CalendarContainer>
  );
};

export default Calendar;

// Usage example:
const CalendarExample = () => {
  return (
    <Calendar
      enablePublicHolidays={false}
      enabledDays={['月', '火', '水', '木', '金']}
      selectionRule="個別設定"
      onConfirm={() => alert('Calendar confirmed')}
      onCancel={() => alert('Calendar cancelled')}
    />
  );
};