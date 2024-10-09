import React from 'react';

type BudgetReportProps = {
  companyName: string;
  companyAddress: string;
  fiscalYear: string;
  accountingPeriod: string;
  subject: string;
  condition: string;
  decision: string;
  note: string;
  managementDivision: string;
  postingDate: string;
  documentDate: string;
  accountData: {
    accountName: string;
    amount: number;
  }[];
  totalData: {
    totalTax: number;
    grandTotal: number;
  };
  taxData: {
    taxRate: number;
    taxAmount: number;
    taxableAmount: number;
  };
  status: string;
  draftedBy: string;
  checkedBy: string;
  approvedBy: string;
};

const BudgetReport: React.FC<BudgetReportProps> = ({
  companyName,
  companyAddress,
  fiscalYear,
  accountingPeriod,
  subject,
  condition,
  decision,
  note,
  managementDivision,
  postingDate,
  documentDate,
  accountData,
  totalData,
  taxData,
  status,
  draftedBy,
  checkedBy,
  approvedBy,
}) => {
  // Check if required fields are provided
  if (!companyName || !fiscalYear || !accountingPeriod || !documentDate) {
    return <div>必須項目が入力されていません。</div>;
  }

  return (
    <div className="p-4 border border-gray-300">
      <div className="text-center text-xl font-bold mb-4">負担行為伺兼命令書</div>
      <div className="mb-4">
        <div className="text-sm">平成27年度 行政市事業会計</div>
        <div className="text-sm">
          決定№: 27-000451-07 負担№: 27-000413
        </div>
        <div className="text-sm">
          決定処理日: 平成28年 3月27日 支払予定日: 平成28年 3月27日
        </div>
      </div>

      <table className="w-full mb-4">
        <tbody>
          <tr>
            <td className="border px-4 py-2">管理者</td>
            <td className="border px-4 py-2">{managementDivision}</td>
            <td className="border px-4 py-2">課長</td>
            <td className="border px-4 py-2"></td>
            <td className="border px-4 py-2">業務係長</td>
            <td className="border px-4 py-2">施設係長</td>
            <td className="border px-4 py-2">係</td>
            <td className="border px-4 py-2"></td>
            <td className="border px-4 py-2">起案者</td>
          </tr>
          <tr>
            <td className="border px-4 py-2">決<br />裁</td>
            <td className="border px-4 py-2">専決</td>
            <td className="border px-4 py-2" colSpan={7}></td>
          </tr>
        </tbody>
      </table>

      <div className="mb-4">以下のとおり支出してよろしいか。</div>

      <div className="mb-4">
        <div>款 {accountData[0]?.accountName || '未設定'}</div>
        <div>項目 {accountData[1]?.accountName || '未設定'}</div>
        <div>目 {accountData[2]?.accountName || '未設定'}</div>
        <div>細節 {accountData[3]?.accountName || '未設定'}</div>
        <div>明細 {accountData[4]?.accountName || '未設定'}</div>
      </div>

      <div className="mb-4">
        <div>
          予 算 所 属 {draftedBy}
        </div>
        <div>摘要 {note}</div>
      </div>

      <table className="w-full mb-4">
        <tbody>
          <tr>
            <td className="border px-4 py-2">検収日</td>
            <td className="border px-4 py-2">平成 年 月 日</td>
          </tr>
          <tr>
            <td className="border px-4 py-2">決 裁 金 額</td>
            <td className="border px-4 py-2 text-right">¥ {totalData.grandTotal.toLocaleString()}</td>
          </tr>
          <tr>
            <td className="border px-4 py-2">本 体 金 額</td>
            <td className="border px-4 py-2 text-right">¥ {totalData.totalTax.toLocaleString()}</td>
          </tr>
          <tr>
            <td className="border px-4 py-2">消 費 税 額 等</td>
            <td className="border px-4 py-2 text-right">¥ {taxData.taxAmount.toLocaleString()}</td>
          </tr>
          <tr>
            <td className="border px-4 py-2">予 算 現 額</td>
            <td className="border px-4 py-2 text-right">¥ {taxData.taxableAmount.toLocaleString()}</td>
          </tr>
        </tbody>  
      </table>

      <div>
        <div>予 算 残 額 ¥ {(taxData.taxableAmount - totalData.grandTotal).toLocaleString()}</td>
      </div>

      <div className="mt-8 text-right">
        <div>{status}</div>
        <div>
          起案者: {draftedBy} 確認者: {checkedBy} 決裁者: {approvedBy}
        </div>
      </div>
      
    </div>
  );
};

// Usage example
const BudgetReportSample = () => {
  const sampleData: BudgetReportProps = {
    companyName: '行政市事業会計',  
    companyAddress: '',
    fiscalYear: '平成27年度',
    accountingPeriod: '',
    subject: '負担行為伺兼命令書',
    condition: '',
    decision: '',
    note: '電子書籍購入費', 
    managementDivision: '事業部',
    postingDate: '平成28年3月27日',  
    documentDate: '平成28年3月27日',
    accountData: [
      { accountName: '002事業費用', amount: 0 },
      { accountName: '01営業費用', amount: 0 },  
      { accountName: '01○○事業', amount: 0 },
      { accountName: '13印刷製本費', amount: 0 },
      { accountName: '0001印刷製本費', amount: 0 },
    ],
    totalData: {
      totalTax: 1000000,
      grandTotal: 1001000, 
    },
    taxData: {
      taxRate: 0.1,
      taxAmount: 1000, 
      taxableAmount: 100000000,
    },
    status: '決裁',
    draftedBy: '検証用', 
    checkedBy: '電子書籍購入費',
    approvedBy: '',
  };

  return <BudgetReport {...sampleData} />;
};

export default BudgetReportSample;