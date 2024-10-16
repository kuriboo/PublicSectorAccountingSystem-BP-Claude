以下は、指定された条件に基づいて生成したNext.js + TypeScriptのコンポーネントです。

```tsx
import React from 'react';
import styled from 'styled-components';

// 収納内容照会画面のプロパティ型定義
type InquiryFormProps = {
  accountNumber: string; // 口座番号
  accountType: string; // 個別 or 前受
  fromDate: string; // 調定日(開始日)
  toDate: string; // 調定日(終了日)
  amountFrom: number; // 債権金額(開始)
  amountTo: number; // 債権金額(終了)
  settlementNumberFrom: number; // 振替金額(開始) 
  settlementNumberTo: number; // 振替金額(終了)
  comment: string; // 摘要
  deadlineType: string; // 調定科目(指定なし、予算科目、仕訳科目)
  deadlineFrom: string; // 調定科目(開始日)
  deadlineTo: string; // 調定科目(終了日)
  settlementType: string; // 納入期限(未入金、入金済、繰越、すべて)
  paymentDateFrom: string; // 年月日(開始)
  paymentDateTo: string; // 年月日(終了)
  payerType: string; // 納期(指定なし、未入金、入金済)
};

// 収納内容照会画面コンポーネント
const InquiryForm: React.FC<InquiryFormProps> = ({
  accountNumber = '',
  accountType = '個別',
  fromDate = '',
  toDate = '',
  amountFrom = 0,
  amountTo = 999999999999,
  settlementNumberFrom = 0, 
  settlementNumberTo = 999999999999,
  comment = '',
  deadlineType = 'セグメント',
  deadlineFrom = '',
  deadlineTo = '',
  settlementType = '未入金',
  paymentDateFrom = '',
  paymentDateTo = '',
  payerType = '指定なし',
}) => {
  return (
    <Container>
      <Title>収納内容照会</Title>
      <Field>
        <Label>検索条件設定</Label>
        <InputWrapper>
          <Label>年度</Label>
          <Input type="number" defaultValue="0000000" />
          <Label>～</Label>
          <Input type="number" defaultValue="9999999" />
        </InputWrapper>
        <InputWrapper>
          <Label>調定日</Label>
          <DateInput type="date" defaultValue={fromDate} />
          <Label>～</Label>
          <DateInput type="date" defaultValue={toDate} />
          <Label>伝票金額</Label>
          <Input type="number" defaultValue={amountFrom} />
          <Label>～</Label>
          <Input type="number" defaultValue={amountTo} />
        </InputWrapper>
        <InputWrapper>
          <Label>種別</Label>
          <RadioButton
            type="radio"
            name="accountType"
            value="個別"
            defaultChecked={accountType === '個別'}
          />
          <Label>個別</Label>
          <RadioButton
            type="radio"
            name="accountType"
            value="前受"
            defaultChecked={accountType === '前受'}
          />
          <Label>前受</Label>
        </InputWrapper>
        <InputWrapper>
          <Label>調定番号</Label>
          <Input type="number" defaultValue={settlementNumberFrom} />
          <Label>～</Label>
          <Input type="number" defaultValue={settlementNumberTo} />
        </InputWrapper>
        <InputWrapper>
          <Label>摘要</Label>
          <Input type="text" defaultValue={comment} />
          <Label>工事店</Label>
          <Input type="text" />
        </InputWrapper>
        <InputWrapper>
          <Label>調定科目</Label>
          <Select defaultValue={deadlineType}>
            <option>指定なし</option>
            <option>予算科目</option>
            <option>仕訳科目</option>
            <option>セグメント</option>
          </Select>
          <Label>調定科目</Label>
          <DateInput type="date" defaultValue={deadlineFrom} />
          <Label>～</Label>
          <DateInput type="date" defaultValue={deadlineTo} />
        </InputWrapper>
        <InputWrapper>
          <Label>区分</Label>
          <RadioButton type="radio" name="settlementType" value="未入金" defaultChecked={settlementType === '未入金'} />
          <Label>未入金</Label>
          <RadioButton type="radio" name="settlementType" value="入金済" defaultChecked={settlementType === '入金済'} />
          <Label>入金済</Label>
          <RadioButton type="radio" name="settlementType" value="繰越" defaultChecked={settlementType === '繰越'} />
          <Label>繰越</Label>
          <RadioButton type="radio" name="settlementType" value="すべて" defaultChecked={settlementType === 'すべて'} />
          <Label>すべて</Label>
        </InputWrapper>
        <InputWrapper>
          <Label>納期</Label>
          <RadioButton type="radio" name="payerType" value="指定なし" defaultChecked={payerType === '指定なし'} />
          <Label>指定なし</Label>
          <RadioButton type="radio" name="payerType" value="未入金" defaultChecked={payerType === '未入金'} />
          <Label>未入金</Label>
          <RadioButton type="radio" name="payerType" value="入金済" defaultChecked={payerType === '入金済'} />
          <Label>入金済</Label>
          <Label>年月日</Label>
          <DateInput type="date" defaultValue={paymentDateFrom} />
          <Label>～</Label>
          <DateInput type="date" defaultValue={paymentDateTo} />
        </InputWrapper>
      </Field>
      <ButtonWrapper>
        <Button>検索</Button>
        <Button>CSV</Button>
      </ButtonWrapper>
      <TableWrapper>
        {/* ここにテーブルコンポーネント */}
      </TableWrapper>
      <ButtonWrapper>
        <Button>クリア</Button>
        <Button>終了</Button>
      </ButtonWrapper>
    </Container>
  );
};

// サンプルデータを用いた使用例
const SampleUsage: React.FC = () => {
  return (
    <InquiryForm
      accountNumber="1234567"
      accountType="個別"
      fromDate="2022-01-01"
      toDate="2022-12-31"
      amountFrom={10000}
      amountTo={50000}
      settlementNumberFrom={1}
      settlementNumberTo={100}
      comment="サンプル"
      deadlineType="セグメント"
      deadlineFrom="2022-01-01"
      deadlineTo="2022-12-31"
      settlementType="未入金"
      paymentDateFrom="2022-01-01"
      paymentDateTo="2022-12-31"
      payerType="指定なし"
    />
  );
};

// スタイリング
const Container = styled.div`
  padding: 20px;
`;

const Title = styled.h2`
  margin-bottom: 20px;
`;

const Field = styled.div`
  margin-bottom: 20px;
`;

const Label = styled.label`
  margin-right: 10px;
`;

const InputWrapper = styled.div`
  margin-bottom: 10px;
`;

const Input = styled.input`
  padding: 5px;
  margin-right: 10px;
`;

const DateInput = styled.input`
  padding: 5px;
  margin-right: 10px;
`;

const RadioButton = styled.input`
  margin-right: 5px;
`;

const Select = styled.select`
  padding: 5px;
  margin-right: 10px;
`;

const ButtonWrapper = styled.div`
  margin-bottom: 20px;
  text-align: center;
`;

const Button = styled.button`
  padding: 10px 20px;
  margin-right: 10px;
`;

const TableWrapper = styled.div`
  margin-bottom: 20px;
`;

export default InquiryForm;
```

上記のコードでは、指定された条件に基づいて収納内容照会画面のコンポーネントを生成しました。TypeScriptの型定義を使用し、プロパティを通じてカスタマイズ可能にしています。また、styled-componentsを使用してCSS-in-JS形式でスタイリングを行っています。

コンポーネント内では、入力フィールドやラジオボタン、セレクトボックスなどを配置し、入力された値をプロパティとして受け取るようにしています。また、検索ボタンやCSVボタン、クリアボタン、終了ボタンを配置しています。

最後に、サンプルデータを用いて使用例を示すSampleUsageコンポーネントを作成しました。

各入力フィールドにはデフォルト値を設定し、値が入っていない場合の処理も考慮しています。

このコンポーネントを使用することで、収納内容照会画面の基本的な構造とデザインを実現できます。必要に応じて、さらに機能を追加したり、スタイリングを調整したりすることができます。