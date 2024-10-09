import React from 'react';

interface TableData {
  header: string[];
  data: (string | number)[][];
}

interface TableProps {
  data: TableData;
}

const Table: React.FC<TableProps> = ({ data }) => {
  const { header, data: rows } = data;

  return (
    <div className="overflow-x-auto">
      <table className="table-auto w-full">
        <thead>
          <tr>
            {header.map((item, index) => (
              <th key={index} className="px-4 py-2">
                {item}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((cell, cellIndex) => (
                <td key={cellIndex} className="border px-4 py-2">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;

// Usage:
// <Table data={{
//   header: ['Column 1', 'Column 2', 'Column 3'],
//   data: [
//     ['Row 1, Cell 1', 'Row 1, Cell 2', 'Row 1, Cell 3'], 
//     ['Row 2, Cell 1', 'Row 2, Cell 2', 'Row 2, Cell 3']
//   ]
// }} />