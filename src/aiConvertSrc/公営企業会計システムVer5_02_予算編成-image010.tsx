import React from 'react';
import styled from '@emotion/styled';

// 予算編成登録状況照会のプロパティ型定義
interface BudgetInquiryProps {
  title: string;
  data: {
    [key: string]: string;
  }[];
}

// テーブルのスタイル定義
const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  th,
  td {
    border: 1px solid #ccc;
    padding: 8px;
    text-align: left;
  }
  th {
    background-color: #f2f2f2;
  }
`;

/**
 * 予算編成登録状況照会コンポーネント
 */
const BudgetInquiry: React.FC<BudgetInquiryProps> = ({ title, data }) => {
  return (
    <div>
      <h2>{title}</h2>
      <Table>
        <thead>
          <tr>
            <th>予算編成区分</th>
            <th>要求/査定</th>
            <th>状況</th>
            <th>所属</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item['予算編成区分'] || '-'}</td>
              <td>{item['要求/査定'] || '-'}</td>
              <td>{item['状況'] || '-'}</td>
              <td>{item['所属'] || '-'}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

// サンプルデータ
const sampleData = [
  {
    予算編成区分: '補正1号',
    '要求/査定': '見積要求',
    状況: '見積締',
    所属: '下水道課',
  },
  {
    予算編成区分: '補正1号',
    '要求/査定': '見積要求',
    状況: '見積締',
    所属: '農業集落排水',
  },
  {
    予算編成区分: '補正1号',
    '要求/査定': '見積要求',
    状況: '見積締',
    所属: '管理者権限',
  },
  {
    予算編成区分: '補正1号',
    '要求/査定': '査定1回目',
    状況: '入力中',
    所属: '下水道課',
  },
  {
    予算編成区分: '補正1号',
    '要求/査定': '査定1回目',
    状況: '入力中',
    所属: '農業集落排水',
  },
  {
    予算編成区分: '補正1号',
    '要求/査定': '査定1回目',
    状況: '未入力',
    所属: '管理者権限',
  },
  {
    予算編成区分: '補正2号',
    '要求/査定': '見積要求',
    状況: '未入力',
    所属: '-',
  },
  {
    予算編成区分: '補正3号',
    '要求/査定': '見積要求',
    状況: '未入力',
    所属: '-',
  },
];

/**
 * 予算編成登録状況照会コンポーネントの表示例
 */
const BudgetInquiryExample = () => {
  return <BudgetInquiry title="予算編成登録状況照会" data={sampleData} />;
};

export default BudgetInquiryExample;