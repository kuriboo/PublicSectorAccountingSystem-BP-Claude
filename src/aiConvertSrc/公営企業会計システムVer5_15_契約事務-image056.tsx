import React from 'react';
import styled from '@emotion/styled';

type InputDetailProps = {
  inputDate: string;
  category: number;
  amount: number;
  taxAmount: number;
  memo: string;
  onInputAmountChange: (value: number) => void;
  onInputTaxAmountChange: (value: number) => void;
  onMemoChange: (value: string) => void;
  onSubmit: () => void;
  onCancel: () => void;
};

const InputDetail: React.FC<InputDetailProps> = ({
  inputDate,
  category,
  amount,
  taxAmount,
  memo,
  onInputAmountChange,
  onInputTaxAmountChange,
  onMemoChange,
  onSubmit,
  onCancel,
}) => {
  return (
    <Container>
      <Title>入札結果入力(物品明細用)</Title>
      <InputGroup>
        <Label>入札結果本人力</Label>
        <div>
          <span>平成29</span>
          <span>年度</span>
          <span>受付番号</span>
          <span>429890008</span>
        </div>
      </InputGroup>
      <InputGroup>
        <Label>受付区分</Label>
        <div>物品</div>
      </InputGroup>
      <InputGroup>
        <Label>件名</Label>
        <div>さいわい町給水所材料補給</div>
      </InputGroup>
      <InputGroup>
        <Label>場所</Label>
        <div>業種 水道修繕資材及び薬品</div>
      </InputGroup>
      <InputGroup>
        <Label>入札番号</Label>
        <div>001:1号随意契約</div>
      </InputGroup>
      <InputGroup>
        <Label>入札回数</Label>
        <div>0回</div>
      </InputGroup>
      <InputGroup>
        <Label>落札業者</Label>
        <div>00000010028 株式会社水力建</div>
      </InputGroup>
      <InputGroup>
        <Label>代表者</Label>
        <div>代表取締役建設 小太郎</div>
      </InputGroup>
      <PriceInputs>
        <PriceInput>
          <PriceLabel>税込額</PriceLabel>
          <PriceValue>{amount.toLocaleString()}</PriceValue>
        </PriceInput>
        <PriceInput>
          <PriceLabel>税抜額</PriceLabel>
          <PriceValue>
            {(amount - taxAmount).toLocaleString()}
          </PriceValue>
        </PriceInput>
        <PriceInput>
          <PriceLabel>消費税額</PriceLabel>
          <PriceValue>{taxAmount.toLocaleString()}</PriceValue>
        </PriceInput>
      </PriceInputs>
      <InputGroup>
        <Label>契約年月日</Label>
        <div>平成29年06月31日</div>
      </InputGroup>
      <InputGroup>
        <Label>契約保証金</Label>
        <div>0</div>
      </InputGroup>
      <Textarea
        placeholder="備考"
        value={memo}
        onChange={(e) => onMemoChange(e.target.value)}
      />
      <ButtonGroup>
        <Button onClick={onSubmit}>OK</Button>
        <Button onClick={onCancel}>クリア</Button>
        <Button>終了</Button>
      </ButtonGroup>
    </Container>
  );
};

// Sample usage
const SampleInputDetail = () => {
  const handleSubmit = () => {
    console.log('Submitted');
  };

  const handleCancel = () => {
    console.log('Cancelled');
  };
  
  return (
    <InputDetail
      inputDate="平成29年09月12日"
      category={4}
      amount={421200}
      taxAmount={31200}
      memo="さいわい町給水所材料補給"
      onInputAmountChange={(value) => console.log('Input amount:', value)}
      onInputTaxAmountChange={(value) => console.log('Tax amount:', value)}
      onMemoChange={(value) => console.log('Memo:', value)}
      onSubmit={handleSubmit}
      onCancel={handleCancel}
    />
  );
};

export default SampleInputDetail;

// Styled components
const Container = styled.div`
  font-family: MS UI Gothic;
  padding: 16px;
  width: 600px;
  margin: 0 auto;

  @media (max-width: 600px) {
    width: 100%;
  }
`;

const Title = styled.h2`
  text-align: center;
  margin-bottom: 24px;
`;

const InputGroup = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
`;

const Label = styled.div`
  width: 150px;
  font-weight: bold;
`;

const PriceInputs = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 24px;
  margin-bottom: 16px;
`;

const PriceInput = styled.div`
  text-align: center;
`;

const PriceLabel = styled.div`
  font-weight: bold;
`;

const PriceValue = styled.div`
  font-size: 18px;
`;

const Textarea = styled.textarea`
  width: 100%;
  height: 80px;
  margin-bottom: 16px;
  resize: vertical;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  gap: 16px;
`;

const Button = styled.button`
  padding: 8px 16px; 
  min-width: 80px;
`;