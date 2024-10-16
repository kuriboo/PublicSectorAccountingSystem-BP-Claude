import React from 'react';
import styled from '@emotion/styled';

// 振替伝票の検索条件を表すプロパティ型定義
type SearchConditionProps = {
  dateFrom: string;
  dateTo: string;
  selectedOptions: string[];
}

// 振替伝票検索条件コンポーネント
const SearchCondition: React.FC<SearchConditionProps> = ({ dateFrom, dateTo, selectedOptions }) => {
  return (
    <Container>
      <Row>
        <Label>振替日</Label>
        <DateInput type="text" defaultValue={dateFrom} /> ～ <DateInput type="text" defaultValue={dateTo} />
      </Row>
      <Row>
        <OptionLabel>
          <input type="checkbox" checked={selectedOptions.includes('予算所属')} /> 予算所属
        </OptionLabel>
        <OptionLabel>
          <input type="checkbox" checked={selectedOptions.includes('起案所属')} /> 起案所属
        </OptionLabel>
        <OptionLabel>
          <input type="checkbox" checked={selectedOptions.includes('支払分')} /> 支払分
        </OptionLabel>
        <OptionLabel>    
          <input type="checkbox" checked={selectedOptions.includes('決算仕訳分')} /> 決算仕訳分
        </OptionLabel>
      </Row>
      <Row>      
        <OptionLabel>
          <input type="checkbox" checked={selectedOptions.includes('発行区分')} /> 発行区分
        </OptionLabel>
        <OptionLabel>
          <input type="checkbox" checked={selectedOptions.includes('新規')} /> 新規
        </OptionLabel>
        <OptionLabel>
          <input type="checkbox" checked={selectedOptions.includes('再発行')} /> 再発行
        </OptionLabel>
      </Row>
    </Container>
  );
};

// スタイリング
const Container = styled.div`
  padding: 16px;
  border: 1px solid #ccc;
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
`;

const Label = styled.label`
  margin-right: 8px;
`;

const DateInput = styled.input`
  width: 100px;
  margin: 0 4px;
`;

const OptionLabel = styled.label`
  margin-right: 16px;
`;

// サンプルデータ
const sampleData: SearchConditionProps = {
  dateFrom: '平成29年08月04日',
  dateTo: '平成29年09月04日',
  selectedOptions: ['振替分', '調定分', '支払分', '決算仕訳分', '新規'],
};

// コンポーネントの使用例
const App: React.FC = () => {
  return (
    <div>
      <h2>振替伝票（一覧）検索条件</h2>
      <SearchCondition {...sampleData} />
    </div>
  );
};

export default App;