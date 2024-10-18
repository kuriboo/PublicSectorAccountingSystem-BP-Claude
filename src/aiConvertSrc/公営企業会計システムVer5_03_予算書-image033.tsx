import React from 'react';
import styled from '@emotion/styled';

// 予算項目を表すデータ型
type BudgetItem = {
  id: number;
  name: string;
  amount: number;
  date: string;
};

// 予算作成フォームのプロパティ型
type BudgetFormProps = {
  onSubmit: (item: BudgetItem) => void;
};

// 予算作成フォームのコンポーネント
const BudgetForm: React.FC<BudgetFormProps> = ({ onSubmit }) => {
  // フォームの状態管理
  const [item, setItem] = React.useState<BudgetItem>({
    id: 0,
    name: '',
    amount: 0,
    date: '',
  });

  // 送信ボタンがクリックされたときの処理
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(item);
    setItem({ id: 0, name: '', amount: 0, date: '' });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Row>
        <Label>年度</Label>
        <Input type="text" value={item.id} onChange={(e) => setItem({ ...item, id: Number(e.target.value) })} />
      </Row>
      <Row>
        <Label>帳票種別</Label>
        <Radio>
          <input type="radio" id="estimate" name="type" />
          <label htmlFor="estimate">見積別明細</label>
        </Radio>
        <Radio>
          <input type="radio" id="actual" name="type" />
          <label htmlFor="actual">実績計上明細</label>
        </Radio>
      </Row>
      <Row>
        <Label>範囲指定</Label>
        <Input type="text" value={item.date} onChange={(e) => setItem({ ...item, date: e.target.value })} />
        <span>～</span>
        <Input type="text" value={item.date} onChange={(e) => setItem({ ...item, date: e.target.value })} />
      </Row>
      <Row>
        <Label>説明欄印字</Label>
        <Radio>
          <input type="radio" id="code" name="print" />
          <label htmlFor="code">コード印字</label>
        </Radio>
        <Radio>
          <input type="radio" id="name" name="print" />
          <label htmlFor="name">名称印字</label>
        </Radio>
        <Radio>
          <input type="radio" id="both" name="print" />
          <label htmlFor="both">コード+名称印字</label>
        </Radio>
      </Row>
      <Row>
        <Label>単位</Label>
        <Radio>
          <input type="radio" id="thousand" name="unit" />
          <label htmlFor="thousand">千円</label>
        </Radio>
        <Radio>
          <input type="radio" id="one" name="unit" />
          <label htmlFor="one">１円</label>
        </Radio>
      </Row>
      <Row>
        <Label>書式</Label>
        <Radio>
          <input type="radio" id="a4-portrait" name="format" />
          <label htmlFor="a4-portrait">Ａ４ 縦</label>  
        </Radio>
        <Radio>
          <input type="radio" id="a4-landscape" name="format" />
          <label htmlFor="a4-landscape">Ａ４ 横</label>
        </Radio>
      </Row>
      <Row>
        <Label>タイトル</Label>
        <Input type="text" value={item.name} onChange={(e) => setItem({ ...item, name: e.target.value })} />
      </Row>
      <Row>
        <Label>サブタイトル</Label>
        <Input type="text" value="" />
      </Row>
      <Row>  
        <Label>注タイトル</Label>
        <Input type="text" value="" />
      </Row>
      <Row>
        <Label>頁印字</Label>
        <Radio>
          <input type="radio" id="print-page" name="printPage" />
          <label htmlFor="print-page">する</label>
        </Radio>
        <Radio>  
          <input type="radio" id="no-print-page" name="printPage" />
          <label htmlFor="no-print-page">しない</label>
        </Radio>
      </Row>
      <Row>
        <Label>閉始頁</Label>
        <Input type="number" value={1} />
      </Row>
      <Row>
        <Label>セグメント</Label>
        <Select>
          <option>Option 1</option>
          <option>Option 2</option>
        </Select>
      </Row>
      <ButtonRow>
        <Button type="submit">OK</Button>
        <Button type="button">クリア</Button>
        <Button type="button">終了</Button>
      </ButtonRow>
    </Form>
  );
};

// スタイリング用のコンポーネント
const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 16px;
  border: 1px solid #ccc;
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const Label = styled.label`
  width: 120px;
  text-align: right;
`;

const Input = styled.input`
  padding: 4px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Radio = styled.span`
  display: flex;
  align-items: center;
  gap: 4px;
`;

const Select = styled.select`
  padding: 4px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const ButtonRow = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 8px;
  margin-top: 16px;
`;

const Button = styled.button`
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

// サンプルデータを使用してBudgetFormコンポーネントを表示
const App: React.FC = () => {
  const handleSubmit = (item: BudgetItem) => {
    console.log('Submitted:', item);
  };

  return (
    <div>
      <h1>予算作成</h1>
      <BudgetForm onSubmit={handleSubmit} />
    </div>
  );
};

export default App;