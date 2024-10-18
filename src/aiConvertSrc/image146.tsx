import React, { useState } from 'react';
import styled from 'styled-components';

// 検索条件の型定義
type SearchCondition = {
  fixed: string;
  name: string;
  date: string;
  level: '土地' | '有形固定資産' | '土地';
  amount: string;
  amountDetail: string;
  taxAmount: string;
  taxAmountDetail: string;
  searchText: string;
  searchType: '称レベル' | '項レベル' | '目レベル' | '節レベル' | '細節レベル' | '明細レベル';
};

// コンポーネントのプロパティの型定義
type FixedAssetSearchProps = {
  onSearch: (condition: SearchCondition) => void;
  onCancel: () => void;
};

// 固定資産検索コンポーネント
const FixedAssetSearch: React.FC<FixedAssetSearchProps> = ({ onSearch, onCancel }) => {
  // 検索条件の状態管理
  const [condition, setCondition] = useState<SearchCondition>({
    fixed: '',
    name: '',
    date: '',
    level: '土地',
    amount: '',
    amountDetail: '',
    taxAmount: '',
    taxAmountDetail: '',
    searchText: '',
    searchType: '称レベル',
  });

  // 検索条件の変更ハンドラ
  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = event.target;
    setCondition((prevCondition) => ({
      ...prevCondition,
      [name]: value,
    }));
  };

  // 検索ボタンのクリックハンドラ
  const handleSearch = () => {
    onSearch(condition);
  };

  return (
    <Container>
      <Title>固定資産科目検索</Title>
      <Form>
        <FormGroup>
          <Label>固定款</Label>
          <Input type="text" name="fixed" value={condition.fixed} onChange={handleChange} />
        </FormGroup>
        <FormGroup>
          <Label>固定項</Label>
          <Input type="text" name="name" value={condition.name} onChange={handleChange} />
        </FormGroup>
        <FormGroup>
          <Label>固定日</Label>
          <Input type="text" name="date" value={condition.date} onChange={handleChange} />
        </FormGroup>
        <FormGroup>
          <Label>固定節</Label>
          <Select name="level" value={condition.level} onChange={handleChange}>
            <option value="土地">土地</option>
            <option value="有形固定資産">有形固定資産</option>
            <option value="土地">土地</option>
          </Select>
        </FormGroup>
        <FormGroup>
          <Label>固定細節</Label>
          <Input type="text" name="amount" value={condition.amount} onChange={handleChange} />
        </FormGroup>
        <FormGroup>
          <Label>固定細節節</Label>
          <Input type="text" name="amountDetail" value={condition.amountDetail} onChange={handleChange} />
        </FormGroup>
        <FormGroup>
          <Label>固定明細</Label>
          <Input type="text" name="taxAmount" value={condition.taxAmount} onChange={handleChange} />
        </FormGroup>
        <FormGroup>
          <Label>固定明細節</Label>
          <Input type="text" name="taxAmountDetail" value={condition.taxAmountDetail} onChange={handleChange} />
        </FormGroup>
        <FormGroup>
          <Label>検索文字列</Label>
          <Input type="text" name="searchText" value={condition.searchText} onChange={handleChange} />
        </FormGroup>
        <FormGroup>
          <Label>検索</Label>
          <Select name="searchType" value={condition.searchType} onChange={handleChange}>
            <option value="称レベル">称レベル</option>
            <option value="項レベル">項レベル</option>
            <option value="目レベル">目レベル</option>
            <option value="節レベル">節レベル</option>
            <option value="細節レベル">細節レベル</option>
            <option value="明細レベル">明細レベル</option>
          </Select>
        </FormGroup>
        <ButtonGroup>
          <Button type="button" onClick={handleSearch}>表示</Button>
          <Button type="button" onClick={onCancel}>キャンセル</Button>
        </ButtonGroup>
      </Form>
      <ResultTable>
        <thead>
          <tr>
            <TableHeader>コード</TableHeader>
            <TableHeader>名称</TableHeader>
          </tr>
        </thead>
        <tbody>
          <TableRow>
            <TableCell>0610101001001001</TableCell>
            <TableCell>土地</TableCell>
          </TableRow>
        </tbody>
      </ResultTable>
    </Container>
  );
};

// サンプルデータ
const sampleData: SearchCondition = {
  fixed: '06',
  name: '01',
  date: '01',
  level: '土地',
  amount: '001',
  amountDetail: '土地',
  taxAmount: '001',
  taxAmountDetail: '土地',
  searchText: '',
  searchType: '称レベル',
};

// 使用例コンポーネント
const App: React.FC = () => {
  const handleSearch = (condition: SearchCondition) => {
    console.log('Search condition:', condition);
    // 検索処理を実装
  };

  const handleCancel = () => {
    console.log('Search canceled');
    // キャンセル処理を実装
  };

  return (
    <div>
      <h1>Fixed Asset Search Example</h1>
      <FixedAssetSearch onSearch={handleSearch} onCancel={handleCancel} />
    </div>
  );
};

// スタイリング
const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
`;

const Title = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
`;

const Form = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  font-weight: bold;
  margin-bottom: 5px;
`;

const Input = styled.input`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Select = styled.select`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
`;

const Button = styled.button`
  padding: 10px 20px;
  margin-left: 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const ResultTable = styled.table`
  width: 100%;
  margin-top: 20px;
  border-collapse: collapse;
`;

const TableHeader = styled.th`
  padding: 10px;
  background-color: #f2f2f2;
  font-weight: bold;
  text-align: left;
  border-bottom: 1px solid #ccc;
`;

const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f9f9f9;
  }
`;

const TableCell = styled.td`
  padding: 10px;
  border-bottom: 1px solid #ccc;
`;

export default FixedAssetSearch;