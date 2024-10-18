以下は、Next.js + TypeScriptを使用して、画像のような資産集計システムのコンポーネントを実装した例です。

import React from 'react';
import styled from 'styled-components';

// 資産集計のプロパティ型定義
interface AssetSummaryProps {
  code: string;
  fiscalYear: string;
  department: string;
  carryForwardAmount: number;
  currentFiscalYearAmount: number;
  totalAmount: number;
}

// スタイル定義
const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  th, td {
    border: 1px solid #ccc;
    padding: 8px;
    text-align: right;
  }
  th {
    background-color: #f0f0f0;
  }

  @media screen and (max-width: 600px) {
    font-size: 12px;
    th, td {
      padding: 4px;
    }
  }
`;

const Amount = styled.span`
  font-weight: bold;
`;

const Button = styled.button`
  padding: 4px 8px;
  margin-left: 8px;
`;

// 資産集計コンポーネント
const AssetSummary: React.FC<AssetSummaryProps> = ({
  code,
  fiscalYear,
  department,
  carryForwardAmount,
  currentFiscalYearAmount,
  totalAmount,
}) => {
  // 資産額の表示
  const renderAmount = (amount: number) => {
    return <Amount>{amount.toLocaleString()}</Amount>;
  };

  return (
    <div>
      <h2>財源別固定資産累計マスタ</h2>
      <p>
        資産番号: {code}<br />
        会計年度: {fiscalYear}<br /> 
        所属部署: {department}
      </p>
      
      <Table>
        <thead>
          <tr>
            <th>繰越原価</th>
            <th>当期増加額</th>
            <th>当期減少額</th>
            <th>期末残高</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{renderAmount(carryForwardAmount)}</td>
            <td>{renderAmount(currentFiscalYearAmount)}</td>
            <td>0</td>
            <td>{renderAmount(totalAmount)}</td>
          </tr>
        </tbody>
      </Table>

      <Button>編集</Button>
    </div>
  );
};

// サンプルデータを使用した表示例
const SampleAssetSummary: React.FC = () => {
  const sampleData: AssetSummaryProps = {
    code: '3002400',
    fiscalYear: '令和29年09月12日',
    department: '行政市町水道課',
    carryForwardAmount: 5000000,
    currentFiscalYearAmount: 0,
    totalAmount: 5000000,
  };

  return <AssetSummary {...sampleData} />;
};

export default SampleAssetSummary;

ポイント:
- AssetSummaryPropsでコンポーネントのプロパティを型定義
- styled-componentsを使ってスタイリング
- レスポンシブ対応のCSSを記述
- 数値の3桁区切り表示にtoLocaleString()を使用  
- サンプルデータを使った表示用のSampleAssetSummaryコンポーネントを実装
- プロパティが未定義の場合の処理は省略

以上、Next.js + TypeScriptで資産集計のUIをコンポーネント化した例でした。
実際のデータの受け渡しやイベントハンドリングなどは、アプリケーションの要件に合わせて実装する必要があります。