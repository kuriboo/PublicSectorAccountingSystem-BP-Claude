import React from 'react';
import styled from '@emotion/styled';

interface TaxEntry {
  returnDate: string;
  birthDate: string;
  startDate: string;
  endDate: string;
  taxAmount: number;
  paidAmount: number;
  amount: number;
  note: string;
}

interface TaxFormProps {
  taxEntries: TaxEntry[];
}

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;

  th, td {
    padding: 8px;
    text-align: left;
    border-bottom: 1px solid #ddd;
  }

  th {
    background-color: #f2f2f2;
  }

  @media (max-width: 600px) {
    font-size: 14px;
  }
`;

const TaxForm: React.FC<TaxFormProps> = ({ taxEntries }) => {
  return (
    <Table>
      <thead>
        <tr>
          <th>返却</th>
          <th>発生源</th>
          <th>伝票日付</th>
          <th>番号</th>
          <th>明細</th>
          <th>借方科目</th>
          <th>貸方科目</th>
          <th>本体金額</th>
          <th>税額</th>
          <th>摘要1</th>
        </tr>
      </thead>
      <tbody>
        {taxEntries.map((entry, index) => (
          <tr key={index}>
            <td>{entry.returnDate}</td>
            <td>{entry.birthDate}</td>
            <td>{entry.startDate}</td>
            <td>{entry.endDate}</td>
            <td>{entry.taxAmount}</td>
            <td>{entry.paidAmount}</td>
            <td>{entry.amount}</td>
            <td>{entry.note}</td>
            <td>{entry.taxAmount}</td>
            <td>{entry.note}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

// Sample usage
const SampleTaxForm: React.FC = () => {
  const sampleData: TaxEntry[] = [
    {
      returnDate: '振替',
      birthDate: '振替',
      startDate: '2019/12/16',
      endDate: '548',
      taxAmount: 0,
      paidAmount: 48,
      amount: 96000,
      note: '総係費'
    },
    {
      returnDate: '振替',
      birthDate: '集合訓定',
      startDate: '2019/12/17',
      endDate: '1008',
      taxAmount: 0,
      paidAmount: 48,
      amount: 24000,
      note: '営業未払金'
    }
  ];

  return (
    <div>
      <h2>特定課税仕入伝票管理入力</h2>
      <TaxForm taxEntries={sampleData} />
    </div>
  );
};

export default SampleTaxForm;