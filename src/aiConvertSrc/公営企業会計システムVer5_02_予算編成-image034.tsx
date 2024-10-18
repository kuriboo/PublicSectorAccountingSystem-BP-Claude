import React from 'react';
import styled from 'styled-components';

// 補正科目別見積要求登録の型定義
type SupplementaryBudgetEstimateProps = {
  data: {
    year: number;
    departmentName: string;
    departmentCode: string;
    expenseName: string;
    expenseCode: string;
    responsiblePerson: string;
    auditor: string;
    totalAmount: number;
    tax: number;
    taxIncluded: number;
    requestReason: string;
    items: {
      no: number;
      item: string;
      quantity: number;
      unitPrice: number;
      amount: number;
      necessity: '必要' | '不要';
    }[];
  };
};

// スタイル定義
const Container = styled.div`
  font-family: sans-serif;
  padding: 16px;

  h2 {
    text-align: center;
  }

  table {
    width: 100%;
    border-collapse: collapse;
    
    th, td {
      border: 1px solid #ccc;
      padding: 8px;
    }

    th {
      background: #f0f0f0;
    }
  }

  .summary {
    margin-top: 16px;

    dl {
      display: flex;
      flex-wrap: wrap;

      dt {
        width: 30%;
      }
    }
  }
`;

// 補正科目別見積要求登録コンポーネント
const SupplementaryBudgetEstimate: React.FC<SupplementaryBudgetEstimateProps> = ({ data }) => {
  // 必要なデータが揃っていない場合はエラーを表示
  if (!data || !data.items || data.items.length === 0) {
    return <div>データが不足しています。</div>;
  }

  // 各項目の合計額を計算
  const totalByItem = data.items.reduce((acc, item) => acc + item.amount, 0);

  return (
    <Container>
      <h2>補正科目別見積要求登録</h2>
      <div>
        <p>登録日: {data.year}年{data.departmentName}</p>
        <p>部署コード: {data.departmentCode}</p>
        <p>部署名: {data.expenseName}</p>
        <p>経費コード: {data.expenseCode}</p>
      </div>
      <div className="summary">
        <p>予算計上調整額: {data.totalAmount.toLocaleString()}円</p>
        <dl>
          <dt>補正前</dt><dd>{data.totalAmount.toLocaleString()}円</dd>
          <dt>税抜</dt><dd>{data.totalAmount.toLocaleString()}円</dd>
          <dt>消費税</dt><dd>{data.tax.toLocaleString()}円</dd>
          <dt>補正後</dt><dd>{data.taxIncluded.toLocaleString()}円</dd>
        </dl>
        <p>必要理由: {data.requestReason}</p>
      </div>  
      <table>
        <thead>
          <tr>
            <th>行番号</th>
            <th>積算基礎</th>
            <th>単価/数量</th>
            <th>単位</th>
            <th>金額(円)</th>
            <th>必要性</th>
          </tr>
        </thead>
        <tbody>
          {data.items.map((item) => (
            <tr key={item.no}>
              <td>{item.no}</td>
              <td>{item.item}</td>
              <td>{item.quantity}</td>
              <td>*</td>
              <td>{item.amount.toLocaleString()}</td>
              <td>{item.necessity}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p>積算合計: {totalByItem.toLocaleString()}円</p>
    </Container>
  );
};

export default SupplementaryBudgetEstimate;

// サンプルデータ
const sampleData = {
  year: 2022,
  departmentName: '営業部',
  departmentCode: '0001',
  expenseName: '電気工作物検査経費',
  expenseCode: '000001019',
  responsiblePerson: '鈴木',
  auditor: '経常',
  totalAmount: 38400,
  tax: 7637,
  taxIncluded: 39400,
  requestReason: '定期点検が必要なため',
  items: [
    {
      no: 10,
      item: '5年度当初予算',
      quantity: 30000000,
      unitPrice: 1,
      amount: 30000000,
      necessity: '必要'
    },
    {
      no: 15,
      item: '令和5年度補正予算',
      quantity: 8400000,
      unitPrice: 1,
      amount: 8400000,
      necessity: '必要'
    }
  ]
};

// サンプルコンポーネント
const SampleComponent = () => (
  <SupplementaryBudgetEstimate data={sampleData} />
);