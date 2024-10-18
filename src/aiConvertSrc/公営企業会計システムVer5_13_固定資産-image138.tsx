import React, { useState } from 'react';
import styled from '@emotion/styled';

type FixSearchProps = {
  defaultValues?: {
    settlementDate: string;
    date: string;
    clientName: string;
    sheetDate: string;
    orderDate: string;
    deliveryDate: string;
    depositDate: string;
  };
  searchCategory: {
    label: string;
    options: { value: string; label: string }[];
  }[];
  onSearch: (values: {
    settlementDate: string;
    date: string;
    clientName: string;
    sheetDate: string;
    orderDate: string;
    deliveryDate: string;
    depositDate: string;
    searchText: string;
    category: string;
  }) => void;
};

const FixSearch: React.FC<FixSearchProps> = ({
  defaultValues = {
    settlementDate: '',
    date: '',
    clientName: '',
    sheetDate: '',
    orderDate: '',
    deliveryDate: '',
    depositDate: '',
  },
  searchCategory,
  onSearch,
}) => {
  const [formValues, setFormValues] = useState(defaultValues);
  const [searchText, setSearchText] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(searchCategory[0].value);

  // フォーム入力値を更新
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  // 検索処理
  const handleSearch = () => {
    onSearch({
      ...formValues,
      searchText,
      category: selectedCategory,
    });
  };

  return (
    <Container>
      <Row>
        <Label>固定欄</Label>
        <Label>固定値</Label>
      </Row>
      <Row>
        <Label>固定日</Label>
        <Input
          type="text"
          name="settlementDate"
          value={formValues.settlementDate}
          onChange={handleChange}
        />
      </Row>
      <Row>
        <Label>固定額</Label>
        <Input type="text" name="date" value={formValues.date} onChange={handleChange} />
      </Row>
      <Row>
        <Label>顧客名</Label>
        <Input type="text" name="clientName" value={formValues.clientName} onChange={handleChange} />
      </Row>
      <Row>
        <Label>固定伝票日</Label>
        <Input type="text" name="sheetDate" value={formValues.sheetDate} onChange={handleChange} />
      </Row>
      <Row>
        <Label>固定注文日</Label>
        <Input type="text" name="orderDate" value={formValues.orderDate} onChange={handleChange} />
      </Row>
      <Row>
        <Label>固定納品日</Label>
        <Input
          type="text"
          name="deliveryDate"
          value={formValues.deliveryDate}
          onChange={handleChange}
        />
      </Row>
      <Row>
        <Label>固定入金日</Label>
        <Input
          type="text"
          name="depositDate"
          value={formValues.depositDate}
          onChange={handleChange}
        />
      </Row>
      <Row>
        <Label>検索文字列</Label>
        <Input
          type="text"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          placeholder="検索文字列を入力"
        />
      </Row>
      <Row>
        <SearchCategory>
          {searchCategory.map((category) => (
            <option key={category.value} value={category.value}>
              {category.label}
            </option>
          ))}
        </SearchCategory>
        <SearchButton onClick={handleSearch}>表示</SearchButton>
      </Row>
      <CodeBlock>
        <CodeText>{`0610000000001`}</CodeText>
        <CodeLabel>土地</CodeLabel>
      </CodeBlock>
      <ButtonGroup>
        <Button>確定</Button>
        <Button>OK</Button>
        <Button>クリア</Button>
        <Button>キャンセル</Button>
      </ButtonGroup>
    </Container>
  );
};

export default FixSearch;

// コンポーネントのスタイリング
const Container = styled.div`
  padding: 16px;
  background-color: #f0f0f0;
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
`;

const Label = styled.label`
  width: 120px;
  font-weight: bold;
`;

const Input = styled.input`
  flex: 1;
  padding: 4px;
`;

const SearchCategory = styled.select`
  flex: 1;
  padding: 4px;
`;

const SearchButton = styled.button`
  padding: 4px 8px;
  margin-left: 8px;
`;

const CodeBlock = styled.div`
  display: flex;
  align-items: center;
  padding: 8px;
  background-color: #fff;
`;

const CodeText = styled.span`
  flex: 1;
  font-family: monospace;
`;

const CodeLabel = styled.span`
  margin-left: 8px;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 16px;
`;

const Button = styled.button`
  margin-left: 8px;
`;

// 使用例
const ExampleComponent: React.FC = () => {
  const searchCategory = [
    { label: '検索条件1', value: 'category1' },
    { label: '検索条件2', value: 'category2' },
    { label: '検索条件3', value: 'category3' },
  ];

  const handleSearch = (values: {
    settlementDate: string;
    date: string;
    clientName: string;
    sheetDate: string;
    orderDate: string;
    deliveryDate: string;
    depositDate: string;
    searchText: string;
    category: string;
  }) => {
    console.log('検索条件:', values);
    // 検索処理の実装
  };

  return <FixSearch searchCategory={searchCategory} onSearch={handleSearch} />;
};