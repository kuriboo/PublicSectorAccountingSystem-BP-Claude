import React from 'react';

interface ReservationFormProps {
  onSubmit: (data: ReservationData) => void;
}

interface ReservationData {
  date: string;
  time: string;
  course: string;
  numberOfPeople: number;
  name: string;
  phoneNumber: string;
  email: string;
  requests: string;
}

const ReservationForm: React.FC<ReservationFormProps> = ({ onSubmit }) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO: Collect form data and pass it to onSubmit
    const data: ReservationData = {
      date: '',
      time: '',
      course: '',
      numberOfPeople: 0,
      name: '',
      phoneNumber: '',
      email: '',
      requests: '',
    };
    onSubmit(data);
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
          className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="course" className="block text-gray-700 font-bold mb-2">
          コース
        </label>
        <select
          id="course"
          className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none"
          required
        >
          <option value="">選択してください</option>
          {/* TODO: Populate options dynamically */}
        </select>
      </div>
      <div className="mb-4">
        <label htmlFor="numberOfPeople" className="block text-gray-700 font-bold mb-2">
          人数
        </label>
        <input
          type="number"
          id="numberOfPeople"
          className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
          代表者名
        </label>
        <input
          type="text"
          id="name"
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
          className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="requests" className="block text-gray-700 font-bold mb-2">
          要望など
        </label>
        <textarea
          id="requests"
          rows={3}
          className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none"
        ></textarea>
      </div>
      <div className="flex justify-center">
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          予約する
        </button>
      </div>
    </form>
  );
};

export default ReservationForm;