import React from 'react';

// Define the types for the component props
interface CardProps {
  title: string;
  subtitle?: string;
  description: string;
  price: number;
  onButtonClick?: () => void;
}

// Card component
const Card: React.FC<CardProps> = ({ title, subtitle, description, price, onButtonClick }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h2 className="text-2xl font-bold mb-2">{title}</h2>
      {subtitle && <p className="text-gray-600 mb-4">{subtitle}</p>}
      <p className="text-gray-700 mb-4">{description}</p>
      <p className="text-lg font-bold mb-4">${price.toFixed(2)}</p>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        onClick={onButtonClick}
      >
        Add to Cart
      </button>
    </div>
  );
};

// Example usage of the Card component
const ExampleCard: React.FC = () => {
  const handleButtonClick = () => {
    console.log('Button clicked!');
  };

  return (
    <div className="max-w-sm mx-auto">
      <Card
        title="Sample Product"
        subtitle="Limited Edition"
        description="This is a sample product description."
        price={19.99}
        onButtonClick={handleButtonClick}
      />
    </div>
  );
};

export default ExampleCard;