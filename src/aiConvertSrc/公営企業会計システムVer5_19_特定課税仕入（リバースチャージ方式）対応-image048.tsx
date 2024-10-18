import React from 'react';
import styled from 'styled-components';

// 支払伝票コンポーネントの型定義
type PaymentSlipProps = {
  fiscalYear: number;
  slipNumber: number;
  date: string;
  payee: string;
  address: string;
  accountTitle1: string;
  accountTitle2: string;
  accountAmount1: number;
  accountAmount2: number;
  totalAmount: number;
  remarks: string;
};

// スタイル定義
const SlipContainer = styled.div`
  width: 100%;
  border: 1px solid #000;
  padding: 10px;
  box-sizing: border-box;
  font-family: sans-serif;
`;

const SlipHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;

const SlipTitle = styled.h2`
  margin: 0;
`;

const FiscalYear = styled.span`
  margin-left: 20px;
`;

const SlipNumber = styled.span`
  margin-left: auto;
`;

const SlipTable = styled.table`
  width: 100%;
  border-collapse: collapse;

  th, td {
    border: 1px solid #000;
    padding: 5px;
    text-align: center;
  }

  th {
    background-color: #eee;
  }
`;

const AmountCell = styled.td`
  text-align: right;
`;

const TotalAmount = styled.td`
  text-align: right;
  font-weight: bold;
`;

// 支払伝票コンポーネント
const PaymentSlip: React.FC<PaymentSlipProps> = ({
  fiscalYear,
  slipNumber,
  date,
  payee,
  address,
  accountTitle1,
  accountTitle2,
  accountAmount1,
  accountAmount2,
  totalAmount,
  remarks,
}) => {
  // 例外処理
  if (!fiscalYear || !slipNumber) {
    return <div>伝票番号と年度は必須です。</div>;
  }

  return (
    <SlipContainer>
      <SlipHeader>
        <SlipTitle>支払伝票（単票）</SlipTitle>
        <div>
          <FiscalYear>年度 {fiscalYear}</FiscalYear>
          <SlipNumber>伝票No {slipNumber}</SlipNumber>
        </div>
      </SlipHeader>

      <SlipTable>
        <thead>
          <tr>
            <th>年月日</th>
            <th>支払先</th>
            <th colSpan={4}>支払科目</th>
            <th>経費負担</th>
            <th>備考</th>
            <th>起案者</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td rowSpan={3}>{date}</td>
            <td rowSpan={3}>{payee}</td>
            <td>{accountTitle1}</td>
            <AmountCell>{accountAmount1.toLocaleString()}円</AmountCell>
            <td rowSpan={3}></td>
            <td rowSpan={3}>{remarks}</td>
            <td rowSpan={5}></td>
          </tr>
          <tr>
            <td>{accountTitle2}</td>
            <AmountCell>{accountAmount2.toLocaleString()}円</AmountCell>
          </tr>
          <tr>
            <td colSpan={2}></td>
          </tr>
          <tr>
            <td colSpan={2}>住所</td>
            <td colSpan={2}>{address}</td>
            <td>金額</td>
          </tr>
          <tr>
            <td colSpan={4}></td>
            <TotalAmount>{totalAmount.toLocaleString()}円</TotalAmount>
          </tr>
        </tbody>
      </SlipTable>
    </SlipContainer>
  );
};

export default PaymentSlip;

// 使用例
const App: React.FC = () => {
  return (
    <PaymentSlip
      fiscalYear={27}
      slipNumber={451}
      date="平成28年3月27日"
      payee="鈴木商店"
      address="東京都新宿区XX町X-X"
      accountTitle1="交際費"
      accountTitle2="研究開発費"
      accountAmount1={1000000}
      accountAmount2={1000000}
      totalAmount={2000000}
      remarks=""
    />
  );
};