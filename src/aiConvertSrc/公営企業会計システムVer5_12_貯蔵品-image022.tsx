import React from 'react';
import styled from 'styled-components';

// 商品詳細情報の型定義
type ProductDetailProps = {
  productCode: string;
  productName: string;
  specification: string;
  quantity: number;
  price: number;
  tax: number;
  taxIncludedPrice: number;
  orderDate: string;
  unit: string;
  purchasePrice: number;
  taxRate: number;
  totalAmount: number;
};

// 表のセル共通スタイル
const TableCell = styled.td`
  padding: 8px;
  border: 1px solid #ccc;
`;

// 商品詳細情報コンポーネント
const ProductDetail: React.FC<ProductDetailProps> = ({
  productCode,
  productName,
  specification,
  quantity,
  price,
  tax,
  taxIncludedPrice,
  orderDate,
  unit,
  purchasePrice,
  taxRate,
  totalAmount,
}) => {
  return (
    <table>
      <tbody>
        <tr>
          <TableCell>品番</TableCell>
          <TableCell>{productCode}</TableCell>
        </tr>
        <tr>
          <TableCell>品名</TableCell>
          <TableCell>{productName}</TableCell>
        </tr>
        <tr>
          <TableCell>規格</TableCell>
          <TableCell>{specification}</TableCell>
        </tr>
        <tr>
          <TableCell>評価方法区分</TableCell>
          <TableCell>1 先入先出</TableCell>
        </tr>
        <tr>
          <TableCell>入庫日</TableCell>
          <TableCell>数量</TableCell>
          <TableCell>単価</TableCell>
          <TableCell>入庫年度</TableCell>
          <TableCell>入庫番号</TableCell>
        </tr>
        <tr>
          <TableCell>{orderDate}</TableCell>
          <TableCell>{quantity.toFixed(2)}</TableCell>
          <TableCell>{price.toFixed(2)}</TableCell>
          <TableCell>2017</TableCell>
          <TableCell>60</TableCell>
        </tr>
        <tr>
          <TableCell>出庫対象入庫日 平成29年08月15日</TableCell>
        </tr>
        <tr>
          <TableCell>数量</TableCell>
          <TableCell>{quantity.toFixed(2)}</TableCell>
        </tr>
        <tr>
          <TableCell>単価</TableCell>
          <TableCell>{price.toFixed(2)}</TableCell>
        </tr>
        <tr>
          <TableCell>税抜単価</TableCell>  
          <TableCell>{purchasePrice.toFixed(2)}</TableCell>
        </tr>
        <tr>
          <TableCell>金額</TableCell>
          <TableCell>{totalAmount.toFixed(2)}</TableCell>
        </tr>
        <tr>
          <TableCell>現在庫数</TableCell>
          <TableCell>{quantity.toFixed(2)}</TableCell>
        </tr>
      </tbody>
    </table>
  );
};

// サンプルデータ
const sampleData: ProductDetailProps = {
  productCode: '0000999000',
  productName: 'DIF(AT)精錬管',
  specification: 'φ75',
  quantity: 100.00,
  price: 100.00,
  tax: 10.00,
  taxIncludedPrice: 130.00,
  orderDate: '2017/09/15',
  unit: '本',
  purchasePrice: 1.00,
  taxRate: 1.00,
  totalAmount: 100.00,
};

// 使用例
const App: React.FC = () => {
  return (
    <div>
      <h1>商品詳細情報</h1>
      <ProductDetail {...sampleData} />
    </div>
  );
};

export default App;