import React from 'react';
import styled from 'styled-components';

type WorkOrderSettingProps = {
  workOrderCode: string;
  workOrderName: string;
  internalOrderCode: string;
  assemblyLocation: string;
  paintingNumber: number;
  coatingNumber: number;
  continuationOrderCode: string;
  onCancel: () => void;
  onSave: (props: WorkOrderSettingProps) => void;
};

const WorkOrderSetting: React.FC<WorkOrderSettingProps> = ({
  workOrderCode,
  workOrderName,
  internalOrderCode,
  assemblyLocation,
  paintingNumber,
  coatingNumber,
  continuationOrderCode,
  onCancel,
  onSave,
}) => {
  // State for form fields
  const [formData, setFormData] = React.useState<WorkOrderSettingProps>({
    workOrderCode,
    workOrderName,
    internalOrderCode,
    assemblyLocation,
    paintingNumber,
    coatingNumber,
    continuationOrderCode,
    onCancel,
    onSave,
  });

  // Update form field state on change
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSave(formData);
  };

  return (
    <WorkOrderSettingWrapper>
      <Title>継続仕訳設定</Title>
      <Form onSubmit={handleSubmit}>
        <FormField>
          <Label>年度</Label>
          <Input type="text" name="workOrderCode" value={formData.workOrderCode} onChange={handleChange} />
        </FormField>
        <FormField>
          <Label>仕訳コード</Label>
          <Input type="text" name="workOrderName" value={formData.workOrderName} onChange={handleChange} />
        </FormField>
        <FormField>
          <Label>内容</Label>
          <Input type="text" name="internalOrderCode" value={formData.internalOrderCode} onChange={handleChange} />
        </FormField>
        <FormField>
          <Label>水道科社の欄定/集合調定</Label>
          <Input type="text" name="assemblyLocation" value={formData.assemblyLocation} onChange={handleChange} />
        </FormField>
        <FormField>
          <Label>画面番号</Label>
          <Input type="number" name="paintingNumber" value={formData.paintingNumber} onChange={handleChange} />
        </FormField>
        <FormField>
          <Label>明細番号</Label>
          <Input type="number" name="coatingNumber" value={formData.coatingNumber} onChange={handleChange} />
        </FormField>
        <FormField>
          <Label>継続仕訳コード</Label>
          <Input type="text" name="continuationOrderCode" value={formData.continuationOrderCode} onChange={handleChange} />
        </FormField>
        <ButtonGroup>
          <Button type="button" onClick={onCancel}>キャンセル</Button>
          <Button type="submit">OK</Button>
        </ButtonGroup>
      </Form>
    </WorkOrderSettingWrapper>
  );
};

// Styled components
const WorkOrderSettingWrapper = styled.div`
  background-color: #f0f0f0;
  padding: 20px;
  border-radius: 4px;

  @media (max-width: 600px) {
    padding: 10px;
  }
`;

const Title = styled.h2`
  margin-top: 0;
  margin-bottom: 20px;
  text-align: center;
`;

const Form = styled.form`
  display: grid;
  gap: 10px;
`;

const FormField = styled.div`
  display: grid;
  grid-template-columns: 120px 1fr;
  align-items: center;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    gap: 5px;
  }
`;

const Label = styled.label`
  font-weight: bold;
`;

const Input = styled.input`
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  margin-top: 20px;
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

// Usage example
const App: React.FC = () => {
  const handleCancel = () => {
    console.log('Cancel clicked');
  };

  const handleSave = (data: WorkOrderSettingProps) => {
    console.log('Save clicked', data);
  };

  return (
    <WorkOrderSetting
      workOrderCode="29"
      workOrderName="000001"
      internalOrderCode="000001"
      assemblyLocation="水道科社の欄定/集合調定"
      paintingNumber={1}
      coatingNumber={1}
      continuationOrderCode="000001"
      onCancel={handleCancel}
      onSave={handleSave}
    />
  );
};

export default App;