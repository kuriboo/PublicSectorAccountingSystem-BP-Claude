import React from 'react';

// 検査項目の型定義
type Inspection = {
  id: string;
  name: string;
  result: string;
};

// コンポーネントのプロパティの型定義
type InspectionResultTableProps = {
  inspections: Inspection[];
};

// 検査結果一覧テーブルコンポーネント
const InspectionResultTable: React.FC<InspectionResultTableProps> = ({ inspections }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              検査項目
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              検査結果
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {inspections.map((inspection) => (
            <tr key={inspection.id}>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                {inspection.name}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {inspection.result}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

// サンプルデータ
const sampleInspections: Inspection[] = [
  { id: '001', name: '水漏', result: '01:なし' },
  { id: '002', name: '漏電', result: '01:なし' },
  { id: '003', name: '障害', result: '02:やや有り' },
  { id: '004', name: 'ひび割れ', result: '01:なし' },
  { id: '005', name: 'アスベスト', result: '01:なし' },
  { id: '006', name: '通路リサイクル法', result: '03:適用外' },
  { id: '007', name: '総合評価', result: '02:B' },
  { id: '008', name: '修繕要否', result: '02:経過観察' },
  { id: '010', name: '改修', result: '02:不要' },
];

// 使用例
const App: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold mb-4">検査結果一覧</h1>
      <InspectionResultTable inspections={sampleInspections} />
    </div>
  );
};

export default App;