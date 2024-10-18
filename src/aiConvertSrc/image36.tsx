import React from 'react';
import styled from 'styled-components';

// 振替条件設定のプロパティの型定義
interface TransferConditionProps {
  transferNumber: string;
  startDate: string;
  endDate: string;
  dayOfWeek: string;
  transferDate: string;
  minAmount: number;
  maxAmount: number;
  memo: string;
}

// 振替条件設定のコンポーネント
const TransferCondition: React.FC<TransferConditionProps> = ({
  transferNumber,
  startDate,
  endDate,
  dayOfWeek,
  transferDate,
  minAmount,
  maxAmount,
  memo,
}) => {
  return (
    <Container>
      <Title>振替条件設定</Title>
      <FormGroup>
        <Label>振替番号</Label>
        <Input type="text" value={transferNumber} readOnly />
      </FormGroup>
      <FormGroup>
        <Label>振替期間</Label>
        <DateInputs>
          <DateInput type="text" value={startDate} readOnly />
          <DateDelimiter>～</DateDelimiter>
          <DateInput type="text" value={endDate} readOnly />
        </DateInputs>
      </FormGroup>
      <FormGroup>
        <Label>振替条件</Label>
        <RadioGroup>
          <RadioButton type="radio" checked={dayOfWeek === '予算科目'} readOnly />
          <RadioLabel>予算科目</RadioLabel>
          <RadioButton type="radio" checked={dayOfWeek === '仕訳科目'} readOnly />
          <RadioLabel>仕訳科目</RadioLabel>
        </RadioGroup>
        <DateInput type="text" value={transferDate} readOnly />
      </FormGroup>
      <FormGroup>
        <Label>振替金額</Label>
        <AmountInput type="text" value={`${minAmount} ～ ${maxAmount}`} readOnly />
      </FormGroup>
      <FormGroup>
        <Label>摘要</Label>
        <Input type="text" value={memo} readOnly />
      </FormGroup>
      <TableWrapper>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHeaderCell>振替番号</TableHeaderCell>
              <TableHeaderCell>振替金額</TableHeaderCell>
              <TableHeaderCell>摘要</TableHeaderCell>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>43,2016-03-27</TableCell>
              <TableCell>60,000</TableCell>
              <TableCell>電子書籍 /消費税分</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableWrapper>
      <ButtonGroup>
        <Button>OK</Button>
        <Button>クリア</Button>
        <Button>キャンセル</Button>
      </ButtonGroup>
    </Container>
  );
};

// サンプルデータを使用したコンポーネントの表示例
const SampleTransferCondition: React.FC = () => {
  const sampleData: TransferConditionProps = {
    transferNumber: 'AB027',
    startDate: '平成28年03月27日',
    endDate: '平成28年03月27日',
    dayOfWeek: '予算科目',
    transferDate: '30',
    minAmount: 0,
    maxAmount: 999999999999,
    memo: '',
  };

  return <TransferCondition {...sampleData} />;
};

// スタイリング用のコンポーネント
const Container = styled.div`
  padding: 16px;
  background-color: #f0f0f0;
  @media (max-width: 600px) {
    padding: 8px;
  }
`;

const Title = styled.h2`
  margin-bottom: 16px;
  font-size: 20px;
  @media (max-width: 600px) {
    font-size: 18px;
  }
`;

const FormGroup = styled.div`
  margin-bottom: 16px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 8px;
  font-weight: bold;
`;

const Input = styled.input`
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const DateInputs = styled.div`
  display: flex;
  align-items: center;
`;

const DateInput = styled(Input)`
  flex: 1;
`;

const DateDelimiter = styled.span`
  margin: 0 8px;
`;

const RadioGroup = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
`;

const RadioButton = styled.input`
  margin-right: 8px;
`;

const RadioLabel = styled.label`
  margin-right: 16px;
`;

const AmountInput = styled(Input)`
  width: auto;
`;

const TableWrapper = styled.div`
  overflow-x: auto;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 16px;
`;

const TableHeader = styled.thead`
  background-color: #f0f0f0;
`;

const TableHeaderCell = styled.th`
  padding: 8px;
  text-align: left;
  border: 1px solid #ccc;
`;

const TableBody = styled.tbody``;

const TableRow = styled.tr``;

const TableCell = styled.td`
  padding: 8px;
  border: 1px solid #ccc;
`;

const ButtonGroup = styled.div`
  text-align: right;
`;

const Button = styled.button`
  margin-left: 8px;
  padding: 8px 16px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background-color: #0056b3;
  }
`;

export default SampleTransferCondition;