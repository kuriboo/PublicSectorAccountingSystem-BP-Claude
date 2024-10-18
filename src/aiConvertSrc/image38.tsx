import React from 'react';
import styled from '@emotion/styled';

type VoucherSearchProps = {
  onSearch: (params: SearchParams) => void;
};

type SearchParams = {
  voucherNumber?: string;
  startDate?: string;
  endDate?: string;
  keyword?: string;
  debitCredit?: 'debit' | 'credit';
  minAmount?: number;
  maxAmount?: number;
};

const VoucherSearch: React.FC<VoucherSearchProps> = ({ onSearch }) => {
  const [searchParams, setSearchParams] = React.useState<SearchParams>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setSearchParams(prevParams => ({
      ...prevParams,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(searchParams);
  };

  return (
    <Container>
      <Title>検索条件設定</Title>
      <Form onSubmit={handleSubmit}>
        <Row>
          <Label>伝票番号</Label>
          <Input
            type="text"
            name="voucherNumber"
            value={searchParams.voucherNumber || ''}
            onChange={handleChange}
          />
          <Label>年度</Label>
          <Input
            type="text"
            name="year"
            value={searchParams.year || ''}
            onChange={handleChange}
          />
        </Row>
        <Row>
          <Label>振替番号</Label>
          <Input
            type="text"
            name="keyword"
            value={searchParams.keyword || ''}
            onChange={handleChange}
          />
        </Row>
        <Row>
          <Label>振替日</Label>
          <Input
            type="date"
            name="startDate"
            value={searchParams.startDate || ''}
            onChange={handleChange}
          />
          <Label>～</Label>
          <Input
            type="date"
            name="endDate"
            value={searchParams.endDate || ''}
            onChange={handleChange}
          />
        </Row>
        <Row>
          <RadioButton
            type="radio"
            id="debit"
            name="debitCredit"
            value="debit"
            checked={searchParams.debitCredit === 'debit'}
            onChange={handleChange}
          />
          <RadioLabel htmlFor="debit">借方仕訳</RadioLabel>
          <RadioButton
            type="radio"
            id="credit"
            name="debitCredit"
            value="credit"
            checked={searchParams.debitCredit === 'credit'}
            onChange={handleChange}
          />
          <RadioLabel htmlFor="credit">貸方仕訳</RadioLabel>
        </Row>
        <Row>
          <Label>金額</Label>
          <Input
            type="number"
            name="minAmount"
            value={searchParams.minAmount || ''}
            onChange={handleChange}
          />
          <Label>～</Label>
          <Input
            type="number"
            name="maxAmount"
            value={searchParams.maxAmount || ''}
            onChange={handleChange}
          />
        </Row>
        <SubmitButton type="submit">表示</SubmitButton>
      </Form>
    </Container>
  );
};

const Container = styled.div`
  padding: 16px;
  background-color: #f0f0f0;
`;

const Title = styled.h2`
  margin-bottom: 16px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 8px;

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const Label = styled.label`
  margin-right: 8px;
  white-space: nowrap;
`;

const Input = styled.input`
  padding: 4px;
  margin-right: 16px;
`;

const RadioButton = styled.input`
  margin-right: 4px;
`;

const RadioLabel = styled.label`
  margin-right: 16px;
`;

const SubmitButton = styled.button`
  padding: 8px 16px;
  background-color: #007bff;
  color: #fff;
  border: none;
  cursor: pointer;
`;

// Usage example
const App: React.FC = () => {
  const handleSearch = (params: SearchParams) => {
    console.log('Search params:', params);
    // Perform search logic here
  };

  return (
    <div>
      <h1>Voucher Search</h1>
      <VoucherSearch onSearch={handleSearch} />
    </div>
  );
};

export default App;