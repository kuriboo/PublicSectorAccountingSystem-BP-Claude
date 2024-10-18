import React from 'react';
import styled from '@emotion/styled';

type ProductInfo = {
  id: string;
  name: string;
  price: number;
  quantity: number;
  total: number;
}

type PaymentInfo = {
  subtotal: number;
  tax: number;
  total: number;
}

type OrderFormProps = {
  products: ProductInfo[];
  payment: PaymentInfo;
  date: string;
  onSubmit: () => void;
}

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f0f0f0;
  font-family: sans-serif;

  @media (max-width: 600px) {
    padding: 10px;
  }
`;

const Title = styled.h2`
  margin-bottom: 20px;
`;

const Section = styled.div`
  margin-bottom: 20px;
  padding: 10px;
  border: 1px solid #ccc;
`;

const SectionTitle = styled.h3`
  margin-bottom: 10px;
`;

const ProductTable = styled.table`
  width: 100%;
  border-collapse: collapse;

  th, td {
    padding: 5px;
    border: 1px solid #ccc;
    text-align: center;
  }

  th {
    background-color: #f0f0f0;
  }
`;

const TotalTable = styled.table`
  margin-top: 10px;

  td {
    padding: 5px;
  }
  
  td:first-of-type {
    text-align: right;
  }
`;

const SubmitButton = styled.button`
  padding: 10px;
  font-size: 1.1em;

  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }
`;

const OrderForm: React.FC<OrderFormProps> = ({ 
  products,
  payment,
  date,
  onSubmit
}) => {
  return (
    <Container>
      <Title>支出決定入力（物品・負担無）</Title>
      <Section>
        <div>決定処理日：{date}</div>
      </Section>
      
      <Section>
        <SectionTitle>支払先</SectionTitle>
        {/* 支払先の詳細情報 */}
      </Section>

      <Section>
        <SectionTitle>支払方法</SectionTitle>
        {/* 支払方法の選択 */}
      </Section>
      
      <Section>
        <SectionTitle>予算節</SectionTitle>
        <ProductTable>
          <thead>
            <tr>
              <th>予算節名</th>
              <th>金額</th>
              <th>消費税額</th>
              <th>合計</th>
            </tr>
          </thead>
          <tbody>
            {products.map(product => (
              <tr key={product.id}>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>{product.tax}</td>
                <td>{product.total}</td>
              </tr>
            ))}
          </tbody>
        </ProductTable>

        <TotalTable>
          <tbody>
            <tr>
              <td>合計決定額</td>  
              <td>{payment.subtotal}</td>
            </tr>
            <tr>
              <td>合計本体額</td>
              <td>{payment.subtotal - payment.tax}</td>
            </tr>
            <tr>  
              <td>合計消費税額</td>
              <td>{payment.tax}</td>
            </tr>
          </tbody>
        </TotalTable>
      </Section>

      <Section>
        <SubmitButton onClick={onSubmit}>振込先</SubmitButton>
      </Section>
    </Container>
  );
};

// Usage example
const sampleData = {
  products: [
    { id: '0001', name: '消耗品費', price: 10000, tax: 1000, total: 11000 }
  ],
  payment: {
    subtotal: 11000,
    tax: 1000, 
    total: 10000,
  },
  date: '令和04年12月18日',
};

const FormSample = () => {
  const handleSubmit = () => {
    // Submit logic here
    console.log('Submitted');
  };

  return <OrderForm {...sampleData} onSubmit={handleSubmit} />;  
};

export default FormSample;