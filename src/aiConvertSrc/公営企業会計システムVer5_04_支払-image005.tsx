import React from 'react';

import { useState } from 'react';
import styled from '@emotion/styled';

type TaxWithholdingFormProps = {
  onSubmit: (data: TaxWithholdingFormData) => void;
};

type TaxWithholdingFormData = {
  taxType: string;
  startDate: string;
  endDate: string;
  taxAmount: number;
  taxRate: number;
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 100%;
  max-width: 400px;
  margin: 0 auto;

  @media (max-width: 480px) {
    padding: 10px;
  }
`;

const FormGroup = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;

const Label = styled.label`
  flex: 1;
  text-align: right;
`;

const Input = styled.input`
  flex: 2;
  padding: 4px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const RadioGroup = styled.div`
  display: flex;
  gap: 10px;
`;

const Button = styled.button`
  padding: 8px 16px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  align-self: flex-end;

  &:hover {
    background-color: #0056b3;
  }
`;

const TaxWithholdingForm: React.FC<TaxWithholdingFormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = useState<TaxWithholdingFormData>({
    taxType: '所得税',
    startDate: '',
    endDate: '',
    taxAmount: 0,
    taxRate: 0,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <Container>
      <FormGroup>
        <Label>税金種類</Label>
        <RadioGroup>
          <label>
            <input
              type="radio"
              name="taxType"
              value="所得税"
              checked={formData.taxType === '所得税'}
              onChange={handleChange}
            />
            所得税
          </label>
          <label>
            <input
              type="radio"
              name="taxType"
              value="住民税"
              checked={formData.taxType === '住民税'}
              onChange={handleChange}
            />
            住民税
          </label>
        </RadioGroup>
      </FormGroup>
      <FormGroup>
        <Label>適用開始日</Label>
        <Input
          type="text"
          name="startDate"
          value={formData.startDate}
          onChange={handleChange}
        />
      </FormGroup>
      <FormGroup>
        <Label>単位</Label>
        <Input type="text" disabled value="円" />
      </FormGroup>
      <FormGroup>
        <Label>税額</Label>
        <Input
          type="number"
          name="taxAmount"
          value={formData.taxAmount}
          onChange={handleChange}
        />
      </FormGroup>
      <FormGroup>
        <Label>税率</Label>
        <Input
          type="number"
          name="taxRate"
          value={formData.taxRate}
          onChange={handleChange}
        />
      </FormGroup>
      <Button onClick={handleSubmit}>OK</Button>
    </Container>
  );
};

// 使用例
const App = () => {
  const handleSubmit = (data: TaxWithholdingFormData) => {
    console.log(data);
    // フォームデータの送信処理など
  };

  return (
    <div>
      <h1>源泉税入力フォーム</h1>
      <TaxWithholdingForm onSubmit={handleSubmit} />
    </div>
  );
};

export default App;