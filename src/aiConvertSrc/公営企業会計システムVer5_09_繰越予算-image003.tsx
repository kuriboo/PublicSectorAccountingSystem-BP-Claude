import React from 'react';
import styled from 'styled-components';

// 縦型集計表作成コンポーネントのPropsインターフェース
interface VerticalReportProps {
  date: string; // 作表年月日
  startDate?: string; // 予算科目の開始日付
  endDate?: string; // 予算科目の終了日付
  openingBalance?: number; // 前期繰越残高
  closingBalance?: number; // 次期繰越残高
}

// 縦型集計表作成コンポーネント
const VerticalReport: React.FC<VerticalReportProps> = ({
  date,
  startDate = '',
  endDate = '',
  openingBalance = 0,
  closingBalance = 0,
}) => {
  return (
    <Container>
      <Title>縦型集計表作成</Title>
      <DateRow>
        <span>作表年月日</span>
        <span>{date}</span>
      </DateRow>
      <Table>
        <TableRow>
          <TableHeader>予算科目</TableHeader>
          <TableData>
            <span>予算科目</span>
            <input type="text" defaultValue={startDate} />
            <span>〜</span>
            <span>予算科目</span>
            <input type="text" defaultValue={endDate} />
          </TableData>
        </TableRow>
        <TableRow>
          <TableHeader>所属別出力</TableHeader>
          <TableData>
            <label>
              <input type="radio" name="output" defaultChecked /> する
            </label>
            <label>
              <input type="radio" name="output" /> しない
            </label>
          </TableData>
        </TableRow>
        <TableRow>
          <TableHeader>前期</TableHeader>
          <TableData>
            <input type="text" defaultValue={openingBalance} />
          </TableData>
        </TableRow>
        <TableRow>
          <TableHeader>次期</TableHeader>
          <TableData>
            <input type="text" defaultValue={closingBalance} />
          </TableData>
        </TableRow>
      </Table>
      <ButtonRow>
        <Button>OK</Button>
        <Button>クリア</Button>
        <Button>終了</Button>
      </ButtonRow>
    </Container>
  );
};

// サンプル表示用コンポーネント
const SampleVerticalReport = () => {
  return (
    <VerticalReport
      date="平成29年09月06日"
      startDate="00000000"
      endDate="99999999"
      openingBalance={0}
      closingBalance={9999999}
    />
  );
};

// スタイリング用のコンポーネント
const Container = styled.div`
  font-family: sans-serif;
  padding: 20px;
`;

const Title = styled.h2`
  font-size: 18px;
  margin-bottom: 10px;
`;

const DateRow = styled.div`
  margin-bottom: 20px;
  > span {
    margin-right: 10px;
  }
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;
`;

const TableRow = styled.tr`
  &:not(:last-child) {
    border-bottom: 1px solid #ccc;
  }
`;

const TableHeader = styled.th`
  text-align: left;
  padding: 5px;
  white-space: nowrap;
`;

const TableData = styled.td`
  padding: 5px;
  > span {
    margin-right: 5px;
  }
  > input[type='text'] {
    width: 100px;
    margin-right: 5px;
  }
`;

const ButtonRow = styled.div`
  text-align: center;
`;

const Button = styled.button`
  padding: 5px 10px;
  margin: 0 5px;
`;

export default VerticalReport;