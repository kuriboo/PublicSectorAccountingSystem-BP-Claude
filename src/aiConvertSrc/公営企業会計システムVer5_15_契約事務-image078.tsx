import React from 'react';
import styled from 'styled-components';

// 従業員情報のプロパティ型定義
type EmployeeInfoProps = {
  name: string;
  department: string;
  number: string;
  address: string;
  phone: string;
  email: string;
  joinDate: string;
  representativeNumber: string;
  representativeName: string;
};

// 経費情報のプロパティ型定義
type ExpenseInfoProps = {
  transportation: number;
  accommodation: number;
  dailyAllowance: number;
  socialExpense: number;
  other: number;
  total: number;
};

// 申請情報コンポーネント
const ApplicationInfo: React.FC<{
  applicationNumber: string;
  applicantName: string;
  applicationDate: string;
  destination: string;
  purpose: string;
  departureDate: string;
  returnDate: string;
}> = ({ 
  applicationNumber,
  applicantName,
  applicationDate,
  destination,
  purpose,
  departureDate,
  returnDate
}) => {
  return (
    <Container>
      <Title>申請情報</Title>
      <InfoTable>
        <tbody>
          <tr>
            <th>申請番号</th>
            <td>{applicationNumber}</td>
            <th>業者名</th>
            <td>{applicantName}</td>
          </tr>
          <tr>
            <th>申請年月</th>
            <td>{applicationDate}</td>
            <th>地区</th>
            <td>{destination}</td>
          </tr>
          <tr>
            <th>目的</th>
            <td colSpan={3}>{purpose}</td>
          </tr>
          <tr>
            <th>出張期間</th>
            <td colSpan={3}>
              {departureDate} 〜 {returnDate}
            </td>
          </tr>
        </tbody>
      </InfoTable>
    </Container>
  );
};

// 申請者情報コンポーネント
const ApplicantInfo: React.FC<EmployeeInfoProps> = ({
  name,
  department,
  number,
  address,
  phone,
  email,
  joinDate,
  representativeNumber,
  representativeName,
}) => {
  return (
    <Container>
      <Title>申請者</Title>
      <InfoTable>
        <tbody>
          <tr>
            <th>氏名</th>
            <td>{name}</td>
            <th>所属</th>
            <td>{department}</td>
          </tr>
          <tr>
            <th>社員番号</th>
            <td>{number || '-'}</td>
            <th>住所</th>
            <td>{address}</td>
          </tr>
          <tr>
            <th>電話番号</th>
            <td>{phone}</td>
            <th>メールアドレス</th>
            <td>{email}</td>
          </tr>
          <tr>
            <th>入社年月日</th>
            <td>{joinDate}</td>
            <th>代表者役職</th>
            <td>{representativeNumber || '-'}</td>
          </tr>
          <tr>
            <th>代表者</th>
            <td colSpan={3}>{representativeName || '-'}</td>
          </tr>
        </tbody>
      </InfoTable>
    </Container>
  );
};

// 経費明細コンポーネント  
const ExpenseDetails: React.FC<ExpenseInfoProps> = ({
  transportation,
  accommodation,
  dailyAllowance,
  socialExpense, 
  other,
  total,
}) => {
  return (
    <Container>
      <Title>経費明細</Title>
      <InfoTable>
        <tbody>
          <tr>
            <th>交通費</th>
            <td>{transportation}</td>
            <th>宿泊費</th>
            <td>{accommodation}</td>
          </tr>
          <tr>
            <th>日当</th>
            <td>{dailyAllowance}</td>
            <th>交際費</th>
            <td>{socialExpense}</td>
          </tr>
          <tr>
            <th colSpan={2}>その他</th>
            <td colSpan={2}>{other}</td>
          </tr>
          <tr>
            <th colSpan={2}>合計</th>
            <td colSpan={2}>{total}</td>
          </tr>
        </tbody>
      </InfoTable>
    </Container>
  );
};

// スタイリング
const Container = styled.div`
  margin-bottom: 20px;
`;

const Title = styled.h3`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const InfoTable = styled.table`
  width: 100%;
  border-collapse: collapse;

  th,
  td {
    border: 1px solid #ccc;
    padding: 8px;
    text-align: left;
  }

  th {
    background-color: #f0f0f0;
    font-weight: bold;
    white-space: nowrap;
  }
`;

// サンプルデータ
const sampleApplicationData = {
  applicationNumber: '0000001-0003',
  applicantName: 'ぎょうせい太郎',
  applicationDate: '890-0821',
  destination: '市内',
  purpose: '行政県行政市行政区〇〇〇〇6番地1号',
  departureDate: '0120-100-008',
  returnDate: '0120-100-008', 
};

const sampleEmployeeData = {
  name: 'ぎょうせい太郎',
  department: '管理部',
  number: '890-0821',
  address: '行政県行政市行政区〇〇〇〇6番地1号',
  phone: '0120-100-008',
  email: 'test@gyosei.co.jp',
  joinDate: '0120-100-008',
  representativeNumber: '行政 太郎',
  representativeName: '',
};

const sampleExpenseData = {
  transportation: 800,
  accommodation: 0,
  dailyAllowance: 0,
  socialExpense: 0,
  other: 0,
  total: 0,
};

// 表示用コンポーネント
const App: React.FC = () => {
  return (
    <div>
      <h2>申請情報</h2>
      <ApplicationInfo {...sampleApplicationData} />
      <ApplicantInfo {...sampleEmployeeData} />
      <ExpenseDetails {...sampleExpenseData} />
    </div>
  );
};

export default App;