import React from 'react';
import styled from 'styled-components';

type ContractDetailProps = {
  contractNumber?: string;
  contractName?: string;
  contractPlace?: string;
  contractAmount?: string;
};

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;

  th, td {
    border: 1px solid #ccc;
    padding: 10px;
    text-align: left;
  }

  th {
    background-color: #f0f0f0;
    font-weight: bold;
  }

  @media screen and (max-width: 600px) {
    font-size: 14px;
  }
`;

const ContractDetail: React.FC<ContractDetailProps> = ({
  contractNumber = '',
  contractName = '',
  contractPlace = '',
  contractAmount = '',
}) => {
  return (
    <Table>
      <thead>
        <tr>
          <th>受付番号</th>
          <th>件名</th>
          <th>場所</th>
          <th>契約金額</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{contractNumber}</td>
          <td>{contractName}</td>
          <td>{contractPlace}</td>
          <td>{contractAmount}</td>
        </tr>
      </tbody>
    </Table>
  );
};

// Usage example
const App: React.FC = () => {
  const contract = {
    contractNumber: '42910000',
    contractName: '工事の受付登録JV',
    contractPlace: 'はしょばしょばしょ',
    contractAmount: '指名競争入札',
  };

  return (
    <div>
      <h1>契約内容</h1>
      <ContractDetail
        contractNumber={contract.contractNumber}
        contractName={contract.contractName}
        contractPlace={contract.contractPlace}
        contractAmount={contract.contractAmount}
      />
    </div>
  );
};

export default App;