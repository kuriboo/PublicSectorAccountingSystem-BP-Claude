import React from 'react';
import styled from '@emotion/styled';

interface TaxFormProps {
  companyName: string;
  salesAmount: number;
  taxAmount: number;
  consumptionTaxAmount: number;
  totalPaymentAmount: number;
  paymentDate: string;
  paymentAmount: number;
}

const TaxForm: React.FC<TaxFormProps> = ({
  companyName,
  salesAmount,
  taxAmount,
  consumptionTaxAmount,
  totalPaymentAmount,
  paymentDate,
  paymentAmount,
}) => {
  return (
    <Container>
      <Title>入札結果入力</Title>
      <InputWrapper>
        <Label>受付区分</Label>
        <Select>
          <option value="入札結果候補">入札結果候補</option>
          <option value="入札結果取消">入札結果取消</option>
        </Select>
      </InputWrapper>
      <InputWrapper>
        <Label>委託区分</Label>
        <Input type="text" value="第11次共同電文提出事(第7区画)" readOnly />
      </InputWrapper>
      <InputWrapper>
        <Label>場所</Label>
        <Input type="text" value="前内さい松い町1丁目からS丁目" readOnly />
      </InputWrapper>
      <InputWrapper>
        <Label>入札結果</Label>
        <Input type="text" defaultValue="0106落札" />
      </InputWrapper>
      <InputWrapper>
        <Label>入札回数</Label>
        <Input type="number" defaultValue={3} />
        <Label>回</Label>
      </InputWrapper>
      <InputWrapper>
        <Label>代表者</Label>
        <Input type="text" value="代表取締役こうどう 大五郎" readOnly />
      </InputWrapper>
      <AmountSection>
        <AmountItem>
          <AmountLabel>税込額</AmountLabel>
          <AmountValue>{salesAmount.toLocaleString()}</AmountValue>
        </AmountItem>
        <AmountItem>
          <AmountLabel>税抜額</AmountLabel>
          <AmountValue>{taxAmount.toLocaleString()}</AmountValue>
        </AmountItem>
        <AmountItem>
          <AmountLabel>消費税額</AmountLabel>
          <AmountValue>{consumptionTaxAmount.toLocaleString()}</AmountValue>
        </AmountItem>
      </AmountSection>
      <InputWrapper>
        <Label>契約年月日</Label>
        <Input type="text" value={paymentDate} readOnly />
      </InputWrapper>
      <InputWrapper>
        <Label>契約保証金</Label>
        <Input type="number" defaultValue={paymentAmount} />
      </InputWrapper>
      <ButtonGroup>
        <Button>支払条件</Button>
        <Button primary>入札登録</Button>
        <Button>管理</Button>
        <Button>JV構成業者</Button>
        <Button>保証人</Button>
        <Button primary>OK</Button>
        <Button>クリア</Button>
        <Button>終了</Button>
      </ButtonGroup>
    </Container>
  );
};

// サンプルデータ
const sampleData: TaxFormProps = {
  companyName: 'こうどう総合建築株式会社',
  salesAmount: 3000000,
  taxAmount: 2777778,
  consumptionTaxAmount: 222222,
  totalPaymentAmount: 3000000,
  paymentDate: '平成29年09月08日',
  paymentAmount: 0,
};

// 使用例
const TaxFormExample: React.FC = () => {
  return (
    <TaxForm
      companyName={sampleData.companyName}
      salesAmount={sampleData.salesAmount}
      taxAmount={sampleData.taxAmount}  
      consumptionTaxAmount={sampleData.consumptionTaxAmount}
      totalPaymentAmount={sampleData.totalPaymentAmount}
      paymentDate={sampleData.paymentDate}
      paymentAmount={sampleData.paymentAmount}
    />
  );
};

export default TaxFormExample;

// スタイリング
const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f0f0f0;
  font-family: sans-serif;
`;

const Title = styled.h2`
  margin-bottom: 20px;
  text-align: center;
`;

const InputWrapper = styled.div`
  margin-bottom: 10px;
  display: flex;
  align-items: center;
`;

const Label = styled.label`
  width: 150px;
  margin-right: 10px;
`;

const Input = styled.input`
  flex: 1;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 3px;
`;

const Select = styled.select`
  flex: 1;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 3px;
`;

const AmountSection = styled.div`
  margin: 20px 0;
  display: flex;
  justify-content: space-between;
`;

const AmountItem = styled.div`
  text-align: center;
`;

const AmountLabel = styled.div`
  margin-bottom: 5px;
  font-weight: bold;
`;

const AmountValue = styled.div`
  font-size: 18px;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const Button = styled.button<{ primary?: boolean }>`
  padding: 8px 16px;
  margin: 0 5px;
  border: none;
  border-radius: 3px;
  background-color: ${({ primary }) => (primary ? '#007bff' : '#f0f0f0')};
  color: ${({ primary }) => (primary ? '#fff' : '#333')};
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;