import React from 'react';

type Props = {
  title: string;
  year: number;
  month: number;
  departureDate: string;
  returnDate: string;
  adultCount: number;
  childCount: number;
  infantCount: number;
  departureAirport: string;
  arrivalAirport: string;
  seatClass: string;
  airlines: string[];
  onSearch: () => void;
  onReset: () => void;
};

const FlightSearchForm: React.FC<Props> = ({
  title,
  year,
  month,
  departureDate,
  returnDate,
  adultCount,
  childCount,
  infantCount,
  departureAirport,
  arrivalAirport,
  seatClass,
  airlines,
  onSearch,
  onReset,
}) => {
  return (
    <div className="bg-white p-4 rounded shadow">
      <h2 className="text-lg font-bold mb-4">{title}</h2>
      <div className="grid grid-cols-3 gap-4 mb-4">
        {/* Year and Month Input */}
        <div>
          <input
            type="number"
            value={year}
            className="border rounded px-2 py-1 w-full"
            readOnly
          />
        </div>
        <div>
          <input
            type="number"
            value={month}
            className="border rounded px-2 py-1 w-full"
            readOnly
          />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4 mb-4">
        {/* Departure and Return Date Input */}
        <div>
          <input
            type="text"
            value={departureDate}
            className="border rounded px-2 py-1 w-full"
            readOnly
          />
        </div>
        <div>
          <input
            type="text"
            value={returnDate}
            className="border rounded px-2 py-1 w-full"
            readOnly
          />
        </div>
      </div>
      <div className="grid grid-cols-3 gap-4 mb-4">
        {/* Passenger Count Input */}
        <div>
          <label>Adults:</label>
          <input
            type="number"
            value={adultCount}
            className="border rounded px-2 py-1 w-full"
          />
        </div>
        <div>
          <label>Children:</label>
          <input
            type="number"
            value={childCount}
            className="border rounded px-2 py-1 w-full"
          />
        </div>
        <div>
          <label>Infants:</label>
          <input
            type="number"
            value={infantCount}
            className="border rounded px-2 py-1 w-full"
          />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4 mb-4">
        {/* Departure and Arrival Airport Input */}
        <div>
          <input
            type="text"
            value={departureAirport}
            className="border rounded px-2 py-1 w-full"
          />
        </div>
        <div>
          <input
            type="text"
            value={arrivalAirport}
            className="border rounded px-2 py-1 w-full"
          />
        </div>
      </div>
      <div className="mb-4">
        {/* Seat Class Selector */}
        <select className="border rounded px-2 py-1 w-full">
          <option>{seatClass}</option>
        </select>
      </div>
      <div className="mb-4">
        {/* Airline Checkboxes */}
        {airlines.map((airline, index) => (
          <div key={index}>
            <label>
              <input type="checkbox" className="mr-2" />
              {airline}
            </label>
          </div>
        ))}
      </div>
      <div className="flex justify-between">
        {/* Search and Reset Buttons */}
        <button 
          className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={onSearch}
        >
          Search
        </button>
        <button
          className="bg-gray-200 text-gray-700 px-4 py-2 rounded"
          onClick={onReset}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default FlightSearchForm;