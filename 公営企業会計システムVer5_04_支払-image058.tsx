import React from 'react';
import styled from '@emotion/styled';

type ContractType = '普通' | '個人';
type Sex = '男' | '女';

interface ReservationFormProps {
  contractType?: ContractType;
  name?: string;
  sex?: Sex;
  age?: number;
  address?: string;
  effectiveDate?: string;
  expirationDate?: string;
  details?: string;
  totalAmount?: number;
  tax?: number;
  netAmount?: number;
}

const Container = styled.div`
  font-family: sans-serif;
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
`;

const Title = styled.h2`
  text-align: center;
`;

const FormGroup = styled.div`
  margin-bottom: 16px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 8px;
`;

const Input = styled.input`
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Select = styled.select`
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const AmountContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 24px;
`;

const AmountLabel = styled.div`
  font-weight: bold;
`;

const Amount = styled.div``;

const ReservationForm: React.FC<ReservationFormProps> = ({
  contractType = '普通',
  name = '',
  sex = '男',
  age = 0,
  address = '',
  effectiveDate = '',
  expirationDate = '',
  details = '',
  totalAmount = 0,
  tax = 0,
  netAmount = 0,
}) => {
  return (
    <Container>
      <Title>予定支出負担行為入力(一般)</Title>
      <FormGroup>
        <Label>予定処理日</Label>
        <Input type="text" value={effectiveDate} readOnly />
      </FormGroup>
      <FormGroup>
        <Label>契約区分</Label>
        <Select value={contractType}>
          <option value="普通">普通</option>
          <option value="個人">個人</option>
        </Select>
      </FormGroup>
      <FormGroup>
        <Label>契約: 事業者</Label>
        <Input type="text" placeholder="入力" value={name} />
      </FormGroup>
      <FormGroup>
        <Label>性別</Label>
        <Select value={sex}>
          <option value="男">男</option>
          <option value="女">女</option>
        </Select>
      </FormGroup>
      <FormGroup>
        <Label>年度</Label>
        <Input type="number" placeholder="入力" value={age} />
      </FormGroup>
      <FormGroup>
        <Label>支払回数</Label>
        <Input type="text" />
      </FormGroup>
      <FormGroup>
        <Label>期間</Label>
        <Input type="text" value={`${effectiveDate} 〜 ${expirationDate}`} readOnly />
      </FormGroup>
      <FormGroup>
        <Label>摘要</Label>
        <TextArea placeholder="日用品の購入" value={details} />
      </FormGroup>

      <AmountContainer>
        <AmountLabel>合計予定額</AmountLabel>
        <Amount>¥{totalAmount.toLocaleString()}</Amount>
      </AmountContainer>
      <AmountContainer>
        <AmountLabel>合計本体額</AmountLabel>
        <Amount>¥{netAmount.toLocaleString()}</Amount>
      </AmountContainer>
      <AmountContainer>
        <AmountLabel>合計消費税額</AmountLabel>
        <Amount>¥{tax.toLocaleString()}</Amount>
      </AmountContainer>
    </Container>
  );
};

// Usage example
const App: React.FC = () => {
  return (
    <ReservationForm
      name="田中太郎"
      address="東京都千代田区"
      effectiveDate="令和4年12月20日"
      expirationDate="令和5年3月31日"
      details="日用品の購入 ほか"
      totalAmount={26000}
      tax={2000}
      netAmount={22880}
    />
  );
};

export default App;