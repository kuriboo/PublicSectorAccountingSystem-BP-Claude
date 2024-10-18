import React from 'react';
import styled from 'styled-components';

// 業者情報の型定義
type VendorInfo = {
  companyCode: string;
  companyName: string;
  postalCode: string;
  address: string;
  representativeName: string;
  capital: string;
};

// VendorSearchResultコンポーネントのProps型定義
type VendorSearchResultProps = {
  vendorList: VendorInfo[];
};

// テーブルのスタイル定義
const Table = styled.table`
  width: 100%;
  border-collapse: collapse;

  th, td {
    border: 1px solid #ddd;
    padding: 8px;
    text-align: left;
  }

  th {
    background-color: #f2f2f2;
  }
`;

// 検索条件のスタイル定義
const SearchCondition = styled.div`
  margin-bottom: 10px;

  label {
    margin-right: 10px;
  }

  select, input {
    padding: 5px;
    border-radius: 3px;
    border: 1px solid #ddd;
  }

  button {
    padding: 5px 10px;
    border-radius: 3px;
    border: none;
    background-color: #007bff;
    color: #fff;
    cursor: pointer;
  }
`;

// VendorSearchResultコンポーネント
const VendorSearchResult: React.FC<VendorSearchResultProps> = ({ vendorList }) => {
  // 例外処理：vendorListが空の場合は空の配列を使用
  const vendors = vendorList || [];

  return (
    <div>
      <h2>業者情報問合せ</h2>
      <SearchCondition>
        <label htmlFor="searchType">実績年度</label>
        <select id="searchType">
          <option value="">平成29</option>
        </select>
        <label htmlFor="keyword">地区</label>
        <select id="keyword">
          <option value="">001:市内</option>
        </select>
        <button type="button">表示</button>
      </SearchCondition>
      <Table>
        <thead>
          <tr>
            <th>No</th>
            <th>業者コード</th>
            <th>受付区分</th>
            <th>業者名</th>
            <th>業種/P</th>
            <th>代表者名</th>
            <th>地区</th>
          </tr>
        </thead>
        <tbody>
          {vendors.map((vendor, index) => (
            <tr key={vendor.companyCode}>
              <td>{index + 1}</td>
              <td>{vendor.companyCode}</td>
              <td>工事</td>
              <td>{vendor.companyName}</td>
              <td>キーw・セイサクティ</td>
              <td>{vendor.representativeName}</td>
              <td>市内</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

// サンプルデータを用いた使用例
const sampleVendorList: VendorInfo[] = [
  {
    companyCode: '0000001111',
    companyName: 'さようせい工務店',
    postalCode: '123-4567',
    address: '東京都港区1-2-3',
    representativeName: '佐藤 太郎',
    capital: '1000万円',
  },
  {
    companyCode: '0000001112',
    companyName: 'きょうせい建設',
    postalCode: '987-6543',
    address: '大阪府大阪市北区1-2-3',
    representativeName: '鈴木 一郎',
    capital: '5000万円',
  },
];

const App: React.FC = () => {
  return (
    <div>
      <VendorSearchResult vendorList={sampleVendorList} />
    </div>
  );
};

export default App;