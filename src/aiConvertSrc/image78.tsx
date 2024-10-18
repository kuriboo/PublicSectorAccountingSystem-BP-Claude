import React from 'react';
import styled from '@emotion/styled';

type Industry = '工事' | '建築';
type Area = '東京都' | '大阪府' | '愛知県';

interface Company {
  no: string;
  industry: Industry;
  name: string;
  address: string;
  representative: string;
  capital: string;
  employee: string;
}

interface CompanyInfoProps {
  companies: Company[];
}

// スタイリング
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

const SearchArea = styled.div`
  margin-bottom: 16px;
`;

const CompanyInfo: React.FC<CompanyInfoProps> = ({ companies }) => {
  // 検索条件のステート
  const [searchIndustry, setSearchIndustry] = React.useState<Industry | ''>('');
  const [searchArea, setSearchArea] = React.useState<Area | ''>('');
  const [searchText, setSearchText] = React.useState('');

  // 検索条件に合致する企業を抽出
  const filteredCompanies = companies.filter((company) => {
    const matchIndustry = !searchIndustry || company.industry === searchIndustry;
    const matchArea = !searchArea || company.address.includes(searchArea);
    const matchText = !searchText || (
      company.no.includes(searchText) ||
      company.name.includes(searchText) ||
      company.address.includes(searchText) ||
      company.representative.includes(searchText)
    );
    return matchIndustry && matchArea && matchText;
  });

  return (
    <div>
      <h2>業者情報問合せ</h2>
      <SearchArea>
        <label>
          業種:
          <select value={searchIndustry} onChange={(e) => setSearchIndustry(e.target.value as Industry)}>
            <option value="">すべて</option>
            <option value="工事">工事</option>
            <option value="建築">建築</option>
          </select>
        </label>
        <label>
          地区:
          <select value={searchArea} onChange={(e) => setSearchArea(e.target.value as Area)}>
            <option value="">すべて</option>
            <option value="東京都">東京都</option>
            <option value="大阪府">大阪府</option>
            <option value="愛知県">愛知県</option>
          </select>
        </label>
        <label>
          業者名:
          <input type="text" value={searchText} onChange={(e) => setSearchText(e.target.value)} />  
        </label>
      </SearchArea>
      <Table>
        <thead>
          <tr>
            <th>No.</th>
            <th>業者コード</th>
            <th>業種区分</th>
            <th>業者名</th>
            <th>業者HP</th>
            <th>代表者名</th>
            <th>地区</th>
          </tr>
        </thead>
        <tbody>
          {filteredCompanies.map((company) => (
            <tr key={company.no}>
              <td>{company.no}</td>
              <td>{company.no}</td>
              <td>{company.industry}</td>
              <td>{company.name}</td>
              <td>{company.address}</td>
              <td>{company.representative}</td>
              <td>{company.capital}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

// サンプルデータ
const sampleCompanies: Company[] = [
  {
    no: '0000001111',
    industry: '工事',
    name: 'さょうせい工務店',
    address: 'キャピタルシティ',
    representative: '市内',
    capital: '市内',
    employee: '市内',
  },
  {
    no: '0000000008',
    industry: '工事',
    name: 'ぎょうせい建築',
    address: 'キャピタルシティ',
    representative: '行政 太郎',
    capital: '市内',
    employee: '市内',
  },
  // 他のサンプルデータ...
];

const App: React.FC = () => {
  return (
    <div>
      <CompanyInfo companies={sampleCompanies} />
    </div>
  );
};

export default App;