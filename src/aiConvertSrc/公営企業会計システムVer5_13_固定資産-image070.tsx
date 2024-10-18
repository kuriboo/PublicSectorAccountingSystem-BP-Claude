import React from 'react';
import styled from 'styled-components';

// 型定義
interface InvestmentRegisterProps {
  productNumber?: string;
  accountingDate?: string;
  amount?: number;
  directionAccountingAmountAfterDeduction?: number;
  taxAmountIncludedInDirectionAccount?: number;
  feeAmount?: number;
  destinationAddress?: string;
  destinationName?: string;
  bankCode?: string;
  branchCode?: string;
  accountType?: string;
  accountNumber?: string;
  accountHolderName?: string;
  paymentDate?: string;
  dividendYears?: number;
  remarks?: string;
}

// スタイル定義
const Container = styled.div`
  display: grid;
  gap: 10px;
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const Section = styled.div`
  border: 1px solid #ccc;
  padding: 10px;
`;

const Label = styled.div`
  font-weight: bold;
  margin-bottom: 5px;
`;

const Value = styled.div`
  margin-left: 10px;
`;

const Divider = styled.hr`
  margin: 10px 0;
  border: none;
  border-top: 1px solid #ccc;
`;

// コンポーネント定義
const InvestmentRegister: React.FC<InvestmentRegisterProps> = ({
  productNumber,
  accountingDate,
  amount,
  directionAccountingAmountAfterDeduction,
  taxAmountIncludedInDirectionAccount,
  feeAmount,
  destinationAddress,
  destinationName,
  bankCode,
  branchCode,
  accountType,
  accountNumber,
  accountHolderName,
  paymentDate,
  dividendYears,
  remarks,
}) => {
  return (
    <Container>
      <Section>
        <Label>商品番号</Label>
        <Value>{productNumber || '---'}</Value>
        
        <Label>異動簿号</Label>
        <Value>{accountingDate || '---'}</Value>
        
        <Label>減損前</Label>
        <Value>{amount?.toLocaleString() || '---'}</Value>

        <Label>減損額</Label>  
        <Value>{directionAccountingAmountAfterDeduction?.toLocaleString() || '---'}</Value>

        <Label>帳簿価額</Label>
        <Value>{taxAmountIncludedInDirectionAccount?.toLocaleString() || '---'}</Value>

        <Label>減損額</Label>
        <Value>{feeAmount?.toLocaleString() || '---'}</Value>
      </Section>
      
      <Section>
        <Label>振込先</Label>
        <Value>{destinationAddress || '---'}</Value>
        <Value>{destinationName || '---'}</Value>
        
        <Label>銀行コード</Label>
        <Value>{bankCode || '---'}</Value>
        
        <Label>支店コード</Label>  
        <Value>{branchCode || '---'}</Value>
        
        <Label>口座種別</Label>
        <Value>{accountType || '---'}</Value>
        
        <Label>口座番号</Value>  
        <Value>{accountNumber || '---'}</Value>
        
        <Label>口座名義</Label>  
        <Value>{accountHolderName || '---'}</Value>
      </Section>
      
      <Divider />
      
      <Section>
        <Label>取得年月日</Label>  
        <Value>{paymentDate || '---'}</Value>
        
        <Label>配当年数</Label>  
        <Value>{dividendYears?.toLocaleString() || '---'} 年</Value>
        
        <Label>備考</Label>
        <Value>{remarks || '---'}</Value>  
      </Section>
      
    </Container>
  );
};

// 使用例
const SampleData: InvestmentRegisterProps = {
  productNumber: "8002500",
  accountingDate: "平成30年6月30日",
  amount: 7000000,
  directionAccountingAmountAfterDeduction: 7000000, 
  taxAmountIncludedInDirectionAccount: 7000000,
  feeAmount: 5500000,
  destinationAddress: "東京都千代田区",
  destinationName: "財源名称",
  bankCode: "0001",
  branchCode: "001",
  accountType: "普通",
  accountNumber: "0000001",
  accountHolderName: "管理金融有",
  paymentDate: "平成29年09月12日",
  dividendYears: 040,
  remarks: "定期法",
};

const App: React.FC = () => {
  return (
    <div>
      <h1>減損資産対象登録</h1>
      <InvestmentRegister {...SampleData} />
    </div>
  );  
};

export default App;