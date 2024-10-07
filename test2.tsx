import React from 'react';

type DirectorySettingsProps = {
  businessMessageStorage: string;
  industryTemplateFile: string;
  personalSettingsFile: string;
  personalDictionaryFolder: string;
  yearEndAdjustmentOutput: string;
  waterReading: string;
  annualUpdateDataBackup: string;
};

const DirectorySettings: React.FC<DirectorySettingsProps> = ({
  businessMessageStorage,
  industryTemplateFile,
  personalSettingsFile,
  personalDictionaryFolder,
  yearEndAdjustmentOutput,
  waterReading,
  annualUpdateDataBackup,
}) => {
  return (
    <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <h2 className="text-2xl font-bold mb-4">その他</h2>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">
          業務メッセージ
        </label>
        <input
          type="text"
          value={businessMessageStorage}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2">
          参照
        </button>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">
          シミュレーションパス
        </label>
        <input
          type="text"
          value={industryTemplateFile}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2">
          参照
        </button>
      </div>
      {/* Repeat the above pattern for the remaining settings */}
    </div>
  );
};

export default DirectorySettings;