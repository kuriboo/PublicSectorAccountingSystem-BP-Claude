import React from 'react';
import styled from '@emotion/styled';

interface EntryFormProps {
  onSubmit: (data: EntryData) => void;
}

interface EntryData {
  date: string;
  destination: string;
  purpose: string;
  supplier: string;
  paid: string;
  memo: string;
  transportation: string;
  amountClaimed: number;
  taxIncluded: boolean;
  receiptAttached: boolean;
}

const EntryForm: React.FC<EntryFormProps> = ({ onSubmit }) => {
  // 状態管理用のstate
  const [entryData, setEntryData] = React.useState<EntryData>({
    date: '',
    destination: '',
    purpose: '',
    supplier: '',
    paid: '',
    memo: '',
    transportation: '現金払',
    amountClaimed: 0,
    taxIncluded: false,
    receiptAttached: false,
  });

  // 入力値の変更を反映
  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type, checked } = event.target;
    const newValue = type === 'checkbox' ? checked : value;
    setEntryData(prevData => ({
      ...prevData,
      [name]: newValue,
    }));
  };

  // フォーム送信時の処理
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit(entryData);
    // フォームをリセット
    setEntryData({
      date: '',
      destination: '',
      purpose: '',
      supplier: '',
      paid: '',
      memo: '',
      transportation: '現金払',
      amountClaimed: 0,
      taxIncluded: false, 
      receiptAttached: false,
    });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Row>
        <Label>決定処理日</Label>
        <Input type="text" name="date" value={entryData.date} onChange={handleChange} />
      </Row>
      <Row>
        <Label>決裁区分</Label>
        <Radio>
          <input type="radio" id="normal" name="approvalType" value="通常承認" checked readOnly /> 
          <label htmlFor="normal">通常承認</label>
        </Radio>
        <Radio>
          <input type="radio" id="draft" name="approvalType" value="下書" readOnly />
          <label htmlFor="draft">下書</label>
        </Radio>
        <Radio>
          <input type="radio" id="bulk" name="approvalType" value="一括承認" readOnly /> 
          <label htmlFor="bulk">一括承認</label>  
        </Radio>
      </Row>
      <Row>
        <Label>合議区分</Label>  
        <Radio>
          <input type="radio" id="approval" name="conferType" value="承認" checked readOnly />
          <label htmlFor="approval">承認</label>
        </Radio>
        <Radio>  
          <input type="radio" id="reply" name="conferType" value="再提出" readOnly />
          <label htmlFor="reply">再提出</label>
        </Radio>
      </Row>
      <Row>
        <Label>支払日</Label>
        <Input type="text" name="paid" value={entryData.paid} onChange={handleChange} />  
      </Row>
      <Row>
        <Label>請求番号</Label>
        <Input value="3686" readOnly />  
      </Row>
      <Row>
        <Label>支払方法</Label>  
        <Select name="transportation" value={entryData.transportation} onChange={handleChange}>
          <option value="現金払">現金払</option>
          <option value="その他の方法">その他の方法</option>  
        </Select>
      </Row>
      <Row>  
        <Label>請求書番号</Label>
        <Input type="text" name="supplier" value={entryData.supplier} onChange={handleChange} />
        <Button>一時保存番号</Button>
      </Row>
      <Row>
        <Label>旅行先</Label>
        <Input type="text" name="destination" value={entryData.destination} onChange={handleChange} />  
      </Row>
      <Row>
        <Label>銀行番号</Label>  
        <Input value="支払科目番号" readOnly />  
      </Row>
      <Row>
        <Label>前払科目</Label>  
        <Input value="営業前払金（本部）" readOnly />
      </Row>
      <Row>
        <Label>税金種別</Label>  
        <Checkbox>
          <input type="checkbox" id="taxIncluded" name="taxIncluded" checked={entryData.taxIncluded} onChange={handleChange} />
          <label htmlFor="taxIncluded">税率考慮</label>  
        </Checkbox>
      </Row>
      <Row>  
        <Label>領収書</Label>
        <Checkbox>
          <input type="checkbox" id="receiptAttached" name="receiptAttached" checked={entryData.receiptAttached} onChange={handleChange} />   
          <label htmlFor="receiptAttached">添付</label>
        </Checkbox>
      </Row>
      <Row>
        <Label>事務用品の前渡購入</Label>   
        <TextArea name="memo" value={entryData.memo} onChange={handleChange} />
      </Row>
      <Row>
        <Label>事務用品</Label>
        <Label>事務用品</Label>  
        <Label>事務用品</Label>
        <Label>税</Label>  
        <Label>課税額</Label>
        <Label>消費税額</Label>  
      </Row>
      <Row>  
        <Input value="事務用品" readOnly />
        <Input value="事務用品" readOnly />
        <Input value="事務用品" readOnly />  
        <Input value="8%" readOnly /> 
        <AmountInput type="number" value={entryData.amountClaimed} onChange={handleChange} />
        <Input value="148" readOnly />
      </Row>
      <ButtonRow>
        <SubmitButton type="submit">OK</SubmitButton>
        <Button type="button">クリア</Button>
        <Button type="button">終了</Button>  
      </ButtonRow>
    </Form>
  );
};

// サンプルデータと使用例
const sampleData: EntryData = {
  date: '令和31年04月18日', 
  destination: 'さよなら、事務所',
  purpose: '事務用品の前渡購入',
  supplier: '9999999999',
  paid: '年/月/日',
  memo: '事務用品の前渡購入',
  transportation: '現金払',
  amountClaimed: 2000,
  taxIncluded: true,
  receiptAttached: false,   
};

const UsageExample: React.FC = () => {
  const handleSubmit = (data: EntryData) => {
    console.log('Submitted:', data);
  };

  return (
    <div>
      <h2>出張デモ</h2>  
      <EntryForm onSubmit={handleSubmit} />
    </div>
  );
};

// スタイリング
const Form = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Row = styled.div`
  display: flex; 
  align-items: center;
  margin-bottom: 15px;
  
  @media (max-width: 600px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const Label = styled.label`
  flex: 0 0 100px;
  margin-right: 10px;
`;

const Input = styled.input`
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 3px; 
  
  &[readonly] {
    background-color: #f0f0f0;
  }
`;

const AmountInput = styled(Input)`
  width: 100px;
  text-align: right;
`;

const TextArea = styled.textarea`
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 3px;
  flex: 1;
`;

const Radio = styled.span`
  margin-right: 10px;
`;

const Checkbox = styled.span`
  margin-right: 10px;
`;

const Select = styled.select`
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 3px;
`;

const Button = styled.button`
  padding: 8px 15px;
  background-color: #f0f0f0;
  border: none; 
  border-radius: 3px;
  cursor: pointer;
  
  & + & {
    margin-left: 10px;  
  }
`;

const SubmitButton = styled(Button)`
  background-color: #007bff;
  color: #fff;
`;

const ButtonRow = styled(Row)`
  justify-content: flex-end;
`;

export default UsageExample;