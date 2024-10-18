import React from 'react';
import styled from '@emotion/styled';

type FormData = {
  operationType: string;
  accountCategory: string;
  fixedPeriod?: string;
  periodStart: string;
  periodEnd: string;
  accountNoFrom: string;
  accountNoTo: string;
  amount?: number;
};

type Props = {
  initialData?: FormData;
  onSubmit: (data: FormData) => void;
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 16px;
  border: 1px solid #ccc;
  border-radius: 8px;
  background: #f7f7f7;
`;

const Row = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const FieldContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  margin-bottom: 4px;
  font-size: 14px;
  font-weight: bold;
`;

const Input = styled.input`
  padding: 6px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 14px;
`;

const Select = styled.select`
  padding: 6px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 14px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 8px;
  margin-top: 16px;
`;

const Button = styled.button`
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  background: #007bff;
  color: #fff;
  font-size: 14px;
  cursor: pointer;

  &:hover {
    background: #0056b3;
  }
`;

const FixedTermDepositCreationForm: React.FC<Props> = ({ initialData, onSubmit }) => {
  const [formData, setFormData] = React.useState<FormData>({
    operationType: initialData?.operationType ?? '',
    accountCategory: initialData?.accountCategory ?? '',
    fixedPeriod: initialData?.fixedPeriod ?? '',
    periodStart: initialData?.periodStart ?? '',
    periodEnd: initialData?.periodEnd ?? '',
    accountNoFrom: initialData?.accountNoFrom ?? '',
    accountNoTo: initialData?.accountNoTo ?? '',
    amount: initialData?.amount ?? undefined,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prevData => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = () => {
    onSubmit(formData);
  };

  return (
    <Container>
      <Row>
        <FieldContainer>
          <Label>作業年月日</Label>
          <Input type="date" name="periodStart" value={formData.periodStart} onChange={handleChange} required />
        </FieldContainer>
        <span>～</span>
        <Input type="date" name="periodEnd" value={formData.periodEnd} onChange={handleChange} />
      </Row>
      <Row>
        <FieldContainer>
          <Label>書式区分</Label>
          <Select name="operationType" value={formData.operationType} onChange={handleChange} required>
            <option value="">選択してください</option>
            <option value="新形">新形</option>
            <option value="無形・段階">無形・段階</option>
          </Select>
        </FieldContainer>
        <FieldContainer>
          <Label>会計区分</Label>
          <Select name="accountCategory" value={formData.accountCategory} onChange={handleChange} required>
            <option value="">選択してください</option>
            <option value="印字しない">印字しない</option>
            <option value="会計区分別">会計区分別</option>
          </Select>
        </FieldContainer>
      </Row>
      <Row>
        {/* 定期特定 fields */}
        <FieldContainer>
          <Label>定期特定</Label>
          <Select name="fixedPeriod" value={formData.fixedPeriod} onChange={handleChange}>
            <option value="">すべて</option>
            <option value="90%積立特定7済">90%積立特定7済</option>
            <option value="95%積立防災">95%積立防災</option>
          </Select>
        </FieldContainer>
      </Row>
      <Row>
        <FieldContainer>
          <Label>範囲指定</Label>
          <Input type="text" name="accountNoFrom" value={formData.accountNoFrom} onChange={handleChange} />
        </FieldContainer>
        <span>～</span>
        <Input type="text" name="accountNoTo" value={formData.accountNoTo} onChange={handleChange} />
      </Row>
      <Row>
        <FieldContainer>
          <Label>資産番号</Label>
          <Input type="number" name="amount" value={formData.amount} onChange={handleChange} />
        </FieldContainer>
        <span>～</span>
        <Input type="number" value={9999999999} readOnly />
      </Row>
      <Row>
        <FieldContainer>
          <Label>取得年月日</Label>
          <Input type="date" name="periodStart" value={formData.periodStart} onChange={handleChange} />
        </FieldContainer>
        <span>～</span>
        <Input type="date" name="periodEnd" value={formData.periodEnd} onChange={handleChange} />
      </Row>
      <ButtonContainer>
        <Button type="button">クリア</Button>
        <Button type="button" onClick={handleSubmit}>終了</Button>
      </ButtonContainer>
    </Container>
  );
};

// Usage example
const App: React.FC = () => {
  const handleSubmit = (data: FormData) => {
    console.log('Form submitted:', data);
  };

  return (
    <div>
      <h1>固定資産一覧表作成</h1>
      <FixedTermDepositCreationForm onSubmit={handleSubmit} />
    </div>
  );
};

export default App;