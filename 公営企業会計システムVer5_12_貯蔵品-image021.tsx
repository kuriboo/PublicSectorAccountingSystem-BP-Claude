import React from 'react';
import styled from '@emotion/styled';

interface InvoiceFormProps {
  date?: string;
  number?: string;
  supplier?: string;
  supplierAddress?: string;
  supplierPhone?: string;
  subject?: string;
  totalAmount?: number;
  taxAmount?: number;
  amountDue?: number;
  note?: string;
  items?: InvoiceItem[];
}

interface InvoiceItem {
  name: string;
  standard: string;
  unitPrice: number;
  quantity: number;
  price: number;
  remarks: string;
}

const Invoice: React.FC<InvoiceFormProps> = ({
  date = '',
  number = '',
  supplier = '',
  supplierAddress = '',
  supplierPhone = '',
  subject = '',
  totalAmount = 0,
  taxAmount = 0,
  amountDue = 0,
  note = '',
  items = [],
}) => {
  return (
    <InvoiceWrapper>
      <InvoiceHeader>
        <div>新規出庫入力(先入先出)</div>
        <div>
          <span>出庫日</span>
          <span>{date}</span>
        </div>
      </InvoiceHeader>
      <InvoiceContent>
        <div>
          <label>出庫番号</label>
          <div>{number}</div>
        </div>
        <div>
          <label>得意先</label>
          <div>{supplier}</div>
        </div>
        <div>
          <label>届先</label>
          <div>{supplierAddress}</div>
        </div>
        <div>
          <label>工事名等所</label>
          <div>{subject}</div>
        </div>
        <table>
          <thead>
            <tr>
              <th>品名</th>
              <th>規格</th>
              <th>単位</th>
              <th>数量</th>
              <th>単価</th>
              <th>金額</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item, index) => (
              <tr key={index}>
                <td>{item.name}</td>
                <td>{item.standard}</td>
                <td>本</td>
                <td>{item.quantity}</td>
                <td>{item.unitPrice}</td>
                <td>{item.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <InvoiceSummary>
          <div>
            <label>金額合計</label>
            <div>{totalAmount.toLocaleString()}</div>
          </div>
          <div>
            <label>予定累計</label>
            <div>{amountDue.toLocaleString()}</div>
          </div>
          <div>
            <label>予定残額</label>
            <div>{(totalAmount - amountDue).toLocaleString()}</div>
          </div>
        </InvoiceSummary>
      </InvoiceContent>
      <InvoiceFooter>
        <div>
          <label>摘要</label>
          <input type="text" value={note} readOnly />
        </div>
        <div>
          <label>行削除</label>
          <button>行削除</button>
        </div>
      </InvoiceFooter>
    </InvoiceWrapper>
  );
};

const InvoiceWrapper = styled.div`
  font-family: Arial, sans-serif;
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  box-sizing: border-box;

  @media (max-width: 600px) {
    padding: 10px;
  }
`;

const InvoiceHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;

  div:first-of-type {
    font-size: 24px;
    font-weight: bold;
  }

  div:last-of-type {
    display: flex;
    align-items: center;

    span:first-of-type {
      margin-right: 10px;
    }
  }

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: flex-start;

    div:last-of-type {
      margin-top: 10px;
    }
  }
`;

const InvoiceContent = styled.div`
  margin-bottom: 20px;

  > div {
    display: flex;
    margin-bottom: 10px;

    label {
      width: 120px;
      font-weight: bold;
    }
  }

  table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 20px;

    th,
    td {
      border: 1px solid #ccc;
      padding: 8px;
      text-align: center;
    }

    th {
      background-color: #f0f0f0;
      font-weight: bold;
    }
  }

  @media (max-width: 600px) {
    > div {
      flex-direction: column;

      label {
        width: auto;
        margin-bottom: 5px;
      }
    }
  }
`;

const InvoiceSummary = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;

  > div {
    margin-left: 40px;
    display: flex;
    align-items: center;

    label {
      margin-right: 10px;
      font-weight: bold;
    }
  }

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: flex-end;

    > div {
      margin-left: 0;
      margin-bottom: 10px;
    }
  }
`;

const InvoiceFooter = styled.footer`
  display: flex;
  justify-content: space-between;

  > div {
    display: flex;
    align-items: center;

    label {
      margin-right: 10px;
      font-weight: bold;
    }

    input {
      padding: 5px;
    }

    button {
      padding: 5px 10px;
    }
  }

  @media (max-width: 600px) {
    flex-direction: column;

    > div {
      margin-bottom: 10px;
    }
  }
`;

// サンプルデータを用いたInvoiceコンポーネントの使用例
const App: React.FC = () => {
  const sampleInvoiceData: InvoiceFormProps = {
    date: '平成30年06月25日',
    number: 'HY301 4月度 伝票番号 1',
    supplier: '予算編成総合積限',  
    supplierAddress: '(会計内)町高出庫在庫',
    supplierPhone: '041008',
    subject: '町高出庫在庫',
    totalAmount: 104800,
    taxAmount: 0,
    amountDue: 104800,
    note: '',
    items: [
      {
        name: 'DIP(A1)',
        standard: '4.75',
        unitPrice: 100,
        quantity: 1000,
        price: 100000,
        remarks: '',
      },
    ],
  };

  return <Invoice {...sampleInvoiceData} />;
};

export default App;