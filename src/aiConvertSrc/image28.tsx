import React, { useState } from 'react';
import styled from 'styled-components';

type PriceListItem = {
  label: string;
  diameter: number;
  price: number;
};

type PriceListProps = {
  items: PriceListItem[];
  materialType?: string;
  quantity?: number;
  taxRate?: number;
  consumptionTax?: number;
  totalAmount?: number;
};

const Wrapper = styled.div`
  font-family: sans-serif;
  table {
    border-collapse: collapse;
    width: 100%;
    th, td {
      border: 1px solid #ddd;
      padding: 8px;
      text-align: center;
    }
    th {
      background-color: #f2f2f2;
    }
  }
  .summary {
    margin-top: 20px;
    text-align: right;
    > div {
      margin-bottom: 5px;
    }
  }
`;

const PriceList: React.FC<PriceListProps> = ({
  items,
  materialType = '10加入亜鉛荒',
  quantity = 1,
  taxRate = 10,
  consumptionTax = 0,
  totalAmount = 0,
}) => {
  // State for diameter and form
  const [diameter, setDiameter] = useState(25);
  const [form, setForm] = useState('mm');

  // Calculate consumption tax and total amount
  const calculatedTax = Math.floor(totalAmount * (taxRate / 100));
  const calculatedTotal = totalAmount + calculatedTax;

  return (
    <Wrapper>
      <div>
        <label>
          納付分類:
          <select value={materialType}>
            <option value="10加入亜鉛荒">10加入亜鉛荒</option>
            {/* Add more options as needed */}
          </select>
        </label>
      </div>
      <table>
        <thead>
          <tr>
            <th>形状寸法</th>
            <th>形状</th>
            <th>単価</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => (
            <tr key={index}>
              <td>
                <input
                  type="number"
                  value={item.diameter}
                  onChange={(e) => {
                    const newItems = [...items];
                    newItems[index].diameter = Number(e.target.value);
                    setDiameter(newItems[index].diameter);
                  }}
                />
                <select
                  value={form}
                  onChange={(e) => setForm(e.target.value)}
                >
                  <option value="mm">mm</option>
                  {/* Add more options as needed */}
                </select>
              </td>
              <td>{item.label}</td>
              <td>{item.price.toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="summary">
        <div>
          単価: <span>{totalAmount.toLocaleString()}</span>
        </div>
        <div>
          数量: <span>{quantity}</span>
        </div>
        <div>
          金額: <span>{totalAmount.toLocaleString()}</span>
        </div>
        <div>
          消費税率: <span>{taxRate}%</span>
        </div>
        <div>
          消費税額: <span>{calculatedTax.toLocaleString()}</span>
        </div>
        <div>
          総額: <span>{calculatedTotal.toLocaleString()}</span>
        </div>
      </div>
    </Wrapper>
  );
};

// Sample usage
const App: React.FC = () => {
  const sampleData: PriceListItem[] = [
    { label: '形状コード', diameter: 13, price: 157500 },
    { label: '20', diameter: 20, price: 210000 },
    { label: '25', diameter: 25, price: 420000 },
    { label: '30', diameter: 30, price: 525000 },
    { label: '40', diameter: 40, price: 1050000 },
    { label: '50', diameter: 50, price: 1575000 },
  ];

  return (
    <div>
      <h1>Price List Example</h1>
      <PriceList
        items={sampleData}
        quantity={210000}
        totalAmount={210000}
      />
    </div>
  );
};

export default App;