import React from 'react';
import styled from 'styled-components';

// 予約タイプの型定義
type ReservationType = '所属管理' | '部' | '細節' | '明細' | '履歴' | '施設内訳' | '施設詳細訳' | '施設内訳詳細';

// 料金支払方法の型定義
type PaymentMethod = '当日精算' | 'プリペイドカード';

// 売上処理区分の型定義
type SalesProcessingCategory = '現金' | '売掛現金値';

// 設計価格決裁額区分の型定義
type DesignPriceApprovalAmountCategory = '変更額' | '変更後の額';

// 過年度収入区分の型定義
type PreviousYearIncomeCategory = '年度別' | '前年過年';

// 資金予算表選択区分の型定義
type CapitalBudgetSelectionCategory = 'プラス' | 'マイナス';

// コンポーネントのプロパティの型定義
interface ReservationMasterFormProps {
  reservationType: ReservationType;
  paymentMethod: PaymentMethod;
  salesProcessingCategory: SalesProcessingCategory;
  designPriceApprovalAmountCategory: DesignPriceApprovalAmountCategory;
  previousYearIncomeCategory: PreviousYearIncomeCategory;
  capitalBudgetSelectionCategory: CapitalBudgetSelectionCategory;
  registrationFee: number;
}

// スタイル定義
const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 600px;
  margin: 0 auto;
`;

const FormGroup = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const Label = styled.label`
  width: 200px;
  font-weight: bold;
`;

const Input = styled.input`
  flex: 1;
  padding: 5px;
`;

const Select = styled.select`
  flex: 1;
  padding: 5px;
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  cursor: pointer;
  align-self: flex-end;

  &:hover {
    background-color: #0056b3;
  }
`;

// メインコンポーネント
const ReservationMasterForm: React.FC<ReservationMasterFormProps> = ({
  reservationType,
  paymentMethod,
  salesProcessingCategory,
  designPriceApprovalAmountCategory,
  previousYearIncomeCategory,
  capitalBudgetSelectionCategory,
  registrationFee,
}) => {
  return (
    <FormWrapper>
      <h2>控管予約登路</h2>
      <FormGroup>
        <Label>予約タイプ</Label>
        <Select value={reservationType}>
          <option value="所属管理">所属管理</option>
          <option value="部">部</option>
          <option value="細節">細節</option>
          <option value="明細">明細</option>
          <option value="履歴">履歴</option>
          <option value="施設内訳">施設内訳</option>
          <option value="施設詳細訳">施設詳細訳</option>
          <option value="施設内訳詳細">施設内訳詳細</option>
        </Select>
      </FormGroup>
      {/* 他のフォームグループも同様に実装 */}
      <FormGroup>
        <Label>登記料金</Label>
        <Input type="number" value={registrationFee} />
      </FormGroup>
      <Button type="submit">登録</Button>
    </FormWrapper>
  );
};

// サンプルデータ
const sampleData: ReservationMasterFormProps = {
  reservationType: '所属管理',
  paymentMethod: '当日精算',
  salesProcessingCategory: '現金',
  designPriceApprovalAmountCategory: '変更額',
  previousYearIncomeCategory: '年度別',  
  capitalBudgetSelectionCategory: 'プラス',
  registrationFee: 70,
};

// 表示用コンポーネント
const App: React.FC = () => {
  return (
    <div>
      <h1>予約先登録フォーム</h1>
      <ReservationMasterForm {...sampleData} />
    </div>
  );
};

export default App;