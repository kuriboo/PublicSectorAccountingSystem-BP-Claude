import React from 'react';
import styled from '@emotion/styled';

// 商品の型定義
type Product = {
  name: string;
  price: number;
};

// コンポーネントのプロパティの型定義
type ProductItemProps = {
  product: Product;
};

// 商品アイテムのスタイル定義
const ProductItemWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 16px;
  border-bottom: 1px solid #ccc;

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const ProductName = styled.div`
  font-size: 18px;
  font-weight: bold;
  margin-right: 16px;

  @media (max-width: 600px) {
    margin-right: 0;
    margin-bottom: 8px;
  }
`;

const ProductPrice = styled.div`
  font-size: 16px;
  color: #888;
`;

/**
 * 商品アイテムコンポーネント
 * @param product 商品情報
 */
const ProductItem: React.FC<ProductItemProps> = ({ product }) => {
  // 商品情報が空の場合は何も表示しない
  if (!product) {
    return null;
  }

  return (
    <ProductItemWrapper>
      <ProductName>{product.name}</ProductName>
      <ProductPrice>￥{product.price}</ProductPrice>
    </ProductItemWrapper>
  );
};

// サンプルデータ
const sampleProducts: Product[] = [
  { name: '鰹節おろし', price: 190 },
  { name: '鰹ぶしおろし', price: 200 },
];

/**
 * 商品リストコンポーネント
 */
const ProductList: React.FC = () => {
  return (
    <div>
      {sampleProducts.map((product, index) => (
        <ProductItem key={index} product={product} />
      ))}
    </div>
  );
};

export default ProductList;