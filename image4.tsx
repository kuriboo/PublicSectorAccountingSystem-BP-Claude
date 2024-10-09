import React from 'react';

interface Reservation {
  date: string;
  time: string;
  numberOfPeople: number;
  name: string;
  phoneNumber: string;
  email: string;
  requests: string;
}

interface ReservationFormProps {
  onSubmit: (reservation: Reservation) => void;
}

const ReservationForm: React.FC<ReservationFormProps> = ({ onSubmit }) => {
  const [date, setDate] = React.useState('');
  const [time, setTime] = React.useState('');
  const [numberOfPeople, setNumberOfPeople] = React.useState(1);
  const [name, setName] = React.useState('');
  const [phoneNumber, setPhoneNumber] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [requests, setRequests] = React.useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const reservation: Reservation = {
      date,
      time,
      numberOfPeople,
      name,
      phoneNumber,
      email,
      requests,
    };
    onSubmit(reservation);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
      <div className="mb-4">
        <label htmlFor="date" className="block text-gray-700 font-bold mb-2">
          予約日
        </label>
        <input
          type="date"
          id="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="time" className="block text-gray-700 font-bold mb-2">
          時間
        </label>
        <input
          type="time"
          id="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="numberOfPeople" className="block text-gray-700 font-bold mb-2">
          人数
        </label>
        <input
          type="number"
          id="numberOfPeople"
          min="1"
          value={numberOfPeople}
          onChange={(e) => setNumberOfPeople(Number(e.target.value))}
          className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
          氏名
        </label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="phoneNumber" className="block text-gray-700 font-bold mb-2">
          電話番号
        </label>
        <input
          type="tel"
          id="phoneNumber"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
          メールアドレス
        </label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="requests" className="block text-gray-700 font-bold mb-2">
          要望
        </label>
        <textarea
          id="requests"
          value={requests}
          onChange={(e) => setRequests(e.target.value)}
          className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none"
        />
      </div>
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none"
      >
        予約する
      </button>
    </form>
  );
};

// サンプルデータを用いた使用例
const SampleReservation: React.FC = () => {
  const handleSubmit = (reservation: Reservation) => {
    console.log('Submitted reservation:', reservation);
    // ここで予約データをサーバーに送信するなどの処理を行う
  };

  return (
    <div className="max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">予約フォーム</h1>
      <ReservationForm onSubmit={handleSubmit} />
    </div>
  );
};

export default SampleReservation;