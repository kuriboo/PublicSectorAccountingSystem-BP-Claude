import React from 'react';
import styled from '@emotion/styled';

// 代表者情報の型定義
type RepresentativeInfo = {
  code: string;
  name: string;
  kana: string;
};

// 明細情報の型定義
type DetailInfo = {
  code: string;
  name: string;
  unitPrice: number;
  quantity: number;
  price: number;
  taxRate: number;
};

// 振込先情報の型定義
type BankInfo = {
  bankCode: string;
  bankName: string;
  branchCode: string;
  branchName: string;
  accountType: string;
  accountNumber: string;
};

// コンポーネントのプロパティの型定義
type Props = {
  representativeInfo: RepresentativeInfo;
  detailInfo: DetailInfo[];
  bankInfo: BankInfo;
  subtotal: number;
  taxAmount: number;
};

// スタイル定義
const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  
  th, td {
    border: 1px solid #ccc;
    padding: 8px;
  }

  th {
    background-color: #f2f2f2;
  }
`;

// 請求書テーブルコンポーネント
const InvoiceTable: React.FC<Props> = ({ 
  representativeInfo,
  detailInfo,
  bankInfo,
  subtotal,
  taxAmount
}) => {
  return (
    <Table>
      <thead>
        <tr>
          <th>代表名称</th>
          <th>代表略称</th>
          <th>代表者名称</th>
          <th>代表先名称</th>
          <th>実払金額</th>
          <th>控除額</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{representativeInfo.code}</td>
          <td>{representativeInfo.name}</td>
          <td>{representativeInfo.kana}</td>
          <td>{representativeInfo.name}</td>
          <td>{subtotal}</td>
          <td>{taxAmount}</td>
        </tr>
      </tbody>
      <thead>
        <tr>
          <th>明細コード</th>  
          <th>明細名称</th>
          <th>単価</th>
          <th>数量</th>
          <th>金額</th>
          <th>税率</th>
        </tr>
      </thead>
      <tbody>
        {detailInfo.map((detail, index) => (
          <tr key={index}>
            <td>{detail.code}</td>
            <td>{detail.name}</td>
            <td>{detail.unitPrice}</td>
            <td>{detail.quantity}</td>
            <td>{detail.price}</td>
            <td>{detail.taxRate}</td>
          </tr>
        ))}
      </tbody>
      <tfoot>
        <tr>
          <th colSpan={4}>値引き・割引</th>
          <td>{subtotal}</td>
          <td>{taxAmount}</td>
        </tr>  
      </tfoot>
      <tbody>
        <tr>
          <td colSpan={2}>
            <strong>振込先情報</strong><br />
            銀行コード: {bankInfo.bankCode}<br /> 
            銀行名: {bankInfo.bankName}<br />
            支店コード: {bankInfo.branchCode}<br />
            支店名: {bankInfo.branchName}<br />
            科目: {bankInfo.accountType}<br />
            口座番号: {bankInfo.accountNumber}
          </td>
          <td colSpan={2}>
            <strong>支払金額</strong><br />
            小計: {subtotal}<br />
            消費税等: {taxAmount}<br />  
          </td>
          <th>支払金額</th>
          <th>{subtotal + taxAmount}</th>
        </tr>
      </tbody>
    </Table>
  );
};

// サンプルデータ
const sampleData = {
  representativeInfo: {
    code: '0000000001',
    name: 'ぎょうせい',
    kana: 'ギョウセイ'
  },
  detailInfo: [
    {
      code: '0000000001',
      name: 'ぎょうせい',
      unitPrice: 39900, 
      quantity: 100,
      price: 39900,
      taxRate: 10
    },
    {
      code: '0000000002', 
      name: 'ぎょうせい市資金前渡',
      unitPrice: 5000,
      quantity: 0, 
      price: 5000,
      taxRate: 0
    }
  ],
  bankInfo: {
    bankCode: '0009896',
    bankName: '当座預金',
    branchCode: '本店',     
    branchName: '丸の内中央支店',
    accountType: '001',
    accountNumber: 'みずほ銀行'
  },
  subtotal: 44800,
  taxAmount: 100
};

// 使用例
const InvoiceSample = () => {
  return (
    <InvoiceTable
      representativeInfo={sampleData.representativeInfo} 
      detailInfo={sampleData.detailInfo}
      bankInfo={sampleData.bankInfo}
      subtotal={sampleData.subtotal}
      taxAmount={sampleData.taxAmount}
    />
  );  
};

export default InvoiceSample;