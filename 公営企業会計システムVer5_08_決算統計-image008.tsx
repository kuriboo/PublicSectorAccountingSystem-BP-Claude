import React from 'react';
import styled from '@emotion/styled';

type FormData = {
  fiscalYear: number;
  fiscalYearEnd: number;
  nationalCode: string;
  industryCode: string;
  businessCode: string;
  otherCode: string;
  capitalAmount: string;
  paidInCapital: 'full' | 'notFull';
  decisionPeriod: number;
  holdings22: boolean;
  holdings21: boolean;
  changeOwnership23: boolean;
};

type Props = {
  formData: FormData;
  onChangeFormData: (data: Partial<FormData>) => void;
};

const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;

const Title = styled.h1`
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

const Radio = styled.input`
  margin-right: 8px;
`;

const CheckboxGroup = styled.div`
  margin-bottom: 16px;
`;

const CheckboxLabel = styled.label`
  margin-right: 16px;
`;

const Button = styled.button`
  padding: 8px 16px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const TaxForm: React.FC<Props> = ({ formData, onChangeFormData }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    onChangeFormData({ [name]: value });
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    onChangeFormData({ [name]: checked });
  };

  return (
    <Container>
      <Title>決算統計調査表連携</Title>
      <FormGroup>
        <Label>決算年度</Label>
        <Input type="number" name="fiscalYear" value={formData.fiscalYear} onChange={handleChange} />
        <Label>年度</Label>
        <Input type="number" name="fiscalYearEnd" value={formData.fiscalYearEnd} onChange={handleChange} />
      </FormGroup>
      <FormGroup>
        <Label>国体コード</Label>
        <Input type="text" name="nationalCode" value={formData.nationalCode} onChange={handleChange} />
        <Label>業務コード</Label>
        <Select name="industryCode" value={formData.industryCode} onChange={handleChange}>
          <option value="">選択してください</option>
          {/* Add industry code options */}
        </Select>
        {/* Add other code fields */}
      </FormGroup>
      <FormGroup>
        <Label>払込資本金額又は出資金額</Label>
        <Select name="paidInCapital" value={formData.paidInCapital} onChange={handleChange}>
          <option value="full">払込済み</option>
          <option value="notFull">未払い</option>
        </Select>
      </FormGroup>
      <FormGroup>
        <Label>資本金の決算期</Label>
        <Input type="number" name="decisionPeriod" value={formData.decisionPeriod} onChange={handleChange} />ヶ月
      </FormGroup>
      <CheckboxGroup>
        <CheckboxLabel>
          <Radio type="checkbox" name="holdings22" checked={formData.holdings22} onChange={handleCheckboxChange} />
          貸借対照表(22表)
        </CheckboxLabel>
        <CheckboxLabel>
          <Radio type="checkbox" name="holdings21" checked={formData.holdings21} onChange={handleCheckboxChange} />
          業用損益表(21表)
        </CheckboxLabel>
        <CheckboxLabel>
          <Radio type="checkbox" name="changeOwnership23" checked={formData.changeOwnership23} onChange={handleCheckboxChange} />
          資本の収支に関する調(23表)
        </CheckboxLabel>
      </CheckboxGroup>
      <Button>集計</Button>
      <Button>クリア</Button>
      <Button>終了</Button>
    </Container>
  );
};

// Usage example
const App: React.FC = () => {
  const [formData, setFormData] = React.useState<FormData>({
    fiscalYear: 0,
    fiscalYearEnd: 0,
    nationalCode: '',
    industryCode: '',
    businessCode: '',
    otherCode: '',
    capitalAmount: '',
    paidInCapital: 'full',
    decisionPeriod: 0,
    holdings22: false,
    holdings21: false,
    changeOwnership23: false,
  });

  const handleChangeFormData = (data: Partial<FormData>) => {
    setFormData(prevData => ({ ...prevData, ...data }));
  };

  return <TaxForm formData={formData} onChangeFormData={handleChangeFormData} />;
};

export default App;