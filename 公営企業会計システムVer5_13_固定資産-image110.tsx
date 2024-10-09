import React from 'react';

type AssetData = {
  code: string;
  name: string;
  yomi: string;
  market?: string;
};

type AssetTableProps = {
  data: AssetData[];
};

const AssetTable: React.FC<AssetTableProps> = ({ data }) => {
  return (
    <table className="table-auto border-collapse border border-gray-400">
      <thead>
        <tr>
          <th className="border border-gray-400 px-4 py-2">コード</th>
          <th className="border border-gray-400 px-4 py-2">資産名</th>
          <th className="border border-gray-400 px-4 py-2">読み方</th>
          <th className="border border-gray-400 px-4 py-2">取扱市場</th>
        </tr>
      </thead>
      <tbody>
        {data.map((asset, index) => (
          <tr key={index}>
            <td className="border border-gray-400 px-4 py-2">{asset.code}</td>
            <td className="border border-gray-400 px-4 py-2">{asset.name}</td>
            <td className="border border-gray-400 px-4 py-2">{asset.yomi}</td>
            <td className="border border-gray-400 px-4 py-2">{asset.market || '-'}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

// サンプルデータ
const sampleData: AssetData[] = [
  { code: '020101', name: '国債', yomi: '(物証用)国債', market: '日本証券業協会' },
  { code: '020102', name: '地方債', yomi: '(物証用)国債', market: '日本証券業協会' },
  { code: '020103', name: '政府保証債', yomi: '(物証用)国債', market: '日本証券業協会' },
  { code: '020104', name: '財投機関債・政府保証なし', yomi: '(物証用)国債', market: '日本証券業協会' },
  // ... 省略 ...
];

const AssetTableExample: React.FC = () => {
  return (
    <div>
      <h2>資産一覧表</h2>
      <AssetTable data={sampleData} />
    </div>
  );
};

export default AssetTableExample;