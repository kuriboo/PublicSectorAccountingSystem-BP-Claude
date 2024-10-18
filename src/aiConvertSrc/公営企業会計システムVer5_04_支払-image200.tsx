import React from 'react';
import styled from '@emotion/styled';

interface CompanySearchFormProps {
  onSubmit: (formData: FormData) => void;
}

interface FormData {
  period: string;
  fromDate: string;
  toDate: string;
  fields: string[];
  month: boolean;
  tanka: string;
}

const Container = styled.div`
  background-color: #f0f0f0;
  padding: 20px;
  border-radius: 5px;
`;

const Title = styled.h2`
  font-size: 18px;
  margin-bottom: 20px;
`;

const FormGroup = styled.div`
  margin-bottom: 15px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 5px;
`;

const Input = styled.input`
  padding: 5px;
  border-radius: 3px;
  border: 1px solid #ccc;
`;

const CheckboxGroup = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 5px;
`;

const Checkbox = styled.input`
  margin-right: 5px;
`;

const SubmitButton = styled.button`
  background-color: #007bff;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 3px;
  cursor: pointer;
`;

const CompanySearchForm: React.FC<CompanySearchFormProps> = ({ onSubmit }) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData: FormData = {
      period: '',
      fromDate: '',
      toDate: '',
      fields: [],
      month: false,
      tanka: '',
    };
    const form = e.currentTarget;
    formData.period = form.period.value;
    formData.fromDate = form.fromDate.value;
    formData.toDate = form.toDate.value;
    formData.fields = Array.from(form.fields)
      .filter((checkbox: unknown) => (checkbox as HTMLInputElement).checked) // 型を明示的に指定
      .map((checkbox: unknown) => (checkbox as HTMLInputElement).value); // 型を明示的に指定
    formData.month = form.month.checked;
    formData.tanka = form.tanka.value;
    onSubmit(formData);
  };

  return (
    <Container>
      <Title>電子決裁連携状況一覧</Title>
      <form onSubmit={handleSubmit}>
        <FormGroup>
          <Label>範囲指定</Label>
          <Input type="date" name="fromDate" defaultValue="2022-04-01" />{' ～ '}
          <Input type="date" name="toDate" defaultValue="2022-09-14" />
        </FormGroup>
        <FormGroup>
          <CheckboxGroup>
            <Checkbox type="checkbox" name="fields" value="支払分" defaultChecked />
            <Label>支払分</Label>
          </CheckboxGroup>
          <CheckboxGroup>
            <Checkbox type="checkbox" name="fields" value="予定" defaultChecked />
            <Label>予定</Label>
          </CheckboxGroup>
          <CheckboxGroup>
            <Checkbox type="checkbox" name="fields" value="負担" defaultChecked />
            <Label>負担</Label>
          </CheckboxGroup>
          <CheckboxGroup>
            <Checkbox type="checkbox" name="fields" value="決定" defaultChecked />
            <Label>決定</Label>
          </CheckboxGroup>
          <CheckboxGroup>
            <Checkbox type="checkbox" name="fields" value="前払振替" defaultChecked />
            <Label>前払振替</Label>
          </CheckboxGroup>
        </FormGroup>
        <FormGroup>
          <CheckboxGroup>
            <Checkbox type="checkbox" name="fields" value="調定・収納分" defaultChecked />
            <Label>調定・収納分</Label>
          </CheckboxGroup>
          <CheckboxGroup>
            <Checkbox type="checkbox" name="fields" value="個別調定" defaultChecked />
            <Label>個別調定</Label>
          </CheckboxGroup>
          <CheckboxGroup>
            <Checkbox type="checkbox" name="fields" value="減額調定" defaultChecked />
            <Label>減額調定</Label>
          </CheckboxGroup>
          <CheckboxGroup>
            <Checkbox type="checkbox" name="fields" value="個別収納" defaultChecked />
            <Label>個別収納</Label>
          </CheckboxGroup>
        </FormGroup>
        <FormGroup>
          <CheckboxGroup>
            <Checkbox type="checkbox" name="fields" value="前受調定" defaultChecked />
            <Label>前受調定</Label>
          </CheckboxGroup>
          <CheckboxGroup>
            <Checkbox type="checkbox" name="fields" value="前受振替" defaultChecked />
            <Label>前受振替</Label>
          </CheckboxGroup>
        </FormGroup>
        <FormGroup>
          <CheckboxGroup>
            <Checkbox type="checkbox" name="fields" value="集合調定" defaultChecked />
            <Label>集合調定</Label>
          </CheckboxGroup>
          <CheckboxGroup>
            <Checkbox type="checkbox" name="fields" value="集合収納" defaultChecked />
            <Label>集合収納</Label>
          </CheckboxGroup>
        </FormGroup>
        <FormGroup>
          <CheckboxGroup>
            <Checkbox type="checkbox" name="month" defaultChecked />
            <Label>月例分</Label>
          </CheckboxGroup>
        </FormGroup>
        <FormGroup>
          <Label>選択状況</Label>
          <select name="tanka" defaultValue="全て">
            <option value="全て">全て</option>
            {/* Add more options as needed */}
          </select>
        </FormGroup>
        <SubmitButton type="submit">終了</SubmitButton>
      </form>
    </Container>
  );
};

// Usage example
const App: React.FC = () => {
  const handleSubmit = (formData: FormData) => {
    console.log(formData);
    // Perform actions with form data
  };

  return (
    <div>
      <CompanySearchForm onSubmit={handleSubmit} />
    </div>
  );
};

export default App;