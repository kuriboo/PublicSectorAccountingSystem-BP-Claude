import React from 'react';
import styled from 'styled-components';

// 部門別予測管理明細表の型定義
type DepartmentForecastType = {
  department: string;
  code: string;
  current: {
    amount: number;
    count: number;
  };
  previous: {
    amount: number;
    count: number;
  };
  currentYear: string;
  previousYear: string;
};

// スタイル定義
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  font-family: Arial, sans-serif;
`;

const Title = styled.h2`
  margin-bottom: 20px;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;
`;

const TableHeader = styled.th`
  padding: 10px;
  text-align: center;
  border: 1px solid #ccc;
  background-color: #f0f0f0;
`;

const TableData = styled.td`
  padding: 10px;
  text-align: right;
  border: 1px solid #ccc;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const Button = styled.button`
  padding: 10px 20px;
  margin-left: 10px;
  font-size: 16px;
`;

// 部門別予測管理明細表コンポーネント
const DepartmentForecast: React.FC<{ data: DepartmentForecastType }> = ({ data }) => {
  // 値が入っていない場合のデフォルト値を設定
  const defaultData: DepartmentForecastType = {
    department: '',
    code: '',
    current: {
      amount: 0,
      count: 0,
    },
    previous: {
      amount: 0,
      count: 0,
    },
    currentYear: '',
    previousYear: '',
  };

  // データが存在しない場合はデフォルト値を使用
  const { department, code, current, previous, currentYear, previousYear } = data || defaultData;

  return (
    <Container>
      <Title>部門別予測管理明細表</Title>
      <Table>
        <thead>
          <tr>
            <TableHeader>部門</TableHeader>
            <TableHeader colSpan={2}>当期 {currentYear}</TableHeader>
            <TableHeader colSpan={2}>前期 {previousYear}</TableHeader>
          </tr>
          <tr>
            <TableHeader>部門指定</TableHeader>
            <TableHeader>管理名称</TableHeader>
            <TableHeader>金額</TableHeader>
            <TableHeader>管理名称</TableHeader>
            <TableHeader>金額</TableHeader>
          </tr>
        </thead>
        <tbody>
          <tr>
            <TableData>{department}</TableData>
            <TableData>{code}</TableData>
            <TableData>{current.amount.toLocaleString()}</TableData>
            <TableData>{code}</TableData>
            <TableData>{previous.amount.toLocaleString()}</TableData>
          </tr>
          <tr>
            <TableData></TableData>
            <TableData>取得年度</TableData>
            <TableData>{currentYear}</TableData> 
            <TableData>平成29年度</TableData>
            <TableData>{previousYear}</TableData>
          </tr>
        </tbody>
      </Table>
      <ButtonContainer>
        <Button>OK</Button>
        <Button>クリア</Button>
        <Button>終了</Button>
      </ButtonContainer>
    </Container>
  );
};

// サンプルデータ
const sampleData: DepartmentForecastType = {
  department: '部門001',
  code: '001',
  current: {
    amount: 1000000,
    count: 100,
  },
  previous: {
    amount: 900000,
    count: 90,
  },
  currentYear: '平成30年度',
  previousYear: '平成29年度',
};

// 使用例
const App: React.FC = () => {
  return (
    <div>
      <h1>部門別予測管理明細表</h1>
      <DepartmentForecast data={sampleData} />
    </div>
  );
};

export default App;