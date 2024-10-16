import React from 'react';
import styled from 'styled-components';

// 型定義
type AccessVisitViewProps = {
  startDate: string;
  endDate: string;
  processNumber: string;
  processCode: string;
  destinationNumber: string;
  destinationName: string;
  processLocationCategory: string;
  data: Array<{
    date: string;
    time: string;
    process: string;
    destination: string;
    destinationName: string;
    processLocationCategory: string;
  }>;
};

// スタイリング
const Container = styled.div`
  font-family: Arial, sans-serif;
  @media (max-width: 600px) {
    font-size: 14px;
  }
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

const Label = styled.span`
  font-weight: bold;
  margin-right: 5px;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  th, td {
    border: 1px solid #ddd;
    padding: 8px;
    text-align: left;
  }
  th {
    background-color: #f2f2f2;
  }
`;

// メインコンポーネント
const AccessVisitView: React.FC<AccessVisitViewProps> = ({
  startDate,
  endDate,
  processNumber,
  processCode,
  destinationNumber,
  destinationName,
  processLocationCategory,
  data,
}) => {
  return (
    <Container>
      <Header>
        <div>
          <Label>処理日</Label>
          {startDate} 〜 {endDate}
        </div>
        <div>
          <Label>所属</Label>
          {processNumber}
        </div>
        <div>
          <Label>社員</Label>
          {processCode}
        </div>
        <div>
          <Label>職員</Label>
          {destinationNumber}
        </div>
        <div>
          <Label>勤務先</Label>
          {destinationName}
        </div>
        <div>
          <Label>処理画面</Label>
          {processLocationCategory}
        </div>
      </Header>
      
      {/* テーブル */}
      <Table>
        <thead>
          <tr>
            <th>処理日</th>
            <th>年度</th>
            <th>所属</th>
            <th>社員</th>
            <th>職員</th>
            <th>処理画面</th>
            <th>処理</th>
          </tr>
        </thead>
        <tbody>
          {data.length > 0 ? (
            data.map((row, index) => (
              <tr key={index}>
                <td>{row.date}</td>
                <td>{row.time}</td>
                <td>{row.process}</td>
                <td>{row.destination}</td>
                <td>{row.destinationName}</td>
                <td>{row.processLocationCategory}</td>
                <td>LOGOUT</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={7}>データがありません</td>
            </tr>
          )}
        </tbody>
      </Table>
    </Container>
  );
};

export default AccessVisitView;

// 使用例
const sampleData = [
  {
    date: 'H29.08.06',
    time: '11:10:39',
    process: '総務課',
    destination: '予算・会計担当',
    destinationName: 'ぎょうせい太郎',
    processLocationCategory: 'LOGOUT',
  },
  // ...
];

const UsageExample = () => {
  return (
    <AccessVisitView
      startDate="H29.08.06"
      endDate="H29.09.05"  
      processNumber="9999999"
      processCode="999"
      destinationNumber="99999"
      destinationName="ぎょうせい太郎"
      processLocationCategory="LOGOUT"
      data={sampleData}
    />
  );  
};