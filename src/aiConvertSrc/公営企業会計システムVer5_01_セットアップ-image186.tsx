import React from 'react';
import styled from 'styled-components';

type ConsumptionTaxSystemProps = {
  startDate: string;
  endDate: string;
  taxRateByPrefecture: number;
  localConsumptionTaxRate: number;
  consumptionTaxRounding: boolean;
  consumptionTaxRoundingDigits?: number;
  data: Array<{
    consumptionTaxCode: string;
    applicationStartDate: string;
    consumptionTaxRate: number;
    localConsumptionTaxRate: number;
    consumptionTaxRoundingAmount: number;
  }>;
};

const ConsumptionTaxSystem: React.FC<ConsumptionTaxSystemProps> = ({
  startDate,
  endDate,
  taxRateByPrefecture,
  localConsumptionTaxRate,
  consumptionTaxRounding,
  consumptionTaxRoundingDigits,
  data,
}) => {
  return (
    <Container>
      <TitleBar>
        <Title>消費税マスタ</Title>
      </TitleBar>
      <Form>
        <Row>
          <Label>消費税コード</Label>
          <Input type="text" />
        </Row>
        <Row>
          <Label>適用開始年月日</Label>
          <Input type="date" defaultValue={startDate} />
        </Row>
        <Row>
          <Label>消費税率及び地方消費税率</Label>
          <Input type="number" step="0.01" value={taxRateByPrefecture} />%
        </Row>
        <Row>
          <Label>地方消費税率</Label>
          <Input type="number" step="0.01" value={localConsumptionTaxRate} />%
        </Row>
        <Row>
          <Label>軽減税率</Label>
          <Checkbox type="checkbox" checked={consumptionTaxRounding} />
          軽減税率とする。
        </Row>
        <Row>
          <Label>軽減税率対象記号</Label>
          <Input type="text" disabled={!consumptionTaxRounding} />
        </Row>
      </Form>
      <Table>
        <thead>
          <tr>
            <TableHeader>消費税コード</TableHeader>
            <TableHeader>適用開始年月日</TableHeader>
            <TableHeader>消費税率及び地方消費税率</TableHeader>
            <TableHeader>地方消費税率</TableHeader>
            <TableHeader>軽減税率</TableHeader>
            <TableHeader>軽減税率対象記号</TableHeader>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <TableRow key={index}>
              <TableCell>{row.consumptionTaxCode}</TableCell>
              <TableCell>{row.applicationStartDate}</TableCell>
              <TableCell>{row.consumptionTaxRate.toFixed(2)}</TableCell>
              <TableCell>{row.localConsumptionTaxRate.toFixed(2)}</TableCell>
              <TableCell>{row.consumptionTaxRoundingAmount.toFixed(2)}</TableCell>
              <TableCell>{consumptionTaxRoundingDigits ?? ''}</TableCell>
            </TableRow>
          ))}
        </tbody>
      </Table>
      <ButtonGroup>
        <Button>OK</Button>
        <Button>クリア</Button>
        <Button>終了</Button>
      </ButtonGroup>
    </Container>
  );
};

// コンポーネントのスタイリング
const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 16px;
`;

const TitleBar = styled.div`
  background-color: #f0f0f0;
  padding: 8px;
`;

const Title = styled.h2`
  margin: 0;
`;

const Form = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const Label = styled.label`
  flex: 1;
`;

const Input = styled.input`
  flex: 2;
  padding: 4px;
`;

const Checkbox = styled.input`
  margin-right: 4px;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const TableHeader = styled.th`
  background-color: #f0f0f0;
  padding: 8px;
  text-align: left;
  border-bottom: 1px solid #ccc;
`;

const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f9f9f9;
  }
`;

const TableCell = styled.td`
  padding: 8px;
  border-bottom: 1px solid #ccc;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 8px;
`;

const Button = styled.button`
  padding: 8px 16px;
  background-color: #f0f0f0;
  border: none;
  cursor: pointer;
`;

// サンプルデータを使用してコンポーネントを表示
const SampleConsumptionTaxSystem: React.FC = () => {
  const sampleData = [
    {
      consumptionTaxCode: '08',
      applicationStartDate: '昭和63年04月01日',
      consumptionTaxRate: 3.0,
      localConsumptionTaxRate: 0.0,
      consumptionTaxRoundingAmount: 0.0,
    },
    // ... 他のサンプルデータを追加 ...
  ];

  return (
    <ConsumptionTaxSystem
      startDate="令和01年07月16日"
      endDate=""
      taxRateByPrefecture={0.0}
      localConsumptionTaxRate={0.0}
      consumptionTaxRounding={false}
      data={sampleData}
    />
  );
};

export default SampleConsumptionTaxSystem;