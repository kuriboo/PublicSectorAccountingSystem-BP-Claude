import React from 'react';
import styled from '@emotion/styled';

// 接続先の型定義
type Connection = {
  value: string;
  label: string;
};

// 所属区分の型定義
type AffiliationCategory = {
  value: string;
  label: string;
};

// コンポーネントのPropsの型定義
type ConnectionFormProps = {
  connections: Connection[];
  affiliationCategories: AffiliationCategory[];
  onClickLogin: () => void;
  onClickCancel: () => void;
};

// コンポーネント内で使用するスタイルコンポーネントの定義
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px;

  @media (min-width: 768px) {
    max-width: 600px;
    margin: 40px auto;
  }
`;

const Title = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  width: 100%;
`;

const Label = styled.label`
  font-size: 16px;
  margin-bottom: 5px;
`;

const Select = styled.select`
  font-size: 16px;
  padding: 8px;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const Button = styled.button`
  font-size: 16px;
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  
  ${({ color }) => `
    background-color: ${color};
    color: white;
  `}
`;

// 接続先選択フォームのコンポーネント
const ConnectionForm: React.FC<ConnectionFormProps> = ({
  connections,
  affiliationCategories,
  onClickLogin,
  onClickCancel,
}) => {
  // 接続先の初期値
  const defaultConnection = connections.length > 0 ? connections[0].value : '';

  // 所属区分の初期値
  const defaultAffiliationCategory =
    affiliationCategories.length > 0 ? affiliationCategories[0].value : '';

  return (
    <Container>
      <Title>接続先変更画面</Title>
      <FormGroup>
        <Label htmlFor="connection">接続先:</Label>
        <Select id="connection" defaultValue={defaultConnection}>
          {connections.map(({ value, label }) => (
            <option key={value} value={value}>
              {label}
            </option>
          ))}
        </Select>
      </FormGroup>
      <FormGroup>
        <Label htmlFor="affiliationCategory">所属区分:</Label>
        <Select id="affiliationCategory" defaultValue={defaultAffiliationCategory}>
          {affiliationCategories.map(({ value, label }) => (
            <option key={value} value={value}>
              {label}
            </option>
          ))}
        </Select>
      </FormGroup>
      <ButtonGroup>
        <Button color="#4caf50" onClick={onClickLogin}>
          ログイン
        </Button>
        <Button color="#f44336" onClick={onClickCancel}>
          キャンセル
        </Button>
      </ButtonGroup>
    </Container>
  );
};

// サンプルデータを用いた使用例
const sampleConnections: Connection[] = [
  { value: 'connection1', label: '上水道事業会計' },
  { value: 'connection2', label: '下水道事業会計' },
];

const sampleAffiliationCategories: AffiliationCategory[] = [
  { value: 'category1', label: '最高権限 管理者' },
  { value: 'category2', label: '一般' },
];

const ConnectionFormExample: React.FC = () => {
  const handleLogin = () => {
    console.log('ログインボタンがクリックされました');
  };

  const handleCancel = () => {
    console.log('キャンセルボタンがクリックされました');
  };

  return (
    <ConnectionForm
      connections={sampleConnections}
      affiliationCategories={sampleAffiliationCategories}
      onClickLogin={handleLogin}
      onClickCancel={handleCancel}
    />
  );
};

export default ConnectionFormExample;