import React from 'react';
import styled from '@emotion/styled';

interface Order {
  id: string;
  name: string;
  price: number;
  quantity: number;
  unit: string;
  date: string;
  total: number;
}

interface OrderFormProps {
  onSubmit: (order: Order) => void;
}

const OrderForm: React.FC<OrderFormProps> = ({ onSubmit }) => {
  const [order, setOrder] = React.useState<Order>({
    id: '',
    name: '',
    price: 0,
    quantity: 0,
    unit: '',
    date: '',
    total: 0,
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setOrder((prevOrder) => ({
      ...prevOrder,
      [name]: value,
    }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit(order);
    // Reset form fields after submission
    setOrder({
      id: '',
      name: '',
      price: 0,
      quantity: 0,
      unit: '',
      date: '',
      total: 0,
    });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Title>出庫予定入力</Title>
      <Input
        type="text"
        name="id"
        value={order.id}
        onChange={handleChange}
        placeholder="品番"
      />
      <Input
        type="text"
        name="name"
        value={order.name}
        onChange={handleChange}
        placeholder="品名"
      />
      <Input
        type="number"
        name="price"
        value={order.price}
        onChange={handleChange}
        placeholder="単価"
      />
      <Input
        type="number"
        name="quantity"
        value={order.quantity}
        onChange={handleChange}
        placeholder="数量"
      />
      <Input
        type="text"
        name="unit"
        value={order.unit}
        onChange={handleChange}
        placeholder="単位"
      />
      <Input
        type="date"
        name="date"
        value={order.date}
        onChange={handleChange}
        placeholder="出庫予定日"
      />
      <Input
        type="number"
        name="total"
        value={order.total}
        onChange={handleChange}
        placeholder="金額合計"
      />
      <Button type="submit">行追加</Button>
      <Button type="button">明細削除</Button>
    </Form>
  );
};

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Title = styled.h2`
  margin: 0;
  font-size: 18px;
`;

const Input = styled.input`
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 3px;
`;

const Button = styled.button`
  padding: 5px 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 3px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

// Sample usage
const App: React.FC = () => {
  const handleSubmit = (order: Order) => {
    console.log('Submitted order:', order);
  };

  return (
    <div>
      <h1>Order Form</h1>
      <OrderForm onSubmit={handleSubmit} />
    </div>
  );
};

export default App;