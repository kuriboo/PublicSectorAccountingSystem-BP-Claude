import React from 'react';
import styled from '@emotion/styled';

type RepairHistory = {
  date: string;
  content: string;
  staff: string;
  month: string;
  day: string;
};

type MaintenanceInfoProps = {
  registrationNumber: string;
  productName: string;
  productCategory: string;
  serialNumber: string;
  department: string;
  manager: string;
  location: string;
  purchaseDate: string;
  endOfWarranty: string;
  accountingDate: string;
  depreciationPeriod: number;
  acquisitionAmount: number;
  monthlyDepreciation: number;
  accumulatedDepreciation: number;
  currentBookValue: number;
  repairHistory: RepairHistory[];
};

const Container = styled.div`
  font-family: Arial, sans-serif;
  padding: 20px;
  background-color: #f0f0f0;
  border-radius: 5px;
`;

const Title = styled.h2`
  margin-bottom: 20px;
`;

const InfoTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;

  th, td {
    padding: 10px;
    text-align: left;
    border-bottom: 1px solid #ccc;
  }

  th {
    background-color: #f5f5f5;
    font-weight: bold;
  }
`;

const HistoryTable = styled.table`
  width: 100%;
  border-collapse: collapse;

  th, td {
    padding: 10px;
    text-align: left;
    border-bottom: 1px solid #ccc;
  }

  th {
    background-color: #f5f5f5;
    font-weight: bold;
  }
`;

const MaintenanceInfo: React.FC<MaintenanceInfoProps> = ({
  registrationNumber,
  productName,
  productCategory,
  serialNumber,
  department,
  manager,
  location,
  purchaseDate,
  endOfWarranty,
  accountingDate,
  depreciationPeriod,
  acquisitionAmount,
  monthlyDepreciation,
  accumulatedDepreciation,
  currentBookValue,
  repairHistory,
}) => {
  return (
    <Container>
      <Title>修繕履歴管理</Title>
      <InfoTable>
        <tbody>
          <tr>
            <th>資産番号</th>
            <td>{registrationNumber}</td>
          </tr>
          <tr>
            <th>資産名称</th>
            <td>{productName}</td>
          </tr>
          <tr>
            <th>所在地</th>
            <td>{location}</td>
          </tr>
          <tr>
            <th>部門</th>
            <td>{department}</td>
          </tr>
          <tr>
            <th>所属</th>
            <td>{manager}</td>
          </tr>
          <tr>
            <th>地区</th>
            <td>{location}</td>
          </tr>
          <tr>
            <th>取得年月日</th>
            <td>{purchaseDate}</td>
          </tr>
          <tr>
            <th>償却方法</th>
            <td>定額法</td>
          </tr>
          <tr>
            <th>明細区分</th>
            <td>構造</td>
          </tr>
          <tr>
            <th>取得価額</th>
            <td>{acquisitionAmount}</td>
          </tr>
          <tr>
            <th>償還原価</th>
            <td>{currentBookValue}</td>
          </tr>
          <tr>
            <th>耐用年数</th>
            <td>{depreciationPeriod}</td>
          </tr>
          <tr>
            <th>累計償却額</th>
            <td>{accumulatedDepreciation}</td>
          </tr>
        </tbody>
      </InfoTable>
      
      <HistoryTable>
        <thead>
          <tr>
            <th>修理区分</th>
            <th>着手年月日</th>
            <th>完了年月日</th>
            <th>月分手当等</th>
            <th>修繕内容</th>
          </tr>
        </thead>
        <tbody>
          {repairHistory.map((history, index) => (
            <tr key={index}>
              <td>{history.content}</td>
              <td>{history.month}/{history.day}</td>
              <td>{history.month}/{history.day}</td>
              <td>{history.content}</td>
              <td>{history.staff}</td>
            </tr>
          ))}
        </tbody>
      </HistoryTable>
    </Container>
  );
};

// サンプルデータを使用した表示用コンポーネント
const App: React.FC = () => {
  const sampleData: MaintenanceInfoProps = {
    registrationNumber: '70012',
    productName: 'ネットフェンス新設工事',
    productCategory: '取得行政財市行政区70012番地',
    serialNumber: '0001',
    department: '管理',
    manager: '上水道',
    location: '営業課',
    purchaseDate: '平成09年09月30日',
    endOfWarranty: '平成29年09月29日',
    accountingDate: '平成29年09月12日',
    depreciationPeriod: 10,
    acquisitionAmount: 192776,
    monthlyDepreciation: 1614.6,
    accumulatedDepreciation: 101460,
    currentBookValue: 100000,
    repairHistory: [
      {
        date: '2022/09/01',
        content: 'その他(構築物)',
        staff: '0001',
        month: '09',
        day: '01',
      },
      {
        date: '2021/06/01',
        content: 'その他(構築物)',
        staff: '0001',
        month: '06',
        day: '01',
      },
    ],
  };

  return (
    <div>
      <MaintenanceInfo {...sampleData} />
    </div>
  );
};

export default App;