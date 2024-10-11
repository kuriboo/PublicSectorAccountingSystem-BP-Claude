import React from 'react';
import styled from '@emotion/styled';

interface CompanyEntryFormProps {
  onSubmit: (data: CompanyEntryFormData) => void;
}

interface CompanyEntryFormData {
  date: string;
  accountingItem: string;
  accountCode: string;
  accountName: string;
  taxClass: string;
  amountIncludingTax: number;
  taxAmount: number;
  quantity: number;
  unitPrice: number;
  comment: string;
  workName: string;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-family: Arial, sans-serif;

  @media (max-width: 600px) {
    padding: 10px;
  }
`;

const Row = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const Label = styled.label`
  font-weight: bold;
`;

const Input = styled.input`
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 3px;
  width: 150px;

  @media (max-width: 600px) {
    width: 100%;
  }
`;

const Select = styled.select`
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 3px;
  width: 150px;

  @media (max-width: 600px) {
    width: 100%;
  }
`;

const TextArea = styled.textarea`
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 3px;
  width: 100%;
  height: 60px;
  resize: vertical;
`;

const Button = styled.button`
  padding: 8px 16px;
  background-color: #007BFF;
  color: #fff;
  border: none;
  border-radius: 3px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const CompanyEntryForm: React.FC<CompanyEntryFormProps> = ({ onSubmit }) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // フォームデータの取得・バリデーション・送信処理を実装
    const data: CompanyEntryFormData = {
      date: '2023-06-14',
      accountingItem: '仕入',
      accountCode: '9999999',
      accountName: 'テスト勘定科目',
      taxClass: '課税',
      amountIncludingTax: 2200,
      taxAmount: 200,
      quantity: 1,
      unitPrice: 2000,
      comment: '備考欄',
      workName: '工事名',
    };
    onSubmit(data);
  };

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <Row>
          <Label>入庫日</Label>
          <Input type="date" defaultValue="2023-06-14" />
        </Row>
        <Row>
          <Label>借方科目</Label>
          <Input type="text" defaultValue="000000" />
          <Input type="text" defaultValue="仕入" />
        </Row>
        <Row>
          <Label>貸方科目</Label>
          <Input type="text" defaultValue="341001" />
          <Input type="text" defaultValue="未払金（水道光熱費）" />
        </Row>
        <Row>
          <Label>税区分</Label>
          <Select>
            <option value="課税">課税</option>
            <option value="軽減">軽減</option>
            <option value="非課税">非課税</option>
          </Select>
          <Input type="number" step="0.01" defaultValue={2200} />
        </Row>
        <Row>
          <Label>数量</Label>
          <Input type="number" defaultValue={1} /> m
        </Row>
        <Row>
          <Label>単価</Label>
          <Input type="number" defaultValue={2000} />
        </Row>
        <Row>
          <Label>金額</Label>
          <Input type="number" defaultValue={2000} />
        </Row>
        <Row>
          <Label>消費税</Label>
          <Input type="number" defaultValue={200} />
        </Row>
        <Row>
          <Label>備考</Label>
          <TextArea defaultValue="備考欄" />
        </Row>
        <Row>
          <Label>工事名</Label>
          <Input type="text" defaultValue="工事名" />
        </Row>
        <Row>
          <Button type="submit">行削除</Button>
          <Button type="submit">OK</Button>
          <Button type="button">終了</Button>
        </Row>
      </form>
    </Container>
  );
};

// サンプル使用例
const App: React.FC = () => {
  const handleSubmit = (data: CompanyEntryFormData) => {
    console.log(data);
  };

  return (
    <div>
      <h1>未発注入庫入力</h1>
      <CompanyEntryForm onSubmit={handleSubmit} />
    </div>
  );
};

export default App;