import React from 'react';

interface SystemSettingsProps {
  systemMessageBox: string;
  ryokinSettingsFile: string;
  ryokinSettingsDir: string;
  receiptFile: string;
  receiptDir: string;
  yearEndAdjustmentDir: string;
  faceRecognitionDataDir: string;
  watermarkText: string;
  pdfOutputDir: string;
}

const SystemSettings: React.FC<SystemSettingsProps> = ({
  systemMessageBox,
  ryokinSettingsFile,
  ryokinSettingsDir,
  receiptFile,
  receiptDir,
  yearEndAdjustmentDir,
  faceRecognitionDataDir,
  watermarkText,
  pdfOutputDir,
}) => {
  return (
    <div className="bg-white p-4 rounded shadow">
      <h2 className="text-lg font-bold mb-4">その他</h2>
      {/* 業務メッセージ */}
      <div className="mb-4">
        <label htmlFor="systemMessageBox" className="block font-medium mb-1">
          業務メッセージ
        </label>
        <input
          type="text"
          id="systemMessageBox"
          className="w-full p-2 border border-gray-300 rounded"
          value={systemMessageBox}
          readOnly
        />
      </div>
      {/* シミュレーション・パス */}
      <div className="mb-4">
        <label htmlFor="ryokinSettingsFile" className="block font-medium mb-1">
          シミュレーション・パス
        </label>
        <div className="flex">
          <input
            type="text"
            id="ryokinSettingsFile"
            className="w-full p-2 border border-gray-300 rounded"
            value={ryokinSettingsFile}
            readOnly
          />
          <button className="ml-2 px-4 py-2 bg-blue-500 text-white rounded">
            参照
          </button>
        </div>
      </div>
      {/* 料金設定 */}
      <div className="mb-4">
        <label htmlFor="ryokinSettingsDir" className="block font-medium mb-1">
          料金設定
        </label>
        <div className="flex">
          <input
            type="text"
            id="ryokinSettingsDir"
            className="w-full p-2 border border-gray-300 rounded"
            value={ryokinSettingsDir}
            readOnly
          />
          <button className="ml-2 px-4 py-2 bg-blue-500 text-white rounded">
            参照
          </button>
        </div>
      </div>
      {/* 料金設定 料金ファイル名 */}
      <div className="mb-4">
        <label htmlFor="receiptFile" className="block font-medium mb-1">
          料金設定 料金ファイル名
        </label>
        <div className="flex">
          <input
            type="text"
            id="receiptFile"
            className="w-full p-2 border border-gray-300 rounded"
            value={receiptFile}
            readOnly
          />
          <button className="ml-2 px-4 py-2 bg-blue-500 text-white rounded">
            参照
          </button>
        </div>
      </div>
      {/* 料金設定 集計分類 */}
      <div className="mb-4">
        <label htmlFor="receiptDir" className="block font-medium mb-1">
          料金設定 集計分類
        </label>
        <div className="flex">
          <input
            type="text"
            id="receiptDir"
            className="w-full p-2 border border-gray-300 rounded"
            value={receiptDir}
            readOnly
          />
          <button className="ml-2 px-4 py-2 bg-blue-500 text-white rounded">
            参照
          </button>
        </div>
      </div>
      {/* 年次更新・不納欠損パス */}
      <div className="mb-4">
        <label htmlFor="yearEndAdjustmentDir" className="block font-medium mb-1">
          年次更新・不納欠損パス
        </label>
        <div className="flex">
          <input
            type="text"
            id="yearEndAdjustmentDir"
            className="w-full p-2 border border-gray-300 rounded"
            value={yearEndAdjustmentDir}
            readOnly
          />
          <button className="ml-2 px-4 py-2 bg-blue-500 text-white rounded">
            参照
          </button>
        </div>
      </div>
      {/* 受水槽対象者一覧表パス */}
      <div className="mb-4">
        <label htmlFor="faceRecognitionDataDir" className="block font-medium mb-1">
          受水槽対象者一覧表パス
        </label>
        <div className="flex">
          <input
            type="text"
            id="faceRecognitionDataDir"
            className="w-full p-2 border border-gray-300 rounded"
            value={faceRecognitionDataDir}
            readOnly
          />
          <button className="ml-2 px-4 py-2 bg-blue-500 text-white rounded">
            参照
          </button>
        </div>
      </div>
      {/* 会計連携データパス */}
      <div className="mb-4">
        <label htmlFor="watermarkText" className="block font-medium mb-1">
          会計連携データパス
        </label>
        <div className="flex">
          <input
            type="text"
            id="watermarkText"
            className="w-full p-2 border border-gray-300 rounded"
            value={watermarkText}
            readOnly
          />
          <button className="ml-2 px-4 py-2 bg-blue-500 text-white rounded">
            参照
          </button>
        </div>
      </div>
      {/* 他区種別 */}
      <div className="mb-4">
        <label htmlFor="pdfOutputDir" className="block font-medium mb-1">
          他区種別
        </label>
        <select
          id="pdfOutputDir"
          className="w-full p-2 border border-gray-300 rounded"
          value={pdfOutputDir}
          readOnly
        >
          <option value="course">コース地区</option>
        </select>
      </div>
    </div>
  );
};

export default SystemSettings;