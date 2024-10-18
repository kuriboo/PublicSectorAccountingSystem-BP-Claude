import React from 'react';
import styled from '@emotion/styled';

type FormData = {
  company: string;
  period: number;
  billingType: string;
  accountingDivision: number;
  location: string;
  memo: string;
  collectionMethod: string;
  paymentMethod: string;
};

type Props = {
  initialData?: FormData;
  onSubmit: (data: FormData) => void;
  onCancel: () => void;
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 400px;
`;

const Row = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;

const Label = styled.label`
  width: 120px;
`;

const Input = styled.input`
  padding: 5px;
  border-radius: 3px;
  border: 1px solid #ccc;
  width: 200px;
`;

const Select = styled.select`
  padding: 5px;
  border-radius: 3px;
  border: 1px solid #ccc;
  width: 200px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  margin-top: 20px;
`;

const Button = styled.button`
  padding: 5px 10px;
  border-radius: 3px;
  border: none;
  background-color: #007bff;
  color: white;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const BusinessPartnerForm: React.FC<Props> = ({
  initialData = {
    company: '',
    period: 1,
    billingType: '月次',
    accountingDivision: 1,
    location: '',
    memo: '',
    collectionMethod: '銀行振込',
    paymentMethod: '当月',
  },
  onSubmit,
  onCancel,
}) => {
  const [formData, setFormData] = React.useState<FormData>(initialData);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prevData => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <Row>
          <Label>会社名</Label>
          <Input
            type="text"
            name="company"
            value={formData.company}
            onChange={handleChange}
            required
          />
        </Row>
        <Row>
          <Label>期間</Label>
          <Input
            type="number"
            name="period"
            value={formData.period}
            onChange={handleChange}
            required
            min={1}
          />
        </Row>
        <Row>
          <Label>請求区分</Label>
          <Select
            name="billingType"
            value={formData.billingType}
            onChange={handleChange}
          >
            <option value="月次">月次</option>
            <option value="請求">請求</option>
          </Select>
        </Row>
        <Row>
          <Label>会計科目区分</Label>
          <Input
            type="number"
            name="accountingDivision"
            value={formData.accountingDivision}
            onChange={handleChange}
            required
            min={1}
          />
        </Row>
        <Row>
          <Label>立地</Label>
          <Input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
          />
        </Row>
        <Row>
          <Label>メモ</Label>
          <Input
            type="text"
            name="memo"
            value={formData.memo}
            onChange={handleChange}
          />
        </Row>
        <Row>
          <Label>金額印字区分</Label>
          <Select
            name="collectionMethod"
            value={formData.collectionMethod}
            onChange={handleChange}
          >
            <option value="銀行振込">銀行振込</option>
            <option value="手形">手形</option>
          </Select>
        </Row>
        <Row>
          <Label>改行区分</Label>
          <Select
            name="paymentMethod"
            value={formData.paymentMethod}
            onChange={handleChange}
          >
            <option value="当月">当月</option>
            <option value="1行改行">1行改行</option>
          </Select>
        </Row>
        <ButtonContainer>
          <Button type="button" onClick={onCancel}>
            キャンセル
          </Button>
          <Button type="submit">登録</Button>
        </ButtonContainer>
      </form>
    </Container>
  );
};

// Usage example
const App: React.FC = () => {
  const handleSubmit = (data: FormData) => {
    console.log(data);
  };

  const handleCancel = () => {
    console.log('Cancelled');
  };

  return (
    <div>
      <h1>Business Partner Form</h1>
      <BusinessPartnerForm onSubmit={handleSubmit} onCancel={handleCancel} />
    </div>
  );
};

export default App;