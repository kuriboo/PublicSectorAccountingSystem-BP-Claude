import React from 'react';
import styled from '@emotion/styled';

interface FormData {
  [key: string]: string;
}

interface YearInputProps {
  value: string;
  onChange: (value: string) => void;
}

const YearInput: React.FC<YearInputProps> = ({ value, onChange }) => {
  return (
    <Input
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
};

interface ScheduleInputsProps {
  schedules: string[];
  onChange: (index: number, value: string) => void;
}

const ScheduleInputs: React.FC<ScheduleInputsProps> = ({
  schedules,
  onChange,
}) => {
  return (
    <div>
      {schedules.map((schedule, index) => (
        <Input
          key={index}
          type="text"
          value={schedule}
          onChange={(e) => onChange(index, e.target.value)}
        />
      ))}
    </div>
  );
};

interface PredictionInputProps {
  value: string;
  onChange: (value: string) => void;
}

const PredictionInput: React.FC<PredictionInputProps> = ({
  value,
  onChange,
}) => {
  return (
    <Input
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
};

interface FormProps {
  formData: FormData;
  onChange: (formData: FormData) => void;
  onCancel: () => void;
  onSubmit: () => void;
}

const Form: React.FC<FormProps> = ({
  formData,
  onChange,
  onCancel,
  onSubmit,
}) => {
  const handleChange = (key: string, value: string) => {
    onChange({ ...formData, [key]: value });
  };

  return (
    <Container>
      <Title>予算管理表</Title>
      <Row>
        <Label>年度</Label>
        <YearInput
          value={formData['year'] || ''}
          onChange={(value) => handleChange('year', value)}
        />
      </Row>
      <Row>
        <Label>予算科目コード</Label>
        <Input
          type="text"
          value={formData['code'] || ''}
          onChange={(e) => handleChange('code', e.target.value)}
        />
      </Row>
      <Row>
        <Label>略名</Label>
        <Input
          type="text"
          value={formData['shortName'] || ''}
          onChange={(e) => handleChange('shortName', e.target.value)}
        />
      </Row>
      <Row>
        <Label>科目編集名称1</Label>
        <ScheduleInputs
          schedules={[
            formData['schedule1'] || '',
            formData['schedule2'] || '',
            formData['schedule3'] || '',
            formData['schedule4'] || '',
          ]}
          onChange={(index, value) =>
            handleChange(`schedule${index + 1}`, value)
          }
        />
      </Row>
      <Row>
        <Label>予算書番号</Label>
        <PredictionInput
          value={formData['predictionNumber'] || ''}
          onChange={(value) => handleChange('predictionNumber', value)}
        />
      </Row>
      <ButtonWrapper>
        <Button onClick={onCancel}>キャンセル</Button>
        <Button primary onClick={onSubmit}>
          OK
        </Button>
      </ButtonWrapper>
    </Container>
  );
};

const Container = styled.div`
  padding: 16px;
  background-color: #f0f0f0;
`;

const Title = styled.h2`
  margin-bottom: 16px;
  font-size: 18px;
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
`;

const Label = styled.label`
  flex: 0 0 120px;
`;

const Input = styled.input`
  padding: 4px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const ButtonWrapper = styled.div`
  margin-top: 16px;
  text-align: right;
`;

const Button = styled.button<{ primary?: boolean }>`
  padding: 8px 16px;
  margin-left: 8px;
  color: ${(props) => (props.primary ? '#fff' : '#333')};
  background-color: ${(props) => (props.primary ? '#007bff' : '#f0f0f0')};
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;

// Usage example
const sampleData: FormData = {
  year: '2023',
  code: '001',
  shortName: '水道事業費',
  schedule1: '科目1',
  schedule2: '科目2',
  schedule3: '科目3', 
  schedule4: '科目4',
  predictionNumber: '1234',
};

const FormExample: React.FC = () => {
  const [formData, setFormData] = React.useState<FormData>(sampleData);

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
  };

  return (
    <Form
      formData={formData}
      onChange={setFormData}
      onCancel={() => console.log('Cancel clicked')}
      onSubmit={handleSubmit}
    />
  );
};

export default FormExample;