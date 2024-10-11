import React from 'react';
import styled from 'styled-components';

// 財源情報の型定義
type FinancialResourceType = {
  name: string;
  amount: number;
  taxRate: number;
};

// コンポーネントのプロパティの型定義
type FinancialAllocationProps = {
  totalAmount: number;
  remainingAmount: number;
  financialResources: FinancialResourceType[];
};

// 財源情報を表示するコンポーネント
const FinancialResourceDisplay: React.FC<{ resource: FinancialResourceType }> = ({ resource }) => (
  <tr>
    <td>{resource.name}</td>
    <td>{resource.amount.toLocaleString()}</td>
    <td>{resource.taxRate}</td>
    <td>{(resource.amount * resource.taxRate).toLocaleString()}</td>
  </tr>
);

// メインのコンポーネント
const FinancialAllocation: React.FC<FinancialAllocationProps> = ({
  totalAmount,
  remainingAmount,
  financialResources,
}) => {
  // 財源合計額を計算
  const totalResourceAmount = financialResources.reduce((sum, resource) => sum + resource.amount, 0);

  return (
    <Container>
      <Header>
        <span>取得価額</span>
        <Amount>{totalAmount.toLocaleString()}</Amount>
        <span>借知除外額</span>
        <Amount>{remainingAmount.toLocaleString()}</Amount>
      </Header>

      <Table>
        <thead>
          <tr>
            <th>財源コード</th>
            <th>財源名称</th>
            <th>積算単価</th>
            <th>財源金額</th>
          </tr>
        </thead>
        <tbody>
          {financialResources.map((resource, index) => (
            <FinancialResourceDisplay key={index} resource={resource} />
          ))}
        </tbody>
      </Table>

      <Footer>
        <label>
          財源コード
          <select>
            <option value="">自己財源</option>
            {/* 他の財源選択肢 */}
          </select>
        </label>
        <label>
          積算区分
          <select>
            <option value="">積算対象</option>
            {/* 他の積算区分選択肢 */}
          </select>
        </label>
        <span>財源金額</span>
        <Amount>{totalResourceAmount.toLocaleString()}</Amount>
        <Buttons>
          <button>行追加</button>
          <button>キャンセル</button>
        </Buttons>

        <Bar>
          <BarProgress width={(totalResourceAmount / totalAmount) * 100} />
          <BarText>
            {`${((totalResourceAmount / totalAmount) * 100).toFixed(1)}%`}
            <span>{totalResourceAmount.toLocaleString()}</span>
          </BarText>
        </Bar>
      </Footer>
    </Container>
  );
};

// サンプルデータを使用した表示例
const SampleFinancialAllocation: React.FC = () => {
  const sampleData: FinancialAllocationProps = {
    totalAmount: 500000,
    remainingAmount: 0,
    financialResources: [{ name: '自己財源', amount: 500000, taxRate: 1 }],
  };

  return <FinancialAllocation {...sampleData} />;
};

// スタイリング
const Container = styled.div`
  /* コンテナのスタイル */
`;

const Header = styled.header`
  /* ヘッダーのスタイル */
`;

const Amount = styled.span`
  /* 金額のスタイル */
`;

const Table = styled.table`
  /* テーブルのスタイル */
`;

const Footer = styled.footer`
  /* フッターのスタイル */
`;

const Buttons = styled.div`
  /* ボタンのスタイル */
`;

const Bar = styled.div`
  /* プログレスバーのスタイル */
`;

const BarProgress = styled.div<{ width: number }>`
  /* プログレスバーの進捗部分のスタイル */
  width: ${({ width }) => width}%;
`;

const BarText = styled.div`
  /* プログレスバーのテキストのスタイル */
`;

export default FinancialAllocation;