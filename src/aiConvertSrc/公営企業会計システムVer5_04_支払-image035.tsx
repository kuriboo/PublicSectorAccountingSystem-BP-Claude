import React from 'react';
import styled from '@emotion/styled';

type WorkOrderFormProps = {
  onSubmit: (data: WorkOrderData) => void;
};

type WorkOrderData = {
  registrationDate: string;
  ordererCode: string;
  ordererName: string;
  destinationCode: string;
  destinationName: string;
  paymentCycle: number;
  tax: 'included' | 'notIncluded' | 'overseas';
  workPeriodStart: string;
  workPeriodEnd: string;
  dayRate: number;
  expensesIncluded: boolean;
  memo: string;
  subtotal: number;
  consumptionTax: number;
  grossAmount: number;
  amountCollected: number;
};

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f5f5f5;
  font-family: sans-serif;
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
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Select = styled.select`
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: white;
`;

const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  margin-right: 10px;
`;

const Checkbox = styled.input`
  margin-right: 5px;
`;

const Textarea = styled.textarea`
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const SubmitButton = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  background-color: #007bff;
  color: white;
  cursor: pointer;
  
  &:hover {
    background-color: #0056b3;
  }
`;

const WorkOrderForm: React.FC<WorkOrderFormProps> = ({ onSubmit }) => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // フォームの値を収集してデータオブジェクトを作成する処理を実装
    const data: WorkOrderData = {
      // 入力値を対応するプロパティに設定
      registrationDate: '',
      ordererCode: '',
      ordererName: '',
      destinationCode: '',
      destinationName: '',
      paymentCycle: 0,
      tax: 'included',
      workPeriodStart: '',
      workPeriodEnd: '',
      dayRate: 0,
      expensesIncluded: false,
      memo: '',
      subtotal: 0,
      consumptionTax: 0,
      grossAmount: 0,
      amountCollected: 0,
    };
    onSubmit(data);
  };

  return (
    <Container>
      <h2>支出負担行為伺入力(工事)</h2>
      <form onSubmit={handleSubmit}>
        <FormGroup>
          <Label>負担処理日</Label>
          <Input type="date" defaultValue="令和5年10月02日" />
        </FormGroup>

        <FormGroup>
          <Label>発注区分</Label>
          <Select>
            <option value="部長・審査無">部長・審査無</option>
            <option value="財政のみ">財政のみ</option>
          </Select>
        </FormGroup>

        <FormGroup>
          <Label>合議区分</Label>
          <Select>
            <option value="財政のみ">財政のみ</option>
          </Select>
        </FormGroup>

        <FormGroup>
          <Label>予定年度</Label>
          <Input type="text" value="令和5年度" readOnly />
        </FormGroup>

        <FormGroup>
          <Label>予定番号</Label>
          <Input type="number" min="1" defaultValue="2" />
        </FormGroup>

        <FormGroup>
          <Label>工事名称</Label>
          <Input type="text" />
        </FormGroup>

        <FormGroup>
          <Label>工事場所</Label>
          <Input type="text" />
        </FormGroup>

        <FormGroup>
          <Label>契約リンケージ</Label>
          <Select>
            <option value="未付番号">未付番号</option>
          </Select>
        </FormGroup>

        <FormGroup>
          <Label>摘要</Label>
          <Textarea rows={3}></Textarea>
        </FormGroup>

        <FormGroup>
          <Label>相手先</Label>
          <Input type="text" />
        </FormGroup>

        <FormGroup>
          <Label>契約書</Label>
          <Input type="file" />
        </FormGroup>

        <FormGroup>
          <Label>入力担当者</Label>
          <Input type="text" value="800000000000 さようせい工務店" readOnly />
        </FormGroup>

        <SubmitButton type="submit">OK</SubmitButton>
      </form>
    </Container>
  );
};

export default WorkOrderForm;

// サンプルデータを用いた使用例
const sampleData: WorkOrderData = {
  registrationDate: '2023-10-02',
  ordererCode: 'Dept01',
  ordererName: '技術部',
  destinationCode: 'Loc01',  
  destinationName: '本社工場',
  paymentCycle: 2,
  tax: 'included',
  workPeriodStart: '2023-10-01',
  workPeriodEnd: '2023-12-31',
  dayRate: 10000,
  expensesIncluded: true,
  memo: '設備更新工事',
  subtotal: 1000000,
  consumptionTax: 100000, 
  grossAmount: 1100000,
  amountCollected: 1100000,
};

const App: React.FC = () => {
  const handleSubmit = (data: WorkOrderData) => {
    console.log('提出データ:', data);
    // ここでデータを送信するなどの処理を行う
  };

  return (
    <div>
      <h1>工事発注フォーム</h1>
      <WorkOrderForm onSubmit={handleSubmit} />
    </div>
  );
};