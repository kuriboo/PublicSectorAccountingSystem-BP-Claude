import React from 'react';
import styled from 'styled-components';

type ReservationFormProps = {
  onSubmit: (data: ReservationData) => void;
};

type ReservationData = {
  date: string;
  time: string;
  course: string;
  numberOfPeople: number;
  name: string;
  phoneNumber: string;
  email: string;
  requests: string;
};

const ReservationForm: React.FC<ReservationFormProps> = ({ onSubmit }) => {
  const [reservationData, setReservationData] = React.useState<ReservationData>({
    date: '',
    time: '',
    course: '',
    numberOfPeople: 1,
    name: '',
    phoneNumber: '',
    email: '',
    requests: '',
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setReservationData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit(reservationData);
  };

  return (
    <FormContainer>
      <FormTitle>予算流用充用入力</FormTitle>
      <FormSection>
        <FormLabel>
          <input type="radio" name="budgetType" value="資金" checked={reservationData.course === '資金'} onChange={handleChange} />
          資金
        </FormLabel>
        <FormLabel>
          <input type="radio" name="budgetType" value="計正" checked={reservationData.course === '計正'} onChange={handleChange} />
          計正
        </FormLabel>
        <FormLabel>
          <input type="radio" name="budgetType" value="削除" checked={reservationData.course === '削除'} onChange={handleChange} />
          削除
        </FormLabel>
      </FormSection>
      <FormSection>
        <FormLabel>流用元用日</FormLabel>
        <FormInput type="text" name="date" value={reservationData.date} onChange={handleChange} required />
      </FormSection>
      <FormSection>
        <FormLabel>流用元用区分</FormLabel>
        <FormSelect name="time" value={reservationData.time} onChange={handleChange} required>
          <option value="">選択してください</option>
          <option value="流用">流用</option>
          <option value="充用">充用</option>
          <option value="組替">組替</option>
        </FormSelect>
      </FormSection>
      <FormSection>
        <FormLabel>流用元用番号</FormLabel>
        <FormInput type="number" name="numberOfPeople" value={reservationData.numberOfPeople} onChange={handleChange} min={1} required />
      </FormSection>
      <SubmitButton type="submit">照会</SubmitButton>
      <TableContainer>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHeaderCell>節</TableHeaderCell>
              <TableHeaderCell>細節</TableHeaderCell>
              <TableHeaderCell>明細</TableHeaderCell>
              <TableHeaderCell>予算所属</TableHeaderCell>
              <TableHeaderCell>細節所属区分</TableHeaderCell>
              <TableHeaderCell>金額</TableHeaderCell>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>広告・備品粗品費</TableCell>
              <TableCell>広・消耗品費</TableCell>
              <TableCell>広・消耗品費</TableCell>
              <TableCell>水道課工管</TableCell>
              <TableCell>区分指定なし</TableCell>
              <TableCell>3,000</TableCell>
            </TableRow>
          </TableBody>
        </Table>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHeaderCell>節</TableHeaderCell>
              <TableHeaderCell>細節</TableHeaderCell>
              <TableHeaderCell>明細</TableHeaderCell>
              <TableHeaderCell>予算所属</TableHeaderCell>
              <TableHeaderCell>細節所属区分</TableHeaderCell>
              <TableHeaderCell>金額</TableHeaderCell>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>広告・光熱水費</TableCell>
              <TableCell>広・光熱・電気料</TableCell>
              <TableCell>広・光熱・電気料</TableCell>
              <TableCell>水道課工管</TableCell>
              <TableCell>区分指定なし</TableCell>
              <TableCell>3,000</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      <ButtonContainer>
        <SubmitButton type="button">OK</SubmitButton>
        <SubmitButton type="button">クリア</SubmitButton>
        <SubmitButton type="button">終了</SubmitButton>
      </ButtonContainer>
    </FormContainer>
  );
};

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
  background-color: #f0f0f0;
  border-radius: 4px;
`;

const FormTitle = styled.h2`
  margin: 0;
  font-size: 1.5rem;
`;

const FormSection = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
`;

const FormLabel = styled.label`
  flex: 0 0 120px;
`;

const FormInput = styled.input`
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const FormSelect = styled.select`
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const SubmitButton = styled.button`
  padding: 0.5rem 1rem;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const TableContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const TableHeader = styled.thead`
  background-color: #f0f0f0;
`;

const TableHeaderCell = styled.th`
  padding: 0.5rem;
  text-align: left;
  border: 1px solid #ccc;
`;

const TableBody = styled.tbody``;

const TableRow = styled.tr``;

const TableCell = styled.td`
  padding: 0.5rem;
  border: 1px solid #ccc;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
`;

// Usage example
const App: React.FC = () => {
  const handleSubmit = (data: ReservationData) => {
    console.log('Submitted data:', data);
    // Perform further actions with the submitted data
  };

  return (
    <div>
      <h1>Reservation Form</h1>
      <ReservationForm onSubmit={handleSubmit} />
    </div>
  );
};

export default App;