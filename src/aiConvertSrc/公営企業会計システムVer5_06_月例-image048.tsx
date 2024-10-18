import React from 'react';
import styled from 'styled-components';

// 月次貸借対照表の型定義
type MonthlyBalanceSheetProps = {
  yearMonth: string; // 集計年月
  accountCategories: string[]; // 集計対象の勘定科目カテゴリ
  selectedAccountCategory: string; // 選択された勘定科目カテゴリ
  onAccountCategoryChange: (category: string) => void; // 勘定科目カテゴリ選択時の処理
};

// スタイルコンポーネント
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #f0f0f0;
`;

const Title = styled.h2`
  margin-bottom: 20px;
`;

const FormGroup = styled.div`
  margin-bottom: 10px;
`;

const Label = styled.label`
  margin-right: 10px;
`;

const Select = styled.select`
  padding: 5px;
  font-size: 16px;
`;

// 月次貸借対照表コンポーネント
const MonthlyBalanceSheet: React.FC<MonthlyBalanceSheetProps> = ({
  yearMonth,
  accountCategories,
  selectedAccountCategory,
  onAccountCategoryChange,
}) => {
  // 勘定科目カテゴリの選択肢を生成
  const accountCategoryOptions = accountCategories.map((category) => (
    <option key={category} value={category}>
      {category}
    </option>
  ));

  return (
    <Container>
      <Title>月次貸借対照表</Title>
      <div>
        <span>行政市水道事業会計</span>
        <span>管理者 予算科目登録権限者 さようせい 太郎</span>
        <span>平成30年04月06日</span>
      </div>
      <FormGroup>
        <Label>範囲指定</Label>
        <div>
          <span>集計年月 平成30年01月</span>
          <span>まで</span>
        </div>
        <div>
          <Label>集計対象</Label>
          <Select
            value={selectedAccountCategory}
            onChange={(e) => onAccountCategoryChange(e.target.value)}
          >
            {accountCategoryOptions}
          </Select>
        </div>
      </FormGroup>
    </Container>
  );
};

export default MonthlyBalanceSheet;

// 使用例
const App: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = React.useState('全体');

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
  };

  return (
    <MonthlyBalanceSheet
      yearMonth="平成30年01月"
      accountCategories={['全体', 'ブロック', 'セグメント']}
      selectedAccountCategory={selectedCategory}
      onAccountCategoryChange={handleCategoryChange}
    />
  );
};