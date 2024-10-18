import React from 'react';
import styled from '@emotion/styled';

// 型定義
type PurchaseInputSystemProps = {
  companyCode: string;
  currentYearMonth: string;
  projectCode: string;
  taxes: {
    code: string;
    name: string;
    rate: number;
    taxAmount: number;
    price: number;
    consumptionTax: number;
    total: number;
  }[];
};

// スタイリング
const Container = styled.div`
  padding: 16px;
  @media (max-width: 600px) {
    padding: 8px;
  }
`;

const Row = styled.div`
  display: flex;
  margin-bottom: 8px;
`;

const Label = styled.div`
  width: 100px;
  @media (max-width: 600px) {
    width: 80px;
  }
`;

const Value = styled.div`
  flex: 1;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  th, td {
    border: 1px solid #ccc;
    padding: 4px;
  }
`;

const TaxRow = styled.tr`
  &:nth-of-type(odd) {
    background-color: #f7f7f7;
  }
`;

const ErrorText = styled.div`
  color: red;
`;

// メインコンポーネント
const PurchaseInputSystem: React.FC<PurchaseInputSystemProps> = ({
  companyCode,
  currentYearMonth,
  projectCode,
  taxes,
}) => {
  // 空チェック
  const isEmpty = (value: string) => {
    return value.trim() === '';
  };

  return (
    <Container>
      <Row>
        <Label>会社コード</Label>
        <Value>{isEmpty(companyCode) ? <ErrorText>未入力</ErrorText> : companyCode}</Value>
      </Row>
      <Row>
        <Label>予算年月</Label>
        <Value>{isEmpty(currentYearMonth) ? <ErrorText>未入力</ErrorText> : currentYearMonth}</Value>
      </Row>
      <Row>
        <Label>予算科目</Label>
        <Value>{isEmpty(projectCode) ? <ErrorText>未入力</ErrorText> : projectCode}</Value>
      </Row>

      <h3>税表</h3>
      <Table>
        <thead>
          <tr>
            <th>予算科目コード</th>
            <th>予算科目名称</th>
            <th>税率</th>
            <th>収入区分</th>
            <th>税抜額</th>
            <th>消費税額</th>
            <th>税込額</th>
          </tr>
        </thead>
        <tbody>
          {taxes.map((tax, index) => (
            <TaxRow key={index}>
              <td>{tax.code}</td>
              <td>{tax.name}</td>
              <td>{tax.rate}%</td>
              <td>{tax.taxAmount > 0 ? '課税' : '非課税'}</td>
              <td>{tax.price.toLocaleString()}</td>
              <td>{tax.consumptionTax.toLocaleString()}</td>
              <td>{tax.total.toLocaleString()}</td>
            </TaxRow>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};



// 使用例
const SampleData: PurchaseInputSystemProps = {
  companyCode: '00000000',
  currentYearMonth: '2022年11月',
  projectCode: 'C001',
  taxes: [
    {
      code: '0020101080001001',
      name: '汚・旅費',
      rate: 10,
      taxAmount: 1000,
      price: 50000,
      consumptionTax: 5000,
      total: 55000,
    },
    {
      code: '0020101100011001',
      name: '汚・被服費',
      rate: 10,
      taxAmount: 1000,
      price: 195454,
      consumptionTax: 195454,
      total: 2150000,
    },
    {
      code: '0020101200021001', 
      name: '汚・備消品費',
      rate: 10,
      taxAmount: 1000,
      price: 500000,
      consumptionTax: 50000,
      total: 550000,
    },
  ],
};

const App: React.FC = () => {
  return (
    <div>
      <h1>仕入入力システム</h1>
      <PurchaseInputSystem {...SampleData} />
    </div>
  );
};

export default SampleData;