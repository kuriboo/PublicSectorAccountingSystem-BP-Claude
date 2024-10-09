import React from 'react';

type Reservation = {
  date: string;
  time: string;
  adultCount: number;
  childCount: number;
  adultPrice: number;
  childPrice: number;
};

type ReservationFormProps = {
  onSubmit: (reservation: Reservation) => void;
};

const ReservationForm: React.FC<ReservationFormProps> = ({ onSubmit }) => {
  // State for form fields
  const [date, setDate] = React.useState('');
  const [time, setTime] = React.useState('');
  const [adultCount, setAdultCount] = React.useState(0);
  const [childCount, setChildCount] = React.useState(0);
  const [adultPrice, setAdultPrice] = React.useState(0);
  const [childPrice, setChildPrice] = React.useState(0);

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create reservation object
    const reservation: Reservation = {
      date,
      time,
      adultCount,
      childCount,
      adultPrice,
      childPrice,
    };

    // Call onSubmit callback with reservation data
    onSubmit(reservation);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2" htmlFor="date">
          予約日
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="date"
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2" htmlFor="time">
          時間
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="time"
          type="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2" htmlFor="adultCount">
          大人
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="adultCount"
          type="number"
          min={0}
          value={adultCount}
          onChange={(e) => setAdultCount(Number(e.target.value))}
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2" htmlFor="childCount">
          子供
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="childCount"
          type="number"
          min={0}
          value={childCount}
          onChange={(e) => setChildCount(Number(e.target.value))}
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2" htmlFor="adultPrice">
          大人料金
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="adultPrice"
          type="number"
          min={0}
          value={adultPrice}
          onChange={(e) => setAdultPrice(Number(e.target.value))}
          required
        />
      </div>
      <div className="mb-6">
        <label className="block text-gray-700 font-bold mb-2" htmlFor="childPrice">
          子供料金
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          id="childPrice"
          type="number"
          min={0}
          value={childPrice}
          onChange={(e) => setChildPrice(Number(e.target.value))}
          required
        />
      </div>
      <div className="flex items-center justify-between">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          予約する
        </button>
      </div>
    </form>
  );
};

// Sample usage
const SampleReservationForm = () => {
  const handleReservationSubmit = (reservation: Reservation) => {
    console.log('Reservation submitted:', reservation);
    // TODO: Handle reservation submission (e.g., send to server)
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">予約フォーム</h1>
      <ReservationForm onSubmit={handleReservationSubmit} />
    </div>
  );
};

export default SampleReservationForm;