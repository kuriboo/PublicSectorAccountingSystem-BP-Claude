import React from 'react';
import styled from 'styled-components';

interface BusinessFormProps {
  fiscalYear: number;
  industry: string;
  scale: '格付' | '分類';
  output: '落札金額' | '最新契約金額';
  estimate: number;
  result: number;
  onSubmit: () => void;
  onCancel: () => void;
  onClear: () => void;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  font-family: "MS Gothic", monospace;
`;

const Title = styled.h2`
  margin-bottom: 20px;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  width: 100%;
`;

const Label = styled.label`
  margin-bottom: 5px;
`;

const Input = styled.input`
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Select = styled.select`
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 20px;
`;

const Button = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  background-color: #007bff;
  color: #fff;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const BusinessForm: React.FC<BusinessFormProps> = ({
  fiscalYear,
  industry,
  scale,
  output,
  estimate,
  result,
  onSubmit,
  onCancel,
  onClear,
}) => {
  return (
    <Container>
      <Title>業種別実績集計表</Title>
      <FormGroup>
        <Label>平成29</Label>
        <Input type="text" value={fiscalYear} readOnly />
      </FormGroup>
      <FormGroup>
        <Label>業種区分</Label>
        <Select value={industry}>
          <option value="工事">工事</option>
        </Select>
      </FormGroup>
      <FormGroup>
        <Label>集計区分</Label>
        <Select value={scale}>
          <option value="格付">格付</option>
          <option value="分類">分類</option>
        </Select>
      </FormGroup>
      <FormGroup>
        <Label>出力区分</Label>
        <Select value={output}>
          <option value="落札金額">落札金額</option>
          <option value="最新契約金額">最新契約金額</option>
        </Select>
      </FormGroup>
      <FormGroup>
        <Label>業種</Label>
        <Input type="number" value={estimate} readOnly />
      </FormGroup>
      <FormGroup>
        <Label>業種</Label>
        <Input type="number" value={result} readOnly />
      </FormGroup>
      <ButtonGroup>
        <Button onClick={onSubmit}>OK</Button>
        <Button onClick={onCancel}>クリア</Button>
        <Button onClick={onClear}>終了</Button>
      </ButtonGroup>
    </Container>
  );
};

// サンプルデータを用いた使用例
const SampleBusinessForm = () => {
  const handleSubmit = () => {
    // OKボタンがクリックされた時の処理
    console.log('Form submitted');
  };

  const handleCancel = () => {
    // クリアボタンがクリックされた時の処理 
    console.log('Form cancelled');
  };

  const handleClear = () => {
    // 終了ボタンがクリックされた時の処理
    console.log('Form cleared');
  };

  return (
    <BusinessForm
      fiscalYear={29}
      industry="工事"
      scale="格付"
      output="落札金額"
      estimate={100}
      result={999}
      onSubmit={handleSubmit}
      onCancel={handleCancel}
      onClear={handleClear}
    />
  );
};

export default SampleBusinessForm;