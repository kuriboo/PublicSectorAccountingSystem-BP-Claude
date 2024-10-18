import React from 'react';
import styled from 'styled-components';

// 部門売上計算用の型定義
type DepartmentSalesType = {
  department: string;
  division: string;
  section: string;
  person: string;
  amount: number;
  expected: number;
};

// コンポーネントのProps型定義
type Props = {
  departmentSales: DepartmentSalesType[];
  onClickOK?: () => void;
  onClickCancel?: () => void;
  onClickClose?: () => void;
};

// スタイル定義
const Container = styled.div`
  background-color: #f0f0f0;
  padding: 10px;
  width: 100%;
  box-sizing: border-box;
  font-size: 14px;

  @media screen and (max-width: 600px) {
    font-size: 12px;
  }
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;

const HeaderText = styled.div`
  font-weight: bold;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 10px;
`;

const TableHeader = styled.th`
  background-color: #d3d3d3;
  border: 1px solid #a9a9a9;
  padding: 5px;
  text-align: center;
`;

const TableCell = styled.td`
  border: 1px solid #a9a9a9;
  padding: 5px;
  text-align: right;
`;

const TotalRow = styled.tr`
  background-color: #add8e6;
  font-weight: bold;
`;

const ButtonContainer = styled.div`
  text-align: center;
`;

const Button = styled.button`
  margin: 0 5px;
`;

/**
 * 予算売上計算を表示するコンポーネント
 */
const DepartmentSales: React.FC<Props> = ({
  departmentSales,
  onClickOK,
  onClickCancel,
  onClickClose,
}) => {
  // 予算売上合計の計算
  const totalExpected = departmentSales.reduce((sum, sales) => sum + sales.expected, 0);

  return (
    <Container>
      <Header>
        <HeaderText>予算売上計算</HeaderText>
        <div>
          <span>総務課 予算・会計担当 ぎょうせい太郎</span>
          <span>平成29年09月04日</span>
        </div>
      </Header>
      <Table>
        <thead>
          <tr>
            <TableHeader>部</TableHeader>
            <TableHeader>部門</TableHeader>
            <TableHeader>課</TableHeader>
            <TableHeader>予算所属</TableHeader>
            <TableHeader>金額</TableHeader>
            <TableHeader>予算残額</TableHeader>
          </tr>
        </thead>
        <tbody>
          {departmentSales.map((sales, index) => (
            <tr key={index}>
              <TableCell>{sales.department}</TableCell>
              <TableCell>{sales.division}</TableCell>
              <TableCell>{sales.section}</TableCell>
              <TableCell>{sales.person}</TableCell>
              <TableCell>{sales.amount.toLocaleString()}</TableCell>
              <TableCell>{sales.expected.toLocaleString()}</TableCell>
            </tr>
          ))}
          {departmentSales.length === 0 && (
            <tr>
              <TableCell colSpan={6}>データがありません。</TableCell>
            </tr>
          )}
          <TotalRow>
            <TableCell colSpan={5}>計</TableCell>
            <TableCell>{totalExpected.toLocaleString()}</TableCell>
          </TotalRow>
        </tbody>
      </Table>
      <ButtonContainer>
        <Button onClick={onClickOK}>OK</Button>
        <Button onClick={onClickCancel}>クリア</Button>
        <Button onClick={onClickClose}>終了</Button>
      </ButtonContainer>
    </Container>
  );
};

export default DepartmentSales;

// 使用例
const sampleData: DepartmentSalesType[] = [
  {
    department: '原争・委託料',
    division: '分析測定・機器託',
    section: '分析測定・機器託',
    person: '水道担当・ケー',
    amount: 300000,
    expected: 66766000,
  },
  {
    department: '原争・委託料',
    division: '施設管理業務委託',
    section: '施設管理業務委託',
    person: '総務課',
    amount: 30000,
    expected: -30000,
  },
];

const UsageExample: React.FC = () => {
  return (
    <DepartmentSales
      departmentSales={sampleData}
      onClickOK={() => console.log('OK clicked')}
      onClickCancel={() => console.log('Cancel clicked')}
      onClickClose={() => console.log('Close clicked')}
    />
  );
};