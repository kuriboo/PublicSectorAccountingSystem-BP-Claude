import React from 'react';
import styled from 'styled-components';

// 型定義
type LegalAffairsReportProps = {
  date: string;
  department: string;
  summary: string;
  disciplinaryAction: string;
  punishment: string;
  executionDate: string;
  driverCode: string;
  driverName: string;
  carrierCode: string;
  carrierName: string;
  violations: string;
  reportYear: string;
  disposalDetails: string;
  licenseNumber: string;
  expirationDate: string;
  address: string;
  identificationNumber: string;
  dateOfBirth: string;
};

// スタイリング
const Container = styled.div`
  font-family: Arial, sans-serif;
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  box-sizing: border-box;

  @media (max-width: 600px) {
    padding: 10px;
  }
`;

const Title = styled.h2`
  text-align: center;
  margin-bottom: 20px;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 30px;

  th, td {
    border: 1px solid #ccc;
    padding: 8px;
    text-align: left;
  }

  th {
    background-color: #f0f0f0;
  }

  @media (max-width: 600px) {
    font-size: 14px;
  }
`;

const Signature = styled.div`
  text-align: right;
`;

// メインコンポーネント
const LegalAffairsReport: React.FC<LegalAffairsReportProps> = ({
  date,
  department,
  summary,
  disciplinaryAction,
  punishment,
  executionDate,
  driverCode,
  driverName,
  carrierCode,
  carrierName,
  violations,
  reportYear,
  disposalDetails,
  licenseNumber,
  expirationDate,
  address,
  identificationNumber,
  dateOfBirth,
}) => {
  return (
    <Container>
      <Title>法改正対応耐用年数更正</Title>
      <Table>
        <tbody>
          <tr>
            <th>更正年月日</th>
            <td>{date}</td>
          </tr>
          <tr>
            <th>部</th>
            <td>{department}</td>
          </tr>
          <tr>
            <th>課</th>
            <td>{summary}</td>
          </tr>
          <tr>
            <th>明細</th>
            <td>{disciplinaryAction}</td>
          </tr>
          <tr>
            <th>科目検索</th>
            <td>{punishment}</td>
          </tr>
          <tr>
            <th>資産番号</th>
            <td>{executionDate}</td>
          </tr>
          <tr>
            <th>資産名称</th>
            <td>{driverCode}</td>
          </tr>
          <tr>
            <th>所在地</th>
            <td>{driverName}</td>
          </tr>
          <tr>
            <th>摘要</th>
            <td>{carrierCode}</td>
          </tr>
        </tbody>
      </Table>

      <Table>
        <tbody>
          <tr>
            <th>耐用年数</th>
            <td>{carrierName}</td>
            <th>償却方法</th>
            <td>{violations}</td>
          </tr>
          <tr>
            <th>残存率</th>
            <td>{reportYear}</td>
            <th>取得年月日</th>
            <td>{disposalDetails}</td>  
          </tr>
          <tr>
            <th>取得方法</th>
            <td>{licenseNumber}</td>
            <th>明細区分</th>
            <td>{expirationDate}</td>
          </tr>
        </tbody>  
      </Table>
      
      <Table>
        <tbody>
          <tr>
            <th>訂正前</th>
            <th>訂正後</th>  
          </tr>
          <tr>  
            <td>{address}</td>
            <td>{address}</td>
          </tr>
          <tr>
            <td>{identificationNumber}</td>  
            <td>{identificationNumber}</td>
          </tr>
          <tr>
            <td>{dateOfBirth}</td>
            <td>{dateOfBirth}</td>
          </tr>
          <tr>  
            <td>{licenseNumber}</td>
            <td>{licenseNumber}</td>
          </tr>
          <tr>
            <td>{disposalDetails}</td> 
            <td>{disposalDetails}</td>
          </tr>
        </tbody>
      </Table>

      <Signature>担当者印</Signature>  
    </Container>
  );
};

// サンプルデータ
const sampleData: LegalAffairsReportProps = {
  date: '平成29年09月14日',
  department: '0601',
  summary: '製水器',
  disciplinaryAction: '0001',
  punishment: '7468000',
  executionDate: '0001', 
  driverCode: '雨用年数更正',
  driverName: '行政県行政市行政区7468000番地',
  carrierCode: '所内一円',
  carrierName: '008',
  violations: '006',
  reportYear: '12.50',
  disposalDetails: '12.50',
  licenseNumber: '11',
  expirationDate: '11',
  address: '205,165',
  identificationNumber: '205,165',
  dateOfBirth: '51,281',
};

// 使用例
const App: React.FC = () => {
  return (
    <div>
      <h1>法改正対応耐用年数更正レポート</h1>
      <LegalAffairsReport {...sampleData} />
    </div>
  );  
};

export default App;