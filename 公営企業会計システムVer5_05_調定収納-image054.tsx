import React from 'react';
import styled from 'styled-components';

// 型定義
type SubjectType = '登録' | '訂正' | '削除' | '取消';
type PaymentType = '税込' | '明細';

interface InvoiceFormProps {
  date: string;
  subject: SubjectType;
  documentDate: string;
  documentNumber: string;
  payee: string;
  paymentConditions: PaymentType;
  deadline: string;
  totalAmount: number;
  memo: string;
  items: {
    div: string;
    item: string;
    quantity: number;
    unitPrice: number;
    amount: number;
    tax: number;
  }[];
  subtotal: number;
  taxAmount: number;
  totalAmountDue: number;
}

// スタイル定義
const FormWrapper = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  box-sizing: border-box;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;

  th, td {
    border: 1px solid #ccc;
    padding: 10px;
    text-align: center;
  }

  th {
    background-color: #f0f0f0;
    font-weight: bold;
  }
`;

const TotalAmountWrapper = styled.div`
  text-align: right;
  margin-bottom: 20px;
`;

// コンポーネント定義
const InvoiceForm: React.FC<InvoiceFormProps> = ({
  date,
  subject,
  documentDate,
  documentNumber,
  payee,
  paymentConditions,
  deadline,
  totalAmount,
  memo,
  items,
  subtotal,
  taxAmount,
  totalAmountDue,
}) => {
  // 請求先が空の場合はデフォルト値を設定
  const payeeText = payee || '請求先の会社名';

  return (
    <FormWrapper>
      <h2>公害企業会計システム</h2>
      <p>
        対象年月日: {date}
        <br />
        行政市水道事業会計 総務課 会計担当 高橋太郎
      </p>
      <div>
        調定入力:
        <label>
          <input type="radio" name="subject" checked={subject === '登録'} readOnly />
          登録
        </label>
        <label>
          <input type="radio" name="subject" checked={subject === '訂正'} readOnly />
          訂正
        </label>
        <label>
          <input type="radio" name="subject" checked={subject === '削除'} readOnly />
          削除
        </label>
        <label>
          <input type="radio" name="subject" checked={subject === '取消'} readOnly />
          取消
        </label>
      </div>
      <div>
        伝票: 
        <span>年 月 日 {documentDate}</span>
      </div>
      <div>取消日: {documentDate}</div>
      <div>
        請求先:
        <strong>{payeeText}</strong>
      </div>
      <div>
        摘要: 
        <span>{memo}</span>
      </div>
      <div>
        納入期限:
        <span>{deadline}</span>
        工事店
      </div>
      <div>
        種別: 
        <label>
          <input type="radio" name="paymentConditions" checked={paymentConditions === '税込'} readOnly />
          税込
        </label>
        <label>
          <input type="radio" name="paymentConditions" checked={paymentConditions === '明細'} readOnly />  
          明細
        </label>
        税率
        <strong>{totalAmount}</strong>
        %
      </div>

      <Table>
        <thead>
          <tr>
            <th>区分</th>
            <th>科目</th>
            <th>金額</th>
            <th>税</th>
            <th>備考</th>
            <th>調定金額</th>
            <th>内消費税額</th>
            <th>特定収入</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => (
            <tr key={index}>
              <td>{item.div}</td>
              <td>{item.item}</td>
              <td>{item.quantity}</td>
              <td>{item.unitPrice}</td>
              <td>{item.amount}</td>
              <td>{item.amount}</td>
              <td>{item.tax}</td>
              <td>0</td>  
            </tr>
          ))}
        </tbody>
      </Table>

      <TotalAmountWrapper>
        合計調定金額: {subtotal.toLocaleString()}
        <br />
        合計消費税額: {taxAmount.toLocaleString()}
        <br />  
        合計特定収入: 0  
      </TotalAmountWrapper>

      <div>
        <button>OK</button>
        <button>クリア</button>
        <button>終了</button>  
      </div>
    </FormWrapper>
  );
};

export default InvoiceForm;

// 使用例
const App: React.FC = () => {
  const sampleData: InvoiceFormProps = {
    date: '令和5年10月02日',
    subject: '登録',
    documentDate: '年 月 日',
    documentNumber: '99900T 備消品の費用戻入',  
    payee: '9000000040 ぎょうせい通信',
    paymentConditions: '税込',
    deadline: '年 月 日',
    totalAmount: 10,
    memo: '備消品の費用戻入',
    items: [
      {
        div: '本収',
        item: '総係:備/消耗品費',
        quantity: 1,
        unitPrice: 10000,
        amount: 10000,
        tax: 800,
      },
      {
        div: '本収',
        item: '総係:備/消耗品費',  
        quantity: 1,
        unitPrice: 15000,
        amount: 15000,
        tax: 1111, 
      },
    ],
    subtotal: 25000,
    taxAmount: 2000,
    totalAmountDue: 0,
  };

  return <InvoiceForm {...sampleData} />;
};