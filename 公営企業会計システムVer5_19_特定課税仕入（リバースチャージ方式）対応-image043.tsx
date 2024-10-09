import React from 'react';

// Define the props for the component
interface CardProps {
  title: string;
  subtitle: string;
  description: string;
  buttonText: string;
  onButtonClick: () => void;
}

// Create a reusable card component
const Card: React.FC<CardProps> = ({ title, subtitle, description, buttonText, onButtonClick }) => {
  return (
    <div className="bg-green-100 p-6 rounded-lg shadow-md">
      {/* Card title */}
      <h2 className="text-2xl font-bold mb-2">{title}</h2>
      
      {/* Card subtitle */}
      <p className="text-gray-600 mb-4">{subtitle}</p>
      
      {/* Card description */}
      <p className="text-gray-800 mb-6">{description}</p>
      
      {/* Card button */}
      <button
        className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition duration-200"
        onClick={onButtonClick}
      >
        {buttonText}
      </button>
    </div>
  );
};

export default Card;