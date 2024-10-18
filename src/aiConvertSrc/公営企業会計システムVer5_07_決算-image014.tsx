import React, { useState } from 'react';
import styled from '@emotion/styled';

interface FormData {
  executionDate: string;
  itemCode: string;
  size: 'A4' | 'A4 縦';
  paper: '税抜' | '税込';
  outputTitle: string;
  outputSubtitle: string;
  includeSignature: boolean;
  includeStamp: boolean;
  pageNumber: number;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 500px;
  margin: 0 auto;
  padding: 2rem;
  background-color: #f0f0f0;
  border-radius: 8px;
`;

const Row = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
`;

const Label = styled.label`
  flex: 1;
`;

const Input = styled.input`
  flex: 2;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Select = styled.select`
  flex: 2;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Checkbox = styled.input`
  margin-right: 0.5rem;
`;

const Button = styled.button`
  padding: 0.5rem 1rem;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background-color: #0056b3;
  }
`;

const CollectionForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    executionDate: '',
    itemCode: '',
    size: 'A4',
    paper: '税抜',
    outputTitle: '収入-03',
    outputSubtitle: '支出-04',
    includeSignature: true,
    includeStamp: false,
    pageNumber: 1,
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = event.target;
    setFormData({ ...formData, [name]: checked });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(formData);
    // Perform form submission or other actions here
  };

  return (
    <Container>
      <h2>資本的収支明細書作成</h2>
      <form onSubmit={handleSubmit}>
        <Row>
          <Label>会計期間</Label>
          <Input
            type="text"
            name="executionDate"
            value={formData.executionDate}
            onChange={handleInputChange}
            placeholder="平成30年04月01日 ～ 平成31年03月31日"
          />
        </Row>
        <Row>
          <Label>予算科目</Label>
          <Input
            type="text"
            name="itemCode"
            value={formData.itemCode}
            onChange={handleInputChange}
            placeholder="000000000 ～ 999999999"
          />
        </Row>
        <Row>
          <Label>サイズ</Label>
          <Select name="size" value={formData.size} onChange={handleSelectChange}>
            <option value="A4">A4 横</option>
            <option value="A4 縦">A4 縦</option>
          </Select>
        </Row>
        <Row>
          <Label>金額</Label>
          <Select name="paper" value={formData.paper} onChange={handleSelectChange}>
            <option value="税抜">税抜</option>
            <option value="税込">税込</option>
          </Select>
        </Row>
        <Row>
          <Label>収入サブタイトル</Label>
          <Input
            type="text"
            name="outputTitle"
            value={formData.outputTitle}
            onChange={handleInputChange}
          />
        </Row>
        <Row>
          <Label>支出サブタイトル</Label>
          <Input
            type="text"
            name="outputSubtitle"
            value={formData.outputSubtitle}
            onChange={handleInputChange}
          />
        </Row>
        <Row>
          <Label>
            <Checkbox
              type="checkbox"
              name="includeSignature"
              checked={formData.includeSignature}
              onChange={handleCheckboxChange}
            />
            直印字
          </Label>
        </Row>
        <Row>
          <Label>
            <Checkbox
              type="checkbox"
              name="includeStamp"
              checked={formData.includeStamp}
              onChange={handleCheckboxChange}
            />
            合計印字
          </Label>
        </Row>
        <Row>
          <Label>開始頁</Label>
          <Input
            type="number"
            name="pageNumber"
            value={formData.pageNumber}
            onChange={handleInputChange}
          />
        </Row>
        <Button type="submit">OK</Button>
      </form>
    </Container>
  );
};

export default CollectionForm;

// Sample usage
const App: React.FC = () => {
  return (
    <div>
      <h1>Collection Form Example</h1>
      <CollectionForm />
    </div>
  );
};