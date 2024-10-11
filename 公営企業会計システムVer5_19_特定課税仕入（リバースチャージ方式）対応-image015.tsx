import React from 'react';
import styled from '@emotion/styled';

type DeductionConditionProps = {
  deductionCode: string;
  deductionYear: number;
  startDate: string;
  endDate: string;
  deductionType: 'percentage' | 'fixedAmount';
  calculationMethod: 'everyMonth' | 'lastMonth';
  amount: number;
  memo: string;
};

type DeductionHistoryProps = {
  date: string;
  deductionAmount: number;
  memo: string;
}[];

type DeductionFormProps = {
  deductionCondition: DeductionConditionProps;
  deductionHistory: DeductionHistoryProps;
};

const Container = styled.div`
  font-family: Arial, sans-serif;
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;

  @media (max-width: 600px) {
    padding: 10px;
  }
`;

const FormGroup = styled.div`
  margin-bottom: 20px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
`;

const Input = styled.input`
  width: 100%;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 3px;
`;

const Select = styled.select`
  width: 100%;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 3px;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;

  th,
  td {
    border: 1px solid #ccc;
    padding: 8px;
    text-align: left;
  }

  th {
    background-color: #f0f0f0;
    font-weight: bold;
  }
`;

const DeductionForm: React.FC<DeductionFormProps> = ({ deductionCondition, deductionHistory }) => {
  // 控除条件のデフォルト値
  const defaultDeductionCondition: DeductionConditionProps = {
    deductionCode: '',
    deductionYear: new Date().getFullYear(),
    startDate: '',
    endDate: '',
    deductionType: 'percentage',
    calculationMethod: 'everyMonth',
    amount: 0,
    memo: '',
  };

  // 控除条件が未指定の場合はデフォルト値を使用
  const condition = deductionCondition || defaultDeductionCondition;

  return (
    <Container>
      <h2>控除条件設定</h2>
      <FormGroup>
        <Label>控除条件コード</Label>
        <Input type="text" value={condition.deductionCode} readOnly />
      </FormGroup>
      <FormGroup>
        <Label>年度</Label>
        <Input type="number" value={condition.deductionYear} readOnly />
      </FormGroup>
      <FormGroup>
        <Label>振替期間</Label>
        <Input type="text" value={`${condition.startDate} 〜 ${condition.endDate}`} readOnly />
      </FormGroup>
      <FormGroup>
        <Label>控除種別</Label>
        <Select value={condition.deductionType} disabled>
          <option value="percentage">予算科目</option>
          <option value="fixedAmount">仕訳科目</option>
        </Select>
      </FormGroup>
      <FormGroup>
        <Label>摘要</Label>
        <Input type="text" value={condition.memo} readOnly />
      </FormGroup>
      <FormGroup>
        <Label>控除金額</Label>
        <Input type="text" value={condition.amount.toLocaleString()} readOnly />
      </FormGroup>

      <h2>振替履歴</h2>
      <Table>
        <thead>
          <tr>
            <th>振替日</th>
            <th>振替金額</th>
            <th>摘要</th>
          </tr>
        </thead>
        <tbody>
          {deductionHistory.map((history, index) => (
            <tr key={index}>
              <td>{history.date}</td>
              <td>{history.deductionAmount.toLocaleString()}</td>
              <td>{history.memo}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

// サンプルデータ
const sampleDeductionCondition: DeductionConditionProps = {
  deductionCode: 'D001',
  deductionYear: 2023,
  startDate: '2023-01-01',
  endDate: '2023-12-31',
  deductionType: 'percentage',
  calculationMethod: 'everyMonth',
  amount: 10000,
  memo: '家賃補助',
};

const sampleDeductionHistory: DeductionHistoryProps = [
  { date: '2023-01-25', deductionAmount: 10000, memo: '1月分家賃補助' },
  { date: '2023-02-25', deductionAmount: 10000, memo: '2月分家賃補助' },
  { date: '2023-03-25', deductionAmount: 10000, memo: '3月分家賃補助' },
];

// コンポーネントの使用例
const SampleUsage: React.FC = () => {
  return <DeductionForm deductionCondition={sampleDeductionCondition} deductionHistory={sampleDeductionHistory} />;
};

export default DeductionForm;