import React from 'react';
import styled from 'styled-components';

// 収入伝票コンポーネントのプロパティ型
interface ReceiptProps {
  startDate: string;
  endDate: string;
  startAmount: number;
  endAmount: number;
  paymentMethod: '振込' | '現金';
  processCategory: '新規' | '再発行';
  printTarget: '節別年度別計' | '年度別計';
}

// 収入伝票コンポーネント
const Receipt: React.FC<ReceiptProps> = ({
  startDate,
  endDate,
  startAmount,
  endAmount,
  paymentMethod,
  processCategory,
  printTarget,
}) => {
  return (
    <ReceiptWrapper>
      <Header>収入伝票（一覧）</Header>
      <DateRangeWrapper>
        <Label>範囲指定</Label>
        <DateWrapper>
          <Label>収納日</Label>
          <DateInput type="text" value={startDate} readOnly />
          <span>～</span>
          <DateInput type="text" value={endDate} readOnly />
        </DateWrapper>
        <AmountWrapper>
          <Label>所属</Label>
          <AmountInput type="text" value={startAmount.toLocaleString()} readOnly />
          <span>～</span>
          <AmountInput type="text" value={endAmount.toLocaleString()} readOnly />
        </AmountWrapper>
        <RadioWrapper>
          <RadioButton type="radio" id="transfer" name="paymentMethod" checked={paymentMethod === '振込'} readOnly />
          <RadioLabel htmlFor="transfer">振込</RadioLabel>
          <RadioButton type="radio" id="cash" name="paymentMethod" checked={paymentMethod === '現金'} readOnly />
          <RadioLabel htmlFor="cash">現金</RadioLabel>
        </RadioWrapper>
      </DateRangeWrapper>
      <CategoryWrapper>
        <Label>発行区分</Label>
        <RadioButton type="radio" id="new" name="processCategory" checked={processCategory === '新規'} readOnly />
        <RadioLabel htmlFor="new">新規</RadioLabel>
        <RadioButton type="radio" id="reissue" name="processCategory" checked={processCategory === '再発行'} readOnly />
        <RadioLabel htmlFor="reissue">再発行</RadioLabel>
      </CategoryWrapper>
      <PrintTargetWrapper>
        <RadioButton type="radio" id="annual" name="printTarget" checked={printTarget === '節別年度別計'} readOnly />
        <RadioLabel htmlFor="annual">節別年度別計</RadioLabel>
        <RadioButton type="radio" id="fiscalYear" name="printTarget" checked={printTarget === '年度別計'} readOnly />
        <RadioLabel htmlFor="fiscalYear">年度別計</RadioLabel>
      </PrintTargetWrapper>
      <ButtonWrapper>
        <Button>OK</Button>
        <Button>クリア</Button>
        <Button>終了</Button>
      </ButtonWrapper>
    </ReceiptWrapper>
  );
};

// スタイリング
const ReceiptWrapper = styled.div`
  font-family: sans-serif;
  padding: 20px;
`;

const Header = styled.h2`
  font-size: 18px;
  margin-bottom: 20px;
`;

const DateRangeWrapper = styled.div`
  margin-bottom: 20px;
`;

const Label = styled.label`
  display: inline-block;
  width: 100px;
  font-weight: bold;
`;

const DateWrapper = styled.div`
  margin-bottom: 10px;
`;

const DateInput = styled.input`
  width: 120px;
  padding: 5px;
  margin-right: 10px;
`;

const AmountWrapper = styled.div`
  margin-bottom: 10px;
`;

const AmountInput = styled.input`
  width: 120px;
  padding: 5px;
  margin-right: 10px;
`;

const RadioWrapper = styled.div`
  margin-bottom: 10px;
`;

const RadioButton = styled.input`
  margin-right: 5px;
`;

const RadioLabel = styled.label`
  margin-right: 20px;
`;

const CategoryWrapper = styled.div`
  margin-bottom: 20px;
`;

const PrintTargetWrapper = styled.div`
  margin-bottom: 20px;
`;

const ButtonWrapper = styled.div`
  text-align: center;
`;

const Button = styled.button`
  padding: 10px 20px;
  margin-right: 10px;
  background-color: #f0f0f0;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #e0e0e0;
  }
`;

// サンプルデータ
const sampleData: ReceiptProps = {
  startDate: '平成29年06月18日',
  endDate: '平成29年06月18日',
  startAmount: 0,
  endAmount: 9999999,
  paymentMethod: '振込',
  processCategory: '新規',
  printTarget: '節別年度別計',
};

// 使用例
const App: React.FC = () => {
  return (
    <div>
      <Receipt {...sampleData} />
    </div>
  );
};

export default App;