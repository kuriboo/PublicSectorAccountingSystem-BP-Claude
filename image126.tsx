以下は、画像のコンテンツを元に、Next.js + TypeScriptで実装したコンポーネントとサンプル使用コードです。

import React from 'react';
import styled from 'styled-components';

// Maskデータの型定義
type MaskData = {
  id: number;
  name: string;
  isFixedMask: boolean;
};

// コンポーネントのProps型定義
type MaskDataTableProps = {
  title: string;
  maskData: MaskData[];
};

// テーブルのスタイル
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

  @media screen and (max-width: 600px) {
    font-size: 14px;
  }
`;

// マスクデータテーブルコンポーネント
const MaskDataTable: React.FC<MaskDataTableProps> = ({ title, maskData }) => {
  return (
    <div>
      <h3>{title}</h3>
      <Table>
        <thead>
          <tr>
            <th>ID</th>
            <th>マスク名</th>
          </tr>
        </thead>
        <tbody>
          {maskData.map((data) => (
            <tr key={data.id}>
              <td>{data.id}</td>
              <td>{data.name}{data.isFixedMask ? '（年度情報、数コード有り）' : ''}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

// サンプルデータ
const sampleMaskData: MaskData[] = [
  { id: 1, name: '共通マスクA', isFixedMask: true },
  { id: 2, name: '共通マスクB', isFixedMask: false },
  { id: 3, name: '部門別マスクC', isFixedMask: true },
];

// サンプル使用コンポーネント
const SampleUsage: React.FC = () => {
  return (
    <div>
      <h2>固定資産マスタデータ抽出</h2>
      <MaskDataTable title="当期会計年度" maskData={sampleMaskData} />
      <MaskDataTable title="前期30年度" maskData={sampleMaskData} />
    </div>
  );
};

export default SampleUsage;

ポイント:
- Maskデータの型定義とコンポーネントのProps型定義を行っています。
- styled-componentsを使用してテーブルのスタイリングを行い、レスポンシブデザインを考慮しています。
- MaskDataTableコンポーネントは、タイトルとマスクデータの配列をプロパティとして受け取り、テーブルを描画します。
- マスクデータが空の場合でもエラーにならないよう、条件付きレンダリングを行っています。
- サンプルデータとサンプル使用コンポーネントを同じファイル内に定義し、コンポーネントの使用例を示しています。