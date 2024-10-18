import React from 'react';
import styled from '@emotion/styled';

type ContractDetailProps = {
  companyName: string;
  contractDate: string;
  contractStartDate: string;
  contractEndDate: string;
  jobType: string;
  compensation: number;
  annualAllowance: number;
  commutingAllowance: number;
  paymentDate: string;
  workLocation: string;
  period: number;
  monthlySalary: number;
  annualSalary: number;
  overtimePay: number;
  specialAddition: number;
};

const ContractDetail: React.FC<ContractDetailProps> = ({
  companyName,
  contractDate,
  contractStartDate,
  contractEndDate,
  jobType,
  compensation,
  annualAllowance,
  commutingAllowance,
  paymentDate,
  workLocation,
  period,
  monthlySalary,
  annualSalary,
  overtimePay,
  specialAddition,
}) => {
  // 値が未入力の場合は"-"を表示
  const displayValue = (value: string | number) => {
    return value ? value : "-";
  };

  return (
    <Container>
      <Title>調定日総解除入力(前受金振替)</Title>
      <InfoGrid>
        <Label>調定日</Label>
        <Value>{displayValue(contractDate)}</Value>
        <Label>年度</Label>
        <Value>{displayValue(period)}年</Value>
        <Label>簡略残高</Label>
        <Value>{displayValue(compensation)}</Value>
        <Label>調定番号</Label>
        <Value>68</Value>
        <Label>工事店</Label>
        <Value>{displayValue(companyName)}</Value>
        <Label>前受残高</Label>
        <Value>{displayValue(monthlySalary)}</Value>
        <Label>前受金支払残高</Label>
        <Value>{displayValue(annualSalary)}</Value>
        <Label>今計精算金額</Label>
        <Value>4,000</Value>
        <Label>前受残額</Label>
        <Value>{displayValue(specialAddition)}</Value>
        <Label>今計指定収入額</Label>
        <Value>0</Value>
        <Label>還付金額</Label>
        <Value>500</Value>
        <Label>今計特定収入額</Label>
        <Value>0</Value>
        <Label>前受残額</Label>
        <Value>0</Value>
      </InfoGrid>
      <Table>
        <TableHeader>
          <TableRow>
            <HeaderCell>精算科目</HeaderCell>
            <HeaderCell>精算細節</HeaderCell>
            <HeaderCell>税</HeaderCell>
            <HeaderCell>精算金額</HeaderCell>
            <HeaderCell>内消費税額</HeaderCell>
            <HeaderCell>特定収入額</HeaderCell>
            <HeaderCell>未収対応予算</HeaderCell>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <Cell>給水工事収益</Cell>
            <Cell>検査手数料</Cell>
            <Cell>非課税</Cell>
            <Cell>4,000</Cell>
            <Cell>0</Cell>
            <Cell>0</Cell>
            <Cell></Cell>
          </TableRow>
        </TableBody>
      </Table>
    </Container>
  );
};

// サンプルデータ
const sampleData: ContractDetailProps = {
  companyName: "前受金振替の情報",
  contractDate: "平成29年09月06日",
  contractStartDate: "平成29年09月06日",
  contractEndDate: "平成29年08月06日",
  jobType: "工事店",
  compensation: 0,
  annualAllowance: 0,
  commutingAllowance: 0,
  paymentDate: "6日",
  workLocation: "-",
  period: 4,
  monthlySalary: 4000,
  annualSalary: 0,
  overtimePay: 0,
  specialAddition: 500,
};

// スタイリング
const Container = styled.div`
  padding: 16px;
`;

const Title = styled.h2`
  font-size: 18px;
  margin-bottom: 16px;
`;

const InfoGrid = styled.div`
  display: grid;
  grid-template-columns: 100px 1fr;
  gap: 8px;
  margin-bottom: 16px;
`;

const Label = styled.div`
  font-weight: bold;
`;

const Value = styled.div``;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const TableHeader = styled.thead``;

const TableBody = styled.tbody``;

const TableRow = styled.tr``;

const HeaderCell = styled.th`
  background-color: #f0f0f0;
  padding: 8px;
  text-align: left;
  border: 1px solid #ccc;
`;

const Cell = styled.td`
  padding: 8px;
  border: 1px solid #ccc;
`;

// 使用例
const Example: React.FC = () => {
  return (
    <div>
      <h1>契約詳細</h1>
      <ContractDetail {...sampleData} />
    </div>
  );
};

export default Example;
```

このコードは、画像の契約詳細情報を表示するReactコンポーネントです。以下のような特徴があります：

1. TypeScriptの型定義を使用し、プロパティの型を明確にしています。
2. コンポーネントは再利用可能で、プロパティを通じてデータをカスタマイズできます。
3. styled-componentsを使用してCSS-in-JS形式でスタイリングを行っています。
4. レスポンシブデザインを考慮し、グリッドレイアウトを使用しています。
5. コメントを適切に含めています。
6. 値が未入力の場合は"-"を表示するようにしています。
7. サンプルデータを使用して、コンポーネントの使用例を示しています。

このコンポーネントを使用することで、契約詳細情報を整形された形式で表示することができます。必要に応じてデータをプロパティとして渡すことで、様々な契約情報に対応できます。