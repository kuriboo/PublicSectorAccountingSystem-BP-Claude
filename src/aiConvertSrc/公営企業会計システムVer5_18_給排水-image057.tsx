import React from 'react';
import styled from 'styled-components';

type TaxData = {
  tax: number;
  taxRate: number;
  deduction: number;
  taxableIncome: number;
};

type TaxBreakdownProps = {
  data: TaxData;
};

const TaxBreakdownContainer = styled.div`
  background-color: #f0f0f0;
  padding: 16px;
  border-radius: 4px;
  font-family: Arial, sans-serif;
`;

const TaxBreakdownHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
`;

const TaxBreakdownHeaderItem = styled.div`
  font-weight: bold;
`;

const TaxBreakdownRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 4px;
`;

const TaxBreakdownRowItem = styled.div`
  text-align: right;
`;

const TaxBreakdownActions = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 16px;
`;

const TaxBreakdownButton = styled.button`
  margin-left: 8px;
  padding: 4px 8px;
  border: none;
  border-radius: 4px;
  background-color: #4285f4;
  color: #fff;
  cursor: pointer;

  &:hover {
    background-color: #3367d6;
  }
`;

const TaxBreakdown: React.FC<TaxBreakdownProps> = ({ data }) => {
  // 入力データのバリデーションチェック
  if (!data || isNaN(data.tax) || isNaN(data.taxRate) || isNaN(data.deduction) || isNaN(data.taxableIncome)) {
    return <div>Invalid tax data.</div>;
  }

  return (
    <TaxBreakdownContainer>
      <TaxBreakdownHeader>
        <TaxBreakdownHeaderItem>項目</TaxBreakdownHeaderItem>
        <TaxBreakdownHeaderItem>金額</TaxBreakdownHeaderItem>
      </TaxBreakdownHeader>
      <TaxBreakdownRow>
        <div>税込額</div>
        <TaxBreakdownRowItem>{data.tax.toLocaleString()}</TaxBreakdownRowItem>
      </TaxBreakdownRow>
      <TaxBreakdownRow>
        <div>消費税率</div>
        <TaxBreakdownRowItem>{data.taxRate.toLocaleString()}%</TaxBreakdownRowItem>
      </TaxBreakdownRow>
      <TaxBreakdownRow>
        <div>消費税額</div>
        <TaxBreakdownRowItem>{data.deduction.toLocaleString()}</TaxBreakdownRowItem>
      </TaxBreakdownRow>
      <TaxBreakdownRow>
        <div>課税対象額</div>
        <TaxBreakdownRowItem>{data.taxableIncome.toLocaleString()}</TaxBreakdownRowItem>
      </TaxBreakdownRow>
      <TaxBreakdownActions>
        <TaxBreakdownButton>OK</TaxBreakdownButton>
        <TaxBreakdownButton>クリア</TaxBreakdownButton>
        <TaxBreakdownButton>キャンセル</TaxBreakdownButton>
      </TaxBreakdownActions>
    </TaxBreakdownContainer>
  );
};

// サンプルデータを用いたコンポーネントの使用例
const SampleTaxData: TaxData = {
  tax: 173251,
  taxRate: 100,
  deduction: 157500,
  taxableIncome: 15751,
};

const App: React.FC = () => {
  return (
    <div>
      <h1>税金計算の内訳</h1>
      <TaxBreakdown data={SampleTaxData} />
    </div>
  );
};

export default App;