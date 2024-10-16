以下がNext.js + TypeScriptで実装した公営企業会計システムの管理マスタコンポーネントです。

import React from 'react';
import styled from '@emotion/styled';

// 管理マスタのプロパティ型定義
type ManagementMasterProps = {
  fiscalYear: string;
  budgetName: string;
  startingMonth: number;
  department: string;
  division: string;
  accountTitle: string;
  accountTitleCode: string;
  collectionMethod: string;
  paymentLocation: string;
  personInCharge: string;
  supportStaff: string;
  paymentsTerms: string;
  paymentMethod: string;
  priceSetting: number;
  remarks: string;
}

// 管理マスタコンポーネント
const ManagementMaster: React.FC<ManagementMasterProps> = ({
  fiscalYear,
  budgetName,
  startingMonth,
  department,
  division,
  accountTitle,
  accountTitleCode,
  collectionMethod,
  paymentLocation,
  personInCharge,
  supportStaff,
  paymentsTerms,
  paymentMethod,
  priceSetting,
  remarks
}) => {
  return (
    <Wrapper>
      <h2>管理マスタ</h2>
      <table>
        <tbody>
          <tr>
            <th>年度</th>
            <td>{fiscalYear || '未設定'}</td>
            <th>勘定科目名</th>
            <td>{accountTitle || '未設定'}</td>
          </tr>
          <tr>
            <th>予算執行課</th>
            <td>{division || '未設定'}</td>
            <th>勘定科目コード</th>
            <td>{accountTitleCode || '未設定'}</td>
          </tr>
          <tr>
            <th>予算残管理</th>
            <td colSpan={3}>
              <label>
                <input type="radio" name="budgetControl" value="運用管理" checked={budgetName === '運用管理'} readOnly />
                運用管理
              </label>
              <label>
                <input type="radio" name="budgetControl" value="節" checked={budgetName === '節'} readOnly />
                節
              </label>
              <label>
                <input type="radio" name="budgetControl" value="細節" checked={budgetName === '細節'} readOnly />
                細節
              </label>
              <label>
                <input type="radio" name="budgetControl" value="運用" checked={budgetName === '運用'} readOnly />
                運用
              </label>
              <label>
                <input type="radio" name="budgetControl" value="施策内訳" checked={budgetName === '施策内訳'} readOnly />
                施策内訳
              </label>
              <label>
                <input type="radio" name="budgetControl" value="施策事業" checked={budgetName === '施策事業'} readOnly />  
                施策事業
              </label>
              <label>
                <input type="radio" name="budgetControl" value="施策事業詳細" checked={budgetName === '施策事業詳細'} readOnly />
                施策事業詳細
              </label>
            </td>
          </tr>
          <tr>
            <th>決算確定利用値区分</th>
            <td>
              <label>
                <input type="radio" name="settlementUsage" value="決算値" checked={collectionMethod === '決算値'} readOnly />
                決算値 
              </label>
              <label>
                <input type="radio" name="settlementUsage" value="決算見込値" checked={collectionMethod === '決算見込値'} readOnly />
                決算見込値
              </label>
            </td>
          </tr>
          <tr>  
            <th>画面自由設定項目名</th>
            <td colSpan={3}>{remarks || '未設定'}</td>
          </tr>
          <tr>
            <th>支出伝票利用値区分</th>  
            <td>
              <label>
                <input type="radio" name="expenseSlipUsage" value="変更額" checked={paymentLocation === '変更額'} readOnly />
                変更額
              </label>
              <label>  
                <input type="radio" name="expenseSlipUsage" value="変更後の額" checked={paymentLocation === '変更後の額'} readOnly />
                変更後の額
              </label>
            </td>
            <th>請求書自由字名称</th>
            <td>{supportStaff || '未設定'}</td>
          </tr>
          <tr>
            <th>過年度収入区分</th>
            <td>
              <label>
                <input type="radio" name="previousYearIncome" value="年度別" checked={paymentsTerms === '年度別'} readOnly /> 
                年度別
              </label>
              <label>
                <input type="radio" name="previousYearIncome" value="前年過年" checked={paymentsTerms === '前年過年'} readOnly />
                前年過年 
              </label>
            </td>
            <th>納期</th>
            <td>
              {startingMonth}日 
            </td>
          </tr>
          <tr>
            <th>資金予算表選付</th>
            <td>
              <label>
                <input type="radio" name="fundBudgetTable" value="プラス" checked={paymentMethod === 'プラス'} readOnly />
                プラス
              </label>
              <label>
                <input type="radio" name="fundBudgetTable" value="マイナス" checked={paymentMethod === 'マイナス'} readOnly /> 
                マイナス
              </label>  
            </td>
            <th>受付締め日</th>
            <td>平成28年6月6日</td>
          </tr>
          <tr>
            <th>消費税率</th>
            <td colSpan={3}>  
              <input type="number" value={priceSetting} readOnly /> %
            </td>
          </tr>
        </tbody>
      </table>
    </Wrapper>
  );
};

// スタイリング
const Wrapper = styled.div`
  padding: 16px;

  h2 {
    font-size: 18px;
    margin-bottom: 16px;
  }

  table {
    width: 100%;
    border-collapse: collapse;

    th, td {
      border: 1px solid #ccc;
      padding: 8px;
    }

    th {
      background-color: #f0f0f0;
      text-align: left;
      white-space: nowrap;
    }
  }

  @media screen and (max-width: 600px) {
    table {
      th, td {
        display: block;
        width: 100%;
      }
    }
  }
`;

// サンプルデータ
const sampleData: ManagementMasterProps = {  
  fiscalYear: '令和5年',
  budgetName: '節',
  startingMonth: 6,
  department: '総務課',
  division: '予算・会計担当',
  accountTitle: 'ネイピー',
  accountTitleCode: '1234567',
  collectionMethod: '決算値', 
  paymentLocation: '変更額',
  personInCharge: '山田太郎',
  supportStaff: '鈴木花子',
  paymentsTerms: '年度別',
  paymentMethod: 'プラス',
  priceSetting: 10,
  remarks: '備考欄'
};

// 使用例
const App: React.FC = () => {
  return (
    <div>
      <h1>公営企業会計システム</h1>
      <ManagementMaster {...sampleData} />
    </div>
  );  
};

export default App;

このコンポーネントでは、管理マスタの各項目をプロパティとして受け取り、テーブル形式で表示しています。
また、CSS-in-JSライブラリの@emotion/styledを使用してスタイリングを行い、レスポンシブデザインにも対応しています。
各項目の値が未設定の場合は「未設定」と表示するようにしています。
最後に、サンプルデータを用意し、使用例としてAppコンポーネント内で管理マスタコンポーネントを呼び出しています。