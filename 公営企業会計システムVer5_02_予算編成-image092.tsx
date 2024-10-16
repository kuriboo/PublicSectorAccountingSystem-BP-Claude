import React from 'react';
import styled from '@emotion/styled';

type TransferFormProps = {
  year: number;
  fiscalYear: string;
  branch: string;
  account: string;
  subAccount: string;
  transferAmount: number;
  taxRate: number;
  taxAmount: number;
  totalAmount: number;
  onSubmit: () => void;
  onCancel: () => void;
};

const TransferForm: React.FC<TransferFormProps> = ({
  year,
  fiscalYear,
  branch,
  account,
  subAccount,
  transferAmount,
  taxRate,
  taxAmount,
  totalAmount,
  onSubmit,
  onCancel,
}) => {
  return (
    <Container>
      <Header>
        <Title>振替基礎登録</Title>
      </Header>
      <Content>
        <Row>
          <Label>年度</Label>
          <Value>{year}</Value>
          <Label>予算編成区分</Label>
          <Value>{fiscalYear}</Value>
          <SearchButton>検索</SearchButton>
        </Row>
        <Row>
          <Label>節</Label>
          <Value>{branch}</Value>
          <Label>細節</Label>
          <Value>{account}</Value>
          <Label>明細</Label>
          <Value>{subAccount}</Value>
        </Row>
        <AmountRow>
          <Label>振替元行番号</Label>
          <Value>{transferAmount.toLocaleString()} から</Value> 
          <Label>振替先行番号</Label>
          <Value>10 へ</Value>
        </AmountRow>
        <TaxRow>
          <Label>税率</Label>
          <TaxValue>{taxRate}%</TaxValue>
          <Label>税額</Label>
          <TaxValue>¥{taxAmount.toLocaleString()}</TaxValue>  
        </TaxRow>
        <TotalRow>
          <TotalLabel>金額</TotalLabel>
          <TotalValue>¥{totalAmount.toLocaleString()}</TotalValue>
        </TotalRow>
        <ButtonRow>
          <SubmitButton onClick={onSubmit}>OK</SubmitButton>
          <CancelButton onClick={onCancel}>クリア</CancelButton>
          <CancelButton onClick={onCancel}>キャンセル</CancelButton>
        </ButtonRow>
      </Content>
    </Container>
  );
};

// Styled components
const Container = styled.div`
  font-family: sans-serif;
`;

const Header = styled.div`
  background-color: #e0e0e0;
  padding: 10px;
`;

const Title = styled.div`
  font-size: 18px;
  font-weight: bold;
`;

const Content = styled.div`
  padding: 10px;
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const Label = styled.div`
  width: 120px;
  text-align: right;
  margin-right: 10px;
`;

const Value = styled.div`
  width: 150px;
  text-align: left;
`;

const SearchButton = styled.button`
  margin-left: 10px;
`;

const AmountRow = styled(Row)`
  margin-top: 20px;
`;

const TaxRow = styled(Row)`
  margin-top: 10px;
`;

const TaxValue = styled(Value)`
  width: 100px;
`;

const TotalRow = styled(Row)`
  margin-top: 30px;
  justify-content: flex-end;
`;

const TotalLabel = styled(Label)`
  width: auto;
  margin-right: 20px;
`;

const TotalValue = styled(Value)`
  font-size: 24px;
  font-weight: bold;
`;

const ButtonRow = styled.div`
  margin-top: 30px;
  text-align: center;
`;

const SubmitButton = styled.button`
  margin-right: 10px;
`;

const CancelButton = styled.button`
  margin-left: 10px;
`;

// Example usage
const App: React.FC = () => {
  const handleSubmit = () => {
    // Handle form submission
  };

  const handleCancel = () => {
    // Handle cancel action  
  };

  return (
    <TransferForm
      year={2023}
      fiscalYear="当初予算"  
      branch="51(27)高度浄水施設建設大森東移転事業"
      account="設計費"
      subAccount="補償整理業務委託"
      transferAmount={99999}
      taxRate={10}
      taxAmount={10000000}
      totalAmount={110000000}  
      onSubmit={handleSubmit}
      onCancel={handleCancel}
    />
  );
};

export default App;