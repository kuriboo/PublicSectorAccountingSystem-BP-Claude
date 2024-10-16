import React from 'react';
import styled from '@emotion/styled';

type FormData = {
  district: string;
  id: string;
  orderNumber: string;
};

type CustomerManagementTableProps = {
  formData: FormData;
  onFormChange: (field: keyof FormData, value: string) => void;
  onSubmit: () => void;
  onCancel: () => void;
  onClear: () => void;
};

const CustomerManagementTable: React.FC<CustomerManagementTableProps> = ({
  formData,
  onFormChange,
  onSubmit,
  onCancel,
  onClear,
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    onFormChange(name as keyof FormData, value);
  };

  return (
    <Container>
      <Title>カスタマイズ管理テーブル保守</Title>
      <Subtitle>行政市水道事業会計総務部 予算・会計担当 ぎょうせい太郎 平成29年09月05日</Subtitle>
      <Form>
        <FormGroup>
          <Label>区分</Label>
          <Select name="district" value={formData.district} onChange={handleChange}>
            <option value="">選択</option>
            <option value="1">1:JAVA</option>
            <option value="2">2:フォーム</option>
          </Select>
        </FormGroup>
        <FormGroup>
          <Label>ID</Label>
          <Input type="text" name="id" value={formData.id} onChange={handleChange} />
        </FormGroup>
        <FormGroup>
          <Label>整集</Label>
          <Input type="text" name="orderNumber" value={formData.orderNumber} onChange={handleChange} />
        </FormGroup>
      </Form>
      <ButtonGroup>
        <Button type="button" onClick={onSubmit}>OK</Button>
        <Button type="button" onClick={onClear}>クリア</Button>
        <Button type="button" onClick={onCancel}>終了</Button>
      </ButtonGroup>
    </Container>
  );
};

// Styled components
const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f0f0f0;
  border-radius: 4px;
`;

const Title = styled.h2`
  font-size: 20px;
  margin-bottom: 10px;
`;

const Subtitle = styled.p`
  font-size: 14px;
  color: #666;
  margin-bottom: 20px;
`;

const Form = styled.form`
  display: grid;
  gap: 15px;
`;

const FormGroup = styled.div`
  display: grid;
  grid-template-columns: 100px 1fr;
  align-items: center;
`;

const Label = styled.label`
  font-weight: bold;
`;

const Input = styled.input`
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Select = styled.select`
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
`;

const Button = styled.button`
  padding: 8px 16px;
  margin-left: 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

// Sample usage
const SampleCustomerManagementTable: React.FC = () => {
  const [formData, setFormData] = React.useState<FormData>({
    district: '',
    id: '',
    orderNumber: '',
  });

  const handleFormChange = (field: keyof FormData, value: string) => {
    setFormData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

  const handleSubmit = () => {
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleCancel = () => {
    // Handle form cancellation
    console.log('Form cancelled');
  };

  const handleClear = () => {
    // Handle form clear
    setFormData({
      district: '',
      id: '',
      orderNumber: '',
    });
  };

  return (
    <CustomerManagementTable
      formData={formData}
      onFormChange={handleFormChange}
      onSubmit={handleSubmit}
      onCancel={handleCancel}
      onClear={handleClear}
    />
  );
};

export default SampleCustomerManagementTable;