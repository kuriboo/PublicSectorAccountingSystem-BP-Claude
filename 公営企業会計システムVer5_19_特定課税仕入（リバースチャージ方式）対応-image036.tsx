import React from 'react';

// 特定課税仕入伝票管理入力コンポーネントの型定義
type TaxableEntryProps = {
  startDate: string;
  endDate: string;
  searchSubcontractor: boolean;
  criteria: string;
};

// 特定課税仕入伝票管理入力コンポーネント
const TaxableEntry: React.FC<TaxableEntryProps> = ({
  startDate = '',
  endDate = '',
  searchSubcontractor = false,
  criteria = '',
}) => {
  return (
    <div className="bg-white p-4 rounded shadow">
      <h2 className="text-lg font-bold mb-4">特定課税仕入伝票管理入力</h2>
      <div className="mb-4">
        <label htmlFor="startDate">伝票日付</label>
        <input
          type="date"
          id="startDate"
          className="border rounded py-1 px-2 ml-2"
          value={startDate}
        />
        <span className="mx-2">〜</span>
        <input
          type="date"
          id="endDate"
          className="border rounded py-1 px-2"
          value={endDate}
        />
      </div>
      <div className="mb-4">
        <label>
          <input
            type="checkbox"
            checked={searchSubcontractor}
            className="mr-1"
          />
          課税の支出予算科目か税額中の伝票のみ抽出
        </label>
      </div>
      <div>
        <label htmlFor="criteria">摘要</label>
        <input
          type="text"
          id="criteria"
          className="border rounded py-1 px-2 ml-2"
          value={criteria}
        />
      </div>
      <div className="mt-4">
        <button className="bg-blue-500 text-white rounded py-1 px-4 mr-2">
          確定
        </button>
        <button className="border rounded py-1 px-4">行削除</button>
      </div>
      <table className="w-full mt-4">
        <thead>
          <tr>
            <th className="border px-2 py-1">種別</th>
            <th className="border px-2 py-1">発生源</th>
            <th className="border px-2 py-1">伝票日付</th>
            <th className="border px-2 py-1">番号</th>
            <th className="border px-2 py-1">明細</th>
            <th className="border px-2 py-1">借方科目</th>
            <th className="border px-2 py-1">貸方科目</th>
            <th className="border px-2 py-1">金額</th>
            <th className="border px-2 py-1">税額</th>
            <th className="border px-2 py-1">摘要</th>
          </tr>
        </thead>
        <tbody>
          {/* テーブルのサンプルデータ */}
          <tr>
            <td className="border px-2 py-1">購買</td>
            <td className="border px-2 py-1">天山商店</td>
            <td className="border px-2 py-1">2010/03/27</td>
            <td className="border px-2 py-1">45</td>
            <td className="border px-2 py-1">○○事業費</td>
            <td className="border px-2 py-1">現金</td>
            <td className="border px-2 py-1">仮払金</td>
            <td className="border px-2 py-1">10000</td>
            <td className="border px-2 py-1">500</td>
            <td className="border px-2 py-1">事務用品</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

// サンプルデータを用いた使用例
const SampleUsage: React.FC = () => {
  return (
    <div>
      <h1>特定課税仕入伝票管理入力</h1>
      <TaxableEntry
        startDate="2016-03-27"
        endDate="2016-03-27"
        searchSubcontractor={true}
        criteria="天山"
      />
    </div>
  );
};

export default TaxableEntry;