import React from 'react';
import styled from '@emotion/styled';

interface CashCollectionFormProps {
  onSubmit: (data: { accountType: string; method: string; collectionMethod: string; date: string; }) => void;
}

const CashCollectionForm: React.FC<CashCollectionFormProps> = ({ onSubmit }) => {
  const [accountType, setAccountType] = React.useState('');
  const [method, setMethod] = React.useState('');
  const [collectionMethod, setCollectionMethod] = React.useState('');
  const [date, setDate] = React.useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ accountType, method, collectionMethod, date });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <Label>集計年度</Label>
        <div>
          <Input type="radio" id="thisYear" name="accountType" value="thisYear" checked={accountType === 'thisYear'} onChange={(e) => setAccountType(e.target.value)} />
          <label htmlFor="thisYear">今年度</label>
          <Input type="radio" id="lastYear" name="accountType" value="lastYear" checked={accountType === 'lastYear'} onChange={(e) => setAccountType(e.target.value)} />
          <label htmlFor="lastYear">昨年度</label>
        </div>
      </FormGroup>
      
      <FormGroup>
        <Label>計算方式</Label>
        <div>
          <Input type="radio" id="accrualBasis" name="method" value="accrualBasis" checked={method === 'accrualBasis'} onChange={(e) => setMethod(e.target.value)} />
          <label htmlFor="accrualBasis">発生主義</label>
          <Input type="radio" id="cashBasis" name="method" value="cashBasis" checked={method === 'cashBasis'} onChange={(e) => setMethod(e.target.value)} />
          <label htmlFor="cashBasis">現金主義</label>
        </div>
      </FormGroup>
      
      <FormGroup>
        <Label>集計伝票抽出</Label>
        <Select value={collectionMethod} onChange={(e) => setCollectionMethod(e.target.value)}>
          <option value="">指定なし</option>
          <option value="method1">抽出方法1</option>
          <option value="method2">抽出方法2</option>
        </Select>
        <Note>作表番号ごとに集計した伝票の一覧を出力します。<br/>作表番号を指定しない場合、すべての集計伝票を作表番号ごとに出力します。</Note>
      </FormGroup>
      
      <FormGroup>
        <Label>作表番号</Label>
        <div>
          <DateInput type="text" value={date} onChange={(e) => setDate(e.target.value)} placeholder="科目コード" />
          <DateInput type="text" value={date} onChange={(e) => setDate(e.target.value)} placeholder="科目略名" />
        </div>
        <Note>指定した科目の伝票一覧を出力します。<br/>集計伝票抽出でCSVに集計されていない伝票の突合を行うことができます。<br/>集計されていない伝票はキャッシュ・フロー伝票集計先指示入力で調整します。</Note>
      </FormGroup>

      <SubmitButton type="submit">CSV出力</SubmitButton>
    </Form>
  );
};

// Styling with Emotion
const Form = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 600px;
  margin: 0 auto;
`;

const FormGroup = styled.div`
  margin-bottom: 1rem;
`;

const Label = styled.div`
  font-weight: bold;
  margin-bottom: 0.5rem;
`;

const Input = styled.input`
  margin-right: 0.5rem;
`;

const Select = styled.select`
  padding: 0.5rem;
  font-size: 1rem;
`;

const Note = styled.div`
  font-size: 0.875rem;
  color: #666;
  margin-top: 0.5rem;
`;

const DateInput = styled.input`
  padding: 0.5rem;
  font-size: 1rem;
  margin-right: 0.5rem;
`;

const SubmitButton = styled.button`
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  cursor: pointer;
  
  &:hover {
    background-color: #0056b3;
  }
`;

// Usage example
const App: React.FC = () => {
  const handleSubmit = (data: { accountType: string; method: string; collectionMethod: string; date: string; }) => {
    console.log(data);
    // Handle form submission
  };

  return (
    <div>
      <h1>キャッシュ・フロー集計伝票突合CSV作成</h1>
      <CashCollectionForm onSubmit={handleSubmit} />
    </div>
  );
};

export default App;