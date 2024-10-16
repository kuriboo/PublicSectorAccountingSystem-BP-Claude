import React from 'react';
import styled from '@emotion/styled';

type FormData = {
  bankName: string;
  date: string;
  region: '日次' | '月次';
  collectMethod: '全件' | 'ブロック' | 'セグメント';
  segment: string;
};

type Props = {
  title: string;
  defaultFormData?: FormData;
  onSubmit: (data: FormData) => void;
};

const Container = styled.div`
  background-color: #f0f0f0;
  padding: 16px;
  border-radius: 4px;
`;

const Title = styled.div`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 16px;
`;

const FormGroup = styled.div`
  margin-bottom: 16px;
`;

const Label = styled.div`
  font-size: 14px;
  margin-bottom: 4px;
`;

const Input = styled.input`
  width: 200px;
  padding: 4px;
  font-size: 14px;
`;

const Select = styled.select`
  width: 200px;
  padding: 4px;
  font-size: 14px;
`;

const RadioGroup = styled.div`
  display: flex;
  align-items: center;
`;

const RadioLabel = styled.label`
  margin-right: 8px;
  font-size: 14px;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const Button = styled.button`
  padding: 8px 16px;
  margin-left: 8px;
  font-size: 14px;
`;

const BankCollectionConditionForm: React.FC<Props> = ({
  title,
  defaultFormData = {
    bankName: '',
    date: '',
    region: '日次',
    collectMethod: '全件',
    segment: '',
  },
  onSubmit,
}) => {
  const [formData, setFormData] = React.useState<FormData>(defaultFormData);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    onSubmit(formData);
  };

  return (
    <Container>
      <Title>{title}</Title>
      <FormGroup>
        <Label>範囲指定</Label>
        <Input
          type="text"
          name="bankName"
          value={formData.bankName}
          onChange={handleChange}
        />
        <Input
          type="text"
          name="date"
          value={formData.date}
          onChange={handleChange}
        />
      </FormGroup>
      <FormGroup>
        <Label>集計対象</Label>
        <RadioGroup>
          <RadioLabel>
            <input
              type="radio"
              name="region"
              value="日次"
              checked={formData.region === '日次'}
              onChange={handleChange}
            />
            日次
          </RadioLabel>
          <RadioLabel>
            <input
              type="radio"
              name="region"
              value="月次"
              checked={formData.region === '月次'}
              onChange={handleChange}
            />
            月次
          </RadioLabel>
        </RadioGroup>
      </FormGroup>
      <FormGroup>
        <Label>集計方法</Label>
        <Select
          name="collectMethod"
          value={formData.collectMethod}
          onChange={handleChange}
        >
          <option value="全件">全件</option>
          <option value="ブロック">ブロック</option>
          <option value="セグメント">セグメント</option>
        </Select>
        {formData.collectMethod === 'セグメント' && (
          <Input
            type="text"
            name="segment"
            value={formData.segment}
            onChange={handleChange}
          />
        )}
      </FormGroup>
      <ButtonGroup>
        <Button type="button">クリア</Button>
        <Button type="button">終了</Button>
        <Button type="button" onClick={handleSubmit}>
          OK
        </Button>
      </ButtonGroup>
    </Container>
  );
};

// Usage example
const App: React.FC = () => {
  const handleSubmit = (data: FormData) => {
    console.log(data);
  };

  return (
    <BankCollectionConditionForm
      title="銀行預金別資金残高表作成"
      onSubmit={handleSubmit}
    />
  );
};

export default App;