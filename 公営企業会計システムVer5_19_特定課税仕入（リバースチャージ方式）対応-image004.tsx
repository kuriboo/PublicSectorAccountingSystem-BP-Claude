import React from 'react';

interface Record {
  date: string;
  type: '登録' | '訂正' | '削除';
  time: string;
  practitioner: string;
  department: string;
  reason: string;
  paid: number;
  tax: number;
  unpaid: number;
  note: string;
}

interface Props {
  records: Record[];
}

const TreatmentRecordTable: React.FC<Props> = ({ records }) => {
  return (
    <table className="w-full border-collapse">
      <thead>
        <tr>
          <th className="border px-4 py-2">種別</th>
          <th className="border px-4 py-2">発生源</th>
          <th className="border px-4 py-2">伝票日付</th>
          <th className="border px-4 py-2">番号</th>
          <th className="border px-4 py-2">明細</th>
          <th className="border px-4 py-2">借方科目</th>
          <th className="border px-4 py-2">貸方科目</th>
          <th className="border px-4 py-2">本体金額</th>
          <th className="border px-4 py-2">税額</th>
          <th className="border px-4 py-2">備考</th>
          <th className="border px-4 py-2">個案</th>
        </tr>
      </thead>
      <tbody>
        {records.map((record, index) => (
          <tr key={index}>
            <td className="border px-4 py-2">{record.type}</td>
            <td className="border px-4 py-2">{record.practitioner}</td>
            <td className="border px-4 py-2">{record.date}</td>
            <td className="border px-4 py-2">{record.time}</td>
            <td className="border px-4 py-2">{record.department}</td>
            <td className="border px-4 py-2">{record.paid.toLocaleString()}</td>
            <td className="border px-4 py-2">{record.unpaid.toLocaleString()}</td>
            <td className="border px-4 py-2">{record.paid.toLocaleString()}</td>
            <td className="border px-4 py-2">{record.tax.toLocaleString()}</td>
            <td className="border px-4 py-2">{record.note}</td>
            <td className="border px-4 py-2">電子請求人事</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

// Example usage
const records: Record[] = [
  {
    date: '2010/03/27',
    type: '登録',
    time: '○○診療所',
    practitioner: '1000000',
    department: '整形外科',
    reason: '骨折',
    paid: 10000,
    tax: 1000,
    unpaid: 0,
    note: '電子請求人事',
  },
];

const ExampleComponent: React.FC = () => {
  return (
    <div>
      <h1>特定課税仕入伝票管理入力</h1>
      <TreatmentRecordTable records={records} />
    </div>
  );
};

export default ExampleComponent;