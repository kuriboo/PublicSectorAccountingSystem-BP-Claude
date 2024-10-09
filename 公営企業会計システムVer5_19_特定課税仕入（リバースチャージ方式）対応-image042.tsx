import React from 'react';

// 明細情報のプロパティ型定義
interface MeisaiProps {
  year: string;
  kubun: string;
  taxRate: number;
  purchaseCategory: string;
  entryCurrency: string;
  convertedAmount: number;
  purchaseDate: string;
  electronicLedgerNum: string;
  jigyo: string;
  keihi: string;
}

// 明細情報コンポーネント
const Meisai: React.FC<MeisaiProps> = ({
  year,
  kubun,
  taxRate,
  purchaseCategory,
  entryCurrency,
  convertedAmount,
  purchaseDate,
  electronicLedgerNum,
  jigyo,
  keihi,
}) => {
  return (
    <div className="bg-white p-4 rounded shadow">
      <div className="flex justify-between mb-4">
        <div>
          {/* 年度 */}
          <p className="text-sm text-gray-500">年度</p>
          <p className="text-lg font-bold">{year || '-'}</p>
        </div>
        <div>
          {/* 区分 */}
          <p className="text-sm text-gray-500">区分</p>
          <p className="text-lg font-bold">{kubun || '-'}</p>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          {/* 税区分 */}
          <label className="block text-sm font-medium text-gray-700">
            税区分
          </label>
          <select
            className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            value={purchaseCategory}
          >
            <option value="課税1">課税1</option>
            <option value="非課税">非課税</option>
          </select>
        </div>
        <div>
          {/* 税率 */}
          <label className="block text-sm font-medium text-gray-700">
            税率
          </label>
          <div className="mt-1 flex rounded-md shadow-sm">
            <input
              type="number"
              className="focus:ring-blue-500 focus:border-blue-500 flex-1 block w-full rounded-none rounded-l-md sm:text-sm border-gray-300"
              value={taxRate}
            />
            <span className="inline-flex items-center px-3 rounded-r-md border border-l-0 border-gray-300 bg-gray-50 text-gray-500 sm:text-sm">
              %
            </span>
          </div>
        </div>
        <div>
          {/* 収入区分 */}
          <label className="block text-sm font-medium text-gray-700">
            収入区分
          </label>
          <select className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm">
            <option value=""></option>
            {/* その他の収入区分オプション */}
          </select>
        </div>
        <div>
          {/* 監査区分 */}
          <label className="block text-sm font-medium text-gray-700">
            監査区分
          </label>
          <select className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm">
            <option value="2">経常</option>
            {/* その他の監査区分オプション */}
          </select>
        </div>
      </div>
      <div className="mt-4 grid grid-cols-2 gap-4">
        <div>
          {/* 為替予約番号 */}
          <label className="block text-sm font-medium text-gray-700">
            為替予約番号
          </label>
          <input
            type="text"
            className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
          />
        </div>
        <div>
          {/* 予算科目区分 */}
          <label className="block text-sm font-medium text-gray-700">
            予算科目区分
          </label>
          <select className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm">
            <option value="2">運常末挿上2</option>
            {/* その他の予算科目区分オプション */}
          </select>
        </div>
        <div>
          {/* エントリー区分 */}
          <label className="block text-sm font-medium text-gray-700">
            エントリー区分
          </label>
          <input
            type="text"
            className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            value={entryCurrency}
          />
        </div>
      </div>
      <div className="mt-4">
        {/* 精算基礎税込フラグ */}
        <div className="flex items-center">
          <input
            id="includeTax"
            name="includeTax"
            type="checkbox"
            className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded"
          />
          <label
            htmlFor="includeTax"
            className="ml-2 block text-sm text-gray-900"
          >
            税込
          </label>
        </div>
      </div>
      <div className="mt-4">
        {/* 消費税率税込金額 */}
        <label className="block text-sm font-medium text-gray-700">
          消費税率税込金額
        </label>
        <div className="mt-1 flex rounded-md shadow-sm">
          <input
            type="text"
            className="focus:ring-blue-500 focus:border-blue-500 flex-1 block w-full rounded-none rounded-l-md sm:text-sm border-gray-300"
            value={convertedAmount > 0 ? convertedAmount.toLocaleString() : ''}
          />
          <span className="inline-flex items-center px-3 rounded-r-md border border-l-0 border-gray-300 bg-gray-50 text-gray-500 sm:text-sm">
            営業未払金
          </span>
        </div>
      </div>
      <div className="mt-4">
        {/* 事業部門 */}
        <label className="block text-sm font-medium text-gray-700">
          事業部門
        </label>
        <input
          type="text"
          className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
          value={jigyo || ''}
        />
      </div>
      <div className="mt-4">
        {/* 経費 */}
        <label className="block text-sm font-medium text-gray-700">経費</label>
        <input
          type="text"
          className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
          value={keihi || ''}
        />
      </div>
      <div className="mt-4">
        {/* 検索内容 */}
        <label className="block text-sm font-medium text-gray-700">
          検索内容
        </label>
        <input
          type="text"
          className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
        />
      </div>
      <div className="mt-4 grid grid-cols-2 gap-4">
        <div>
          {/* 所属 */}
          <label className="block text-sm font-medium text-gray-700">
            所属
          </label>
          <input
            type="text"
            className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
          />
        </div>
        <div>
          {/* 施策 */}
          <label className="block text-sm font-medium text-gray-700">
            施策
          </label>
          <input
            type="text"
            className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
          />
        </div>
      </div>
      <div className="mt-4">
        {/* 購買管理番号 */}
        <label className="block text-sm font-medium text-gray-700">
          購買管理番号
        </label>
        <input
          type="text"
          className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
          value={electronicLedgerNum || ''}
        />
      </div>
      <div className="mt-4">
        {/* 支払日 */}
        <label className="block text-sm font-medium text-gray-700">
          支払日
        </label>
        <input
          type="text"
          className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
          value={purchaseDate || ''}
        />
      </div>
    </div>
  );
};

// サンプルデータ
const sampleData: MeisaiProps = {
  year: '2021',
  kubun: '電子書籍費',
  taxRate: 10,
  purchaseCategory: '課税1',
  entryCurrency: '',
  convertedAmount: 1234,
  purchaseDate: '2021/01/01',
  electronicLedgerNum: '001001001',
  jigyo: '',
  keihi: '',
};

// 使用例
const MeisaiExample: React.FC = () => {
  return (
    <div>
      <h2>明細情報の例</h2>
      <Meisai {...sampleData} />
    </div>
  );
};

export default MeisaiExample;