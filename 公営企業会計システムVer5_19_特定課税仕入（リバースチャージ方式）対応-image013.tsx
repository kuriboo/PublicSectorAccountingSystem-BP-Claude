import React from 'react';

type ReservationFormProps = {
  onSubmit: (data: ReservationData) => void;
};

type ReservationData = {
  reservationNumber: string;
  orderDate: Date;
  shippingDate: Date;
  paymentMethod: 'bankTransfer' | 'creditCard';
  billingMethod: 'monthly' | 'fullPayment';
  shippingAddress: string;
  minPrice: number;
  maxPrice: number;
  note: string;
};

const ReservationForm: React.FC<ReservationFormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = React.useState<ReservationData>({
    reservationNumber: '',
    orderDate: new Date(),
    shippingDate: new Date(),
    paymentMethod: 'bankTransfer',
    billingMethod: 'monthly',
    shippingAddress: '',
    minPrice: 0,
    maxPrice: 999999999999,
    note: '',
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = event.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow">
      <div className="mb-4">
        <label htmlFor="reservationNumber" className="block text-gray-700 font-bold mb-2">
          Reservation Number:
        </label>
        <input
          type="text"
          id="reservationNumber"
          name="reservationNumber"
          value={formData.reservationNumber}
          onChange={handleChange}
          className="w-full px-3 py-2 text-gray-700 border rounded focus:outline-none"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="orderDate" className="block text-gray-700 font-bold mb-2">
          Order Date:
        </label>
        <input
          type="date"
          id="orderDate"
          name="orderDate"
          value={formData.orderDate.toISOString().split('T')[0]}
          onChange={handleChange}
          className="w-full px-3 py-2 text-gray-700 border rounded focus:outline-none"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="shippingDate" className="block text-gray-700 font-bold mb-2">
          Shipping Date:
        </label>
        <input
          type="date"
          id="shippingDate"
          name="shippingDate"
          value={formData.shippingDate.toISOString().split('T')[0]}
          onChange={handleChange}
          className="w-full px-3 py-2 text-gray-700 border rounded focus:outline-none"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">Payment Method:</label>
        <div>
          <label htmlFor="bankTransfer" className="inline-flex items-center">
            <input
              type="radio"
              id="bankTransfer"
              name="paymentMethod"
              value="bankTransfer"
              checked={formData.paymentMethod === 'bankTransfer'}
              onChange={handleChange}
              className="form-radio h-5 w-5 text-indigo-600"
            />
            <span className="ml-2 text-gray-700">Bank Transfer</span>
          </label>
        </div>
        <div>
          <label htmlFor="creditCard" className="inline-flex items-center">
            <input
              type="radio"
              id="creditCard"
              name="paymentMethod"
              value="creditCard"
              checked={formData.paymentMethod === 'creditCard'}
              onChange={handleChange}
              className="form-radio h-5 w-5 text-indigo-600"
            />
            <span className="ml-2 text-gray-700">Credit Card</span>
          </label>
        </div>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">Billing Method:</label>
        <div>
          <label htmlFor="monthly" className="inline-flex items-center">
            <input
              type="radio" 
              id="monthly"
              name="billingMethod"
              value="monthly"
              checked={formData.billingMethod === 'monthly'}
              onChange={handleChange}
              className="form-radio h-5 w-5 text-indigo-600"
            />
            <span className="ml-2 text-gray-700">Monthly</span>
          </label>
        </div>
        <div>
          <label htmlFor="fullPayment" className="inline-flex items-center">
            <input
              type="radio"
              id="fullPayment" 
              name="billingMethod"
              value="fullPayment"
              checked={formData.billingMethod === 'fullPayment'}
              onChange={handleChange}
              className="form-radio h-5 w-5 text-indigo-600" 
            />
            <span className="ml-2 text-gray-700">Full Payment</span>
          </label>
        </div>
      </div>
      <div className="mb-4">
        <label htmlFor="shippingAddress" className="block text-gray-700 font-bold mb-2">
          Shipping Address:
        </label>
        <input
          type="text"
          id="shippingAddress"
          name="shippingAddress"
          value={formData.shippingAddress}
          onChange={handleChange} 
          className="w-full px-3 py-2 text-gray-700 border rounded focus:outline-none"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="minPrice" className="block text-gray-700 font-bold mb-2">
          Min Price:
        </label>
        <input
          type="number"
          id="minPrice"
          name="minPrice"
          min={0}
          max={formData.maxPrice}
          value={formData.minPrice}
          onChange={handleChange}
          className="w-full px-3 py-2 text-gray-700 border rounded focus:outline-none"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="maxPrice" className="block text-gray-700 font-bold mb-2">
          Max Price: 
        </label>
        <input
          type="number"
          id="maxPrice"
          name="maxPrice"
          min={formData.minPrice}
          max={999999999999}
          value={formData.maxPrice}
          onChange={handleChange}
          className="w-full px-3 py-2 text-gray-700 border rounded focus:outline-none"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="note" className="block text-gray-700 font-bold mb-2">
          Note:
        </label>
        <textarea
          id="note"
          name="note"
          value={formData.note}
          onChange={handleChange}
          className="w-full px-3 py-2 text-gray-700 border rounded focus:outline-none"
        />
      </div>
      <div>
        <button 
          type="submit"
          className="bg-indigo-500 text-white font-bold py-2 px-4 rounded hover:bg-indigo-600 focus:outline-none"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default ReservationForm;

// Sample usage
const SampleReservationForm = () => {
  const handleSubmit = (data: ReservationData) => {
    console.log('Submitted data:', data);
  };

  return (
    <div>
      <h1>Reservation Form</h1>
      <ReservationForm onSubmit={handleSubmit} />
    </div>
  );
};