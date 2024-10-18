import React from 'react';
import styled from 'styled-components';

type TaxPayerProps = {
  startDate: string;
  endDate: string;
  targetMonth: number;
  paymentMonth: number;
  paymentDueMonth: number;
  accountClosingDate: number;
  taxFilingDate: number;
  specialProvisionsDate: string;
};

const TaxPayer: React.FC<TaxPayerProps> = ({
  startDate,
  endDate,
  targetMonth,
  paymentMonth,
  paymentDueMonth,
  accountClosingDate,
  taxFilingDate,
  specialProvisionsDate,
}) => {
  // 入力された日付の文字列を Date オブジェクトに変換
  const parsedStartDate = startDate ? new Date(startDate) : null;
  const parsedEndDate = endDate ? new Date(endDate) : null;

  return (
    <Container>
      <Title>特定課税仕入税率管理入力</Title>
      <DateRange>
        <Label>検索</Label>
        <DateInput
          type="date"
          value={startDate}
          onChange={(e) => console.log(e.target.value)}
        />
        <span>〜</span>
        <DateInput
          type="date"
          value={endDate}
          onChange={(e) => console.log(e.target.value)}
        />
        <Checkbox type="checkbox" id="provisional-filing" />
        <Label htmlFor="provisional-filing">課税の支出予算執行か</Label>
      </DateRange>
      <InputRow>
        <InputGroup>
          <Label>対象年月</Label>
          <MonthInput
            type="number"
            min="1"
            max="12"
            value={targetMonth}
            onChange={(e) => console.log(e.target.value)}
          />
          <Label>年度</Label>
        </InputGroup>
        <InputGroup>
          <Label>支払年月</Label>
          <MonthInput
            type="number"
            min="1"
            max="12"
            value={paymentMonth}
            onChange={(e) => console.log(e.target.value)}
          />
          <Label>年度</Label>
        </InputGroup>
      </InputRow>
      <InputRow>
        <InputGroup>
          <Label>伝票日付</Label>
          <DateInput
            type="date"
            value={parsedStartDate?.toISOString().slice(0, 10) || ''}
            onChange={(e) => console.log(e.target.value)}
          />
          <span>〜</span>
          <DateInput
            type="date"
            value={parsedEndDate?.toISOString().slice(0, 10) || ''}
            onChange={(e) => console.log(e.target.value)}
          />
        </InputGroup>
        <InputGroup>
          <Label>掲要</Label>
          <TextInput type="text" />
        </InputGroup>
      </InputRow>
      <Table>
        <thead>
          <tr>
            <HeaderCell>種別</HeaderCell>
            <HeaderCell>発生源</HeaderCell>
            <HeaderCell>伝票日付</HeaderCell>
            <HeaderCell>番号</HeaderCell>
            <HeaderCell>明細</HeaderCell>
            <HeaderCell>借方科目</HeaderCell>
            <HeaderCell>貸方科目</HeaderCell>
            <HeaderCell>税額</HeaderCell>
            <HeaderCell>摘要</HeaderCell>
            <HeaderCell>備考</HeaderCell>
          </tr>
        </thead>
        <tbody>
          {/* テーブルデータをここに動的に生成 */}
        </tbody>
      </Table>
      <ButtonContainer>
        <Button>OK</Button>
        <Button>クリア</Button>
        <Button>終了</Button>
      </ButtonContainer>
    </Container>
  );
};

// スタイリングコンポーネント
const Container = styled.div`
  padding: 16px;
`;

const Title = styled.h2`
  margin-bottom: 16px;
`;

const DateRange = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
`;

const Label = styled.label`
  margin-right: 8px;
`;

const DateInput = styled.input`
  margin-right: 8px;
`;

const Checkbox = styled.input`
  margin-right: 8px;
`;

const InputRow = styled.div`
  display: flex;
  margin-bottom: 16px;
`;

const InputGroup = styled.div`
  display: flex;
  align-items: center;
  margin-right: 16px;
`;

const MonthInput = styled.input`
  width: 60px;
  margin-right: 8px;
`;

const TextInput = styled.input`
  width: 200px;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 16px;
`;

const HeaderCell = styled.th`
  border: 1px solid #ccc;
  padding: 8px;
  text-align: left;
`;

const ButtonContainer = styled.div`
  text-align: right;
`;

const Button = styled.button`
  margin-left: 8px;
`;

// 使用例
const TaxPayerExample: React.FC = () => {
  return (
    <TaxPayer
      startDate="2023-03-01"
      endDate="2023-03-31"
      targetMonth={3}
      paymentMonth={4}
      paymentDueMonth={5}
      accountClosingDate={31}
      taxFilingDate={25}
      specialProvisionsDate="2023-06-30"
    />
  );
};

export default TaxPayerExample;