import React from 'react';
import styled from '@emotion/styled';

type PriceInfo = {
  label: string;
  value: number;
};

type TaxCalculatorProps = {
  price: number;
  taxRate: number;
  priceInfoList: PriceInfo[];
};

const TaxCalculator: React.FC<TaxCalculatorProps> = ({ price, taxRate, priceInfoList }) => {
  // 税抜金額の計算
  const calcWithoutTax = (price: number) => {
    return Math.round(price / (1 + taxRate / 100));
  };

  // 消費税額の計算
  const calcTax = (price: number) => {
    return price - calcWithoutTax(price);
  };

  return (
    <Container>
      <Title>予算戦術報</Title>
      <PriceInfoTable>
        <thead>
          <tr>
            <th>予算科目</th>
            <th>予算節</th>
            <th>予算細節</th>
            <th>予算明細</th>
            <th>予定額</th>
          </tr>
        </thead>
        <tbody>
          {priceInfoList.map((info, index) => (
            <tr key={index}>
              <td>{info.label}</td>
              <td>総係・備消耗品費</td>
              <td>総係・備品費</td>
              <td>総係・備品費</td>
              <td>{info.value.toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </PriceInfoTable>
      
      <TaxRateInput type="number" value={taxRate} readOnly /> %

      <CalcResultTable>
        <tbody>
          <tr>
            <th>予算現額</th>
            <td>{price.toLocaleString()}</td>
          </tr>
          <tr>
            <th>負担累計</th>
            <td>0</td>
          </tr>
          <tr>
            <th>負担残額</th>
            <td>{price.toLocaleString()}</td>
          </tr>
          <tr>
            <th>予定累計</th>
            <td>10,000</td>
          </tr>
          <tr>
            <th>予定残額</th>
            <td>{(price - 10000).toLocaleString()}</td>
          </tr>
        </tbody>
      </CalcResultTable>

      <DetailTable>
        <thead>
          <tr>
            <th>単価</th>
            <th>規格</th>
            <th>数量</th>
            <th>金額</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1.000</td>
            <td></td>
            <td>10,000.00</td>
            <td>10,000</td>
          </tr>
        </tbody>
      </DetailTable>

    </Container>
  );
};

// サンプルデータ
const sampleData = {
  price: 1237000,
  taxRate: 10,
  priceInfoList: [
    { label: '予算科目', value: 002010411 },
    { label: '予算節', value: 0002 },
    { label: '予算細節', value: 0010 },
    { label: '予算明細', value: 0010 },
  ],
};

// コンポーネントの使用例
const TaxCalculatorExample: React.FC = () => {
  return (
    <TaxCalculator
      price={sampleData.price}
      taxRate={sampleData.taxRate}
      priceInfoList={sampleData.priceInfoList}
    />
  );
};

// styled-components
const Container = styled.div`
  font-family: sans-serif;
  padding: 20px;
`;

const Title = styled.h2`
  text-align: center;
  margin-bottom: 20px;
`;

const PriceInfoTable = styled.table`
  width: 100%;
  margin-bottom: 20px;
  border-collapse: collapse;

  th,
  td {
    padding: 5px;
    text-align: center;
    border: 1px solid #ccc;
  }
`;

const TaxRateInput = styled.input`
  margin-bottom: 10px;
  width: 60px;
`;

const CalcResultTable = styled.table`
  width: 100%;
  margin-bottom: 20px;
  border-collapse: collapse;

  th,
  td {
    padding: 5px;
    text-align: left;
    border: 1px solid #ccc;
  }

  th {
    background-color: #f0f0f0;
    width: 100px;
  }
`;

const DetailTable = styled.table`
  width: 100%;
  border-collapse: collapse;

  th,
  td {
    padding: 5px;
    text-align: right;
    border: 1px solid #ccc;
  }
`;

export default TaxCalculator;