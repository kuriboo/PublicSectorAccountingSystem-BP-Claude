import React from 'react';
import styled from '@emotion/styled';

// 振替入力一括登録の入力フォームのプロパティ型
type TransferInputFormProps = {
  date: string;
  registrationType: '登録' | '訂正' | '削除';
  onDateChange: (date: string) => void;
  onRegistrationTypeChange: (type: '登録' | '訂正' | '削除') => void;
};

// 振替入力一括登録の入力フォームコンポーネント
const TransferInputForm: React.FC<TransferInputFormProps> = ({
  date,
  registrationType,
  onDateChange,
  onRegistrationTypeChange,
}) => {
  return (
    <FormContainer>
      <DateInput
        type="date"
        value={date}
        onChange={(e) => onDateChange(e.target.value)}
      />
      <RegistrationTypeContainer>
        <RegistrationTypeLabel>
          <input
            type="radio"
            value="登録"
            checked={registrationType === '登録'}
            onChange={() => onRegistrationTypeChange('登録')}
          />
          登録
        </RegistrationTypeLabel>
        <RegistrationTypeLabel>
          <input
            type="radio"
            value="訂正"
            checked={registrationType === '訂正'}
            onChange={() => onRegistrationTypeChange('訂正')}
          />
          訂正
        </RegistrationTypeLabel>
        <RegistrationTypeLabel>
          <input
            type="radio"
            value="削除"
            checked={registrationType === '削除'}
            onChange={() => onRegistrationTypeChange('削除')}
          />
          削除
        </RegistrationTypeLabel>
      </RegistrationTypeContainer>
    </FormContainer>
  );
};

// 振替一括振替一覧テーブルの行のプロパティ型
type TransferListRowProps = {
  transferCode: string;
  itemName: string;
  tax: number;
  amount: number;
  consumption: number;
  accountingAmount: number;
  note: string;
};

// 振替一括振替一覧テーブルの行コンポーネント 
const TransferListRow: React.FC<TransferListRowProps> = ({
  transferCode,
  itemName,
  tax,
  amount,
  consumption,
  accountingAmount,
  note,
}) => {
  return (
    <tr>
      <td>{transferCode}</td>
      <td>{itemName}</td>
      <td>{tax.toLocaleString()}</td>
      <td>{amount.toLocaleString()}</td>
      <td>{consumption.toLocaleString()}</td> 
      <td>{accountingAmount.toLocaleString()}</td>
      <td>{note}</td>
    </tr>
  );
};

// 振替一括振替一覧テーブルのプロパティ型
type TransferListTableProps = {
  rows: TransferListRowProps[];
};

// 振替一括振替一覧テーブルコンポーネント
const TransferListTable: React.FC<TransferListTableProps> = ({ rows }) => {
  if (rows.length === 0) {
    return <EmptyMessage>振替データがありません。</EmptyMessage>;
  }

  const total = rows.reduce(
    (sum, row) => ({
      tax: sum.tax + row.tax,
      amount: sum.amount + row.amount,
      consumption: sum.consumption + row.consumption,
    }),
    { tax: 0, amount: 0, consumption: 0 }
  );

  return (
    <>
      <Table>
        <thead>
          <tr>
            <th>伝票コード</th>
            <th>摘要</th>
            <th>税込金額</th>
            <th>税抜金額</th>
            <th>消費税額</th>
            <th>推書番号</th>
            <th>備考</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <TransferListRow key={row.transferCode} {...row} />
          ))}
        </tbody>
      </Table>
      <TotalContainer>
        <TotalLabel>合計</TotalLabel>
        <TotalAmount>{total.tax.toLocaleString()}</TotalAmount>
        <TotalAmount>{total.amount.toLocaleString()}</TotalAmount>
        <TotalAmount>{total.consumption.toLocaleString()}</TotalAmount>
      </TotalContainer>
    </>
  );
};

// サンプルデータを使用した振替一括登録ページコンポーネント
const TransferRegistrationPage: React.FC = () => {
  const [date, setDate] = React.useState('');
  const [registrationType, setRegistrationType] = React.useState<
    '登録' | '訂正' | '削除'
  >('登録');

  const rows: TransferListRowProps[] = [
    {
      transferCode: '000706',
      itemName: '共通経費(全給水期間)',
      tax: 1256320,
      amount: 1230500,
      consumption: 25820,
      accountingAmount: 0,
      note: '26年',
    },
    {
      transferCode: '000802',
      itemName: '共通→給振替(沢中給水権配給期間)',
      tax: 99066,
      amount: 88200,
      consumption: 6896,
      accountingAmount: 0,
      note: '27年',
    },
    {
      transferCode: '000807',
      itemName: '共通→給振替(高上地区給水期間)',
      tax: 135864,
      amount: 125300,
      consumption: 10064,
      accountingAmount: 0,
      note: '28年',
    },
    {
      transferCode: '000878',
      itemName: '共通→給振替(高圧地下給水権期間)',
      tax: 115000,
      amount: 115000,
      consumption: 0,
      accountingAmount: 0,
      note: '29年',
    },
  ];

  return (
    <Container>
      <Title>公営企業会計システム</Title>
      <FormTitle>振替入力一括登録</FormTitle>
      <TransferInputForm
        date={date}
        registrationType={registrationType}
        onDateChange={setDate}
        onRegistrationTypeChange={setRegistrationType}
      />
      <TransferListTable rows={rows} />
      <ButtonContainer>
        <SubmitButton>終了</SubmitButton>
        <SubmitButton primary>確定</SubmitButton>
        <SubmitButton primary>終了</SubmitButton>
      </ButtonContainer>
    </Container>
  );
};

const Container = styled.div`
  padding: 16px;
`;

const Title = styled.h1`
  font-size: 24px;
  margin-bottom: 16px;
`;

const FormTitle = styled.h2`
  font-size: 20px;
`;

const FormContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
`;

const DateInput = styled.input`
  margin-right: 16px;
  padding: 4px;
`;

const RegistrationTypeContainer = styled.div`
  display: flex;
`;

const RegistrationTypeLabel = styled.label`
  margin-right: 8px;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 16px;

  th,
  td {
    border: 1px solid #ccc;
    padding: 8px;
    text-align: center;
  }
`;

const EmptyMessage = styled.p`
  margin-bottom: 16px;
`;

const TotalContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 16px;
`;

const TotalLabel = styled.span`
  margin-right: 16px;
`;

const TotalAmount = styled.span`
  margin-right: 16px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const SubmitButton = styled.button<{ primary?: boolean }>`
  padding: 8px 16px;
  margin-left: 8px;
  background-color: ${({ primary }) => (primary ? '#007bff' : '#6c757d')};
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

export default TransferRegistrationPage;
```

以上のコードは、Next.js + TypeScriptを使用して、公営企業会計システムの振替入力一括登録ページのコンポーネントを実装したものです。

主な特徴は以下の通りです：

1. TypeScriptの型定義を使用して、コンポーネントのプロパティの型を明示的に定義しています。
2. 再利用可能なコンポーネントとして、振替入力フォーム（`TransferInputForm`）と振替一覧テーブル（`TransferListTable`）を実装しています。
3. CSS-in-JS形式の`@emotion/styled`を使用して、コンポーネント内にスタイリングを組み込んでいます。レスポンシブデザインを考慮し、テーブルのレイアウトを整えています。
4. コードにはコメントを含めて、コンポーネントの役割や型定義の説明を記述しています。
5. 振替一覧テーブルでは、データが空の場合の例外処理を行い、適切なメッセージを表示するようにしています。
6. サンプルデータを用いて、振替入力一括登録ページ全体のコンポーネント（`TransferRegistrationPage`）を実装し、実際の使用例を示しています。

このコンポーネントを使用することで、公営企業会計システムの振替入力一括登録ページを簡単に実装することができます。必要に応じてプロパティを渡すことで、日付や登録種別、振替一覧データをカスタマイズできます。