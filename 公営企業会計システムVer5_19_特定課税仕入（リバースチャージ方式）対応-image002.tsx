import React from 'react';

// Define the interface for the component's props
interface TaxCalculatorProps {
  from: string;
  to: string;
  taxRate: number;
  exemptionAmount: number;
  onCalculate: (result: number) => void;
}

// Define the interface for the component's state
interface TaxCalculatorState {
  income: number;
  deduction: number;
}

// Define the main component
const TaxCalculator: React.FC<TaxCalculatorProps> = ({ 
  from,
  to,
  taxRate,
  exemptionAmount,
  onCalculate
}) => {
  // Initialize the component's state
  const [state, setState] = React.useState<TaxCalculatorState>({
    income: 0,
    deduction: 0
  });

  // Event handler for when the income or deduction changes
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setState(prevState => ({
      ...prevState,
      [name]: parseFloat(value)
    }));
  };

  // Event handler for when the form is submitted
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { income, deduction } = state;
    const taxableIncome = Math.max(income - deduction - exemptionAmount, 0);
    const taxAmount = taxableIncome * (taxRate / 100);
    onCalculate(taxAmount);
  };

  return (
    <div className="bg-white p-4 rounded shadow">
      <h2 className="text-lg font-bold mb-4">Tax Calculator</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="from" className="block font-bold mb-1">From:</label>
          <input type="date" id="from" name="from" value={from} readOnly className="w-full px-3 py-2 border rounded" />
        </div>
        <div className="mb-4">
          <label htmlFor="to" className="block font-bold mb-1">To:</label>
          <input type="date" id="to" name="to" value={to} readOnly className="w-full px-3 py-2 border rounded" />
        </div>
        <div className="mb-4">
          <label htmlFor="income" className="block font-bold mb-1">Income:</label>
          <input 
            type="number"
            id="income"
            name="income"
            value={state.income}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="deduction" className="block font-bold mb-1">Deduction:</label>
          <input
            type="number"
            id="deduction" 
            name="deduction"
            value={state.deduction}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Calculate</button>
      </form>
    </div>
  );
};

// Example usage of the component
const App: React.FC = () => {
  const handleCalculate = (taxAmount: number) => {
    alert(`The calculated tax amount is: ${taxAmount}`);
  };

  return (
    <div className="max-w-sm mx-auto mt-8">
      <TaxCalculator
        from="2016-03-27"
        to="2016-03-27"
        taxRate={10}
        exemptionAmount={1000000}
        onCalculate={handleCalculate}
      />
    </div>
  );
};

export default App;