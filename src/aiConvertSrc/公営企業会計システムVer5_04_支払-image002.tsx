import React from 'react';
import styled from 'styled-components';

// 予定支出負担入力フォームのプロパティ型定義
type ExpenseFormProps = {
  onSubmit: (data: ExpenseData) => void;
};

// 支出データの型定義
type ExpenseData = {
  date: string;
  division: string;
  category: string;
  paymentMethod: string;
  expenseDate: string;
  note: string;
  taxIncluded: boolean;
  expenseDetails: ExpenseDetail[];
};

// 支出明細データの型定義
type ExpenseDetail = {
  summary: string;
  amount: number;
  tax: number;
};

// スタイル定義
const FormContainer = styled.div`
  background-color: #f0f0f0;
  padding: 20px;
  border-radius: 5px;
`;

const FormGroup = styled.div`
  margin-bottom: 20px;
`;

const Label = styled.label`
  display: block;
  font-weight: bold;
  margin-bottom: 5px;
`;

const Input = styled.input`
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Select = styled.select`
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const TableContainer = styled.div`
  overflow-x: auto;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;
`;

const TableHeader = styled.th`
  background-color: #f0f0f0;
  padding: 10px;
  text-align: left;
  white-space: nowrap;
`;

const TableCell = styled.td`
  padding: 10px;
  border-bottom: 1px solid #ccc;
  white-space: nowrap;
`;

const SubmitButton = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

// 予定支出負担入力フォームコンポーネント
const ExpenseForm: React.FC<ExpenseFormProps> = ({ onSubmit }) => {
  // フォーム送信処理
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // フォームデータの収集と検証
    const data: ExpenseData = {
      date: '',
      division: '',
      category: '',
      paymentMethod: '',
      expenseDate: '',
      note: '',
      taxIncluded: false,
      expenseDetails: [],
    };
    onSubmit(data);
  };

  return (
    <FormContainer>
      <form onSubmit={handleSubmit}>
        <FormGroup>
          <Label>予定処理日</Label>
          <Input type="text" defaultValue="令和5年10月5日" readOnly />
        </FormGroup>
        <FormGroup>
          <Label>決裁区分</Label>
          <Select>
            <option value="department">部長・審査課</option>
            <option value="division">総務・財政主</option>
          </Select>
        </FormGroup>
        <FormGroup>
          <Label>合議区分</Label>
          <Select>
            <option value="accounting">経務部・経理課</option>
            {/* 他の選択肢 */}
          </Select>
        </FormGroup>
        <FormGroup>
          <Label>契約方法</Label>
          <Select>
            <option value="contract">一般競争入札</option>
            {/* 他の選択肢 */}
          </Select>
        </FormGroup>
        <FormGroup>
          <Label>納期年月日</Label>
          <Input type="text" defaultValue="年 月 日" />
        </FormGroup>
        <FormGroup>
          <Label>摘要</Label>
          <Input type="text" defaultValue="特殊備品購入" />
        </FormGroup>

        <TableContainer>
          <Table>
            <thead>
              <tr>
                <TableHeader>年度</TableHeader>
                <TableHeader>予定額</TableHeader>
                <TableHeader>消費税額</TableHeader>
                <TableHeader>税</TableHeader>
              </tr>
            </thead>
            <tbody>
              <tr>
                <TableCell>令和5年</TableCell>
                <TableCell>10,000</TableCell>
                <TableCell>909</TableCell>
                <TableCell>課税</TableCell>
              </tr>
            </tbody>
          </Table>
        </TableContainer>

        <TableContainer>
          <Table>
            <thead>
              <tr>
                <TableHeader>明細</TableHeader>
                <TableHeader>明細</TableHeader>
                <TableHeader>税</TableHeader>
                <TableHeader>予定額</TableHeader>
                <TableHeader>消費税額</TableHeader>
              </tr>
            </thead>
            <tbody>
              <tr>
                <TableCell>特殊備品購入</TableCell>
                <TableCell>特殊備品</TableCell>
                <TableCell>課</TableCell>
                <TableCell>10,000</TableCell>
                <TableCell>909</TableCell>
              </tr>
            </tbody>
          </Table>
        </TableContainer>

        <SubmitButton type="submit">登録</SubmitButton>
      </form>
    </FormContainer>
  );
};


// サンプルデータ
const sampleData: ExpenseData = {
  date: '令和5年10月5日',
  division: 'department',
  category: 'accounting',
  paymentMethod: 'contract',
  expenseDate: '',
  note: '特殊備品購入',
  taxIncluded: true,
  expenseDetails: [
    {
      summary: '特殊備品購入',
      amount: 10000,
      tax: 909,
    },
  ],
};

// 使用例
const App: React.FC = () => {
  const handleSubmit = (data: ExpenseData) => {
    console.log('Submitted data:', data);
  };

  return (
    <div>
      <h1>予定支出負担入力フォーム</h1>
      <ExpenseForm onSubmit={handleSubmit} />
    </div>
  );
};

export default App;