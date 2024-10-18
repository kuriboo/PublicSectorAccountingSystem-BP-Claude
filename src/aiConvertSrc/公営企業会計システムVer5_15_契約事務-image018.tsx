import React from 'react';
import styled from '@emotion/styled';

type ProductData = {
  name: string;
  price: number;
};

type SalesFormProps = {
  productData: ProductData;
  onSave: (data: ProductData) => void;
  onCancel: () => void;
};

const SalesForm: React.FC<SalesFormProps> = ({ productData, onSave, onCancel }) => {
  const [formData, setFormData] = React.useState<ProductData>(productData);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Label>
        商品名
        <Input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </Label>
      <Label>
        単価
        <Input
          type="number"
          name="price"
          value={formData.price}
          onChange={handleChange}
          required
        />
      </Label>
      <ButtonContainer>
        <Button type="submit">保存</Button>
        <Button type="button" onClick={onCancel}>
          キャンセル
        </Button>
      </ButtonContainer>
    </Form>
  );
};

// サンプル表示用コンポーネント
const SampleUsage: React.FC = () => {
  const [productData, setProductData] = React.useState<ProductData>({
    name: 'サンプル商品',
    price: 1000,
  });

  const handleSave = (data: ProductData) => {
    // 保存処理
    console.log('保存:', data);
    setProductData(data);
  };

  const handleCancel = () => {
    // キャンセル処理
    console.log('キャンセル');
  };

  return (
    <div>
      <h2>商品情報</h2>
      <p>商品名: {productData.name}</p>
      <p>単価: {productData.price}</p>
      <SalesForm
        productData={productData}
        onSave={handleSave}
        onCancel={handleCancel}
      />
    </div>
  );
};

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
  max-width: 300px;
  margin: 0 auto;
`;

const Label = styled.label`
  display: flex;
  flex-direction: column;
  font-weight: bold;
`;

const Input = styled.input`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 8px;
`;

const Button = styled.button`
  padding: 8px 16px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

export default SalesForm;