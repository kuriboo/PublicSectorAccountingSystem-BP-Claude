import React from 'react';
import styled from '@emotion/styled';

// 支払伝票の型定義
type VoucherType = {
  date: string;
  voucherNumber: string;
  subject: string;
  taxAmount: number;
  consumption: number;
  payment: number;
  charge: number;
  other: number;
  total: number;
};

// スタイル定義
const VoucherWrapper = styled.div`
  font-family: Arial, sans-serif;
  table {
    width: 100%;
    border-collapse: collapse;
    th, td {
      border: 1px solid #333;
      padding: 8px;
      text-align: center;
    }
    th {
      background-color: #f0f0f0;
    }
  }
  h1 {
    text-align: center;
  }
  .total {
    font-weight: bold;
  }
`;

// 支払伝票コンポーネント
const PaymentVoucher: React.FC<VoucherType> = ({
  date,
  voucherNumber,
  subject,
  taxAmount,
  consumption,
  payment,
  charge,
  other,
  total
}) => {
  return (
    <VoucherWrapper>
      <h1>支払伝票（単票）</h1>
      <table>
        <tbody>
          <tr>
            <th>伝票NO</th>
            <td>{voucherNumber}</td>
            <th colSpan={2}>平成{date}年3月27日</th>
          </tr>
          <tr>
            <th>所属</th>
            <th>課長</th>
            <th>係</th>
            <th>起案者</th>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <th>摘要</th>
            <td colSpan={3}>{subject}</td>
          </tr>
          <tr>
            <th rowSpan={2}>借方科目</th>
            <td>報酬</td>
            <td rowSpan={2}>貸方科目</td>
            <td>金額</td>
          </tr>
          <tr>
            <td>
              事業費用<br/>
              ○○事業<br/>
              印刷製本費<br/>
              消耗品費<br/>
              通信運搬費<br/>
              旅費交通費<br/>
              印刷製本費<br/>
              消耗品費<br/>
              備品購入費<br/>
            </td>
            <td>
              収納口座<br/>
              普通預金<br/>  
              〇〇銀行<br/>
              普通預金<br/>
              〇〇銀行<br/>
              普通預金<br/>
            </td>
            <td>{payment.toLocaleString()}円</td>
          </tr>
          <tr>
            <th>税額</th>
            <td>{taxAmount.toLocaleString()}円</td>
            <th>支払金額</th>
            <td>{total.toLocaleString()}円</td>
          </tr>
        </tbody>
      </table>
    </VoucherWrapper>
  );
};

// サンプルデータ
const sampleData: VoucherType = {
  date: '27-000451',
  voucherNumber: '27-000451',
  subject: '平成28年3月27日',
  taxAmount: 1000000,
  consumption: 1000000,
  payment: 1000000,
  charge: 0,
  other: 0,
  total: 2000000,
};

// 使用例
const VoucherExample: React.FC = () => {
  return (
    <PaymentVoucher
      date={sampleData.date}
      voucherNumber={sampleData.voucherNumber}  
      subject={sampleData.subject}
      taxAmount={sampleData.taxAmount}
      consumption={sampleData.consumption}
      payment={sampleData.payment}
      charge={sampleData.charge}
      other={sampleData.other}
      total={sampleData.total}
    />
  );
};

export default VoucherExample;