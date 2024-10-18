import React from 'react';
import styled from 'styled-components';

// 財源集計入力用のプロパティの型定義
interface FinancialSourceInputProps {
  assetCode: string; // 財源コード
  assetName: string; // 財源名称
  amount: number; // 異動金額
  amountTrend: number; // 異動金額（債勘）
  monthlyTrend: number; // 月割改良債勘額
  bondAdjustment: number; // 除却費
  bondRepayment: number; // 除却費（債勘）
  bondInterestAdjustment: number; // 除却費計算少額
  discount: number; // 売却額
  discountCommission: number; // 過年度修正損益
}

// 財源集計入力用のコンポーネント
const FinancialSourceInput: React.FC<FinancialSourceInputProps> = ({
  assetCode,
  assetName,
  amount,
  amountTrend,
  monthlyTrend,
  bondAdjustment,
  bondRepayment,
  bondInterestAdjustment,
  discount,
  discountCommission,
}) => {
  return (
    <InputContainer>
      <InputLabel>財源コード</InputLabel>
      <InputField value={assetCode} readOnly />
      
      <InputLabel>財源名称</InputLabel>
      <InputField value={assetName} readOnly />

      <InputRow>
        <InputLabel>異動金額</InputLabel>
        <InputField type="number" value={amount} />

        <InputLabel>異動金額（債勘）</InputLabel>
        <InputField type="number" value={amountTrend} />
      </InputRow>

      <InputRow>
        <InputLabel>月割改良債勘額</InputLabel>
        <InputField type="number" value={monthlyTrend} />

        <InputLabel>除却費</InputLabel>  
        <InputField type="number" value={bondAdjustment} />
      </InputRow>

      <InputRow>
        <InputLabel>除却費（債勘）</InputLabel>
        <InputField type="number" value={bondRepayment} />

        <InputLabel>除却費計算少額</InputLabel>
        <InputField type="number" value={bondInterestAdjustment} />
      </InputRow>
      
      <InputRow>
        <InputLabel>売却額</InputLabel>
        <InputField type="number" value={discount} />

        <InputLabel>過年度修正損益</InputLabel>  
        <InputField type="number" value={discountCommission} />
      </InputRow>

    </InputContainer>
  );
};

// 例としてサンプルデータを用意
const sampleData: FinancialSourceInputProps = {
  assetCode: '01',  
  assetName: '自己財源',
  amount: 5000000,
  amountTrend: 0,
  monthlyTrend: 0,
  bondAdjustment: 5000000,
  bondRepayment: 0,
  bondInterestAdjustment: 0,
  discount: 5000000,
  discountCommission: 0,
};

// サンプルデータを使用して表示用のコンポーネントを定義
const App: React.FC = () => {
  return (
    <div>
      <h2>財源集計金額</h2>
      <FinancialSourceInput {...sampleData} />  
    </div>
  );
};

// スタイリング用のコンポーネントを定義
const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  max-width: 600px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const InputRow = styled.div`
  display: flex;
  gap: 20px;
  
  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

const InputLabel = styled.label`
  font-weight: bold;
`;

const InputField = styled.input`
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 3px;
  width: 150px;
`;

export default App;