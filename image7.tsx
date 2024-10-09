import React from 'react';

type ReservationFormProps = {
  onSubmit: (data: ReservationData) => void;
};

type ReservationData = {
  date: string;
  time: string;
  adultCount: number;
  childCount: number;
  name: string;
  phone: string;
  email: string;
  requests: string;
};

const ReservationForm: React.FC<ReservationFormProps> = ({ onSubmit }) => {
  const [data, setData] = React.useState<ReservationData>({
    date: '',
    time: '',
    adultCount: 0,
    childCount: 0,
    name: '',
    phone: '',
    email: '',
    requests: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(data);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <input
          type="date"
          name="date"
          value={data.date}
          onChange={handleChange}
          required
          className="border border-gray-300 px-3 py-2 rounded-md"
        />
        <input
          type="time"
          name="time"
          value={data.time}
          onChange={handleChange}
          required
          className="border border-gray-300 px-3 py-2 rounded-md"
        />
      </div>
      <div className="grid grid-cols-2 gap-4">
        <input
          type="number"
          name="adultCount"
          min={0}
          value={data.adultCount}
          onChange={handleChange}
          required
          placeholder="大人人数"
          className="border border-gray-300 px-3 py-2 rounded-md"
        />
        <input
          type="number"
          name="childCount"
          min={0}
          value={data.childCount}
          onChange={handleChange}
          required
          placeholder="子供人数" 
          className="border border-gray-300 px-3 py-2 rounded-md"
        />
      </div>
      <input
        type="text"
        name="name"
        value={data.name}
        onChange={handleChange}
        required
        placeholder="氏名"
        className="border border-gray-300 px-3 py-2 rounded-md w-full"
      />
      <input
        type="tel"
        name="phone"
        value={data.phone}
        onChange={handleChange}
        required
        placeholder="電話番号"
        className="border border-gray-300 px-3 py-2 rounded-md w-full"
      />
      <input
        type="email"
        name="email"
        value={data.email}
        onChange={handleChange}
        placeholder="メールアドレス"
        className="border border-gray-300 px-3 py-2 rounded-md w-full"
      />
      <textarea
        name="requests"
        value={data.requests}
        onChange={handleChange}
        placeholder="要望事項"
        className="border border-gray-300 px-3 py-2 rounded-md w-full"
      />
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md">
        送信
      </button>
    </form>
  );
};

export default ReservationForm;

// Usage example:
const App = () => {
  const handleReservationSubmit = (data: ReservationData) => {
    console.log('Reservation data:', data);
    // Send reservation data to API or handle it as needed
  };

  return (
    <div>
      <h1>Reservation Form</h1>
      <ReservationForm onSubmit={handleReservationSubmit} />
    </div>
  );
};