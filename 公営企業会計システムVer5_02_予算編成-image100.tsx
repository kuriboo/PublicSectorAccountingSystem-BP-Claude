import React from 'react';
import styled from '@emotion/styled';

type ChargeDetail = {
  補正係数: string;
  節: string;
  細節: string;
  明細: string;
  税区分: string;
  消費税コード: string;
};

type Props = {
  補正前充当額: number;
  不課税: number;
  合計: number;
  補正後充当額: number;
  補正後充当Amounts: { 不課税: number; 合計: number };
  detailBefore: ChargeDetail;
  detailAfter: ChargeDetail;
};

const Table = styled.table`
  border-collapse: collapse;
  width: 100%;
  th, td {
    border: 1px solid #ccc;
    padding: 8px;
    text-align: left;
  }
  th {
    background-color: #f2f2f2;
  }
`;

const ChargeAllocationTable: React.FC<Props> = ({
  補正前充当額,
  不課税,
  合計,
  補正後充当額,
  補正後充当Amounts,
  detailBefore,
  detailAfter,
}) => {
  return (
    <div>
      <h2>補正充当額明細</h2>
      <p>
        補正充当額です。 <br />
        充当元も充当先も、課税科目の場合は消費税率別に充当額を税込で入力します。
      </p>
      <p>補正前充当額: {補正前充当額.toLocaleString()}</p>
      <Table>
        <thead>
          <tr>
            <th></th>
            <th>不課税</th>
            <th>合計</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>補正前</th>
            <td>{不課税.toLocaleString()}</td>
            <td>{合計.toLocaleString()}</td>
          </tr>
        </tbody>
      </Table>

      <p>補正後充当額: {補正後充当額.toLocaleString()}</p>
      <Table>
        <thead>
          <tr>
            <th></th>
            <th>不課税</th>
            <th>合計</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>補正後</th>
            <td>{補正後充当Amounts.不課税.toLocaleString()}</td>
            <td>{補正後充当Amounts.合計.toLocaleString()}</td>
          </tr>
        </tbody>
      </Table>

      <h2>充当元</h2>
      <Table>
        <tbody>
          <tr>
            <th>節</th>
            <td>{detailBefore.節}</td>
          </tr>
          <tr>
            <th>細節</th>
            <td>{detailBefore.細節}</td>
          </tr>
          <tr>
            <th>明細</th>
            <td>{detailBefore.明細}</td>
          </tr>
          <tr>
            <th>税区分</th>
            <td>{detailBefore.税区分}</td>
          </tr>
          <tr>
            <th>消費税コード</th>
            <td>{detailBefore.消費税コード}</td>
          </tr>
        </tbody>
      </Table>

      <h2>充当先</h2>
      <Table>
        <tbody>
          <tr>
            <th>節</th>
            <td>{detailAfter.節}</td>
          </tr>
          <tr>
            <th>細節</th>
            <td>{detailAfter.細節}</td>
          </tr>
          <tr>
            <th>明細</th>
            <td>{detailAfter.明細}</td>
          </tr>
          <tr>
            <th>税区分</th>
            <td>{detailAfter.税区分}</td>
          </tr>
          <tr>
            <th>消費税コード</th>
            <td>{detailAfter.消費税コード}</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

// Usage example
const App: React.FC = () => {
  const sampleData: Props = {
    補正前充当額: 3000000,
    不課税: 3000000, 
    合計: 3000000,
    補正後充当額: 1500000,
    補正後充当Amounts: {
      不課税: 1500000,
      合計: 1500000,
    },
    detailBefore: {
      補正係数: '001',
      節: '02 統計工学申込書', 
      細節: '0001 講義',
      明細: '001 講義',
      税区分: '課税',
      消費税コード: '05',
    },
    detailAfter: {
      補正係数: '002',
      節: '01 資金(所)', 
      細節: '0001 貸金',
      明細: '0003 資金貸付金',
      税区分: '不課税',
      消費税コード: '',
    },
  };

  return (
    <div>
      <h1>補正充当額明細</h1>
      <ChargeAllocationTable {...sampleData} />
    </div>
  );
};

export default App;