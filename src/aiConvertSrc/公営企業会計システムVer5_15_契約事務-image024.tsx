import React from 'react';
import styled from 'styled-components';

interface EntryFormProps {
  onSubmit: (data: FormData) => void;
}

interface FormData {
  period: string;
  workType: string;
  workDetail: string;
  startDate: string;
  endDate: string;
  break: boolean;
  outputFormat: string;
  participants: string;
  memo1: string;
  memo2: string;
  memo3: string;
  memo4: string;
}

const EntryForm: React.FC<EntryFormProps> = ({ onSubmit }) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data: FormData = {
      period: formData.get('period') as string,
      workType: formData.get('workType') as string,
      workDetail: formData.get('workDetail') as string,
      startDate: formData.get('startDate') as string,
      endDate: formData.get('endDate') as string,
      break: formData.get('break') === '1',
      outputFormat: formData.get('outputFormat') as string,
      participants: formData.get('participants') as string,
      memo1: formData.get('memo1') as string,
      memo2: formData.get('memo2') as string,
      memo3: formData.get('memo3') as string,
      memo4: formData.get('memo4') as string,
    };
    onSubmit(data);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <Label>期間</Label>
        <Select name="period">
          <option value="year">年度</option>
          <option value="month">数値印字無</option>
        </Select>

        <Label>業務区分</Label>
        <Select name="workType">
          <option value="type1">工事</option>
          <option value="type2">数値印字有</option>
        </Select>
      </FormGroup>

      <FormGroup>
        <Label>出力区分</Label>
        <RadioGroup>
          <Radio name="workDetail" value="detail1" defaultChecked>
            数値印字無
          </Radio>
          <Radio name="workDetail" value="detail2">
            数値印字有
          </Radio>
        </RadioGroup>

        <Label>作業年月日</Label>
        <InputGroup>
          <DateInput type="date" name="startDate" />
          <Separator>〜</Separator>
          <DateInput type="date" name="endDate" />
          <Checkbox type="checkbox" name="break" />
          <span>文章マスタ位置№2文章番号1</span>
        </InputGroup>
      </FormGroup>

      <FormGroup>
        <Label>業者</Label>
        <LongInput type="text" name="outputFormat" />

        <Label>業者</Label>
        <LongInput type="text" name="participants" />
      </FormGroup>

      <FormGroup>
        <Label>表出文章1</Label>
        <LongInput type="text" name="memo1" />

        <Label>備考</Label>
        <LongTextarea name="memo2" rows={4} />
      </FormGroup>

      <SubmitButton type="submit">OK</SubmitButton>
      <ClearButton type="reset">クリア</ClearButton>
      <CloseButton type="button">終了</CloseButton>
    </Form>
  );
};

// Styled components
const Form = styled.form`
  display: grid;
  gap: 16px;
`;

const FormGroup = styled.div`
  display: grid;
  gap: 8px;
`;

const Label = styled.label`
  font-weight: bold;
`;

const Select = styled.select`
  padding: 4px;
`;

const RadioGroup = styled.div`
  display: flex;
  gap: 8px;
`;

const Radio = styled.input`
  margin-right: 4px;
`;

const InputGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const DateInput = styled.input`
  padding: 4px;
`;

const Separator = styled.span``;

const Checkbox = styled.input`
  margin-right: 4px;
`;

const LongInput = styled.input`
  padding: 4px;
`;

const LongTextarea = styled.textarea`
  padding: 4px;
`;

const SubmitButton = styled.button`
  padding: 8px 16px;
  background-color: #007bff;
  color: white;
  border: none;
  cursor: pointer;
`;

const ClearButton = styled.button`
  padding: 8px 16px;
  background-color: #6c757d;
  color: white;
  border: none;
  cursor: pointer;
`;

const CloseButton = styled.button`
  padding: 8px 16px;
  background-color: #dc3545;
  color: white;
  border: none;
  cursor: pointer;
`;

// Sample usage
const SampleEntryForm = () => {
  const handleSubmit = (data: FormData) => {
    console.log(data);
    // Perform submission logic here
  };

  return <EntryForm onSubmit={handleSubmit} />;
};

export default SampleEntryForm;