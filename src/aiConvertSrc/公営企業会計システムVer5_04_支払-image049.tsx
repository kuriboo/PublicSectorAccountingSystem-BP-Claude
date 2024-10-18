import React from 'react';
import styled from 'styled-components';

// 型定義
type ContractFormProps = {
  contractDate?: string;
  contractNumber?: number;
  contractTerm?: number;
  paymentMethod?: 'cash' | 'transfer' | 'other';
  paymentAmount?: number;
  taxAmount?: number;
  totalAmount?: number;
  note?: string;
};

// スタイル定義
const FormContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f0f0f0;
  border-radius: 5px;
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

const TextArea = styled.textarea`
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

// コンポーネント定義
const ContractForm: React.FC<ContractFormProps> = ({
  contractDate = '',
  contractNumber = 0,
  contractTerm = 1,
  paymentMethod = 'cash',
  paymentAmount = 0,
  taxAmount = 0,
  totalAmount = 0,
  note = '',
}) => {
  // 支払方法選択肢
  const paymentOptions = [
    { value: 'cash', label: '現金' },
    { value: 'transfer', label: '振込' },
    { value: 'other', label: 'その他' },
  ];

  return (
    <FormContainer>
      <h2>変更支出負担行為伺入力(工事)</h2>
      <FormGroup>
        <Label>負担処理日</Label>
        <Input type="date" value={contractDate} readOnly />
      </FormGroup>
      <FormGroup>
        <Label>負担年度</Label>
        <Input type="number" value={contractNumber} readOnly />
      </FormGroup>
      <FormGroup>
        <Label>契約区分</Label>
        <Input type="text" value="部屋・審査需" readOnly />
      </FormGroup>
      <FormGroup>
        <Label>支払回数</Label>
        <Input type="number" value={contractTerm} readOnly />
      </FormGroup>
      <FormGroup>
        <Label>相手先</Label>
        <Input type="text" value="ぎょうせい工務店" readOnly />
      </FormGroup>
      <FormGroup>
        <Label>変更内容</Label>
        <TextArea value={note} readOnly />
      </FormGroup>
      <FormGroup>
        <Label>前払金額</Label>
        <Input type="number" value={paymentAmount} readOnly />
      </FormGroup>
      <FormGroup>
        <Label>支払済額</Label>
        <Input type="number" value={taxAmount} readOnly />
      </FormGroup>
      <FormGroup>
        <Label>合計変更後請負額</Label>
        <Input type="number" value={totalAmount} readOnly />
      </FormGroup>
      <FormGroup>
        <Label>細節・明細</Label>
        <table>
          <thead>
            <tr>
              <th>予算節</th>
              <th>内消費税額</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>配水・工事請負費</td>
              <td>50,000</td>
            </tr>
          </tbody>
        </table>
      </FormGroup>
    </FormContainer>
  );
};


// サンプルデータを用いた使用例
const sampleData: ContractFormProps = {
  contractDate: '令和5年10月10日',
  contractNumber: 4,
  contractTerm: 1,
  paymentMethod: 'transfer',
  paymentAmount: 1100000,
  taxAmount: 0,
  totalAmount: 1650000,
  note: '配水管布設工事',
};

const App: React.FC = () => {
  return (
    <div>
      <h1>契約書フォーム</h1>
      <ContractForm {...sampleData} />
    </div>
  );
};

export default App;