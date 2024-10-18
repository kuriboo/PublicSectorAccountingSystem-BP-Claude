import React from 'react';
import styled from '@emotion/styled';

type PeriodType = '日' | '前' | '細節' | '明細';
type ReserveType = 'する' | 'しない';

interface MAD6410FormProps {
  startDate: Date;
  endDate: Date;
  periodType: PeriodType;
  reserveType: ReserveType;
  setContent: string;
}

const MAD6410Form: React.FC<MAD6410FormProps> = ({
  startDate,
  endDate,
  periodType,
  reserveType,
  setContent,
}) => {
  const formatDate = (date: Date) => {
    const y = date.getFullYear();
    const m = ('00' + (date.getMonth()+1)).slice(-2);
    const d = ('00' + date.getDate()).slice(-2);
    return `${y}年${m}月${d}日`;
  };

  return (
    <FormWrapper>
      <FormTitle>MAD6410 予算執行状況表(科目別)作成</FormTitle>
      <FormContent>
        <Field>
          <FieldTitle>範囲指定</FieldTitle>
          <DateField>
            <DateLabel>集計日付　</DateLabel>
            <DateValue>{formatDate(startDate)}</DateValue>
            <DateLabel>　～　</DateLabel>
            <DateValue>{formatDate(endDate)}</DateValue>
          </DateField>
          <RadioGroupField>
            <RadioButton type="radio" id="day" name="periodType" value="日" checked={periodType === '日'} readOnly/>
            <RadioLabel htmlFor="day">日</RadioLabel>
            <RadioButton type="radio" id="before" name="periodType" value="前" checked={periodType === '前'} readOnly/>
            <RadioLabel htmlFor="before">前</RadioLabel>
            <RadioButton type="radio" id="detail" name="periodType" value="細節" checked={periodType === '細節'} readOnly/>
            <RadioLabel htmlFor="detail">細節</RadioLabel>
            <RadioButton type="radio" id="statement" name="periodType" value="明細" checked={periodType === '明細'} readOnly/>
            <RadioLabel htmlFor="statement">明細</RadioLabel>
          </RadioGroupField>
          <RadioGroupField>
            <RadioButton type="radio" id="reserve" name="reserveType" value="する" checked={reserveType === 'する'} readOnly/>
            <RadioLabel htmlFor="reserve">する</RadioLabel>
            <RadioButton type="radio" id="noreserve" name="reserveType" value="しない" checked={reserveType === 'しない'} readOnly/>
            <RadioLabel htmlFor="noreserve">しない</RadioLabel>
          </RadioGroupField>
        </Field>
        <Field>
          <FieldTitle>集計対象</FieldTitle>
          <Select>
            <option>全体</option>
            <option>ブロック</option>
            <option>セグメント</option>
          </Select>
          <Input type="text" value={setContent} readOnly/>
        </Field>
      </FormContent>
      <ButtonWrapper>
        <Button type="button">OK</Button>
        <Button type="button">クリア</Button>
        <Button type="button">終了</Button>
      </ButtonWrapper>
    </FormWrapper>
  );
};

// Sample usage
const App: React.FC = () => {
  return (
    <MAD6410Form 
      startDate={new Date(2023, 8, 1)}
      endDate={new Date(2023, 8, 20)}
      periodType="前"
      reserveType="する"
      setContent="全体"
    />
  );  
};

export default App;

const FormWrapper = styled.div`
  font-family: sans-serif;
  background: #f0f0f0;
  padding: 16px;
`;

const FormTitle = styled.h2`
  font-size: 18px;
  margin-bottom: 16px;
`;

const FormContent = styled.div`
  background: white;
  padding: 16px;
`;

const Field = styled.div`
  margin-bottom: 16px;
`;

const FieldTitle = styled.div`
  font-weight: bold;
  margin-bottom: 8px;
`;

const DateField = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
`; 

const DateLabel = styled.span`
  margin-right: 4px;
`;

const DateValue = styled.span`
  margin-right: 8px;
`;

const RadioGroupField = styled.div`
  margin-bottom: 8px;
`;

const RadioButton = styled.input`
  margin-right: 4px;
`;

const RadioLabel = styled.label`
  margin-right: 16px;
`;

const Select = styled.select`
  margin-right: 8px;
  padding: 4px;
`;

const Input = styled.input`
  padding: 4px;
`;

const ButtonWrapper = styled.div`
  text-align: center;
  margin-top: 24px;
`;

const Button = styled.button`
  margin: 0 8px;
  padding: 8px 16px;
  font-weight: bold;
`;