import React from 'react';
import styled from '@emotion/styled';

// 団体情報の型定義
type OrganizationInfo = {
  code: string;
  name: string;
};

// 対象事業情報の型定義
type BusinessInfo = {
  code: string;
  name: string;
  checked: boolean;
};

// コンポーネントのプロパティの型定義
type Props = {
  organizationCode: string;
  organizationName: string;
  businessList: BusinessInfo[];
  onOrganizationCodeChange: (code: string) => void;
  onBusinessCheckChange: (code: string, checked: boolean) => void;
};

// 全体のコンテナ
const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 400px;
  box-sizing: border-box;
`;

// 見出し
const Header = styled.h2`
  font-size: 18px;
  margin: 0;
`;

// 入力フィールド
const InputField = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

// ラベル
const Label = styled.label`
  font-size: 14px;
`;

// 入力
const Input = styled.input`
  padding: 4px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

// チェックボックス
const Checkbox = styled.input`
  margin-right: 4px;
`;

// 事業リスト
const BusinessList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

// 事業リストアイテム
const BusinessItem = styled.li`
  display: flex;
  align-items: center;
  font-size: 14px;
`;

// 決算統計事業情報設定コンポーネント
const SettlementStatisticsBusinessInfo: React.FC<Props> = ({
  organizationCode,
  organizationName,
  businessList,
  onOrganizationCodeChange,
  onBusinessCheckChange,
}) => {
  return (
    <Container>
      <Header>決算統計事業情報設定</Header>
      <InputField>
        <Label>団体情報</Label>
        <Input
          type="text"
          value={`${organizationCode} ${organizationName}`}
          readOnly
        />
      </InputField>
      <InputField>
        <Label>団体コード</Label>
        <Input
          type="text"
          value={organizationCode}
          onChange={(e) => onOrganizationCodeChange(e.target.value)}
        />
      </InputField>
      <BusinessList>
        {businessList.map((business) => (
          <BusinessItem key={business.code}>
            <Checkbox
              type="checkbox"
              checked={business.checked}
              onChange={(e) => onBusinessCheckChange(business.code, e.target.checked)}
            />
            {`${business.code} ${business.name}`}
          </BusinessItem>
        ))}
      </BusinessList>
    </Container>
  );
};

// サンプルデータ
const sampleData: Props = {
  organizationCode: '123456',
  organizationName: '行政市',
  businessList: [
    { code: '010', name: '水道事業・簡易水道事業', checked: true },
    { code: '020', name: '工業用水道事業', checked: false },
    { code: '060', name: '病院事業', checked: false },
  ],
  onOrganizationCodeChange: (code: string) => console.log(`Organization code changed: ${code}`),
  onBusinessCheckChange: (code: string, checked: boolean) =>
    console.log(`Business ${code} ${checked ? 'checked' : 'unchecked'}`),
};

// 使用例
const App: React.FC = () => {
  return <SettlementStatisticsBusinessInfo {...sampleData} />;
};

export default App;