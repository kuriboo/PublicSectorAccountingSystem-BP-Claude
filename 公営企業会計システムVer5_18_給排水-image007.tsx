import React from 'react';
import styled from '@emotion/styled';

type InspectionEntryFormProps = {
  inspectionTypes: string[];
  onSubmit: (data: InspectionEntryData) => void;
};

type InspectionEntryData = {
  inspectionMethod: string;
  inspectionDate: string;
  operator: string;
  comment: string;
  inspectionResult: string;
  resultEvaluation: string;
  inspectionInterval: number;
};

const InspectionEntryForm: React.FC<InspectionEntryFormProps> = ({ inspectionTypes, onSubmit }) => {
  const [formData, setFormData] = React.useState<InspectionEntryData>({
    inspectionMethod: inspectionTypes[0],
    inspectionDate: '',
    operator: '',
    comment: '',
    inspectionResult: 'OK', 
    resultEvaluation: '合格',
    inspectionInterval: 0,
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit(formData);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <InputGroup>
        <Label>検査登録事項</Label>
        <Select name="inspectionMethod" value={formData.inspectionMethod} onChange={handleChange}>
          {inspectionTypes.map(type => (
            <option key={type} value={type}>{type}</option>
          ))}
        </Select>
      </InputGroup>
      
      <InputGroup>
        <Label>検査回数</Label>
        <Input type="checkbox" checked={true} readOnly />
      </InputGroup>

      <InputGroup>
        <Label>検査日</Label>
        <Input type="text" name="inspectionDate" value={formData.inspectionDate} onChange={handleChange} />
      </InputGroup>
      
      <InputGroup>
        <Label>検査担当者</Label>
        <Input type="text" name="operator" value={formData.operator} onChange={handleChange} />
      </InputGroup>

      <InputGroup>
        <Label>検査予定日</Label>
        <Input type="text" value={formData.inspectionDate} readOnly />
      </InputGroup>

      <InputGroup>
        <Label>検査担当者</Label>
        <Select name="resultEvaluation" value={formData.resultEvaluation} onChange={handleChange}>
          <option value="合格">合格</option>
          <option value="不合格">不合格</option>
        </Select>
      </InputGroup>

      <InputGroup>
        <Label>検査間隔日</Label> 
        <Input type="number" name="inspectionInterval" value={formData.inspectionInterval} onChange={handleChange} />
        <span>AN</span>
      </InputGroup>

      <InputGroup>
        <Label>メモ</Label>
        <Textarea name="comment" value={formData.comment} onChange={handleChange} placeholder="メモを記入します" />
      </InputGroup>
      
      <ButtonGroup>
        <Button type="submit">OK</Button>
        <Button type="button">クリア</Button>
        <Button type="button">キャンセル</Button>
      </ButtonGroup>
    </Form>
  );
};

// Styled components
const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 16px;
  background-color: #f0f0f0;
`;

const InputGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const Label = styled.label`
  flex: 0 0 100px;
`;

const Input = styled.input`
  padding: 4px;
  border: 1px solid #ccc;
  border-radius: 4px;
  flex: 1;
`;

const Select = styled.select`
  padding: 4px;
  border: 1px solid #ccc;
  border-radius: 4px;
  flex: 1;
`;

const Textarea = styled.textarea`
  padding: 4px;
  border: 1px solid #ccc;
  border-radius: 4px; 
  flex: 1;
  min-height: 80px;
  resize: vertical;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 8px;
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

// Sample usage
const SampleInspectionEntryForm = () => {
  const handleSubmit = (data: InspectionEntryData) => {
    console.log('Submitted data:', data);
  };

  return (
    <InspectionEntryForm 
      inspectionTypes={['OI 工事検査']} 
      onSubmit={handleSubmit}
    />
  );
};

export default SampleInspectionEntryForm;