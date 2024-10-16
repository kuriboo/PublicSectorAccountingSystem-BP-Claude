import React from 'react';
import styled from 'styled-components';

type TaxSearchFormProps = {
  onSubmit: (params: {
    startDate: string;
    endDate: string;
    deduction: boolean;
    searchType: '登録' | '訂正' | '削除';
  }) => void;
};

const TaxSearchForm: React.FC<TaxSearchFormProps> = ({ onSubmit }) => {
  const [startDate, setStartDate] = React.useState('');
  const [endDate, setEndDate] = React.useState('');
  const [deduction, setDeduction] = React.useState(false);
  const [searchType, setSearchType] = React.useState<'登録' | '訂正' | '削除'>('登録');

  // フォームのサブミットハンドラ
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit({ startDate, endDate, deduction, searchType });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Title>特定課税仕入伝票管理入力</Title>
      <SearchTypeContainer>
        <input type="radio" id="register" name="searchType" value="登録" checked={searchType === '登録'} onChange={() => setSearchType('登録')} />
        <label htmlFor="register">登録</label>
        <input type="radio" id="correct" name="searchType" value="訂正" checked={searchType === '訂正'} onChange={() => setSearchType('訂正')} />
        <label htmlFor="correct">訂正</label>
        <input type="radio" id="delete" name="searchType" value="削除" checked={searchType === '削除'} onChange={() => setSearchType('削除')} />  
        <label htmlFor="delete">削除</label>
      </SearchTypeContainer>
      <DateRangeContainer>
        <DateInput
          type="date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
          aria-label="検索開始日"
        />
        <span>〜</span>
        <DateInput
          type="date"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
          aria-label="検索終了日"
        />
      </DateRangeContainer>
      <DeductionCheckbox>
        <input
          type="checkbox"
          id="deduction"
          checked={deduction}
          onChange={() => setDeduction(!deduction)}
        />
        <label htmlFor="deduction">課税の支出予算科目から税額中の伝票のみ抽出</label>
      </DeductionCheckbox>

      <ButtonGroup>
        <SubmitButton type="submit">検索</SubmitButton>
      </ButtonGroup>
    </Form>
  );
};

// コンポーネントの使用例
const TaxSearchFormExample = () => {
  const handleSubmit = (params: {
    startDate: string;
    endDate: string;
    deduction: boolean;
    searchType: '登録' | '訂正' | '削除';
  }) => {
    console.log('Search params:', params);
    // フォームの送信処理 
  };

  return <TaxSearchForm onSubmit={handleSubmit} />;
};

const Form = styled.form`
  padding: 20px;
  border: 1px solid #ccc;

  @media (max-width: 600px) {
    padding: 10px;
  }
`;

const Title = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 15px;
`;

const SearchTypeContainer = styled.div`
  margin-bottom: 15px;
  
  label {
    margin-right: 10px;
  }
`;

const DateRangeContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;

  span {
    margin: 0 10px;
  }
`;

const DateInput = styled.input`
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 3px;
`;  

const DeductionCheckbox = styled.div`
  margin-bottom: 15px;
`;

const ButtonGroup = styled.div`
  text-align: center;
`;

const SubmitButton = styled.button`
  padding: 8px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

export { TaxSearchForm };