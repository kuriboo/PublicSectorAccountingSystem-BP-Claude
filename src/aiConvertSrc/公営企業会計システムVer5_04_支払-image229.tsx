import React from 'react';
import styled from 'styled-components';

type Props = {
  id: string;
  destination: string;
  origin: string;
  onSearch: () => void;
  onClear: () => void;
  onCancel: () => void;
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #f0f0f0;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  @media (min-width: 768px) {
    max-width: 500px;
    margin: 0 auto;
  }
`;

const Title = styled.h2`
  margin-bottom: 20px;
  font-size: 24px;
  color: #333;
`;

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
  width: 100%;
`;

const Label = styled.label`
  margin-bottom: 5px;
  font-size: 16px;
  color: #555;
`;

const Input = styled.input`
  padding: 8px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
`;

const Button = styled.button`
  padding: 8px 16px;
  margin-left: 10px;
  font-size: 16px;
  color: #fff;
  background-color: ${props => props.color || '#007bff'};
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const SearchForm: React.FC<Props> = ({ id, destination, origin, onSearch, onClear, onCancel }) => {
  return (
    <Container>
      <Title>支払料目設定</Title>
      <InputGroup>
        <Label htmlFor="id">節</Label>
        <Input type="text" id="id" value={id} readOnly />
      </InputGroup>
      <InputGroup>
        <Label htmlFor="destination">細節</Label>
        <Input type="text" id="destination" value={destination} readOnly />
      </InputGroup>
      <InputGroup>
        <Label htmlFor="origin">明細</Label>
        <Input type="text" id="origin" value={origin} readOnly />
      </InputGroup>
      <ButtonGroup>
        <Button onClick={onSearch}>科目検索</Button>
        <Button color="#6c757d" onClick={onClear}>クリア</Button>
        <Button color="#dc3545" onClick={onCancel}>キャンセル</Button>
      </ButtonGroup>
    </Container>
  );
};

// サンプルデータを用いた使用例
const SampleUsage: React.FC = () => {
  const handleSearch = () => {
    // 科目検索処理
    console.log('科目検索');
  };

  const handleClear = () => {
    // クリア処理 
    console.log('クリア');
  };

  const handleCancel = () => {
    // キャンセル処理
    console.log('キャンセル');
  };

  return (
    <SearchForm
      id="05201C001"
      destination="008 ○○銀行/普"
      origin="0001 ○○銀行/普" 
      onSearch={handleSearch}
      onClear={handleClear}
      onCancel={handleCancel}
    />
  );
};

export default SampleUsage;