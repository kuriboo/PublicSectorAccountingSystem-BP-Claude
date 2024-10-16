import React from 'react';
import styled from 'styled-components';

// 管理部署の型定義
type DepartmentType = {
  code: string;
  name: string;
}

// コンポーネントのプロパティの型定義
type Props = {
  data: {
    code: string;
    name: string;
    departments: DepartmentType[];
  }[];
}

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
    font-size: 12px;
  }
`;

const AssetManagementTable: React.FC<Props> = ({ data }) => {
  if (!data || data.length === 0) {
    return <div>No data available</div>;
  }

  return (
    <Table>
      <thead>
        <tr>
          <th>アセットマネジメント項目コード</th>
          <th>項目番号</th>
          <th>管理部署（複数可）</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <td>{item.code}</td>
            <td>{item.name}</td>
            <td>
              {item.departments.map((dept, i) => (
                <React.Fragment key={i}>
                  {dept.code} {dept.name}
                  {i < item.departments.length - 1 ? <br /> : null}
                </React.Fragment>
              ))}
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

// サンプルデータ
const sampleData = [
  {
    code: '9113',
    name: 'アセットマネジメント項目マスタ',
    departments: [
      { code: '020110', name: '区分コード' },
      { code: '020110', name: '工種コード' },
      { code: '020110', name: '実施年度' },
      { code: '020110', name: '時間計画（朱全重変更コード）' },
      { code: '020201', name: '時間計画（朱全重変更コード）' },
      { code: '020200', name: '場所コード' },
      // 以下省略
    ],
  },
  // 以下省略
];

// 使用例
const App: React.FC = () => {
  return (
    <div>
      <h1>Asset Management Table</h1>
      <AssetManagementTable data={sampleData} />
    </div>
  );
};

export default App;