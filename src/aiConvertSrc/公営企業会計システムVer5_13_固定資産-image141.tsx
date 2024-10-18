import React from 'react';
import styled from '@emotion/styled';

type Item = {
  code: string;
  name: string;
};

type Props = {
  items: Item[];
};

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  font-size: 14px;

  th,
  td {
    padding: 8px;
    text-align: left;
    border-bottom: 1px solid #ddd;
  }

  th {
    background-color: #f2f2f2;
  }

  tr:hover {
    background-color: #f5f5f5;
  }

  @media (max-width: 600px) {
    font-size: 12px;

    th,
    td {
      padding: 6px;
    }
  }
`;

const ItemList: React.FC<Props> = ({ items }) => {
  return (
    <Table>
      <thead>
        <tr>
          <th>コード</th>
          <th>項目名</th>
        </tr>
      </thead>
      <tbody>
        {items.map((item) => (
          <tr key={item.code}>
            <td>{item.code}</td>
            <td>{item.name}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

// サンプルデータを用いた使用例
const sampleData: Item[] = [
  { code: '001001', name: '事務用/消耗品' },
  { code: '001002', name: '作業用/消耗品' },
  { code: '001003', name: '施設管理用/消耗品' },
  { code: '001004', name: '機械器具用/消耗品' },
  { code: '001006', name: '新聞購読費' },
  { code: '001007', name: '自動車用/消耗品' },
  { code: '001008', name: '自動車用/消耗品(維持修繕費)' },
  { code: '001009', name: '水質試験用/消耗品' },
  { code: '001020', name: '水質試験' },
  { code: '001091', name: 'その他(庁)/消耗品' },
  { code: '001100', name: '車両用燃料' },
  { code: '001129', name: '冠婚葬祭費' },
  { code: '001103', name: '機械器具用燃料' },
  { code: '001161', name: '耕水作業委託料１/市' },
  { code: '001191', name: 'その他燃料費' },
  { code: '001201', name: '施設管理委託料' },
  { code: '001202', name: '自記録水圧計電気料金' },
  { code: '001203', name: '下水道料金' },
  { code: '001300', name: '空気弁修繕費' },
];

const App: React.FC = () => {
  return (
    <div>
      <h2>摘要検索文字</h2>
      <ItemList items={sampleData} />
    </div>
  );
};

export default App;