import React from 'react';

type QuoteFormProps = {
  onSubmit: (values: QuoteFormValues) => void;
  defaultValues?: Partial<QuoteFormValues>;
};

type QuoteFormValues = {
  price: number;
  taxRate: number;
  consumptionTax: number;
  priceIncludingTax: number;
  downPayment: number;
  downPaymentPercentage: number;
  loanAmount: number;
  annualInterestRate: number;
  loanFeeRate: number;
  loanFee: number;
  commission: string;
};

const QuoteForm: React.FC<QuoteFormProps> = ({ onSubmit, defaultValues = {} }) => {
  const [values, setValues] = React.useState<QuoteFormValues>({
    price: defaultValues.price ?? 1000000,
    taxRate: defaultValues.taxRate ?? 10,
    consumptionTax: defaultValues.consumptionTax ?? 0,
    priceIncludingTax: defaultValues.priceIncludingTax ?? 1000000,
    downPayment: defaultValues.downPayment ?? 0,
    downPaymentPercentage: defaultValues.downPaymentPercentage ?? 0,
    loanAmount: defaultValues.loanAmount ?? 1000000,
    annualInterestRate: defaultValues.annualInterestRate ?? 0,
    loanFeeRate: defaultValues.loanFeeRate ?? 0,
    loanFee: defaultValues.loanFee ?? 0,
    commission: defaultValues.commission ?? '',
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setValues((prevValues) => ({
      ...prevValues,
      [name]: name === 'taxRate' || name === 'downPaymentPercentage' ? parseFloat(value) : value,
    }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit(values);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="price" className="block text-sm font-medium text-gray-700">
          決定額
        </label>
        <input
          type="number"
          name="price"
          id="price"
          value={values.price}
          onChange={handleInputChange}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
        />
      </div>

      <div>
        <label htmlFor="taxRate" className="block text-sm font-medium text-gray-700">
          消費税率
        </label>
        <div className="mt-1 relative rounded-md shadow-sm">
          <input
            type="number"
            name="taxRate"
            id="taxRate"
            value={values.taxRate}
            onChange={handleInputChange}
            className="block w-full pr-12 border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            placeholder="0"
            aria-describedby="taxRate-percentage"
          />
          <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
            <span className="text-gray-500 sm:text-sm" id="taxRate-percentage">
              %
            </span>
          </div>
        </div>
      </div>

      <div>
        <label htmlFor="consumptionTax" className="block text-sm font-medium text-gray-700">
          消費税額
        </label>
        <input
          type="number"
          name="consumptionTax"
          id="consumptionTax"
          value={values.consumptionTax}
          onChange={handleInputChange}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          readOnly
        />
      </div>

      <div>
        <label htmlFor="priceIncludingTax" className="block text-sm font-medium text-gray-700">
          税込額
        </label>
        <input
          type="number"
          name="priceIncludingTax"
          id="priceIncludingTax"
          value={values.priceIncludingTax}
          onChange={handleInputChange}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          readOnly
        />
      </div>

      <div>
        <label htmlFor="downPayment" className="block text-sm font-medium text-gray-700">
          頭金額
        </label>
        <input
          type="number"
          name="downPayment"
          id="downPayment"
          value={values.downPayment}
          onChange={handleInputChange}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
        />
      </div>

      <div>
        <label htmlFor="downPaymentPercentage" className="block text-sm font-medium text-gray-700">
          頭金割合
        </label>
        <div className="mt-1 relative rounded-md shadow-sm">
          <input
            type="number"
            name="downPaymentPercentage"
            id="downPaymentPercentage"
            value={values.downPaymentPercentage}
            onChange={handleInputChange}
            className="block w-full pr-12 border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            placeholder="0"
            aria-describedby="downPaymentPercentage-percentage"
            readOnly
          />
          <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
            <span className="text-gray-500 sm:text-sm" id="downPaymentPercentage-percentage">
              %
            </span>
          </div>
        </div>
      </div>

      <div>
        <label htmlFor="loanAmount" className="block text-sm font-medium text-gray-700">
          ローン額
        </label>
        <input
          type="number"
          name="loanAmount"
          id="loanAmount"
          value={values.loanAmount}
          onChange={handleInputChange}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          readOnly
        />
      </div>

      <div>
        <label htmlFor="annualInterestRate" className="block text-sm font-medium text-gray-700">
          年利
        </label>
        <div className="mt-1 relative rounded-md shadow-sm">
          <input
            type="number"
            name="annualInterestRate"
            id="annualInterestRate"
            value={values.annualInterestRate}
            onChange={handleInputChange}
            className="block w-full pr-12 border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            placeholder="0"
            aria-describedby="annualInterestRate-percentage"
          />
          <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
            <span className="text-gray-500 sm:text-sm" id="annualInterestRate-percentage">
              %
            </span>
          </div>
        </div>
      </div>

      <div>
        <label htmlFor="loanFeeRate" className="block text-sm font-medium text-gray-700">
          ローン手数料率
        </label>
        <div className="mt-1 relative rounded-md shadow-sm">
          <input
            type="number"
            name="loanFeeRate"
            id="loanFeeRate"
            value={values.loanFeeRate}
            onChange={handleInputChange}
            className="block w-full pr-12 border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            placeholder="0"
            aria-describedby="loanFeeRate-percentage"
          />
          <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
            <span className="text-gray-500 sm:text-sm" id="loanFeeRate-percentage">
              %
            </span>
          </div>
        </div>
      </div>

      <div>
        <label htmlFor="loanFee" className="block text-sm font-medium text-gray-700">
          ローン手数料
        </label>
        <input
          type="number"
          name="loanFee"
          id="loanFee"
          value={values.loanFee}
          onChange={handleInputChange}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          readOnly
        />
      </div>

      <div>
        <label htmlFor="commission" className="block text-sm font-medium text-gray-700">
          手数料
        </label>
        <textarea
          name="commission"
          id="commission"
          value={values.commission}
          onChange={handleInputChange}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          rows={3}
        />
      </div>

      <button
        type="submit"
        className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
      >
        計算する
      </button>
    </form>
  );
};

// Usage example
const App: React.FC = () => {
  const handleSubmit = (values: QuoteFormValues) => {
    console.log(values);
  };

  return (
    <div className="max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">見積もりフォーム</h1>
      <QuoteForm onSubmit={handleSubmit} />
    </div>
  );
};

export default App;