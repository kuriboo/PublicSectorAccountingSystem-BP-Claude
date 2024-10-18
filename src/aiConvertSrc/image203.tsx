import React from 'react';
import styled from '@emotion/styled';

type FormData = {
  period: {
    from: string;
    to: string;
  };
  types: string[];
  payment: {
    cash: boolean;
    transfer: boolean;
    deposit: boolean;
    bills: boolean;
  };
  date: {
    use: boolean;
    delivery: boolean;
  };
  customer: boolean;
  tran: boolean;
  tran_detail: string[];
};

type Props = {
  onSubmit: (data: FormData) => void;
};

const Container = styled.div`
  background-color: #f0f0f0;
  padding: 20px;
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  box-sizing: border-box;
`;

const Title = styled.h2`
  font-size: 20px;
  margin-bottom: 20px;
`;

const FormGroup = styled.div`
  margin-bottom: 20px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 5px;
`;

const Input = styled.input`
  padding: 8px;
  border-radius: 4px;
  border: 1px solid #ccc;
  width: 100%;
  box-sizing: border-box;
`;

const CheckboxGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const Checkbox = styled.input`
  margin-right: 5px;
`;

const RadioGroup = styled.div`
  display: flex;
  gap: 10px;
`;

const RadioLabel = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const Radio = styled.input`
  margin-right: 5px;
`;

const Button = styled.button`
  background-color: #007bff;
  color: #fff;
  padding: 10px 20px;
  border: none; 
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background-color: #0056b3;
  }
`;

const TranDetailForm: React.FC<Props> = ({ onSubmit }) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data: FormData = {
      period: {
        from: form.from.value,
        to: form.to.value,
      },
      types: Array.from(form.querySelectorAll<HTMLInputElement>('input[name="type"]:checked')).map(el => el.value),
      payment: {
        cash: form.cash.checked,
        transfer: form.transfer.checked,  
        deposit: form.deposit.checked,
        bills: form.bills.checked,
      },
      date: {
        use: form.use_date.checked,
        delivery: form.delivery_date.checked,  
      },
      customer: form.customer.checked,
      tran: form.tran.checked,
      tran_detail: Array.from(form.querySelectorAll<HTMLInputElement>('input[name="tran_detail"]:checked')).map(el => el.value),
    };
    onSubmit(data);
  };

  return (
    <Container>
      <Title>電子決裁連携状況一覧</Title>
      <form onSubmit={handleSubmit}>
        <FormGroup>
          <Label>範囲指定</Label>
          <Input type="text" name="from" defaultValue="令和04年04月01日" />
          <span>～</span>
          <Input type="text" name="to" defaultValue="令和05年03月14日" />
        </FormGroup>
        <FormGroup>
          <Label>伝票</Label>
          <CheckboxGroup>
            <CheckboxLabel>
              <Checkbox type="checkbox" name="type" value="支払分" defaultChecked />
              支払分
            </CheckboxLabel>
            <CheckboxLabel>
              <Checkbox type="checkbox" name="type" value="予定" defaultChecked />
              予定  
            </CheckboxLabel>
            <CheckboxLabel>
              <Checkbox type="checkbox" name="type" value="負担" defaultChecked />
              負担
            </CheckboxLabel>
            <CheckboxLabel>  
              <Checkbox type="checkbox" name="type" value="決定" defaultChecked />
              決定
            </CheckboxLabel>
            <CheckboxLabel>
              <Checkbox type="checkbox" name="type" value="前払振替" defaultChecked /> 
              前払振替
            </CheckboxLabel>
          </CheckboxGroup>
        </FormGroup>
        <FormGroup>
          <Label>調定・収納分</Label>
          <CheckboxGroup>
            <CheckboxLabel>
              <Checkbox type="checkbox" name="payment" value="cash" defaultChecked />
              個別調定
            </CheckboxLabel>
            <CheckboxLabel>
              <Checkbox type="checkbox" name="payment" value="transfer" defaultChecked />  
              集合調定
            </CheckboxLabel>
            <CheckboxLabel>
              <Checkbox type="checkbox" name="payment" value="deposit" defaultChecked />
              個別収納  
            </CheckboxLabel>
            <CheckboxLabel>
              <Checkbox type="checkbox" name="payment" value="bills" defaultChecked />
              前受調定
            </CheckboxLabel>
            <CheckboxLabel>
              <Checkbox type="checkbox" name="payment" value="bills" defaultChecked />
              前受振替
            </CheckboxLabel>
            <CheckboxLabel>  
              <Checkbox type="checkbox" name="payment" value="bills" defaultChecked />
              集合調定
            </CheckboxLabel>
            <CheckboxLabel>
              <Checkbox type="checkbox" name="payment" value="bills" defaultChecked />  
              集合収納
            </CheckboxLabel>
          </CheckboxGroup>
        </FormGroup>
        <FormGroup>
          <Label>月例分</Label>
          <CheckboxLabel>
            <Checkbox type="checkbox" name="use_date" defaultChecked />
            流用先用
          </CheckboxLabel>
        </FormGroup>
        <FormGroup>
          <CheckboxLabel>
            <Checkbox type="checkbox" name="customer" />
            委託先票
          </CheckboxLabel>
        </FormGroup>  
        <FormGroup>
          <CheckboxLabel>
            <Checkbox type="checkbox" name="tran" />
            支払伝票票
          </CheckboxLabel>
        </FormGroup>
        <FormGroup>
          <Label>会計伝票</Label>
          <RadioGroup>
            <RadioLabel>
              <Radio type="radio" name="tran_detail" value="支払伝票詳票" />
              支払伝票詳票  
            </RadioLabel>
            <RadioLabel>
              <Radio type="radio" name="tran_detail" value="収入伝票詳票" />
              収入伝票詳票
            </RadioLabel>
            <RadioLabel>  
              <Radio type="radio" name="tran_detail" value="振替伝票詳票" />
              振替伝票詳票
            </RadioLabel>
            <RadioLabel>
              <Radio type="radio" name="tran_detail" value="支払伝票一覧" />
              支払伝票一覧
            </RadioLabel>
            <RadioLabel>
              <Radio type="radio" name="tran_detail" value="収入伝票一覧" /> 
              収入伝票一覧  
            </RadioLabel>
            <RadioLabel>
              <Radio type="radio" name="tran_detail" value="振替伝票一覧" />
              振替伝票一覧
            </RadioLabel>  
          </RadioGroup>
        </FormGroup>
        <FormGroup>
          <Label>連携状況</Label>
          <Input as="select">
            <option value="全て">全て</option>
          </Input>
        </FormGroup>
        <Button type="submit">終了</Button>
      </form>  
    </Container>
  );
};

// Usage example
const App: React.FC = () => {
  const handleSubmit = (data: FormData) => {
    console.log(data);
  };

  return (
    <div>
      <h1>Transaction Detail Form Example</h1>
      <TranDetailForm onSubmit={handleSubmit} />
    </div>
  );
};

export default App;