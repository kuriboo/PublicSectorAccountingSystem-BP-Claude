import React from 'react';
import styled from '@emotion/styled';

type Props = {
  data: {
    unitCode: string;
    managementFee: number;
    currentFixedPropertyTax: string;
    plannedFixedPropertyTax: string;
    currentCityPlanningTax: string;
    plannedCityPlanningTax: string;
  };
};

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  
  th, td {
    border: 1px solid #ccc;
    padding: 8px;
    text-align: center;
  }

  th {
    background-color: #f2f2f2;
  }
`;

const RegistrationTaxTable: React.FC<Props> = ({ data }) => {
  // 必須項目のチェック
  if (!data.unitCode || !data.managementFee) {
    return <div>必須データが不足しています。</div>;
  }

  return (
    <Table>
      <tbody>
        <tr>
          <th>単価コード</th>
          <td>{data.unitCode}</td>
        </tr>
        <tr>
          <th>管理名称</th>
          <td>DIP(A1)精算管</td>
        </tr>
        <tr>
          <th>管理規格</th>
          <td>{data.managementFee}</td>
        </tr>
        <tr>
          <th>固定資産税</th>
          <td>{data.currentFixedPropertyTax || '-'}</td>
          <td>{data.plannedFixedPropertyTax || '-'}</td>
        </tr>
        <tr>
          <th>固定資産都市計画税</th>
          <td>{data.currentCityPlanningTax || '-'}</td>
          <td>{data.plannedCityPlanningTax || '-'}</td>
        </tr>
      </tbody>
    </Table>
  );
};

// サンプルデータを用いた使用例
const SampleUsage: React.FC = () => {
  const sampleData = {
    unitCode: '999000',
    managementFee: 0.75,
    currentFixedPropertyTax: '水利権',
    plannedFixedPropertyTax: '水利権',
    currentCityPlanningTax: '水利権001',
    plannedCityPlanningTax: '水利権001',
  };

  return (
    <div>
      <h2>登録税一覧表</h2>
      <RegistrationTaxTable data={sampleData} />
    </div>
  );
};

export default RegistrationTaxTable;