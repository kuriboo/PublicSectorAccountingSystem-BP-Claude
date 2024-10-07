```tsx
import React from 'react';

type SystemSettingProps = {
  directories: string[];
  simulationFiles: { [key: string]: string };
  mapFiles: { [key: string]: string };
  year: number;
  region: string;
  updateFrequency: string;
  receiveFrequency: string;
  sendFrequency: string;
  logFolder: string;
};

const SystemSetting: React.FC<SystemSettingProps> = ({
  directories,
  simulationFiles,
  mapFiles,
  year,
  region,
  updateFrequency,
  receiveFrequency,
  sendFrequency,
  logFolder,
}) => {
  return (
    <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <h2 className="text-2xl font-bold mb-4">システム設定</h2>
      {/* 業務ディレクトリ */}
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">
          業務ディレクトリ
        </label>
        {directories.map((dir, index) => (
          <div key={index} className="mb-2">
            <input
              type="text"
              value={dir}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
        ))}
      </div>

      {/* シミュレーションパス */}
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">
          シミュレーションパス
        </label>
        <div className="mb-2">
          <input
            type="text"
            value={simulationFiles.ryokin}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
      </div>

      {/* 料金改定 */}
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">
          料金改定
        </label>
        <input
          type="text"
          value={simulationFiles.ryokaiFile}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      
      {/* 年次更新データ */}
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">
          年次更新データ
        </label>
        <input
          type="text"
          value={`${year}年`}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      
      {/* 地区種別 */}
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">
          地区種別
        </label>
        <input
          type="text"
          value={region}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>

      {/* 更新頻度等 */}
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">更新頻度等</label>
        <div className="mb-2">
          <label className="inline-flex items-center">
            <span className="ml-2">会計連携データパス</span>
            <input
              type="text"
              value={updateFrequency}
              className="shadow appearance-none border rounded w-full py-2 px-3 ml-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </label>
        </div>
        <div className="mb-2">
          <label className="inline-flex items-center">
            <span className="ml-2">受水槽対象者一覧表パス</span>
            <input
              type="text"
              value={receiveFrequency}
              className="shadow appearance-none border rounded w-full py-2 px-3 ml-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </label>
        </div>
        <div className="mb-2">
          <label className="inline-flex items-center">
            <span className="ml-2">検針連携データパス</span>
            <input
              type="text"
              value={sendFrequency}
              className="shadow appearance-none border rounded w-full py-2 px-3 ml-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </label>
        </div>
      </div>

      {/* ログ出力先 */}
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">
          ログ出力先
        </label>
        <input
          type="text"
          value={logFolder}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
    </div>
  );
};

export default SystemSetting;
```

This component generates a system settings form based on the provided image. It uses TypeScript to define the props and their types. The component is reusable and customizable through the props. Tailwind CSS classes are used for styling. Comments are included to describe each section.