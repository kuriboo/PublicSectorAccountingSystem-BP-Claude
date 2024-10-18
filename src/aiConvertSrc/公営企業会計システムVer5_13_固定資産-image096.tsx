import React from 'react';
import styled from 'styled-components';

// 型定義
type FinancialForecastProps = {
  documentNumber: string;
  divisionCode: string;
  divisionName: string;
  forecastDate: string;
  accountingPeriodMonth: number;
  accountingPeriodStartDate: string;
  accountingPeriodEndDate: string;
  receivingDate: string;
  collectingMethod: string;
  amountOfSales: number;
  amountExcludingTax: number;
  consumptionTax: number;
  discountAmount: number;
  depositAmount: number;
  annualAmountOfDeposit: number;
  totalAmountOfDeposit: number;
  reserveGroupCode: string;
  effectiveDate: string;
  details: Array<{
    detailCode: string;
    itemName: string;
    specification: string;
    unitPrice: number;
  }>;
};

// スタイル定義
const Container = styled.div`
  padding: 16px;
`;

const Title = styled.div`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 16px;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;

  th, td {
    border: 1px solid #ccc;
    padding: 8px;
  }

  th {
    background-color: #f0f0f0;
    text-align: left;
  }
`;

const DetailTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 16px;

  th, td {
    border: 1px solid #ccc;
    padding: 8px;
  }

  th {
    background-color: #f0f0f0;
  }
`;

// メインコンポーネント
const FinancialForecast: React.FC<FinancialForecastProps> = ({
  documentNumber,
  divisionCode,
  divisionName,
  forecastDate,
  accountingPeriodMonth,
  accountingPeriodStartDate,
  accountingPeriodEndDate,
  receivingDate,
  collectingMethod,
  amountOfSales,
  amountExcludingTax,
  consumptionTax,
  discountAmount,
  depositAmount,
  annualAmountOfDeposit,
  totalAmountOfDeposit,
  reserveGroupCode,
  effectiveDate,
  details,
}) => {
  return (
    <Container>
      <Title>予測資金収支表示</Title>
      <Table>
        <tbody>
          <tr>
            <th>資産番号</th>
            <td>{documentNumber}</td>
            <th>節</th>
            <td>{divisionCode} {divisionName}</td>
            <th>予測用</th>
          </tr>
          <tr>
            <th>取得年月</th>
            <td>{forecastDate}</td>
            <th>年度</th>
            <td>{accountingPeriodMonth}年度</td>
            <th>部門</th>
            <td>収水部門</td>
          </tr>
          <tr>
            <th>取得数量</th>
            <td>1</td>
            <th>耐用年数</th>
            <td>1</td>
            <th>契約方法</th>
            <td>{collectingMethod}</td>
          </tr>
          <tr>
            <th>取得金額</th>
            <td>{amountOfSales}</td>
            <th>償却方法</th>
            <td>定額法</td>
            <th rowSpan={2}>減損グループ</th>
            <th rowSpan={2}>期間</th>
          </tr>
          <tr>
            <th>残存価額</th>
            <td>0</td>
            <th>償却率</th>
            <td>1</td>
          </tr>
          <tr>
            <th>年間償却額</th>
            <td>{annualAmountOfDeposit}</td>
            <th>月数</th>
            <td></td>
            <td>{reserveGroupCode}</td>
            <td>{accountingPeriodStartDate} 〜 {accountingPeriodEndDate}</td>
          </tr>
          <tr>
            <th>償却開始年月</th>
            <td>{receivingDate}</td>
            <th></th>
            <td></td>
            <th></th>
            <td></td>
          </tr>
        </tbody>
      </Table>
      <DetailTable>
        <thead>
          <tr>
            <th>明細コード</th>
            <th>明細名称</th>
            <th>仕様区分</th>
            <th>明細金額</th>
          </tr>
        </thead>
        <tbody>
          {details.map((detail, index) => (
            <tr key={index}>
              <td>{detail.detailCode}</td>
              <td>{detail.itemName}</td>
              <td>{detail.specification}</td>
              <td>{detail.unitPrice}</td>
            </tr>
          ))}
        </tbody>
      </DetailTable>
    </Container>
  );
};

// サンプルデータ
const sampleData: FinancialForecastProps = {
  documentNumber: '8000300',
  divisionCode: '001',
  divisionName: '導送配水管',
  forecastDate: '0510',
  accountingPeriodMonth: 18,
  accountingPeriodStartDate: '28年度',
  accountingPeriodEndDate: '',
  receivingDate: '040',
  collectingMethod: '定額法',
  amountOfSales: 5000,
  amountExcludingTax: 0,
  consumptionTax: 0,
  discountAmount: 0,
  depositAmount: 5000,
  annualAmountOfDeposit: 0,
  totalAmountOfDeposit: 0,
  reserveGroupCode: '01',
  effectiveDate: '自己財源',
  details: [
    {
      detailCode: '01',
      itemName: '自己財源',
      specification: '導送配水管',
      unitPrice: 5000000,
    },
  ],
};

// 使用例
const App: React.FC = () => {
  return (
    <div>
      <h1>Financial Forecast Example</h1>
      <FinancialForecast {...sampleData} />
    </div>
  );
};

export default App;