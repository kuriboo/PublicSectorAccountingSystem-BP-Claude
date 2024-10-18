import React from 'react';
import styled from '@emotion/styled';

type ReservationFormProps = {
  onSubmit: (data: {
    reservationType: string;
    year: number;
    forecastArea: string;
    startDate: string;
    endDate: string;
  }) => void;
};

const ReservationForm: React.FC<ReservationFormProps> = ({ onSubmit }) => {
  const currentYear = new Date().getFullYear();
  const maxForecastMonth = currentYear + 1 + '04';
  const minForecastMonth = currentYear + '05';

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const data = {
      reservationType: formData.get('reservationType') as string,
      year: Number(formData.get('year')),
      forecastArea: formData.get('forecastArea') as string,
      startDate: formData.get('startDate') as string,
      endDate: formData.get('endDate') as string,
    };
    onSubmit(data);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <TypeContainer>
        <label>
          <input type="radio" name="reservationType" value="配当" defaultChecked /> 配当
        </label>
        <label>
          <input type="radio" name="reservationType" value="解除" /> 解除
        </label>
      </TypeContainer>
      <YearContainer>
        <label>
          年度
          <select name="year" defaultValue={currentYear}>
            <option value={currentYear - 1}>{currentYear - 1}</option>
            <option value={currentYear}>{currentYear}</option>
          </select>
        </label>
      </YearContainer>
      <ForecastAreaContainer>
        <label>
          予算編成区分
          <select name="forecastArea" defaultValue="当初予算">
            <option value="当初予算">当初予算</option>
          </select>
        </label>
      </ForecastAreaContainer>
      <ForecastDateContainer>
        <label>
          配当期間
          <input type="month" name="startDate" defaultValue={minForecastMonth} min={minForecastMonth} max={maxForecastMonth} />
          ～
          <input type="month" name="endDate" defaultValue={maxForecastMonth} min={minForecastMonth} max={maxForecastMonth} />
        </label>
      </ForecastDateContainer>
      <SubmitButton type="submit">編集</SubmitButton>
    </Form>
  );
};

// Styles
const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const TypeContainer = styled.div`
  display: flex;
  gap: 1rem;
`;

const YearContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const ForecastAreaContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const ForecastDateContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const SubmitButton = styled.button`
  padding: 0.5rem 1rem;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

// Usage example
const App: React.FC = () => {
  const handleFormSubmit = (data: {
    reservationType: string;
    year: number;
    forecastArea: string;
    startDate: string; 
    endDate: string;
  }) => {
    console.log(data);
    // Perform further actions with form data
  };

  return (
    <div>
      <h1>予算配当確定</h1>
      <ReservationForm onSubmit={handleFormSubmit} />
    </div>
  );
};

export default App;