// RepairOrderComponent.tsx
import React from 'react';
import styled from 'styled-components';

// 型定義
interface RepairOrder {
  repairNo: string;
  process: number;
  branch: number;
  orderDate: string;
  car: {
    maker: string;
    plateNumber: string;
  };
  schedule: {
    start: string;
    end: string;
    delivery: string;
    allocate: string;
    total: number;
  };
  note: string;
}

interface RepairOrderComponentProps {
  repairOrder: RepairOrder;
}

// スタイル定義
const Container = styled.div`
  background-color: #f0f0f0;
  padding: 16px;
  margin-bottom: 16px;
`;

const Row = styled.div`
  display: flex;
  margin-bottom: 8px;
`;

const Label = styled.div`
  width: 100px;
  font-weight: bold;
`;

const Value = styled.div`
  flex: 1;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 16px;
`;

const TableHeader = styled.th`
  border: 1px solid #ccc;
  padding: 4px;
  text-align: center;
`;

const TableData = styled.td`
  border: 1px solid #ccc;
  padding: 4px;
`;

// コンポーネント実装
const RepairOrderComponent: React.FC<RepairOrderComponentProps> = ({ repairOrder }) => {
  return (
    <Container>
      <h2>修理番号: {repairOrder.repairNo}</h2>
      <Row>
        <Label>進捗:</Label>
        <Value>{repairOrder.process}</Value>
      </Row>
      <Row>
        <Label>選択区分:</Label>
        <Value>{repairOrder.branch}</Value>
      </Row>
      <Row>
        <Label>修正日:</Label>
        <Value>{repairOrder.orderDate}</Value>
      </Row>
      <Row>
        <Label>車名(機番):</Label>
        <Value>
          {repairOrder.car.maker}_{repairOrder.car.plateNumber}
        </Value>
      </Row>
      <h3>予算科目別明細</h3>
      <Table>
        <thead>
          <tr>
            <TableHeader>前</TableHeader>
            <TableHeader>細前</TableHeader>
            <TableHeader>明細</TableHeader>
            <TableHeader>予算所属</TableHeader>
            <TableHeader>金額</TableHeader>
          </tr>
        </thead>
        <tbody>
          <tr>
            <TableData>{repairOrder.schedule.start}</TableData>
            <TableData>{repairOrder.schedule.end}</TableData>
            <TableData>{repairOrder.schedule.delivery}</TableData>
            <TableData>{repairOrder.schedule.allocate}</TableData>
            <TableData>{repairOrder.schedule.total}</TableData>
          </tr>
        </tbody>
      </Table>
      <Row>
        <Label>相手先名称:</Label>
        <Value>{repairOrder.note}</Value>
      </Row>
    </Container>
  );
};

// サンプルデータ
const sampleRepairOrder: RepairOrder = {
  repairNo: '修29年7月06日',
  process: 6,
  branch: 1,
  orderDate: '平成29年7月28日',
  car: {
    maker: '新規出庫入力_移動平均',
    plateNumber: '',
  },
  schedule: {
    start: '前',
    end: '細前',
    delivery: '明細',
    allocate: '予算所属',
    total: 888888,
  },
  note: '',
};

// 使用例
const RepairOrderExample: React.FC = () => {
  return (
    <div>
      <h1>修理注文書</h1>
      <RepairOrderComponent repairOrder={sampleRepairOrder} />
    </div>
  );
};

export default RepairOrderExample;