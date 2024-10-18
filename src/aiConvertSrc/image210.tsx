import React from 'react';
import styled from '@emotion/styled';

type InvoiceData = {
  date: string;
  customerName: string;
  customerAddress: string;
  phoneNumber: string;
  bankName: string;
  bankBranch: string;
  bankAccountNumber: string;
  items: {
    name: string;
    unitPrice: number;
    quantity: number;
    price: number;
  }[];
  subTotal: number;
  tax: number;
  total: number;
};

type InvoiceProps = {
  data: InvoiceData;
};

const InvoiceContainer = styled.div`
  font-family: sans-serif;
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  box-sizing: border-box;

  @media (max-width: 600px) {
    padding: 10px;
  }
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;

  th, td {
    border: 1px solid #ccc;
    padding: 8px;
    text-align: left;
  }

  th {
    background-color: #f0f0f0;
  }
`;

const TextField = styled.div`
  margin-bottom: 10px;
`;

const Label = styled.div`
  font-weight: bold;
`;

const Value = styled.div`
  margin-left: 20px;
`;

const Invoice: React.FC<InvoiceProps> = ({ data }) => {
  // 請求書の合計金額を計算
  const calculateTotal = () => {
    return data.items.reduce((sum, item) => sum + item.price, 0);
  };

  return (
    <InvoiceContainer>
      <h2>請求書</h2>
      <TextField>
        <Label>請求日:</Label>
        <Value>{data.date}</Value>
      </TextField>
      
      <h3>お客様情報</h3>
      <TextField>
        <Label>お客様氏名:</Label> 
        <Value>{data.customerName}</Value>
      </TextField>
      <TextField>  
        <Label>ご住所:</Label>
        <Value>{data.customerAddress}</Value>
      </TextField>
      <TextField>
        <Label>お電話番号:</Label>
        <Value>{data.phoneNumber}</Value>
      </TextField>

      <h3>振込先</h3>  
      <TextField>
        <Label>銀行名:</Label>
        <Value>{data.bankName}</Value>
      </TextField>
      <TextField>
        <Label>支店名:</Label>
        <Value>{data.bankBranch}</Value>
      </TextField>
      <TextField>
        <Label>口座番号:</Label>
        <Value>{data.bankAccountNumber}</Value>
      </TextField>

      <h3>ご請求金額</h3>
      <Table>
        <thead>
          <tr>
            <th>品名</th>
            <th>単価</th>
            <th>数量</th>
            <th>金額</th>
          </tr>
        </thead>
        <tbody>
          {data.items.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.unitPrice}</td>
              <td>{item.quantity}</td>
              <td>{item.price}</td>
            </tr>
          ))}
        </tbody>
      </Table>

      <TextField>
        <Label>小計:</Label>
        <Value>{data.subTotal}</Value>
      </TextField>
      <TextField>  
        <Label>消費税:</Label>
        <Value>{data.tax}</Value>
      </TextField>
      <TextField>
        <Label>合計金額:</Label>
        <Value>{calculateTotal()}</Value>  
      </TextField>
    </InvoiceContainer>
  );
};

// 使用例
const sampleData: InvoiceData = {
  date: '2023年02月01日',
  customerName: '鈴木一郎',
  customerAddress: '東京都港区1-2-3',
  phoneNumber: '090-1234-5678',
  bankName: '〇〇銀行', 
  bankBranch: '△△支店',
  bankAccountNumber: '1234567890',
  items: [
    { name: '商品A', unitPrice: 1000, quantity: 2, price: 2000 },
    { name: '商品B', unitPrice: 500, quantity: 3, price: 1500 },
  ],
  subTotal: 3500,
  tax: 350,
  total: 3850,
};

const App: React.FC = () => {
  return (
    <div>
      <Invoice data={sampleData} />
    </div>
  );  
};

export default App;