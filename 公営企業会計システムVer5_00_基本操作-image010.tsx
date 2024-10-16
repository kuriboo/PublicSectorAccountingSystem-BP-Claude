// FilterForm.tsx
import React from 'react';
import styled from '@emotion/styled';

interface FilterFormProps {
  onFilter: (params: FilterParams) => void;
}

interface FilterParams {
  company: string;
  subsidiary: string;
}

const FilterForm: React.FC<FilterFormProps> = ({ onFilter }) => {
  const [company, setCompany] = React.useState('');
  const [subsidiary, setSubsidiary] = React.useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onFilter({ company, subsidiary });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Title>検索条件 検索画面</Title>
      <Label>
        会社名:
        <Select
          value={company}
          onChange={(e) => setCompany(e.target.value)}
        >
          <option value="">下水道事業会計</option>
          {/* Add more company options */}
        </Select>
      </Label>
      <Label>
        所属担当:
        <Select
          value={subsidiary}
          onChange={(e) => setSubsidiary(e.target.value)}
        >
          <option value="">徳島県県庁　予算計目登録権限保持</option>
          {/* Add more subsidiary options */}
        </Select>
      </Label>
      <ButtonContainer>
        <Button type="submit">ログイン</Button>
        <CancelButton type="button">キャンセル</CancelButton>
      </ButtonContainer>
    </Form>
  );
};

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #f0f0f0;
  border-radius: 8px;
`;

const Title = styled.h2`
  margin-bottom: 20px;
`;

const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
`;

const Select = styled.select`
  padding: 5px;
  font-size: 16px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const Button = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-right: 10px;
`;

const CancelButton = styled(Button)`
  background-color: #6c757d;
`;

// Usage example
const App: React.FC = () => {
  const handleFilter = (params: FilterParams) => {
    console.log('Filter params:', params);
    // Perform filtering logic based on the params
  };

  return (
    <div>
      <FilterForm onFilter={handleFilter} />
    </div>
  );
};

export default App;