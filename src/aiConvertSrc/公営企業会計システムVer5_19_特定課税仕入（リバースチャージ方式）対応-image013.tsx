import React from 'react';
import styled from 'styled-components';

// 振替条件設定のプロパティ型定義
type TransferConditionProps = {
  accountNumber: string;
  transferPeriodStart: string;
  transferPeriodEnd: string;
  transferOnWeekday: boolean;
  transferOnHoliday: boolean;
  transferAmount: {
    min: number;
    max: number;
  };
  description: string;
};

// 振替条件設定コンポーネント
const TransferCondition: React.FC<TransferConditionProps> = ({
  accountNumber,
  transferPeriodStart,
  transferPeriodEnd,
  transferOnWeekday,
  transferOnHoliday,
  transferAmount,
  description,
}) => {
  return (
    <Container>
      <Title>振替条件設定</Title>
      <Row>
        <Label>振替番号</Label>
        <Input type="text" value={accountNumber} readOnly />
      </Row>
      <Row>
        <Label>振替期間</Label>
        <DateInputs>
          <DateInput type="date" value={transferPeriodStart} readOnly />
          <DateDelimiter>〜</DateDelimiter>
          <DateInput type="date" value={transferPeriodEnd} readOnly />
        </DateInputs>
      </Row>
      <Row>
        <Label>振替曜日</Label>
        <DayCheckboxes>
          <DayCheckbox type="checkbox" checked={transferOnWeekday} readOnly /> 平日
          <DayCheckbox type="checkbox" checked={transferOnHoliday} readOnly /> 休日
        </DayCheckboxes>
      </Row>
      <Row>
        <Label>振替金額</Label>
        <AmountInputs>
          <AmountInput type="number" value={transferAmount.min} readOnly />
          <AmountDelimiter>〜</AmountDelimiter>
          <AmountInput type="number" value={transferAmount.max} readOnly />
        </AmountInputs>
      </Row>
      <Row>
        <Label>摘要</Label>
        <DescriptionInput type="text" value={description} readOnly />
      </Row>
      <ButtonRow>
        <Button>表示</Button>
        <CancelButton>クリア</CancelButton>
        <SearchButton>検索</SearchButton>
      </ButtonRow>
    </Container>
  );
};

export default TransferCondition;

// スタイリング
const Container = styled.div`
  padding: 20px;
`;

const Title = styled.h2`
  font-size: 18px;
  margin-bottom: 20px;
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
`;

const Label = styled.label`
  width: 100px;
`;

const Input = styled.input`
  padding: 5px;
  font-size: 14px;
`;

const DateInputs = styled.div`
  display: flex;
  align-items: center;
`;

const DateInput = styled.input`
  padding: 5px;
  font-size: 14px;
  width: 120px;
`;

const DateDelimiter = styled.span`
  margin: 0 10px;
`;

const DayCheckboxes = styled.div`
  display: flex;
  align-items: center;
`;

const DayCheckbox = styled.input`
  margin-right: 5px;
`;

const AmountInputs = styled.div`
  display: flex;
  align-items: center;
`;

const AmountInput = styled.input`
  padding: 5px;
  font-size: 14px;
  width: 120px;
`;

const AmountDelimiter = styled.span`
  margin: 0 10px;
`;

const DescriptionInput = styled.input`
  padding: 5px;
  font-size: 14px;
  flex: 1;
`;

const ButtonRow = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
`;

const Button = styled.button`
  padding: 8px 15px;
  font-size: 14px;
  margin-left: 10px;
`;

const CancelButton = styled(Button)`
  background-color: #ccc;
`;

const SearchButton = styled(Button)`
  background-color: #007bff;
  color: #fff;
`;

// 使用例
const App: React.FC = () => {
  const sampleData: TransferConditionProps = {
    accountNumber: 'TR1227',
    transferPeriodStart: '2021-05-01',
    transferPeriodEnd: '2021-05-31',
    transferOnWeekday: true,
    transferOnHoliday: false,
    transferAmount: {
      min: 0,
      max: 999999999999,
    },
    description: '電子書籍/月額税分',
  };

  return (
    <div>
      <h1>振替条件設定の使用例</h1>
      <TransferCondition {...sampleData} />
    </div>
  );
};