import React from 'react';
import styled from 'styled-components';

// 予算発注先入力明細書のプロパティ
interface BudgetOrderInputProps {
  /** 前 */
  before?: string;
  /** 細節 */
  detail?: string;
  /** 科目種別 */
  itemType?: '材料費' | '労務費' | '水道料金管' | '区分指定なし';
  /** 予算所属 */
  budgetDivision?: string;
  /** 金額 */
  amount?: number;
  /** 予算残額 */
  budgetBalance?: number;
  /** 発注請求要 */
  orderRequestNote?: string;
}

// 予算発注先入力明細書コンポーネント
const BudgetOrderInput: React.FC<BudgetOrderInputProps> = ({
  before = '',
  detail = '',  
  itemType = '区分指定なし',
  budgetDivision = '',
  amount = 0,
  budgetBalance = 0,
  orderRequestNote = '',
}) => {
  return (
    <Container>
      <Title>予算発注先入力明細書</Title>
      
      <Row>
        <Label>前</Label>
        <Value>{before}</Value>

        <Label>細節</Label>
        <Value>{detail}</Value>
      </Row>

      <Row>
        <Label>科目種別</Label>
        <Value>{itemType}</Value>

        <Label>予算所属</Label>
        <Value>{budgetDivision}</Value>
      </Row>

      <AmountRow>
        <Label>金額</Label>
        <Value>{amount.toLocaleString()}</Value>
      </AmountRow>

      <BalanceRow>
        <Label>予算残額</Label>
        <Value>{budgetBalance.toLocaleString()}</Value>
      </BalanceRow>

      <NoteRow>
        <Label>発注請求要</Label>
        <Value>{orderRequestNote}</Value>
      </NoteRow>

      <ButtonRow>
        <Button type="button">削除</Button>
        <Button type="button">OK</Button>
        <Button type="button">クリア</Button>
        <Button type="button">キャンセル</Button>
      </ButtonRow>
    </Container>
  );
};

// サンプルデータ
const sampleData: BudgetOrderInputProps = {
  before: '00010011',
  detail: '0001',
  itemType: '材料費',
  budgetDivision: '設計',
  amount: 3000,
  budgetBalance: -543321,
  orderRequestNote: '原水･備品経品',
};

// 使用例
const App: React.FC = () => {
  return (
    <BudgetOrderInput {...sampleData} />
  );
};

export default App;

// スタイリング
const Container = styled.div`
  font-family: sans-serif;
  padding: 16px;
  background: #f0f0f0;
  width: 400px;

  @media (max-width: 480px) {
    width: 100%;
  }
`;

const Title = styled.h2`
  margin: 0 0 16px;
  font-size: 20px;
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
`;

const Label = styled.div`
  width: 100px;
  font-weight: bold;
`;

const Value = styled.div`
  flex: 1;
`;

const AmountRow = styled(Row)`
  margin-top: 24px;
`;

const BalanceRow = styled(Row)`
  color: red;
`;

const NoteRow = styled(Row)`
  margin-bottom: 24px;
`;

const ButtonRow = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 8px;
`;

const Button = styled.button`
  padding: 4px 8px;
  min-width: 60px;
`;