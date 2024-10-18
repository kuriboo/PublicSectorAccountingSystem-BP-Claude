import React from 'react';
import styled from '@emotion/styled';

type FormData = {
  dateFrom: string;
  dateTo: string;
  timeFrom: string;
  timeTo: string;
  workingDay: 'weekday' | 'saturday' | 'holiday' | 'morning';
  collectWay: 'all' | 'block' | 'segment';
};

type Props = {
  initialData?: FormData;
  onSubmit: (data: FormData) => void;
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  max-width: 400px;
  margin: 0 auto;

  @media (max-width: 600px) {
    max-width: 100%;
  }
`;

const FieldContainer = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;

const FieldLabel = styled.label`
  flex: 0 0 80px;
`;

const DateInput = styled.input`
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 3px;
  width: 120px;
`;

const TimeInput = styled.input`
  padding: 5px;
  border: 1px solid #ccc;  
  border-radius: 3px;
  width: 80px;
`;

const RadioGroup = styled.div`
  display: flex;
  gap: 10px;
`;

const SubmitButton = styled.button`
  padding: 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const ReservationForm: React.FC<Props> = ({ initialData, onSubmit }) => {
  const [formData, setFormData] = React.useState<FormData>({
    dateFrom: initialData?.dateFrom || '',
    dateTo: initialData?.dateTo || '',
    timeFrom: initialData?.timeFrom || '',
    timeTo: initialData?.timeTo || '', 
    workingDay: initialData?.workingDay || 'weekday',
    collectWay: initialData?.collectWay || 'all',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prevData => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <Container>
      <FieldContainer>
        <FieldLabel>作業日</FieldLabel>
        <DateInput type="text" name="dateFrom" value={formData.dateFrom} onChange={handleChange} />
        <span>～</span>
        <DateInput type="text" name="dateTo" value={formData.dateTo} onChange={handleChange} />
      </FieldContainer>
      
      <FieldContainer>  
        <FieldLabel>予算科目</FieldLabel>
        <TimeInput type="text" name="timeFrom" value={formData.timeFrom} onChange={handleChange} />
        <span>～</span>  
        <TimeInput type="text" name="timeTo" value={formData.timeTo} onChange={handleChange} />
      </FieldContainer>

      <FieldContainer>
        <FieldLabel>作業区分</FieldLabel>
        <RadioGroup>
          <label>
            <input 
              type="radio"
              name="workingDay"
              value="weekday"
              checked={formData.workingDay === 'weekday'}
              onChange={handleChange}
            />
            日
          </label>
          <label>
            <input
              type="radio" 
              name="workingDay"
              value="saturday"
              checked={formData.workingDay === 'saturday'}
              onChange={handleChange}  
            />
            節
          </label>
          <label>
            <input
              type="radio"
              name="workingDay" 
              value="holiday"
              checked={formData.workingDay === 'holiday'}
              onChange={handleChange}
            />  
            細節
          </label>
          <label>
            <input 
              type="radio"
              name="workingDay"
              value="morning" 
              checked={formData.workingDay === 'morning'}
              onChange={handleChange}
            />
            明細 
          </label>
        </RadioGroup>
      </FieldContainer>
      
      <FieldContainer>
        <FieldLabel>集計対象</FieldLabel>
        <RadioGroup>
          <label>
            <input
              type="radio" 
              name="collectWay"
              value="all"
              checked={formData.collectWay === 'all'} 
              onChange={handleChange}
            />
            全体  
          </label>
          <label>  
            <input
              type="radio"
              name="collectWay" 
              value="block"
              checked={formData.collectWay === 'block'}
              onChange={handleChange} 
            />
            ブロック
          </label>
          <label>
            <input 
              type="radio"
              name="collectWay"
              value="segment"
              checked={formData.collectWay === 'segment'}
              onChange={handleChange}
            /> 
            セグメント
          </label>
        </RadioGroup>
      </FieldContainer>

      <SubmitButton type="submit" onClick={handleSubmit}>
        実行
      </SubmitButton>
    </Container>
  );
};

// Sample usage
const App: React.FC = () => {
  const handleSubmit = (data: FormData) => {
    console.log('Submitted data:', data);
    // Perform submission logic here
  };

  return (
    <div>
      <h1>予算額内訳表</h1>
      <ReservationForm onSubmit={handleSubmit} />
    </div>
  );  
};

export default App;