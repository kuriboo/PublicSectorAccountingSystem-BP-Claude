import React from 'react';
import styled from '@emotion/styled';

type AutoWorkRequest = {
  processPeriod: string;
  dateRange: {
    startDate: string;
    endDate: string;
  };
  processType: 'automatic' | 'manual';
  notes: string;
};

type Props = {
  autoWorkRequest?: AutoWorkRequest;
  onSubmit: (data: AutoWorkRequest) => void;
  onCancel: () => void;
  onEnd: () => void;
};

const AutoWorkRequestForm: React.FC<Props> = ({
  autoWorkRequest,
  onSubmit,
  onCancel,
  onEnd,
}) => {
  const [formData, setFormData] = React.useState<AutoWorkRequest>({
    processPeriod: autoWorkRequest?.processPeriod || '',
    dateRange: autoWorkRequest?.dateRange || {
      startDate: '',
      endDate: '',
    },
    processType: autoWorkRequest?.processType || 'automatic',
    notes: autoWorkRequest?.notes || '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleDateChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    type: 'startDate' | 'endDate'
  ) => {
    const { value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      dateRange: {
        ...prevData.dateRange,
        [type]: value,
      },
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <Label>範囲指定</Label>
        <Input
          type="date"
          name="dateRange.startDate"
          value={formData.dateRange.startDate}
          onChange={(e) => handleDateChange(e, 'startDate')}
        />
        <span>～</span>
        <Input
          type="date"
          name="dateRange.endDate"
          value={formData.dateRange.endDate}
          onChange={(e) => handleDateChange(e, 'endDate')}
        />
      </FormGroup>
      <FormGroup>
        <Label>処理区分</Label>
        <RadioGroup>
          <Radio
            type="radio"
            name="processType"
            value="automatic"
            checked={formData.processType === 'automatic'}
            onChange={handleChange}
          />
          <RadioLabel>自動</RadioLabel>
          <Radio
            type="radio"
            name="processType"
            value="manual"
            checked={formData.processType === 'manual'}
            onChange={handleChange}
          />
          <RadioLabel>手動</RadioLabel>
        </RadioGroup>
      </FormGroup>
      <FormGroup>
        <Label>処理概要</Label>
        <Textarea
          name="notes"
          value={formData.notes}
          onChange={handleChange}
        />
      </FormGroup>
      <ButtonGroup>
        <Button type="submit">OK</Button>
        <Button type="button" onClick={onCancel}>
          クリア
        </Button>
        <Button type="button" onClick={onEnd}>
          終了
        </Button>
      </ButtonGroup>
    </Form>
  );
};

// Sample data for preview
const sampleData: AutoWorkRequest = {
  processPeriod: '平成29年09月01日 ～ 平成30年08月31日',
  dateRange: {
    startDate: '2017-09-01',
    endDate: '2018-08-31',
  },
  processType: 'automatic',
  notes:
    '「除却資産対象登録」で登録した内容について、自動で仕訳を作成します。 避難の除却処理が対象です。 ※売却が伴う除却の仕訳は、作成できません。「固定用振替入力」画面 より登録を行ってください。 ※除却時に貯蔵品に振り替える仕訳等は、「自動仕訳作成処理(除却)」 解除入力」画面より処理を行った後、「振替入力」画面より、登録 を行ってください。',
};

const PreviewAutoWorkRequestForm = () => {
  return (
    <AutoWorkRequestForm
      autoWorkRequest={sampleData}
      onSubmit={(data) => console.log('Submit:', data)}
      onCancel={() => console.log('Cancel')}
      onEnd={() => console.log('End')}
    />
  );
};

// Styles
const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 600px;
  margin: 0 auto;
`;

const FormGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const Label = styled.label`
  font-weight: bold;
`;

const Input = styled.input`
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const RadioGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const Radio = styled.input`
  margin-right: 0.25rem;
`;

const RadioLabel = styled.label`
  margin-right: 1rem;
`;

const Textarea = styled.textarea`
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  resize: vertical;
  min-height: 100px;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
`;

const Button = styled.button`
  padding: 0.5rem 1rem;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

export default AutoWorkRequestForm;