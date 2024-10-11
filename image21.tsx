import React from 'react';
import styled from '@emotion/styled';

interface FinancialStatementProps {
  fiscalYear: number;
  fiscalPeriod: string;
  companyName: string;
  departmentName: string;
  balanceDate: string;
  startDate: string;
  endDate: string;
  statement: {
    accountTitle: string;
    accountCode: string;
    decision: number;
    accountingPeriod: number;
    beforeAccountingPeriod: number;
    increase: number;
    decrease: number;
  }[];
  documentNo: string;
  preparedBy: string;
  approvedBy: string;
  totalDebitAmount: number;
  totalCreditAmount: number;
  differenceAmount: number;
  preparedDate: string;
  approvedDate: string;
}

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;

  th, td {
    border: 1px solid #000;
    padding: 5px;
    text-align: center;
  }

  th {
    background-color: #f0f0f0;
  }
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;

const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;

const FinancialStatement: React.FC<FinancialStatementProps> = ({
  fiscalYear,
  fiscalPeriod,
  companyName,
  departmentName,
  balanceDate,
  startDate,
  endDate,
  statement,
  documentNo,
  preparedBy,
  approvedBy,
  totalDebitAmount,
  totalCreditAmount,
  differenceAmount,
  preparedDate,
  approvedDate,
}) => {
  return (
    <div>
      <Header>
        <h2>負担行為伺兼命令書</h2>
        <div>
          <p>決定No. {documentNo}</p>
          <p>負担No. {documentNo}</p>
        </div>
      </Header>
      <div>
        <p>平成{fiscalYear}年度 行政市事業会計</p>
        <p>
          決定処理日 平成{startDate.slice(0, 4)}年{startDate.slice(5, 7)}月{startDate.slice(8, 10)}日<br />
          支払予定日 平成{endDate.slice(0, 4)}年{endDate.slice(5, 7)}月{endDate.slice(8, 10)}日
        </p>
      </div>
      <Table>
        <thead>
          <tr>
            <th rowSpan={2}>決<br />裁</th>
            <th>管理者</th>
            <th>課長</th>
            <th colSpan={2}>起案者</th>
            <th>業務係長</th>
            <th>施設係長</th>
            <th>係</th>
            <th>起案者</th>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </thead>
      </Table>
      <div>
        <p>以下のとおり支出してよろしいか。</p>
        <p>
          款 {statement[0]?.accountCode.slice(0, 3)} 事業費用<br />
          項 {statement[0]?.accountCode.slice(3, 5)} 営業費用<br />
          目 {statement[0]?.accountCode.slice(5)} 事業<br />
          細節 {statement[0]?.accountCode.slice(7, 9)} 印刷製本費
        </p>
      </div>
      <Table>
        <tbody>
          <tr>
            <th>節</th>
            <th>決 裁 金 額</th>
            <th>{totalDebitAmount.toLocaleString()}円</th>
          </tr>
          <tr>
            <th>本 体 金 額</th>
            <th>{totalDebitAmount.toLocaleString()}円</th>
          </tr>
          <tr>
            <th>消 費 税 額 等</th>
            <th>0円</th>
          </tr>
          <tr>
            <th>予 算 現 額</th>
            <th>100,000,000円</th>
          </tr>
          <tr>
            <th>負 担 累 計</th>
            <th>1,001,000円</th>
          </tr>
          <tr>
            <th>予 算 残 額</th>
            <th>98,999,000円</th>
          </tr>
        </tbody>
      </Table>
      <Footer>
        <div>
          <p>予 算 所 属 検証用</p>
          <p>摘 要 電子書籍購入費</p>
        </div>
        <div>
          <p>税 区 分 課税</p>
        </div>
      </Footer>
    </div>
  );
};

// サンプルデータ
const sampleData: FinancialStatementProps = {
  fiscalYear: 27,
  fiscalPeriod: '行政市事業会計',
  companyName: 'サンプル会社',
  departmentName: 'サンプル部署', 
  balanceDate: '平成28年3月27日',
  startDate: '平成28年3月27日',
  endDate: '平成28年3月27日',
  statement: [
    {
      accountTitle: '事業費用',
      accountCode: '002',
      decision: 1000000,
      accountingPeriod: 1000000,
      beforeAccountingPeriod: 0,
      increase: 100000000,
      decrease: 98999000,
    },
  ],
  documentNo: '27-000451-07',
  preparedBy: '作成者',
  approvedBy: '承認者',
  totalDebitAmount: 1000000,
  totalCreditAmount: 1000000,
  differenceAmount: 0,
  preparedDate: '平成27年4月1日',
  approvedDate: '平成27年4月1日',
};

const App: React.FC = () => {
  return (
    <div>
      <h1>財務諸表サンプル</h1>
      <FinancialStatement {...sampleData} />
    </div>
  );
};

export default App;