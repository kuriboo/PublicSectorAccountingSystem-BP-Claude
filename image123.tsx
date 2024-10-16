import React from 'react';
import styled from '@emotion/styled';

type MasterDataProps = {
  items: string[];
};

const MasterDataList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 10px;
`;

const MasterDataItem = styled.li`
  padding: 10px;
  background-color: #f0f0f0;
  border-radius: 5px;
  font-size: 14px;
`;

const MasterDataComponent: React.FC<MasterDataProps> = ({ items }) => {
  // 渡されたitemsが空の場合は何も表示しない
  if (!items || items.length === 0) {
    return null;
  }

  return (
    <MasterDataList>
      {items.map((item, index) => (
        <MasterDataItem key={index}>{item}</MasterDataItem>
      ))}
    </MasterDataList>
  );
};

// サンプルデータを用いた使用例
const SampleUsage: React.FC = () => {
  const sampleData = [
    '単価名称マスタ',
    '単価資料マスタ',
    '単価分類マスタ',
    '単価資材マスタ分類マスタ',
    '単価性質中分類マスタ',
    '単価性質小分類マスタ',
    '年度別単価値段マスタ',
    '固定資産マスタ',
    '固定資産明細マスタ',
    '会計区分マスタ',
    '部門マスタ',
    '職種マスタ',
    '固定資産自由設定項目',
    '住所マスタ',
    '債権内容マスタ',
    '財源マスタ',
    '固定資産所属システム管理マスタ',
  ];

  return (
    <div>
      <h2>固定資産マスターデータ取込</h2>
      <MasterDataComponent items={sampleData} />
    </div>
  );
};

export default SampleUsage;