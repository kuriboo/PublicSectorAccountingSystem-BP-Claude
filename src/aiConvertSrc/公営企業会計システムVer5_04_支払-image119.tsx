import React from 'react';
import styled from 'styled-components';

// パッケージ検索画面のプロパティ定義
interface PackageSearchProps {
  onSearch?: () => void;
}

// パッケージ検索画面のコンポーネント
const PackageSearch: React.FC<PackageSearchProps> = ({ onSearch }) => {
  return (
    <Container>
      <Message>
        授業中の事業所を検索する際、事業所名を選択してください。
        同じ名称の事業所が表示される場合があります。
      </Message>
      <ButtonContainer>
        <Button onClick={onSearch}>探す</Button>
        <CancelButton>いいえ</CancelButton>
      </ButtonContainer>
    </Container>
  );
};

// スタイリング
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #f0f0f0;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  @media (max-width: 600px) {
    padding: 10px;
  }
`;

const Message = styled.p`
  margin-bottom: 20px;
  text-align: center;
  font-size: 16px;
  color: #333;

  @media (max-width: 600px) {
    font-size: 14px;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 10px;
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }

  @media (max-width: 600px) {
    font-size: 14px;
    padding: 8px 16px;
  }
`;

const CancelButton = styled(Button)`
  background-color: #dc3545;

  &:hover {
    background-color: #b02a37;
  }
`;

// サンプルデータを用いた使用例
const SampleUsage: React.FC = () => {
  const handleSearch = () => {
    console.log('探すボタンがクリックされました');
  };

  return (
    <div>
      <h1>パッケージ検索画面</h1>
      <PackageSearch onSearch={handleSearch} />
    </div>
  );
};

export default SampleUsage;