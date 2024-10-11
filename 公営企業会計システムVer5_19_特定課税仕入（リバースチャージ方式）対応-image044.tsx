import React from 'react';
import styled from '@emotion/styled';

interface FormData {
  [key: string]: string | number | boolean;
}

interface Props {
  formData: FormData;
  onSubmit: (data: FormData) => void;
}

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #f5f5f5;

  @media (min-width: 768px) {
    max-width: 500px;
    margin: 0 auto;
  }
`;

const Label = styled.label`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Input = styled.input`
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 3px;
`;

const Select = styled.select`
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 3px;
`;

const Button = styled.button`
  padding: 10px;
  border: none;
  border-radius: 5px;
  background-color: #007bff;
  color: #fff;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const MyForm: React.FC<Props> = ({ formData, onSubmit }) => {
  // フォームの状態を管理
  const [data, setData] = React.useState<FormData>(formData);

  // フォームの入力値が変更された時の処理
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === 'checkbox' ? checked : value;
    setData(prevData => ({ ...prevData, [name]: newValue }));
  };

  // フォームが送信された時の処理
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(data);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Label>
        税区分:
        <Select name="taxType" value={data.taxType as string} onChange={handleChange}>
          <option value="課税1">課税1</option>
          <option value="非課税">非課税</option>
        </Select>
      </Label>

      <Label>
        消費税:
        <Input type="number" name="taxRate" value={data.taxRate as number} onChange={handleChange} /> %
      </Label>

      <Label>
        源泉区分:
        <Select name="withholdingTaxType" value={data.withholdingTaxType as string} onChange={handleChange}>
          <option value=""></option>
          <option value="65">65</option>
        </Select>  
      </Label>

      <Label>
        監督区分:
        <Select name="supervisionType" value={data.supervisionType as string} onChange={handleChange}>
          <option value="2">2 臨常</option>
        </Select>
      </Label>

      <Label>
        *機械加減:
        <Input type="text" name="machineryAdjustment" value={data.machineryAdjustment as string} onChange={handleChange} />
      </Label>

      <Label>
        *対象手加:
        <Input type="text" name="targetAdjustment" value={data.targetAdjustment as string} onChange={handleChange} />
      </Label>

      <Label>
        単価性質:
        <Input type="text" name="unitPriceNature" value={data.unitPriceNature as string} onChange={handleChange} />
      </Label>

      <Label>
        予算:
        <Input type="text" name="budget" value={data.budget as string} onChange={handleChange} />
      </Label>

      <Label>
        積算基礎:
        <Input type="checkbox" name="estimateBasis" checked={data.estimateBasis as boolean} onChange={handleChange} />
        税込
        <Input type="checkbox" name="estimateBasis" checked={data.estimateBasis as boolean} onChange={handleChange} />
        税込
      </Label>

      <Button type="submit">事業科目</Button>
    </Form>
  );
};

// サンプルデータ
const sampleData: FormData = {
  taxType: '課税1',
  taxRate: 8,
  withholdingTaxType: '',
  supervisionType: '2',
  machineryAdjustment: '062050101/0001001',
  targetAdjustment: '062',
  unitPriceNature: '',
  budget: '',
  estimateBasis: false,
};

// 使用例
const App: React.FC = () => {
  const handleSubmit = (data: FormData) => {
    console.log(data);
  };

  return (
    <div>
      <h1>MyForm Component</h1>
      <MyForm formData={sampleData} onSubmit={handleSubmit} />
    </div>
  );
};

export default App;