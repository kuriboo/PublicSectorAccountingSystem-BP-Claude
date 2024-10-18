import React from 'react';
import styled from '@emotion/styled';

type ProductType = 'registration' | 'renewal' | 'removal';

interface MoveInputRowProps {
  productName: string;
  productType: ProductType;
  unitPrice: number;
  quantity: number;
  taxRate: number;
  amount: number;
  moveDate: string;
}

interface MoveInputTableProps {
  registrationRows: MoveInputRowProps[];
  removalRows: MoveInputRowProps[];
}

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  th, td {
    border: 1px solid #ccc;
    padding: 8px;
    text-align: center;
  }
`;

const MoveInputRow: React.FC<MoveInputRowProps> = ({
  productName,
  productType,
  unitPrice,
  quantity,
  taxRate,
  amount,
  moveDate,
}) => {
  // 必須項目のバリデーション
  if (!productName || !productType || !moveDate) {
    return null;
  }

  return (
    <tr>
      <td>{productName}</td>
      <td>{moveDate}</td>
      <td>{quantity}</td>
      <td>{unitPrice.toLocaleString()}</td>
      <td>{(taxRate * 100).toFixed(0)}%</td>
      <td>{amount.toLocaleString()}</td>
    </tr>
  );
};

const MoveInputTable: React.FC<MoveInputTableProps> = ({ registrationRows, removalRows }) => {
  return (
    <>
      <h3>登録明細</h3>
      <Table>
        <thead>
          <tr>
            <th>保管場所</th>
            <th>日付</th>
            <th>数量</th>
            <th>単価</th>
            <th>税率</th>
            <th>金額</th>
          </tr>
        </thead>
        <tbody>
          {registrationRows.map((row, index) => (
            <MoveInputRow key={index} {...row} />
          ))}
        </tbody>
      </Table>

      <h3>移管明細</h3>
      <Table>
        <thead>
          <tr>
            <th>保管場所</th>
            <th>日付</th>
            <th>数量</th>
            <th>単価</th>
            <th>税率</th>
            <th>移管金額</th>
          </tr>
        </thead>
        <tbody>
          {removalRows.map((row, index) => (
            <MoveInputRow key={index} {...row} />
          ))}
        </tbody>
      </Table>
    </>
  );
};

// 使用例
const App: React.FC = () => {
  const registrationData: MoveInputRowProps[] = [
    {
      productName: '保管場所A',
      productType: 'registration',
      unitPrice: 200,
      quantity: 1,
      taxRate: 0.1,
      amount: 220,
      moveDate: '2023/06/25',
    },
  ];

  const removalData: MoveInputRowProps[] = [
    {
      productName: '保管場所B',
      productType: 'removal',
      unitPrice: 200,
      quantity: 1,
      taxRate: 0.1,
      amount: 220,
      moveDate: '2023/06/25',
    },
  ];

  return <MoveInputTable registrationRows={registrationData} removalRows={removalData} />;
};

export default App;