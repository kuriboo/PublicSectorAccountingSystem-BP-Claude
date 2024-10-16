import React from 'react';
import styled from 'styled-components';

// 事業別予算査定一覧表（補正）コンポーネントの型定義
type BudgetEstimateProps = {
  fiscalYear: number; // 年度
  supplementaryBudgetNumber: number; // 補正回数
  printSchool: string; // 印字区分
  accountingCategory: 'general' | 'special'; // 会計区分
  totalAmount: string; // 概要種別
  fromDate: string; // 所属別期間（開始日）
  toDate: string; // 所属別期間（終了日）
  onChangeSchool: (value: string) => void; // 印字区分変更時のイベントハンドラ
  onChangeAccountingCategory: (value: 'general' | 'special') => void; // 会計区分変更時のイベントハンドラ
  onChangeTotalAmount: (value: string) => void; // 概要種別変更時のイベントハンドラ
  onChangeFromDate: (value: string) => void; // 所属別期間（開始日）変更時のイベントハンドラ
  onChangeToDate: (value: string) => void; // 所属別期間（終了日）変更時のイベントハンドラ
};

// スタイル定義
const Container = styled.div`
  padding: 20px;
  background-color: #f0f0f0;
`;

const Title = styled.div`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 20px;
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const Label = styled.div`
  width: 150px;
`;

const Select = styled.select`
  padding: 5px;
`;

const Input = styled.input`
  padding: 5px;
  width: 100px;
`;

/**
 * 事業別予算査定一覧表（補正）コンポーネント
 */
const BudgetEstimate: React.FC<BudgetEstimateProps> = ({
  fiscalYear,
  supplementaryBudgetNumber,
  printSchool,
  accountingCategory,
  totalAmount,
  fromDate,
  toDate,
  onChangeSchool,
  onChangeAccountingCategory,
  onChangeTotalAmount,
  onChangeFromDate,
  onChangeToDate,
}) => {
  return (
    <Container>
      <Title>事業別予算査定一覧表（補正）</Title>
      <Row>
        <Label>年度</Label>
        <div>{fiscalYear}</div>
      </Row>
      <Row>
        <Label>補正回数</Label>
        <div>{supplementaryBudgetNumber}</div>
      </Row>
      <Row>
        <Label>印字区分</Label>
        <Select value={printSchool} onChange={(e) => onChangeSchool(e.target.value)}>
          <option value="">見積要求額</option>
          <option value="school">査定額</option>
        </Select>
      </Row>
      <Row>
        <Label>会計区分</Label>
        <Select
          value={accountingCategory}
          onChange={(e) => onChangeAccountingCategory(e.target.value as 'general' | 'special')}
        >
          <option value="general">一般</option>
          <option value="special">特別</option>
        </Select>
      </Row>
      <Row>
        <Label>概要種別</Label>
        <Select value={totalAmount} onChange={(e) => onChangeTotalAmount(e.target.value)}>
          <option value="subtotal">小計</option>
          <option value="total">合計</option>
        </Select>
      </Row>
      <Row>
        <Label>所属別期間</Label>
        <Input type="text" value={fromDate} onChange={(e) => onChangeFromDate(e.target.value)} /> ～{' '}
        <Input type="text" value={toDate} onChange={(e) => onChangeToDate(e.target.value)} />
      </Row>
    </Container>
  );
};

export default BudgetEstimate;

// サンプルデータ
const sampleData = {
  fiscalYear: 29, // 年度
  supplementaryBudgetNumber: 6, // 補正回数
  printSchool: '', // 印字区分
  accountingCategory: 'general', // 会計区分
  totalAmount: 'total', // 概要種別
  fromDate: '0000000', // 所属別期間（開始日） 
  toDate: '9999999', // 所属別期間（終了日）
};

// 使用例
export const BudgetEstimateSample: React.FC = () => {
  const [printSchool, setPrintSchool] = React.useState(sampleData.printSchool);
  const [accountingCategory, setAccountingCategory] = React.useState(sampleData.accountingCategory);
  const [totalAmount, setTotalAmount] = React.useState(sampleData.totalAmount);
  const [fromDate, setFromDate] = React.useState(sampleData.fromDate);
  const [toDate, setToDate] = React.useState(sampleData.toDate);

  return (
    <BudgetEstimate
      fiscalYear={sampleData.fiscalYear}
      supplementaryBudgetNumber={sampleData.supplementaryBudgetNumber}
      printSchool={printSchool}
      accountingCategory={accountingCategory}
      totalAmount={totalAmount}
      fromDate={fromDate}
      toDate={toDate}
      onChangeSchool={setPrintSchool}
      onChangeAccountingCategory={setAccountingCategory}
      onChangeTotalAmount={setTotalAmount}
      onChangeFromDate={setFromDate}
      onChangeToDate={setToDate}
    />
  );
};