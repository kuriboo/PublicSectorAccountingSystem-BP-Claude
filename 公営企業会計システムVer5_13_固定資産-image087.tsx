import React from 'react';
import classNames from 'classnames';

type InvestmentDetailProps = {
  investmentAmount: number;
  accruedInterest: number;
  deferredIncome: number;
  totalInvestment: number;
  investmentDate: string;
  dueDate: string;
  creditRating: string;
  investmentHistory: {
    investmentDate: string;
    debitAmount: number;
    accruedInterest: number;
    deferredIncome: number;
    investmentAmount: number;
    redemptionAmount: number;
    balance: number;
  }[];
};

const InvestmentDetail: React.FC<InvestmentDetailProps> = ({
  investmentAmount,
  accruedInterest,
  deferredIncome,
  totalInvestment,
  investmentDate,
  dueDate,
  creditRating,
  investmentHistory,
}) => {
  return (
    <div className="bg-white shadow overflow-hidden sm:rounded-lg">
      <div className="px-4 py-5 sm:px-6">
        <h3 className="text-lg leading-6 font-medium text-gray-900">投資詳細情報</h3>
      </div>
      <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
        <dl className="sm:divide-y sm:divide-gray-200">
          <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">資産番号</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">8002500</dd>
          </div>
          <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">資産名称</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">都水管改良工事</dd>
          </div>
          <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">取得年月日</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">平成29年09月12日</dd>
          </div>
          <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">信用方法</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">信用貸</dd>
          </div>
          <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">取得価額</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">7,000,000</dd>
          </div>
          <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">
              <div>前期末残高</div>
              <div>当年度増加</div>
              <div>当年度減少</div>
              <div>差引額</div>
            </dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              <div>{investmentAmount.toLocaleString()}</div>
              <div>{accruedInterest.toLocaleString()}</div>
              <div>{deferredIncome.toLocaleString()}</div>
              <div>{totalInvestment.toLocaleString()}</div>
            </dd>
          </div>
          <div className="py-4 sm:py-5 sm:px-6">
            <h4 className="text-md leading-6 font-medium text-gray-900">異動年月日</h4>
            <div className="mt-2 flex flex-col">
              <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                  <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-gray-50">
                        <tr>
                          <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                          >
                            異動年月日
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                          >
                            異動区分
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                          >
                            異動摘要
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"
                          >
                            異動額
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"
                          >
                            増減額
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"
                          >
                            残高
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {investmentHistory.map((history, historyIdx) => (
                          <tr key={historyIdx} className={classNames(historyIdx % 2 === 0 ? 'bg-white' : 'bg-gray-50')}>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                              {history.investmentDate}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{history.debitAmount > 0 ? '取得' : '償還'}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{history.debitAmount > 0 ? '取得' : '償還'}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-right">{history.investmentAmount.toLocaleString()}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-right">{history.redemptionAmount.toLocaleString()}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-right">{history.balance.toLocaleString()}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </dl>
      </div>
    </div>
  );
};

export default InvestmentDetail;

// Example usage
const App = () => {
  const investmentDetailProps = {
    investmentAmount: 7000000,
    accruedInterest: 0, 
    deferredIncome: 0,
    totalInvestment: 7000000,
    investmentDate: "平成29年08月12日",
    dueDate: "",
    creditRating: "信用貸",
    investmentHistory: [
      {
        investmentDate: "2017-08-12",
        debitAmount: 7000000,
        accruedInterest: 0,
        deferredIncome: 0, 
        investmentAmount: 7000000,
        redemptionAmount: 0,
        balance: 7000000
      }
    ]
  };

  return (
    <div>
      <h1>Investment Detail Example</h1>
      <InvestmentDetail {...investmentDetailProps} />
    </div>
  );
};