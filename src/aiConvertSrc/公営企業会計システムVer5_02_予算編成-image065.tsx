import React from 'react';
import styled from '@emotion/styled';

type ReservationFormProps = {
  onSubmit: (data: ReservationData) => void;
};

type ReservationData = {
  year: number;
  forecastType: string;
  shareNumber: number;
  executionStatus: string;
  basisOfRecord: string;
  priceType: string;
  accountingType: string;
  fromDate: string;
  toDate: string;
  fromPrice: number;
  toPrice: number;
  segment: number;
};

const ReservationForm: React.FC<ReservationFormProps> = ({ onSubmit }) => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const data: ReservationData = {
      year: Number(formData.get('year')),
      forecastType: formData.get('forecastType') as string,
      shareNumber: Number(formData.get('shareNumber')),
      executionStatus: formData.get('executionStatus') as string,
      basisOfRecord: formData.get('basisOfRecord') as string,
      priceType: formData.get('priceType') as string,
      accountingType: formData.get('accountingType') as string,
      fromDate: formData.get('fromDate') as string,
      toDate: formData.get('toDate') as string,
      fromPrice: Number(formData.get('fromPrice')),
      toPrice: Number(formData.get('toPrice')),
      segment: Number(formData.get('segment')),
    };
    onSubmit(data);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <Label>年度</Label>
        <Input type="number" name="year" defaultValue={new Date().getFullYear()} />
      </FormGroup>
      <FormGroup>
        <Label>予算種成</Label>
        <Select name="forecastType" defaultValue="当初予算">
          <option value="当初予算">当初予算</option>
        </Select>
      </FormGroup>
      <FormGroup>
        <Label>補正</Label>
        <Input type="number" name="shareNumber" defaultValue={0} />
      </FormGroup>
      <FormGroup>
        <Label>最終査定値</Label>
        <RadioGroup>
          <Radio>
            <input type="radio" name="executionStatus" value="見積要求額" defaultChecked />
            見積要求額
          </Radio>
          <Radio>
            <input type="radio" name="executionStatus" value="査定額" />
            査定額
          </Radio>
        </RadioGroup>
      </FormGroup>
      <FormGroup>
        <Label>金額種別</Label>
        <RadioGroup>
          <Radio>
            <input type="radio" name="basisOfRecord" value="税込" defaultChecked />
            税込
          </Radio>
          <Radio>
            <input type="radio" name="basisOfRecord" value="税抜" />
            税抜
          </Radio>
          <Radio>
            <input type="radio" name="basisOfRecord" value="消費税" />
            消費税
          </Radio>
        </RadioGroup>
      </FormGroup>
      <FormGroup>
        <Label>帳票種別</Label>
        <RadioGroup>
          <Radio>
            <input type="radio" name="priceType" value="科目別" defaultChecked />
            科目別
          </Radio>
          <Radio>
            <input type="radio" name="priceType" value="所属別" />
            所属別
          </Radio>
        </RadioGroup>
      </FormGroup>
      <PriceGroup>
        <PriceLabel>新開指定</PriceLabel>
        <InputGroup>
          <PriceInput type="number" name="fromPrice" defaultValue={0} />
          <Tilde>~</Tilde> 
          <PriceInput type="number" name="toPrice" defaultValue={99999999} />
        </InputGroup>
        <InputGroup>
          <PriceInput type="number" name="fromDate" defaultValue={0} />
          <Tilde>~</Tilde>
          <PriceInput type="number" name="toDate" defaultValue={99999999} />
        </InputGroup>
      </PriceGroup>
      <FormGroup>
        <Label>セグメント</Label>
        <Select name="segment" defaultValue={10}>
          {[...Array(10)].map((_, i) => (
            <option key={i + 1} value={i + 1}>
              {i + 1}公共
            </option> 
          ))}
        </Select>
      </FormGroup>
      <SubmitButton type="submit">CSV出力</SubmitButton>
    </Form>
  );
};

// Usage example
const App = () => {
  const handleSubmit = (data: ReservationData) => {
    console.log(data);
    // Perform CSV export or other actions with form data
  };

  return (
    <div>
      <h1>予算査定一覧表</h1>
      <ReservationForm onSubmit={handleSubmit} />
    </div>
  );
}

// Styled components 
const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 600px;
  margin: 0 auto;
`;

const FormGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const Label = styled.label`
  flex: 0 0 120px;
  text-align: right;
`;

const Input = styled.input`
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 100px;
`;

const Select = styled.select`
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 150px;
`;

const RadioGroup = styled.div`
  display: flex;
  gap: 1rem;
`;

const Radio = styled.label`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const PriceGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const PriceLabel = styled.span`
  flex: 0 0 120px;
  text-align: right;
`;

const InputGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const PriceInput = styled.input`
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 100px;
`;

const Tilde = styled.span`
  margin: 0 0.5rem;
`;

const SubmitButton = styled.button`
  padding: 0.5rem 1rem;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  align-self: flex-end;
  
  &:hover {
    background-color: #0056b3;
  }
`;

export default App;