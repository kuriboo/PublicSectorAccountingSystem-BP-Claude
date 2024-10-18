import React from 'react';
import styled from 'styled-components';

// 特定収入充当表収入項目設定のプロパティ型定義
type IncomeSettingProps = {
  startDate: string;
  endDate: string;
  segment: string;
  projectType: string;
  includePreYearBalance: boolean;
  data: {
    segment: string;
    project: string;
    projectCode: string;
    targetAmount: number;
    unallocatedAmount: number;
    allocatedAmount: number;
  }[];
};

// 特定収入充当表収入項目設定コンポーネント
const IncomeSetting: React.FC<IncomeSettingProps> = ({
  startDate,
  endDate,
  segment,
  projectType,
  includePreYearBalance,
  data,
}) => {
  return (
    <Container>
      <Header>
        <Title>特定収入充当表収入項目設定</Title>
        <DateRange>
          管理者 経理担当 ぎょうせい 太郎<br />
          令和02年09月23日
        </DateRange>
      </Header>
      
      <SearchCondition>
        <Label>検索期間</Label>
        <span>{startDate} 〜 {endDate}</span>

        <Label>検索</Label>
        <span>
          予算区分
          <select>
            <option>{segment}</option>
          </select>
        </span>
        <CheckboxWrapper>
          <Checkbox type="checkbox" checked={includePreYearBalance} readOnly />
          <label>繰越予算</label>
          <Checkbox type="checkbox" checked />
          <label>充当対特定収入のみ対象</label>
        </CheckboxWrapper>
        <Button>表示</Button>
      </SearchCondition>

      <Table>
        <thead>
          <TableRow>
            <TableHeader>予算区分</TableHeader>
            <TableHeader>セグメント</TableHeader>
            <TableHeader>予算科目</TableHeader>
            <TableHeader>科目名</TableHeader>
            <TableHeader>不特定収入入額<br />(特定収入額含む)</TableHeader>
            <TableHeader>充当実施総額</TableHeader>
          </TableRow>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <TableRow key={index}>
              <TableCell>{item.segment}</TableCell>
              <TableCell>{item.project}</TableCell>
              <TableCell>{item.projectCode}</TableCell>
              <TableCell>国庫補助金</TableCell>
              <TableCell>{item.targetAmount.toLocaleString()}</TableCell>
              <TableCell>{item.allocatedAmount.toLocaleString()}</TableCell>
            </TableRow>
          ))}
        </tbody>
      </Table>

      <ButtonGroup>
        <Button>OK</Button>
        <Button>クリア</Button>
        <Button>終了</Button>
      </ButtonGroup>
    </Container>
  );
};

// サンプルデータ
const sampleData = [
  {
    segment: '3条収入',
    project: '本部',
    projectCode: '001002001101002',
    targetAmount: 20000000,
    unallocatedAmount: 0,
    allocatedAmount: 0,
  },
];

// 表示用コンポーネント
const App: React.FC = () => {
  return (
    <IncomeSetting
      startDate="令和02年04月01日"
      endDate="令和03年03月31日"
      segment="3条"
      projectType="その他"
      includePreYearBalance
      data={sampleData}
    />
  );
};

// スタイリング
const Container = styled.div`
  padding: 16px;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`;

const Title = styled.h2`
  margin: 0;
`;

const DateRange = styled.div`
  text-align: right;
  white-space: pre-wrap;
`;

const SearchCondition = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 16px;
`;

const Label = styled.label`
  margin-right: 8px;
`;

const CheckboxWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

const Checkbox = styled.input`
  margin: 0;
`;

const Button = styled.button`
  padding: 4px 8px;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 16px;
`;

const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f2f2f2;
  }
`;

const TableHeader = styled.th`
  padding: 8px;
  text-align: left;
  border-bottom: 1px solid #ddd;
  white-space: nowrap;
`;

const TableCell = styled.td`
  padding: 8px;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 8px;
`;

export default App;