import React from 'react';
import styled from 'styled-components';

// 支出負担行為伺書のプロパティ型定義
type ExpenseRequestFormProps = {
  fiscalYear: number; // 年度
  requestNo: string; // 整理番号
  deptName: string; // 所属
  staffName: string; // 氏名
  expenseItems: string[]; // 経費課目
  amounts: number[]; // 金額
  totalAmount: number; // 合計金額
  purpose: string; // 件名
  accountTitle: string; // 勘定科目
  notes: string; // 備考
};

// 支出負担行為伺書コンポーネント
const ExpenseRequestForm: React.FC<ExpenseRequestFormProps> = ({
  fiscalYear,
  requestNo,
  deptName,
  staffName,
  expenseItems,
  amounts,
  totalAmount,
  purpose,
  accountTitle,
  notes,
}) => {
  // 例外処理: 必須プロパティのチェック
  if (!fiscalYear || !requestNo || !deptName || !staffName || !purpose || !accountTitle) {
    console.error('Missing required props');
    return null;
  }

  return (
    <FormWrapper>
      <FormTitle>支出負担行為伺書（物品）</FormTitle>
      <FormHeader>
        <div>
          <span>平成{fiscalYear}年度</span>
          <span>行政市水道事業会計</span>
        </div>
        <div>
          <span>整理No. {requestNo}</span>
        </div>
      </FormHeader>
      <FormBody>
        <FormRow>
          <RowTitle>所属</RowTitle>
          <RowValue>{deptName}</RowValue>
          <RowTitle>氏名</RowTitle>
          <RowValue>{staffName}</RowValue>
        </FormRow>
        <TableWrapper>
          <TableHeader>
            <TableHeaderCell>経費課目</TableHeaderCell>
            <TableHeaderCell>金額</TableHeaderCell>
          </TableHeader>
          <TableBody>
            {expenseItems.map((item, index) => (
              <TableRow key={index}>
                <TableCell>{item || '※'}</TableCell>
                <TableCell>{amounts[index] ? `¥${amounts[index].toLocaleString()}` : '※'}</TableCell>
              </TableRow>
            ))}
            <TableRow>
              <TableCell>合計</TableCell>
              <TableCell>¥{totalAmount ? totalAmount.toLocaleString() : 0}</TableCell>
            </TableRow>
          </TableBody>
        </TableWrapper>
        <FormRow>
          <RowTitle>件名</RowTitle>
          <RowValue>{purpose}</RowValue>
        </FormRow>
        <FormRow>
          <RowTitle>勘定科目</RowTitle>
          <RowValue>{accountTitle}</RowValue>  
        </FormRow>
        <FormRow>
          <RowTitle>備考</RowTitle>
          <RowValue>{notes}</RowValue>
        </FormRow>
      </FormBody>
    </FormWrapper>
  );
};

// サンプルデータ
const sampleData: ExpenseRequestFormProps = {
  fiscalYear: 29,
  requestNo: '000177-00',
  deptName: '総務課',
  staffName: '上水 一郎',
  expenseItems: ['上水', '上水', '上水', '上水', '上水', '上水'],
  amounts: [0, 0, 0, 0, 0, 0],
  totalAmount: 0,
  purpose: '上水道事業経費',
  accountTitle: '経理係長',
  notes: '',
};

// サンプル表示用コンポーネント 
const App: React.FC = () => {
  return (
    <div>
      <h1>支出負担行為伺書サンプル</h1>
      <ExpenseRequestForm {...sampleData} />
    </div>
  );
};

export default App;

// スタイリング
const FormWrapper = styled.div`
  font-family: "ＭＳ 明朝", serif;
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  box-sizing: border-box;

  @media (max-width: 767px) {
    padding: 10px;
  }
`;

const FormTitle = styled.h2`
  text-align: center;
  font-size: 24px;
  margin-bottom: 20px;

  @media (max-width: 767px) {
    font-size: 20px;
  }  
`;

const FormHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;

  @media (max-width: 767px) {
    flex-direction: column;
  }
`;

const FormBody = styled.div`
  display: flex;
  flex-direction: column;
`;

const FormRow = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;

  @media (max-width: 767px) {
    flex-wrap: wrap;
  }
`;

const RowTitle = styled.div`
  font-weight: bold;
  width: 100px;
  margin-right: 10px;

  @media (max-width: 767px) {
    width: 100%;
    margin-right: 0;
    margin-bottom: 5px;
  }
`;

const RowValue = styled.div`
  flex: 1;
`;

const TableWrapper = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;
`;

const TableHeader = styled.thead`
  background-color: #f0f0f0;
`;

const TableHeaderCell = styled.th`
  padding: 5px;
  text-align: center;
  border: 1px solid #ccc;
`;

const TableBody = styled.tbody``;

const TableRow = styled.tr``;

const TableCell = styled.td`
  padding: 5px;
  text-align: center;
  border: 1px solid #ccc;
`;