import React from 'react';
import styled from 'styled-components';

// 結果データの型定義
type ResultData = {
  連続症例数: number;
  確率低下障害: number;
  事務手数: number;
  その他: number;
  派遣単価: number;
  派遣費: number;
  拘束時間: number;
  緊急費用: number;
  営業費用: number;
  ○○事業: number;
  印刷製本費: number;
  電子器材費: number;
  (ボトル・溶媒代): number;
};

// カスタムテーブルコンポーネントのプロパティ
type CustomTableProps = {
  data: ResultData[];
};

// カスタムテーブルコンポーネント
const CustomTable: React.FC<CustomTableProps> = ({ data }) => {
  // 項目名とキーのマッピング
  const headerMapping = [
    { label: '連続症例数', key: '連続症例数' },
    { label: '確率低下障害', key: '確率低下障害' },
    { label: '事務手数', key: '事務手数' },
    { label: 'その他', key: 'その他' },
    { label: '派遣単価', key: '派遣単価' },
    { label: '派遣費', key: '派遣費' },
    { label: '拘束時間', key: '拘束時間' },
    { label: '緊急費用', key: '緊急費用' },
    { label: '営業費用', key: '営業費用' },
    { label: '○○事業', key: '○○事業' },
    { label: '印刷製本費', key: '印刷製本費' },
    { label: '電子器材費', key: '電子器材費' },
    { label: '(ボトル・溶媒代)', key: '(ボトル・溶媒代)' },
  ];

  return (
    <TableWrapper>
      <Table>
        <thead>
          <tr>
            {headerMapping.map((item) => (
              <th key={item.key}>{item.label}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              {headerMapping.map((item) => (
                <td key={item.key}>{row[item.key] || '-'}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </Table>
    </TableWrapper>
  );
};

// スタイリング
const TableWrapper = styled.div`
  overflow-x: auto;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;

  th,
  td {
    padding: 8px;
    text-align: right;
    border: 1px solid #ccc;
  }

  th {
    background-color: #f0f0f0;
  }

  @media screen and (max-width: 600px) {
    th,
    td {
      padding: 4px;
      font-size: 12px;
    }
  }
`;

// サンプルデータ
const sampleData: ResultData[] = [
  {
    連続症例数: 4,
    確率低下障害: 1,
    事務手数: 1,
    その他: 1,
    派遣単価: 2000000,
    派遣費: 2000000,
    拘束時間: 2000000,
    緊急費用: 100000,
    営業費用: 100000,
    ○○事業: 1000,
    印刷製本費: 1000,
    電子器材費: 1000,
    "(ボトル・溶媒代)": 80,
  },
  // ... more sample data
];

// コンポーネントの使用例
const ResultTable: React.FC = () => {
  return (
    <div>
      <h2>Result Table</h2>
      <CustomTable data={sampleData} />
    </div>
  );
};

export default ResultTable;