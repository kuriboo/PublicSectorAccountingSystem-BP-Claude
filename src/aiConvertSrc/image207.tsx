import React from 'react';
import styled from 'styled-components';

// 予定表示テーブルのプロパティ型定義
type ScheduleTableProps = {
  year: number;
  branch: string;
  dayOfWeek: string;
  startDate: string;
  period: string;
  scheduleRows: ScheduleRow[];
  totalAmount: number;
  consumptionTax: number;
  grossAmount: number;
};

// 予定表示テーブルの行のプロパティ型定義
type ScheduleRow = {
  no: number;
  scheduledDate: string;
  paymentDate: string;
  tax: number;
  amount: number;
  consumptionTax: number;
};

// 予定表示テーブルコンポーネント
const ScheduleTable: React.FC<ScheduleTableProps> = ({
  year,
  branch,
  dayOfWeek,
  startDate,
  period,
  scheduleRows,
  totalAmount,
  consumptionTax,
  grossAmount,
}) => {
  // 値が未定義の場合は空文字を返す
  const formatValue = (value: string | number | undefined) => {
    return value ?? '';
  };

  return (
    <TableContainer>
      <TableHeader>
        <HeaderRow>
          <HeaderCell>令和{formatValue(year)}年度</HeaderCell>
          <HeaderCell>支払番号</HeaderCell>
          <HeaderCell colSpan={2}>変更回数</HeaderCell>
        </HeaderRow>
        <HeaderRow>
          <HeaderCell>支払種別</HeaderCell>
          <HeaderCell>一般</HeaderCell>
          <HeaderCell colSpan={2}>
            {formatValue(branch)}
          </HeaderCell>
        </HeaderRow>
        <HeaderRow>
          <HeaderCell>予定処理日</HeaderCell>
          <HeaderCell>令和{formatValue(year)}年04月{formatValue(dayOfWeek)}日</HeaderCell>
        </HeaderRow>
        <HeaderRow>
          <HeaderCell>起案者局</HeaderCell>
          <HeaderCell>高橋 六郎</HeaderCell>
        </HeaderRow>
      </TableHeader>
      <TableSubHeader>
        <SubHeaderRow>
          <SubHeaderCell>摘要</SubHeaderCell>
          <SubHeaderCell>一般参照用備考用語水路 10枚</SubHeaderCell>
        </SubHeaderRow>
        <SubHeaderRow>
          <SubHeaderCell>着手年月日</SubHeaderCell>
          <SubHeaderCell>{formatValue(startDate)}</SubHeaderCell>
        </SubHeaderRow>
        <SubHeaderRow>
          <SubHeaderCell>納期年月日</SubHeaderCell>
          <SubHeaderCell></SubHeaderCell>
        </SubHeaderRow>
        <SubHeaderRow>
          <SubHeaderCell>期間</SubHeaderCell>
          <SubHeaderCell>{formatValue(period)}</SubHeaderCell>
        </SubHeaderRow>
        <SubHeaderRow>
          <SubHeaderCell>契約方法</SubHeaderCell>
          <SubHeaderCell></SubHeaderCell>
        </SubHeaderRow>
        <SubHeaderRow>
          <SubHeaderCell>前払区分</SubHeaderCell>
          <SubHeaderCell>1</SubHeaderCell>
        </SubHeaderRow>
        <SubHeaderRow>
          <SubHeaderCell>支払回数</SubHeaderCell>
          <SubHeaderCell>1</SubHeaderCell>
        </SubHeaderRow>
      </TableSubHeader>
      <AmountTable>
        <AmountRow>
          <AmountCell>合計予定額</AmountCell>
          <AmountCell>{formatValue(totalAmount)}</AmountCell>
        </AmountRow>
        <AmountRow>
          <AmountCell>合計本体額</AmountCell>
          <AmountCell>{formatValue(consumptionTax)}</AmountCell>
        </AmountRow>
        <AmountRow>
          <AmountCell>合計消費税額</AmountCell>
          <AmountCell>{formatValue(grossAmount)}</AmountCell>
        </AmountRow>
      </AmountTable>
      <ScheduleTableHeader>
        <TableRow>
          <TableHeaderCell>予算節</TableHeaderCell>
          <TableHeaderCell>予算細目</TableHeaderCell>
          <TableHeaderCell>予算明細</TableHeaderCell>
          <TableHeaderCell>税</TableHeaderCell>
          <TableHeaderCell>税率</TableHeaderCell>
          <TableHeaderCell>予定額</TableHeaderCell>
          <TableHeaderCell>消費税額</TableHeaderCell>
        </TableRow>
      </ScheduleTableHeader>
      <ScheduleTableBody>
        {scheduleRows.map((row, index) => (
          <TableRow key={index}>
            <TableCell>{formatValue(row.scheduledDate)}</TableCell>
            <TableCell>{formatValue(row.paymentDate)}</TableCell>
            <TableCell>{formatValue(row.paymentDate)}</TableCell>
            <TableCell>{formatValue(row.tax)}</TableCell>
            <TableCell>10%</TableCell>
            <TableCell>{formatValue(row.amount)}</TableCell>
            <TableCell>{formatValue(row.consumptionTax)}</TableCell>
          </TableRow>
        ))}
      </ScheduleTableBody>
    </TableContainer>
  );
};

// スタイリング
const TableContainer = styled.div`
  width: 100%;
  overflow-x: auto;
`;

const TableHeader = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  background-color: #f0f0f0;
  padding: 8px;
`;

const HeaderRow = styled.div`
  display: contents;
`;

const HeaderCell = styled.div`
  padding: 4px;
  text-align: center;
  border: 1px solid #ccc;
`;

const TableSubHeader = styled.div`
  display: grid;
  grid-template-columns: 120px 1fr;
  background-color: #f5f5f5;
  padding: 8px;
`;

const SubHeaderRow = styled.div`
  display: contents;
`;

const SubHeaderCell = styled.div`
  padding: 4px;
  border: 1px solid #ccc;
`;

const AmountTable = styled.div`
  display: grid;
  grid-template-columns: 120px 1fr;
  background-color: #f9f9f9;
  padding: 8px;
`;

const AmountRow = styled.div`
  display: contents;
`;

const AmountCell = styled.div`
  padding: 4px;
  border: 1px solid #ccc;
`;

const ScheduleTableHeader = styled.div`
  background-color: #e0e0e0;
`;

const ScheduleTableBody = styled.div`
  background-color: #fff;
`;

const TableRow = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
`;

const TableHeaderCell = styled.div`
  padding: 8px;
  text-align: center;
  border: 1px solid #ccc;
`;

const TableCell = styled.div`
  padding: 8px;
  border: 1px solid #ccc;
`;

// サンプルデータを用いた使用例
const sampleData: ScheduleTableProps = {
  year: 5,
  branch: "一般",
  dayOfWeek: "01",
  startDate: "令和6年04月01日",
  period: "高橋 六郎",
  scheduleRows: [
    {
      no: 1,
      scheduledDate: "節・備/消耗品費",
      paymentDate: "節・/消耗品費",
      tax: 10,
      amount: 2200,
      consumptionTax: 200,
    },
  ],
  totalAmount: 2200,
  consumptionTax: 2000,
  grossAmount: 200,
};

const App: React.FC = () => {
  return (
    <div>
      <h1>予定表示</h1>
      <ScheduleTable {...sampleData} />
    </div>
  );
};

export default App;