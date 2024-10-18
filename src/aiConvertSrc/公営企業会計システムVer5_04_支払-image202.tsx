import React from 'react';
import styled from '@emotion/styled';

interface InvoiceDetailProps {
  date: string;
  invoiceNumber: string;
  customerName: string;
  customerAddress: string;
  companyName: string;
  companyAddress: string;
  items: Array<{
    name: string;
    quantity: number;
    price: number;    
    tax: number;
  }>;
  subtotal: number;
  tax: number;
  total: number;
}

const InvoiceDetail: React.FC<InvoiceDetailProps> = ({
  date,
  invoiceNumber,
  customerName,
  customerAddress,
  companyName, 
  companyAddress,
  items,
  subtotal,
  tax,
  total
}) => {
  return (
    <InvoiceWrapper>
      <HeaderWrapper>
        <div>
          <div>請求日</div>
          <div>{date}</div>
        </div>
        <div>
          <div>請求番号</div>
          <div>{invoiceNumber}</div>
        </div>
      </HeaderWrapper>
      
      <AddressWrapper>
        <div>
          <div>請求先</div>
          <div>{customerName}</div>
          <div>{customerAddress}</div>
        </div>
        <div>
          <div>請求元</div>
          <div>{companyName}</div>
          <div>{companyAddress}</div>
        </div>
      </AddressWrapper>

      <TableWrapper>
        <thead>
          <tr>
            <th>品目</th>
            <th>数量</th>
            <th>単価</th>
            <th>税率</th>
            <th>税抜金額</th>
            <th>消費税額</th>
            <th>税込金額</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.quantity}</td>
              <td>{item.price.toLocaleString()}</td>
              <td>{item.tax * 100}%</td>
              <td>{(item.price * item.quantity).toLocaleString()}</td>
              <td>{(item.price * item.quantity * item.tax).toLocaleString()}</td>
              <td>{(item.price * item.quantity * (1 + item.tax)).toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </TableWrapper>

      <TotalWrapper>
        <div>
          <div>合計</div>
          <div>{subtotal.toLocaleString()}</div>
        </div>
        <div>
          <div>消費税</div>
          <div>{tax.toLocaleString()}</div>
        </div>
        <div>
          <div>合計金額</div>
          <div>{total.toLocaleString()}</div>
        </div>
      </TotalWrapper>
    </InvoiceWrapper>
  );
};

// Styled components
const InvoiceWrapper = styled.div`
  font-family: sans-serif;
  max-width: 800px;
  margin: 0 auto;
`;

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;

  > div {
    > div:first-of-type {
      font-size: 0.8em;
      color: #999;  
    }
  }
`;

const AddressWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;

  > div {
    > div:first-of-type {
      font-size: 0.8em;
      color: #999;
      margin-bottom: 5px;
    }

    > div:not(:first-of-type) {
      margin-bottom: 3px;  
    }
  }
`;

const TableWrapper = styled.table`
  width: 100%;
  margin-bottom: 20px;
  border-collapse: collapse;

  th, td {
    border: 1px solid #ccc;
    padding: 5px;
    text-align: right;
  }

  th {
    background-color: #f0f0f0;
  } 
`;

const TotalWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  
  > div {
    margin-left: 20px;

    > div:first-of-type {
      font-size: 0.8em;
      color: #999;  
    }
  }
`;

// Sample data for preview
const sampleData: InvoiceDetailProps = {
  date: '2023年6月1日',
  invoiceNumber: '00001',  
  customerName: '株式会社サンプル',
  customerAddress: '東京都新宿区西新宿1-1-1',
  companyName: '株式会社テスト',
  companyAddress: '東京都渋谷区渋谷1-1-1',
  items: [
    { name: '商品A', quantity: 2, price: 1000, tax: 0.1 },
    { name: '商品B', quantity: 1, price: 500, tax: 0.08 },
  ],
  subtotal: 2500,  
  tax: 230,
  total: 2730,
};

export default function App() {
  return <InvoiceDetail {...sampleData} />;  
}