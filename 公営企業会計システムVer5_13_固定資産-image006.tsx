import React from 'react';
import styled from '@emotion/styled';

type FinancialSourceItemType = {
  id: number;
  name: string;
  amount: number;
  schedule: number;
};

type FinancialSourceType = {
  title: string;
  sources: FinancialSourceItemType[];
};

type FinancialSourceFormProps = {
  amount: number;
  debt: number;
  sources: FinancialSourceType[];
};

const FinancialSourceForm: React.FC<FinancialSourceFormProps> = ({ amount, debt, sources }) => {
  // 合計額を計算
  const totalAmount = sources.reduce((sum, source) => sum + source.sources.reduce((itemSum, item) => itemSum + item.amount, 0), 0);

  return (
    <Container>
      <Header>
        <Label>取得価額</Label>
        <Value>{amount.toLocaleString()}</Value>
        <Label>借入除外額</Label>
        <Value>{debt.toLocaleString()}</Value>
      </Header>
      <Table>
        <TableHeader>
          <Row>
            <Cell>財源コード</Cell>
            <Cell>財源名称</Cell>
            <Cell>財源金額</Cell>
            <Cell>償却区分</Cell>
          </Row>
        </TableHeader>
        <TableBody>
          {sources.map((source, sourceIndex) => (
            <React.Fragment key={sourceIndex}>
              <Row>
                <Cell colSpan={4}>{source.title}</Cell>
              </Row>
              {source.sources.map((item, itemIndex) => (
                <Row key={`${sourceIndex}-${itemIndex}`}>
                  <Cell>{`${sourceIndex + 1}${itemIndex + 1}`}</Cell>
                  <Cell>{item.name}</Cell>
                  <Cell>{item.amount.toLocaleString()}</Cell>
                  <Cell>{item.schedule}</Cell>
                </Row>
              ))}
            </React.Fragment>
          ))}
        </TableBody>
      </Table>
      <Footer>
        <Label>財源金額計</Label>
        <TotalValue>{totalAmount.toLocaleString()}</TotalValue>
      </Footer>
      <ProgressBar totalAmount={totalAmount} amount={amount} />
    </Container>
  );
};

// 進捗バーコンポーネント
type ProgressBarProps = {
  totalAmount: number; 
  amount: number;
};

const ProgressBar: React.FC<ProgressBarProps> = ({ totalAmount, amount }) => {
  const percentage = Math.min(totalAmount / amount * 100, 100);

  return (
    <ProgressBarContainer>
      <ProgressBarLabel>出資区分コード</ProgressBarLabel>
      <ProgressBarLabel>出資名称</ProgressBarLabel>
      <ProgressBarLabel>比率</ProgressBarLabel>
      <ProgressBarLabel>財源金額</ProgressBarLabel>
      <ProgressBarBackground>
        <ProgressBarFill percentage={percentage} />
      </ProgressBarBackground>
      <ProgressBarValue>{`${percentage.toFixed(1)}%`}</ProgressBarValue>
      <ProgressBarValue>{totalAmount.toLocaleString()}</ProgressBarValue>
    </ProgressBarContainer>
  );
};

// サンプルデータ
const sampleData: FinancialSourceFormProps = {
  amount: 150000,
  debt: 0,
  sources: [
    {
      title: "財源",
      sources: [
        { id: 1, name: "自己財源", amount: 150000, schedule: 1 },
      ],
    },
  ],
};

// サンプル表示用コンポーネント 
const SampleFinancialSourceForm = () => {
  return <FinancialSourceForm {...sampleData} />;
};

// スタイリング
const Container = styled.div`
  font-size: 14px;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const Label = styled.div`
  margin-right: 10px;
  color: #888;  
`;

const Value = styled.div`
  margin-right: 20px;
  font-weight: bold;
`;

const TotalValue = styled(Value)`
  font-size: 18px;
  color: #1e88e5;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;
`;

const TableHeader = styled.thead`
  background-color: #f5f5f5;
  font-weight: bold;
`;

const TableBody = styled.tbody`
  > tr:nth-of-type(odd) {
    background-color: #fafafa;
  }
`;

const Row = styled.tr``;

const Cell = styled.td`
  padding: 6px 10px;
  border: 1px solid #ddd;
  text-align: right;
  
  &:first-of-type {
    text-align: center;
  }
`;

const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-bottom: 20px;
`;

const ProgressBarContainer = styled.div`
  display: flex;
  align-items: center;
`;

const ProgressBarLabel = styled.div`
  margin-right: 10px;
  font-size: 12px;
  color: #888;

  &:last-of-type {
    margin-left: auto;
    margin-right: 0;
  }
`;

const ProgressBarBackground = styled.div`
  position: relative;
  flex-grow: 1;
  height: 20px;
  background-color: #f5f5f5;
  border-radius: 10px;
  overflow: hidden;
`;

const ProgressBarFill = styled.div<{ percentage: number }>`
  width: ${({ percentage }) => percentage}%;
  height: 100%;
  background-color: #1e88e5;
`;

const ProgressBarValue = styled.div`
  margin-left: 15px;
  font-weight: bold;
`;

export default FinancialSourceForm;