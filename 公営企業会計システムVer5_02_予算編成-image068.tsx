import React from 'react';
import styled from 'styled-components';

// 区分プルダウンの選択肢タイプ
type DivisionOption = {
  label: string;
  value: number;
};

// 年度と金額のタイプ
type YearAmount = {
  year: number;
  amount: number;
};

// コンポーネントのプロパティタイプ
type Props = {
  averageAnnualIncome: number;
  deduction: number;
  bonusMonth: number;
  endOfTerm: string;
  divisionOptions: DivisionOption[];
  yearAmounts: YearAmount[];
};

// スタイル付きコンポーネント
const Container = styled.div`
  font-family: Arial, sans-serif;
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
`;

const Title = styled.h2`
  font-size: 18px;
  margin-bottom: 10px;
`;

const FormGroup = styled.div`
  margin-bottom: 15px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 5px;
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
`;

const TableHeader = styled.th`
  padding: 8px;
  background-color: #f2f2f2;
  border: 1px solid #ddd;
  text-align: left;
`;

const TableData = styled.td`
  padding: 8px;
  border: 1px solid #ddd;
`;

const Button = styled.button`
  padding: 8px 16px;
  margin-right: 10px;
  border: none;
  border-radius: 3px;
  background-color: #007bff;
  color: #fff;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

// コンポーネント
const TaxCalculator: React.FC<Props> = ({
  averageAnnualIncome,
  deduction,
  bonusMonth,
  endOfTerm,
  divisionOptions,
  yearAmounts,
}) => {
  return (
    <Container>
      <Title>源泉徴収税額</Title>
      <FormGroup>
        <Label>年平均30</Label>
        <Input type="number" value={averageAnnualIncome} readOnly />
      </FormGroup>
      <FormGroup>
        <Label>
          <Input type="checkbox" checked={deduction === 0} readOnly /> 
          日本国籍の8回以上開催業務
        </Label>
      </FormGroup>
      <FormGroup>
        <Label>
          <Input type="checkbox" checked={bonusMonth === 1000} readOnly />
          宿泊・輸送等の業務実施
        </Label>
      </FormGroup>
      <FormGroup>
        <Label>区分</Label>
        <Select value={1}>
          {divisionOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </Select>
      </FormGroup>
      <FormGroup>
        <Label>開始年度</Label>
        <Input type="number" value={endOfTerm.split('/')[0]} readOnly />
      </FormGroup>
      <FormGroup>
        <Label>終了年度</Label>
        <Input type="number" value={endOfTerm.split('/')[1]} readOnly />
      </FormGroup>
      <Table>
        <thead>
          <tr>
            <TableHeader>年度</TableHeader>
            <TableHeader>金額(千円)</TableHeader>
          </tr>
        </thead>
        <tbody>
          {yearAmounts.map((yearAmount) => (
            <tr key={yearAmount.year}>
              <TableData>{yearAmount.year}</TableData>
              <TableData>{yearAmount.amount.toLocaleString()}</TableData>
            </tr>
          ))}
        </tbody>
      </Table>
      <Button>OK</Button>
      <Button>クリア</Button>
      <Button>キャンセル</Button>
    </Container>
  );
};

// サンプルデータ
const sampleData: Props = {
  averageAnnualIncome: 1000,
  deduction: 0,
  bonusMonth: 1000,
  endOfTerm: '平成23/27',
  divisionOptions: [
    { label: '甲', value: 1 },
    { label: '乙', value: 2 },
  ],
  yearAmounts: [{ year: 24, amount: 1000 }],
};

// 使用例
const App: React.FC = () => {
  return <TaxCalculator {...sampleData} />;
};

export default App;