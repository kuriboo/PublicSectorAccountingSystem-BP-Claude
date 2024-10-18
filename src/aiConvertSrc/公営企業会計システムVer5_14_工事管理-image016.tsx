import React from 'react';
import styled from 'styled-components';

// 工事台帳検索コンポーネントの型定義
type ConstructionRecordSearchProps = {
  onSearch: (params: SearchParams) => void;
};

// 検索パラメータの型定義
type SearchParams = {
  constructionNumber: string;
  constructionName: string;
  accountingPeriod: string;
  fiscalYear: string;
  orderNumber: string;
  workPeriodFrom?: string;
  workPeriodTo?: string;
  quotePriceFrom?: string;
  quotePriceTo?: string;
  invoicePriceFrom?: string; 
  invoicePriceTo?: string;
  settlementPriceFrom?: string;
  settlementPriceTo?: string;
};

// スタイリング用のコンポーネント
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;  
  }
`;

const FieldGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
  }  
`;

const FieldLabel = styled.label`
  margin-right: 10px;
  margin-bottom: 5px;
  @media (min-width: 768px) {
    margin-bottom: 0;
  }
`;

const TextInput = styled.input`
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 3px;
  width: 100%;
  @media (min-width: 768px) {
    width: 200px;
  }  
`;

const Button = styled.button`
  padding: 5px 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 3px;
  cursor: pointer;
`;

// 工事台帳検索コンポーネント
const ConstructionRecordSearch: React.FC<ConstructionRecordSearchProps> = ({ onSearch }) => {
  // 検索パラメータの状態管理
  const [params, setParams] = React.useState<SearchParams>({
    constructionNumber: '',
    constructionName: '',
    accountingPeriod: '',
    fiscalYear: '',
    orderNumber: '',
  });

  // 入力フィールドの変更ハンドラ
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setParams(prevParams => ({
      ...prevParams,
      [name]: value
    }));
  };
  
  // 検索ボタンのクリックハンドラ
  const handleSearch = () => {
    onSearch(params);
  };

  return (
    <Container>
      <FieldGroup>
        <FieldLabel>工事台帳年度</FieldLabel>
        <TextInput type="text" name="fiscalYear" value={params.fiscalYear} onChange={handleChange} />
        <FieldLabel>年度</FieldLabel>
      </FieldGroup>

      <FieldGroup>  
        <FieldLabel>工事名称</FieldLabel>
        <TextInput type="text" name="constructionName" value={params.constructionName} onChange={handleChange} />
      </FieldGroup>

      <FieldGroup>
        <FieldLabel>工事番号</FieldLabel>  
        <TextInput type="text" name="constructionNumber" value={params.constructionNumber} onChange={handleChange} />
        <FieldLabel>〜</FieldLabel>
        <TextInput type="text" name="constructionNumber" value={params.constructionNumber} onChange={handleChange} />
      </FieldGroup>
      
      <FieldGroup>
        <FieldLabel>検索方法指定</FieldLabel>
        {/* ラジオボタンの実装は省略 */}
      </FieldGroup>
      
      <FieldGroup>  
        <FieldLabel>工事名所</FieldLabel>
        <TextInput type="text" name="accountingPeriod" value={params.accountingPeriod} onChange={handleChange} />
      </FieldGroup>

      <FieldGroup>
        <FieldLabel>工事場所</FieldLabel>  
        <TextInput type="text" name="orderNumber" value={params.orderNumber} onChange={handleChange} />
      </FieldGroup>

      <FieldGroup>  
        <FieldLabel>工事期間</FieldLabel>
        <TextInput type="text" name="workPeriodFrom" value={params.workPeriodFrom} onChange={handleChange} />
        <FieldLabel>〜</FieldLabel>  
        <TextInput type="text" name="workPeriodTo" value={params.workPeriodTo} onChange={handleChange} />
      </FieldGroup>

      <FieldGroup>
        <FieldLabel>見積金額</FieldLabel>
        <TextInput type="text" name="quotePriceFrom" value={params.quotePriceFrom} onChange={handleChange} />  
        <FieldLabel>〜</FieldLabel>
        <TextInput type="text" name="quotePriceTo" value={params.quotePriceTo} onChange={handleChange} />
      </FieldGroup>

      <FieldGroup>
        <FieldLabel>請求金額</FieldLabel>
        <TextInput type="text" name="invoicePriceFrom" value={params.invoicePriceFrom} onChange={handleChange} />
        <FieldLabel>〜</FieldLabel>  
        <TextInput type="text" name="invoicePriceTo" value={params.invoicePriceTo} onChange={handleChange} />  
      </FieldGroup>

      <FieldGroup>
        <FieldLabel>請求時内訳</FieldLabel>  
        <TextInput type="text" name="settlementPriceFrom" value={params.settlementPriceFrom} onChange={handleChange} />
        <FieldLabel>〜</FieldLabel>
        <TextInput type="text" name="settlementPriceTo" value={params.settlementPriceTo} onChange={handleChange} />
      </FieldGroup>  

      <Button onClick={handleSearch}>検索</Button>
    </Container>  
  );
};

// サンプルデータ
const sampleData = {
  fiscalYear: '2023',
  constructionName: 'サンプル工事',
  constructionNumber: '1234',
  accountingPeriod: '4月',
  orderNumber: 'ABC123' 
};

// 使用例
const App: React.FC = () => {
  const handleSearch = (params: SearchParams) => {
    console.log(params);
    // 検索処理の実装
  };

  return (
    <div>
      <h1>工事台帳検索</h1>
      <ConstructionRecordSearch onSearch={handleSearch} />
      <hr />
      <h2>サンプルデータ</h2>
      <p>工事台帳年度: {sampleData.fiscalYear}</p>
      <p>工事名称: {sampleData.constructionName}</p> 
      <p>工事番号: {sampleData.constructionNumber}</p>
      <p>工事名所: {sampleData.accountingPeriod}</p>
      <p>工事場所: {sampleData.orderNumber}</p>
    </div>
  );  
};

export default App;