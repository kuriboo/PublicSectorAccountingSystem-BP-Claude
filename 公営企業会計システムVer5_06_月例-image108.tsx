import React from 'react';
import styled from '@emotion/styled';

type EucSearchProps = {
  fromDate: string;
  toDate: string;
  fromAmount: string;
  toAmount: string;
  fromAmountLabel?: string;
  toAmountLabel?: string;
};

const EucSearch: React.FC<EucSearchProps> = ({
  fromDate,
  toDate,
  fromAmount,
  toAmount,
  fromAmountLabel = '0000',
  toAmountLabel = '9999',
}) => {
  return (
    <Container>
      <Title>範囲指定</Title>
      <Row>
        <RowLabel>作表日</RowLabel>
        <InputWrapper>
          <DateInput value={fromDate} readOnly />
          <Separator>～</Separator>
          <DateInput value={toDate} readOnly />
        </InputWrapper>
      </Row>
      <Row>
        <RowLabel>仕訳科目</RowLabel>
        <InputWrapper>
          <AmountInput value={fromAmount} readOnly />
          <Separator>～</Separator>
          <AmountInput value={toAmount} readOnly />
        </InputWrapper>
      </Row>
      <Row>
        <RowLabel>仕訳細節</RowLabel>
        <InputWrapper>
          <AmountInput value={fromAmountLabel} readOnly />
          <Separator>～</Separator>
          <AmountInput value={toAmountLabel} readOnly />
        </InputWrapper>
      </Row>
    </Container>
  );
};

const Container = styled.div`
  background-color: #f0f0f0;
  padding: 16px;
  border-radius: 4px;
`;

const Title = styled.h3`
  margin: 0 0 16px;
  font-size: 18px;
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
`;

const RowLabel = styled.span`
  width: 100px;
  font-weight: bold;
`;

const InputWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const DateInput = styled.input`
  width: 120px;
  padding: 4px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 14px;
`;

const AmountInput = styled.input`
  width: 80px;
  padding: 4px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 14px;
`;

const Separator = styled.span`
  margin: 0 8px;
`;

// 使用例
const App: React.FC = () => {
  return (
    <EucSearch
      fromDate="平成05年04月01日"
      toDate="令和06年03月31日"
      fromAmount="000000000"  
      toAmount="999999999"
    />
  );
};

export default App;