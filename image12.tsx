import React from 'react';
import styled from 'styled-components';

// 予約情報を表すインターフェース
interface Reservation {
  date: string;
  time: string;
  adultCount: number;
  childCount: number;
  infantCount: number;
  seatClass: string;
  smoking: boolean;
}

// コンポーネントのプロパティを定義するインターフェース
interface ReservationFormProps {
  onSubmit: (reservation: Reservation) => void;
}

// スタイル付きコンポーネントを定義
const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #f0f0f0;
  border-radius: 5px;
`;

const FormRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  width: 100%;
  
  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

const FormLabel = styled.label`
  margin-right: 10px;
`;

const FormInput = styled.input`
  padding: 5px;
  border-radius: 3px;
  border: 1px solid #ccc;
`;

const FormSelect = styled.select`
  padding: 5px;
  border-radius: 3px;
  border: 1px solid #ccc;
`;

const SubmitButton = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  
  &:hover {
    background-color: #0056b3;
  }
`;

// 予約フォームコンポーネント
const ReservationForm: React.FC<ReservationFormProps> = ({ onSubmit }) => {
  // フォームの状態を管理
  const [reservation, setReservation] = React.useState<Reservation>({
    date: '',
    time: '',
    adultCount: 0,
    childCount: 0,
    infantCount: 0,
    seatClass: '',
    smoking: false,
  });

  // フォームの入力が変更されたときの処理
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type, checked } = e.target;
    const inputValue = type === 'checkbox' ? checked : value;
    setReservation(prevState => ({
      ...prevState,
      [name]: inputValue,
    }));
  };

  // フォームが送信されたときの処理
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(reservation);
  };

  return (
    <FormWrapper>
      <form onSubmit={handleSubmit}>
        <FormRow>
          <FormLabel>予約日:</FormLabel>
          <FormInput type="date" name="date" value={reservation.date} onChange={handleChange} required />
        </FormRow>
        <FormRow>
          <FormLabel>予約時間:</FormLabel>
          <FormInput type="time" name="time" value={reservation.time} onChange={handleChange} required />
        </FormRow>
        <FormRow>
          <FormLabel>大人:</FormLabel>
          <FormInput type="number" name="adultCount" value={reservation.adultCount} onChange={handleChange} min={0} required />
        </FormRow>
        <FormRow>
          <FormLabel>子供:</FormLabel>
          <FormInput type="number" name="childCount" value={reservation.childCount} onChange={handleChange} min={0} required />
        </FormRow>
        <FormRow>
          <FormLabel>幼児:</FormLabel>
          <FormInput type="number" name="infantCount" value={reservation.infantCount} onChange={handleChange} min={0} required />
        </FormRow>
        <FormRow>
          <FormLabel>座席クラス:</FormLabel>
          <FormSelect name="seatClass" value={reservation.seatClass} onChange={handleChange} required>
            <option value="">選択してください</option>
            <option value="economy">エコノミー</option>
            <option value="business">ビジネス</option>
          </FormSelect>
        </FormRow>
        <FormRow>
          <FormLabel>喫煙席:</FormLabel>
          <FormInput type="checkbox" name="smoking" checked={reservation.smoking} onChange={handleChange} />
        </FormRow>
        <SubmitButton type="submit">予約する</SubmitButton>
      </form>
    </FormWrapper>
  );
};

// 使用例
const App: React.FC = () => {
  const handleReservationSubmit = (reservation: Reservation) => {
    // フォームの送信処理を行う
    console.log(reservation);
  };

  return (
    <div>
      <h1>予約フォーム</h1>
      <ReservationForm onSubmit={handleReservationSubmit} />
    </div>
  );
};

export default App;