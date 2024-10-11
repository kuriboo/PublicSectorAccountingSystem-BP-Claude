import React from 'react';
import styled from '@emotion/styled';

// 型定義
type FormData = {
  startDate: string;
  endDate: string;
  orderNumber: string;
  customerCode: string;
  customerName: string;
  destinationCode: string;
  deliveryDate: string;
  dueDate: string;
  netAmount: number;
  taxAmount: number;
  totalAmount: number;
  grossProfit: number;
  grossProfitRatio: number;
  note: string;
};

type Props = {
  formData: FormData;
  onInputChange: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onSelectChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
};

// スタイリング
const Container = styled.div`
  display: grid;
  gap: 10px;
`;

const Row = styled.div`
  display: grid;  
  grid-template-columns: 100px 1fr;
  gap: 10px;
  align-items: center;
`;

const Input = styled.input`
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 3px;
`;

const Select = styled.select`
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 3px;
`;

const Textarea = styled.textarea`
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 3px;
`;

// コンポーネント
const OrderForm: React.FC<Props> = ({ formData, onInputChange, onSelectChange, onSubmit }) => {
  return (
    <form onSubmit={onSubmit}>
      <Container>
        <Row>
          <label>異動年月</label>
          <Input
            type="text"
            name="startDate"
            value={formData.startDate}
            onChange={onInputChange}
            required
          />
          <label>~</label>
          <Input
            type="text"
            name="endDate"
            value={formData.endDate}
            onChange={onInputChange}
            required
          />
        </Row>

        <Row>
          <label>受注番号</label>  
          <Input
            type="text"
            name="orderNumber"
            value={formData.orderNumber}
            onChange={onInputChange}
          />
        </Row>

        <Row>
          <label>得意先</label>
          <Input
            type="text"
            name="customerCode"
            value={formData.customerCode}
            onChange={onInputChange}
          />
          <Input
            type="text"
            name="customerName"
            value={formData.customerName}
            onChange={onInputChange}
          />
        </Row>

        <Row>
          <label>入力区分</label>
          <Select name="inputType" onChange={onSelectChange}>
            <option value="management">管理</option>
            <option value="actual">実際</option>
          </Select>     
        </Row>

        <Row>
          <label>会計区分コード</label>
          <Input
            type="text"
            name="accountCode"
            value={formData.destinationCode}
            onChange={onInputChange}
          />
        </Row>

        <Row>
          <label>リース項目</label>  
          <Input
            type="text"
            name="deliveryDate"
            value={formData.deliveryDate}
            onChange={onInputChange}
          />
          <label>~</label>
          <Input
            type="text"
            name="dueDate"  
            value={formData.dueDate}
            onChange={onInputChange}
          />
        </Row>

        <Row>
          <label>税抜</label>
          <Input
            type="number"
            name="netAmount"
            value={formData.netAmount}
            onChange={onInputChange}
          />
          <label>消費税</label>
          <Input
            type="number"
            name="taxAmount"
            value={formData.taxAmount}
            onChange={onInputChange}
          />  
          <label>税込</label>
          <Input
            type="number"  
            name="totalAmount"
            value={formData.totalAmount}
            onChange={onInputChange}
          />
        </Row>

        <Row>  
          <label>粗利益</label>
          <Input
            type="number"
            name="grossProfit" 
            value={formData.grossProfit}
            onChange={onInputChange}
          />
          <label>粗利率</label>
          <Input
            type="number"
            name="grossProfitRatio"
            value={formData.grossProfitRatio}  
            onChange={onInputChange}
          />
        </Row>

        <Row>
          <label>備考</label>  
          <Textarea
            name="note"
            value={formData.note}
            onChange={onInputChange}
          />
        </Row>
      </Container>

      <button type="submit">登録</button>
    </form>
  );
};

// 使用例
const sampleData: FormData = {
  startDate: '2021-11-01', 
  endDate: '2021-11-30',
  orderNumber: '123456789',
  customerCode: 'C001',
  customerName: 'テスト株式会社', 
  destinationCode: 'D001',
  deliveryDate: '2021-11-15',
  dueDate: '2021-11-30',
  netAmount: 100000,
  taxAmount: 10000,
  totalAmount: 110000,
  grossProfit: 50000,
  grossProfitRatio: 45.5,
  note: '備考欄',
};

const App: React.FC = () => {
  const handleInputChange = () => {
    // 入力値変更時の処理
  };
  
  const handleSelectChange = () => {
    // セレクト値変更時の処理  
  };

  const handleSubmit = () => {
    // フォーム送信時の処理
  };

  return (
    <OrderForm 
      formData={sampleData}
      onInputChange={handleInputChange}
      onSelectChange={handleSelectChange} 
      onSubmit={handleSubmit}
    />
  );
}

export default App;