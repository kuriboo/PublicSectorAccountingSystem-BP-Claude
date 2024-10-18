import React from 'react';
import styled from '@emotion/styled';

// 流用補正区分の型定義
type FlowCorrectionType = '未処理' | '補正予算反映済' | '補正追加+流用戻し' | '流用反し済' | '流用戻し済';

// テーブル内の各行の型定義
interface TableRowData {
  id: string;
  name: string;
  budget: number;
  estimatedDate: string;
  flowCorrectionType: FlowCorrectionType;
}

// コンポーネントのPropsの型定義
interface FlowCorrectionTableProps {
  data: TableRowData[];
}

// テーブルのスタイル定義
const Table = styled.table`
  width: 100%;
  border-collapse: collapse;

  th, td {
    border: 1px solid #ccc;
    padding: 8px;
    text-align: left;
  }

  th {
    background-color: #f2f2f2;
  }

  @media (max-width: 600px) {
    th, td {
      display: block;
      width: 100%;
    }
    
    tr {
      margin-bottom: 16px;
    }
  }
`;

// 流用補正区分の表示色を決定する関数
const getFlowCorrectionColor = (type: FlowCorrectionType) => {
  switch (type) {
    case '未処理':
      return '#000';
    case '補正予算反映済':
      return '#00f';
    case '補正追加+流用戻し':
    case '流用反し済':
    case '流用戻し済':
      return '#f00';
    default:
      return '#000';
  }
};

// メインのコンポーネント
const FlowCorrectionTable: React.FC<FlowCorrectionTableProps> = ({ data }) => {
  return (
    <Table>
      <thead>
        <tr>
          <th>区分</th>
          <th>流用補正累計日</th>
          <th>名称</th>
          <th>所属</th>
          <th>流用補正額</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row) => (
          <tr key={row.id}>
            <td>{row.name}</td>
            <td>{row.estimatedDate}</td>
            <td>{row.name}</td>
            <td>下水道課</td>
            <td style={{ color: getFlowCorrectionColor(row.flowCorrectionType) }}>
              {row.budget.toLocaleString()}
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

// サンプルデータ
const sampleData: TableRowData[] = [
  {
    id: '0030106190009100',
    name: '運転管理業託',
    budget: 191000,
    estimatedDate: '20010619',
    flowCorrectionType: '下水道課' as FlowCorrectionType,
  },
  {
    id: '0030106190009100',
    name: '汚泥運搬委託',
    budget: 180000,
    estimatedDate: '20010619',
    flowCorrectionType: '下水道課' as FlowCorrectionType,
  },
];

// 表示用のコンポーネント
const App: React.FC = () => {
  return (
    <div>
      <h2>流用補正データ一覧</h2>
      <FlowCorrectionTable data={sampleData} />
    </div>
  );
};

export default App;