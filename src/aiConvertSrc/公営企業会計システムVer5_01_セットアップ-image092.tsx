import React from 'react';
import styled from '@emotion/styled';

type FormData = {
  startDate: string;
  endDate: string;
  endDateType: '指定' | '現金同等物' | '未収未払フラグ';
  fiscalCode: string;
  consumptionTax: '借方' | '貸方';
  currency: '税込み' | '税抜き' | '税のみ';
  transferPlan: '可' | '不可';
  memo1: string;
  memo2: string;
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
  background-color: #f0f0f0;
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Label = styled.label`
  flex: 0 0 100px;
`;

const Input = styled.input`
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 3px;
`;

const Select = styled.select`
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 3px;
`;

const TextArea = styled.textarea`
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 3px;
  resize: vertical;
`;

const Button = styled.button`
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  background-color: #007bff;
  color: #fff;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const CashTransferForm: React.FC<Props> = ({ initialData, onSubmit, onCancel }) => {
  const [formData, setFormData] = React.useState<FormData>(
    initialData || {
      startDate: '',
      endDate: '',
      endDateType: '指定',
      fiscalCode: '',
      consumptionTax: '借方',
      currency: '税込み',
      transferPlan: '可',
      memo1: '',
      memo2: '',
    }
  );

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <Row>
          <Label>自計日選択</Label>
          <Input
            type="date"
            name="startDate"
            value={formData.startDate}
            onChange={handleChange}
            required
          />
        </Row>
        <Row>
          <Label>相手科目選択</Label>
          <Input type="text" name="fiscalCode" value={formData.fiscalCode} onChange={handleChange} />
          <input type="checkbox" />
          未収未払フラグ
        </Row>
        <Row>
          <Label>消費税区分</Label>
          <Select name="consumptionTax" value={formData.consumptionTax} onChange={handleChange}>
            <option value="借方">借方</option>
            <option value="貸方">貸方</option>
          </Select>
        </Row>
        <Row>
          <Label>税指定区分</Label>
          <Select name="currency" value={formData.currency} onChange={handleChange}>
            <option value="税込み">税込み</option>
            <option value="税抜き">税抜き</option>
            <option value="税のみ">税のみ</option>
          </Select>
        </Row>
        <Row>
          <Label>相手科目追跡フラグ</Label>
          <Select name="transferPlan" value={formData.transferPlan} onChange={handleChange}>
            <option value="可">可</option>
            <option value="不可">不可</option>
          </Select>
        </Row>
        <Row>
          <Label>備考</Label>
          <TextArea name="memo1" value={formData.memo1} onChange={handleChange} />
        </Row>
        <Row>
          <TextArea name="memo2" value={formData.memo2} onChange={handleChange} />
        </Row>
        <Row>
          <Button type="submit">OK</Button>
          <Button type="button" onClick={onCancel}>
            クリア
          </Button>
          <Button type="button" onClick={onCancel}>
            キャンセル
          </Button>
        </Row>
      </form>
    </Container>
  );
};

// Example usage:
const ExampleUsage: React.FC = () => {
  const handleSubmit = (data: FormData) => {
    console.log('Submitted data:', data);
  };

  const handleCancel = () => {
    console.log('Cancelled');
  };

  return (
    <CashTransferForm
      initialData={{
        startDate: '2023-01-07',
        endDate: '',
        endDateType: '指定',
        fiscalCode: '',
        consumptionTax: '借方',
        currency: '税込み',
        transferPlan: '可',
        memo1: '',
        memo2: '',
      }}
      onSubmit={handleSubmit}
      onCancel={handleCancel}
    />
  );
};

export default ExampleUsage;