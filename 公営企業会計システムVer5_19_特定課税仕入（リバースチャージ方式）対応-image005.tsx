import React from 'react';

import { useState } from 'react';
import styled from 'styled-components';

// 検索条件の型定義
interface SearchCondition {
  startDate: string;
  endDate: string;
  deductible: boolean;
  keyword: string;
}

// 検索結果の型定義
interface SearchResult {
  date: string;
  description: string;
  amount: number;
  balance: number;
  paidBy: string;
  category: string;
  subCategory: string;
  remarks: string;
}

// 検索フォームのスタイル定義
const SearchForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 20px;
  background-color: #f0f0f0;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
  }
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
  }
`;

const Label = styled.label`
  font-weight: bold;
`;

const Input = styled.input`
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 3px;
`;

const Checkbox = styled.input`
  margin-left: 5px;
`;

const Button = styled.button`
  padding: 5px 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 3px;
  cursor: pointer;
`;

// 検索結果テーブルのスタイル定義
const ResultTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
`;

const TableHeader = styled.th`
  padding: 10px;
  background-color: #f0f0f0;
  border: 1px solid #ccc;
`;

const TableData = styled.td`
  padding: 10px;
  border: 1px solid #ccc;
`;

// 特定課税仕入伝票管理入力コンポーネント
const TaxableInvoiceManagement: React.FC = () => {
  const [searchCondition, setSearchCondition] = useState<SearchCondition>({
    startDate: '',
    endDate: '',
    deductible: false,
    keyword: '',
  });
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);

  // 検索条件の変更処理
  const handleSearchConditionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = event.target;
    setSearchCondition((prevCondition) => ({
      ...prevCondition,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  // 検索処理（ダミー）
  const handleSearch = () => {
    // ここで実際の検索処理を行う
    // 今回はダミーデータを設定
    const dummyResults: SearchResult[] = [
      {
        date: '2016/03/27',
        description: '振替手形',
        amount: 80000,
        balance: 90000,
        paidBy: '振替',
        category: '',
        subCategory: '',
        remarks: '',
      },
      // 他の検索結果データを追加
    ];
    setSearchResults(dummyResults);
  };

  return (
    <div>
      <h2>特定課税仕入伝票管理入力</h2>
      <SearchForm>
        <FormGroup>
          <Label>検索</Label>
          <Input
            type="date"
            name="startDate"
            value={searchCondition.startDate}
            onChange={handleSearchConditionChange}
          />
          <span>～</span>
          <Input
            type="date"
            name="endDate"
            value={searchCondition.endDate}
            onChange={handleSearchConditionChange}
          />
          <Checkbox
            type="checkbox"
            name="deductible"
            checked={searchCondition.deductible}
            onChange={handleSearchConditionChange}
          />
          <Label>課税の支出予算科目から税額中の伝票のみ抽出</Label>
        </FormGroup>
        <FormGroup>
          <Label>検索</Label>
          <Input
            type="text"
            name="keyword"
            value={searchCondition.keyword}
            onChange={handleSearchConditionChange}
          />
        </FormGroup>
        <Button type="button" onClick={handleSearch}>
          検索
        </Button>
      </SearchForm>
      {searchResults.length > 0 && (
        <ResultTable>
          <thead>
            <tr>
              <TableHeader>伝票日</TableHeader>
              <TableHeader>摘要</TableHeader>
              <TableHeader>金額</TableHeader>
              <TableHeader>差引残高</TableHeader>
              <TableHeader>振替先</TableHeader>
              <TableHeader>税区分</TableHeader>
              <TableHeader>税区分2</TableHeader>
              <TableHeader>備考</TableHeader>
            </tr>
          </thead>
          <tbody>
            {searchResults.map((result, index) => (
              <tr key={index}>
                <TableData>{result.date}</TableData>
                <TableData>{result.description}</TableData>
                <TableData>{result.amount.toLocaleString()}</TableData>
                <TableData>{result.balance.toLocaleString()}</TableData>
                <TableData>{result.paidBy}</TableData>
                <TableData>{result.category}</TableData>
                <TableData>{result.subCategory}</TableData>
                <TableData>{result.remarks}</TableData>
              </tr>
            ))}
          </tbody>
        </ResultTable>
      )}
    </div>
  );
};

// 使用例
const App: React.FC = () => {
  return (
    <div>
      <TaxableInvoiceManagement />
    </div>
  );
};

export default App;