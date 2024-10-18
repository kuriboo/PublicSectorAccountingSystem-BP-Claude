import React from 'react';
import styled from '@emotion/styled';

// 負担行為伺兼命令書のプロパティの型定義
type FinancialOrderProps = {
  fiscalYear: number;
  orderDate: string;
  orderNumber: string;
  documentNumber: string;
  managementNumber: string;
  departmentCode: string;
  departmentName: string;
  position: string;
  name: string;
  date: string;
  detailItems: Array<{
    breakdown: string;
    code: string;
    amount: number;
  }>;
  specificationNumber: string;
  applicationDate: string;
  budgetCode: string;
  summaryItems: Array<{
    breakdown: string;
    code: string;
    amount: number;
  }>;
  totalAmount: number;
  applicationDepartment: string;
  accountTitle: string;
  taxIncluded: number;
  applicationPerson: string;
};

// スタイル定義
const Container = styled.div`
  font-family: sans-serif;
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  box-sizing: border-box;

  @media (max-width: 600px) {
    padding: 10px;
  }
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;

  th, td {
    border: 1px solid #ccc;
    padding: 5px;
    text-align: center;
  }

  th {
    background-color: #f0f0f0;
  }
`;

const AmountTable = styled.table`
  float: right;
  margin-left: 20px;

  td {
    padding: 2px 5px;
    text-align: right;
  }
`;

// 負担行為伺兼命令書コンポーネント
const FinancialOrder: React.FC<FinancialOrderProps> = ({
  fiscalYear,
  orderDate,
  orderNumber,
  documentNumber,
  managementNumber,
  departmentCode,
  departmentName,
  position,  
  name,
  date,
  detailItems,
  specificationNumber,
  applicationDate,
  budgetCode,
  summaryItems,
  totalAmount,
  applicationDepartment,
  accountTitle,
  taxIncluded,
  applicationPerson,
}) => {
  return (
    <Container>
      <h2>負担行為伺兼命令書</h2>
      <p>
        決定№: {orderNumber}<br />
        負担№: {documentNumber}
      </p>
      <p>
        決定処理日 平成{fiscalYear}年 {orderDate.split('-')[1]}月{orderDate.split('-')[2]}日<br />
        支払予定日 平成{fiscalYear}年 {applicationDate.split('-')[1]}月{applicationDate.split('-')[2]}日
      </p>

      <Table>
        <thead>
          <tr>
            <th>部 局</th>
            <th>所属</th>
            <th>起案者</th>
            <th colSpan={2}>業務係長</th>
            <th colSpan={2}>施設係長</th>
            <th>係</th>
            <th>起案者</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{departmentCode}</td>
            <td>{departmentName}</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </Table>

      <p>以下のとおり支出してよろしいか。</p>
      <p>
        款　　{budgetCode.slice(0,3)}<br />
        項　　{budgetCode.slice(3,5)}<br />
        目　　{budgetCode.slice(5,7)}<br />
        細節　{budgetCode.slice(7,9)}
      </p>

      {detailItems.map((item, index) => (
        <p key={index}>
          {item.breakdown}　{item.code}　{item.amount.toLocaleString()}円
        </p>
      ))}

      <AmountTable>
        <tbody>
          {summaryItems.map((item, index) => (
            <tr key={index}>
              <td>{item.breakdown}</td>
              <td>{item.amount.toLocaleString()}円</td>
            </tr>
          ))}
          <tr>
            <td>税 込 分 課 税</td>
            <td>{taxIncluded.toLocaleString()}円</td>
          </tr>
          <tr>
            <td>予 算 残 額</td>
            <td>{(totalAmount - taxIncluded).toLocaleString()}円</td>
          </tr>
        </tbody>
      </AmountTable>

      <p>
        摘　　　要 電子書籍購入費<br />
        稟　　　議 電子書籍購入費
      </p>

      <p>
        起案日　{applicationDate}<br />
        決　　裁　{applicationDepartment}<br />
        専 攻 所 属  {applicationPerson}
      </p>
    </Container>
  );
};



// 使用例
const SampleData: FinancialOrderProps = {
  fiscalYear: 27,
  orderDate: '2022-03-27',
  orderNumber: '27-000451-07',
  documentNumber: '27-000413',
  managementNumber: '',
  departmentCode: '002',
  departmentName: '事業費用',
  position: '',  
  name: '',
  date: '',
  detailItems: [
    { breakdown: '講　　座　費', code: '01', amount: 1000000 },
    { breakdown: '本　体　金　額', code: '', amount: 1000000 },
    { breakdown: '消　費　税　額', code: '13', amount: 100000 },
    { breakdown: '予　算　現　額', code: '0001', amount: 101000000 },
    { breakdown: '負　担　累　計', code: '0001', amount: 98999000 },
  ],
  specificationNumber: '01〇〇事業',
  applicationDate: '2022-03-27',
  budgetCode: '002事業費用01管業費用01〇〇事業',
  summaryItems: [
    { breakdown: '消費税額等', amount: 0 },
    { breakdown: '予算現額', amount: 100000000 },
  ],
  totalAmount: 101000000,
  applicationDepartment: '',
  accountTitle: '',
  taxIncluded: 1000000,
  applicationPerson: '',  
};

const App: React.FC = () => {
  return (
    <div>
      <h1>負担行為伺兼命令書のサンプル</h1>
      <FinancialOrder {...SampleData} />
    </div>
  );  
};

export default App;