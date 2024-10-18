import React from 'react';
import styled from 'styled-components';

interface ProductionAccountingFormProps {
  workDate: string;
  departmentCode: string;
  departmentName: string;
  productCode: string;
  productName: string;
  expirationDate: string;
}

const Container = styled.div`
  background-color: #f0f0f0;
  padding: 20px;
  border-radius: 5px;
`;

const Title = styled.h2`
  font-size: 18px;
  margin-bottom: 20px;
`;

const FormGroup = styled.div`
  margin-bottom: 15px;
`;

const Label = styled.label`
  display: block;
  font-weight: bold;
  margin-bottom: 5px;
`;

const Input = styled.input`
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const ProductionAccountingForm: React.FC<ProductionAccountingFormProps> = ({
  workDate,
  departmentCode,
  departmentName,
  productCode,
  productName,
  expirationDate,
}) => {
  return (
    <Container>
      <Title>土地資産合帳作成</Title>
      <FormGroup>
        <Label>作業年月日</Label>
        <Input type="text" value={workDate} readOnly />
      </FormGroup>
      <FormGroup>
        <Label>範囲指定</Label>
        <Input type="text" value={departmentCode} readOnly />
        <span> 〜 </span>
        <Input type="text" value={departmentName} readOnly />
      </FormGroup>
      <FormGroup>
        <Label>資産番号</Label>
        <Input type="text" value={productCode} readOnly />
        <span> 〜 </span>
        <Input type="text" value={productName} readOnly />
      </FormGroup>
      <FormGroup>
        <Label>取得年月日</Label>
        <Input type="text" value={expirationDate} readOnly />
        <span> 〜 </span>
        <Input type="text" value={expirationDate} readOnly />
      </FormGroup>
    </Container>
  );
};

// サンプルデータを用いた使用例
const SampleData: ProductionAccountingFormProps = {
  workDate: '平成29年09月11日',
  departmentCode: '000000000',
  departmentName: '999999999',
  productCode: '0',
  productName: '9999999999',
  expirationDate: '平成29年04月01日',
};

const App: React.FC = () => {
  return (
    <div>
      <h1>土地資産合帳作成フォーム</h1>
      <ProductionAccountingForm {...SampleData} />
    </div>
  );
};

export default App;