import React from 'react';
import styled from '@emotion/styled';

interface UnsubscribeFormProps {
  onSubmit: (formData: UnsubscribeFormData) => void;
}

interface UnsubscribeFormData {
  reason: string;
  startDate: string;
  endDate: string;
  predictedDate: string;
  unpredictedDate: string;
}

const UnsubscribeForm: React.FC<UnsubscribeFormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = React.useState<UnsubscribeFormData>({
    reason: '',
    startDate: '',
    endDate: '',
    predictedDate: '',
    unpredictedDate: '',
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = event.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit(formData);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Title>退会理由</Title>
      <ReasonSelect
        name="reason"
        value={formData.reason}
        onChange={handleChange}
      >
        <option value="">選択してください</option>
        <option value="有">有</option>
        <option value="無">無</option>
      </ReasonSelect>

      <DateFieldset>
        <legend>範囲指定</legend>
        <DateField>
          <input
            type="radio"
            id="dateRange"
            name="dateRange"
            value="dateRange"
            checked={formData.startDate !== '' && formData.endDate !== ''}
            onChange={handleChange}
          />
          <label htmlFor="dateRange">期間で本人金のもの</label>
        </DateField>
        <DateInputs>
          <DateInput
            type="text"
            name="startDate"
            value={formData.startDate}
            onChange={handleChange}
            placeholder="0000/00/00"
          />
          <DateDelimiter>〜</DateDelimiter>
          <DateInput
            type="text"
            name="endDate"
            value={formData.endDate}
            onChange={handleChange}
            placeholder="0000/00/00"
          />
        </DateInputs>
        <PredictionFieldset>
          <DateField>
            <input
              type="radio"
              id="predictedDate"
              name="predictedDate"
              value="predictedDate"
              checked={formData.predictedDate !== ''}
              onChange={handleChange}
            />
            <label htmlFor="predictedDate">予算日</label>
          </DateField>
          <DateField>
            <input
              type="radio"
              id="unpredictedDate"
              name="unpredictedDate"
              value="unpredictedDate"
              checked={formData.unpredictedDate !== ''}
              onChange={handleChange}
            />
            <label htmlFor="unpredictedDate">調整料</label>
          </DateField>
          <DateInputs>
            <DateInput
              type="text"
              name="predictedDate"
              value={formData.predictedDate}
              onChange={handleChange}
              placeholder="00000000"
            />
            <DateDelimiter>〜</DateDelimiter>
            <DateInput
              type="text"
              name="unpredictedDate"
              value={formData.unpredictedDate}
              onChange={handleChange}
              placeholder="99999999"
            />
          </DateInputs>
        </PredictionFieldset>
      </DateFieldset>

      <ButtonContainer>
        <SubmitButton type="submit">OK</SubmitButton>
        <ClearButton type="button">クリア</ClearButton>
        <EndButton type="button">終了</EndButton>
      </ButtonContainer>
    </Form>
  );
};

const Form = styled.form`
  padding: 16px;
`;

const Title = styled.h2`
  margin-bottom: 16px;
`;

const ReasonSelect = styled.select`
  margin-bottom: 16px;
`;

const DateFieldset = styled.fieldset`
  margin-bottom: 16px;
`;

const DateField = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
`;

const DateInputs = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
`;

const DateInput = styled.input`
  padding: 4px;
`;

const DateDelimiter = styled.span`
  margin: 0 8px;
`;

const PredictionFieldset = styled.fieldset`
  margin-top: 16px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const SubmitButton = styled.button`
  margin-left: 8px;
`;

const ClearButton = styled.button`
  margin-left: 8px;
`;

const EndButton = styled.button`
  margin-left: 8px;
`;

// Usage example
const MyPage: React.FC = () => {
  const handleSubmit = (formData: UnsubscribeFormData) => {
    console.log('Form submitted:', formData);
    // Perform form submission logic here
  };

  return (
    <div>
      <h1>My Page</h1>
      <UnsubscribeForm onSubmit={handleSubmit} />
    </div>
  );
};

export default MyPage;