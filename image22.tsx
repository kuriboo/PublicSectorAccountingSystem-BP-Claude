```typescript
import React from 'react';
import styled from 'styled-components';

// 納入通知書の型定義
type DeliveryNoticeProps = {
  companyName: string;
  customerName: string;
  deliveryDate: string;
  productName: string;
  productCode: string;
  productSize: string;
  productQuantity: number;
  productUnitPrice: number;
  productTotalPrice: number;
  deliveryAddress: string;
  telephone: string;
};

// スタイル定義
const DeliveryNoticeWrapper = styled.div`
  font-family: Arial, sans-serif;
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #f9f9f9;
`;

const Header = styled.h2`
  text-align: center;
  margin-bottom: 20px;
`;

const InfoTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;

  th,
  td {
    border: 1px solid #ccc;
    padding: 10px;
    text-align: left;
  }

  th {
    background-color: #f0f0f0;
    font-weight: bold;
  }
`;

const ProductTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;

  th,
  td {
    border: 1px solid #ccc;
    padding: 10px;
    text-align: left;
  }

  th {
    background-color: #f0f0f0;
    font-weight: bold;
  }
`;

// 納入通知書コンポーネント
const DeliveryNotice: React.FC<DeliveryNoticeProps> = ({
  companyName,
  customerName,
  deliveryDate,
  productName,
  productCode,
  productSize,
  productQuantity,
  productUnitPrice,
  productTotalPrice,
  deliveryAddress,
  telephone,
}) => {
  return (
    <DeliveryNoticeWrapper>
      <Header>納入通知書</Header>
      <InfoTable>
        <tbody>
          <tr>
            <th>会社名</th>
            <td>{companyName}</td>
          </tr>
          <tr>
            <th>顧客名</th>
            <td>{customerName}</td>
          </tr>
          <tr>
            <th>納品日</th>
            <td>{deliveryDate}</td>
          </tr>
        </tbody>
      </InfoTable>
      <ProductTable>
        <thead>
          <tr>
            <th>商品名</th>
            <th>商品コード</th>
            <th>規格</th>
            <th>数量</th>
            <th>単価</th>
            <th>金額</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{productName}</td>
            <td>{productCode}</td>
            <td>{productSize}</td>
            <td>{productQuantity}</td>
            <td>{productUnitPrice.toLocaleString()}円</td>
            <td>{productTotalPrice.toLocaleString()}円</td>
          </tr>
        </tbody>
      </ProductTable>
      <p>納入場所: {deliveryAddress}</p>
      <p>電話番号: {telephone}</p>
    </DeliveryNoticeWrapper>
  );
};

// サンプルデータを使用した表示用コンポーネント
const SampleDeliveryNotice: React.FC = () => {
  const sampleData: DeliveryNoticeProps = {
    companyName: '千葉市中央区以下に掲載がない場合',
    customerName: '工事代理人情報',
    deliveryDate: '令和04年12月19日',
    productName: '割付分割区分台',
    productCode: '5678901234567890',
    productSize: '13mm',
    productQuantity: 1,
    productUnitPrice: 157600,
    productTotalPrice: 157600,
    deliveryAddress: '東西横断北中二番町四丁目7番地7',
    telephone: '555-5555',
  };

  return <DeliveryNotice {...sampleData} />;
};

export default SampleDeliveryNotice;