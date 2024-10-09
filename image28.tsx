import React from 'react';

type VacationRequestFormProps = {
  employeeNo?: string;
  fiscalYear?: string;
  from?: string;
  to?: string;
  leaveType1?: string;
  leaveType2?: string;
  reason?: string;
  amount?: number;
};

const VacationRequestForm: React.FC<VacationRequestFormProps> = ({
  employeeNo = '27-000043',
  fiscalYear = '平成28年 3月27日',
  from = '',
  to = '',
  leaveType1 = '',
  leaveType2 = '',
  reason = '',
  amount = 80000,
}) => {
  return (
    <div className="bg-white p-4 rounded shadow">
      <h2 className="text-lg font-bold mb-4">振替伝票（単票）</h2>
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <label className="font-bold">伝票No.</label>
          <div>{employeeNo}</div>
        </div>
        <div>
          <label className="font-bold">日付</label>
          <div>{fiscalYear}</div>
        </div>
      </div>
      <table className="w-full border-collapse">
        <tbody>
          <tr>
            <th className="border px-2 py-1">所属</th>
            <th className="border px-2 py-1">検証用</th>
            <th className="border px-2 py-1" colSpan={2}>課長</th>
            <th className="border px-2 py-1" colSpan={2}>係長</th>
            <th className="border px-2 py-1">起案者</th>
          </tr>
          <tr>
            <td className="border px-2 py-1">{leaveType1 || '借方科目'}</td>
            <td className="border px-2 py-1">{from || '自由記入欄'}</td>
            <td className="border px-2 py-1" colSpan={2}>{to || '貸方科目'}</td>
            <td className="border px-2 py-1" colSpan={2}></td>
            <td className="border px-2 py-1"></td>
          </tr>
          <tr>
            <td className="border px-2 py-1">{leaveType2 || '金額'}</td>
            <td className="border px-2 py-1" colSpan={6}></td>
          </tr>
          <tr>
            <td className="border px-2 py-1">流動資産</td>
            <td className="border px-2 py-1">流動負債</td>
            <td className="border px-2 py-1" colSpan={5}>
              <div>その他流動資産</div>
              <div>仮払消費税及び地方消費税</div>
              <div>仮払消費税及び地方消費税</div>
              <div>仮払消費税及び地方消費税</div>
              <div>仮払消費税及び地方消費税</div>
            </td>
          </tr>
          <tr>
            <td className="border px-2 py-1" colSpan={2}>
              <div>その他流動負債</div>
              <div>仮受消費税及び地方消費税</div>
              <div>仮受消費税及び地方消費税</div>
              <div>仮受消費税及び地方消費税</div>
              <div>仮受消費税及び地方消費税</div>
            </td>
            <td className="border px-2 py-1 text-right" colSpan={5}>
              {amount.toLocaleString()}円
            </td>
          </tr>
          <tr>
            <td className="border px-2 py-1">税区分</td>
            <td className="border px-2 py-1">税区分</td>
            <td className="border px-2 py-1" colSpan={4}>
              {reason || '資金予算区分'}
            </td>
            <td className="border px-2 py-1">無</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

// サンプルデータを用いた使用例
const SampleVacationRequestForm = () => {
  return (
    <VacationRequestForm
      employeeNo="28-000123"
      fiscalYear="令和2年4月1日"
      from="普通預金"
      to="未払金"
      leaveType1="諸口"
      leaveType2="諸口"
      reason="資金繰り"
      amount={120000}
    />
  );
};

export default VacationRequestForm;