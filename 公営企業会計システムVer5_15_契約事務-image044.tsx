import React from 'react';
import styled from 'styled-components';

// 予定価格算出基礎調書のプロパティの型定義
type PriceCalcSheetProps = {
  fiscalYear: number; // 年度
  receiptMethod: string; // 受付番号
  items: {
    yield: number; // 歩留率
    estimatedPrice: number; // 予定価格
    inputUnitPrice: number; // 入札書比較価格
  }[];
  totalAmount: number; // 設計金額(税込)
  totalAmountTax: number; // 設計金額(税抜)
  estimatedPrice: number; // 予定価格
  inputUnitPrice: number; // 入札書比較価格
};

// スタイルコンポーネント
const Wrapper = styled.div`
  font-size: 14px;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  th, td {
    border: 1px solid #ccc;
    padding: 8px;
    text-align: center;
  }
  th {
    background-color: #f0f0f0;
  }
`;

const ResultTable = styled.table`
  float: right;
  td {
    padding: 4px 8px;
  }
`;

// 予定価格算出基礎調書コンポーネント
const PriceCalcSheet: React.FC<PriceCalcSheetProps> = ({
  fiscalYear,
  receiptMethod,
  items,
  totalAmount,
  totalAmountTax,
  estimatedPrice,
  inputUnitPrice,
}) => {
  return (
    <Wrapper>
      <h2>予定価格算出基礎調書</h2>
      <p>
        平成{fiscalYear} 年度<br />
        受付番号 {receiptMethod}
      </p>
      <Table>
        <thead>
          <tr>
            <th>受付番号</th>
            <th>物件名</th>  
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{receiptMethod}</td>
            <td>月ケ手当寺</td>
          </tr>
        </tbody>
      </Table>
      <Table>
        <thead>
          <tr>
            <th>歩留率</th>
            <th>予定価格</th>
            <th>入札書比較価格</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => (
            <tr key={index}>
              <td>{item.yield}</td>
              <td>{item.estimatedPrice.toLocaleString()}</td>
              <td>{item.inputUnitPrice.toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      <ResultTable>
        <tbody>
          <tr>
            <td>設計金額(税込)</td>
            <td>{totalAmount.toLocaleString()}</td>
          </tr>
          <tr>
            <td>設計金額(税抜)</td>
            <td>{totalAmountTax.toLocaleString()}</td>
          </tr>
          <tr>
            <td>予定価格</td>
            <td>{estimatedPrice.toLocaleString()}</td>
          </tr>
          <tr>
            <td>入札書比較価格</td>
            <td>{inputUnitPrice.toLocaleString()}</td>
          </tr>
        </tbody>  
      </ResultTable>
    </Wrapper>
  );
};

export default PriceCalcSheet;

// 使用例
const sampleData: PriceCalcSheetProps = {
  fiscalYear: 29,
  receiptMethod: '42910009',
  items: [
    { yield: 99.5, estimatedPrice: 19901, inputUnitPrice: 18426 },
    { yield: 99.0, estimatedPrice: 19801, inputUnitPrice: 18334 },
    { yield: 98.5, estimatedPrice: 19701, inputUnitPrice: 18241 },
    { yield: 98.0, estimatedPrice: 19601, inputUnitPrice: 18149 },
    { yield: 97.5, estimatedPrice: 19501, inputUnitPrice: 18056 },
    { yield: 97.0, estimatedPrice: 19401, inputUnitPrice: 17963 },
    { yield: 96.5, estimatedPrice: 19301, inputUnitPrice: 17871 },
    { yield: 96.0, estimatedPrice: 19200, inputUnitPrice: 17778 },
    { yield: 95.5, estimatedPrice: 19100, inputUnitPrice: 17686 },
    { yield: 95.0, estimatedPrice: 19000, inputUnitPrice: 17593 },
  ],
  totalAmount: 20000,
  totalAmountTax: 18519, 
  estimatedPrice: 0,
  inputUnitPrice: 0,
};

const App: React.FC = () => {
  return (
    <div>
      <h1>予定価格算出基礎調書サンプル</h1>
      <PriceCalcSheet {...sampleData} />
    </div>
  );  
};