import React from 'react';

interface SystemSettingsProps {
  businessMessage?: string;
  receiptInput?: string;
  receiptOutput?: string;
  receiptOutputDirectory?: string;
  partialReceiptInput?: string;
  partialReceiptOutput?: string;
  yearEndAdjustmentDirectory?: string;
  employeeInfoCSV?: string;
  locationDataCSV?: string;
}

const SystemSettings: React.FC<SystemSettingsProps> = ({
  businessMessage = 'C:\\Gyosei\\Gyokin',
  receiptInput = 'C:\\Note\\File.xls', 
  receiptOutput = 'D:\\Note\\File.xls',
  receiptOutputDirectory = '振計地区別',
  partialReceiptInput = 'C:\\Memo',
  partialReceiptOutput = 'C:\\Gyosei\\Gyokin\\System',
  yearEndAdjustmentDirectory = 'C:\\Gyosei\\Gyokin',
  employeeInfoCSV = 'コース地区',
  locationDataCSV = 'コース地区',
}) => {
  return (
    <div className="bg-white p-4 rounded shadow">
      {/* 業務メッセージ */}
      <div className="mb-4">
        <label htmlFor="businessMessage" className="block font-medium mb-1">業務メッセージ</label>
        <input type="text" id="businessMessage" className="w-full border rounded py-2 px-3" value={businessMessage} readOnly />
      </div>

      {/* シミュレーションパス */}
      <div className="mb-4">
        <label htmlFor="receiptInput" className="block font-medium mb-1">料金改定 調モファイル名</label>
        <input type="text" id="receiptInput" className="w-full border rounded py-2 px-3" value={receiptInput} readOnly />

        <label htmlFor="receiptOutput" className="block font-medium mb-1">料金改定 料金ファイル名</label>
        <input type="text" id="receiptOutput" className="w-full border rounded py-2 px-3" value={receiptOutput} readOnly />

        <label htmlFor="receiptOutputDirectory" className="block font-medium mb-1">料金改定 集計方法</label>
        <input type="text" id="receiptOutputDirectory" className="w-full border rounded py-2 px-3" value={receiptOutputDirectory} readOnly />
      </div>

      {/* 年次更新・不納欠損パス */}
      <div className="mb-4">
        <label htmlFor="partialReceiptInput" className="block font-medium mb-1">年次更新・不納欠損パス</label>  
        <input type="text" id="partialReceiptInput" className="w-full border rounded py-2 px-3" value={partialReceiptInput} readOnly />
      </div>

      {/* 受水槽対象者一覧表パス */}
      <div className="mb-4">
        <label htmlFor="partialReceiptOutput" className="block font-medium mb-1">受水槽対象者一覧表パス</label>
        <input type="text" id="partialReceiptOutput" className="w-full border rounded py-2 px-3" value={partialReceiptOutput} readOnly />
      </div>

      {/* 全社連携データパス */}
      <div className="mb-4"> 
        <label htmlFor="yearEndAdjustmentDirectory" className="block font-medium mb-1">全社連携データパス</label>
        <input type="text" id="yearEndAdjustmentDirectory" className="w-full border rounded py-2 px-3" value={yearEndAdjustmentDirectory} readOnly />
      </div>

      {/* 地区種別 */}
      <div className="mb-4">
        <label htmlFor="employeeInfoCSV" className="block font-medium mb-1">地区種別</label>
        <input type="text" id="employeeInfoCSV" className="w-full border rounded py-2 px-3" value={employeeInfoCSV} readOnly />
      </div>

      {/* 地区種別 */}
      <div>  
        <label htmlFor="locationDataCSV" className="block font-medium mb-1">地区種別</label>
        <input type="text" id="locationDataCSV" className="w-full border rounded py-2 px-3" value={locationDataCSV} readOnly />
      </div>
    </div>
  );
};

export default SystemSettings;