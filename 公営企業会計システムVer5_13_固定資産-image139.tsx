import React from 'react';

type CodeData = {
  code: string;
  name: string;
};

type CodeListProps = {
  data: CodeData[];
};

const CodeList: React.FC<CodeListProps> = ({ data }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <table className="w-full">
        <thead>
          <tr>
            <th className="px-4 py-2">コード</th>
            <th className="px-4 py-2">名称</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index} className={index % 2 === 0 ? 'bg-gray-100' : ''}>
              <td className="border px-4 py-2">{item.code}</td>
              <td className="border px-4 py-2">{item.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

// サンプルデータ
const sampleData: CodeData[] = [
  { code: '000', name: '予測用ダミー' },
  { code: '001', name: '取水部門' },
  { code: '002', name: '導水部門' },
  { code: '003', name: '浄水部門' },
  { code: '004', name: '排水部門' },
  { code: '005', name: '送水部門' },
  { code: '006', name: '配水部門' },
  { code: '007', name: '水道メータ部門' },
  { code: '008', name: 'その他一般管理部門' },
  { code: '009', name: '不明' },
  { code: '010', name: '水源混濁部門' },
  { code: '011', name: '工務部門' },
  { code: '012', name: '営業部門' },
  { code: '013', name: '総務部門' },
  { code: '014', name: '管理部門' },
];

// 表示用コンポーネント
const CodeListExample: React.FC = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">コード名称一覧</h1>
      <CodeList data={sampleData} />
    </div>
  );
};

export default CodeListExample;