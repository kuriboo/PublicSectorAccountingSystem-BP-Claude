import React from 'react';
import styled from 'styled-components';

// 特定課税仕入伝票管理入力フォームのプロパティ型定義
type TaxInputFormProps = {
  onSubmit: (data: TaxInputFormData) => void;
};

// 特定課税仕入伝票管理入力フォームのデータ型定義
type TaxInputFormData = {
  date: string;
  endDate: string;
  orderNumber: string;
  supplierCode: string;
  departmentCode: string;
  productCode: string;
  quantity: number;
  unitPrice: number;
  taxRate: number;
  memo: string;
};

// 特定課税仕入伝票管理入力フォームのコンポーネント
const TaxInputForm: React.FC<TaxInputFormProps> = ({ onSubmit }) => {
  // 状態管理用のstate
  const [formData, setFormData] = React.useState<TaxInputFormData>({
    date: '',
    endDate: '',
    orderNumber: '',
    supplierCode: '',
    departmentCode: '',
    productCode: '',
    quantity: 0,
    unitPrice: 0,
    taxRate: 0,
    memo: '',
  });

  // フォームの入力値が変更された時のハンドラ
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  // フォームが送信された時のハンドラ 
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit(formData);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Row>
        <label>
          伝票日付
          <input type="date" name="date" value={formData.date} onChange={handleChange} required />
        </label>
        <label>
          伝票番号
          <input type="text" name="orderNumber" value={formData.orderNumber} onChange={handleChange} required />
        </label>
      </Row>
      <Row>
        <label>
          検索期間
          <input type="date" name="date" value={formData.date} onChange={handleChange} />
          〜
          <input type="date" name="endDate" value={formData.endDate} onChange={handleChange} />
        </label>
      </Row>
      <Row>
        <label>
          仕入先
          <input type="text" name="supplierCode" value={formData.supplierCode} onChange={handleChange} required />
        </label>
      </Row>
      <Row>
        <label>
          部門
          <input type="text" name="departmentCode" value={formData.departmentCode} onChange={handleChange} required />
        </label>
      </Row>
      <Row>
        <label>
          商品
          <input type="text" name="productCode" value={formData.productCode} onChange={handleChange} required />
        </label>
        <label>
          数量
          <input type="number" name="quantity" value={formData.quantity} onChange={handleChange} required min="0" />
        </label>
        <label>
          単価  
          <input type="number" name="unitPrice" value={formData.unitPrice} onChange={handleChange} required min="0" />
        </label>
        <label>
          税率
          <input type="number" name="taxRate" value={formData.taxRate} onChange={handleChange} required min="0" max="100" />
          %
        </label>
      </Row>
      <Row>
        <label>
          摘要
          <input type="text" name="memo" value={formData.memo} onChange={handleChange} />
        </label>
      </Row>
      <Row>
        <button type="submit">登録</button>
        <button type="reset">クリア</button>
      </Row>
    </Form>
  );
};

// スタイリング
const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const Row = styled.div`
  display: flex;
  gap: 16px;
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

// サンプルデータ
const sampleData: TaxInputFormData = {
  date: '2019-03-27',
  endDate: '2019-03-27', 
  orderNumber: '999999',
  supplierCode: '10000000',
  departmentCode: '451',
  productCode: 'ABC123',
  quantity: 10,
  unitPrice: 1000,
  taxRate: 10,
  memo: 'サンプル',
};

// 使用例
const TaxInputFormExample: React.FC = () => {
  const handleSubmit = (data: TaxInputFormData) => {
    console.log(data);
  };

  return <TaxInputForm onSubmit={handleSubmit} />;
};

export default TaxInputForm;