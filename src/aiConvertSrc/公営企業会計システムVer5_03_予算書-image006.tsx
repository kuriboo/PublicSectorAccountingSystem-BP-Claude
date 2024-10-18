以下は、指定された要件に基づいて作成されたNext.js + TypeScriptのコンポーネントです。

import React from 'react';
import styled from '@emotion/styled';

// 予算仕訳リストの型定義
type BudgetListProps = {
  startDate: string;
  endDate: string;
  accountTitle: string;
  projectCode: number;
  hourlyWage: number;
  billingAmount: number;
  billedAmount: number;
  note?: string;
};

// 予算仕訳リストコンポーネント
const BudgetList: React.FC<BudgetListProps> = ({
  startDate,
  endDate,
  accountTitle,
  projectCode,
  hourlyWage,
  billingAmount,
  billedAmount,
  note,
}) => {
  return (
    <BudgetListContainer>
      <Title>予算仕訳リスト / 予算科目別作成</Title>
      <DateRange>
        {startDate} ～ {endDate}
      </DateRange>
      <InputField>
        <Label>自動仕訳情報</Label>
        <Field>
          <Label>年度</Label>
          <Select defaultValue="令和02">
            <option value="令和02">令和02</option>
          </Select>
        </Field>
        <Field>
          <Label>予算編成区分</Label>
          <Select defaultValue="決算見込">
            <option value="決算見込">決算見込</option>
          </Select>
        </Field>
        <Field>
          <Label>回数</Label>
          <Input type="number" defaultValue={1} />
          <Label>決算見込1回目</Label>
        </Field>
        <Field>
          <Label>金額種別</Label>
          <Input type="text" defaultValue="見積要求" />
        </Field>
      </InputField>
      <InputField>
        <Label>範囲指定</Label>
        <Field>
          <Label>予算科目</Label>
          <Input type="text" value={accountTitle} readOnly />
        </Field>
        <Field>
          <Label>予算科目</Label>
          <Input type="number" value={projectCode} readOnly />
        </Field>
      </InputField>
      <AmountField>
        <AmountItem>
          <AmountLabel>請求予定額</AmountLabel>
          <Amount>{billingAmount.toLocaleString()}</Amount>
        </AmountItem>
        <AmountItem>
          <AmountLabel>請求額</AmountLabel>
          <Amount>{billedAmount.toLocaleString()}</Amount>
        </AmountItem>
      </AmountField>
      {note && <Note>備考：{note}</Note>}
      <ButtonGroup>
        <Button primary>OK</Button>
        <Button>クリア</Button>
        <Button>終了</Button>
      </ButtonGroup>
    </BudgetListContainer>
  );
};

// サンプルデータを用いた使用例
const SampleBudgetList: React.FC = () => {
  const sampleData: BudgetListProps = {
    startDate: '令和02年12月23日',
    endDate: '令和02年12月23日',
    accountTitle: '見積要求',
    projectCode: 3,
    hourlyWage: 1,
    billingAmount: 123456789,
    billedAmount: 987654321,
    note: '決算見込1回目',
  };

  return <BudgetList {...sampleData} />;
};

// スタイリング
const BudgetListContainer = styled.div`
  background-color: #f0f0f0;
  padding: 20px;
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
`;

const Title = styled.h2`
  font-size: 20px;
  margin-bottom: 10px;
`;

const DateRange = styled.p`
  font-size: 16px;
  margin-bottom: 20px;
`;

const InputField = styled.div`
  margin-bottom: 20px;
`;

const Label = styled.label`
  display: inline-block;
  width: 150px;
  font-weight: bold;
`;

const Field = styled.div`
  margin-bottom: 10px;
`;

const Select = styled.select`
  width: 100px;
`;

const Input = styled.input`
  width: 100px;
  margin-right: 10px;
`;

const AmountField = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const AmountItem = styled.div`
  text-align: right;
`;

const AmountLabel = styled.span`
  font-weight: bold;
`;

const Amount = styled.span`
  font-size: 18px;
  margin-left: 10px;
`;

const Note = styled.p`
  margin-bottom: 20px;
`;

const ButtonGroup = styled.div`
  text-align: center;
`;

const Button = styled.button<{ primary?: boolean }>`
  padding: 10px 20px;
  margin: 0 10px;
  font-size: 16px;
  border: none;
  background-color: ${({ primary }) => (primary ? '#007bff' : '#ccc')};
  color: ${({ primary }) => (primary ? '#fff' : '#000')};
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;

export default BudgetList;

このコンポーネントは、予算仕訳リストの情報を表示するために使用されます。プロパティを通じて、開始日、終了日、科目名、プロジェクトコード、請求予定額、請求額などの情報を受け取り、整形して表示します。

また、サンプルデータを使用して、コンポーネントの使用例を示しています。

スタイリングには、CSS-in-JSライブラリの@emotion/styledを使用し、レスポンシブデザインを考慮しています。

コンポーネント内で、値が入っていない場合の処理（例外処理）は、TypeScriptの型定義によって対処しています。必須のプロパティには型を指定し、オプションのプロパティには?を付けています。

コードにはコメントを含め、可読性を高めています。

以上が、指定された要件に基づいて作成されたNext.js + TypeScriptのコンポーネントです。必要に応じて、さらにカスタマイズや拡張を行うことができます。