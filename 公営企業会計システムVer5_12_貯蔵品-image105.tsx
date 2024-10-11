import React from 'react';
import styled from 'styled-components';

// 商品の型定義
type Product = {
  id: number;
  name: string;
  price: number;
};

// コンポーネントのプロパティの型定義
type ProductListProps = {
  products: Product[];
};

// 商品リストのコンポーネント
const ProductList: React.FC<ProductListProps> = ({ products }) => {
  // 商品リストが空の場合の処理
  if (products.length === 0) {
    return <EmptyMessage>商品がありません。</EmptyMessage>;
  }

  return (
    <List>
      {products.map((product) => (
        <ListItem key={product.id}>
          <ProductName>{product.name}</ProductName>
          <ProductPrice>￥{product.price.toLocaleString()}</ProductPrice>
        </ListItem>
      ))}
    </List>
  );
};

// スタイリング
const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px;
  border-bottom: 1px solid #ccc;

  &:last-child {
    border-bottom: none;
  }
`;

const ProductName = styled.span`
  font-size: 16px;
`;

const ProductPrice = styled.span`
  font-size: 14px;
  color: #666;
`;

const EmptyMessage = styled.p`
  text-align: center;
  color: #999;
`;

// サンプルデータ
const sampleProducts: Product[] = [
  { id: 1, name: '大分柿', price: 3000 },
  { id: 2, name: '小分柿', price: 2500 },
  { id: 3, name: '中分柿', price: 2800 },
  { id: 4, name: '小分柿　化粧箱', price: 3800 },
];

// 使用例
const App: React.FC = () => {
  return (
    <div>
      <h1>単価コード貼意</h1>
      <h2>品番対応表</h2>
      <ProductList products={sampleProducts} />
    </div>
  );
};

export default App;