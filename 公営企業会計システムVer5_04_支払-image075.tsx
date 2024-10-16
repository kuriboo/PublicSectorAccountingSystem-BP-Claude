import React from 'react';
import styled from 'styled-components';

// 印刷対象集要件の型定義
type PrintTargetRequirements = {
  printCommentariesForStamp: boolean; // 負担行為伺兼命令書(一般)
  printCommentariesForStamp2: boolean; // 負担行為伺兼命令書(一般)
  printControlBook: boolean; // 控除明細内訳
  printBankTransferRequest: boolean; // 債権者一覧
  printTaxWithholdingListForIncome: boolean; // 税区分別 税率別金額合計一覧
};

// スタイリング
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 14px;

  @media (max-width: 600px) {
    font-size: 12px;
  }
`;

const Title = styled.div`
  font-weight: bold;
  margin-bottom: 8px;
`;

const CheckboxContainer = styled.label`
  display: flex;
  align-items: center;
  margin-bottom: 4px;
`;

const Checkbox = styled.input`
  margin-right: 8px;
`;

const Label = styled.span``;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  margin-top: 16px;
`;

const Button = styled.button`
  padding: 8px 16px;
  margin-left: 8px;
  border: none;
  border-radius: 4px;
  background-color: ${props => props.disabled ? '#ccc' : '#007bff'};
  color: #fff;
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
`;

// 印刷対象集要件コンポーネント
const PrintTargetRequirementsComponent: React.FC<PrintTargetRequirements> = ({
  printCommentariesForStamp,
  printCommentariesForStamp2, 
  printControlBook,
  printBankTransferRequest,
  printTaxWithholdingListForIncome
}) => {
  return (
    <Container>
      <Title>印刷対象集要件</Title>
      <CheckboxContainer>
        <Checkbox type="checkbox" checked={printCommentariesForStamp} disabled />
        <Label>負担行為伺兼命令書(一般) とりまとめ</Label>
      </CheckboxContainer>
      <CheckboxContainer>
        <Checkbox type="checkbox" checked={printCommentariesForStamp2} disabled />
        <Label>負担行為伺兼命令書(一般)</Label>
      </CheckboxContainer>
      <CheckboxContainer>
        <Checkbox type="checkbox" checked={printControlBook} />
        <Label>控除明細内訳</Label>  
      </CheckboxContainer>
      <CheckboxContainer>
        <Checkbox type="checkbox" checked={printBankTransferRequest} />
        <Label>債権者一覧</Label>
      </CheckboxContainer>
      <CheckboxContainer>
        <Checkbox type="checkbox" checked={printTaxWithholdingListForIncome} />
        <Label>税区分別 税率別金額合計一覧</Label>
      </CheckboxContainer>

      <ButtonContainer>
        <Button disabled>OK</Button>
        <Button>クリア</Button>
        <Button>キャンセル</Button>
      </ButtonContainer>
    </Container>
  );
};

// 使用例
const App: React.FC = () => {
  const requirements: PrintTargetRequirements = {
    printCommentariesForStamp: true,
    printCommentariesForStamp2: false,
    printControlBook: true,
    printBankTransferRequest: true,  
    printTaxWithholdingListForIncome: true
  };

  return (
    <div>
      <h1>印刷対象集要件の設定</h1>
      <PrintTargetRequirementsComponent {...requirements} />
    </div>
  );
}

export default App;