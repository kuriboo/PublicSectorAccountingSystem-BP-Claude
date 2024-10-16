import React from 'react';
import styled from 'styled-components';

// 型定義
type SegmentMasterProps = {
  data: {
    businessType: string;
    segmentCode: string;
    segmentName: string;
    parentSegmentCode: string;
    parentSegmentName: string;
    remarks: string;
  }[];
};

// スタイル定義
const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  th, td {
    border: 1px solid #ccc;
    padding: 8px;
    text-align: left;
  }
  th {
    background-color: #f0f0f0;
  }
`;

const SegmentMasterCode: React.FC<SegmentMasterProps> = ({ data }) => {
  // 値が入っていない場合の処理
  if (!data || data.length === 0) {
    return <div>データがありません。</div>;
  }

  return (
    <Table>
      <thead>
        <tr>
          <th>業種・事業</th>
          <th>施設</th>
          <th>決算セグメント</th>
          <th>施設決算セグメント</th>
          <th>名称</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <td>{item.businessType}</td>
            <td>{item.segmentCode}</td>
            <td>{item.segmentName}</td>
            <td>{item.parentSegmentCode}</td>
            <td>{item.parentSegmentName}</td>
            <td>{item.remarks}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

// サンプルデータ
const sampleData = [
  {
    businessType: '水道事業・簡易水道事業',
    segmentCode: '上水道',
    segmentName: '01000101',
    parentSegmentCode: '未端給水',
    parentSegmentName: '未端給水-上水',
    remarks: '',
  },
  {
    businessType: '水道事業・簡易水道事業',
    segmentCode: '簡易水道',
    segmentName: '01000102',
    parentSegmentCode: '未端給水',
    parentSegmentName: '未端給水-簡水',
    remarks: '',
  },
  {
    businessType: '水道事業・簡易水道事業',
    segmentCode: 'その他',
    segmentName: '01000199',
    parentSegmentCode: '未端給水',
    parentSegmentName: '未端給水-その他',
    remarks: '',
  },
];

// 使用例
const App: React.FC = () => {
  return (
    <div>
      <h1>施設決統セグメントマスタ</h1>
      <SegmentMasterCode data={sampleData} />
    </div>
  );
};

export default App;