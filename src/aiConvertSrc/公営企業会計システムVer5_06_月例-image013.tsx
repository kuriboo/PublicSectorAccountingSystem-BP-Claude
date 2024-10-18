import React from 'react';
import styled from 'styled-components';

// 振替日程解除入力のプロパティ型定義
interface TransferCancellationInputProps {
  date: string;
  borrowingAccountName: string;
  borrowingBranchName: string;
  borrowingDetails: string;
  borrowingAmount: number;
  lendingAccountName: string;
  lendingBranchName: string;
  lendingDetails: string;
  lendingAmount: number;
  reversalFee: number;
  taxRate: number;
  taxAmount: number;
  totalAmount: number;
  isSpecialTax: boolean;
}

// スタイル定義
const Container = styled.div`
  font-family: Arial, sans-serif;
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
`;

const Title = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
`;

const FormGroup = styled.div`
  margin-bottom: 20px;
`;

const Label = styled.div`
  font-weight: bold;
  margin-bottom: 5px;
`;

const Input = styled.input`
  width: 100%;
  padding: 5px;
  font-size: 16px;
`;

const Select = styled.select`
  width: 100%;
  padding: 5px;
  font-size: 16px;
`;

const AmountGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
`;

const AmountGroup = styled.div`
  border: 1px solid #ccc;
  padding: 10px;
`;

const AmountLabel = styled.div`
  font-weight: bold;
`;

const AmountValue = styled.div`
  text-align: right;
`;

const ButtonGroup = styled.div`
  text-align: center;
  margin-top: 20px;
`;

const Button = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  margin: 0 10px;
`;

// 振替日程解除入力のコンポーネント
const TransferCancellationInput: React.FC<TransferCancellationInputProps> = ({
  date,
  borrowingAccountName,
  borrowingBranchName,
  borrowingDetails,
  borrowingAmount,
  lendingAccountName,
  lendingBranchName,
  lendingDetails,
  lendingAmount,
  reversalFee,
  taxRate,
  taxAmount,
  totalAmount,
  isSpecialTax,
}) => {
  return (
    <Container>
      <Title>振替日程解除入力</Title>
      <FormGroup>
        <Label>伝票日付</Label>
        <Input type="date" value={date} readOnly />
      </FormGroup>
      <FormGroup>
        <Label>摘要</Label>
        <Input type="text" value="仕訳科目調整入力の仕訳" readOnly />
      </FormGroup>
      <AmountGrid>
        <AmountGroup>
          <AmountLabel>借方科目</AmountLabel>
          <AmountValue>{borrowingAccountName}</AmountValue>
          <AmountLabel>借方部門</AmountLabel>
          <AmountValue>{borrowingBranchName}</AmountValue>
          <AmountLabel>借方金額</AmountLabel>
          <AmountValue>{borrowingAmount.toLocaleString()}</AmountValue>
        </AmountGroup>
        <AmountGroup>
          <AmountLabel>貸方科目</AmountLabel>
          <AmountValue>{lendingAccountName}</AmountValue>
          <AmountLabel>貸方部門</AmountLabel>
          <AmountValue>{lendingBranchName}</AmountValue>
          <AmountLabel>貸方金額</AmountLabel>
          <AmountValue>{lendingAmount.toLocaleString()}</AmountValue>
        </AmountGroup>
      </AmountGrid>
      <FormGroup>
        <Label>消費税率</Label>
        <Select value={taxRate}>
          <option value="">選択してください</option>
          <option value="10">10%</option>
          <option value="8">8%</option>
        </Select>
      </FormGroup>
      <FormGroup>
        <Label>税区分</Label>
        <Select value={isSpecialTax ? '旧中仕訳' : '通常仕訳'}>
          <option value="通常仕訳">通常仕訳</option>
          <option value="旧中仕訳">旧中仕訳</option>
        </Select>
      </FormGroup>
      <AmountGrid>
        <div>
          <Label>税込金額</Label>
          <AmountValue>{totalAmount.toLocaleString()}</AmountValue>
        </div>
        <div>
          <Label>消費税額</Label>
          <AmountValue>{taxAmount.toLocaleString()}</AmountValue>
        </div>
      </AmountGrid>
      <ButtonGroup>
        <Button>OK</Button>
        <Button>クリア</Button>
        <Button>終了</Button>
      </ButtonGroup>
    </Container>
  );
};

// サンプルデータ
const sampleData: TransferCancellationInputProps = {
  date: '2029-09-06',
  borrowingAccountName: '他勘定振替',
  borrowingBranchName: '他勘定振替',
  borrowingDetails: 'その他借入金',
  borrowingAmount: 350000,
  lendingAccountName: '他勘定振替',
  lendingBranchName: '他勘定振替',
  lendingDetails: 'その他借入金',  
  lendingAmount: 350000,
  reversalFee: 0,
  taxRate: 10,
  taxAmount: 0,
  totalAmount: 350000,
  isSpecialTax: false,
};

// 使用例
const App: React.FC = () => {
  return (
    <div>
      <h1>振替日程解除入力の例</h1>
      <TransferCancellationInput {...sampleData} />
    </div>
  );
};

export default App;