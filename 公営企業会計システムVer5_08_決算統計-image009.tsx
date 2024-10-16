import React from 'react';
import styled from '@emotion/styled';

type ReservationFormProps = {
  startDate?: string;
  endDate?: string;
  onSubmit: (startDate: string, endDate: string) => void;
};

const ReservationForm: React.FC<ReservationFormProps> = ({
  startDate = '',
  endDate = '',
  onSubmit,
}) => {
  const [start, setStart] = React.useState(startDate);
  const [end, setEnd] = React.useState(endDate);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(start, end);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Title>資本的収支に関する調べ</Title>
      <DateInputs>
        <DateInput>
          <DateLabel>予算科目</DateLabel>
          <DateField
            type="text"
            value={start}
            onChange={(e) => setStart(e.target.value)}
            placeholder="00000000"
          />
          <Separator>〜</Separator>
          <DateField
            type="text"
            value={end}
            onChange={(e) => setEnd(e.target.value)}
            placeholder="99999999"
          />
        </DateInput>
        <DetailInput>
          <input type="radio" id="all" name="detail" value="all" defaultChecked />
          <label htmlFor="all">あり</label>
          <input type="radio" id="no" name="detail" value="no" />
          <label htmlFor="no">なし</label>
        </DetailInput>
      </DateInputs>
      <Note>
        決算統計帳票明細書を作成します。
        ※あらかじめ10,000円丸め処理を行って
        ください。
      </Note>
      <Buttons>
        <SubmitButton type="submit">検索</SubmitButton>
        <ClearButton type="reset">クリア</ClearButton>
        <DownloadButton type="button">終了</DownloadButton>
      </Buttons>
    </Form>
  );
};

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Title = styled.h2`
  margin: 0;
  font-size: 1.2rem;
`;

const DateInputs = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const DateInput = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const DateLabel = styled.label`
  font-weight: bold;
`;

const DateField = styled.input`
  padding: 0.25rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 100px;
`;

const Separator = styled.span`
  margin: 0 0.5rem;
`;

const DetailInput = styled.div`
  display: flex;
  gap: 1rem;
`;

const Note = styled.p`
  margin: 0;
  font-size: 0.9rem;
  color: #666;
  white-space: pre-line;
`;

const Buttons = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
`;

const SubmitButton = styled.button`
  padding: 0.5rem 1rem;
  font-weight: bold;
  color: white;
  background-color: #007bff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const ClearButton = styled.button`
  padding: 0.5rem 1rem;
  font-weight: bold;
  background-color: #6c757d;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const DownloadButton = styled.button`
  padding: 0.5rem 1rem;
  font-weight: bold;
  background-color: #28a745;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const SampleData = {
  startDate: '00000000',
  endDate: '99999999',
  onSubmit: (startDate: string, endDate: string) => {
    console.log(`Searched from ${startDate} to ${endDate}`);
  },
};

const App: React.FC = () => {
  return (
    <div>
      <h1>Reservation Form Sample</h1>
      <ReservationForm {...SampleData} />
    </div>
  );
};

export default App;