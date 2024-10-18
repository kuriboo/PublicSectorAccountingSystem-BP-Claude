import React from 'react';
import styled from '@emotion/styled';

type ProductionAdjustmentSystemProps = {
  productionNumber: string;
  productionDate: string;
  department: string;
  responsible: string;
  telephone: string;
  deliveryDate: string;
  orderNumber: string;
  totalRevenue: number;
  expenses: number;
  grossProfit: number;
  grossMargin: number;
  adjustmentItems: {
    date: string;
    description: string;
    amount: number;
  }[];
  calculationItems: {
    name: string;
    amount: number;
  }[];
  summary: {
    totalRevenue: number;
    grossProfit: number;
    operatingProfit: number;
    ordinaryProfit: number;
    incomeBeforeTax: number;
    netIncome: number;
  };
};

const Container = styled.div`
  font-family: Arial, sans-serif;
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;
`;

const HeaderCell = styled.th`
  background-color: #f0f0f0;
  padding: 10px;
  text-align: left;
  border: 1px solid #ccc;
`;

const Cell = styled.td`
  padding: 10px;
  border: 1px solid #ccc;
`;

const Title = styled.h2`
  margin-bottom: 10px;
`;

const ProductionAdjustmentSystem: React.FC<ProductionAdjustmentSystemProps> = ({
  productionNumber,
  productionDate,
  department,
  responsible,
  telephone,
  deliveryDate,
  orderNumber,
  totalRevenue,
  expenses,
  grossProfit,
  grossMargin,
  adjustmentItems,
  calculationItems,
  summary,
}) => {
  return (
    <Container>
      <Title>更正資産対象登録</Title>
      <Table>
        <tbody>
          <tr>
            <HeaderCell>資産番号</HeaderCell>
            <Cell>{productionNumber}</Cell>
          </tr>
          <tr>
            <HeaderCell>資産名称</HeaderCell>
            <Cell>{orderNumber}</Cell>
          </tr>
          <tr>
            <HeaderCell>所在地</HeaderCell>
            <Cell>行政県行政市行政区74807000番地</Cell>
          </tr>
          <tr>
            <HeaderCell>摘要</HeaderCell>
            <Cell>経営物自動車 999</Cell>
          </tr>
        </tbody>
      </Table>

      <Table>
        <tbody>
          <tr>
            <HeaderCell>更正年月日</HeaderCell>
            <Cell>{productionDate}</Cell>
            <HeaderCell>撤去</HeaderCell>
            <Cell>水道施設管理センター</Cell>
          </tr>
          <tr>
            <HeaderCell>部門</HeaderCell>
            <Cell>{department}</Cell>
            <HeaderCell>所属</HeaderCell>
            <Cell>管理全課所</Cell>
          </tr>
          <tr>
            <HeaderCell>取得年月日</HeaderCell>
            <Cell>{deliveryDate}</Cell>
            <HeaderCell>取得価額</HeaderCell>
            <Cell>{totalRevenue.toLocaleString()}</Cell>
          </tr>
          <tr>
            <HeaderCell>償却方法</HeaderCell>
            <Cell>定額法</Cell>
            <HeaderCell>償却除外額</HeaderCell>
            <Cell>{expenses.toLocaleString()}</Cell>
          </tr>
          <tr>
            <HeaderCell>明細区分</HeaderCell>
            <Cell>管理全課所</Cell>
            <HeaderCell>償却累計額</HeaderCell>
            <Cell>{grossProfit.toLocaleString()}</Cell>
          </tr>
          <tr>
            <HeaderCell>帳簿価額</HeaderCell>
            <Cell>{grossMargin.toLocaleString()}</Cell>
          </tr>
        </tbody>
      </Table>

      <Title>更正区分</Title>
      <label>
        <input type="radio" name="adjustmentType" value="removed" /> 一部除去
      </label>
      <label>
        <input type="radio" name="adjustmentType" value="updated" /> 一部科目更正
      </label>

      <Title>更新摘要</Title>
      <p>一部科目更正</p>

      <Title>現在科目</Title>
      <Table>
        <thead>
          <tr>
            <HeaderCell>科目名</HeaderCell>
            <HeaderCell>取得価額</HeaderCell>
          </tr>
        </thead>
        <tbody>
          {adjustmentItems.map((item, index) => (
            <tr key={index}>
              <Cell>{item.description}</Cell>
              <Cell>{item.amount.toLocaleString()}</Cell>
            </tr>
          ))}
        </tbody>
      </Table>

      <Title>更正後摘要</Title>
      <Table>
        <thead>
          <tr>
            <HeaderCell>科目名</HeaderCell>
            <HeaderCell>取得価額</HeaderCell>
          </tr>
        </thead>
        <tbody>
          {adjustmentItems.map((item, index) => (
            <tr key={index}>
              <Cell>{item.description}</Cell>
              <Cell>{item.amount.toLocaleString()}</Cell>
            </tr>
          ))}
        </tbody>
      </Table>

      <Title>現在帳簿原価</Title>
      <p>{totalRevenue.toLocaleString()}</p>
      <Title>更正後帳簿原価</Title>
      <p>{(totalRevenue - expenses).toLocaleString()}</p>

      <Title>現在償却除外額</Title>
      <p>{expenses.toLocaleString()}</p>
      <Title>更正後償却除外額</Title>
      <p>0</p>

      <Title>計上前</Title>
      <Table>
        <tbody>
          {calculationItems.map((item, index) => (
            <tr key={index}>
              <HeaderCell>{item.name}</HeaderCell>
              <Cell>{item.amount.toLocaleString()}</Cell>
            </tr>
          ))}
        </tbody>
      </Table>

      <Title>計上後</Title>
      <Table>
        <tbody>
          {calculationItems.map((item, index) => (
            <tr key={index}>
              <HeaderCell>{item.name}</HeaderCell>
              <Cell>{item.amount.toLocaleString()}</Cell>
            </tr>
          ))}
          <tr>
            <HeaderCell>経過年数</HeaderCell>
            <Cell>11</Cell>
          </tr>
          <tr>
            <HeaderCell>償却累計額</HeaderCell>
            <Cell>{summary.grossProfit.toLocaleString()}</Cell>
            <HeaderCell>{summary.grossProfit.toLocaleString()}</HeaderCell>
          </tr>
          <tr>
            <HeaderCell>年間償却額</HeaderCell>
            <Cell>0</Cell>
            <HeaderCell>{Math.round(summary.grossProfit / 11).toLocaleString()}</HeaderCell>
          </tr>
          <tr>
            <HeaderCell>過年度修正損益</HeaderCell>
            <Cell>{summary.incomeBeforeTax.toLocaleString()}</Cell>
          </tr>
        </tbody>
      </Table>
    </Container>
  );
};

export default ProductionAdjustmentSystem;

// サンプルデータを用いた使用例
const sampleData: ProductionAdjustmentSystemProps = {
  productionNumber: '7480700',
  productionDate: '平成28年09月13日',
  department: '工務',
  responsible: '水道施設管理センター',
  telephone: '999',
  deliveryDate: '平成21年09月01日',
  orderNumber: '行政県行政市行政区74807000番地',
  totalRevenue: 1300000,
  expenses: 65000,
  grossProfit: 1235000,
  grossMargin: 95,
  adjustmentItems: [
    { date: '05/01/0001', description: '車両運賃費', amount: 1300000 },
    { date: '05/01/0001', description: '車両運賃費', amount: 0 },
  ],
  calculationItems: [
    { name: '耐用年数', amount: 4 },
    { name: '償却率', amount: 25 },
    { name: '経過年数', amount: 11 },
  ],
  summary: {
    totalRevenue: 1235000,
    grossProfit: 1235000,
    operatingProfit: 0,
    ordinaryProfit: 0,
    incomeBeforeTax: 863750,
    netIncome: 863750,
  },
};

const App: React.FC = () => {
  return (
    <div>
      <h1>生産調整システムサンプル</h1>
      <ProductionAdjustmentSystem {...sampleData} />
    </div>
  );
};

export default App;