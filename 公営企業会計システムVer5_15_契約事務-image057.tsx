import React from 'react';
import styled from '@emotion/styled';

// 単価明細コンポーネントのプロパティ型定義
type PriceDetailProps = {
  priceCode: string;
  priceName: string;
  unitPrice: number;
  unit: string;
  taxRate: number;
  discountRate: number;
  discountedPrice: number;
  taxExcludedPrice: number;
  taxIncludedPrice: number;
  consumptionTax: number;
  applyPeriodFrom?: string;
  applyPeriodTo?: string;
  note?: string;
};

// 単価明細コンポーネント
const PriceDetail: React.FC<PriceDetailProps> = ({
  priceCode,
  priceName,
  unitPrice,
  unit,
  taxRate,
  discountRate,
  discountedPrice,
  taxExcludedPrice,
  taxIncludedPrice,
  consumptionTax,
  applyPeriodFrom,
  applyPeriodTo,
  note,
}) => {
  return (
    <Container>
      <h3>単価明細</h3>
      <Table>
        <tbody>
          <tr>
            <HeaderCell>単価コード</HeaderCell>
            <DataCell>{priceCode}</DataCell>
            <HeaderCell>単価名称</HeaderCell>
            <DataCell>{priceName}</DataCell>
          </tr>
          <tr>
            <HeaderCell>単価</HeaderCell>
            <DataCell>{unitPrice.toLocaleString()}</DataCell>
            <HeaderCell>単位</HeaderCell>
            <DataCell>{unit}</DataCell>
          </tr>
          <tr>
            <HeaderCell colSpan={2}>
              <h4>税抜</h4>
              <PriceRow>
                <PriceCell>{taxExcludedPrice.toLocaleString()}</PriceCell>
                <PriceCell>{discountedPrice.toLocaleString()}</PriceCell>
                <PriceCell>{consumptionTax.toLocaleString()}</PriceCell>
              </PriceRow>
            </HeaderCell>
            <HeaderCell colSpan={2}>
              <h4>税込</h4>
              <PriceRow>
                <PriceCell>{taxIncludedPrice.toLocaleString()}</PriceCell>
                <PriceCell>{taxIncludedPrice.toLocaleString()}</PriceCell>
                <PriceCell>{consumptionTax.toLocaleString()}</PriceCell>
              </PriceRow>
            </HeaderCell>
          </tr>
          <tr>
            <HeaderCell>納入場所</HeaderCell>
            <DataCell colSpan={3}>{note}</DataCell>
          </tr>
          <tr>
            <HeaderCell>期限</HeaderCell>
            <DataCell colSpan={3}>
              {applyPeriodFrom} 〜 {applyPeriodTo}
            </DataCell>
          </tr>
          <tr>
            <HeaderCell colSpan={2}>
              <h4>洗札単価</h4>
              <PriceRow>
                <PriceCell>0.00</PriceCell>
                <PriceCell>0.00</PriceCell>
                <PriceCell>0.00</PriceCell>
              </PriceRow>
            </HeaderCell>
            <HeaderCell colSpan={2}>
              <h4>洗札総価</h4>
              <PriceRow>
                <PriceCell>0</PriceCell>
                <PriceCell>0</PriceCell>
                <PriceCell>0</PriceCell>
              </PriceRow>
            </HeaderCell>
          </tr>
        </tbody>
      </Table>
    </Container>
  );
};

// スタイリング
const Container = styled.div`
  font-family: sans-serif;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;

  th,
  td {
    border: 1px solid #ccc;
    padding: 8px;
  }
`;

const HeaderCell = styled.th`
  background-color: #f0f0f0;
  text-align: left;
  white-space: nowrap;
`;

const DataCell = styled.td``;

const PriceRow = styled.div`
  display: flex;
  justify-content: space-between;
`;

const PriceCell = styled.div`
  flex: 1;
  text-align: right;
`;

// 単価明細のサンプルデータ
const sampleData: PriceDetailProps = {
  priceCode: '000001',
  priceName: 'DIP(A1)精錬管',
  unitPrice: 75,
  unit: 'm',
  taxRate: 10.0,
  discountRate: 0.0,
  discountedPrice: 1500.0,
  taxExcludedPrice: 1620.0,
  taxIncludedPrice: 162.0,
  consumptionTax: 120.0,
  applyPeriodFrom: '2022年6月1日',
  applyPeriodTo: '2023年5月31日',
  note: '010 上下水道局',
};

// 単価明細コンポーネントの使用例
export const PriceDetailExample: React.FC = () => {
  return (
    <div>
      <h2>単価明細</h2>
      <PriceDetail {...sampleData} />
    </div>
  );
};

export default PriceDetail;