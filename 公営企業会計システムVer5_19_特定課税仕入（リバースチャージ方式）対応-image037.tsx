// DateCell.tsx
import React from 'react';

type DateCellProps = {
  date: string;
  className?: string;
};

const DateCell: React.FC<DateCellProps> = ({ date, className = '' }) => {
  return <td className={`border px-4 py-2 ${className}`}>{date}</td>;
};

// Table.tsx
import React from 'react';
import DateCell from './DateCell';

type TableRow = {
  date: string;
  data: (string | number)[];
};

type TableProps = {
  rows: TableRow[];
  headers: string[];
};

const Table: React.FC<TableProps> = ({ rows, headers }) => {
  return (
    <table className="table-auto border-collapse border border-gray-400">
      <thead>
        <tr>
          <th className="border px-4 py-2">日付</th>
          {headers.map((header, index) => (
            <th key={index} className="border px-4 py-2">
              {header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, rowIndex) => (
          <tr key={rowIndex}>
            <DateCell date={row.date} />
            {row.data.map((value, colIndex) => (
              <td key={colIndex} className="border px-4 py-2">
                {value}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

// サンプルデータと使用例
const sampleData: TableRow[] = [
  { date: '002', data: ['01', '01', '13', '001', '0001'] },
  { date: '005', data: ['03', '05', '20', '003', '0002'] },
  { date: '008', data: ['06', '08', '26', '005', '0003'] },
];

const headers = ['項目1', '項目2', '項目3', '項目4', '項目5'];

const SampleTable: React.FC = () => {
  return (
    <div>
      <h2>サンプルテーブル</h2>
      <Table rows={sampleData} headers={headers} />
    </div>
  );
};

export default SampleTable;