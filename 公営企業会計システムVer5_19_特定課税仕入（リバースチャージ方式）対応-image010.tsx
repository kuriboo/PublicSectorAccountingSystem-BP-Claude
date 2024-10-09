import React from 'react';

// Define the props type for the component
type TaxWithholdingInputProps = {
  onSubmit: (data: { bushoName: string, bushoCode: string, tokuteiBango: number, nenmatsuchosei: number, nenkanNozei: number, sonotaNozei: number }) => void;
}

// Define the state type for the component
type TaxWithholdingInputState = {
  bushoName: string,
  bushoCode: string,
  tokuteiBango: number,
  nenmatsuchosei: number,
  nenkanNozei: number, 
  sonotaNozei: number
}

// The main component
class TaxWithholdingInput extends React.Component<TaxWithholdingInputProps, TaxWithholdingInputState> {
  constructor(props: TaxWithholdingInputProps) {
    super(props);
    this.state = {
      bushoName: '',
      bushoCode: '',
      tokuteiBango: 0,
      nenmatsuchosei: 0,
      nenkanNozei: 0,
      sonotaNozei: 0
    };
  }

  // Event handlers for input changes
  handleBushoNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({bushoName: event.target.value});
  }

  handleBushoCodeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({bushoCode: event.target.value});
  }

  handleTokuteiBangoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({tokuteiBango: Number(event.target.value)});
  }

  handleNenmatsuchoseiChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({nenmatsuchosei: Number(event.target.value)});
  }

  handleNenkanNozeiChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({nenkanNozei: Number(event.target.value)});
  }

  handleSonotaNozeiChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({sonotaNozei: Number(event.target.value)});
  }

  // Handler for form submission
  handleSubmit = () => {
    this.props.onSubmit(this.state);
  }

  render() {
    return (
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            部署
          </label>
          <input 
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            value={this.state.bushoName}
            onChange={this.handleBushoNameChange}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            部署番号
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            value={this.state.bushoCode}
            onChange={this.handleBushoCodeChange}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            特別番号
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="number"
            value={this.state.tokuteiBango}
            onChange={this.handleTokuteiBangoChange}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            年末調整額
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="number"
            value={this.state.nenmatsuchosei}
            onChange={this.handleNenmatsuchoseiChange}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            年間納税額
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
            type="number"
            value={this.state.nenkanNozei}
            onChange={this.handleNenkanNozeiChange}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            その他納税額
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="number" 
            value={this.state.sonotaNozei}
            onChange={this.handleSonotaNozeiChange}
          />
        </div>
        <div className="flex items-center justify-between">
          <button 
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
            onClick={this.handleSubmit}
          >
            OK
          </button>
        </div>
      </div>
    );
  }
}

// Example usage
const ExampleUsage: React.FC = () => {
  const handleSubmit = (data: TaxWithholdingInputState) => {
    console.log(data);
  }

  return (
    <div>
      <h1>Tax Withholding Input Example</h1>
      <TaxWithholdingInput onSubmit={handleSubmit} />
    </div>
  );
}

export default ExampleUsage;