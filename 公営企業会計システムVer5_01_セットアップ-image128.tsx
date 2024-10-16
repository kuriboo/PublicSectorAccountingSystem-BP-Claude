import React from 'react';
import styled from '@emotion/styled';

interface MasterData {
  id: number;
  name: string;
  kana: string;
  tel: string;
  fax: string;
}

interface CustomerRegistrationFormProps {
  masterData: MasterData[];
  onRegister: (data: MasterData) => void;
}

const CustomerRegistrationForm: React.FC<CustomerRegistrationFormProps> = ({ masterData, onRegister }) => {
  const [formData, setFormData] = React.useState<MasterData>({
    id: 0,
    name: '',
    kana: '',
    tel: '',
    fax: '',
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onRegister(formData);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Title>顧客・相手先別振込先マスタ</Title>
      <Field>
        <Label>相手先</Label>
        <Input
          type="text"
          name="id"
          value={formData.id}
          onChange={handleChange}
          required
        />
      </Field>
      <Field>
        <Label>適用開始年月日</Label>
        <Input type="date" />
      </Field>
      <Field>
        <Label>相手先マスタ</Label>
        <div>
          <Input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <Input
            type="text"
            name="kana"
            value={formData.kana}
            onChange={handleChange}
          />
        </div>
      </Field>
      <Field>
        <Label>略名</Label>
        <Input type="text" />
      </Field>
      <Field>
        <Label>都度番号</Label>
        <Input type="text" />
      </Field>
      <Field>
        <Label>住所(1)</Label>
        <Input type="text" />
      </Field>
      <Field>
        <Label>住所(2)</Label>
        <Input type="text" />
      </Field>
      <Field>
        <Label>電話番号</Label>
        <Input
          type="tel"
          name="tel"
          value={formData.tel}
          onChange={handleChange}
        />
      </Field>
      <Field>
        <Label>FAX番号</Label>
        <Input
          type="tel"
          name="fax"
          value={formData.fax}
          onChange={handleChange}
        />
      </Field>
      <CheckboxGroup>
        <Checkbox>
          <input type="checkbox" id="bank" />
          <label htmlFor="bank">銀行支店名を印字しない</label>
        </Checkbox>
        <Checkbox>
          <input type="checkbox" id="account" />
          <label htmlFor="account">預金種別・口座名義を印字しない</label>
        </Checkbox>
        <Checkbox>
          <input type="checkbox" id="amount" />
          <label htmlFor="amount">預金種別のみ</label>
        </Checkbox>
        <Checkbox>
          <input type="checkbox" id="name" />
          <label htmlFor="name">口座名義のみ</label>
        </Checkbox>
        <Checkbox>
          <input type="checkbox" id="both" />
          <label htmlFor="both">両方</label>
        </Checkbox>
        <Checkbox>
          <input type="checkbox" id="neither" />
          <label htmlFor="neither">□座番号を印字しない</label>
        </Checkbox>
      </CheckboxGroup>
      <ButtonGroup>
        <Button type="button">明細編集</Button>
        <Button type="button">行削除</Button>
        <SubmitButton type="submit">振込先</SubmitButton>
      </ButtonGroup>
    </Form>
  );
};

// Styling with Emotion
const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 600px;
  margin: 0 auto;
`;

const Title = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

const Field = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const Label = styled.label`
  flex: 0 0 120px;
`;

const Input = styled.input`
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const CheckboxGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-top: 1rem;
`;

const Checkbox = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
  margin-top: 1rem;
`;

const Button = styled.button`
  padding: 0.5rem 1rem;
  background-color: #eee;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const SubmitButton = styled(Button)`
  background-color: #007bff;
  color: #fff;
`;

// サンプルデータを使用した表示用コンポーネント
const SampleCustomerRegistrationForm: React.FC = () => {
  const sampleData: MasterData[] = [
    {
      id: 1,
      name: 'みずほ銀行',
      kana: 'ミズホギンコウ',
      tel: '03-1234-5678',
      fax: '03-1234-5679',
    },
    // 他のサンプルデータを追加
  ];

  const handleRegister = (data: MasterData) => {
    console.log('Registered data:', data);
  };

  return (
    <CustomerRegistrationForm
      masterData={sampleData}
      onRegister={handleRegister}
    />
  );
};

export default SampleCustomerRegistrationForm;