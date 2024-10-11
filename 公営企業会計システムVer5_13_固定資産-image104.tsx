import React from 'react';
import styled from '@emotion/styled';

// 型定義
interface AssetDetail {
  assetCode: string;
  assetName: string;
  place: string;
  quantity: number;
  unit: string;
  unitPrice: number;
  amount: number;
}

interface AssetManagementFormProps {
  assetDetails: AssetDetail[];
}

// スタイル定義
const FormWrapper = styled.div`
  width: 100%;
  overflow-x: auto;
`;

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
`;

const PriceCell = styled.td`
  text-align: right;
`;

// メインコンポーネント
const AssetManagementForm: React.FC<AssetManagementFormProps> = ({ assetDetails }) => {
  // 合計金額の計算
  const totalAmount = assetDetails.reduce((sum, detail) => sum + detail.amount, 0);

  return (
    <FormWrapper>
      <Table>
        <thead>
          <tr>
            <th>資産コード</th>
            <th>資産名称</th>
            <th>管理台帳</th>
            <th>管理様格合計</th>
            <th>異動数量</th>
            <th>単位</th>
            <th>異動金額</th>
          </tr>
        </thead>
        <tbody>
          {assetDetails.map((detail, index) => (
            <tr key={index}>
              <td>{detail.assetCode}</td>
              <td>{detail.assetName}</td>
              <td>{detail.place}</td>
              <PriceCell>{detail.quantity}</PriceCell>
              <PriceCell>{detail.unitPrice.toLocaleString()}</PriceCell>
              <td>{detail.unit}</td>
              <PriceCell>{detail.amount.toLocaleString()}</PriceCell>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan={6}>異動管理明細合計</td>
            <PriceCell>{totalAmount.toLocaleString()}</PriceCell>
          </tr>
        </tfoot>
      </Table>
    </FormWrapper>
  );
};

// サンプルデータ
const sampleData: AssetDetail[] = [
  {
    assetCode: '300620',
    assetName: '新幸村遠藤藤行(リコー製)',
    place: '東口空車上置一式',
    quantity: 1.0,
    unit: '個',
    unitPrice: 100000,
    amount: 2500000,
  },
  {
    assetCode: '300685',
    assetName: 'タクタイル標識短管1号',
    place: 'φ100',
    quantity: 1.0,
    unit: '個',
    unitPrice: 1000,
    amount: 2000000,
  },
  {
    assetCode: '300640',
    assetName: '仕切弁蓋',
    place: 'φ600',
    quantity: 5.0,
    unit: '基',
    unitPrice: 500,
    amount: 1550000,
  },
];

// 使用例
const AssetManagementFormExample: React.FC = () => {
  return <AssetManagementForm assetDetails={sampleData} />;
};

export default AssetManagementFormExample;