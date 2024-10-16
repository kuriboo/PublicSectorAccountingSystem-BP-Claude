import React from 'react';
import styled from '@emotion/styled';

type TaxDataType = {
  title: string;
  tax: number;
  share: number;
  total: number;
};

type AdjustmentDataType = {
  label: string;
  adjustment: number;
  collection: number;
  payment: number;
  taxCredit: number;
  balance: number;
};

type TaxAdjustmentSystemProps = {
  date: string;
  taxData: TaxDataType[];
  adjustmentData: AdjustmentDataType[];
};

const TaxAdjustmentSystem: React.FC<TaxAdjustmentSystemProps> = ({
  date,
  taxData,
  adjustmentData,
}) => {
  return (
    <Container>
      <Title>税区分集計額調整</Title>
      <DateRange>
        対象期間　令和06年04月01日　～　令和06年03月31日
      </DateRange>
      <AdjustmentType>
        <label>
          <input type="radio" name="adjustmentType" checked readOnly />
          集計値から調整
        </label>
        <label>
          <input type="radio" name="adjustmentType" />
          集計値以外から調整
        </label>
      </AdjustmentType>
      <AdjustmentTable>
        <thead>
          <tr>
            <th>科目検索</th>
            <th>予算前</th>
            <th>予算細節</th>
            <th>予算明細</th>
          </tr>
        </thead>
        <tbody>
          {taxData.map((data, index) => (
            <tr key={index}>
              <td>{data.title}</td>
              <td>{data.tax.toLocaleString()}管理当署</td>
              <td>{data.share.toLocaleString()}通勤手当</td>
              <td>{data.total.toLocaleString()}旅通勤手当</td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td>税区分</td>
            <td>課税</td>
            <td colSpan={2}>
              消費税及び地方消費税率　10　%
              <br />
              消費税率　7.8 %
              <br />
              控除割合　100　%
            </td>
          </tr>
        </tfoot>
      </AdjustmentTable>
      <AdjustmentDataTable>
        <thead>
          <tr>
            <th>調整項目</th>
            <th>集計額（税抜額）</th>
            <th>集計額（税額）</th>
            <th>調整額（税抜額）</th>
            <th>調整額（税額）</th>
            <th>合計額（税抜額）</th>
            <th>合計額（税額）</th>
          </tr>
        </thead>
        <tbody>
          {adjustmentData.map((data, index) => (
            <tr key={index}>
              <td>{data.label}</td>
              <td>{data.adjustment.toLocaleString()}</td>
              <td>{data.collection.toLocaleString()}</td>
              <td>{data.payment.toLocaleString()}</td>
              <td>{data.taxCredit.toLocaleString()}</td>
              <td>{data.balance.toLocaleString()}</td>
              <td>{data.balance.toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </AdjustmentDataTable>
    </Container>
  );
};

// Styled Components
const Container = styled.div`
  width: 100%;
  padding: 20px;
  box-sizing: border-box;
`;

const Title = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
`;

const DateRange = styled.p`
  margin-bottom: 10px;
`;

const AdjustmentType = styled.div`
  margin-bottom: 20px;

  label {
    margin-right: 10px;
  }
`;

const AdjustmentTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;

  th,
  td {
    padding: 8px;
    border: 1px solid #ccc;
  }

  th {
    background-color: #f0f0f0;
    text-align: left;
  }

  tfoot td {
    font-weight: bold;
  }
`;

const AdjustmentDataTable = styled.table`
  width: 100%;
  border-collapse: collapse;

  th,
  td {
    padding: 8px;
    border: 1px solid #ccc;
    text-align: right;
  }

  th {
    background-color: #f0f0f0;
  }
`;

// Sample usage
const TaxAdjustmentSystemExample: React.FC = () => {
  const date = '令和06年01月26日';
  const taxData = [
    { title: '予算前', tax: 20010102, share: 002, total: 1201 },
  ];
  const adjustmentData = [
    {
      label: '課税仕入',
      adjustment: 17273,
      collection: 1727,
      payment: -7000,
      taxCredit: -700,
      balance: 10273,
    },
    {
      label: '課税売上返還',
      adjustment: 0,
      collection: 0,
      payment: 7000,
      taxCredit: 700,
      balance: 7000,
    },
  ];

  return (
    <TaxAdjustmentSystem
      date={date}
      taxData={taxData}
      adjustmentData={adjustmentData}
    />
  );
};

export default TaxAdjustmentSystemExample;