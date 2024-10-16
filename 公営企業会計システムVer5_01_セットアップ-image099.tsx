import React from 'react';
import styled from 'styled-components';

// 資金計画書のプロパティ型定義
type CapitalPlanProps = {
  year: number;
  month: number;
  companyName: string;
  postalCode: string;
  address: string;
  collateralAmount: number;
  collateralName: string;
  projectArea: number;
  goldPricePerTsubo: number;
  financeAmount: number;
  selfFund: number;
  repaymentPeriod: number;
  repaymentMethod: string;
  interestRate: number;
}

// スタイル定義
const Container = styled.div`
  width: 100%;
  padding: 20px;
  box-sizing: border-box;
  @media screen and (max-width: 600px) {
    padding: 10px;
  }
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  th, td {
    border: 1px solid #ccc;
    padding: 8px;
    text-align: left;
  }
  th {
    background-color: #f2f2f2;
  }
`;

const ButtonContainer = styled.div`
  margin-top: 20px;
  text-align: center;
  button {
    margin: 0 10px;
  }
`;

// 資金計画書コンポーネント
const CapitalPlan: React.FC<CapitalPlanProps> = ({
  year,
  month, 
  companyName,
  postalCode,
  address,
  collateralAmount,
  collateralName,
  projectArea,
  goldPricePerTsubo,
  financeAmount,
  selfFund,
  repaymentPeriod,
  repaymentMethod,
  interestRate
}) => {
  // 項目の入力値チェック
  const isValid = (
    year > 0 && 
    month > 0 && month <= 12 &&
    companyName !== '' &&
    postalCode !== '' &&
    address !== '' &&
    collateralAmount >= 0 && 
    collateralName !== '' &&
    projectArea >= 0 &&
    goldPricePerTsubo >= 0 &&
    financeAmount >= 0 &&
    selfFund >= 0 &&
    repaymentPeriod > 0 &&
    repaymentMethod !== '' &&
    interestRate >= 0
  );

  return (
    <Container>
      <h2>資金計画書</h2>
      <Table>
        <tbody>
          <tr>
            <th>会計年度</th>
            <td>{year > 0 ? `${year}年` : '-'}</td>
            <th>月度</th>
            <td>{month > 0 && month <= 12 ? `${month}月` : '-'}</td>
          </tr>
          <tr>
            <th>集計番号</th>
            <td>210</td>
            <th>項目名称</th>
            <td>企業値</td>
          </tr>
          <tr>
            <th>項目区分</th>
            <td>2</td>
            <th>金額<span style={{fontSize: '0.8em'}}>(千円)</span></th>
            <td>{collateralAmount >= 0 ? collateralAmount.toLocaleString() : '-'}</td>
          </tr>
          <tr>
            <th>摘要</th>
            <td colSpan={3}>{collateralName}</td>
          </tr>
          <tr>
            <th>対象面積</th>
            <td>{projectArea >= 0 ? projectArea : '-'}</td> 
            <th>金額/坪</th>
            <td>{goldPricePerTsubo >= 0 ? goldPricePerTsubo.toLocaleString() : '-'}</td>
          </tr>
        </tbody>
      </Table>
      
      <Table>
        <tbody>
          <tr>
            <th>集計先番号</th>
            <td>100</td>
          </tr>
          <tr>
            <th>借入先</th>
            <td>金庫</td>
          </tr>
          <tr>
            <th>借入金</th>
            <td>{financeAmount >= 0 ? financeAmount.toLocaleString() : '-'}</td>
          </tr>
          <tr>
            <th>自己資金</th>
            <td>{selfFund >= 0 ? selfFund.toLocaleString() : '-'}</td>
          </tr>
          <tr>
            <th>融資期間</th>
            <td>{repaymentPeriod > 0 ? `${repaymentPeriod}年` : '-'}</td>
          </tr>
          <tr>
            <th>返済方法</th>
            <td>{repaymentMethod}</td>
          </tr>
          <tr>
            <th>金利</th>
            <td>{interestRate >= 0 ? `${interestRate.toFixed(2)}%` : '-'}</td>
          </tr>
        </tbody>        
      </Table>

      <ButtonContainer>
        <button disabled={!isValid}>前データ</button>
        <button disabled={!isValid}>次データ</button>
        <button disabled={!isValid}>ＯＫ</button>
        <button>クリア</button>
        <button disabled={!isValid}>終了</button>
      </ButtonContainer>
    </Container>
  );
};

// サンプルデータを使用したコンポーネントの表示例
const App: React.FC = () => {
  const sampleData: CapitalPlanProps = {
    year: 2029,
    month: 9,
    companyName: '行政市水道事業会計',
    postalCode: '532-8510',
    address: '大阪市淀川区西中島5丁目7番27号102',
    collateralAmount: 0,
    collateralName: '正薬値',
    projectArea: 2,
    goldPricePerTsubo: 2,
    financeAmount: 200000,
    selfFund: 100000,
    repaymentPeriod: 10,
    repaymentMethod: '元金均等',
    interestRate: 1.2
  };

  return <CapitalPlan {...sampleData} />;
};

export default App;