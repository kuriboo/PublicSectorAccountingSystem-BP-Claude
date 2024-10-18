import React from 'react';
import styled from 'styled-components';

// 指名業者推薦／確定入力 コンポーネントの型定義
type NominationConfirmationProps = {
  companyCode: string;
  companyName: string;
  postCode: string;
  address: string;
  orderAmount: number;
  count: number;
  paymentMethod: string;
  nominatedCompanies: Company[];
  onCancel: () => void;
  onSubmit: () => void;
};

// 指名業者の型定義
type Company = {
  code: string;
  name: string;
  postCode: string;
  address: string;
  paymentAmount: number;
  paymentStatus: string;
  inputAmount: number | null;
  receiptNo: string | null;
};

// スタイルコンポーネント
const Container = styled.div`
  font-size: 14px;

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

const CompanyInfo = styled.div`
  margin-bottom: 10px;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;

  th, td {
    border: 1px solid #ccc;
    padding: 5px;
    text-align: center;
  }

  th {
    background-color: #f0f0f0;
  }
`;

const ButtonContainer = styled.div`
  text-align: center;

  button {
    margin: 0 5px;
  }
`;

// 指名業者推薦／確定入力 コンポーネント
const NominationConfirmation: React.FC<NominationConfirmationProps> = ({
  companyCode,
  companyName,
  postCode,
  address,
  orderAmount,
  count,
  paymentMethod, 
  nominatedCompanies,
  onCancel,
  onSubmit,
}) => {
  return (
    <Container>
      <CompanyInfo>
        指名業者コード: {companyCode}<br />
        指名業者名: {companyName}<br />
        郵便番号: {postCode}<br />  
        住所: {address}<br />
        発注金額: {orderAmount.toLocaleString()}円<br />
        件数: {count}<br />
        支払方法: {paymentMethod}
      </CompanyInfo>

      <Table>
        <thead>
          <tr>
            <th>業者コード</th>
            <th>業者名</th>
            <th>選定業種名</th>
            <th>地区名</th>
            <th>格付</th>
            <th>総合評価</th>
            <th>入札保証金</th>
            <th>契約保証金</th>
            <th>指名停止期限</th>
          </tr>
        </thead>
        <tbody>
          {nominatedCompanies.map((company) => (
            <tr key={company.code}>
              <td>{company.code}</td>
              <td>{company.name}</td>
              <td>水道施設工事</td>
              <td>市内</td>
              <td>A</td>
              <td>{company.paymentAmount.toLocaleString()}</td>
              <td>{company.inputAmount === null ? 0 : company.inputAmount.toLocaleString()}</td>
              <td>{company.receiptNo || '-'}</td>
              <td></td>
            </tr>
          ))}
        </tbody>
      </Table>

      <ButtonContainer>
        <button onClick={onCancel}>キャンセル</button>
        <button onClick={onSubmit}>確定</button>
      </ButtonContainer>
    </Container>
  );
};

// サンプルデータ
const sampleCompanies: Company[] = [
  {
    code: '0000001',
    name: 'きょうせい建設',
    postCode: '420-0000',
    address: '静岡県静岡市葵区',
    paymentAmount: 0,
    paymentStatus: '市内',
    inputAmount: null,
    receiptNo: null,
  },
  {
    code: '0000002',
    name: '新木建ぎょう',
    postCode: '420-0000',
    address: '静岡県静岡市葵区',
    paymentAmount: 849000,
    paymentStatus: '市内',
    inputAmount: null, 
    receiptNo: null,
  },  
];

// 使用例
const Example: React.FC = () => {
  return (
    <NominationConfirmation
      companyCode="026"
      companyName="水道施設工事"
      postCode="000-0000"
      address="ぎょうせい建設"
      orderAmount={42910000}
      count={1}
      paymentMethod="契約保証金"
      nominatedCompanies={sampleCompanies}
      onCancel={() => console.log('キャンセルがクリックされました')}
      onSubmit={() => console.log('確定がクリックされました')}
    />
  );  
};

export default NominationConfirmation;