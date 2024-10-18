import React from 'react';
import styled from 'styled-components';

// 支払伝票の型定義
interface Invoice {
  date: string;
  company: string;
  department: string;
  payee: string;
  amount: number;
  tax: number;
  totalAmount: number;
  stampField: string;
  transactionDetails: string[];
  taxWithholdingDetails: string[];
  remarks: string;
}

// 支払伝票コンポーネント
const InvoiceComponent: React.FC<{ invoice: Invoice }> = ({ invoice }) => {
  // 金額の3桁区切りを行うヘルパー関数
  const formatAmount = (amount: number) => {
    return amount.toLocaleString();
  };

  return (
    <InvoiceWrapper>
      <InvoiceHeader>
        <h2>支払伝票（単票）</h2>
        <InvoiceNumber>伝票No 27-000451</InvoiceNumber>
      </InvoiceHeader>
      <InvoiceTable>
        <tbody>
          <tr>
            <th>所属</th>
            <td colSpan={2}>{invoice.department}</td>
            <th>氏名</th>
            <td colSpan={2}>{invoice.payee}</td>
            <th>金額</th>
            <td>{formatAmount(invoice.amount)}円</td>
            <th>起案者</th>
          </tr>
          <tr>
            <td colSpan={4}>
              <h4>借方科目</h4>
              <ul>
                {invoice.transactionDetails.map((detail, index) => (
                  <li key={index}>{detail}</li>
                ))}
              </ul>
            </td>
            <td colSpan={4}>
              <h4>貸方科目</h4>
              <ul>
                {invoice.taxWithholdingDetails.map((detail, index) => (
                  <li key={index}>{detail}</li>
                ))}
              </ul>
            </td>
          </tr>
          <tr>
            <th colSpan={6}>金額</th>
            <td colSpan={2}>{formatAmount(invoice.totalAmount)}円</td>
          </tr>
          <tr>
            <th>摘要</th>
            <td colSpan={7}>{invoice.remarks}</td>
          </tr>
        </tbody>
      </InvoiceTable>
      <InvoiceFooter>
        <div>協議</div>
        <div>確認</div>
        <div>取入区分</div>
      </InvoiceFooter>
    </InvoiceWrapper>
  );
};

// サンプルデータを用いた支払伝票コンポーネントの使用例
const InvoiceSample = () => {
  const sampleInvoice: Invoice = {
    date: '2023年3月27日',
    company: 'サンプル会社',
    department: '経理部',
    payee: '山田太郎', 
    amount: 1000000,
    tax: 100000,
    totalAmount: 1100000,
    stampField: '',
    transactionDetails: ['事業費用', '〇〇事業', '印刷製本費', '会議費'],
    taxWithholdingDetails: ['源泉所得税', '県民税', '市民税', '健康保険料', '厚生年金保険料'],
    remarks: '',
  };

  return <InvoiceComponent invoice={sampleInvoice} />;
};

// スタイリング
const InvoiceWrapper = styled.div`
  font-family: sans-serif;
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const InvoiceHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const InvoiceNumber = styled.div`
  font-size: 18px;
`;

const InvoiceTable = styled.table`
  width: 100%;
  border-collapse: collapse;

  th,
  td {
    border: 1px solid #ccc;
    padding: 10px;
    text-align: left;
  }

  th {
    background-color: #f0f0f0;
    font-weight: normal;
  }
`;

const InvoiceFooter = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
  padding-top: 10px;
  border-top: 1px solid #ccc;
`;

export default InvoiceComponent;