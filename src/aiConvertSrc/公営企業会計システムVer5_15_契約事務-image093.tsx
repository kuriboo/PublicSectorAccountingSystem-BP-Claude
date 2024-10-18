import React from 'react';
import styled from 'styled-components';

// 案件情報抽出処理のプロパティ型定義
type CaseInfoExtractionProps = {
  onSubmit: (data: CaseInfoExtractionData) => void;
};

// 案件情報抽出処理のデータ型定義
type CaseInfoExtractionData = {
  supportArea: string;
  constructionType: string;
  material: string;
  structure: string;
  receiptNumbers: string[];
  searchWords: string;
};

// 案件情報抽出処理コンポーネント
const CaseInfoExtraction: React.FC<CaseInfoExtractionProps> = ({ onSubmit }) => {
  // 状態管理
  const [data, setData] = React.useState<CaseInfoExtractionData>({
    supportArea: '工事',
    constructionType: '新規',
    material: '再抽出',
    structure: '物品',
    receiptNumbers: [],
    searchWords: '',
  });

  // 受付番号の追加
  const addReceiptNumber = (receiptNumber: string) => {
    setData((prevData) => ({
      ...prevData,
      receiptNumbers: [...prevData.receiptNumbers, receiptNumber],
    }));
  };

  // 検索ワードの変更
  const handleSearchWordsChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setData((prevData) => ({
      ...prevData,
      searchWords: event.target.value,
    }));
  };

  // フォーム送信処理
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit(data);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Row>
        <Label>
          <input
            type="radio"
            checked={data.supportArea === '工事'}
            onChange={() => setData((prevData) => ({ ...prevData, supportArea: '工事' }))}
          />
          工事
        </Label>
        <Label>
          <input
            type="radio"
            checked={data.supportArea === '委託'}
            onChange={() => setData((prevData) => ({ ...prevData, supportArea: '委託' }))}
          />
          委託
        </Label>
        <Label>
          <input
            type="radio"
            checked={data.supportArea === '物品'}
            onChange={() => setData((prevData) => ({ ...prevData, supportArea: '物品' }))}
          />
          物品
        </Label>
      </Row>
      <Row>
        <Label>
          <input
            type="radio"
            checked={data.constructionType === '新規'}
            onChange={() => setData((prevData) => ({ ...prevData, constructionType: '新規' }))}
          />
          新規
        </Label>
        <Label>
          <input
            type="radio"
            checked={data.constructionType === '再抽出'}
            onChange={() => setData((prevData) => ({ ...prevData, constructionType: '再抽出' }))}
          />
          再抽出
        </Label>
      </Row>
      <Row>
        <Input
          type="text"
          placeholder="受付番号"
          value={data.receiptNumbers.join(',')}
          onChange={(event) => addReceiptNumber(event.target.value)}
        />
        <Input
          type="text"
          placeholder="検索ワード"
          value={data.searchWords}
          onChange={handleSearchWordsChange}
        />
        <Button type="submit">表示</Button>
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
  align-items: center;
  gap: 16px;

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const Label = styled.label`
  display: flex;
  align-items: center;
  gap: 4px;
`;

const Input = styled.input`
  padding: 4px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 200px;

  @media (max-width: 600px) {
    width: 100%;
  }
`;

const Button = styled.button`
  padding: 4px 16px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

// サンプルデータ
const sampleData: CaseInfoExtractionData = {
  supportArea: '工事',
  constructionType: '新規',
  material: '再抽出',
  structure: '物品',
  receiptNumbers: ['000000064', '000000067'],
  searchWords: '抽出_物品__件名1,抽出_物品__件名1',
};

// 使用例
const App: React.FC = () => {
  const handleSubmit = (data: CaseInfoExtractionData) => {
    console.log('送信データ:', data);
  };

  return (
    <div>
      <h1>案件情報抽出処理</h1>
      <CaseInfoExtraction onSubmit={handleSubmit} />
      <h2>サンプルデータ</h2>
      <pre>{JSON.stringify(sampleData, null, 2)}</pre>
    </div>
  );
};

export default App;