import React from 'react';
import styled from '@emotion/styled';

type MaterialData = {
  no: number;
  unit: string;
  quantity: number;
  unitPrice: number;
  price: number;
  scheduledDeliveryDate: string;
  fixedDate: string;
};

type MaterialTableProps = {
  data: MaterialData[];
};

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  th, td {
    border: 1px solid #ccc;
    padding: 8px;
    text-align: center;
  }
  th {
    background-color: #f0f0f0;
  }
`;

const MaterialTable: React.FC<MaterialTableProps> = ({ data }) => {
  if (!data || data.length === 0) {
    return <p>No data available</p>;
  }

  return (
    <Table>
      <thead>
        <tr>
          <th>No.</th>
          <th>単位</th>
          <th>数量</th>
          <th>合計数量</th>
          <th>単位</th>
          <th>合計金額</th>
          <th>固定資産納品予定</th>
          <th>固定日</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <td>{item.no}</td>
            <td>{item.unit}</td>
            <td>{item.quantity.toLocaleString()}</td>
            <td>{item.quantity.toLocaleString()} rm</td>
            <td>{item.unitPrice.toLocaleString()} 円</td>
            <td>{item.price.toLocaleString()} 円</td>
            <td>{item.scheduledDeliveryDate}</td>
            <td>{item.fixedDate}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

// Sample usage
const App: React.FC = () => {
  const sampleData: MaterialData[] = [
    {
      no: 7,
      unit: 'Φ13',
      quantity: 100,
      unitPrice: 9000,
      price: 900000,
      scheduledDeliveryDate: '固定資産納入',
      fixedDate: '10月末',
    },
  ];

  return (
    <div>
      <h2>材料別とりまとめ入力</h2>
      <MaterialTable data={sampleData} />
    </div>
  );
};

export default App;