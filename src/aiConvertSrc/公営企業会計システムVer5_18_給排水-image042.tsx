```typescript
import React from 'react';
import styled from 'styled-components';

// 形状リストの型定義
type Shape = {
  id: number;
  name: string;
};

// プロパティの型定義
type Props = {
  shapes: Shape[];
  onShapeChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  onStatusChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: () => void;
  onCancel: () => void;
};

// スタイル定義
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  padding: 20px;
  background-color: #f0f0f0;
  border-radius: 5px;
  width: 100%;
  max-width: 400px;
  box-sizing: border-box;

  @media (max-width: 600px) {
    max-width: 100%;
  }
`;

const Row = styled.div`
  display: flex;
  gap: 10px;
  width: 100%;
`;

const Label = styled.div`
  width: 80px;
`;

const Input = styled.input`
  flex: 1;
`;

const Select = styled.select`
  flex: 1;
`;

const Button = styled.button`
  padding: 5px 10px;
`;

const FormDialog: React.FC<Props> = ({ shapes, onShapeChange, onStatusChange, onSubmit, onCancel }) => {
  return (
    <Container>
      <Row>
        <Label>納付分類</Label>
        <Select onChange={onShapeChange}>
          <option value="">選択...</option>
          {shapes.map((shape) => (
            <option key={shape.id} value={shape.id}>
              {shape.name}
            </option>
          ))}
        </Select>
        <Label>形状寸法リスト</Label>
        <Input type="text" onChange={onStatusChange} />
      </Row>
      <Row>
        <Label>単価</Label>
        <Input type="number" defaultValue={5000} />
        <Label>数量</Label>
        <Input type="number" defaultValue={1} />
        <Label>金額</Label>
        <div>5000</div>
      </Row>
      <Row>
        <Label>消費税率</Label>
        <Input type="number" defaultValue={8} />
        <Label>%</Label>
        <Label>消費税額</Label>
        <div>400</div>
      </Row>
      <Row>
        <Button onClick={onSubmit}>OK</Button>
        <Button onClick={onCancel}>クリア</Button>
        <Button onClick={onCancel}>キャンセル</Button>
      </Row>
    </Container>
  );
};

// サンプル利用コンポーネント
const SampleUsage: React.FC = () => {
  const sampleShapes: Shape[] = [
    { id: 1, name: '形状1' },
    { id: 2, name: '形状2' },
    { id: 3, name: '形状3' },
  ];

  const handleShapeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    console.log('Selected shape:', event.target.value);
  };

  const handleStatusChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log('Status:', event.target.value);
  };

  const handleSubmit = () => {
    console.log('Submitted');
  };

  const handleCancel = () => {
    console.log('Cancelled');
  };

  return (
    <FormDialog
      shapes={sampleShapes}
      onShapeChange={handleShapeChange}
      onStatusChange={handleStatusChange}
      onSubmit={handleSubmit}
      onCancel={handleCancel}
    />
  );
};

export default FormDialog;